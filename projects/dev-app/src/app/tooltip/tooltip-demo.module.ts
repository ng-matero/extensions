import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';

import { TooltipDemoComponent } from './tooltip-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: TooltipDemoComponent }]),
    MtxTooltipModule,
  ],
  declarations: [TooltipDemoComponent],
})
export class TooltipDemoModule {}
