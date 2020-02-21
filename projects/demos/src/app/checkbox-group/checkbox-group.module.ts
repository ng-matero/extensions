import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';

import { CheckboxGroupComponent } from './checkbox-group.component';

@NgModule({
  imports: [
    FormsModule,
    MtxCheckboxGroupModule,
    RouterModule.forChild([{ path: '', component: CheckboxGroupComponent }]),
  ],
  declarations: [CheckboxGroupComponent],
})
export class CheckboxGroupModule {}
