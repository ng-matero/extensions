import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatColumnResizeModule } from './column-resize/column-resize-module';

import { MtxPipesModule } from '@ng-matero/extensions/core';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxGrid } from './grid';
import { MtxGridCell } from './cell';
import { MtxGridColumnMenu } from './column-menu';
import { MtxGridExpansionToggle } from './grid-expansion-toggle';
import { MtxGridMenu } from './grid-menu';
import {
  MtxGridCellActionBadgePipe,
  MtxGridCellActionDisablePipe,
  MtxGridCellActionTooltipPipe,
  MtxGridCellActionsPipe,
  MtxGridCellSummaryPipe,
  MtxGridColClassPipe,
  MtxGridRowClassPipe,
} from './grid-pipes';
import { MtxGridSelectableCell } from './grid-selectable-cell';
import { MtxGridUtils } from './grid-utils';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTooltipModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    DragDropModule,
    MtxDialogModule,
    MtxPipesModule,
    MatColumnResizeModule,
    MtxGrid,
    MtxGridCell,
    MtxGridColumnMenu,
    MtxGridExpansionToggle,
    MtxGridSelectableCell,
    MtxGridMenu,
    MtxGridRowClassPipe,
    MtxGridColClassPipe,
    MtxGridCellActionsPipe,
    MtxGridCellActionTooltipPipe,
    MtxGridCellActionBadgePipe,
    MtxGridCellActionDisablePipe,
    MtxGridCellSummaryPipe,
  ],
  exports: [
    MatColumnResizeModule,
    MtxGrid,
    MtxGridCell,
    MtxGridColumnMenu,
    MtxGridExpansionToggle,
    MtxGridSelectableCell,
    MtxGridMenu,
    MtxGridRowClassPipe,
    MtxGridColClassPipe,
    MtxGridCellActionsPipe,
    MtxGridCellActionTooltipPipe,
    MtxGridCellActionBadgePipe,
    MtxGridCellActionDisablePipe,
    MtxGridCellSummaryPipe,
  ],
  providers: [MtxGridUtils],
})
export class MtxGridModule {}
