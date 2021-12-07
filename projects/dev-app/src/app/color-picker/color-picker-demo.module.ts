import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';

import { ColorPickerDemoComponent } from './color-picker-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ColorPickerDemoComponent }]),
    MtxColorpickerModule,
  ],
  declarations: [ColorPickerDemoComponent],
})
export class ColorPickerDemoModule {}
