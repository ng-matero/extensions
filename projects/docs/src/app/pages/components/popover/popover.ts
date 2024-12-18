import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { popoverConfigurableExampleConfig } from './examples/configurable';
import { popoverLazyRenderingExampleConfig } from './examples/lazy-rendering';
import { popoverTargetExampleConfig } from './examples/target';

@Component({
  selector: 'app-popover-overview',
  templateUrl: './popover-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class PopoverOverviewComponent {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-popover-api',
  templateUrl: './popover-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class PopoverApiComponent {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
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
];
