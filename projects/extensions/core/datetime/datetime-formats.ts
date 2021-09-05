import { InjectionToken } from '@angular/core';

export interface MatDatetimeFormats {
  parse: {
    dateInput?: any;
    monthInput?: any;
    timeInput?: any;
    datetimeInput?: any;
  };
  display: {
    dateInput: any;
    monthInput: any;
    timeInput: any;
    datetimeInput: any;
    monthYearLabel: any;
    dateA11yLabel: any;
    monthYearA11yLabel: any;
    popupHeaderDateLabel: any;
  };
}

export const MAT_DATETIME_FORMATS = new InjectionToken<MatDatetimeFormats>('mat-datetime-formats');
