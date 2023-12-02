import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatColumnResizeModule } from './column-resize/column-resize-module';

import { MtxPipesModule } from '@ng-matero/extensions/core';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxGrid, MtxGridSelectableCell } from './grid';
import { MtxGridCell } from './cell';
import { MtxGridColumnMenu } from './column-menu';
import { MtxGridExpansionToggle } from './expansion-toggle';
import { MtxGridUtils } from './grid-utils';
import {
  MtxGridCellActionsPipe,
  MtxGridCellActionDisablePipe,
  MtxGridCellActionTooltipPipe,
  MtxGridCellActionBadgePipe,
  MtxGridCellSummaryPipe,
  MtxGridColClassPipe,
  MtxGridRowClassPipe,
} from './grid-pipes';

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
    MatColumnResizeModule,
    MtxDialogModule,
    MtxPipesModule,
  ],
  exports: [
    MatColumnResizeModule,
    MtxGrid,
    MtxGridCell,
    MtxGridColumnMenu,
    MtxGridExpansionToggle,
    MtxGridSelectableCell,
    MtxGridRowClassPipe,
    MtxGridColClassPipe,
    MtxGridCellActionsPipe,
    MtxGridCellActionTooltipPipe,
    MtxGridCellActionBadgePipe,
    MtxGridCellActionDisablePipe,
    MtxGridCellSummaryPipe,
  ],
  declarations: [
    MtxGrid,
    MtxGridCell,
    MtxGridColumnMenu,
    MtxGridExpansionToggle,
    MtxGridSelectableCell,
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
