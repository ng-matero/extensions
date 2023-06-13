import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MtxCarousel } from './carousel';
import { MtxCarouselSlide } from './slide';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatIconModule],
  exports: [MtxCarousel, MtxCarouselSlide],
  declarations: [MtxCarousel, MtxCarouselSlide],
})
export class MtxCarouselModule {}
