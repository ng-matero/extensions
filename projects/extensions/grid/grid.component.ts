import {
  Component,
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
  ChangeDetectorRef,
  ElementRef,
  SimpleChanges,
  QueryList,
  ContentChildren,
  Directive,
  HostBinding,
  HostListener,
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatFooterRow,
  MatFooterRowDef,
  MatHeaderRowDef,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort, MatSort, SortDirection } from '@angular/material/sort';
import { ThemePalette } from '@angular/material/core';

import {
  MtxGridColumn,
  MtxGridCellTemplate,
  MtxGridRowSelectionFormatter,
  MtxGridRowClassFormatter,
  MtxGridColumnMenu,
  MtxGridButtonType,
  MtxGridColumnPinOption,
} from './grid.interface';
import { MtxGridExpansionToggleDirective } from './expansion-toggle.directive';
import { MtxGridService } from './grid.service';

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
      state('collapsed, void', style({ height: '0', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
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

  dataSource = new MatTableDataSource();

  /** The grid's displayed columns. */
  @Input() displayedColumns: string[] = [];
  /** The grid's columns. */
  @Input() columns: MtxGridColumn[] = [];
  /** The grid's data. */
  @Input() data: any[] = [];
  /** The total number of the data. */
  @Input() length = 0;
  /** Whether the grid is loading. */
  @Input() loading = false;
  /** Tracking function that will be used to check the differences in data changes. */
  @Input() trackBy!: TrackByFunction<any>;
  /** Whether the column is resizable. */
  @Input() columnResizable = false;
  /** Placeholder for the empty value (`null`, `''`, `[]`). */
  @Input() emptyValuePlaceholder: string = '--';

  // ===== Page =====

  /** Whether to paginate the data on front end. */
  @Input() pageOnFront = true;
  /** Whether to show the paginator. */
  @Input() showPaginator = true;
  /** Whether the paginator is disabled. */
  @Input() pageDisabled = false;
  /** Whether to show the first/last buttons UI to the user. */
  @Input() showFirstLastButtons = true;
  /** The zero-based page index of the displayed list of items. */
  @Input() pageIndex = 0;
  /** Number of items to display on a page. */
  @Input() pageSize = 10;
  /** The set of provided page size options to display to the user. */
  @Input() pageSizeOptions = [10, 50, 100];
  /** Whether to hide the page size selection UI from the user. */
  @Input() hidePageSize = false;
  /** Event emitted when the paginator changes the page size or page index. */
  @Output() page = new EventEmitter<PageEvent>();
  /** The template for the pagination. */
  @Input() paginationTemplate!: TemplateRef<any>;

  // ===== Sort =====

  /** Whether to sort the data on front end. */
  @Input() sortOnFront = true;
  /** The id of the most recently sorted MatSortable. */
  @Input() sortActive!: string;
  /** The sort direction of the currently active MatSortable. */
  @Input() sortDirection!: SortDirection;
  /**
   * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
   * May be overriden by the column's `disableClear` in `sortProp`.
   */
  @Input() sortDisableClear: boolean = false;
  /** Whether the sort is disabled. */
  @Input() sortDisabled: boolean = false;
  /**
   * The direction to set when an MatSortable is initially sorted.
   * May be overriden by the column's `start` in `sortProp`.
   */
  @Input() sortStart: 'asc' | 'desc' = 'asc';
  /** Event emitted when the user changes either the active sort or sort direction. */
  @Output() sortChange = new EventEmitter<Sort>();

  // ===== Row =====

  /** Whether to use the row hover style. */
  @Input() rowHover = false;
  /** Whether to use the row striped style. */
  @Input() rowStriped = false;
  /** Event emitted when the user clicks the row. */
  @Output() rowClick = new EventEmitter<any>();

  // ===== Expandable Row =====

  expansionRowStates: any[] = [];

  /** Whether the row is expandable. */
  @Input() expandable = false;
  /** The template for the expandable row. */
  @Input() expansionTemplate!: TemplateRef<any>;
  /** Event emitted when the user toggles the expandable row. */
  @Output() expansionChange = new EventEmitter<any>();

  // ===== Row Selection =====

  rowSelection: SelectionModel<any> = new SelectionModel<any>(true, []);

  /** Whether to support multiple row/cell selection. */
  @Input() multiSelectable = true;
  /** Whether the user can select multiple rows with click. */
  @Input() multiSelectionWithClick = false;
  /** The selected row items. */
  @Input() rowSelected: any[] = [];
  /** Whether the row is selectable. */
  @Input() rowSelectable = false;
  /** Whether to hide the row selection checkbox. */
  @Input() hideRowSelectionCheckbox = false;
  /** The formatter to disable the row selection or hide the row's checkbox. */
  @Input() rowSelectionFormatter: MtxGridRowSelectionFormatter = {};
  /** The formatter to set the row's class. */
  @Input() rowClassFormatter!: MtxGridRowClassFormatter;
  /** Event emitted when the row is selected. */
  @Output() rowSelectionChange = new EventEmitter<any[]>();

  // ===== Cell Selection =====

  cellSelection: any[] = [];

  /** Whether the cell is selectable. */
  @Input() cellSelectable = true;
  /** Event emitted when the cell is selected. */
  @Output() cellSelectionChange = new EventEmitter<any[]>();

  private _selectedCell?: MtxGridCellSelectionDirective;

  // ===== Toolbar =====

  /** Whether to show the toolbar. */
  @Input() showToolbar = false;
  /** The text of the toolbar's title. */
  @Input() toolbarTitle = '';
  /** The template for the toolbar. */
  @Input() toolbarTemplate!: TemplateRef<any>;

  // ===== Column Menu =====

  /** Whether the column is hideable. */
  @Input() columnHideable = true;
  /** Hide or show when the column's checkbox is checked. */
  @Input() columnHideableChecked: 'show' | 'hide' = 'show';
  /** Whether the column is sortable. */
  @Input() columnSortable = true;
  /** Whether the column is pinnable. */
  @Input() columnPinnable = true;
  /** Event emitted when the column is hided or is sorted. */
  @Output() columnChange = new EventEmitter<MtxGridColumn[]>();
  /** The options for the column pin list. */
  @Input() columnPinOptions: MtxGridColumnPinOption[] = [];

  /** Whether to show the column menu button. */
  @Input() showColumnMenuButton = true;
  /** The text for the column menu button. */
  @Input() columnMenuButtonText = '';
  /** The type for the column menu button. */
  @Input() columnMenuButtonType: MtxGridButtonType = 'stroked';
  /** The color for the column menu button. */
  @Input() columnMenuButtonColor: ThemePalette;
  /** The class for the column menu button. */
  @Input() columnMenuButtonClass = '';
  /** The icon for the column menu button. */
  @Input() columnMenuButtonIcon = '';

  /** Whether to show the column-menu's header. */
  @Input() showColumnMenuHeader = false;
  /** The text for the column-menu's header. */
  @Input() columnMenuHeaderText = 'Columns Header';
  /** The template for the column-menu's header. */
  @Input() columnMenuHeaderTemplate!: TemplateRef<any>;
  /** Whether to show the the column-menu's footer. */
  @Input() showColumnMenuFooter = false;
  /** The text for the column-menu's footer. */
  @Input() columnMenuFooterText = 'Columns Footer';
  /** The template for the column-menu's footer. */
  @Input() columnMenuFooterTemplate!: TemplateRef<any>;

  // ===== No Result =====

  /** The displayed text for the empty data. */
  @Input() noResultText = 'No records found';
  /** The template for the empty data. */
  @Input() noResultTemplate!: TemplateRef<any>;

  get _hasNoResult() {
    return (!this.data || this.data.length === 0) && !this.loading;
  }

  // ===== Cell Templates =====

  /** The header's cell template for the grid. */
  @Input() headerTemplate: TemplateRef<any> | MtxGridCellTemplate | any;
  /** The header's cell template for the grid exclude sort. */
  @Input() headerExtraTemplate: TemplateRef<any> | MtxGridCellTemplate | any;
  /** The cell template for the grid. */
  @Input() cellTemplate: TemplateRef<any> | MtxGridCellTemplate | any;

  // ===== Row Templates =====

  /** Whether to use custom row template. If true, you should define a matRowDef. */
  @Input() useContentRowTemplate = false;
  // TODO: It can't use together with `useContentRowTemplate`
  @Input() useContentHeaderRowTemplate = false;
  // TODO: It's not working
  @Input() useContentFooterRowTemplate = false;

  // ===== Summary =====

  /** Whether to show the summary. */
  @Input() showSummary = false;
  /** The template for the summary. */
  @Input() summaryTemplate: TemplateRef<any> | MtxGridCellTemplate | any;

  // TODO: Summary display conditions
  get _whetherShowSummary() {
    return this.showSummary;
  }

  // ===== Side Bar =====

  /** Whether to show the sidebar. */
  @Input() showSidebar = false;
  /** The template for the sidebar. */
  @Input() sidebarTemplate!: TemplateRef<any>;

  // ===== Status Bar =====

  /** Whether to show the status bar. */
  @Input() showStatusbar = false;
  /** The template for the status bar. */
  @Input() statusbarTemplate!: TemplateRef<any>;

  constructor(
    private _dataGridSrv: MtxGridService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

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
      'mat-row-odd': index % 2,
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

    this.displayedColumns = this.columns.filter(item => !item.hide).map(item => item.field);

    if (this.showColumnMenuButton) {
      this.columns.forEach(item => {
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

    this.dataSource = new MatTableDataSource(this.data);

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

  _onSortChange(sort: Sort) {
    this.sortChange.emit(sort);
  }

  /** Expansion change event */
  _onExpansionChange(
    expansionRef: MtxGridExpansionToggleDirective,
    rowData: any,
    column: any,
    index: number
  ) {
    this.expansionChange.emit({ expanded: expansionRef.expanded, data: rowData, index, column });
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
      if (!this.multiSelectionWithClick && !event.ctrlKey && !event.metaKey) {
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
  _onColumnChange(columns: any[]) {
    this.columnChange.emit(columns);

    this.displayedColumns = Object.assign([], this.getDisplayedColumnFields(columns));

    if (this.rowSelectable && !this.hideRowSelectionCheckbox) {
      this.displayedColumns.unshift('MtxGridCheckboxColumnDef');
    }
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
  _onPage(e: PageEvent) {
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
}

@Directive({
  selector: '[mtx-grid-selectable-cell]',
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

  constructor(private _dataGrid: MtxGridComponent) {}

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
