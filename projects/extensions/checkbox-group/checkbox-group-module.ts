import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MtxPipesModule } from '@ng-matero/extensions/core';
import { MtxCheckboxGroup } from './checkbox-group';

@NgModule({
  imports: [CommonModule, FormsModule, MatCheckboxModule, MtxPipesModule],
  exports: [MtxCheckboxGroup, MtxPipesModule],
  declarations: [MtxCheckboxGroup],
})
export class MtxCheckboxGroupModule {}
