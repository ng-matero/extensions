import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxAlert } from './alert';

@NgModule({
  imports: [CommonModule],
  exports: [MtxAlert],
  declarations: [MtxAlert],
})
export class MtxAlertModule {}
