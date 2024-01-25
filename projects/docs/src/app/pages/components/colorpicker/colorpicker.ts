import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ColorSketchModule } from 'ngx-color/sketch';
import { SharedModule } from '../../../shared';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { ColorpickerBasicComponent, colorpickerBasicExampleConfig } from './examples/basic';
import {
  ColorpickerCustomIconComponent,
  colorpickerCustomIconExampleConfig,
} from './examples/custom-icon';
import {
  ColorpickerCustomPickerComponent,
  colorpickerCustomPickerExampleConfig,
} from './examples/custom-picker';
import {
  ColorpickerDisabledComponent,
  colorpickerDisabledExampleConfig,
} from './examples/disabled';

@Component({
  selector: 'app-colorpicker-overview',
  templateUrl: './colorpicker-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class ColorPickerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-colorpicker-api',
  templateUrl: './colorpicker-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
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
    ColorPickerOverviewComponent,
    ColorPickerApiComponent,
    ColorpickerBasicComponent,
    ColorpickerCustomPickerComponent,
    ColorpickerCustomIconComponent,
    ColorpickerDisabledComponent,
  ],
})
export class ColorPickerModule {}
