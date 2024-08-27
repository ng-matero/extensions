import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MtxPipesModule } from '@dcnx/mat-extensions/core';
import { MtxDialogContainer } from './dialog-container';
import { MtxDialog } from './dialog';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MtxPipesModule,
    MtxDialogContainer,
  ],
  exports: [MtxDialogContainer],
  providers: [MtxDialog],
})
export class MtxDialogModule {}
