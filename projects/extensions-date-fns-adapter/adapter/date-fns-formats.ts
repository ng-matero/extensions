import { MtxDatetimeFormats } from '@ng-matero/extensions/core';

export const MTX_DATE_FNS_FORMATS: MtxDatetimeFormats = {
  parse: {
    dateInput: 'dd/MM/yyyy',
    monthInput: 'LLLL',
    yearInput: 'yyyy',
    timeInput: 'HH:mm',
    datetimeInput: 'dd/MM/yyyy HH:mm a',
  },
  display: {
    dateInput: 'dd/MM/yyyy',
    monthInput: 'LLLL',
    yearInput: 'yyyy',
    timeInput: 'HH:mm',
    datetimeInput: 'dd/MM/yyyy HH:mm a',

    monthYearLabel: 'yyyy',
    dateA11yLabel: 'LLLL dd, yyyy',
    monthYearA11yLabel: 'MMMM yyyy',
    popupHeaderDateLabel: 'ccc, dd LLL',
  },
};
