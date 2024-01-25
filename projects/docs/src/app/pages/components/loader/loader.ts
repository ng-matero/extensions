import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import {
  LoaderConfigurableComponent,
  loaderConfigurableExampleConfig,
} from './examples/configurable';
import { LoaderSimpleComponent, loaderSimpleExampleConfig } from './examples/simple';

@Component({
  selector: 'app-loader-overview',
  templateUrl: './loader-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class LoaderOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-loader-api',
  templateUrl: './loader-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class LoaderApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
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
    ]),
    LoaderOverviewComponent,
    LoaderApiComponent,
    LoaderConfigurableComponent,
    LoaderSimpleComponent,
  ],
})
export class LoaderModule {}
