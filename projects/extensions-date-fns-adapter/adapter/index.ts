import { NgModule } from '@angular/core';
import { MatDateFnsModule, DateFnsModule } from '@angular/material-date-fns-adapter';
import { DatetimeAdapter, MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { DateFnsDateTimeAdapter } from './date-fns-adapter';
import { MTX_DATE_FNS_FORMATS } from './date-fns-formats';

export * from './date-fns-adapter';
export * from './date-fns-formats';

@NgModule({
  imports: [DateFnsModule],
  providers: [
    {
      provide: DatetimeAdapter,
      useClass: DateFnsDateTimeAdapter,
    },
  ],
})
export class DateFnsDatetimeModule {}

@NgModule({
  imports: [DateFnsDatetimeModule, MatDateFnsModule],
  providers: [{ provide: MTX_DATETIME_FORMATS, useValue: MTX_DATE_FNS_FORMATS }],
})
export class MatDateFnsDatetimeModule {}
