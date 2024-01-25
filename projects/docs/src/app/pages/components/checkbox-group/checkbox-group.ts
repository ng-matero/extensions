import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '../../../shared';
import { DocHeadingComponent } from '../../../shared/doc-heading/doc-heading';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { CheckboxGroupBasicComponent, checkboxGroupBasicExampleConfig } from './examples/basic';
import {
  CheckboxGroupBindLabelBindValueComponent,
  checkboxGroupBindLabelBindValueExampleConfig,
} from './examples/bind-label-bind-value';
import {
  CheckboxGroupCompareWithComponent,
  checkboxGroupCompareWithExampleConfig,
} from './examples/compare-with';
import { CheckboxGroupI18nComponent, checkboxGroupI18nExampleConfig } from './examples/i18n';
import {
  CheckboxGroupSelectAllComponent,
  checkboxGroupSelectAllExampleConfig,
} from './examples/select-all';

// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/checkbox-group/', '_json');
}

@Component({
  selector: 'app-checkbox-group-overview',
  templateUrl: './checkbox-group-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, DocHeadingComponent, ExampleViewer, AsyncPipe],
})
export class CheckboxGroupOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-checkbox-group-api',
  templateUrl: './checkbox-group-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
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
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./checkbox-group.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
    CheckboxGroupOverviewComponent,
    CheckboxGroupApiComponent,
    CheckboxGroupBasicComponent,
    CheckboxGroupBindLabelBindValueComponent,
    CheckboxGroupCompareWithComponent,
    CheckboxGroupSelectAllComponent,
    CheckboxGroupI18nComponent,
  ],
})
export class CheckboxGroupModule {}
