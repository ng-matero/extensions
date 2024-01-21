import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxAlert } from './alert';

@NgModule({
  imports: [CommonModule, MtxAlert],
  exports: [MtxAlert],
})
export class MtxAlertModule {}
