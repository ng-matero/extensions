import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { buttonConfigurableExampleConfig } from './examples/configurable';

@Component({
  selector: 'app-button-overview',
  templateUrl: './button-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class ButtonOverview {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-button-api',
  templateUrl: './button-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class ButtonApi {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: ButtonOverview,
    pathMatch: 'full',
    data: {
      examples: [buttonConfigurableExampleConfig],
    },
  },
  {
    path: 'api',
    component: ButtonApi,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./button.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
