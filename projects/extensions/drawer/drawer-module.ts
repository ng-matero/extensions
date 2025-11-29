import { BidiModule } from '@angular/cdk/bidi';
import { DialogModule } from '@angular/cdk/dialog';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { MtxDrawer } from './drawer';
import { MtxDrawerContainer } from './drawer-container';

@NgModule({
  imports: [DialogModule, PortalModule, MtxDrawerContainer],
  exports: [MtxDrawerContainer, BidiModule],
  providers: [MtxDrawer],
})
export class MtxDrawerModule {}
