import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import {
  DatetimepickerConfigurableComponent,
  datetimepickerConfigurableExampleConfig,
} from './examples/configurable';
import {
  DatetimepickerTargetComponent,
  datetimepickerTargetExampleConfig,
} from './examples/inline';

@Component({
  selector: 'app-datetimepicker-overview',
  templateUrl: './datetimepicker-overview.html',
})
export class DatetimepickerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-datetimepicker-api',
  templateUrl: './datetimepicker-api.html',
})
export class DatetimepickerApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: DatetimepickerOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [datetimepickerConfigurableExampleConfig, datetimepickerTargetExampleConfig],
        },
      },
      {
        path: 'api',
        component: DatetimepickerApiComponent,
        pathMatch: 'full',
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./datetimepicker.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [
    DatetimepickerOverviewComponent,
    DatetimepickerApiComponent,
    DatetimepickerConfigurableComponent,
    DatetimepickerTargetComponent,
  ],
})
export class DatetimepickerModule {}
