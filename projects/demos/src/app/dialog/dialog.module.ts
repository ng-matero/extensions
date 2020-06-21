import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { DialogComponent } from './dialog.component';
import { DialogOverviewComponent } from './dialog.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DialogComponent }]),
  ],
  declarations: [DialogComponent, DialogOverviewComponent],
  entryComponents: [DialogOverviewComponent],
})
export class DialogModule {}
