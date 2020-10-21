import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { MtxPopover } from './popover';
import { MtxPopoverTrigger } from './popover-trigger';
import { MtxPopoverTarget } from './popover-target';

@NgModule({
  imports: [OverlayModule, CommonModule, A11yModule],
  exports: [MtxPopover, MtxPopoverTrigger, MtxPopoverTarget],
  declarations: [MtxPopover, MtxPopoverTrigger, MtxPopoverTarget],
})
export class MtxPopoverModule {}
