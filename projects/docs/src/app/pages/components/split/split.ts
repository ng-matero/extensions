import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { splitBasicExampleConfig } from './examples/basic';

@Component({
  selector: 'app-split-overview',
  templateUrl: './split-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class SplitOverview {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-split-api',
  templateUrl: './split-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class SplitApi {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: SplitOverview,
    pathMatch: 'full',
    data: {
      examples: [splitBasicExampleConfig],
    },
  },
  {
    path: 'api',
    component: SplitApi,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./split.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
