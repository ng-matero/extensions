import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';

import { DatetimepickerDemoComponent } from './datetimepicker-demo.component';
import { DateAdapter } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MomentDatetimeAdapter } from '@ng-matero/extensions-moment-adapter/adapter';
import { DatetimeAdapter, MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DatetimepickerDemoComponent }]),
    MtxDatetimepickerModule,
  ],
  declarations: [DatetimepickerDemoComponent],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
    },
    {
      provide: DatetimeAdapter,
      useClass: MomentDatetimeAdapter,
    },
    {
      provide: MTX_DATETIME_FORMATS,
      useValue: {
        parse: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          yearInput: 'YYYY',
          timeInput: 'HH:mm',
          datetimeInput: 'YYYY-MM-DD HH:mm',
        },
        display: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          yearInput: 'YYYY',
          timeInput: 'HH:mm',
          datetimeInput: 'YYYY-MM-DD HH:mm',
          monthYearLabel: 'YYYY MMMM',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
          popupHeaderDateLabel: 'MMM DD, ddd',
        },
      },
    },
  ],
})
export class DatetimepickerDemoModule {}
