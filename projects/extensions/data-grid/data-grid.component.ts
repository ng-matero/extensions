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
import { MatTableDataSource, MatPaginator, Sort, PageEvent } from '@angular/material';

import { GridColumn } from './data-grid.interface';

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
  @Input() columns: GridColumn[] = [];

  @Input() data = [];

  @Input() sum = [];

  @Input() length = 0;

  @Input() loading = true;

  @Input() tooltip = true;

  /** If to page on the front end */
  @Input() front = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() showPager = true;

  @Input() pageDisabled = false;

  @Input() showFirstLastButtons = true;

  @Input() pageIndex = 0;

  @Input() pageSize = 10;

  @Input() pageSizeOptions = [10, 50, 100];

  @Input() hidePageSize = false;

  @Output() page = new EventEmitter<PageEvent>();

  @Output() changeSort = new EventEmitter<Sort>(); // sort

  @Output() changeSelect = new EventEmitter<any[]>(); // checkbox

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.displayedColumns = this.columns.map(item => item.index);
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.selection = new SelectionModel<any>(true, []);
    if (this.front) {
      this.dataSource.paginator = this.paginator;
    }
  }

  handleSortChange(sort: Sort) {
    this.changeSort.emit(sort);
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
    this.changeSelect.emit(this.selection.selected);
  }

  /** Select single row */
  singleToggle(row: any) {
    this.selection.toggle(row);
    this.changeSelect.emit(this.selection.selected);
  }
}
