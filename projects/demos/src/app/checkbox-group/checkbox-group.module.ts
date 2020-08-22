import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { CheckboxGroupComponent } from './checkbox-group.component';

import { CheckboxGroupBasicComponent, checkboxGroupBasicExampleConfig } from './examples/basic';
import {
  CheckboxGroupBindLabelBindValueComponent,
  checkboxGroupBindLabelBindValueExampleConfig,
} from './examples/bind-label-bind-value';
import {
  CheckboxGroupCompareWithComponent,
  checkboxGroupCompareWithExampleConfig,
} from './examples/compare-with';
import {
  CheckboxGroupSelectAllComponent,
  checkboxGroupSelectAllExampleConfig,
} from './examples/select-all';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckboxGroupComponent,
        data: {
          examples: [
            checkboxGroupBasicExampleConfig,
            checkboxGroupBindLabelBindValueExampleConfig,
            checkboxGroupCompareWithExampleConfig,
            checkboxGroupSelectAllExampleConfig,
          ],
        },
      },
    ]),
  ],
  declarations: [
    CheckboxGroupComponent,
    CheckboxGroupBasicComponent,
    CheckboxGroupBindLabelBindValueComponent,
    CheckboxGroupCompareWithComponent,
    CheckboxGroupSelectAllComponent,
  ],
})
export class CheckboxGroupModule {}
