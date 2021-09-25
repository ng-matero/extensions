import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MtxSlider } from './slider';

@NgModule({
  imports: [CommonModule, MatCommonModule],
  exports: [MtxSlider, MatCommonModule],
  declarations: [MtxSlider],
})
export class MtxSliderModule {}
