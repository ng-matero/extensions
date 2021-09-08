import { NgModule } from '@angular/core';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';
import { DatetimeAdapter } from './datetime-adapter';
import { MTX_DATETIME_FORMATS } from './datetime-formats';
import { NativeDatetimeAdapter } from './native-datetime-adapter';
import { MTX_NATIVE_DATETIME_FORMATS } from './native-datetime-formats';

@NgModule({
  imports: [NativeDateModule],
  providers: [
    {
      provide: DatetimeAdapter,
      useClass: NativeDatetimeAdapter,
    },
  ],
})
export class NativeDatetimeModule {}

@NgModule({
  imports: [NativeDatetimeModule, MatNativeDateModule],
  providers: [{ provide: MTX_DATETIME_FORMATS, useValue: MTX_NATIVE_DATETIME_FORMATS }],
})
export class MtxNativeDatetimeModule {}
