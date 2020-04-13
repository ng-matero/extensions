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
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxGridComponent } from './grid.component';
import { MtxGridCellComponent } from './cell.component';
import { MtxGridColumnSelectionComponent } from './column-selection.component';
import { MtxGridExpansionToggleDirective } from './expansion-toggle.directive';
import { MtxGridCellSelectionDirective } from './cell-selection.directive';
import { MtxGridService } from './grid.service';

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
    MatIconModule,
    MtxDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    DragDropModule,
  ],
  exports: [
    MtxGridComponent,
    MtxGridCellComponent,
    MtxGridColumnSelectionComponent,
    MtxGridExpansionToggleDirective,
    MtxGridCellSelectionDirective,
  ],
  declarations: [
    MtxGridComponent,
    MtxGridCellComponent,
    MtxGridColumnSelectionComponent,
    MtxGridExpansionToggleDirective,
    MtxGridCellSelectionDirective,
  ],
  providers: [MtxGridService],
})
export class MtxGridModule { }
