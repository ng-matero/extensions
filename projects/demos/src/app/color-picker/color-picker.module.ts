import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { ColorPickerComponent } from './color-picker.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ColorPickerComponent }])
  ],
  declarations: [ColorPickerComponent],
})
export class ColorPickerModule { }
