import { Directionality } from '@angular/cdk/bidi';
import { ESCAPE, UP_ARROW, hasModifierKey } from '@angular/cdk/keycodes';
import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NgTemplateOutlet } from '@angular/common';
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Injector,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  inject,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subject, Subscription, merge } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { TinyColor } from '@ctrl/tinycolor';
import { ColorEvent } from 'ngx-color';
import { ColorChromeModule } from 'ngx-color/chrome';
import { ColorFormat, MtxColorpickerInput } from './colorpicker-input';

/** Used to generate a unique ID for each colorpicker instance. */
let colorpickerUid = 0;

/** Injection token that determines the scroll handling while the panel is open. */
export const MTX_COLORPICKER_SCROLL_STRATEGY = new InjectionToken<() => ScrollStrategy>(
  'mtx-colorpicker-scroll-strategy',
  {
    providedIn: 'root',
    factory: () => {
      const overlay = inject(Overlay);
      return () => overlay.scrollStrategies.reposition();
    },
  }
);

/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
export function MTX_COLORPICKER_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {
  return () => overlay.scrollStrategies.reposition();
}

/** Possible positions for the colorpicker dropdown along the X axis. */
export type ColorpickerDropdownPositionX = 'start' | 'end';

/** Possible positions for the colorpicker dropdown along the Y axis. */
export type ColorpickerDropdownPositionY = 'above' | 'below';

/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
export const MTX_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MTX_COLORPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MTX_COLORPICKER_SCROLL_STRATEGY_FACTORY,
};

@Component({
  selector: 'mtx-colorpicker-content',
  templateUrl: './colorpicker-content.html',
  styleUrl: 'colorpicker-content.scss',
  host: {
    'class': 'mtx-colorpicker-content',
    '[class]': 'color ? "mat-" + color : ""',
    '[class.mtx-colorpicker-content-animations-enabled]': '!_animationsDisabled',
  },
  exportAs: 'mtxColorpickerContent',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ColorChromeModule, NgTemplateOutlet],
})
export class MtxColorpickerContent implements OnDestroy {
  protected _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  protected _animationsDisabled =
    inject(ANIMATION_MODULE_TYPE, { optional: true }) === 'NoopAnimations';
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _ngZone = inject(NgZone);

  private _eventCleanups: (() => void)[] | undefined;
  private _animationFallback: ReturnType<typeof setTimeout> | undefined;

  @Input() color: ThemePalette;

  picker!: MtxColorpicker;

  /** Emits when an animation has finished. */
  readonly _animationDone = new Subject<void>();

  /** Whether there is an in-progress animation. */
  _isAnimating = false;

  constructor() {
    if (!this._animationsDisabled) {
      const element = this._elementRef.nativeElement;
      const renderer = inject(Renderer2);
      this._eventCleanups = this._ngZone.runOutsideAngular(() => [
        renderer.listen(element, 'animationstart', this._handleAnimationEvent),
        renderer.listen(element, 'animationend', this._handleAnimationEvent),
        renderer.listen(element, 'animationcancel', this._handleAnimationEvent),
      ]);
    }
  }

  ngOnDestroy() {
    clearTimeout(this._animationFallback);
    this._eventCleanups?.forEach(cleanup => cleanup());
    this._animationDone.complete();
  }

  _startExitAnimation() {
    this._elementRef.nativeElement.classList.add('mtx-colorpicker-content-exit');

    if (this._animationsDisabled) {
      this._animationDone.next();
    } else {
      // Some internal apps disable animations in tests using `* {animation: none !important}`.
      // If that happens, the animation events won't fire and we'll never clean up the overlay.
      // Add a fallback that will fire if the animation doesn't run in a certain amount of time.
      clearTimeout(this._animationFallback);
      this._animationFallback = setTimeout(() => {
        if (!this._isAnimating) {
          this._animationDone.next();
        }
      }, 200);
    }
  }

  private _handleAnimationEvent = (event: AnimationEvent) => {
    const element = this._elementRef.nativeElement;

    if (event.target !== element || !event.animationName.startsWith('_mtx-colorpicker-content')) {
      return;
    }

    clearTimeout(this._animationFallback);
    this._isAnimating = event.type === 'animationstart';
    element.classList.toggle('mtx-colorpicker-content-animating', this._isAnimating);

    if (!this._isAnimating) {
      this._animationDone.next();
    }
  };

  getColorString(e: ColorEvent): string {
    return {
      hex: e.color.rgb.a === 1 ? e.color.hex : new TinyColor(e.color.rgb).toHex8String(),
      rgb: new TinyColor(e.color.rgb).toRgbString(),
      hsl: new TinyColor(e.color.hsl).toHslString(),
      hsv: new TinyColor(e.color.hsv).toHsvString(),
    }[this.picker.format];
  }
}

@Component({
  selector: 'mtx-colorpicker',
  template: '',
  exportAs: 'mtxColorpicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MtxColorpicker implements OnChanges, OnDestroy {
  private _overlay = inject(Overlay);
  private _viewContainerRef = inject(ViewContainerRef);
  private _dir? = inject(Directionality, { optional: true });
  private _document? = inject(DOCUMENT, { optional: true });

  private _scrollStrategy = inject(MTX_COLORPICKER_SCROLL_STRATEGY);
  private _inputStateChanges = Subscription.EMPTY;

  /** Custom colorpicker content set by the consumer. */
  @Input() content!: TemplateRef<any>;

  /** Emits when the colorpicker has been opened. */
  @Output('opened') openedStream: EventEmitter<void> = new EventEmitter<void>();

  /** Emits when the colorpicker has been closed. */
  @Output('closed') closedStream: EventEmitter<void> = new EventEmitter<void>();

  @Input({ transform: booleanAttribute }) get disabled() {
    return this._disabled === undefined && this.pickerInput
      ? this.pickerInput.disabled
      : !!this._disabled;
  }
  set disabled(value: boolean) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._disabledChange.next(value);
    }
  }
  private _disabled!: boolean;

  /** Preferred position of the colorpicker in the X axis. */
  @Input()
  xPosition: ColorpickerDropdownPositionX = 'start';

  /** Preferred position of the colorpicker in the Y axis. */
  @Input()
  yPosition: ColorpickerDropdownPositionY = 'below';

  /**
   * Whether to restore focus to the previously-focused element when the panel is closed.
   * Note that automatic focus restoration is an accessibility feature and it is recommended that
   * you provide your own equivalent, if you decide to turn it off.
   */
  @Input({ transform: booleanAttribute }) restoreFocus = true;

  /** Whether the panel is open. */
  @Input({ transform: booleanAttribute })
  get opened(): boolean {
    return this._opened;
  }
  set opened(value: boolean) {
    value ? this.open() : this.close();
  }
  private _opened = false;

  /** The id for the colorpicker panel. */
  id = `mtx-colorpicker-${colorpickerUid++}`;

  /** Color palette to use on the colorpicker's panel. */
  @Input()
  get color(): ThemePalette {
    return this._color || (this.pickerInput ? this.pickerInput.getThemePalette() : undefined);
  }
  set color(value: ThemePalette) {
    this._color = value;
  }
  private _color: ThemePalette;

  /** The input and output color format. */
  @Input()
  get format(): ColorFormat {
    return this._format || this.pickerInput.format;
  }
  set format(value: ColorFormat) {
    this._format = value;
  }
  _format!: ColorFormat;

  /** The currently selected color. */
  get selected(): string {
    return this._validSelected;
  }
  set selected(value: string) {
    this._validSelected = value;
  }
  private _validSelected: string = '';

  /** A reference to the overlay when the picker is opened as a popup. */
  private _overlayRef!: OverlayRef | null;

  /** Reference to the component instance rendered in the overlay. */
  private _componentRef!: ComponentRef<MtxColorpickerContent> | null;

  /** The element that was focused before the colorpicker was opened. */
  private _focusedElementBeforeOpen: HTMLElement | null = null;

  /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
  private _backdropHarnessClass = `${this.id}-backdrop`;

  /** The input element this colorpicker is associated with. */
  pickerInput!: MtxColorpickerInput;

  /** Emits when the colorpicker is disabled. */
  readonly _disabledChange = new Subject<boolean>();

  /** Emits new selected color when selected color changes. */
  readonly _selectedChanged = new Subject<string>();

  private _injector = inject(Injector);

  ngOnChanges() {}

  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this._disabledChange.complete();
  }

  /** Selects the given color. */
  select(nextVal: string): void {
    const oldValue = this.selected;
    this.selected = nextVal;

    // TODO: `nextVal` should compare with `oldValue`
    this._selectedChanged.next(nextVal);
  }

  /**
   * Register an input with this colorpicker.
   * @param input The colorpicker input to register with this colorpicker.
   */
  registerInput(input: MtxColorpickerInput): void {
    if (this.pickerInput) {
      throw Error('A Colorpicker can only be associated with a single input.');
    }
    this.pickerInput = input;
    this._inputStateChanges = input._valueChange.subscribe(
      (value: string) => (this.selected = value)
    );
  }

  /** Open the panel. */
  open(): void {
    if (this._opened || this.disabled) {
      return;
    }
    if (!this.pickerInput) {
      throw Error('Attempted to open an Colorpicker with no associated input.');
    }

    if (this._document) {
      this._focusedElementBeforeOpen = this._document.activeElement as HTMLElement;
    }

    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }

  /** Close the panel. */
  close(): void {
    if (!this._opened) {
      return;
    }

    if (this._componentRef) {
      const { instance } = this._componentRef;
      instance._animationDone.pipe(take(1)).subscribe(() => this._destroyOverlay());
      instance._startExitAnimation();
    }

    const completeClose = () => {
      // The `_opened` could've been reset already if
      // we got two events in quick succession.
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
        this._focusedElementBeforeOpen = null;
      }
    };

    if (
      this.restoreFocus &&
      this._focusedElementBeforeOpen &&
      typeof this._focusedElementBeforeOpen.focus === 'function'
    ) {
      // Because IE moves focus asynchronously, we can't count on it being restored before we've
      // marked the colorpicker as closed. If the event fires out of sequence and the element that
      // we're refocusing opens the colorpicker on focus, the user could be stuck with not being
      // able to close the panel at all. We work around it by making the logic, that marks
      // the colorpicker as closed, async as well.
      this._focusedElementBeforeOpen.focus();
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }

  /** Forwards relevant values from the colorpicker to the colorpicker content inside the overlay. */
  protected _forwardContentValues(instance: MtxColorpickerContent) {
    instance.picker = this;
    instance.color = this.color;
  }

  /** Open the colopicker as a popup. */
  private _openOverlay(): void {
    this._destroyOverlay();

    const labelId = this.pickerInput.getOverlayLabelId();
    const portal = new ComponentPortal<MtxColorpickerContent>(
      MtxColorpickerContent,
      this._viewContainerRef
    );
    const overlayRef = (this._overlayRef = this._overlay.create(
      new OverlayConfig({
        positionStrategy: this._getDropdownStrategy(),
        hasBackdrop: true,
        backdropClass: ['mat-overlay-transparent-backdrop', this._backdropHarnessClass],
        direction: this._dir || undefined,
        scrollStrategy: this._scrollStrategy(),
        panelClass: `mtx-colorpicker-popup`,
      })
    ));
    const overlayElement = overlayRef.overlayElement;
    overlayElement.setAttribute('role', 'dialog');

    if (labelId) {
      overlayElement.setAttribute('aria-labelledby', labelId);
    }

    this._getCloseStream(overlayRef).subscribe(event => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });

    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);

    // Update the position once the panel has rendered. Only relevant in dropdown mode.
    afterNextRender(
      () => {
        overlayRef.updatePosition();
      },
      { injector: this._injector }
    );
  }

  /** Destroys the current overlay. */
  private _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }

  /** Gets a position strategy that will open the panel as a dropdown. */
  private _getDropdownStrategy() {
    const strategy = this._overlay
      .position()
      .flexibleConnectedTo(this.pickerInput.getConnectedOverlayOrigin())
      .withTransformOriginOn('.mtx-colorpicker-content')
      .withFlexibleDimensions(false)
      .withViewportMargin(8)
      .withLockedPosition();

    return this._setConnectedPositions(strategy);
  }

  /** Sets the positions of the colorpicker in dropdown mode based on the current configuration. */
  private _setConnectedPositions(strategy: FlexibleConnectedPositionStrategy) {
    const primaryX = this.xPosition === 'end' ? 'end' : 'start';
    const secondaryX = primaryX === 'start' ? 'end' : 'start';
    const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
    const secondaryY = primaryY === 'top' ? 'bottom' : 'top';

    return strategy.withPositions([
      {
        originX: primaryX,
        originY: secondaryY,
        overlayX: primaryX,
        overlayY: primaryY,
      },
      {
        originX: primaryX,
        originY: primaryY,
        overlayX: primaryX,
        overlayY: secondaryY,
      },
      {
        originX: secondaryX,
        originY: secondaryY,
        overlayX: secondaryX,
        overlayY: primaryY,
      },
      {
        originX: secondaryX,
        originY: primaryY,
        overlayX: secondaryX,
        overlayY: secondaryY,
      },
    ]);
  }

  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  private _getCloseStream(overlayRef: OverlayRef) {
    return merge(
      overlayRef.backdropClick(),
      overlayRef.detachments(),
      overlayRef.keydownEvents().pipe(
        filter(event => {
          // Closing on alt + up is only valid when there's an input associated with the colorpicker.
          return (
            (event.keyCode === ESCAPE && !hasModifierKey(event)) ||
            (this.pickerInput && hasModifierKey(event, 'altKey') && event.keyCode === UP_ARROW)
          );
        })
      )
    );
  }
}
