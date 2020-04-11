import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { ProgressDemoComponent } from './progress-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ProgressDemoComponent }]),
  ],
  declarations: [ProgressDemoComponent],
})
export class ProgressDemoModule {}
