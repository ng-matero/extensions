import { NgModule } from '@angular/core';
import { MatLuxonDateModule, LuxonDateModule } from '@angular/material-luxon-adapter';
import { DatetimeAdapter, MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { LuxonDatetimeAdapter } from './luxon-datetime-adapter';
import { MTX_LUXON_DATETIME_FORMATS } from './luxon-datetime-formats';

export * from './luxon-datetime-adapter';
export * from './luxon-datetime-formats';

@NgModule({
  imports: [LuxonDateModule],
  providers: [
    {
      provide: DatetimeAdapter,
      useClass: LuxonDatetimeAdapter,
    },
  ],
})
export class LuxonDatetimeModule {}

@NgModule({
  imports: [LuxonDatetimeModule, MatLuxonDateModule],
  providers: [{ provide: MTX_DATETIME_FORMATS, useValue: MTX_LUXON_DATETIME_FORMATS }],
})
export class MatLuxonDatetimeModule {}
