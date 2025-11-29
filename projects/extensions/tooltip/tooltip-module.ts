import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { MtxPipesModule } from '@ng-matero/extensions/core';
import { MtxTooltip, TooltipComponent } from './tooltip';

@NgModule({
  imports: [A11yModule, OverlayModule, MtxPipesModule, MtxTooltip, TooltipComponent],
  exports: [MtxTooltip, TooltipComponent, BidiModule, CdkScrollableModule],
})
export class MtxTooltipModule {}
