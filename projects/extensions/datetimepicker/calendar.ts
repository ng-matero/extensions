import { CdkMonitorFocus } from '@angular/cdk/a11y';
import {
  CdkPortalOutlet,
  ComponentPortal,
  ComponentType,
  Portal,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  AfterContentInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
} from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS,
  MtxDatetimeFormats,
} from '@ng-matero/extensions/core';
import { Subscription } from 'rxjs';
import { MtxClockView } from './clock';
import { mtxDatetimepickerAnimations } from './datetimepicker-animations';
import { createMissingDateImplError } from './datetimepicker-errors';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';
import { MtxDatetimepickerIntl } from './datetimepicker-intl';
import { MtxAMPM, MtxCalendarView, MtxDatetimepickerType } from './datetimepicker-types';
import { MtxMonthView } from './month-view';
import {
  MtxMultiYearView,
  getActiveOffset,
  isSameMultiYearView,
  yearsPerPage,
} from './multi-year-view';
import { MtxTimeView } from './time-view';
import { MtxYearView } from './year-view';

/**
 * A calendar that is used as part of the datetimepicker.
 * @docs-private
 */
@Component({
  selector: 'mtx-calendar',
  templateUrl: 'calendar.html',
  styleUrl: 'calendar.scss',
  host: {
    'class': 'mtx-calendar',
    '[class.mtx-calendar-with-time-input]': 'timeInput',
  },
  exportAs: 'mtxCalendar',
  animations: [mtxDatetimepickerAnimations.slideCalendar],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CdkPortalOutlet,
    CdkMonitorFocus,
    MatButton,
    MatIconButton,
    MtxMonthView,
    MtxYearView,
    MtxMultiYearView,
    MtxTimeView,
  ],
})
export class MtxCalendar<D> implements AfterViewChecked, AfterContentInit, OnDestroy {
  private _intl = inject(MtxDatetimepickerIntl);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _ngZone = inject(NgZone);
  private _adapter = inject<DatetimeAdapter<D>>(DatetimeAdapter, { optional: true })!;
  private _dateFormats = inject<MtxDatetimeFormats>(MTX_DATETIME_FORMATS, { optional: true })!;

  /** Whether to show multi-year view. */
  @Input({ transform: booleanAttribute }) multiYearSelector = false;

  /** Whether the clock uses 12 hour format. */
  @Input({ transform: booleanAttribute }) twelvehour = false;

  /** Whether to show week numbers in month view */
  @Input({ transform: booleanAttribute }) weekNumbers = false;

  /** Whether the calendar should be started in month or year view. */
  @Input() startView: MtxCalendarView = 'month';

  /** Step over minutes. */
  @Input() timeInterval: number = 1;

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D, type: MtxDatetimepickerFilterType) => boolean;

  /** Prevent user to select same date time */
  @Input({ transform: booleanAttribute }) preventSameDateTimeSelection = false;

  /** Input for custom header component */
  @Input() headerComponent!: ComponentType<any>;

  /** Input for action buttons. */
  @Input() actionsPortal: TemplatePortal | null = null;

  /** Emits when the currently selected date changes. */
  @Output() selectedChange: EventEmitter<D> = new EventEmitter<D>();

  /** Emits when the view has been changed. */
  @Output() viewChanged: EventEmitter<MtxCalendarView> = new EventEmitter<MtxCalendarView>();

  @Output() _userSelection = new EventEmitter<void>();

  /** Reference to the current month view component. */
  @ViewChild(MtxMonthView) monthView!: MtxMonthView<D>;

  /** Reference to the current year view component. */
  @ViewChild(MtxYearView) yearView!: MtxYearView<D>;

  /** Reference to the current multi-year view component. */
  @ViewChild(MtxMultiYearView) multiYearView!: MtxMultiYearView<D>;

  /** Reference to the current time view component. */
  @ViewChild(MtxTimeView) timeView!: MtxTimeView<D>;

  _AMPM!: MtxAMPM;

  _clockView: MtxClockView = 'hour';

  _calendarState!: string;

  /** A portal containing the header component. */
  _calendarHeaderPortal!: Portal<any>;

  private _intlChanges: Subscription;

  private _clampedActiveDate!: D;

  /**
   * Used for scheduling that focus should be moved to the active cell on the next tick.
   * We need to schedule it, rather than do it immediately, because we have to wait
   * for Angular to re-evaluate the view children.
   */
  private _moveFocusOnNextTick = false;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    const _intl = this._intl;

    if (!this._adapter) {
      throw createMissingDateImplError('DatetimeAdapter');
    }

    if (!this._dateFormats) {
      throw createMissingDateImplError('MTX_DATETIME_FORMATS');
    }

    this._intlChanges = _intl.changes.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  /** The display type of datetimepicker. */
  @Input()
  get type(): MtxDatetimepickerType {
    return this._type;
  }
  set type(value: MtxDatetimepickerType) {
    this._type = value || 'date';
    if (this.type === 'year') {
      this.multiYearSelector = true;
    }
  }
  private _type: MtxDatetimepickerType = 'date';

  /** A date representing the period (month or year) to start the calendar in. */
  @Input()
  get startAt(): D | null {
    return this._startAt;
  }
  set startAt(value: D | null) {
    this._startAt = this._adapter.getValidDateOrNull(value);
  }
  private _startAt!: D | null;

  /**
   * Whether the calendar is in time mode. In time mode the calendar clock gets time input
   * elements rather then just clock. When `touchUi` is enabled this will be disabled.
   */
  @Input({ transform: booleanAttribute }) timeInput = false;

  /** Whether the time input should be auto-focused after view init.  */
  @Input({ transform: booleanAttribute }) timeInputAutoFocus = true;

  /** The currently selected date. */
  @Input()
  get selected(): D | null {
    return this._selected;
  }
  set selected(value: D | null) {
    this._selected = this._adapter.getValidDateOrNull(value);
  }
  private _selected!: D | null;

  /** The minimum selectable date. */
  @Input()
  get minDate(): D | null {
    return this._minDate;
  }
  set minDate(value: D | null) {
    this._minDate = this._adapter.getValidDateOrNull(value);
  }
  private _minDate!: D | null;

  /** The maximum selectable date. */
  @Input()
  get maxDate(): D | null {
    return this._maxDate;
  }
  set maxDate(value: D | null) {
    this._maxDate = this._adapter.getValidDateOrNull(value);
  }
  private _maxDate!: D | null;

  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get _activeDate(): D {
    return this._clampedActiveDate;
  }
  set _activeDate(value: D) {
    const oldActiveDate = this._clampedActiveDate;
    this._clampedActiveDate = this._adapter.clampDate(value, this.minDate, this.maxDate);

    // whenever active date changed, and possibly got clamped we should adjust the am/pm setting
    this._selectAMPM(this._clampedActiveDate);

    if (
      oldActiveDate &&
      this._clampedActiveDate &&
      this.currentView === 'month' &&
      !this._adapter.sameMonthAndYear(oldActiveDate, this._clampedActiveDate)
    ) {
      if (this._adapter.isInNextMonth(oldActiveDate, this._clampedActiveDate)) {
        this.calendarState('right');
      } else {
        this.calendarState('left');
      }
    }

    this._changeDetectorRef.markForCheck();
  }

  /** Whether the calendar is in month view. */
  get currentView(): MtxCalendarView {
    return this._currentView;
  }
  set currentView(value: MtxCalendarView) {
    const viewChangedResult = this._currentView !== value ? value : null;
    this._currentView = value;
    this._moveFocusOnNextTick = true;
    this._changeDetectorRef.markForCheck();
    if (viewChangedResult) {
      this.viewChanged.emit(viewChangedResult);
    }
  }
  private _currentView!: MtxCalendarView;

  get _yearPeriodText(): string {
    if (this.currentView === 'multi-year') {
      // The offset from the active year to the "slot" for the starting year is the
      // *actual* first rendered year in the multi-year view, and the last year is
      // just yearsPerPage - 1 away.
      const activeYear = this._adapter.getYear(this._activeDate);
      const minYearOfPage =
        activeYear - getActiveOffset(this._adapter, this._activeDate, this.minDate, this.maxDate);
      const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
      const minYearName = this._adapter.getYearName(this._adapter.createDate(minYearOfPage, 0, 1));
      const maxYearName = this._adapter.getYearName(this._adapter.createDate(maxYearOfPage, 0, 1));
      return this._intl.formatYearRange(minYearName, maxYearName);
    }

    return this.currentView === 'month'
      ? this._adapter.getMonthNames('long')[this._adapter.getMonth(this._activeDate)]
      : this._adapter.getYearName(this._activeDate);
  }

  get _yearButtonText(): string {
    return this._adapter.getYearName(this._activeDate);
  }

  get _yearButtonLabel(): string {
    return this.multiYearSelector
      ? this._intl.switchToMultiYearViewLabel
      : this._intl.switchToYearViewLabel;
  }

  get _dateButtonText(): string {
    switch (this.type) {
      case 'month':
        return this._adapter.getMonthNames('long')[this._adapter.getMonth(this._activeDate)];
      default:
        return this._adapter.format(
          this._activeDate,
          this._dateFormats.display.popupHeaderDateLabel
        );
    }
  }

  get _dateButtonLabel(): string {
    return this._intl.switchToMonthViewLabel;
  }

  get _hoursButtonText(): string {
    let hour = this._adapter.getHour(this._activeDate);
    if (this.twelvehour) {
      if (hour === 0) {
        hour = 24;
      }
      hour = hour > 12 ? hour - 12 : hour;
    }
    return this._2digit(hour);
  }

  get _hourButtonLabel(): string {
    return this._intl.switchToClockHourViewLabel;
  }

  get _minutesButtonText(): string {
    return this._2digit(this._adapter.getMinute(this._activeDate));
  }

  get _minuteButtonLabel(): string {
    return this._intl.switchToClockMinuteViewLabel;
  }

  get _prevButtonLabel(): string {
    switch (this._currentView) {
      case 'month':
        return this._intl.prevMonthLabel;
      case 'year':
        return this._intl.prevYearLabel;
      case 'multi-year':
        return this._intl.prevMultiYearLabel;
      default:
        return '';
    }
  }

  get _nextButtonLabel(): string {
    switch (this._currentView) {
      case 'month':
        return this._intl.nextMonthLabel;
      case 'year':
        return this._intl.nextYearLabel;
      case 'multi-year':
        return this._intl.nextMultiYearLabel;
      default:
        return '';
    }
  }

  /** Date filter for the month and year views. */
  _dateFilterForViews = (date: D) => {
    return (
      !!date &&
      (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.DATE)) &&
      (!this.minDate || this._adapter.compareDate(date, this.minDate) >= 0) &&
      (!this.maxDate || this._adapter.compareDate(date, this.maxDate) <= 0)
    );
  };

  _userSelected(): void {
    this._userSelection.emit();
  }

  ngAfterContentInit() {
    if (this.headerComponent) {
      this._calendarHeaderPortal = new ComponentPortal(this.headerComponent);
    }
    this._activeDate = this.startAt || this._adapter.today();
    this._selectAMPM(this._activeDate);

    // Assign to the private property since we don't want to move focus on init.
    if (this.type === 'year') {
      this._currentView = 'multi-year';
    } else if (this.type === 'month') {
      this._currentView = 'year';
    } else if (this.type === 'time') {
      this._currentView = 'clock';
    } else {
      this._currentView = this.startView;
    }
  }

  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }

  ngOnDestroy() {
    this._intlChanges.unsubscribe();
  }

  /** Handles date selection in the month view. */
  _dateSelected(date: D): void {
    if (this.type === 'date') {
      this._onActiveDateChange(date);
      if (!this._adapter.sameDate(date, this.selected) || !this.preventSameDateTimeSelection) {
        this.selectedChange.emit(date);
      }
    } else {
      this.selectedChange.emit(date);
      this._activeDate = date;
      this.currentView = 'clock';
    }
  }

  /** Handles month selection in the year view. */
  _monthSelected(month: D): void {
    if (this.type === 'month') {
      if (
        !this._adapter.sameMonthAndYear(month, this.selected) ||
        !this.preventSameDateTimeSelection
      ) {
        this.selectedChange.emit(this._adapter.getFirstDateOfMonth(month));
      }
    } else {
      this._activeDate = month;
      this.currentView = 'month';
      this._clockView = 'hour';
    }
  }

  /** Handles year selection in the multi year view. */
  _yearSelected(year: D): void {
    if (this.type === 'year') {
      if (!this._adapter.sameYear(year, this.selected as D) || !this.preventSameDateTimeSelection) {
        const normalizedDate = this._adapter.createDatetime(
          this._adapter.getYear(year),
          0,
          1,
          0,
          0
        );
        this.selectedChange.emit(normalizedDate);
      }
    } else {
      this._activeDate = year;
      this.currentView = 'year';
    }
  }

  _timeSelected(date: D) {
    this._activeDate = date;
    if (!this._adapter.sameDatetime(date, this.selected) || !this.preventSameDateTimeSelection) {
      this.selectedChange.emit(date);
    }
  }

  _onActiveDateChange(date: D) {
    this._activeDate = date;
  }

  _selectAMPM(date: D) {
    const hour = this._adapter.getHour(date);
    if (hour > 11) {
      this._AMPM = 'PM';
    } else {
      this._AMPM = 'AM';
    }

    if (
      this.actionsPortal &&
      this.currentView === 'clock' &&
      this._selected &&
      !this._adapter.sameHour(date, this._selected)
    ) {
      this.selectedChange.emit(date);
    }
  }

  _ampmClicked(source: MtxAMPM): void {
    this._currentView = 'clock';

    if (source === this._AMPM) {
      return;
    }

    // if AMPM changed from PM to AM substract 12 hours
    const currentHour = this._adapter.getHour(this._activeDate);
    let newHourValue;
    if (source === 'AM') {
      newHourValue = currentHour >= 12 ? this._adapter.getHour(this._activeDate) - 12 : 12;
    }
    // otherwise add 12 hours
    else {
      newHourValue = (currentHour + 12) % 24;
    }

    const newActiveDate = this._adapter.clampDate(
      this._adapter.createDatetime(
        this._adapter.getYear(this._activeDate),
        this._adapter.getMonth(this._activeDate),
        this._adapter.getDate(this._activeDate),
        newHourValue,
        this._adapter.getMinute(this._activeDate)
      ),
      this.minDate,
      this.maxDate
    );

    // only if our clamped date is not changed, we know we can apply the newActiveDate to the
    // activeDate
    if (this._adapter.getHour(newActiveDate) === newHourValue) {
      this._activeDate = newActiveDate;
      this._AMPM = source;
    }
  }

  _yearClicked(): void {
    if (this.type === 'year' || this.multiYearSelector) {
      this.currentView = 'multi-year';
      return;
    }
    this.currentView = 'year';
  }

  _dateClicked(): void {
    if (this.type !== 'month') {
      this.currentView = 'month';
    }
  }

  _hoursClicked(): void {
    this.currentView = 'clock';
    this._clockView = 'hour';
  }

  _minutesClicked(): void {
    this.currentView = 'clock';
    this._clockView = 'minute';
  }

  /** Handles user clicks on the previous button. */
  _previousClicked(): void {
    this._activeDate =
      this.currentView === 'month'
        ? this._adapter.addCalendarMonths(this._activeDate, -1)
        : this._adapter.addCalendarYears(
            this._activeDate,
            this.currentView === 'year' ? -1 : -yearsPerPage
          );
  }

  /** Handles user clicks on the next button. */
  _nextClicked(): void {
    this._activeDate =
      this.currentView === 'month'
        ? this._adapter.addCalendarMonths(this._activeDate, 1)
        : this._adapter.addCalendarYears(
            this._activeDate,
            this.currentView === 'year' ? 1 : yearsPerPage
          );
  }

  /** Whether the previous period button is enabled. */
  _previousEnabled(): boolean {
    if (!this.minDate) {
      return true;
    }
    return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
  }

  /** Whether the next period button is enabled. */
  _nextEnabled(): boolean {
    return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
  }

  _calendarStateDone() {
    this._calendarState = '';
  }

  /** Whether the two dates represent the same view in the current view mode (month or year). */
  private _isSameView(date1: D, date2: D): boolean {
    if (this.currentView === 'month') {
      return (
        this._adapter.getYear(date1) === this._adapter.getYear(date2) &&
        this._adapter.getMonth(date1) === this._adapter.getMonth(date2)
      );
    }
    if (this.currentView === 'year') {
      return this._adapter.getYear(date1) === this._adapter.getYear(date2);
    }
    // Otherwise we are in 'multi-year' view.
    return isSameMultiYearView(this._adapter, date1, date2, this.minDate, this.maxDate);
  }

  private calendarState(direction: string): void {
    this._calendarState = direction;
  }

  private _2digit(n: number) {
    return ('00' + n).slice(-2);
  }

  /** Returns the component instance that corresponds to the current calendar view. */
  private _getCurrentViewComponent() {
    return this.monthView || this.yearView || this.multiYearView || this.timeView;
  }

  /** Focuses the active date. */
  focusActiveCell() {
    this._getCurrentViewComponent()._focusActiveCell(false);
  }
}
