import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import {
  LoaderConfigurableComponent,
  loaderConfigurableExampleConfig,
} from './examples/configurable';
import { LoaderSimpleComponent, loaderSimpleExampleConfig } from './examples/simple';

@Component({
  selector: 'app-loader-overview',
  templateUrl: './loader-overview.html',
})
export class LoaderOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-loader-api',
  templateUrl: './loader-api.html',
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
  ],
  declarations: [
    LoaderOverviewComponent,
    LoaderApiComponent,
    LoaderConfigurableComponent,
    LoaderSimpleComponent,
  ],
})
export class LoaderModule {}
