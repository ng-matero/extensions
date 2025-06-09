import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { progressConfigurableExampleConfig } from './examples/configurable';
import { progressCustomColorExampleConfig } from './examples/custom-color';

@Component({
  selector: 'app-progress-overview',
  templateUrl: './progress-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class ProgressOverview {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-progress-api',
  templateUrl: './progress-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class ProgressApi {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: ProgressOverview,
    pathMatch: 'full',
    data: {
      examples: [progressConfigurableExampleConfig, progressCustomColorExampleConfig],
    },
  },
  {
    path: 'api',
    component: ProgressApi,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./progress.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
