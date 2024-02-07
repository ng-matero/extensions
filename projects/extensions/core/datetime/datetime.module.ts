import { NgModule, Provider } from '@angular/core';
import { DateAdapter, NativeDateAdapter, NativeDateModule } from '@angular/material/core';
import { DatetimeAdapter } from './datetime-adapter';
import { MTX_DATETIME_FORMATS, MtxDatetimeFormats } from './datetime-formats';
import { NativeDatetimeAdapter } from './native-datetime-adapter';
import { MTX_NATIVE_DATETIME_FORMATS } from './native-datetime-formats';

@NgModule({
  imports: [NativeDateModule],
  providers: [{ provide: DatetimeAdapter, useClass: NativeDatetimeAdapter }],
})
export class NativeDatetimeModule {}

export function provideNativeDatetimeAdapter(
  formats: MtxDatetimeFormats = MTX_NATIVE_DATETIME_FORMATS
): Provider[] {
  return [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: DatetimeAdapter, useClass: NativeDatetimeAdapter },
    { provide: MTX_DATETIME_FORMATS, useValue: formats },
  ];
}

@NgModule({
  providers: [provideNativeDatetimeAdapter()],
})
export class MtxNativeDatetimeModule {}
