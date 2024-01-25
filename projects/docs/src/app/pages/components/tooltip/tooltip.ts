import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { TooltipTemplateComponent, tooltipTemplateExampleConfig } from './examples/template';

@Component({
  selector: 'app-tooltip-overview',
  templateUrl: './tooltip-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class TooltipOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-tooltip-api',
  templateUrl: './tooltip-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class TooltipApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: TooltipOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [tooltipTemplateExampleConfig],
        },
      },
      {
        path: 'api',
        component: TooltipApiComponent,
        pathMatch: 'full',
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./tooltip.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
    TooltipOverviewComponent,
    TooltipApiComponent,
    TooltipTemplateComponent,
  ],
})
export class TooltipModule {}
