import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { MtxUtilsModule } from '@ng-matero/extensions/utils';
import { MtxDialogComponent } from './dialog.component';
import { MtxDialog } from './dialog';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MtxUtilsModule],
  exports: [MtxDialogComponent],
  declarations: [MtxDialogComponent],
  providers: [MtxDialog],
  entryComponents: [MtxDialogComponent],
})
export class MtxDialogModule {}
