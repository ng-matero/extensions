import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { MtxSelectComponent } from './select.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  exports: [MtxSelectComponent],
  declarations: [MtxSelectComponent],
})
export class MtxSelectModule {}
