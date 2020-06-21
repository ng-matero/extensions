import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { ProgressComponent } from './progress.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ProgressComponent }]),
  ],
  declarations: [ProgressComponent],
})
export class ProgressModule {}
