import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { MtxMomentDatetimeModule } from '@ng-matero/extensions-moment-adapter';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MatMomentDateAdapterOptions,
} from '@angular/material-moment-adapter';
import { DatetimepickerDemoComponent } from './datetimepicker-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DatetimepickerDemoComponent }]),
    MtxDatetimepickerModule,
    MtxMomentDatetimeModule,
  ],
  declarations: [DatetimepickerDemoComponent],
  providers: [
    {
      provide: MTX_DATETIME_FORMATS,
      useValue: {
        parse: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          yearInput: 'YYYY',
          timeInput: 'HH:mm',
          timeWithSecondsInput: 'HH:mm:ss',
          datetimeInput: 'YYYY-MM-DD HH:mm',
          datetimeWithSecondsInput: 'YYYY-MM-DD HH:mm:ss',
        },
        display: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          yearInput: 'YYYY',
          timeInput: 'HH:mm',
          timeWithSecondsInput: 'HH:mm:ss',
          datetimeInput: 'YYYY-MM-DD HH:mm',
          datetimeWithSecondsInput: 'YYYY-MM-DD HH:mm:ss',
          monthYearLabel: 'YYYY MMMM',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
          popupHeaderDateLabel: 'MMM DD, ddd',
        },
      },
    },
    {
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      // for testing date adapter settings
      useValue: {
        useUtc: false,
      } as MatMomentDateAdapterOptions,
    },
  ],
})
export class DatetimepickerDemoModule {}
