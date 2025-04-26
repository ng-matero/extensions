import { InjectionToken } from '@angular/core';

export interface MtxDatetimeFormats {
  parse: {
    dateInput?: any;
    monthInput?: any;
    yearInput?: any;
    timeInput?: any;
    timeWithSecondsInput?: any;
    datetimeInput?: any;
    datetimeWithSecondsInput?: any;
  };
  display: {
    dateInput: any;
    monthInput: any;
    yearInput?: any;
    timeInput: any;
    timeWithSecondsInput?: any;
    datetimeInput: any;
    datetimeWithSecondsInput?: any;
    monthYearLabel: any;
    dateA11yLabel: any;
    monthYearA11yLabel: any;
    popupHeaderDateLabel: any;
  };
}

export const MTX_DATETIME_FORMATS = new InjectionToken<MtxDatetimeFormats>('mtx-datetime-formats');
