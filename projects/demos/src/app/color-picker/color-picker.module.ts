import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxColorPickerModule } from '@ng-matero/extensions/color-picker';

import { ColorPickerComponent } from './color-picker.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ColorPickerComponent }]),
    MtxColorPickerModule,
  ],
  declarations: [ColorPickerComponent],
})
export class ColorPickerModule {}
