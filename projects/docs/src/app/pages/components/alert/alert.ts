import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import {
  AlertConfigurableComponent,
  alertConfigurableExampleConfig,
} from './examples/configurable';

@Component({
  selector: 'app-alert-overview',
  templateUrl: './alert-overview.html',
})
export class AlertOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-alert-api',
  templateUrl: './alert-api.html',
})
export class AlertApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
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
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [AlertOverviewComponent, AlertApiComponent, AlertConfigurableComponent],
})
export class AlertModule {}
