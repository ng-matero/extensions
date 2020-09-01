import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

import { ButtonComponent } from './button.component';

import {
  ButtonConfigurableComponent,
  buttonConfigurableExampleConfig,
} from './examples/configurable';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ButtonComponent,
        data: {
          examples: [buttonConfigurableExampleConfig],
        },
      },
    ]),
  ],
  declarations: [ButtonComponent, ButtonConfigurableComponent],
})
export class ButtonModule {}
