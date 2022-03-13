import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MtxDrawer } from './drawer';
import { MtxDrawerContainer } from './drawer-container';

@NgModule({
  imports: [OverlayModule, PortalModule, MatCommonModule],
  exports: [MtxDrawerContainer, MatCommonModule],
  declarations: [MtxDrawerContainer],
  providers: [MtxDrawer],
})
export class MtxDrawerModule {}
