import {
  DOWN_ARROW,
  END,
  ENTER,
  HOME,
  LEFT_ARROW,
  PAGE_DOWN,
  PAGE_UP,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
} from '@angular/cdk/keycodes';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS,
  MtxDatetimeFormats,
} from '@ng-matero/extensions/core';
import { MtxCalendarBody, MtxCalendarCell } from './calendar-body';
import { createMissingDateImplError } from './datetimepicker-errors';
import { MtxDatetimepickerType } from './datetimepicker-types';
import { Directionality } from '@angular/cdk/bidi';

/**
 * An internal component used to display a single year in the datetimepicker.
 * @docs-private
 */
@Component({
  selector: 'mtx-year-view',
  templateUrl: 'year-view.html',
  exportAs: 'mtxYearView',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MtxCalendarBody],
})
export class MtxYearView<D> implements AfterContentInit {
  _adapter = inject<DatetimeAdapter<D>>(DatetimeAdapter, { optional: true })!;
  private _dir = inject(Directionality, { optional: true });
  private _dateFormats = inject<MtxDatetimeFormats>(MTX_DATETIME_FORMATS, { optional: true })!;

  @Input() type: MtxDatetimepickerType = 'date';

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D) => boolean;

  /** Emits when a new month is selected. */
  @Output() selectedChange = new EventEmitter<D>();

  /** Emits when any date is selected. */
  @Output() readonly _userSelection = new EventEmitter<void>();

  /** Emits when any date is activated. */
  @Output() readonly activeDateChange: EventEmitter<D> = new EventEmitter<D>();

  /** The body of calendar table */
  @ViewChild(MtxCalendarBody) _mtxCalendarBody!: MtxCalendarBody;

  /** Grid of calendar cells representing the months of the year. */
  _months!: MtxCalendarCell[][];

  /** The label for this year (e.g. "2017"). */
  _yearLabel!: string;

  /** The month in this year that today falls on. Null if today is in a different year. */
  _todayMonth!: number | null;

  /**
   * The month in this year that the selected Date falls on.
   * Null if the selected Date is in a different year.
   */
  _selectedMonth!: number | null;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    if (!this._adapter) {
      throw createMissingDateImplError('DatetimeAdapter');
    }

    if (!this._dateFormats) {
      throw createMissingDateImplError('MTX_DATETIME_FORMATS');
    }

    this._activeDate = this._adapter.today();
  }

  /** The date to display in this year view (everything other than the year is ignored). */
  @Input()
  get activeDate(): D {
    return this._activeDate;
  }
  set activeDate(value: D) {
    const oldActiveDate = this._activeDate;
    this._activeDate = value || this._adapter.today();
    if (
      oldActiveDate &&
      this._activeDate &&
      !this._adapter.sameYear(oldActiveDate, this._activeDate)
    ) {
      this._init();
    }
  }
  private _activeDate: D;

  /** The currently selected date. */
  @Input()
  get selected(): D | null {
    return this._selected;
  }
  set selected(value: D | null) {
    this._selected = value;
    this._selectedMonth = this._getMonthInCurrentYear(this.selected);
  }
  private _selected: D | null = null;

  ngAfterContentInit() {
    this._init();
  }

  /** Handles when a new month is selected. */
  _monthSelected(month: number) {
    const normalizedDate = this._adapter.createDatetime(
      this._adapter.getYear(this.activeDate),
      month,
      1,
      0,
      0
    );

    const dateObject = this._adapter.createDatetime(
      this._adapter.getYear(this.activeDate),
      month,
      Math.min(
        this._adapter.getDate(this.activeDate),
        this._adapter.getNumDaysInMonth(normalizedDate)
      ),
      this._adapter.getHour(this.activeDate),
      this._adapter.getMinute(this.activeDate)
    );

    this.selectedChange.emit(dateObject);
    this._activeDate = dateObject;

    if (this.type === 'month') {
      this._userSelection.emit();
    }
  }

  /** Initializes this month view. */
  private _init() {
    this._selectedMonth = this._getMonthInCurrentYear(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._adapter.today());
    this._yearLabel = this._adapter.getYearName(this.activeDate);

    const monthNames = this._adapter.getMonthNames('short');
    // First row of months only contains 5 elements so we can fit the year label on the same row.
    this._months = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
    ].map(row => row.map(month => this._createCellForMonth(month, monthNames[month])));
  }

  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  private _getMonthInCurrentYear(date: D | null) {
    return date && this._adapter.sameYear(date, this.activeDate)
      ? this._adapter.getMonth(date)
      : null;
  }

  /** Creates an MdCalendarCell for the given month. */
  private _createCellForMonth(month: number, monthName: string) {
    const ariaLabel = this._adapter.format(
      this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        month,
        1,
        this._adapter.getHour(this.activeDate),
        this._adapter.getMinute(this.activeDate)
      ),
      this._dateFormats.display.monthYearA11yLabel
    );
    return new MtxCalendarCell(
      month,
      monthName.toLocaleUpperCase(),
      ariaLabel,
      this._isMonthEnabled(month)
    );
  }

  /** Whether the given month is enabled. */
  private _isMonthEnabled(month: number) {
    if (!this.dateFilter) {
      return true;
    }

    const firstOfMonth = this._adapter.createDatetime(
      this._adapter.getYear(this.activeDate),
      month,
      1,
      this._adapter.getHour(this.activeDate),
      this._adapter.getMinute(this.activeDate)
    );

    // If any date in the month is enabled count the month as enabled.
    for (
      let date = firstOfMonth;
      this._adapter.getMonth(date) === month;
      date = this._adapter.addCalendarDays(date, 1)
    ) {
      if (this.dateFilter(date)) {
        return true;
      }
    }

    return false;
  }

  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event: KeyboardEvent): void {
    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
    // disabled ones from being selected. This may not be ideal, we should look into whether
    // navigation should skip over disabled dates, and if so, how to implement that efficiently.

    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();

    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._adapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._adapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._adapter.addCalendarMonths(this._activeDate, -4);
        break;
      case DOWN_ARROW:
        this.activeDate = this._adapter.addCalendarMonths(this._activeDate, 4);
        break;
      case HOME:
        this.activeDate = this._adapter.addCalendarMonths(
          this._activeDate,
          -this._adapter.getMonth(this._activeDate)
        );
        break;
      case END:
        this.activeDate = this._adapter.addCalendarMonths(
          this._activeDate,
          11 - this._adapter.getMonth(this._activeDate)
        );
        break;
      case PAGE_UP:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case PAGE_DOWN:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case ENTER:
      case SPACE:
        this._monthSelected(this._adapter.getMonth(this._activeDate));
        break;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }

    if (this._adapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }

    this._focusActiveCell();
    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }

  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._mtxCalendarBody._focusActiveCell();
  }

  /** Determines whether the user has the RTL layout direction. */
  private _isRtl() {
    return this._dir && this._dir.value === 'rtl';
  }
}
