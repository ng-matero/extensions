import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { alertConfigurableExampleConfig } from './examples/configurable';

@Component({
  selector: 'app-alert-overview',
  templateUrl: './alert-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class AlertOverviewComponent {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-alert-api',
  templateUrl: './alert-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class AlertApiComponent {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: AlertOverviewComponent,
    pathMatch: 'full',
    data: {
      examples: [alertConfigurableExampleConfig],
    },
  },
  {
    path: 'api',
    component: AlertApiComponent,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./alert.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
