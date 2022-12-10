import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxProgress } from './progress';

@NgModule({
  imports: [CommonModule],
  exports: [MtxProgress],
  declarations: [MtxProgress],
})
export class MtxProgressModule {}
