import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxToObservablePipe } from './to-observable.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [MtxToObservablePipe],
  declarations: [MtxToObservablePipe],
})
export class MtxPipesModule {}
