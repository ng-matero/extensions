import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MtxDatetimepickerIntl {
  /**
   * Stream to emit from when labels are changed. Use this to notify components when the labels have
   * changed after initialization.
   */
  readonly changes = new Subject<void>();

  /** A label for the calendar popup (used by screen readers). */
  calendarLabel = 'Calendar';

  /** A label for the button used to open the calendar popup (used by screen readers). */
  openCalendarLabel = 'Open calendar';

  /** Label for the button used to close the calendar popup. */
  closeCalendarLabel = 'Close calendar';

  /** A label for the previous month button (used by screen readers). */
  prevMonthLabel = 'Previous month';

  /** A label for the next month button (used by screen readers). */
  nextMonthLabel = 'Next month';

  /** A label for the previous year button (used by screen readers). */
  prevYearLabel = 'Previous year';

  /** A label for the next year button (used by screen readers). */
  nextYearLabel = 'Next year';

  /** A label for the previous multi-year button (used by screen readers). */
  prevMultiYearLabel = 'Previous 24 years';

  /** A label for the next multi-year button (used by screen readers). */
  nextMultiYearLabel = 'Next 24 years';

  /** A label for the 'switch to month view' button (used by screen readers). */
  switchToMonthViewLabel = 'Choose date';

  /** A label for the 'switch to year view' button (used by screen readers). */
  switchToYearViewLabel = 'Choose month';

  /** A label for the 'switch to multi-year view' button (used by screen readers). */
  switchToMultiYearViewLabel = 'Choose month and year';

  /** A label for the first date of a range of dates (used by screen readers). */
  startDateLabel = 'Start date';

  /** A label for the last date of a range of dates (used by screen readers). */
  endDateLabel = 'End date';

  /** Formats a range of years (used for visuals). */
  formatYearRange(start: string, end: string): string {
    return `${start} \u2013 ${end}`;
  }

  /** Formats a label for a range of years (used by screen readers). */
  formatYearRangeLabel(start: string, end: string): string {
    return `${start} to ${end}`;
  }

  /** A label for the 'switch to clock hour view' button (used by screen readers). */
  switchToClockHourViewLabel = 'Choose hour';

  /** A label for the 'switch to clock minute view' button (used by screen readers). */
  switchToClockMinuteViewLabel = 'Choose minute';

  /** A label for the 'switch to clock seconds view' button (used by screen readers). */
  switchToClockSecondViewLabel = 'Choose seconds';

  /** Label used for ok button within the manual time input. */
  okLabel = 'OK';

  /** Label used for cancel button within the manual time input. */
  cancelLabel = 'Cancel';
}
