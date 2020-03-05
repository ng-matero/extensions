import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ColorChromeModule } from 'ngx-color/chrome';

import { MtxColorPickerComponent } from './color-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ColorChromeModule,
  ],
  exports: [MtxColorPickerComponent],
  declarations: [MtxColorPickerComponent],
})
export class MtxColorPickerModule { }
