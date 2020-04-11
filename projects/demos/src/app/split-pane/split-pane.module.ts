import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { SplitPaneComponent } from './split-pane.component';

@NgModule({
  declarations: [SplitPaneComponent],
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: SplitPaneComponent }])]
})
export class SplitPaneModule { }
