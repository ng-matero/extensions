import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { CheckboxGroupComponent } from './checkbox-group.component';

import { CheckboxGroupConfigurableComponent, checkboxGroupConfigurableExampleConfig } from './examples/configurable';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: CheckboxGroupComponent,
      data: {
        examples: [
          checkboxGroupConfigurableExampleConfig
        ],
      },
    }])
  ],
  declarations: [
    CheckboxGroupComponent,
    CheckboxGroupConfigurableComponent
  ],
})
export class CheckboxGroupModule { }
