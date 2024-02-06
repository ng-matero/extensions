import { NgModule, Provider } from '@angular/core';
import { DateFnsModule } from '@angular/material-date-fns-adapter';
import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS,
  MtxDatetimeFormats,
} from '@ng-matero/extensions/core';
import { DateFnsDateTimeAdapter } from './date-fns-adapter';
import { MTX_DATE_FNS_FORMATS } from './date-fns-formats';

export * from './date-fns-adapter';
export * from './date-fns-formats';

@NgModule({
  imports: [DateFnsModule],
  providers: [{ provide: DatetimeAdapter, useClass: DateFnsDateTimeAdapter }],
})
export class DateFnsDatetimeModule {}

export function provideDateFnsDatetimeAdapter(
  formats: MtxDatetimeFormats = MTX_DATE_FNS_FORMATS
): Provider[] {
  return [
    { provide: DatetimeAdapter, useClass: DateFnsDateTimeAdapter },
    { provide: MTX_DATETIME_FORMATS, useValue: formats },
  ];
}

@NgModule({
  providers: [provideDateFnsDatetimeAdapter()],
})
export class MtxDateFnsDatetimeModule {}

/**
 * @deprecated Use `MtxDateFnsDatetimeModule` instead.
 */
export const MatDateFnsDatetimeModule = MtxDateFnsDatetimeModule;
