import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import {
  DrawerConfigurableComponent,
  DrawerConfigurableOverviewComponent,
  drawerConfigurableExampleConfig,
} from './examples/configurable';
import {
  DrawerSharingDataComponent,
  DrawerSharingDataOverviewComponent,
  drawerSharingDataExampleConfig,
} from './examples/sharing-data';

@Component({
  selector: 'app-drawer-overview',
  templateUrl: './drawer-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class DrawerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-drawer-api',
  templateUrl: './drawer-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class DrawerApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: DrawerOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [drawerConfigurableExampleConfig, drawerSharingDataExampleConfig],
        },
      },
      {
        path: 'api',
        component: DrawerApiComponent,
        pathMatch: 'full',
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./drawer.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
    DrawerOverviewComponent,
    DrawerApiComponent,
    DrawerConfigurableComponent,
    DrawerConfigurableOverviewComponent,
    DrawerSharingDataComponent,
    DrawerSharingDataOverviewComponent,
  ],
})
export class DrawerModule {}
