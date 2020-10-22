import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import {
  ButtonConfigurableComponent,
  buttonConfigurableExampleConfig,
} from './examples/configurable';

@Component({
  selector: 'app-button-overview',
  templateUrl: './button-overview.html',
})
export class ButtonOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-button-api',
  templateUrl: './button-api.html',
})
export class ButtonApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: ButtonOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [buttonConfigurableExampleConfig],
        },
      },
      {
        path: 'api',
        component: ButtonApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [ButtonOverviewComponent, ButtonApiComponent, ButtonConfigurableComponent],
})
export class ButtonModule {}
