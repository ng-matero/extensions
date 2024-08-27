import { MtxDatetimeFormats } from '@dcnx/mat-extensions/core';

export const MTX_MOMENT_DATETIME_FORMATS: MtxDatetimeFormats = {
  parse: {
    dateInput: 'L',
    monthInput: 'MMMM',
    yearInput: 'YYYY',
    datetimeInput: 'L LT',
    timeInput: 'LT',
  },
  display: {
    dateInput: 'L',
    monthInput: 'MMMM',
    yearInput: 'YYYY',
    datetimeInput: 'L LT',
    timeInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
    popupHeaderDateLabel: 'ddd, DD MMM',
  },
};
