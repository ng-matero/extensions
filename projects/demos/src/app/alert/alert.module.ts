import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { AlertComponent } from './alert.component';

import { AlertConfigurableComponent, alertConfigurableExampleConfig } from './examples/configurable';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([{
    path: '',
    component: AlertComponent,
    data: {
      examples: [
        alertConfigurableExampleConfig
      ],
    },
  }])],
  declarations: [
    AlertComponent,
    AlertConfigurableComponent
  ],
})
export class AlertModule { }
