import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { ColorPickerComponent } from './color-picker.component';

import { ColorPickerBasicComponent, colorPickerBasicExampleConfig } from './examples/basic';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ColorPickerComponent,
        data: {
          examples: [colorPickerBasicExampleConfig],
        },
      },
    ]),
  ],
  declarations: [ColorPickerComponent, ColorPickerBasicComponent],
})
export class ColorPickerModule {}
