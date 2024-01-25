import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { SplitBasicComponent, splitBasicExampleConfig } from './examples/basic';

@Component({
  selector: 'app-split-overview',
  templateUrl: './split-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class SplitOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-split-api',
  templateUrl: './split-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
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
    SplitOverviewComponent,
    SplitApiComponent,
    SplitBasicComponent,
  ],
})
export class SplitModule {}
