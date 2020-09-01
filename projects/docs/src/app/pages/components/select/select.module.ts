import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

import { SelectComponent } from './select.component';

import { SelectBasicComponent, selectBasicExampleConfig } from './examples/basic';
import { SelectOptionComponent, selectOptionExampleConfig } from './examples/mtx-option';
import {
  SelectCustomLabelTemplateComponent,
  selectCustomLabelTemplateExampleConfig,
} from './examples/custom-label-template';
import {
  SelectCustomOptionTemplateComponent,
  selectCustomOptionTemplateExampleConfig,
} from './examples/custom-option-template';
import {
  SelectCustomOptgroupTemplateComponent,
  selectCustomOptgroupTemplateExampleConfig,
} from './examples/custom-optgroup-template';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SelectComponent,
        data: {
          examples: [
            selectBasicExampleConfig,
            selectOptionExampleConfig,
            selectCustomLabelTemplateExampleConfig,
            selectCustomOptionTemplateExampleConfig,
            selectCustomOptgroupTemplateExampleConfig,
          ],
        },
      },
    ]),
  ],
  declarations: [
    SelectComponent,
    SelectBasicComponent,
    SelectOptionComponent,
    SelectCustomLabelTemplateComponent,
    SelectCustomOptionTemplateComponent,
    SelectCustomOptgroupTemplateComponent,
  ],
})
export class SelectModule {}
