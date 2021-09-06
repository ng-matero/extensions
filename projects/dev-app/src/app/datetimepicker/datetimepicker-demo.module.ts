import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MatDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';

import { DatetimepickerDemoComponent } from './datetimepicker-demo.component';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { MomentDatetimeAdapter } from '@ng-matero/extensions-moment-adapter';
import { DatetimeAdapter, MAT_DATETIME_FORMATS } from '@ng-matero/extensions';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DatetimepickerDemoComponent }]),
    MatDatetimepickerModule,
  ],
  declarations: [DatetimepickerDemoComponent],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: DatetimeAdapter,
      useClass: MomentDatetimeAdapter,
    },
    {
      provide: MAT_DATETIME_FORMATS,
      useValue: {
        parse: {
          dateInput: 'YYYY-MM-DD HH:mm',
          monthInput: 'MMMM',
          timeInput: 'HH:mm',
          datetimeInput: 'YYYY-MM-DD HH:mm',
        },
        display: {
          dateInput: 'YYYY-MM-DD HH:mm',
          monthInput: 'MMMM',
          datetimeInput: 'YYYY-MM-DD HH:mm',
          timeInput: 'HH:mm',
          monthYearLabel: 'YYYY MMM',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
          popupHeaderDateLabel: 'MMMM DD, ddd',
        },
      },
    },
  ],
})
export class DatetimepickerDemoModule {}
