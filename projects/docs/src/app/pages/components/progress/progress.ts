import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@shared';

import {
  ProgressConfigurableComponent,
  progressConfigurableExampleConfig,
} from './examples/configurable';
import {
  ProgressCustomColorComponent,
  progressCustomColorExampleConfig,
} from './examples/custom-color';

@Component({
  selector: 'app-progress-overview',
  templateUrl: './progress-overview.html',
})
export class ProgressOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-progress-api',
  templateUrl: './progress-api.html',
})
export class ProgressApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: ProgressOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [progressConfigurableExampleConfig, progressCustomColorExampleConfig],
        },
      },
      {
        path: 'api',
        component: ProgressApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [
    ProgressOverviewComponent,
    ProgressConfigurableComponent,
    ProgressCustomColorComponent,
  ],
})
export class ProgressModule {}
