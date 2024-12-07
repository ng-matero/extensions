import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { buttonConfigurableExampleConfig } from './examples/configurable';

@Component({
  selector: 'app-button-overview',
  templateUrl: './button-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class ButtonOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-button-api',
  templateUrl: './button-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class ButtonApiComponent {
  constructor(public route: ActivatedRoute) {}
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: ButtonOverviewComponent,
    pathMatch: 'full',
    data: {
      examples: [buttonConfigurableExampleConfig],
    },
  },
  {
    path: 'api',
    component: ButtonApiComponent,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./button.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
