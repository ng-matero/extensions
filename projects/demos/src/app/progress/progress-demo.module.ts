import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxProgressModule } from '@ng-matero/extensions/progress';

import { ProgressDemoComponent } from './progress-demo.component';

@NgModule({
  imports: [
    MtxProgressModule,
    RouterModule.forChild([{ path: '', component: ProgressDemoComponent }]),
  ],
  declarations: [ProgressDemoComponent],
})
export class ProgressDemoModule {}
