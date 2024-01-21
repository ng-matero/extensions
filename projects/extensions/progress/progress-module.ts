import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxProgress } from './progress';

@NgModule({
  imports: [CommonModule, MtxProgress],
  exports: [MtxProgress],
})
export class MtxProgressModule {}
