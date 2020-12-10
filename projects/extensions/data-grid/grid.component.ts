import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
  OnChanges,
  TemplateRef,
  TrackByFunction,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort, MatSort, SortDirection } from '@angular/material/sort';

import {
  MtxGridColumn,
  MtxGridColumnSelectionItem,
  MtxGridCellTemplate,
  MtxGridRowSelectionFormatter,
  MtxGridRowClassFormatter,
  MtxGridColumnMenu,
} from './grid.interface';
import { MtxGridCellSelectionDirective } from './cell-selection.directive';
import { MtxGridExpansionToggleDirective } from './expansion-toggle.directive';
import { MtxGridService } from './grid.service';
import { isObservable } from 'rxjs';

@Component({
  selector: 'mtx-grid',
  exportAs: 'mtxGrid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  host: {
    class: 'mtx-grid',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expansion', [
      state('collapsed', style({ height: '0', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MtxGridComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('columnMenu') columnMenu: MtxGridColumnMenu;

  dataSource = new MatTableDataSource([]);

  @Input() displayedColumns: string[];

  @Input() columns: MtxGridColumn[] = [];
  @Input() data = [];
  @Input() length = 0;
  @Input() loading = false;

  // Tracking function
  @Input() trackBy: TrackByFunction<any>;

  /** Whether to show tooltip on columns */
  @Input() tooltip = true;

  /** Whether to page on the front end */
  @Input() pageOnFront = true;
  @Input() showPaginator = true;
  @Input() pageDisabled = false;
  @Input() showFirstLastButtons = true;
  @Input() pageIndex = 0;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [10, 50, 100];
  @Input() hidePageSize = false;
  @Output() page = new EventEmitter<PageEvent>();

  /** Sort */

  @Input() sortOnFront = true;
  @Input() sortActive: string;
  @Input() sortDirection: SortDirection;
  @Input() sortDisableClear: boolean = false;
  @Input() sortDisabled: boolean = false;
  @Input() sortStart: 'asc' | 'desc' = 'asc';
  @Output() sortChange = new EventEmitter<Sort>();

  /** Hover & Striped style */

  @Input() rowHover = false;
  @Input() rowStriped = false;

  /** Expandable row */

  expansionRowStates: any[] = [];

  @Input() expandable = false;
  @Input() expansionTemplate: TemplateRef<any>;
  @Output() expansionChange = new EventEmitter<any>();

  /** Whether support multiple row/cell selection */

  @Input() multiSelectable = true;

  /** Row selection */

  rowSelection: SelectionModel<any> = new SelectionModel<any>(true, []);

  @Input() rowSelected = [];
  @Input() rowSelectable = false;
  @Input() hideRowSelectionCheckbox = false;
  @Input() rowSelectionFormatter: MtxGridRowSelectionFormatter = {};
  @Input() rowClassFormatter: MtxGridRowClassFormatter;
  @Output() rowSelectionChange = new EventEmitter<any[]>();

  /** Row event */

  @Output() rowClick = new EventEmitter<any>();

  /** Cell selection */

  cellSelection: any[] = [];

  @Input() cellSelectable = true;
  @Output() cellSelectionChange = new EventEmitter<any[]>();

  private _selectedCell: MtxGridCellSelectionDirective | undefined;

  /** Toolbar */

  @Input() showToolbar = false;
  @Input() toolbarTitle = '';
  @Input() toolbarTemplate: TemplateRef<any>;

  /** Column menu */

  columnMenuData: MtxGridColumnSelectionItem[] = [];

  @Input() showColumnMenuButton = true;
  @Input() columnMenuButtonText = '';
  @Input() columnMenuButtonType = 'stroked';
  @Input() columnMenuButtonColor = '';
  @Input() columnMenuButtonClass = '';
  @Input() columnMenuButtonIcon = '';

  @Input() columnHideable = true;
  @Input() columnHideableChecked: 'show' | 'hide' = 'show';
  @Input() columnMovable = true;
  @Input() columnPinnable = true;
  @Output() columnChange = new EventEmitter<MtxGridColumnSelectionItem[]>();

  @Input() showColumnMenuHeader = false;
  @Input() columnMenuHeaderText = 'Columns Header';
  @Input() columnMenuHeaderTemplate: TemplateRef<any>;
  @Input() showColumnMenuFooter = false;
  @Input() columnMenuFooterText = 'Columns Footer';
  @Input() columnMenuFooterTemplate: TemplateRef<any>;

  /** No Result */
  @Input() noResultText = 'No records found';
  @Input() noResultTemplate: TemplateRef<any>;

  get _hasNoResult() {
    return (!this.data || this.data.length === 0) && !this.loading;
  }

  /** thead */
  @Input() headerTemplate: TemplateRef<any> | MtxGridCellTemplate | any;

  /** tbody */
  @Input() cellTemplate: TemplateRef<any> | MtxGridCellTemplate | any;

  /** tfoot */
  @Input() showSummary = false;
  @Input() summaryTemplate: TemplateRef<any> | MtxGridCellTemplate | any;

  // TODO: Summary display conditions
  get _whetherShowSummary() {
    return this.showSummary;
  }

  /** Sidebar */
  @Input() showSidebar = false;

  /** Column resizable */
  @Input() columnResizable = false;

  _getColData(data: any, colDef: MtxGridColumn) {
    return data.map((item: any) => item[colDef.field]);
  }

  _formatSummary(summary: any, data: any, colDef: MtxGridColumn) {
    if (this._isString(summary)) {
      return summary;
    } else if (this._isFunction(summary)) {
      const colData = this._getColData(data, colDef);
      return summary(colData, colDef);
    }
  }

  constructor(private _dataGridSrv: MtxGridService) {}

  _isTemplateRef(obj: any) {
    return obj instanceof TemplateRef;
  }

  _isString(fn: any) {
    return Object.prototype.toString.call(fn) === '[object String]';
  }

  _isFunction(fn: any) {
    return Object.prototype.toString.call(fn) === '[object Function]';
  }

  _isObservable(data: any) {
    return isObservable(data);
  }

  _getRowClassList(rowData: any, index: number) {
    const classList: any = {
      'selected': this.rowSelection.isSelected(rowData),
      'mat-row-odd': index % 2,
    };
    if (this.rowClassFormatter) {
      for (const key of Object.keys(this.rowClassFormatter)) {
        classList[key] = this.rowClassFormatter[key](rowData, index);
      }
    }
    return classList;
  }

  ngOnInit() {}

  // Waiting for async data
  ngOnChanges() {
    this._countPinnedPosition();

    this.displayedColumns = this.columns.filter(item => !item.hide).map(item => item.field);

    if (this.showColumnMenuButton) {
      this.columnMenuData = (this.columns as any[]).map(item => {
        const newItem: MtxGridColumnSelectionItem = {
          label: item.header,
          field: item.field,
          disabled: item.disabled,
        };
        if (this.columnHideableChecked === 'show') {
          newItem.show = !item.hide;
        } else {
          newItem.hide = item.hide;
        }
        return newItem;
      });
    }

    if (this.rowSelectable && !this.hideRowSelectionCheckbox) {
      this.displayedColumns.unshift('MtxGridCheckboxColumnDef');
    }

    // We should copy each item of data for expansion data
    if (this.expandable) {
      this.expansionRowStates = []; // reset

      this.data?.forEach(_ => {
        this.expansionRowStates.push({ expanded: false });
      });
    }

    if (this.rowSelectable) {
      this.rowSelection = new SelectionModel<any>(this.multiSelectable, this.rowSelected);
    }

    this.dataSource.data = this.data;
    this.dataSource.paginator = this.pageOnFront ? this.paginator : null;
    this.dataSource.sort = this.sortOnFront ? this.sort : null;
  }

  ngAfterViewInit() {
    if (this.pageOnFront) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sortOnFront) {
      this.dataSource.sort = this.sort;
    }
  }

  ngOnDestroy() {}

  _countPinnedPosition() {
    const count = (acc: number, cur: MtxGridColumn) => acc + parseFloat(cur.width || '80px');

    const pinnedLeftCols = this.columns.filter(col => col.pinned && col.pinned === 'left');
    pinnedLeftCols.forEach((item, idx) => {
      item.left = pinnedLeftCols.slice(0, idx).reduce(count, 0) + 'px';
    });

    const pinnedRightCols = this.columns
      .filter(col => col.pinned && col.pinned === 'right')
      .reverse();
    pinnedRightCols.forEach((item, idx) => {
      item.right = pinnedRightCols.slice(0, idx).reduce(count, 0) + 'px';
    });
  }

  _getIndex(index: number, dataIndex: number) {
    return typeof index === 'undefined' ? dataIndex : index;
  }

  _handleSortChange(sort: Sort) {
    this.sortChange.emit(sort);
  }

  /** Expansion change event */
  _handleExpansionChange(
    expansionRef: MtxGridExpansionToggleDirective,
    rowData: any,
    column: any,
    index: number
  ) {
    this.expansionChange.emit({ opened: expansionRef.expended, data: rowData, index, column });
  }

  /** Cell select event */
  _selectCell(cellRef: MtxGridCellSelectionDirective, rowData: any, colDef: any): void {
    // If not the same cell
    if (this._selectedCell !== cellRef) {
      const colValue = this._dataGridSrv.getCellValue(rowData, colDef);
      this.cellSelection = []; // reset
      this.cellSelection.push({ cellData: colValue, rowData, colDef });

      this.cellSelectionChange.emit(this.cellSelection);

      if (this._selectedCell) {
        this._selectedCell.deselect(); // the selectedCell will be undefined
      }
    }

    this._selectedCell = cellRef.selected ? cellRef : undefined;
  }

  /** Row select event */
  _selectRow(event: MouseEvent, rowData: any, index: number) {
    if (
      this.rowSelectable &&
      !this.rowSelectionFormatter.disabled?.(rowData, index) &&
      !this.rowSelectionFormatter.hideCheckbox?.(rowData, index)
    ) {
      // metaKey -> command key
      if (!event.ctrlKey && !event.metaKey) {
        this.rowSelection.clear();
      }

      this._toggleNormalCheckbox(rowData);
    }

    this.rowClick.emit({ rowData, index });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  _isAllSelected() {
    const numSelected = this.rowSelection.selected.length;
    const numRows = this.dataSource.data.filter(
      (row, index) => !this.rowSelectionFormatter.disabled?.(row, index)
    ).length;
    return numSelected === numRows;
  }

  /** Select all rows if they are not all selected; otherwise clear selection. */
  _toggleMasterCheckbox() {
    this._isAllSelected()
      ? this.rowSelection.clear()
      : this.dataSource.data.forEach((row, index) => {
          if (!this.rowSelectionFormatter.disabled?.(row, index)) {
            this.rowSelection.select(row);
          }
        });
    this.rowSelectionChange.emit(this.rowSelection.selected);
  }

  /** Select normal row */
  _toggleNormalCheckbox(row: any) {
    this.rowSelection.toggle(row);
    this.rowSelectionChange.emit(this.rowSelection.selected);
  }

  /** Column change event */

  _handleColumnChange(columns: any[]) {
    this.columnChange.emit(columns);

    this.displayedColumns = Object.assign([], this.getDisplayedColumnFields(columns));

    if (this.rowSelectable && !this.hideRowSelectionCheckbox) {
      this.displayedColumns.unshift('MtxGridCheckboxColumnDef');
    }
  }

  getDisplayedColumnFields(columns: any[]): string[] {
    const fields = columns
      .filter((item: MtxGridColumnSelectionItem) =>
        this.columnHideableChecked === 'show' ? item.show : !item.hide
      )
      .map((item: MtxGridColumnSelectionItem) => item.field);
    return fields;
  }

  /** Customize expansion event */
  toggleExpansion(index: number) {
    if (!this.expandable) {
      throw new Error('The `expandable` should be set true.');
    }
    this.expansionRowStates[index].expanded = !this.expansionRowStates[index].expanded;
    return this.expansionRowStates[index].expanded;
  }
}
