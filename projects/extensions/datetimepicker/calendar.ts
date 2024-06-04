import {
  DOWN_ARROW,
  END,
  ENTER,
  HOME,
  LEFT_ARROW,
  PAGE_DOWN,
  PAGE_UP,
  RIGHT_ARROW,
  UP_ARROW,
} from '@angular/cdk/keycodes';
import { CdkPortalOutlet, ComponentPortal, ComponentType, Portal } from '@angular/cdk/portal';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Injector,
  Input,
  NgZone,
  OnDestroy,
  Optional,
  Output,
  ViewEncapsulation,
  afterNextRender,
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
import { first } from 'rxjs/operators';

import { MtxClock, MtxClockView } from './clock';
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
  yearsPerRow,
} from './multi-year-view';
import { MtxTime } from './time';
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
    'tabindex': '0',
    '(keydown)': '_handleCalendarBodyKeydown($event)',
  },
  exportAs: 'mtxCalendar',
  animations: [mtxDatetimepickerAnimations.slideCalendar],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CdkPortalOutlet,
    MatButton,
    MatIconButton,
    MtxMonthView,
    MtxYearView,
    MtxMultiYearView,
    MtxTime,
    MtxClock,
  ],
})
export class MtxCalendar<D> implements AfterContentInit, OnDestroy {
  /** Whether to show multi-year view. */
  @Input({ transform: booleanAttribute }) multiYearSelector = false;

  /** Whether the clock uses 12 hour format. */
  @Input({ transform: booleanAttribute }) twelvehour = false;

  /** Whether the calendar should be started in month or year view. */
  @Input() startView: MtxCalendarView = 'month';

  /** Step over minutes. */
  @Input() timeInterval: number = 1;

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D, type: MtxDatetimepickerFilterType) => boolean;

  /** Prevent user to select same date time */
  @Input() preventSameDateTimeSelection = false;

  /** Input for custom header component */
  @Input() headerComponent!: ComponentType<any>;

  /** Emits when the currently selected date changes. */
  @Output() selectedChange: EventEmitter<D> = new EventEmitter<D>();

  /** Emits when the view has been changed. */
  @Output() viewChanged: EventEmitter<MtxCalendarView> = new EventEmitter<MtxCalendarView>();

  @Output() _userSelection = new EventEmitter<void>();

  _AMPM!: MtxAMPM;

  _clockView: MtxClockView = 'hour';

  _calendarState!: string;

  /** A portal containing the header component. */
  _calendarHeaderPortal!: Portal<any>;

  private _intlChanges: Subscription;

  private _clampedActiveDate!: D;

  private _injector = inject(Injector);

  constructor(
    private _elementRef: ElementRef,
    private _intl: MtxDatetimepickerIntl,
    private _ngZone: NgZone,
    @Optional() private _adapter: DatetimeAdapter<D>,
    @Optional() @Inject(MTX_DATETIME_FORMATS) private _dateFormats: MtxDatetimeFormats,
    _changeDetectorRef: ChangeDetectorRef
  ) {
    if (!this._adapter) {
      throw createMissingDateImplError('DatetimeAdapter');
    }

    if (!this._dateFormats) {
      throw createMissingDateImplError('MTX_DATETIME_FORMATS');
    }

    this._intlChanges = _intl.changes.subscribe(() => _changeDetectorRef.markForCheck());
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
   * Whether the calendar is in time mode. In time mode the calendar clock gets time input elements
   * rather then just clock. When touchUi is enabled this will be disabled
   */
  @Input({ transform: booleanAttribute }) timeInput = false;

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
  }

  /** Whether the calendar is in month view. */
  get currentView(): MtxCalendarView {
    return this._currentView;
  }
  set currentView(view: MtxCalendarView) {
    this._currentView = view;
    this.viewChanged.emit(view);
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

    if (this.type === 'year') {
      this.currentView = 'multi-year';
    } else if (this.type === 'month') {
      this.currentView = 'year';
    } else if (this.type === 'time') {
      this.currentView = 'clock';
    } else {
      this.currentView = this.startView || 'month';
    }
  }

  ngOnDestroy() {
    this._intlChanges.unsubscribe();
  }

  /** Handles date selection in the month view. */
  _dateSelected(date: D): void {
    if (this.type === 'date') {
      if (!this._adapter.sameDate(date, this.selected) || !this.preventSameDateTimeSelection) {
        this.selectedChange.emit(date);
      }
    } else {
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
    this._activeDate = this._updateDate(date);
    if (!this._adapter.sameDatetime(date, this.selected) || !this.preventSameDateTimeSelection) {
      this.selectedChange.emit(date);
    }
  }

  _dialTimeSelected(date: D): void {
    if (this._clockView !== 'minute') {
      this._activeDate = this._updateDate(date);
      this._clockView = 'minute';
    } else {
      if (!this._adapter.sameDatetime(date, this.selected) || !this.preventSameDateTimeSelection) {
        this.selectedChange.emit(date);
      }
    }
  }

  _onActiveDateChange(date: D) {
    this._activeDate = date;
  }

  _updateDate(date: D): D {
    if (this.twelvehour) {
      const HOUR = this._adapter.getHour(date);
      if (HOUR === 12) {
        if (this._AMPM === 'AM') {
          return this._adapter.addCalendarHours(date, -12);
        }
      } else if (this._AMPM === 'PM') {
        return this._adapter.addCalendarHours(date, 12);
      }
    }
    return date;
  }

  _selectAMPM(date: D) {
    const hour = this._adapter.getHour(date);
    if (hour > 11) {
      this._AMPM = 'PM';
    } else {
      this._AMPM = 'AM';
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

  /** Handles keydown events on the calendar body. */
  _handleCalendarBodyKeydown(event: KeyboardEvent): void {
    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
    // disabled ones from being selected. This may not be ideal, we should look into whether
    // navigation should skip over disabled dates, and if so, how to implement that efficiently.
    if (this.currentView === 'month') {
      this._handleCalendarBodyKeydownInMonthView(event);
    } else if (this.currentView === 'year') {
      this._handleCalendarBodyKeydownInYearView(event);
    } else if (this.currentView === 'multi-year') {
      this._handleCalendarBodyKeydownInMultiYearView(event);
    } else {
      this._handleCalendarBodyKeydownInClockView(event);
    }
  }

  _focusActiveCell() {
    afterNextRender(
      () => {
        this._elementRef.nativeElement.focus();
      },
      { injector: this._injector }
    );
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

  /** Handles keydown events on the calendar body when calendar is in month view. */
  private _handleCalendarBodyKeydownInMonthView(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case LEFT_ARROW:
        this._activeDate = this._adapter.addCalendarDays(this._activeDate, -1);
        break;
      case RIGHT_ARROW:
        this._activeDate = this._adapter.addCalendarDays(this._activeDate, 1);
        break;
      case UP_ARROW:
        this._activeDate = this._adapter.addCalendarDays(this._activeDate, -7);
        break;
      case DOWN_ARROW:
        this._activeDate = this._adapter.addCalendarDays(this._activeDate, 7);
        break;
      case HOME:
        this._activeDate = this._adapter.addCalendarDays(
          this._activeDate,
          1 - this._adapter.getDate(this._activeDate)
        );
        break;
      case END:
        this._activeDate = this._adapter.addCalendarDays(
          this._activeDate,
          this._adapter.getNumDaysInMonth(this._activeDate) -
            this._adapter.getDate(this._activeDate)
        );
        break;
      case PAGE_UP:
        this._activeDate = event.altKey
          ? this._adapter.addCalendarYears(this._activeDate, -1)
          : this._adapter.addCalendarMonths(this._activeDate, -1);
        break;
      case PAGE_DOWN:
        this._activeDate = event.altKey
          ? this._adapter.addCalendarYears(this._activeDate, 1)
          : this._adapter.addCalendarMonths(this._activeDate, 1);
        break;
      case ENTER:
        if (this._dateFilterForViews(this._activeDate)) {
          this._dateSelected(this._activeDate);
          // Prevent unexpected default actions such as form submission.
          event.preventDefault();
        }
        return;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }

    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }

  /** Handles keydown events on the calendar body when calendar is in year view. */
  private _handleCalendarBodyKeydownInYearView(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case LEFT_ARROW:
        this._activeDate = this._adapter.addCalendarMonths(this._activeDate, -1);
        break;
      case RIGHT_ARROW:
        this._activeDate = this._adapter.addCalendarMonths(this._activeDate, 1);
        break;
      case UP_ARROW:
        this._activeDate = this._prevMonthInSameCol(this._activeDate);
        break;
      case DOWN_ARROW:
        this._activeDate = this._nextMonthInSameCol(this._activeDate);
        break;
      case HOME:
        this._activeDate = this._adapter.addCalendarMonths(
          this._activeDate,
          -this._adapter.getMonth(this._activeDate)
        );
        break;
      case END:
        this._activeDate = this._adapter.addCalendarMonths(
          this._activeDate,
          11 - this._adapter.getMonth(this._activeDate)
        );
        break;
      case PAGE_UP:
        this._activeDate = this._adapter.addCalendarYears(
          this._activeDate,
          event.altKey ? -10 : -1
        );
        break;
      case PAGE_DOWN:
        this._activeDate = this._adapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case ENTER:
        this._monthSelected(this._activeDate);
        break;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }

    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }

  /** Handles keydown events on the calendar body when calendar is in multi-year view. */
  private _handleCalendarBodyKeydownInMultiYearView(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case LEFT_ARROW:
        this._activeDate = this._adapter.addCalendarYears(this._activeDate, -1);
        break;
      case RIGHT_ARROW:
        this._activeDate = this._adapter.addCalendarYears(this._activeDate, 1);
        break;
      case UP_ARROW:
        this._activeDate = this._adapter.addCalendarYears(this._activeDate, -yearsPerRow);
        break;
      case DOWN_ARROW:
        this._activeDate = this._adapter.addCalendarYears(this._activeDate, yearsPerRow);
        break;
      case HOME:
        this._activeDate = this._adapter.addCalendarYears(
          this._activeDate,
          -getActiveOffset(this._adapter, this._activeDate, this.minDate, this.maxDate)
        );
        break;
      case END:
        this._activeDate = this._adapter.addCalendarYears(
          this._activeDate,
          yearsPerPage -
            getActiveOffset(this._adapter, this._activeDate, this.minDate, this.maxDate) -
            1
        );
        break;
      case PAGE_UP:
        this._activeDate = this._adapter.addCalendarYears(
          this._activeDate,
          event.altKey ? -yearsPerPage * 10 : -yearsPerPage
        );
        break;
      case PAGE_DOWN:
        this._activeDate = this._adapter.addCalendarYears(
          this._activeDate,
          event.altKey ? yearsPerPage * 10 : yearsPerPage
        );
        break;
      case ENTER:
        this._yearSelected(this._activeDate);
        break;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }
  }

  /** Handles keydown events on the calendar body when calendar is in month view. */
  private _handleCalendarBodyKeydownInClockView(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case UP_ARROW:
        this._activeDate =
          this._clockView === 'hour'
            ? this._adapter.addCalendarHours(this._activeDate, 1)
            : this._adapter.addCalendarMinutes(this._activeDate, this.timeInterval);
        break;
      case DOWN_ARROW:
        this._activeDate =
          this._clockView === 'hour'
            ? this._adapter.addCalendarHours(this._activeDate, -1)
            : this._adapter.addCalendarMinutes(this._activeDate, -this.timeInterval);
        break;
      case ENTER:
        if (!this.timeInput) {
          this._dialTimeSelected(this._activeDate);
        }
        return;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }

    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }

  /**
   * Determine the date for the month that comes before the given month in the same column in the
   * calendar table.
   */
  private _prevMonthInSameCol(date: D): D {
    // Determine how many months to jump forward given that there are 2 empty slots at the beginning
    // of each year.
    const increment =
      this._adapter.getMonth(date) <= 4 ? -5 : this._adapter.getMonth(date) >= 7 ? -7 : -12;
    return this._adapter.addCalendarMonths(date, increment);
  }

  /**
   * Determine the date for the month that comes after the given month in the same column in the
   * calendar table.
   */
  private _nextMonthInSameCol(date: D): D {
    // Determine how many months to jump forward given that there are 2 empty slots at the beginning
    // of each year.
    const increment =
      this._adapter.getMonth(date) <= 4 ? 7 : this._adapter.getMonth(date) >= 7 ? 5 : 12;
    return this._adapter.addCalendarMonths(date, increment);
  }

  private calendarState(direction: string): void {
    this._calendarState = direction;
  }

  private _2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}
