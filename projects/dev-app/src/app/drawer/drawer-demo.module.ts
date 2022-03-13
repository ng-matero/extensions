import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxDrawerModule } from '@ng-matero/extensions/drawer';

import { DrawerDemoComponent } from './drawer-demo.component';
import { DrawerOverviewComponent } from './drawer-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DrawerDemoComponent }]),
    MtxDrawerModule,
  ],
  declarations: [DrawerDemoComponent, DrawerOverviewComponent],
})
export class DrawerDemoModule {}
