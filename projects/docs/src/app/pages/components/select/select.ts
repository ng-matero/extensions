import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@shared';

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

@Component({
  selector: 'app-select-overview',
  templateUrl: './select-overview.html',
})
export class SelectOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-select-api',
  templateUrl: './select-api.html',
})
export class SelectApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: SelectOverviewComponent,
        pathMatch: 'full',
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
      {
        path: 'api',
        component: SelectApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [
    SelectOverviewComponent,
    SelectApiComponent,

    SelectBasicComponent,
    SelectOptionComponent,
    SelectCustomLabelTemplateComponent,
    SelectCustomOptionTemplateComponent,
    SelectCustomOptgroupTemplateComponent,
  ],
})
export class SelectModule {}
