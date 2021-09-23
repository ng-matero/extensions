import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import { SplitBasicComponent, splitBasicExampleConfig } from './examples/basic';

@Component({
  selector: 'app-split-overview',
  templateUrl: './split-overview.html',
})
export class SplitOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-split-api',
  templateUrl: './split-api.html',
})
export class SplitApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: SplitOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [splitBasicExampleConfig],
        },
      },
      {
        path: 'api',
        component: SplitApiComponent,
        pathMatch: 'full',
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./split.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [SplitOverviewComponent, SplitApiComponent, SplitBasicComponent],
})
export class SplitModule {}
