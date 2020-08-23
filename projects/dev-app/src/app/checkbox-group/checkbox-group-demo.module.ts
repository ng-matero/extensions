import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';

import { CheckboxGroupDemoComponent } from './checkbox-group-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: CheckboxGroupDemoComponent }]),
    MtxCheckboxGroupModule,
  ],
  declarations: [CheckboxGroupDemoComponent],
})
export class CheckboxGroupDemoModule {}
