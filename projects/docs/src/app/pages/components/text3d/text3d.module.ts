import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

import { Text3dComponent } from './text3d.component';
import {
  Text3dConfigurableComponent,
  text3dConfigurableExampleConfig,
} from './examples/configurable';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Text3dComponent,
        data: {
          examples: [text3dConfigurableExampleConfig],
        },
      },
    ]),
  ],
  declarations: [Text3dComponent, Text3dConfigurableComponent],
})
export class Text3dModule {}
