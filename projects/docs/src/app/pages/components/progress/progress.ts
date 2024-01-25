import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { progressConfigurableExampleConfig } from './examples/configurable';
import { progressCustomColorExampleConfig } from './examples/custom-color';

@Component({
  selector: 'app-progress-overview',
  templateUrl: './progress-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class ProgressOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-progress-api',
  templateUrl: './progress-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class ProgressApiComponent {
  constructor(public route: ActivatedRoute) {}
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: ProgressOverviewComponent,
    pathMatch: 'full',
    data: {
      examples: [progressConfigurableExampleConfig, progressCustomColorExampleConfig],
    },
  },
  {
    path: 'api',
    component: ProgressApiComponent,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./progress.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
