import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { MtxAlert } from '@ng-matero/extensions/alert';
import { DocHeading } from '../../../shared/doc-heading/doc-heading';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { selectBasicExampleConfig } from './examples/basic';
import { selectCustomLabelTemplateExampleConfig } from './examples/custom-label-template';
import { selectCustomOptgroupTemplateExampleConfig } from './examples/custom-optgroup-template';
import { selectCustomOptionTemplateExampleConfig } from './examples/custom-option-template';
import { selectOptionExampleConfig } from './examples/mtx-option';

@Component({
  selector: 'app-select-overview',
  templateUrl: './select-overview.html',
  styles: `
    :host {
      position: relative;
      display: block;
    }
  `,
  imports: [MtxAlert, DocHeading, ExampleViewer, AsyncPipe],
})
export class SelectOverview {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-select-api',
  templateUrl: './select-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class SelectApi {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: SelectOverview,
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
    component: SelectApi,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./select.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
