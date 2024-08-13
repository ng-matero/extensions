import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { datetimepickerConfigurableExampleConfig } from './examples/configurable';
import { datetimepickerTargetExampleConfig } from './examples/inline';

@Component({
  selector: 'app-timepicker-overview',
  templateUrl: './timepicker-overview.html',
  standalone: true,
  imports: [ExampleViewer, AsyncPipe],
})
export class TimepickerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-datetimepicker-api',
  templateUrl: './datetimepicker-api.html',
  standalone: true,
  imports: [DocViewer, AsyncPipe],
})
export class DatetimepickerApiComponent {
  constructor(public route: ActivatedRoute) {}
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: TimepickerOverviewComponent,
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
