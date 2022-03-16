import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import {
  DrawerConfigurableComponent,
  drawerConfigurableExampleConfig,
  DrawerConfigurableOverviewComponent,
} from './examples/configurable';
import {
  DrawerSharingDataComponent,
  drawerSharingDataExampleConfig,
  DrawerSharingDataOverviewComponent,
} from './examples/sharing-data';

@Component({
  selector: 'app-drawer-overview',
  templateUrl: './drawer-overview.html',
})
export class DrawerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-drawer-api',
  templateUrl: './drawer-api.html',
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
  ],
  declarations: [
    DrawerOverviewComponent,
    DrawerApiComponent,
    DrawerConfigurableComponent,
    DrawerConfigurableOverviewComponent,
    DrawerSharingDataComponent,
    DrawerSharingDataOverviewComponent,
  ],
})
export class DrawerModule {}
