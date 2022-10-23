import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { MtxMomentDatetimeModule } from '@ng-matero/extensions-moment-adapter';

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
