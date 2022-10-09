import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { MtxPopover } from './popover';
import { MtxPopoverTrigger, MTX_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER } from './popover-trigger';
import { MtxPopoverTarget } from './popover-target';
import { MtxPopoverContent } from './popover-content';

@NgModule({
  imports: [CommonModule, OverlayModule, A11yModule],
  exports: [MtxPopover, MtxPopoverTrigger, MtxPopoverTarget, MtxPopoverContent],
  declarations: [MtxPopover, MtxPopoverTrigger, MtxPopoverTarget, MtxPopoverContent],
  providers: [MTX_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class MtxPopoverModule {}
