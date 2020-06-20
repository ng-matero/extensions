import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { CheckboxGroupComponent } from './checkbox-group.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: CheckboxGroupComponent }])
  ],
  declarations: [CheckboxGroupComponent],
})
export class CheckboxGroupModule {}
