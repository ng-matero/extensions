import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import { TooltipTemplateComponent, tooltipTemplateExampleConfig } from './examples/template';

@Component({
  selector: 'app-tooltip-overview',
  templateUrl: './tooltip-overview.html',
})
export class TooltipOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-tooltip-api',
  templateUrl: './tooltip-api.html',
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
  ],
  declarations: [TooltipOverviewComponent, TooltipApiComponent, TooltipTemplateComponent],
})
export class TooltipModule {}
