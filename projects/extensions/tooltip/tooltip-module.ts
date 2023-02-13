import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MtxPipesModule } from '@ng-matero/extensions/core';
import {
  MtxTooltip,
  MTX_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
  TooltipComponent,
} from './tooltip';

@NgModule({
  imports: [A11yModule, CommonModule, OverlayModule, MatCommonModule, MtxPipesModule],
  exports: [MtxTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
  declarations: [MtxTooltip, TooltipComponent],
  providers: [MTX_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class MtxTooltipModule {}
