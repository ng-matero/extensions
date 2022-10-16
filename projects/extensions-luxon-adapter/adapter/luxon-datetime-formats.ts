import { MtxDatetimeFormats } from '@ng-matero/extensions/core';

export const MTX_LUXON_DATETIME_FORMATS: MtxDatetimeFormats = {
  parse: {
    dateInput: 'D',
    monthInput: 'LLLL',
    yearInput: 'yyyy',
    timeInput: 't',
    datetimeInput: 'f',
  },
  display: {
    dateInput: 'D',
    monthInput: 'LLLL',
    yearInput: 'yyyy',
    datetimeInput: 'f',
    timeInput: 't',
    monthYearLabel: 'yyyy',
    dateA11yLabel: 'DDD',
    monthYearA11yLabel: 'LLLL yyyy',
    popupHeaderDateLabel: 'ccc, dd LLL',
  },
};
