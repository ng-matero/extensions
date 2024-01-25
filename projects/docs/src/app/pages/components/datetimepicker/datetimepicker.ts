import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
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
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class DatetimepickerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-datetimepicker-api',
  templateUrl: './datetimepicker-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
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
    DatetimepickerOverviewComponent,
    DatetimepickerApiComponent,
    DatetimepickerConfigurableComponent,
    DatetimepickerTargetComponent,
  ],
})
export class DatetimepickerModule {}
