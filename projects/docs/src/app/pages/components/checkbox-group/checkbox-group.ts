import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { DocHeading } from '../../../shared/doc-heading/doc-heading';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { checkboxGroupBasicExampleConfig } from './examples/basic';
import { checkboxGroupBindLabelBindValueExampleConfig } from './examples/bind-label-bind-value';
import { checkboxGroupCompareWithExampleConfig } from './examples/compare-with';
import { checkboxGroupI18nExampleConfig } from './examples/i18n';
import { checkboxGroupSelectAllExampleConfig } from './examples/select-all';

@Component({
  selector: 'app-checkbox-group-overview',
  templateUrl: './checkbox-group-overview.html',
  imports: [DocHeading, ExampleViewer, AsyncPipe],
})
export class CheckboxGroupOverview {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-checkbox-group-api',
  templateUrl: './checkbox-group-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class CheckboxGroupApi {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: CheckboxGroupOverview,
    data: {
      examples: [
        checkboxGroupBasicExampleConfig,
        checkboxGroupBindLabelBindValueExampleConfig,
        checkboxGroupCompareWithExampleConfig,
        checkboxGroupSelectAllExampleConfig,
        checkboxGroupI18nExampleConfig,
      ],
    },
    providers: [
      provideTranslateService({
        loader: provideTranslateHttpLoader({
          prefix: 'assets/i18n/checkbox-group/',
          suffix: '_json',
        }),
      }),
    ],
  },
  {
    path: 'api',
    component: CheckboxGroupApi,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./checkbox-group.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
