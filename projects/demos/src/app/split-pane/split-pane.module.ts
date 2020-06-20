import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { SplitPaneComponent } from './split-pane.component';

@NgModule({
  declarations: [SplitPaneComponent],
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: SplitPaneComponent }])]
})
export class SplitPaneModule { }
