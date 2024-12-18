import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { loaderConfigurableExampleConfig } from './examples/configurable';
import { loaderSimpleExampleConfig } from './examples/simple';

@Component({
  selector: 'app-loader-overview',
  templateUrl: './loader-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class LoaderOverviewComponent {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-loader-api',
  templateUrl: './loader-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class LoaderApiComponent {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: LoaderOverviewComponent,
    pathMatch: 'full',
    data: {
      examples: [loaderConfigurableExampleConfig, loaderSimpleExampleConfig],
    },
  },
  {
    path: 'api',
    component: LoaderApiComponent,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./loader.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
