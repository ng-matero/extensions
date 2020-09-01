import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

import { SplitPaneComponent } from './split-pane.component';

import { SplitPaneBasicComponent, splitPaneBasicExampleConfig } from './examples/basic';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SplitPaneComponent,
        data: {
          examples: [splitPaneBasicExampleConfig],
        },
      },
    ]),
  ],
  declarations: [SplitPaneComponent, SplitPaneBasicComponent],
})
export class SplitPaneModule {}
