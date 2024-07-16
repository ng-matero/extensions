import { DialogModule } from '@angular/cdk/dialog';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MtxDrawer } from './drawer';
import { MtxDrawerContainer } from './drawer-container';

@NgModule({
  imports: [DialogModule, PortalModule, MatCommonModule, MtxDrawerContainer],
  exports: [MtxDrawerContainer, MatCommonModule],
  providers: [MtxDrawer],
})
export class MtxDrawerModule {}
