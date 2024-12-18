import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { colorpickerBasicExampleConfig } from './examples/basic';
import { colorpickerCustomIconExampleConfig } from './examples/custom-icon';
import { colorpickerCustomPickerExampleConfig } from './examples/custom-picker';
import { colorpickerDisabledExampleConfig } from './examples/disabled';

@Component({
  selector: 'app-colorpicker-overview',
  templateUrl: './colorpicker-overview.html',
  imports: [ExampleViewer, AsyncPipe],
})
export class ColorPickerOverviewComponent {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-colorpicker-api',
  templateUrl: './colorpicker-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class ColorPickerApiComponent {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
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
];
