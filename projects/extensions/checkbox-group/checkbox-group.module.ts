import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MtxCheckboxGroupComponent } from './checkbox-group.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatCheckboxModule],
  exports: [MtxCheckboxGroupComponent],
  declarations: [MtxCheckboxGroupComponent],
})
export class MtxCheckboxGroupModule { }
