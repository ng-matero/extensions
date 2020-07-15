import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { ProgressComponent } from './progress.component';

import {
  ProgressConfigurableComponent,
  progressConfigurableExampleConfig,
} from './examples/configurable';
import {
  ProgressCustomColorComponent,
  progressCustomColorExampleConfig,
} from './examples/custom-color';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProgressComponent,
        data: {
          examples: [progressConfigurableExampleConfig, progressCustomColorExampleConfig],
        },
      },
    ]),
  ],
  declarations: [ProgressComponent, ProgressConfigurableComponent, ProgressCustomColorComponent],
})
export class ProgressModule {}
