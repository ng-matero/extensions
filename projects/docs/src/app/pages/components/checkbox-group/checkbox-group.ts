import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DocHeadingComponent } from '../../../shared/doc-heading/doc-heading';
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
  imports: [DocHeadingComponent, ExampleViewer, AsyncPipe],
})
export class CheckboxGroupOverviewComponent {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-checkbox-group-api',
  templateUrl: './checkbox-group-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class CheckboxGroupApiComponent {
  route = inject(ActivatedRoute);
}

export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/checkbox-group/', '_json');
}

export const routes: Routes = [
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
    providers: [
      provideTranslateService({
        loader: {
          provide: TranslateLoader,
          useFactory: TranslateHttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ],
  },
  {
    path: 'api',
    component: CheckboxGroupApiComponent,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./checkbox-group.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
