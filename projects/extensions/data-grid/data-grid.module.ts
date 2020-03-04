import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { MtxDialogModule } from '@ng-matero/extensions/dialog';
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
    MtxDialogModule,
  ],
  exports: [MtxDataGridComponent, MtxDataGridCellComponent],
  declarations: [MtxDataGridComponent, MtxDataGridCellComponent],
})
export class MtxDataGridModule {}
