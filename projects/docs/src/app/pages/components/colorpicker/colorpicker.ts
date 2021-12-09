import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import { ColorpickerBasicComponent, colorpickerBasicExampleConfig } from './examples/basic';
import {
  ColorpickerDisabledComponent,
  colorpickerDisabledExampleConfig,
} from './examples/disabled';
import {
  ColorpickerCustomIconComponent,
  colorpickerCustomIconExampleConfig,
} from './examples/custom-icon';
import {
  ColorpickerCustomPickerComponent,
  colorpickerCustomPickerExampleConfig,
} from './examples/custom-picker';

import { ColorSketchModule } from 'ngx-color/sketch';

@Component({
  selector: 'app-colorpicker-overview',
  templateUrl: './colorpicker-overview.html',
})
export class ColorPickerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-colorpicker-api',
  templateUrl: './colorpicker-api.html',
})
export class ColorPickerApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: ColorPickerOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [
            colorpickerBasicExampleConfig,
            colorpickerCustomPickerExampleConfig,
            colorpickerCustomIconExampleConfig,
            colorpickerDisabledExampleConfig,
          ],
        },
      },
      {
        path: 'api',
        component: ColorPickerApiComponent,
        pathMatch: 'full',
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./colorpicker.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
    ColorSketchModule,
  ],
  declarations: [
    ColorPickerOverviewComponent,
    ColorPickerApiComponent,

    ColorpickerBasicComponent,
    ColorpickerCustomPickerComponent,
    ColorpickerCustomIconComponent,
    ColorpickerDisabledComponent,
  ],
})
export class ColorPickerModule {}
