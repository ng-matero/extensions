import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
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
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class ProgressOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-progress-api',
  templateUrl: './progress-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
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
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./progress.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
    ProgressOverviewComponent,
    ProgressApiComponent,
    ProgressConfigurableComponent,
    ProgressCustomColorComponent,
  ],
})
export class ProgressModule {}
