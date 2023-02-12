import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxToObservablePipe } from './to-observable.pipe';
import { MtxIsTemplateRefPipe } from './is-template-ref.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [MtxToObservablePipe, MtxIsTemplateRefPipe],
  declarations: [MtxToObservablePipe, MtxIsTemplateRefPipe],
})
export class MtxPipesModule {}
