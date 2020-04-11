import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxSplitComponent } from './split.component';
import { MtxSplitPaneDirective } from './split-pane.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [MtxSplitComponent, MtxSplitPaneDirective],
  exports: [MtxSplitComponent, MtxSplitPaneDirective],
})
export class MtxSplitModule {}
