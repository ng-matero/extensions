import { NgModule } from '@angular/core';
import { MatMomentDateModule, MomentDateModule } from '@angular/material-moment-adapter';
import { DatetimeAdapter, MAT_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { MomentDatetimeAdapter } from './moment-datetime-adapter';
import { MAT_MOMENT_DATETIME_FORMATS } from './moment-datetime-formats';

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
  providers: [{ provide: MAT_DATETIME_FORMATS, useValue: MAT_MOMENT_DATETIME_FORMATS }],
})
export class MatMomentDatetimeModule {}
