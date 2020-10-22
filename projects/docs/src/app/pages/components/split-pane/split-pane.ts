import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import { SplitPaneBasicComponent, splitPaneBasicExampleConfig } from './examples/basic';

@Component({
  selector: 'app-split-pane-overview',
  templateUrl: './split-pane-overview.html',
})
export class SplitPaneOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-split-pane-api',
  templateUrl: './split-pane-api.html',
})
export class SplitPaneApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: SplitPaneOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [splitPaneBasicExampleConfig],
        },
      },
      {
        path: 'api',
        component: SplitPaneApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [SplitPaneOverviewComponent, SplitPaneApiComponent, SplitPaneBasicComponent],
})
export class SplitPaneModule {}
