import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  MtxGridColumn,
  MtxGridComponent,
  MtxGridRowClassFormatter,
  MtxGridRowSelectionFormatter,
} from '@ng-matero/extensions/data-grid';
import { EXAMPLE_DATA, EXAMPLE_DATA2 } from './data';
import { TranslateService } from '@ngx-translate/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'dev-data-grid-demo',
  templateUrl: './data-grid-demo.component.html',
  styleUrls: ['./data-grid-demo.component.scss'],
})
export class DataGridDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('grid', { static: true }) grid: MtxGridComponent;

  multiSelectable = true;
  hideRowSelectionCheckbox = false;
  rowSelectable = true;
  rowSelected = EXAMPLE_DATA.slice(2, 3);
  rowSelectionFormatter: MtxGridRowSelectionFormatter = {
    disabled: (data, index) => data.name === 'Boron',
    hideCheckbox: (data, index) => index === 10,
  };
  rowClassFormatter: MtxGridRowClassFormatter = {
    success: (data, index) => data.name === 'Boron',
    danger: (data, index) => index === 1,
  };
  expandable = false;
  showSummary = false;
  columnResizable = false;
  sortOnFront = true;
  pageOnFront = true;
  rowHover = false;
  rowStriped = false;
  showSidebar = false;

  list = EXAMPLE_DATA;
  isNewList = false;

  list2 = [];

  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('name'),
      field: 'name',
      showExpand: false,
      minWidth: 150,
      sortable: true,
    },
    {
      header: 'Avatar',
      field: 'avatar',
      type: 'image',
    },
    {
      header: this.translate.stream('weight'),
      field: 'weight',
      width: '200px',
      maxWidth: 300,
      resizable: true,
      sortable: true,
    },
    {
      header: this.translate.stream('gender'),
      field: 'gender',
      minWidth: 150,
      class: 'warning',
    },
    {
      header: this.translate.stream('mobile'),
      field: 'mobile',
      width: '150px',
      resizable: false,
    },
    {
      header: this.translate.stream('city'),
      field: 'city',
      minWidth: 150,
    },
    {
      header: this.translate.stream('operation'),
      field: 'operation',
      minWidth: 150,
      maxWidth: 300,
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'basic',
          text: this.translate.stream('delete'),
          icon: 'delete',
          tooltip: this.translate.stream('delete'),
          color: 'warn',
          pop: true,
          class: 'custom',
          popTitle: this.translate.stream('confirm_delete'),
          popCloseText: this.translate.stream('close'),
          popOkText: this.translate.stream('ok'),
          click: () => {
            alert('delete');
          },
        },
      ],
    },
  ];

  columns2: MtxGridColumn[] = [
    { header: 'Position', field: 'position', minWidth: 200 },
    { header: 'Name', field: 'name', pinned: 'left' },
    { header: 'tags', field: 'tag.0.value', width: '100px' },
    { header: 'Weight', field: 'weight', pinned: 'left' },
    { header: 'Symbol', field: 'symbol', width: '100px' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'Tele', field: 'tele' },
    { header: 'City', field: 'city' },
    { header: 'Address', field: 'address' },
    { header: 'Date', field: 'date' },
    { header: 'Website', field: 'website' },
    { header: 'Company', field: 'company' },
    { header: 'Email', field: 'email', pinned: 'right' },
    { header: 'Status', field: 'status', type: 'boolean' },
  ];

  // mat-table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = EXAMPLE_DATA;

  constructor(public translate: TranslateService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.grid.rowSelection.changed.subscribe(res => {
      console.log('rowSelection:', res.source.selected);
    });

    this.list.forEach(item => {
      this.list2.push(item, item, item, item, item, item, item, item);
    });
    this.list2 = this.list2.filter(_ => true);
  }

  trackByName(index: number, item: any) {
    return item.name;
  }

  toggleExpand() {
    this.columns[0].showExpand = this.expandable;
    this.columns = this.columns.filter(_ => true);
  }

  updateCell() {
    this.list = this.list.map(item => {
      item.weight = Math.round(Math.random() * 1000) / 100;
      return item;
    });
  }

  updateList() {
    this.isNewList = !this.isNewList;
    this.list = this.isNewList ? EXAMPLE_DATA2 : EXAMPLE_DATA;
  }

  updateEmptyList() {
    this.list = this.list.length > 0 ? [] : EXAMPLE_DATA;
  }

  closeMenu() {
    this.grid.columnMenu.menuTrigger.closeMenu();
  }

  toggleSummary(e: MatCheckboxChange) {
    if (e.checked) {
      this.list = this.list.filter(_ => true);
    }
  }

  toggleExpansionRow(e: any) {
    this.grid.toggleExpansion(e.index);
  }

  select2ndData() {
    this.grid.rowSelection.select(this.list[1]);
    this.grid.detectChanges();
  }

  log(e: any) {
    console.log(e);
  }
}
