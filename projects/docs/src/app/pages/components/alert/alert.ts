import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import {
  AlertConfigurableComponent,
  alertConfigurableExampleConfig,
} from './examples/configurable';

@Component({
  selector: 'app-alert-overview',
  templateUrl: './alert-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class AlertOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-alert-api',
  templateUrl: './alert-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class AlertApiComponent {
  constructor(public route: ActivatedRoute) {}
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
