import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxSliderModule } from '@ng-matero/extensions/slider';

import { SliderDemoComponent } from './slider-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SliderDemoComponent }]),
    MtxSliderModule,
  ],
  declarations: [SliderDemoComponent],
})
export class SliderDemoModule {}
