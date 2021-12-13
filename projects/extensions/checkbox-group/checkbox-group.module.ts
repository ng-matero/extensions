import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MtxPipesModule } from '@ng-matero/extensions/core';
import { MtxCheckboxGroupComponent } from './checkbox-group.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatCheckboxModule, MtxPipesModule],
  exports: [MtxCheckboxGroupComponent, MtxPipesModule],
  declarations: [MtxCheckboxGroupComponent],
})
export class MtxCheckboxGroupModule {}
