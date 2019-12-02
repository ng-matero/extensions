import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatChipsModule,
  MatTooltipModule,
  MatIconModule,
} from '@angular/material';

import { MtxDataGridComponent } from './data-grid.component';
import { MtxDataGridCellComponent } from './data-grid-cell.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTooltipModule,
    MatIconModule,
  ],
  exports: [MtxDataGridComponent, MtxDataGridCellComponent],
  declarations: [MtxDataGridComponent, MtxDataGridCellComponent],
})
export class MtxDataGridModule {}
