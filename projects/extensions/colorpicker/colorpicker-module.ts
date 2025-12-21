import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ColorPicker } from '@acrodata/color-picker';
import {
  MTX_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MtxColorpicker,
  MtxColorpickerContent,
} from './colorpicker';
import { MtxColorpickerInput } from './colorpicker-input';
import { MtxColorpickerToggle, MtxColorpickerToggleIcon } from './colorpicker-toggle';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    A11yModule,
    PortalModule,
    MatButtonModule,
    MtxColorpicker,
    MtxColorpickerContent,
    MtxColorpickerInput,
    MtxColorpickerToggle,
    MtxColorpickerToggleIcon,
    ColorPicker,
  ],
  exports: [
    MtxColorpicker,
    MtxColorpickerContent,
    MtxColorpickerInput,
    MtxColorpickerToggle,
    MtxColorpickerToggleIcon,
  ],
  providers: [MTX_COLORPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class MtxColorpickerModule {}
