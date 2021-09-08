import { NgModule } from '@angular/core';
import { MatMomentDateModule, MomentDateModule } from '@angular/material-moment-adapter';
import { DatetimeAdapter, MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { MomentDatetimeAdapter } from './moment-datetime-adapter';
import { MTX_MOMENT_DATETIME_FORMATS } from './moment-datetime-formats';

export * from './moment-datetime-adapter';
export * from './moment-datetime-formats';

@NgModule({
  imports: [MomentDateModule],
  providers: [
    {
      provide: DatetimeAdapter,
      useClass: MomentDatetimeAdapter,
    },
  ],
})
export class MomentDatetimeModule {}

@NgModule({
  imports: [MomentDatetimeModule, MatMomentDateModule],
  providers: [{ provide: MTX_DATETIME_FORMATS, useValue: MTX_MOMENT_DATETIME_FORMATS }],
})
export class MatMomentDatetimeModule {}
