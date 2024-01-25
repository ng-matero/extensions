import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
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
