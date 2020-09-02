import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@shared';

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

@Component({
  selector: 'app-checkbox-group-overview',
  templateUrl: './checkbox-group-overview.html',
})
export class CheckboxGroupOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-checkbox-group-api',
  templateUrl: './checkbox-group-api.html',
})
export class CheckboxGroupApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: CheckboxGroupOverviewComponent,
        data: {
          examples: [
            checkboxGroupBasicExampleConfig,
            checkboxGroupBindLabelBindValueExampleConfig,
            checkboxGroupCompareWithExampleConfig,
            checkboxGroupSelectAllExampleConfig,
          ],
        },
      },
      {
        path: 'api',
        component: CheckboxGroupApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [
    CheckboxGroupOverviewComponent,
    CheckboxGroupBasicComponent,
    CheckboxGroupBindLabelBindValueComponent,
    CheckboxGroupCompareWithComponent,
    CheckboxGroupSelectAllComponent,
  ],
})
export class CheckboxGroupModule {}
