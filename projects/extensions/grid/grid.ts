import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  KeyValueChangeRecord,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  TrackByFunction,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatSort, MatSortHeader, Sort, SortDirection } from '@angular/material/sort';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterCell,
  MatFooterCellDef,
  MatFooterRow,
  MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';

import { MtxIsTemplateRefPipe, MtxToObservablePipe } from '@dcnx/mat-extensions/core';
import { MtxGridCell } from './cell';
import { MtxGridColumnMenu } from './column-menu';
import { MatColumnResize, MatResizable } from './column-resize';
import { MtxGridExpansionToggle } from './expansion-toggle';
import { MtxGridColClassPipe, MtxGridRowClassPipe } from './grid-pipes';
import { MtxGridUtils } from './grid-utils';
import {
  MtxGridButtonType,
  MtxGridCellTemplate,
  MtxGridColumn,
  MtxGridColumnPinOption,
  MtxGridDefaultOptions,
  MtxGridRowClassFormatter,
  MtxGridRowSelectionFormatter,
} from './interfaces';
import { MtxGridSelectableCell } from './selectable-cell';

/** Injection token that can be used to specify default grid options. */
export const MTX_GRID_DEFAULT_OPTIONS = new InjectionToken<MtxGridDefaultOptions>(
  'mtx-grid-default-options'
);

@Component({
  selector: 'mtx-grid',
  exportAs: 'mtxGrid',
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
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
  standalone: true,
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    MatProgressBar,
    MatIconButton,
    MatCheckbox,
    MatTable,
    MatColumnDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatFooterRowDef,
    MatFooterRow,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatFooterCellDef,
    MatFooterCell,
    MatSort,
    MatSortHeader,
    MatPaginator,
    MatResizable,
    MatColumnResize,
    MtxGridCell,
    MtxGridColumnMenu,
    MtxGridSelectableCell,
    MtxGridExpansionToggle,
    MtxIsTemplateRefPipe,
    MtxGridColClassPipe,
    MtxGridRowClassPipe,
    MtxToObservablePipe,
  ],
})
export class MtxGrid implements OnChanges, AfterViewInit, OnDestroy {
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
  @Input({ transform: booleanAttribute }) loading = false;
  /** Tracking function that will be used to check the differences in data changes. */
  @Input() trackBy!: TrackByFunction<any>;
  /** Whether the column is resizable. */
  @Input({ transform: booleanAttribute })
  columnResizable = this._defaultOptions?.columnResizable ?? false;
  /** Placeholder for the empty value (`null`, `''`, `[]`). */
  @Input() emptyValuePlaceholder = this._defaultOptions?.emptyValuePlaceholder ?? '--';

  // ===== Page =====

  /** Whether to paginate the data on front end. */
  @Input({ transform: booleanAttribute })
  pageOnFront = this._defaultOptions?.pageOnFront ?? true;
  /** Whether to show the paginator. */
  @Input({ transform: booleanAttribute })
  showPaginator = this._defaultOptions?.showPaginator ?? true;
  /** Whether the paginator is disabled. */
  @Input({ transform: booleanAttribute })
  pageDisabled = this._defaultOptions?.pageDisabled ?? false;
  /** Whether to show the first/last buttons UI to the user. */
  @Input({ transform: booleanAttribute })
  showFirstLastButtons = this._defaultOptions?.showFirstLastButtons ?? true;
  /** The zero-based page index of the displayed list of items. */
  @Input() pageIndex = this._defaultOptions?.pageIndex ?? 0;
  /** Number of items to display on a page. */
  @Input() pageSize = this._defaultOptions?.pageSize ?? 10;
  /** The set of provided page size options to display to the user. */
  @Input() pageSizeOptions = this._defaultOptions?.pageSizeOptions ?? [10, 50, 100];
  /** Whether to hide the page size selection UI from the user. */
  @Input({ transform: booleanAttribute })
  hidePageSize = this._defaultOptions?.hidePageSize ?? false;
  /** Event emitted when the paginator changes the page size or page index. */
  @Output() page = new EventEmitter<PageEvent>();
  /** The template for the pagination. */
  @Input() paginationTemplate!: TemplateRef<any>;

  // ===== Sort =====

  /** Whether to sort the data on front end. */
  @Input({ transform: booleanAttribute })
  sortOnFront = this._defaultOptions?.sortOnFront ?? true;
  /** The id of the most recently sorted MatSortable. */
  @Input() sortActive = this._defaultOptions?.sortActive ?? '';
  /** The sort direction of the currently active MatSortable. */
  @Input() sortDirection: SortDirection = this._defaultOptions?.sortDirection ?? '';
  /**
   * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
   * May be overriden by the column's `disableClear` in `sortProp`.
   */
  @Input({ transform: booleanAttribute })
  sortDisableClear = this._defaultOptions?.sortDisableClear ?? false;
  /** Whether the sort is disabled. */
  @Input({ transform: booleanAttribute })
  sortDisabled = this._defaultOptions?.sortDisabled ?? false;
  /**
   * The direction to set when an MatSortable is initially sorted.
   * May be overriden by the column's `start` in `sortProp`.
   */
  @Input() sortStart: 'asc' | 'desc' = this._defaultOptions?.sortStart ?? 'asc';
  /** Event emitted when the user changes either the active sort or sort direction. */
  @Output() sortChange = new EventEmitter<Sort>();

  // ===== Row =====

  /** Whether to use the row hover style. */
  @Input({ transform: booleanAttribute })
  rowHover = this._defaultOptions?.rowHover ?? false;
  /** Whether to use the row striped style. */
  @Input({ transform: booleanAttribute })
  rowStriped = this._defaultOptions?.rowStriped ?? false;
  /** Event emitted when the user clicks the row. */
  @Output() rowClick = new EventEmitter<any>();
  /** Event emitted when the user attempts to open a context menu. */
  @Output() rowContextMenu = new EventEmitter<any>();

  // ===== Expandable Row =====

  expansionRowStates: any[] = [];

  /** Whether the row is expandable. */
  @Input({ transform: booleanAttribute }) expandable = false;
  /** The template for the expandable row. */
  @Input() expansionTemplate!: TemplateRef<any>;
  /** Event emitted when the user toggles the expandable row. */
  @Output() expansionChange = new EventEmitter<any>();

  // ===== Row Selection =====

  rowSelection: SelectionModel<any> = new SelectionModel<any>(true, []);

  /** Whether to support multiple row/cell selection. */
  @Input({ transform: booleanAttribute })
  multiSelectable = this._defaultOptions?.multiSelectable ?? true;
  /** Whether the user can select multiple rows with click. */
  @Input({ transform: booleanAttribute })
  multiSelectionWithClick = this._defaultOptions?.multiSelectionWithClick ?? false;
  /** Whether the row is selectable. */
  @Input({ transform: booleanAttribute })
  rowSelectable = this._defaultOptions?.rowSelectable ?? false;
  /** Whether to hide the row selection checkbox. */
  @Input({ transform: booleanAttribute })
  hideRowSelectionCheckbox = this._defaultOptions?.hideRowSelectionCheckbox ?? false;
  /** Whether disable rows to be selected when clicked. */
  @Input({ transform: booleanAttribute })
  disableRowClickSelection = this._defaultOptions?.disableRowClickSelection ?? false;
  /** The formatter to disable the row selection or hide the row's checkbox. */
  @Input() rowSelectionFormatter: MtxGridRowSelectionFormatter = {};
  /** The formatter to set the row's class. */
  @Input() rowClassFormatter?: MtxGridRowClassFormatter;
  /** The selected row items. */
  @Input() rowSelected: any[] = [];
  /** Event emitted when the row is selected. */
  @Output() rowSelectedChange = new EventEmitter<any[]>();

  // ===== Cell Selection =====

  cellSelection: any[] = [];

  /** Whether the cell is selectable. */
  @Input({ transform: booleanAttribute })
  cellSelectable = this._defaultOptions?.cellSelectable ?? true;
  /** Event emitted when the cell is selected. */
  @Output() cellSelectedChange = new EventEmitter<any[]>();

  private _selectedCell?: MtxGridSelectableCell;

  // ===== Toolbar =====

  /** Whether to show the toolbar. */
  @Input({ transform: booleanAttribute })
  showToolbar = this._defaultOptions?.showToolbar ?? false;
  /** The text of the toolbar's title. */
  @Input() toolbarTitle = this._defaultOptions?.toolbarTitle ?? '';
  /** The template for the toolbar. */
  @Input() toolbarTemplate!: TemplateRef<any>;

  // ===== Column Menu =====

  /** Whether the column is hideable. */
  @Input({ transform: booleanAttribute })
  columnHideable = this._defaultOptions?.columnHideable ?? true;
  /** Hide or show when the column's checkbox is checked. */
  @Input() columnHideableChecked: 'show' | 'hide' =
    this._defaultOptions?.columnHideableChecked ?? 'show';
  /** Whether the column is sortable. */
  @Input({ transform: booleanAttribute })
  columnSortable = this._defaultOptions?.columnSortable ?? true;
  /** Whether the column is pinnable. */
  @Input({ transform: booleanAttribute })
  columnPinnable = this._defaultOptions?.columnPinnable ?? true;
  /** Event emitted when the column is hided or is sorted. */
  @Output() columnChange = new EventEmitter<MtxGridColumn[]>();
  /** The options for the column pin list. */
  @Input() columnPinOptions: MtxGridColumnPinOption[] =
    this._defaultOptions?.columnPinOptions ?? [];

  /** Whether to show the column menu button. */
  @Input({ transform: booleanAttribute })
  showColumnMenuButton = this._defaultOptions?.showColumnMenuButton ?? true;
  /** The text for the column menu button. */
  @Input() columnMenuButtonText = this._defaultOptions?.columnMenuButtonText ?? '';
  /** The type for the column menu button. */
  @Input() columnMenuButtonType: MtxGridButtonType =
    this._defaultOptions?.columnMenuButtonType ?? 'stroked';
  /** The color for the column menu button. */
  @Input() columnMenuButtonColor: ThemePalette = this._defaultOptions?.columnMenuButtonColor;
  /** The class for the column menu button. */
  @Input() columnMenuButtonClass = this._defaultOptions?.columnMenuButtonClass ?? '';
  /** The icon for the column menu button. */
  @Input() columnMenuButtonIcon = this._defaultOptions?.columnMenuButtonIcon ?? '';

  /** Whether to show the column-menu's header. */
  @Input({ transform: booleanAttribute })
  showColumnMenuHeader = this._defaultOptions?.showColumnMenuHeader ?? false;
  /** The text for the column-menu's header. */
  @Input() columnMenuHeaderText = this._defaultOptions?.columnMenuHeaderText ?? 'Columns Header';
  /** The template for the column-menu's header. */
  @Input() columnMenuHeaderTemplate!: TemplateRef<any>;
  /** Whether to show the the column-menu's footer. */
  @Input({ transform: booleanAttribute })
  showColumnMenuFooter = this._defaultOptions?.showColumnMenuFooter ?? false;
  /** The text for the column-menu's footer. */
  @Input() columnMenuFooterText = this._defaultOptions?.columnMenuFooterText ?? 'Columns Footer';
  /** The template for the column-menu's footer. */
  @Input() columnMenuFooterTemplate!: TemplateRef<any>;

  // ===== No Result =====

  /** The displayed text for the empty data. */
  @Input() noResultText = this._defaultOptions?.noResultText ?? 'No records found';
  /** The template for the empty data. */
  @Input() noResultTemplate!: TemplateRef<any>;

  get _hasNoResult() {
    return (!this.dataSource.data || this.dataSource.data.length === 0) && !this.loading;
  }

  // ===== Cell Templates =====

  /** The header's cell template for the grid. */
  @Input() headerTemplate!: TemplateRef<any> | MtxGridCellTemplate;
  /** The header's cell template for the grid exclude sort. */
  @Input() headerExtraTemplate!: TemplateRef<any> | MtxGridCellTemplate;
  /** The cell template for the grid. */
  @Input() cellTemplate!: TemplateRef<any> | MtxGridCellTemplate;

  // ===== Row Templates =====

  /** Whether to use custom row template. If true, you should define a matRowDef. */
  @Input({ transform: booleanAttribute }) useContentRowTemplate = false;
  // TODO: It can't use together with `useContentRowTemplate`
  @Input({ transform: booleanAttribute }) useContentHeaderRowTemplate = false;
  // TODO: It's not working
  @Input({ transform: booleanAttribute }) useContentFooterRowTemplate = false;

  // ===== Summary =====

  /** Whether to show the summary. */
  @Input({ transform: booleanAttribute }) showSummary = false;
  /** The template for the summary. */
  @Input() summaryTemplate!: TemplateRef<any> | MtxGridCellTemplate;

  // TODO: Summary display conditions
  get _whetherShowSummary() {
    return this.showSummary;
  }

  // ===== Side Bar =====

  /** Whether to show the sidebar. */
  @Input({ transform: booleanAttribute }) showSidebar = false;
  /** The template for the sidebar. */
  @Input() sidebarTemplate!: TemplateRef<any>;

  // ===== Status Bar =====

  /** Whether to show the status bar. */
  @Input({ transform: booleanAttribute }) showStatusbar = false;
  /** The template for the status bar. */
  @Input() statusbarTemplate!: TemplateRef<any>;

  /** The changed record of row data. */
  rowChangeRecord?: KeyValueChangeRecord<string, any>;

  constructor(
    private _utils: MtxGridUtils,
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional()
    @Inject(MTX_GRID_DEFAULT_OPTIONS)
    private _defaultOptions?: MtxGridDefaultOptions
  ) {}

  detectChanges() {
    this._changeDetectorRef.detectChanges();
  }

  _getColData(data: any[], colDef: MtxGridColumn) {
    return this._utils.getColData(data, colDef);
  }

  _isColumnHide(item: MtxGridColumn) {
    return item.hide !== undefined ? item.hide : item.show !== undefined ? !item.show : false;
  }

  // Waiting for async data
  ngOnChanges(changes: SimpleChanges) {
    this._countPinnedPosition();

    this.displayedColumns = this.columns
      .filter(item => !this._isColumnHide(item))
      .map(item => item.field);

    if (this.showColumnMenuButton) {
      this.columns.forEach(item => {
        item.hide = this._isColumnHide(item);
        item.show = !item.hide;
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

  _getIndex(index: number | undefined, dataIndex: number) {
    return index === undefined ? dataIndex : index;
  }

  _onSortChange(sort: Sort) {
    this.sortChange.emit(sort);
  }

  _onRowDataChange(record: KeyValueChangeRecord<string, any>) {
    this.rowChangeRecord = record;
    this._changeDetectorRef.markForCheck();
  }

  /** Expansion change event */
  _onExpansionChange(
    expansionRef: MtxGridExpansionToggle,
    rowData: Record<string, any>,
    column: MtxGridColumn,
    index: number
  ) {
    this.expansionChange.emit({ expanded: expansionRef.expanded, data: rowData, index, column });
  }

  /** Cell select event */
  _selectCell(
    cellRef: MtxGridSelectableCell,
    rowData: Record<string, any>,
    colDef: MtxGridColumn
  ): void {
    // If not the same cell
    if (this._selectedCell !== cellRef) {
      const colValue = this._utils.getCellValue(rowData, colDef);
      this.cellSelection = []; // reset
      this.cellSelection.push({ cellData: colValue, rowData, colDef });

      this.cellSelectedChange.emit(this.cellSelection);

      if (this._selectedCell) {
        this._selectedCell.deselect(); // the selectedCell will be undefined
      }
    }

    this._selectedCell = cellRef.selected ? cellRef : undefined;
  }

  /** Row select event */
  _selectRow(event: MouseEvent, rowData: Record<string, any>, index: number) {
    if (
      this.rowSelectable &&
      !this.rowSelectionFormatter.disabled?.(rowData, index) &&
      !this.rowSelectionFormatter.hideCheckbox?.(rowData, index) &&
      !this.disableRowClickSelection
    ) {
      // metaKey -> command key
      if (!this.multiSelectionWithClick && !event.ctrlKey && !event.metaKey) {
        this.rowSelection.clear();
      }

      this._toggleNormalCheckbox(rowData);
    }

    this.rowClick.emit({ event, rowData, index });
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
    this.rowSelectedChange.emit(this.rowSelection.selected);
  }

  /** Select normal row */
  _toggleNormalCheckbox(row: Record<string, any>) {
    this.rowSelection.toggle(row);
    this.rowSelectedChange.emit(this.rowSelection.selected);
  }

  /** Column change event */
  _onColumnChange(columns: MtxGridColumn[]) {
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

  _contextmenu(event: MouseEvent, rowData: Record<string, any>, index: number) {
    this.rowContextMenu.emit({ event, rowData, index });
  }
}
