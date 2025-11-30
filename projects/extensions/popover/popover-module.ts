import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MtxPopover } from './popover';
import { MtxPopoverContent } from './popover-content';
import { MtxPopoverTarget } from './popover-target';
import { MtxPopoverTrigger } from './popover-trigger';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    A11yModule,
    MtxPopover,
    MtxPopoverTrigger,
    MtxPopoverTarget,
    MtxPopoverContent,
  ],
  exports: [MtxPopover, MtxPopoverTrigger, MtxPopoverTarget, MtxPopoverContent],
})
export class MtxPopoverModule {}
