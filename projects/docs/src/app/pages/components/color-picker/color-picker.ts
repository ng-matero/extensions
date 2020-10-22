import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import { ColorPickerBasicComponent, colorPickerBasicExampleConfig } from './examples/basic';

@Component({
  selector: 'app-color-picker-overview',
  templateUrl: './color-picker-overview.html',
})
export class ColorPickerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-color-picker-api',
  templateUrl: './color-picker-api.html',
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
          examples: [colorPickerBasicExampleConfig],
        },
      },
      {
        path: 'api',
        component: ColorPickerApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [ColorPickerOverviewComponent, ColorPickerApiComponent, ColorPickerBasicComponent],
})
export class ColorPickerModule {}
