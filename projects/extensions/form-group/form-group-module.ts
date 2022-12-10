import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxFormGroup } from './form-group';

@NgModule({
  imports: [CommonModule],
  exports: [MtxFormGroup],
  declarations: [MtxFormGroup],
})
export class MtxFormGroupModule {}
