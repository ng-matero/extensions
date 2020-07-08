import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { DialogComponent } from './dialog.component';

import { DialogBasicComponent, dialogBasicExampleConfig } from './examples/basic';
import { DialogOriginalComponent, dialogOriginalExampleConfig, DialogOverviewComponent } from './examples/original';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: DialogComponent,
      data: {
        examples: [
          dialogBasicExampleConfig,
          dialogOriginalExampleConfig
        ],
      },
    }]),
  ],
  declarations: [
    DialogComponent,
    DialogBasicComponent,
    DialogOriginalComponent,
    DialogOverviewComponent
  ],
})
export class DialogModule { }
