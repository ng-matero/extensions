import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MtxPipesModule } from '@dcnx/mat-extensions/core';
import { MtxCheckboxGroup } from './checkbox-group';

@NgModule({
  imports: [CommonModule, FormsModule, MatCheckboxModule, MtxPipesModule, MtxCheckboxGroup],
  exports: [MtxCheckboxGroup, MtxPipesModule],
})
export class MtxCheckboxGroupModule {}
