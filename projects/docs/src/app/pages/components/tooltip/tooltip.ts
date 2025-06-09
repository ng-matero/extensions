import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { tooltipTemplateExampleConfig } from './examples/template';
import { tooltipContextExampleConfig } from './examples/context';

@Component({
  selector: 'app-tooltip-overview',
  templateUrl: './tooltip-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class TooltipOverview {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-tooltip-api',
  templateUrl: './tooltip-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class TooltipApi {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: TooltipOverview,
    pathMatch: 'full',
    data: {
      examples: [tooltipTemplateExampleConfig, tooltipContextExampleConfig],
    },
  },
  {
    path: 'api',
    component: TooltipApi,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./tooltip.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
