import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxHighlightBox } from './highlight-box';

@NgModule({
  imports: [CommonModule, MtxHighlightBox],
  exports: [MtxHighlightBox],
})
export class MtxHighlightBoxModule {}
