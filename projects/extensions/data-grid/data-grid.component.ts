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
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MtxGridColumn } from './data-grid.interface';

@Component({
  selector: 'mtx-grid',
  exportAs: 'mtxGrid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  host: {
    class: 'mtx-data-grid',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxDataGridComponent implements OnInit, OnChanges {
  @Input() columns: MtxGridColumn[] = [];

  @Input() data = [];

  @Input() sum = [];

  @Input() length = 0;

  @Input() loading = true;

  /** Whether to show tooltip on columns */
  @Input() tooltip = true;

  /** Whether to page on the front end */
  @Input() frontPage = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() showPager = true;

  @Input() pageDisabled = false;

  @Input() showFirstLastButtons = true;

  @Input() pageIndex = 0;

  @Input() pageSize = 10;

  @Input() pageSizeOptions = [10, 50, 100];

  @Input() hidePageSize = false;

  @Output() page = new EventEmitter<PageEvent>();

  @Output() sortChange = new EventEmitter<Sort>();

  @Output() selectionChange = new EventEmitter<any[]>();

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.displayedColumns = this.columns.map(item => item.index);
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.selection = new SelectionModel<any>(true, []);
    if (this.frontPage) {
      this.dataSource.paginator = this.paginator;
    }
  }

  handleSortChange(sort: Sort) {
    this.sortChange.emit(sort);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
    this.selectionChange.emit(this.selection.selected);
  }

  /** Select single row */
  singleToggle(row: any) {
    this.selection.toggle(row);
    this.selectionChange.emit(this.selection.selected);
  }
}
