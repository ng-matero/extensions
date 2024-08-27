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

const DAYS_PER_WEEK = 7;

/**
 * An internal component used to display a single month in the datetimepicker.
 * @docs-private
 */
@Component({
  selector: 'mtx-month-view',
  templateUrl: 'month-view.html',
  exportAs: 'mtxMonthView',
  animations: [mtxDatetimepickerAnimations.slideCalendar],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MtxCalendarBody],
})
export class MtxMonthView<D> implements AfterContentInit {
  @Input() type: MtxDatetimepickerType = 'date';

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D) => boolean;

  /** Emits when a new date is selected. */
  @Output() selectedChange = new EventEmitter<D>();

  /** Emits when any date is selected. */
  @Output() readonly _userSelection = new EventEmitter<void>();

  /** Grid of calendar cells representing the dates of the month. */
  _weeks!: MtxCalendarCell[][];

  /** The number of blank cells in the first row before the 1st of the month. */
  _firstWeekOffset!: number;

  /**
   * The date of the month that the currently selected Date falls on.
   * Null if the currently selected Date is in another month.
   */
  _selectedDate!: number | null;

  /** The date of the month that today falls on. Null if today is in another month. */
  _todayDate!: number | null;

  /** The names of the weekdays. */
  _weekdays: { long: string; narrow: string }[];

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

    const firstDayOfWeek = this._adapter.getFirstDayOfWeek();
    const narrowWeekdays = this._adapter.getDayOfWeekNames('narrow');
    const longWeekdays = this._adapter.getDayOfWeekNames('long');

    // Rotate the labels for days of the week based on the configured first day of the week.
    const weekdays = longWeekdays.map((long, i) => {
      return { long, narrow: narrowWeekdays[i] };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));

    this._activeDate = this._adapter.today();
  }

  private _activeDate: D;

  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
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
      !this._adapter.sameMonthAndYear(oldActiveDate, this._activeDate)
    ) {
      this._init();
      if (this._adapter.isInNextMonth(oldActiveDate, this._activeDate)) {
        this.calendarState('right');
      } else {
        this.calendarState('left');
      }
    }
  }

  /** The currently selected date. */
  @Input()
  get selected(): D {
    return this._selected;
  }
  set selected(value: D) {
    this._selected = value;
    this._selectedDate = this._getDateInCurrentMonth(this.selected);
  }
  private _selected!: D;

  ngAfterContentInit(): void {
    this._init();
  }

  /** Handles when a new date is selected. */
  _dateSelected(date: number) {
    const dateObject = this._adapter.createDatetime(
      this._adapter.getYear(this.activeDate),
      this._adapter.getMonth(this.activeDate),
      date,
      this._adapter.getHour(this.activeDate),
      this._adapter.getMinute(this.activeDate)
    );
    this.selectedChange.emit(dateObject);
    this._activeDate = dateObject;

    if (this.type === 'date') {
      this._userSelection.emit();
    }
  }

  _calendarStateDone() {
    this._calendarState = '';
  }

  /** Initializes this month view. */
  private _init() {
    this._selectedDate = this._getDateInCurrentMonth(this.selected);
    this._todayDate = this._getDateInCurrentMonth(this._adapter.today());

    const firstOfMonth = this._adapter.createDatetime(
      this._adapter.getYear(this.activeDate),
      this._adapter.getMonth(this.activeDate),
      1,
      this._adapter.getHour(this.activeDate),
      this._adapter.getMinute(this.activeDate)
    );
    this._firstWeekOffset =
      (DAYS_PER_WEEK +
        this._adapter.getDayOfWeek(firstOfMonth) -
        this._adapter.getFirstDayOfWeek()) %
      DAYS_PER_WEEK;

    this._createWeekCells();
  }

  /** Creates MdCalendarCells for the dates in this month. */
  private _createWeekCells() {
    const daysInMonth = this._adapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this._adapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell === DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        i + 1,
        this._adapter.getHour(this.activeDate),
        this._adapter.getMinute(this.activeDate)
      );
      const enabled = !this.dateFilter || this.dateFilter(date);
      const ariaLabel = this._adapter.format(date, this._dateFormats.display.dateA11yLabel);
      this._weeks[this._weeks.length - 1].push(
        new MtxCalendarCell(i + 1, dateNames[i], ariaLabel, enabled)
      );
    }
  }

  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  private _getDateInCurrentMonth(date: D): number | null {
    return this._adapter.sameMonthAndYear(date, this.activeDate)
      ? this._adapter.getDate(date)
      : null;
  }

  private calendarState(direction: string): void {
    this._calendarState = direction;
  }
}
