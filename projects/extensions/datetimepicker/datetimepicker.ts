import { Directionality } from '@angular/cdk/bidi';
import { coerceStringArray } from '@angular/cdk/coercion';
import { ESCAPE, hasModifierKey, UP_ARROW } from '@angular/cdk/keycodes';
import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import {
  CdkPortalOutlet,
  ComponentPortal,
  ComponentType,
  TemplatePortal,
} from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  AfterViewInit,
  ANIMATION_MODULE_TYPE,
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  inject,
  InjectionToken,
  Injector,
  Input,
  NgZone,
  numberAttribute,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { merge, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { CdkTrapFocus } from '@angular/cdk/a11y';
import { MatButton } from '@angular/material/button';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { MtxCalendar } from './calendar';
import { createMissingDateImplError } from './datetimepicker-errors';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';
import { MtxDatetimepickerInput } from './datetimepicker-input';
import { MtxDatetimepickerIntl } from './datetimepicker-intl';
import { MtxCalendarView, MtxDatetimepickerType } from './datetimepicker-types';

/** Used to generate a unique ID for each datetimepicker instance. */
let datetimepickerUid = 0;

/** Possible modes for datetimepicker dropdown display. */
export type MtxDatetimepickerMode = 'auto' | 'portrait' | 'landscape';

/** Possible positions for the datetimepicker dropdown along the X axis. */
export type DatetimepickerDropdownPositionX = 'start' | 'end';

/** Possible positions for the datetimepicker dropdown along the Y axis. */
export type DatetimepickerDropdownPositionY = 'above' | 'below';

/** Injection token that determines the scroll handling while the calendar is open. */
export const MTX_DATETIMEPICKER_SCROLL_STRATEGY = new InjectionToken<() => ScrollStrategy>(
  'mtx-datetimepicker-scroll-strategy',
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
export function MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {
  return () => overlay.scrollStrategies.reposition();
}

/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
export const MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MTX_DATETIMEPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY,
};

export interface MtxDatetimepickerDefaultOptions {
  mode?: MtxDatetimepickerMode;
  type?: MtxDatetimepickerType;
  startView?: MtxCalendarView;
  multiYearSelector?: boolean;
  showWeekNumbers?: boolean;
  twelvehour?: boolean;
  timeInterval?: number;
  timeInput?: boolean;
  timeInputAutoFocus?: boolean;
  color?: ThemePalette;
  touchUi?: boolean;
  panelClass?: string | string[];
  calendarHeaderComponent?: ComponentType<any>;
}

/** Injection token that can be used to specify default datetimepicker options. */
export const MTX_DATETIMEPICKER_DEFAULT_OPTIONS =
  new InjectionToken<MtxDatetimepickerDefaultOptions>('mtx-datetimepicker-default-options');

/**
 * Component used as the content for the datetimepicker dialog and popup. We use this instead of
 * using MtxCalendar directly as the content so we can control the initial focus. This also gives us
 * a place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
@Component({
  selector: 'mtx-datetimepicker-content',
  templateUrl: 'datetimepicker-content.html',
  styleUrl: 'datetimepicker-content.scss',
  host: {
    'class': 'mtx-datetimepicker-content',
    '[class]': 'color ? "mat-" + color : ""',
    '[class.mtx-datetimepicker-content-touch]': 'datetimepicker?.touchUi',
    '[class.mtx-datetimepicker-content-animations-enabled]': '!_animationsDisabled',
    '[attr.mode]': 'datetimepicker.mode',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkTrapFocus, MtxCalendar, CdkPortalOutlet, MatButton],
})
export class MtxDatetimepickerContent<D> implements AfterViewInit, OnDestroy {
  protected _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  protected _animationsDisabled =
    inject(ANIMATION_MODULE_TYPE, { optional: true }) === 'NoopAnimations';
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _ngZone = inject(NgZone);
  private _stateChanges: Subscription | undefined;
  private _eventCleanups: (() => void)[] | undefined;
  private _animationFallback: ReturnType<typeof setTimeout> | undefined;

  @ViewChild(MtxCalendar, { static: true }) _calendar!: MtxCalendar<D>;

  @Input() color: ThemePalette;

  datetimepicker!: MtxDatetimepicker<D>;

  /** Whether the datetimepicker is above or below the input. */
  _isAbove!: boolean;

  /** Emits when an animation has finished. */
  readonly _animationDone = new Subject<void>();

  /** Whether there is an in-progress animation. */
  _isAnimating = false;

  /** Id of the label for the `role="dialog"` element. */
  _dialogLabelId: string | null = null;

  /** Portal with projected action buttons. */
  _actionsPortal: TemplatePortal | null = null;

  /** The display type of datetimepicker. */
  type: MtxDatetimepickerType = 'datetime';

  /** The view of the calendar. */
  view: MtxCalendarView = 'month';

  /** Text for the close button. */
  _closeButtonText: string = '';

  /** Whether the close button currently has focus. */
  _closeButtonFocused: boolean = false;

  _viewChanged(view: MtxCalendarView): void {
    this.view = view;
  }

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    this._closeButtonText = inject(MtxDatetimepickerIntl).closeCalendarLabel;
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

  ngAfterViewInit() {
    this._stateChanges = this.datetimepicker._disabledChange.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });

    this._calendar.focusActiveCell();
  }

  ngOnDestroy() {
    clearTimeout(this._animationFallback);
    this._eventCleanups?.forEach(cleanup => cleanup());
    this._animationDone.complete();
  }

  _startExitAnimation() {
    this._elementRef.nativeElement.classList.add('mtx-datetimepicker-content-exit');

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

    if (
      event.target !== element ||
      !event.animationName.startsWith('_mtx-datetimepicker-content')
    ) {
      return;
    }

    clearTimeout(this._animationFallback);
    this._isAnimating = event.type === 'animationstart';
    element.classList.toggle('mtx-datetimepicker-content-animating', this._isAnimating);

    if (!this._isAnimating) {
      this._animationDone.next();
    }
  };

  _handleUserSelection() {
    // Delegate closing the overlay to the actions.
    if (!this._actionsPortal) {
      this.datetimepicker.close();
    }
  }

  /**
   * Assigns a new portal containing the datetimepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered.
   */
  _assignActions(portal: TemplatePortal<any> | null, forceRerender: boolean) {
    this._actionsPortal = portal;

    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }
}

@Component({
  selector: 'mtx-datetimepicker',
  exportAs: 'mtxDatetimepicker',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class MtxDatetimepicker<D> implements OnDestroy {
  private _overlay = inject(Overlay);
  private _viewContainerRef = inject(ViewContainerRef);
  private _scrollStrategy = inject(MTX_DATETIMEPICKER_SCROLL_STRATEGY);
  private _dateAdapter = inject<DatetimeAdapter<D>>(DatetimeAdapter, { optional: true })!;
  private _dir = inject(Directionality, { optional: true });
  private _defaultOptions = inject<MtxDatetimepickerDefaultOptions>(
    MTX_DATETIMEPICKER_DEFAULT_OPTIONS,
    { optional: true }
  );

  private _document = inject(DOCUMENT);

  private _injector = inject(Injector);

  /** Whether to show multi-year view. */
  @Input({ transform: booleanAttribute })
  multiYearSelector = this._defaultOptions?.multiYearSelector ?? false;

  /** Whether the clock uses 12 hour format. */
  @Input({ transform: booleanAttribute })
  twelvehour = this._defaultOptions?.twelvehour ?? false;

  /** Whether to show week numbers in month view */
  @Input({ transform: booleanAttribute })
  showWeekNumbers = this._defaultOptions?.showWeekNumbers ?? false;

  /** The view that the calendar should start in. */
  @Input() startView: MtxCalendarView = this._defaultOptions?.startView ?? 'month';

  /** The display mode of datetimepicker. */
  @Input() mode: MtxDatetimepickerMode = this._defaultOptions?.mode ?? 'auto';

  /** Step over minutes. */
  @Input({ transform: numberAttribute })
  timeInterval: number = this._defaultOptions?.timeInterval ?? 1;

  /** Prevent user to select same date time */
  @Input({ transform: booleanAttribute }) preventSameDateTimeSelection = false;

  /** Input for a custom header component */
  @Input()
  calendarHeaderComponent?: ComponentType<any> = this._defaultOptions?.calendarHeaderComponent;

  /**
   * Emits new selected date when selected date changes.
   * @deprecated Switch to the `dateChange` and `dateInput` binding on the input element.
   */
  @Output() selectedChanged = new EventEmitter<D>();

  /** Emits when the datetimepicker has been opened. */
  @Output('opened') openedStream: EventEmitter<void> = new EventEmitter<void>();

  /** Emits when the datetimepicker has been closed. */
  @Output('closed') closedStream: EventEmitter<void> = new EventEmitter<void>();

  /** Emits when the view has been changed. */
  @Output() viewChanged: EventEmitter<MtxCalendarView> = new EventEmitter<MtxCalendarView>();

  /** Classes to be passed to the date picker panel. */
  @Input()
  get panelClass(): string | string[] {
    return this._panelClass;
  }
  set panelClass(value: string | string[]) {
    this._panelClass = coerceStringArray(value);
  }
  private _panelClass: string[] = coerceStringArray(this._defaultOptions?.panelClass);

  /** Whether the calendar is open. */
  @Input({ transform: booleanAttribute })
  get opened(): boolean {
    return this._opened;
  }
  set opened(value: boolean) {
    value ? this.open() : this.close();
  }
  private _opened = false;

  /** The id for the datetimepicker calendar. */
  id = `mtx-datetimepicker-${datetimepickerUid++}`;

  /** Color palette to use on the datetimepicker's calendar. */
  @Input()
  get color(): ThemePalette {
    return (
      this._color ||
      (this.datetimepickerInput ? this.datetimepickerInput.getThemePalette() : undefined)
    );
  }
  set color(value: ThemePalette) {
    this._color = value;
  }
  private _color: ThemePalette = this._defaultOptions?.color;

  /** The input element this datetimepicker is associated with. */
  datetimepickerInput!: MtxDatetimepickerInput<D>;

  /** Emits when the datetimepicker is disabled. */
  _disabledChange = new Subject<boolean>();

  private _validSelected: D | null = null;

  /** A reference to the overlay into which we've rendered the calendar. */
  private _overlayRef!: OverlayRef | null;

  /** Reference to the component instance rendered in the overlay. */
  private _componentRef!: ComponentRef<MtxDatetimepickerContent<D>> | null;

  /** The element that was focused before the datetimepicker was opened. */
  private _focusedElementBeforeOpen: HTMLElement | null = null;

  /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
  private _backdropHarnessClass = `${this.id}-backdrop`;

  private _inputStateChanges = Subscription.EMPTY;

  /** Portal with projected action buttons. */
  _actionsPortal: TemplatePortal | null = null;

  /** Previous selected value. */
  oldValue: D | null = null;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    if (!this._dateAdapter) {
      throw createMissingDateImplError('DateAdapter');
    }
  }

  /** The date to open the calendar to initially. */
  @Input()
  get startAt(): D | null {
    // If an explicit startAt is set we start there, otherwise we start at whatever the currently
    // selected value is.
    return this._startAt || (this.datetimepickerInput ? this.datetimepickerInput.value : null);
  }
  set startAt(date: D | null) {
    this._startAt = this._dateAdapter.getValidDateOrNull(date);
  }
  private _startAt!: D | null;

  /** The display type of datetimepicker. */
  @Input()
  get type() {
    return this._type;
  }
  set type(value: MtxDatetimepickerType) {
    this._type = value || 'datetime';
  }
  private _type: MtxDatetimepickerType = this._defaultOptions?.type ?? 'datetime';

  /**
   * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
   * than a popup and elements have more padding to allow for bigger touch targets.
   */
  @Input({ transform: booleanAttribute }) touchUi = this._defaultOptions?.touchUi ?? false;

  /**
   * Whether the calendar is in time mode. In time mode the calendar clock gets time input
   * elements rather then just clock. When `touchUi` is enabled this will be disabled.
   */
  @Input({ transform: booleanAttribute }) timeInput = this._defaultOptions?.timeInput ?? false;

  /** Whether the time input should be auto-focused after view init.  */
  @Input({ transform: booleanAttribute })
  timeInputAutoFocus = this._defaultOptions?.timeInputAutoFocus ?? true;

  /** Whether the datetimepicker pop-up should be disabled. */
  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return this._disabled === undefined && this.datetimepickerInput
      ? this.datetimepickerInput.disabled
      : !!this._disabled;
  }
  set disabled(value: boolean) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._disabledChange.next(value);
    }
  }
  private _disabled!: boolean;

  /** Preferred position of the datetimepicker in the X axis. */
  @Input()
  xPosition: DatetimepickerDropdownPositionX = 'start';

  /** Preferred position of the datetimepicker in the Y axis. */
  @Input()
  yPosition: DatetimepickerDropdownPositionY = 'below';

  /**
   * Whether to restore focus to the previously-focused element when the panel is closed.
   * Note that automatic focus restoration is an accessibility feature and it is recommended that
   * you provide your own equivalent, if you decide to turn it off.
   */
  @Input({ transform: booleanAttribute }) restoreFocus = true;

  /** The currently selected date. */
  get _selected(): D | null {
    return this._validSelected;
  }

  set _selected(value: D | null) {
    this._validSelected = value;
  }

  /** The minimum selectable date. */
  get _minDate(): D | null {
    return this.datetimepickerInput && this.datetimepickerInput.min;
  }

  /** The maximum selectable date. */
  get _maxDate(): D | null {
    return this.datetimepickerInput && this.datetimepickerInput.max;
  }

  get _dateFilter(): (date: D | null, type: MtxDatetimepickerFilterType) => boolean {
    return this.datetimepickerInput && this.datetimepickerInput._dateFilter;
  }

  _viewChanged(view: MtxCalendarView): void {
    this.viewChanged.emit(view);
  }

  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this._disabledChange.complete();
  }

  /** Selects the given date */
  _select(date: D): void {
    this.oldValue = this._selected;
    this._selected = date;
    if (!this._actionsPortal) {
      if (!this._dateAdapter.sameDatetime(this.oldValue, this._selected)) {
        this.selectedChanged.emit(date);
      }
    }
  }

  _selectManually(): void {
    if (!this._selected) {
      this._selected = this._dateAdapter.today();
      this.selectedChanged.emit(this._selected);
    } else {
      this.selectedChanged.emit((this._selected as D) || (this.oldValue as D));
    }
    this.close();
  }

  _clearSelected(): void {
    this.oldValue = null;
    this._selected = null;
    this.selectedChanged.emit();
    this.close();
  }

  /**
   * Register an input with this datetimepicker.
   * @param input The datetimepicker input to register with this datetimepicker.
   */
  _registerInput(input: MtxDatetimepickerInput<D>): void {
    if (this.datetimepickerInput) {
      throw Error('A MtxDatetimepicker can only be associated with a single input.');
    }
    this.datetimepickerInput = input;
    this._inputStateChanges = this.datetimepickerInput._valueChange.subscribe(
      (value: D | null) => (this._selected = value)
    );
  }

  /** Open the calendar. */
  open(): void {
    if (this._opened || this.disabled) {
      return;
    }
    if (!this.datetimepickerInput) {
      throw Error('Attempted to open an MtxDatetimepicker with no associated input.');
    }

    this._focusedElementBeforeOpen = _getFocusedElementPierceShadowDom();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }

  /** Close the calendar. */
  close(): void {
    if (!this._opened) {
      return;
    }

    const canRestoreFocus =
      this.restoreFocus &&
      this._focusedElementBeforeOpen &&
      typeof this._focusedElementBeforeOpen.focus === 'function';

    const completeClose = () => {
      // The `_opened` could've been reset already if
      // we got two events in quick succession.
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };

    if (this._componentRef) {
      const { instance, location } = this._componentRef;
      instance._animationDone.pipe(take(1)).subscribe(() => {
        const activeElement = this._document.activeElement;

        // Since we restore focus after the exit animation, we have to check that
        // the user didn't move focus themselves inside the `close` handler.
        if (
          canRestoreFocus &&
          (!activeElement ||
            activeElement === this._document.activeElement ||
            location.nativeElement.contains(activeElement))
        ) {
          this._focusedElementBeforeOpen!.focus();
        }

        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });
      instance._startExitAnimation();
    }

    if (canRestoreFocus) {
      // Because IE moves focus asynchronously, we can't count on it being restored before we've
      // marked the datetimepicker as closed. If the event fires out of sequence and the element that
      // we're refocusing opens the datetimepicker on focus, the user could be stuck with not being
      // able to close the calendar at all. We work around it by making the logic, that marks
      // the datetimepicker as closed, async as well.
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }

  /**
   * Forwards relevant values from the datetimepicker to the
   * datetimepicker content inside the overlay.
   */
  protected _forwardContentValues(instance: MtxDatetimepickerContent<D>) {
    instance.datetimepicker = this;
    instance.color = this.color;
    instance._dialogLabelId = this.datetimepickerInput.getOverlayLabelId();
    instance.type = this.type;
    instance.view = this.startView;
    instance._assignActions(this._actionsPortal, false);
  }

  /** Opens the overlay with the calendar. */
  private _openOverlay(): void {
    this._destroyOverlay();

    const isDialog = this.touchUi;
    const labelId = this.datetimepickerInput.getOverlayLabelId();

    const portal = new ComponentPortal<MtxDatetimepickerContent<D>>(
      MtxDatetimepickerContent,
      this._viewContainerRef
    );
    const overlayRef = (this._overlayRef = this._overlay.create(
      new OverlayConfig({
        positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
        hasBackdrop: true,
        backdropClass: [
          isDialog ? 'cdk-overlay-dark-backdrop' : 'mat-overlay-transparent-backdrop',
          this._backdropHarnessClass,
        ],
        direction: this._dir || undefined,
        scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
        panelClass: `mtx-datetimepicker-${isDialog ? 'dialog' : 'popup'}`,
      })
    ));

    const overlayElement = overlayRef.overlayElement;
    overlayElement.setAttribute('role', 'dialog');

    if (labelId) {
      overlayElement.setAttribute('aria-labelledby', labelId);
    }

    if (isDialog) {
      overlayElement.setAttribute('aria-modal', 'true');
    }

    this._getCloseStream(overlayRef).subscribe(event => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });

    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);

    // Update the position once the calendar has rendered. Only relevant in dropdown mode.
    if (!isDialog) {
      afterNextRender(
        () => {
          overlayRef.updatePosition();
        },
        { injector: this._injector }
      );
    }
  }

  /** Destroys the current overlay. */
  private _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }

  /** Gets a position strategy that will open the calendar as a dropdown. */
  private _getDialogStrategy() {
    return this._overlay.position().global().centerHorizontally().centerVertically();
  }

  /** Gets a position strategy that will open the calendar as a dropdown. */
  private _getDropdownStrategy() {
    const strategy = this._overlay
      .position()
      .flexibleConnectedTo(this.datetimepickerInput.getConnectedOverlayOrigin())
      .withTransformOriginOn('.mtx-datetimepicker-content')
      .withFlexibleDimensions(false)
      .withViewportMargin(8)
      .withLockedPosition();

    return this._setConnectedPositions(strategy);
  }

  /**
   * Sets the positions of the datetimepicker in dropdown mode based on the current configuration.
   */
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
          // Closing on alt + up is only valid when there's an input associated with the
          // datetimepicker.
          return (
            (event.keyCode === ESCAPE && !hasModifierKey(event)) ||
            (this.datetimepickerInput &&
              hasModifierKey(event, 'altKey') &&
              event.keyCode === UP_ARROW)
          );
        })
      )
    );
  }
  /**
   * Registers a portal containing action buttons with the datetimepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal: TemplatePortal): void {
    if (this._actionsPortal) {
      throw Error('A MtxDatetimepicker can only be associated with a single actions row.');
    }
    this._actionsPortal = portal;
    this._componentRef?.instance._assignActions(portal, true);
  }

  /**
   * Removes a portal containing action buttons from the datetimepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal: TemplatePortal): void {
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      this._componentRef?.instance._assignActions(null, true);
    }
  }
}
