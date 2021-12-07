import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material/button';
import { MtxColorpickerInput } from './colorpicker-input';
import { MtxColorpickerToggle } from './colorpicker-toggle';
import {
  MtxColorpicker,
  MtxColorpickerContent,
  MTX_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
} from './colorpicker';

import { ColorChromeModule } from 'ngx-color/chrome';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    A11yModule,
    PortalModule,
    MatButtonModule,
    ColorChromeModule,
  ],
  exports: [MtxColorpicker, MtxColorpickerContent, MtxColorpickerInput, MtxColorpickerToggle],
  declarations: [MtxColorpicker, MtxColorpickerContent, MtxColorpickerInput, MtxColorpickerToggle],
  providers: [MTX_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class MtxColorpickerModule {}
