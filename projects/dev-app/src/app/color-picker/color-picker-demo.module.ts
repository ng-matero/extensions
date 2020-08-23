import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxColorPickerModule } from '@ng-matero/extensions/color-picker';

import { ColorPickerDemoComponent } from './color-picker-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ColorPickerDemoComponent }]),
    MtxColorPickerModule,
  ],
  declarations: [ColorPickerDemoComponent],
})
export class ColorPickerDemoModule {}
