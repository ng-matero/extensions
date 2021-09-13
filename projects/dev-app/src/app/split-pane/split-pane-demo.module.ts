import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxSplitModule } from '@ng-matero/extensions/split';

import { SplitPaneDemoComponent } from './split-pane-demo.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: SplitPaneDemoComponent }]),
    MtxSplitModule,
  ],
  declarations: [SplitPaneDemoComponent],
})
export class SplitPaneDemoModule {}
