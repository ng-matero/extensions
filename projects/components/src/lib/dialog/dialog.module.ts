import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { MtxDialogComponent } from './dialog.component';
import { MtxDialog } from './dialog';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  exports: [MtxDialogComponent],
  declarations: [MtxDialogComponent],
  providers: [MtxDialog],
  entryComponents: [MtxDialogComponent],
})
export class MtxDialogModule {}
