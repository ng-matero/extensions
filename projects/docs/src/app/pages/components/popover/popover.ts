import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import {
  PopoverConfigurableComponent,
  popoverConfigurableExampleConfig,
} from './examples/configurable';
import { PopoverTargetComponent, popoverTargetExampleConfig } from './examples/target';
import {
  PopoverLazyRenderingComponent,
  popoverLazyRenderingExampleConfig,
} from './examples/lazy-rendering';

@Component({
  selector: 'app-popover-overview',
  templateUrl: './popover-overview.html',
})
export class PopoverOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-popover-api',
  templateUrl: './popover-api.html',
})
export class PopoverApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: PopoverOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [
            popoverConfigurableExampleConfig,
            popoverTargetExampleConfig,
            popoverLazyRenderingExampleConfig,
          ],
        },
      },
      {
        path: 'api',
        component: PopoverApiComponent,
        pathMatch: 'full',
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./popover.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [
    PopoverOverviewComponent,
    PopoverApiComponent,
    PopoverConfigurableComponent,
    PopoverTargetComponent,
    PopoverLazyRenderingComponent,
  ],
})
export class PopoverModule {}
