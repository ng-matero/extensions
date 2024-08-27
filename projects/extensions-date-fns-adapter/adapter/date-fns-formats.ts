import { MtxDatetimeFormats } from '@dcnx/mat-extensions/core';

export const MTX_DATE_FNS_FORMATS: MtxDatetimeFormats = {
  parse: {
    dateInput: 'P',
    monthInput: 'LLLL',
    yearInput: 'yyyy',
    datetimeInput: 'P p',
    timeInput: 'p',
  },
  display: {
    dateInput: 'P',
    monthInput: 'LLLL',
    yearInput: 'yyyy',
    datetimeInput: 'P p',
    timeInput: 'p',
    monthYearLabel: 'yyyy',
    dateA11yLabel: 'LLLL dd, yyyy',
    monthYearA11yLabel: 'MMMM yyyy',
    popupHeaderDateLabel: 'ccc, dd LLL',
  },
};
