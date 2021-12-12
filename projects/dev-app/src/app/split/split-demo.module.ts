import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxSplitModule } from '@ng-matero/extensions/split';

import { SplitDemoComponent } from './split-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SplitDemoComponent }]),
    MtxSplitModule,
  ],
  declarations: [SplitDemoComponent],
})
export class SplitDemoModule {}
