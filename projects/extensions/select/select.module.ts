import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';

import { MtxSelectComponent } from './select.component';

@NgModule({
  imports: [CommonModule, NgSelectModule],
  exports: [MtxSelectComponent],
  declarations: [MtxSelectComponent],
})
export class MtxSelectModule {}
