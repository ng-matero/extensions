import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import {
  PopoverConfigurableComponent,
  popoverConfigurableExampleConfig,
} from './examples/configurable';
import {
  PopoverLazyRenderingComponent,
  popoverLazyRenderingExampleConfig,
} from './examples/lazy-rendering';
import { PopoverTargetComponent, popoverTargetExampleConfig } from './examples/target';

@Component({
  selector: 'app-popover-overview',
  templateUrl: './popover-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class PopoverOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-popover-api',
  templateUrl: './popover-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
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
    PopoverOverviewComponent,
    PopoverApiComponent,
    PopoverConfigurableComponent,
    PopoverTargetComponent,
    PopoverLazyRenderingComponent,
  ],
})
export class PopoverModule {}
