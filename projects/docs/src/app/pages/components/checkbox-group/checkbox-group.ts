import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@shared';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/checkbox-group/', '_json');
}

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

import { CheckboxGroupI18nComponent, checkboxGroupI18nExampleConfig } from './examples/i18n';

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
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
            checkboxGroupI18nExampleConfig,
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
    CheckboxGroupI18nComponent,
  ],
})
export class CheckboxGroupModule {}
