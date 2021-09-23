import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxSplitModule } from '@ng-matero/extensions/split';

import { SplitDemoComponent } from './split-demo.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: SplitDemoComponent }]), MtxSplitModule],
  declarations: [SplitDemoComponent],
})
export class SplitDemoModule {}
