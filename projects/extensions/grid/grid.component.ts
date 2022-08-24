import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  TrackByFunction,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { MatFooterRow, MatFooterRowDef, MatHeaderRowDef, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import { ThemePalette } from '@angular/material/core';

import {
  MtxGridButtonType,
  MtxGridCellTemplate,
  MtxGridColumn,
  MtxGridColumnMenu,
  MtxGridColumnPinOption,
  MtxGridRowClassFormatter,
  MtxGridRowSelectionFormatter,
  RowGroup
} from './grid.interface';
import { MtxGridExpansionToggleDirective } from './expansion-toggle.directive';
import { MtxGridService } from './grid.service';

@Component({
  selector: 'mtx-grid',
  exportAs: 'mtxGrid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  host: {
    class: 'mtx-grid'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expansion', [
      state('collapsed', style({
        height: '0',
        minHeight: '0',
        visibility: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        visibility: 'visible'
      })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class MtxGridComponent implements OnChanges, AfterViewInit, OnDestroy {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ContentChildren(MatRowDef) rowDefs!: QueryList<MatRowDef<any>>;
  @ContentChildren(MatHeaderRowDef) headerRowDefs!: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatFooterRow) footerRowDefs!: QueryList<MatFooterRowDef>;
  @ViewChild('columnMenu') columnMenu!: MtxGridColumnMenu;
  @ViewChild('tableContainer') tableContainer!: ElementRef<HTMLDivElement>;

  dataSource = new MatTableDataSource<any | RowGroup>();

  @Input() displayedColumns!: string[];
  @Input() columns: MtxGridColumn[] = [];
  @Input() rowGroupColumns: MtxGridColumn[] = [];
  @Input() data: any[] = [];
  @Input() length = 0;
  @Input() loading = false;

  @Input() trackBy!: TrackByFunction<any>;

  @Input() columnResizable = false;

  // ===== Page =====

  @Input() pageOnFront = true;
  @Input() showPaginator = true;
  @Input() pageDisabled = false;
  @Input() showFirstLastButtons = true;
  @Input() pageIndex = 0;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [10, 50, 100];
  @Input() hidePageSize = false;
  @Output() page = new EventEmitter<PageEvent>();

  @Input() paginationTemplate!: TemplateRef<any>;

  // ===== Sort =====

  @Input() sortOnFront = true;
  @Input() sortActive!: string;
  @Input() sortDirection!: SortDirection;
  @Input() sortDisableClear: boolean = false;
  @Input() sortDisabled: boolean = false;
  @Input() sortStart: 'asc' | 'desc' = 'asc';
  @Output() sortChange = new EventEmitter<Sort>();

  // ===== Row =====

  @Input() rowHover = false;
  @Input() rowStriped = false;
  @Output() rowClick = new EventEmitter<any>();

  // ===== Expandable Row =====

  expansionRowStates: any[] = [];

  @Input() expandable = false;
  @Input() expansionTemplate!: TemplateRef<any>;
  @Output() expansionChange = new EventEmitter<any>();

  // ==== Row RowGroup ===
  @Input() rowGroup = false;
  @Input() rowGroupTemplate!: TemplateRef<any>;

  // ===== Row Selection =====

  /** Whether support multiple row/cell selection. */
  @Input() multiSelectable = true;

  @Input() multiSelectionWithClick = false;

  rowSelection: SelectionModel<any> = new SelectionModel<any>(true, []);

  @Input() rowSelected: any[] = [];
  @Input() rowSelectable = false;
  @Input() hideRowSelectionCheckbox = false;
  @Input() rowSelectionFormatter: MtxGridRowSelectionFormatter = {};
  @Input() rowClassFormatter!: MtxGridRowClassFormatter;
  @Output() rowSelectionChange = new EventEmitter<any[]>();

  // ===== Cell Selection =====

  cellSelection: any[] = [];

  @Input() cellSelectable = true;
  @Output() cellSelectionChange = new EventEmitter<any[]>();

  private _selectedCell: MtxGridCellSelectionDirective | undefined;

  // ===== Toolbar =====

  @Input() showToolbar = false;
  @Input() toolbarTitle = '';
  @Input() toolbarTemplate!: TemplateRef<any>;

  // ===== Column Menu =====

  @Input() showColumnMenuButton = true;
  @Input() columnMenuButtonText = '';
  @Input() columnMenuButtonType: MtxGridButtonType = 'stroked';
  @Input() columnMenuButtonColor: ThemePalette;
  @Input() columnMenuButtonClass = '';
  @Input() columnMenuButtonIcon = '';

  @Input() columnHideable = true;
  @Input() columnHideableChecked: 'show' | 'hide' = 'show';
  @Input() columnSortable = true;
  @Input() columnPinnable = true;
  @Output() columnChange = new EventEmitter<MtxGridColumn[]>();

  @Input() showColumnMenuHeader = false;
  @Input() columnMenuHeaderText = 'Columns Header';
  @Input() columnMenuHeaderTemplate!: TemplateRef<any>;
  @Input() showColumnMenuFooter = false;
  @Input() columnMenuFooterText = 'Columns Footer';
  @Input() columnMenuFooterTemplate!: TemplateRef<any>;

  @Input() columnPinOptions: MtxGridColumnPinOption[] = [];

  // ===== Row RowGroup =====
  @Input() showRowGroupButton = true;
  @Input() rowGroupButtonText = '';
  @Input() rowGroupButtonType: MtxGridButtonType = 'stroked';
  @Input() rowGroupButtonColor: ThemePalette;
  @Input() rowGroupButtonClass = '';
  @Input() rowGroupButtonIcon = '';

  @Input() rowHideable = true;
  @Input() rowHideableChecked: 'show' | 'hide' = 'show';
  @Input() rowSortable = true;
  @Output() rowGroupChange = new EventEmitter<MtxGridColumn[]>();

  @Input() showRowGroupHeader = false;
  @Input() rowGroupHeaderText = 'Row RowGroup Header';
  @Input() rowGroupHeaderTemplate!: TemplateRef<any>;
  @Input() showRowGroupFooter = false;
  @Input() rowGroupFooterText = 'Row RowGroup Footer';
  @Input() rowGroupFooterTemplate!: TemplateRef<any>;

  // ===== No Result =====

  @Input() noResultText = 'No records found';
  @Input() noResultTemplate!: TemplateRef<any>;

  get _hasNoResult() {
    return (!this.data || this.data.length === 0) && !this.loading;
  }

  // ===== Cell Templates =====

  @Input() headerTemplate: TemplateRef<any> | MtxGridCellTemplate | any;
  @Input() headerExtraTemplate: TemplateRef<any> | MtxGridCellTemplate | any;
  @Input() cellTemplate: TemplateRef<any> | MtxGridCellTemplate | any;

  // ===== Row Templates =====

  @Input() useContentRowTemplate = false;
  // TODO: It can't use together with `useContentRowTemplate`
  @Input() useContentHeaderRowTemplate = false;
  // TODO: It's not working
  @Input() useContentFooterRowTemplate = false;

  // ===== Summary =====

  @Input() showSummary = false;
  @Input() summaryTemplate: TemplateRef<any> | MtxGridCellTemplate | any;

  // TODO: Summary display conditions
  get _whetherShowSummary() {
    return this.showSummary;
  }

  // ===== Side Bar =====

  @Input() showSidebar = false;
  @Input() sidebarTemplate!: TemplateRef<any>;

  // ===== Status Bar =====

  @Input() showStatusbar = false;
  @Input() statusbarTemplate!: TemplateRef<any>;

  rowColumnFields: string[] = [];

  constructor(
    private _dataGridSrv: MtxGridService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  detectChanges() {
    this._changeDetectorRef.detectChanges();
  }

  _isTemplateRef(obj: any) {
    return obj instanceof TemplateRef;
  }

  _getColData(data: any[], colDef: MtxGridColumn) {
    return this._dataGridSrv.getColData(data, colDef);
  }

  _getRowClassList(rowData: any, index: number) {
    const classList: any = {
      'selected': this.rowSelection.isSelected(rowData),
      'mat-row-odd': index % 2
    };
    if (this.rowClassFormatter) {
      for (const key of Object.keys(this.rowClassFormatter)) {
        classList[key] = this.rowClassFormatter[key](rowData, index);
      }
    }
    return classList;
  }

  // Waiting for async data
  ngOnChanges(changes: SimpleChanges) {
    this._countPinnedPosition();

    this.displayedColumns = this.columns.filter(item => !item.hide)
    .map(item => item.field);

    if (this.showColumnMenuButton) {
      this.columns.forEach(item => {
        if (this.columnHideableChecked === 'show') {
          item.show = !item.hide;
        } else {
          item.hide = !!item.hide;
        }
      });
    }
    if (this.showRowGroupButton) {
      this.rowGroupColumns.forEach(item => {
        if (this.columnHideableChecked === 'show') {
          item.show = !item.hide;
        } else {
          item.hide = !!item.hide;
        }
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

    if (this.rowGroup) {
      this.rowColumnFields = this.rowGroupColumns.map((column: MtxGridColumn) => column.field);
      this.groupRows();
    } else {
      this.dataSource = new MatTableDataSource(this.data);
    }

    this.dataSource.paginator = this.pageOnFront ? this.paginator : null;
    this.dataSource.sort = this.sortOnFront ? this.sort : null;

    // Only scroll top with data change
    if (changes.data) {
      this.scrollTop(0);
    }
  }

  ngAfterViewInit() {
    if (this.pageOnFront) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sortOnFront) {
      this.dataSource.sort = this.sort;
    }

    if (this.rowDefs?.length > 0 && this.useContentRowTemplate) {
      this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    }
    if (this.headerRowDefs?.length > 0 && this.useContentHeaderRowTemplate) {
      this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
    }
    if (this.footerRowDefs?.length > 0 && this.useContentFooterRowTemplate) {
      this.footerRowDefs.forEach(footerRowDef => this.table.addFooterRowDef(footerRowDef));
    }
  }

  ngOnDestroy() {
  }

  _countPinnedPosition() {
    const count = (acc: number, cur: MtxGridColumn) => acc + parseFloat(cur.width || '80px');

    const pinnedLeftCols = this.columns.filter(col => col.pinned && col.pinned === 'left');
    pinnedLeftCols.forEach((item, idx) => {
      item.left = pinnedLeftCols.slice(0, idx)
      .reduce(count, 0) + 'px';
    });

    const pinnedRightCols = this.columns
    .filter(col => col.pinned && col.pinned === 'right')
    .reverse();
    pinnedRightCols.forEach((item, idx) => {
      item.right = pinnedRightCols.slice(0, idx)
      .reduce(count, 0) + 'px';
    });
  }

  _getIndex(index: number, dataIndex: number) {
    return typeof index === 'undefined' ? dataIndex : index;
  }

  _handleSortChange(sort: Sort) {
    this.sortChange.emit(sort);
    if (sort.active && sort.direction !== '') {
      this.data = this.data.sort((a: any, b: any) => {
        return this.compare(a[sort.active], b[sort.active], sort.direction === 'asc');
      });
    }

    this.dataSource.data = this.createRows(this.data, this.rowColumnFields);
  }

  private compare(a: any, b: any, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  /** Expansion change event */
  _handleExpansionChange(
    expansionRef: MtxGridExpansionToggleDirective,
    rowData: any,
    column: any,
    index: number
  ) {
    this.expansionChange.emit({
      expanded: expansionRef.expanded,
      data: rowData,
      index,
      column
    });
  }

  /** Cell select event */
  _selectCell(cellRef: MtxGridCellSelectionDirective, rowData: any, colDef: any): void {
    // If not the same cell
    if (this._selectedCell !== cellRef) {
      const colValue = this._dataGridSrv.getCellValue(rowData, colDef);
      this.cellSelection = []; // reset
      this.cellSelection.push({
        cellData: colValue,
        rowData,
        colDef
      });

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
      if (!this.multiSelectionWithClick && !event.ctrlKey && !event.metaKey) {
        this.rowSelection.clear();
      }

      this._toggleNormalCheckbox(rowData);
    }

    this.rowClick.emit({
      rowData,
      index
    });
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

  /** Row RowGroup change event */
  _handleRowChange(columns: MtxGridColumn[]) {
    columns.forEach((column: MtxGridColumn) => this.refreshRowGroup(column));
    this.rowGroupChange.emit(columns);
  }

  getDisplayedColumnFields(columns: MtxGridColumn[]): string[] {
    const fields = columns
    .filter(item => (this.columnHideableChecked === 'show' ? item.show : !item.hide))
    .map(item => item.field);
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

  /** Scroll to top when turn to the next page. */
  _handlePage(e: PageEvent) {
    if (this.pageOnFront) {
      this.scrollTop(0);
    }
    this.page.emit(e);
  }

  scrollTop(value?: number): number | void {
    if (value == null) {
      return this.tableContainer?.nativeElement.scrollTop;
    }
    if (this.tableContainer && !this.loading) {
      this.tableContainer.nativeElement.scrollTop = value;
    }
  }

  scrollLeft(value?: number): number | void {
    if (value == null) {
      return this.tableContainer?.nativeElement.scrollLeft;
    }
    if (this.tableContainer && !this.loading) {
      this.tableContainer.nativeElement.scrollLeft = value;
    }
  }

  groupRows() {
    this.dataSource.data = this.createRows(this.data, this.rowColumnFields);
    this.dataSource.filterPredicate = this.customFilterPredicate.bind(this);
    // this.dataSource.filter = performance.now().toString();
  }

  refreshRowGroup(column: MtxGridColumn) {
    this.checkGroupByColumn(column.field, !!column.show);
    this.dataSource.data = this.createRows(this.data, this.rowColumnFields);
    // this.dataSource.filter = performance.now().toString();
  }

  checkGroupByColumn(field: string, add: boolean) {
    let found = null;
    for (const column of this.rowColumnFields) {
      if (column === field) {
        found = this.rowColumnFields.indexOf(column, 0);
      }
    }
    if (found != null && found >= 0) {
      if (!add) {
        this.rowColumnFields.splice(found, 1);
      }
    } else {
      if (add) {
        this.rowColumnFields.push(field);
      }
    }
  }

  // below is for grid row grouping
  customFilterPredicate(data: any | RowGroup, filter: string): boolean {
    return (data instanceof RowGroup) ? data.visible : this.dataRowVisible(data);
  }

  dataRowVisible(data: any): boolean {
    const groupRows = this.dataSource.data.filter((row: any | RowGroup) => {
        if (!(row instanceof RowGroup)) {
          return false;
        }
        let match = true;
        this.rowColumnFields.forEach((column: any) => {
          const field = (row as any)[column] as any;
          if (!field || !data[column] || field !== data[column]) {
            match = false;
          }
        });
        return match;
      }
    );

    if (groupRows.length === 0) {
      return true;
    }
    const parent = groupRows[0] as RowGroup;
    return parent.visible && parent.expanded;
  }

  groupRowClick(row: RowGroup) {
    row.expanded = !row.expanded;
    // this.dataSource.filter = performance.now().toString();  // bug here need to fix
  }

  createRows(data: any[], groupByColumns: string[]): any[] {
    if(!groupByColumns.length) {
      return data;
    }
    const rootGroup = new RowGroup();
    rootGroup.expanded = true;
    const groups = this.uniqueBy(data.map((row: any) => {
      const result = new RowGroup();
      result.parent = rootGroup;
      groupByColumns.forEach((c: string) => {
        result[c] = this.fieldValue(row, c);
      });
      return result;
    }), JSON.stringify);

    let rows: any[] = [];
    groups.forEach((group) => {
      const rowsInGroup = data.filter((row: any | RowGroup) => {
        const matched = groupByColumns.filter((c: string) => {
          return group[c] === this.fieldValue(row, c);
        });
        return matched?.length === groupByColumns?.length;
      });
      group.totalCounts = rowsInGroup.length;
      const groupedRows = [...rowsInGroup];
      groupedRows.unshift(group);
      rows = rows.concat(groupedRows);
    });
    return rows;
  }

  fieldValue(rowData: any, field: string): string {
    const keyArr = field ? field.split('.') : [];

    let tmp: any = '';

    keyArr.forEach((key: string, i: number) => {
      if (i === 0) {
        tmp = rowData[key];
      } else {
        tmp = tmp && tmp[key];
      }
    });
    return tmp;
  }

  uniqueBy(items: any[], key: any): any[] {
    const seen: any = {};
    return items.filter((item) => {
      const k = key(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
  }

  isGroup(index: number, item: any): boolean {
    return item instanceof RowGroup;
  }

  isRecordRow(index: number, item: any): boolean {
    return !(item instanceof RowGroup);
  }
}

@Directive({
  selector: '[mtx-grid-selectable-cell]'
})
export class MtxGridCellSelectionDirective {
  private _selected = false;
  private _rowData: any;

  ctrlKeyPressed = false;
  shiftKeyPressed = false;

  @HostBinding('class.selected')
  get selected(): boolean {
    return this._selected;
  }

  @Input()
  set mtxSelectableRowData(value: any) {
    if (value !== this._rowData) {
      this._rowData = value;
    }
  }

  @Output() cellSelectionChange = new EventEmitter<MtxGridCellSelectionDirective>();

  constructor(private _dataGrid: MtxGridComponent) {
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.ctrlKeyPressed = event.ctrlKey;
    this.shiftKeyPressed = event.shiftKey;

    if (this._dataGrid.cellSelectable) {
      this.select();
    }
  }

  select(): void {
    this._selected = true;
    this.cellSelectionChange.emit(this);
  }

  deselect(): void {
    this._selected = false;
    this.cellSelectionChange.emit(this);
  }

  toggle(): void {
    this._selected = !this._selected;
    this.cellSelectionChange.emit(this);
  }
}
