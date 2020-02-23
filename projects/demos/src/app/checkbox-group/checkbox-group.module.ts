import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';

import { CheckboxGroupComponent } from './checkbox-group.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: CheckboxGroupComponent }]),
    MtxCheckboxGroupModule,
  ],
  declarations: [CheckboxGroupComponent],
})
export class CheckboxGroupModule {}
