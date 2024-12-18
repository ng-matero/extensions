import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { datetimepickerConfigurableExampleConfig } from './examples/configurable';
import { datetimepickerTargetExampleConfig } from './examples/inline';

@Component({
  selector: 'app-datetimepicker-overview',
  templateUrl: './datetimepicker-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class DatetimepickerOverviewComponent {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-datetimepicker-api',
  templateUrl: './datetimepicker-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class DatetimepickerApiComponent {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
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
];
