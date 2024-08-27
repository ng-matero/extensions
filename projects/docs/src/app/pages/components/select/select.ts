import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { MtxAlert } from '@dcnx/mat-extensions/alert';
import { DocHeadingComponent } from '../../../shared/doc-heading/doc-heading';
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
  styles: [
    `
      :host {
        position: relative;
        display: block;
      }
    `,
  ],
  standalone: true,
  imports: [MtxAlert, DocHeadingComponent, ExampleViewer, AsyncPipe],
})
export class SelectOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-select-api',
  templateUrl: './select-api.html',
  standalone: true,
  imports: [DocViewer, AsyncPipe],
})
export class SelectApiComponent {
  constructor(public route: ActivatedRoute) {}
}

export const routes: Routes = [
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
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./select.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
