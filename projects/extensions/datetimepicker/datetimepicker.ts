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
  AfterContentInit,
  afterNextRender,
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  EventEmitter,
  inject,
  Inject,
  InjectionToken,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { merge, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { MtxCalendar } from './calendar';
import { mtxDatetimepickerAnimations } from './datetimepicker-animations';
import { createMissingDateImplError } from './datetimepicker-errors';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';
import { MtxDatetimepickerInput } from './datetimepicker-input';
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

export function MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {
  return () => overlay.scrollStrategies.reposition();
}

export const MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MTX_DATETIMEPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY,
};

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
    '[attr.mode]': 'datetimepicker.mode',
    '[@transformPanel]': '_animationState',
    '(@transformPanel.done)': '_animationDone.next()',
  },
  animations: [
    mtxDatetimepickerAnimations.transformPanel,
    mtxDatetimepickerAnimations.fadeInCalendar,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MtxCalendar, CdkPortalOutlet],
})
export class MtxDatetimepickerContent<D> implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild(MtxCalendar, { static: true }) _calendar!: MtxCalendar<D>;

  @Input() color: ThemePalette;

  datetimepicker!: MtxDatetimepicker<D>;

  /** Whether the datetimepicker is above or below the input. */
  _isAbove!: boolean;

  /** Current state of the animation. */
  _animationState!: 'enter-dropdown' | 'enter-dialog' | 'void';

  /** Emits when an animation has finished. */
  readonly _animationDone = new Subject<void>();

  /** Id of the label for the `role="dialog"` element. */
  _dialogLabelId: string | null = null;

  /** Portal with projected action buttons. */
  _actionsPortal: TemplatePortal | null = null;

  /** The display type of datetimepicker. */
  type: MtxDatetimepickerType = 'datetime';

  /** The view of the calendar. */
  view: MtxCalendarView = 'month';

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  _viewChanged(view: MtxCalendarView): void {
    this.view = view;
  }

  ngOnInit() {
    this._animationState = this.datetimepicker.touchUi ? 'enter-dialog' : 'enter-dropdown';
  }

  ngAfterContentInit() {
    this._calendar._focusActiveCell();
  }

  ngOnDestroy() {
    this._animationDone.complete();
  }

  _startExitAnimation() {
    this._animationState = 'void';
    this._changeDetectorRef.markForCheck();
  }

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
  standalone: true,
})
export class MtxDatetimepicker<D> implements OnDestroy {
  private _document = inject(DOCUMENT);

  private _injector = inject(Injector);

  /** Whether to show multi-year view. */
  @Input({ transform: booleanAttribute }) multiYearSelector = false;

  /** Whether the clock uses 12 hour format. */
  @Input({ transform: booleanAttribute }) twelvehour = false;

  /** The view that the calendar should start in. */
  @Input() startView: MtxCalendarView = 'month';

  /** The display mode of datetimepicker. */
  @Input() mode: MtxDatetimepickerMode = 'auto';

  /** Step over minutes. */
  @Input() timeInterval: number = 1;

  /** Prevent user to select same date time */
  @Input({ transform: booleanAttribute }) preventSameDateTimeSelection = false;

  /** Input for a custom header component */
  @Input() calendarHeaderComponent!: ComponentType<any>;

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
  private _panelClass!: string[];

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
  private _color: ThemePalette;

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

  constructor(
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    @Inject(MTX_DATETIMEPICKER_SCROLL_STRATEGY) private _scrollStrategy: any,
    @Optional() private _dateAdapter: DatetimeAdapter<D>,
    @Optional() private _dir: Directionality
  ) {
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
  private _type: MtxDatetimepickerType = 'datetime';

  /**
   * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
   * than a popup and elements have more padding to allow for bigger touch targets.
   */
  @Input({ transform: booleanAttribute }) touchUi = false;

  /**
   * Whether the calendar is in time mode. In time mode the calendar clock gets time input
   * elements rather then just clock. When `touchUi` is enabled this will be disabled.
   */
  @Input({ transform: booleanAttribute }) timeInput = false;

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
    } else if (!this._dateAdapter.sameDatetime(this.oldValue, this._selected)) {
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
      instance._startExitAnimation();
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
        direction: this._dir,
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
