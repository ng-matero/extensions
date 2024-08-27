import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { MatCommonModule } from '@angular/material/core';
import { MtxPipesModule } from '@dcnx/mat-extensions/core';
import {
  MtxTooltip,
  TooltipComponent,
  MTX_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
} from './tooltip';

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    OverlayModule,
    MatCommonModule,
    MtxPipesModule,
    MtxTooltip,
    TooltipComponent,
  ],
  exports: [MtxTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
  providers: [MTX_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class MtxTooltipModule {}
