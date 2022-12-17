import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxSplit } from './split';
import { MtxSplitPane } from './split-pane';

@NgModule({
  imports: [CommonModule],
  declarations: [MtxSplit, MtxSplitPane],
  exports: [MtxSplit, MtxSplitPane],
})
export class MtxSplitModule {}
