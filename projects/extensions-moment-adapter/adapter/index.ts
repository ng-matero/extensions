import { NgModule, Provider } from '@angular/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MatMomentDateAdapterOptions,
  MomentDateAdapter,
  MomentDateModule,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS,
  MtxDatetimeFormats,
} from '@dcnx/mat-extensions/core';
import { MomentDatetimeAdapter } from './moment-datetime-adapter';
import { MTX_MOMENT_DATETIME_FORMATS } from './moment-datetime-formats';

export * from './moment-datetime-adapter';
export * from './moment-datetime-formats';

@NgModule({
  imports: [MomentDateModule],
  providers: [{ provide: DatetimeAdapter, useClass: MomentDatetimeAdapter }],
})
export class MomentDatetimeModule {}

export function provideMomentDatetimeAdapter(
  formats: MtxDatetimeFormats = MTX_MOMENT_DATETIME_FORMATS,
  options?: MatMomentDateAdapterOptions
): Provider[] {
  const providers: Provider[] = [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: DatetimeAdapter, useClass: MomentDatetimeAdapter },
    { provide: MTX_DATETIME_FORMATS, useValue: formats },
  ];

  if (options) {
    providers.push({ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: options });
  }

  return providers;
}

@NgModule({
  providers: [provideMomentDatetimeAdapter()],
})
export class MtxMomentDatetimeModule {}

/**
 * @deprecated Use `MtxMomentDatetimeModule` instead.
 */
export const MatMomentDatetimeModule = MtxMomentDatetimeModule;
