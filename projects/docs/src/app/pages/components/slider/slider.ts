import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import {
  SliderConfigurableComponent,
  sliderConfigurableExampleConfig,
} from './examples/configurable';
import { SliderRangeComponent, sliderRangeExampleConfig } from './examples/range';

@Component({
  selector: 'app-slider-overview',
  templateUrl: './slider-overview.html',
})
export class SliderOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-slider-api',
  templateUrl: './slider-api.html',
})
export class SliderApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: SliderOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [sliderConfigurableExampleConfig, sliderRangeExampleConfig],
        },
      },
      {
        path: 'api',
        component: SliderApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [
    SliderOverviewComponent,
    SliderApiComponent,
    SliderConfigurableComponent,
    SliderRangeComponent,
  ],
})
export class SliderModule {}
