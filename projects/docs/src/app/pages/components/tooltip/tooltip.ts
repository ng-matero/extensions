import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { tooltipTemplateExampleConfig } from './examples/template';

@Component({
  selector: 'app-tooltip-overview',
  templateUrl: './tooltip-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class TooltipOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-tooltip-api',
  templateUrl: './tooltip-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class TooltipApiComponent {
  constructor(public route: ActivatedRoute) {}
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: TooltipOverviewComponent,
    pathMatch: 'full',
    data: {
      examples: [tooltipTemplateExampleConfig],
    },
  },
  {
    path: 'api',
    component: TooltipApiComponent,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./tooltip.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
