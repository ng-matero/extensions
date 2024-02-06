import { NgModule, Provider } from '@angular/core';
import { LuxonDateModule } from '@angular/material-luxon-adapter';
import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS,
  MtxDatetimeFormats,
} from '@ng-matero/extensions/core';
import { LuxonDatetimeAdapter } from './luxon-datetime-adapter';
import { MTX_LUXON_DATETIME_FORMATS } from './luxon-datetime-formats';

export * from './luxon-datetime-adapter';
export * from './luxon-datetime-formats';

@NgModule({
  imports: [LuxonDateModule],
  providers: [{ provide: DatetimeAdapter, useClass: LuxonDatetimeAdapter }],
})
export class LuxonDatetimeModule {}

export function provideLuxonDatetimeAdapter(
  formats: MtxDatetimeFormats = MTX_LUXON_DATETIME_FORMATS
): Provider[] {
  return [
    { provide: DatetimeAdapter, useClass: LuxonDatetimeAdapter },
    { provide: MTX_DATETIME_FORMATS, useValue: formats },
  ];
}

@NgModule({
  providers: [provideLuxonDatetimeAdapter()],
})
export class MtxLuxonDatetimeModule {}

/**
 * @deprecated Use `MtxLuxonDatetimeModule` instead.
 */
export const MatLuxonDatetimeModule = MtxLuxonDatetimeModule;
