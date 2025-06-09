import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { drawerConfigurableExampleConfig } from './examples/configurable';
import { drawerSharingDataExampleConfig } from './examples/sharing-data';

@Component({
  selector: 'app-drawer-overview',
  templateUrl: './drawer-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class DrawerOverview {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-drawer-api',
  templateUrl: './drawer-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class DrawerApi {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: DrawerOverview,
    pathMatch: 'full',
    data: {
      examples: [drawerConfigurableExampleConfig, drawerSharingDataExampleConfig],
    },
  },
  {
    path: 'api',
    component: DrawerApi,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./drawer.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
