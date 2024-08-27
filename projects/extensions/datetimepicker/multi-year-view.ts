import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Optional,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS,
  MtxDatetimeFormats,
} from '@dcnx/mat-extensions/core';
import { MtxCalendarBody, MtxCalendarCell } from './calendar-body';
import { mtxDatetimepickerAnimations } from './datetimepicker-animations';
import { createMissingDateImplError } from './datetimepicker-errors';
import { MtxDatetimepickerType } from './datetimepicker-types';

export const yearsPerPage = 24;

export const yearsPerRow = 4;

/**
 * An internal component used to display multiple years in the datetimepicker.
 * @docs-private
 */
@Component({
  selector: 'mtx-multi-year-view',
  templateUrl: 'multi-year-view.html',
  exportAs: 'mtxMultiYearView',
  animations: [mtxDatetimepickerAnimations.slideCalendar],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MtxCalendarBody],
})
export class MtxMultiYearView<D> implements AfterContentInit {
  @Input() type: MtxDatetimepickerType = 'date';

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D) => boolean;

  /** Emits when a new month is selected. */
  @Output() selectedChange = new EventEmitter<D>();

  /** Emits when any date is selected. */
  @Output() readonly _userSelection = new EventEmitter<void>();

  /** Grid of calendar cells representing the years in the range. */
  _years!: MtxCalendarCell[][];

  /** The label for this year range (e.g. "2000-2020"). */
  _yearLabel!: string;

  /** The year in this range that today falls on. Null if today is in a different range. */
  _todayYear!: number;

  /**
   * The year in this range that the selected Date falls on.
   * Null if the selected Date is in a different range.
   */
  _selectedYear!: number | null;

  _calendarState!: string;

  constructor(
    @Optional() public _adapter: DatetimeAdapter<D>,
    @Optional() @Inject(MTX_DATETIME_FORMATS) private _dateFormats: MtxDatetimeFormats
  ) {
    if (!this._adapter) {
      throw createMissingDateImplError('DatetimeAdapter');
    }

    if (!this._dateFormats) {
      throw createMissingDateImplError('MTX_DATETIME_FORMATS');
    }

    this._activeDate = this._adapter.today();
  }

  /** The date to display in this multi year view */
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
      !isSameMultiYearView(
        this._adapter,
        oldActiveDate,
        this._activeDate,
        this.minDate,
        this.maxDate
      )
    ) {
      this._init();
    }
  }
  private _activeDate: D;

  /** The currently selected date. */
  @Input()
  get selected(): D {
    return this._selected;
  }
  set selected(value: D) {
    this._selected = value;
    this._selectedYear = this._selected && this._adapter.getYear(this._selected);
  }
  private _selected!: D;

  /** The minimum selectable date. */
  @Input()
  get minDate(): D | null {
    return this._minDate;
  }
  set minDate(value: D | null) {
    this._minDate = this._getValidDateOrNull(this._adapter.deserialize(value));
  }
  private _minDate!: D | null;

  /** The maximum selectable date. */
  @Input()
  get maxDate(): D | null {
    return this._maxDate;
  }
  set maxDate(value: D | null) {
    this._maxDate = this._getValidDateOrNull(this._adapter.deserialize(value));
  }
  private _maxDate!: D | null;

  ngAfterContentInit() {
    this._init();
  }

  /** Handles when a new year is selected. */
  _yearSelected(year: number) {
    const month = this._adapter.getMonth(this.activeDate);
    const normalizedDate = this._adapter.createDatetime(year, month, 1, 0, 0);

    const dateObject = this._adapter.createDatetime(
      year,
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

    if (this.type === 'year') {
      this._userSelection.emit();
    }
  }

  _getActiveCell(): number {
    return getActiveOffset(this._adapter, this.activeDate, this.minDate, this.maxDate);
  }

  _calendarStateDone() {
    this._calendarState = '';
  }

  /** Initializes this year view. */
  private _init() {
    this._todayYear = this._adapter.getYear(this._adapter.today());
    this._yearLabel = this._adapter.getYearName(this.activeDate);

    const activeYear = this._adapter.getYear(this.activeDate);

    const minYearOfPage =
      activeYear - getActiveOffset(this._adapter, this.activeDate, this.minDate, this.maxDate);

    this._years = [];
    for (let i = 0, row: number[] = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);
      if (row.length === yearsPerRow) {
        this._years.push(row.map(year => this._createCellForYear(year)));
        row = [];
      }
    }
  }

  /** Creates an MtxCalendarCell for the given year. */
  private _createCellForYear(year: number) {
    const yearName = this._adapter.getYearName(this._adapter.createDate(year, 0, 1));
    return new MtxCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
  }

  /** Whether the given year is enabled. */
  private _shouldEnableYear(year: number) {
    // disable if the year is greater than maxDate lower than minDate
    if (
      year === undefined ||
      year === null ||
      (this.maxDate && year > this._adapter.getYear(this.maxDate)) ||
      (this.minDate && year < this._adapter.getYear(this.minDate))
    ) {
      return false;
    }

    // enable if it reaches here and there's no filter defined
    if (!this.dateFilter) {
      return true;
    }

    const firstOfYear = this._adapter.createDate(year, 0, 1);

    // If any date in the year is enabled count the year as enabled.
    for (
      let date = firstOfYear;
      this._adapter.getYear(date) === year;
      date = this._adapter.addCalendarDays(date, 1)
    ) {
      if (this.dateFilter(date)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Gets the year in this years range that the given Date falls on.
   * Returns null if the given Date is not in this range.
   */
  private _getYearInCurrentRange(date: D) {
    const year = this._adapter.getYear(date);
    return this._isInRange(year) ? year : null;
  }

  /**
   * Validate if the current year is in the current range
   * Returns true if is in range else returns false
   */
  private _isInRange(year: number): boolean {
    return true;
  }

  /**
   * @param obj The object to check.
   * @returns The given object if it is both a date instance and valid, otherwise null.
   */
  private _getValidDateOrNull(obj: any): D | null {
    return this._adapter.isDateInstance(obj) && this._adapter.isValid(obj) ? obj : null;
  }
}

export function isSameMultiYearView<D>(
  dateAdapter: DatetimeAdapter<D>,
  date1: D,
  date2: D,
  minDate: D | null,
  maxDate: D | null
): boolean {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return (
    Math.floor((year1 - startingYear) / yearsPerPage) ===
    Math.floor((year2 - startingYear) / yearsPerPage)
  );
}

/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */
export function getActiveOffset<D>(
  dateAdapter: DatetimeAdapter<D>,
  activeDate: D,
  minDate: D | null,
  maxDate: D | null
): number {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}

/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */
function getStartingYear<D>(
  dateAdapter: DatetimeAdapter<D>,
  minDate: D | null,
  maxDate: D | null
): number {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}

/** Gets remainder that is non-negative, even if first number is negative */
function euclideanModulo(a: number, b: number): number {
  return ((a % b) + b) % b;
}
