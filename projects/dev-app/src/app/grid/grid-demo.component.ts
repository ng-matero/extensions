import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MtxGridColumn, MtxGridColumnPinOption, MtxGridComponent, MtxGridRowClassFormatter, MtxGridRowSelectionFormatter } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA, EXAMPLE_DATA2 } from './data';
import { TranslateService } from '@ngx-translate/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'dev-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.scss'],
})
export class GridDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('grid', { static: true }) grid!: MtxGridComponent;
  @ViewChild('grid2', { static: true }) grid2!: MtxGridComponent;

  multiSelectable = true;
  multiSelectionWithClick = false;
  hideRowSelectionCheckbox = false;
  rowSelectable = true;
  // rowSelected = EXAMPLE_DATA.slice(2, 3);
  /*rowSelectionFormatter: MtxGridRowSelectionFormatter = {
    disabled: (data, index) => data.name === 'Boron',
    hideCheckbox: (data, index) => index === 10,
  };
  rowClassFormatter: MtxGridRowClassFormatter = {
    success: (data, index) => data.name === 'Boron',
    danger: (data, index) => index === 1,
  };*/
  expandable = false;
  showSummary = false;
  columnResizable = false;
  sortOnFront = true;
  pageOnFront = true;
  rowHover = false;
  rowStriped = false;
  showSidebar = false;
  showStatusbar = false;
  showPaginator = true;
  loading = false;

  list = EXAMPLE_DATA;
  ds: Observable<any[]>;
  isNewList = false;
  rowGroupColumns: MtxGridColumn[] = [
    {
      header: 'Weight',
      field: 'weight',
      show: true,
    },
    {
      header: 'Gender',
      field: 'gender',
      show: true,
    },
  ];
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
      // class: 'warning',
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

  columnPinOptions: MtxGridColumnPinOption[] = [
    {
      label: this.translate.stream('pin_left'),
      value: 'left',
    },
    {
      label: this.translate.stream('pin_right'),
      value: 'right',
    },
    {
      label: this.translate.stream('no_pin'),
      value: null,
    },
  ];

  list2: any[] = [];
  columns2: MtxGridColumn[] = [
    {
      header: 'Position',
      field: 'position',
      minWidth: 200,
    },
    {
      header: 'Name',
      field: 'name',
      pinned: 'left',
    },
    {
      header: 'tags',
      field: 'tag.0.value',
      width: '100px',
    },
    {
      header: 'Weight',
      field: 'weight',
      pinned: 'left',
    },
    {
      header: 'Symbol',
      field: 'symbol',
      width: '100px',
    },
    {
      header: 'Gender',
      field: 'gender',
    },
    {
      header: 'Mobile',
      field: 'mobile',
    },
    {
      header: 'Tele',
      field: 'tele',
    },
    {
      header: 'City',
      field: 'city',
    },
    {
      header: 'Address',
      field: 'address',
    },
    {
      header: 'Date',
      field: 'date',
    },
    {
      header: 'Website',
      field: 'website',
    },
    {
      header: 'Company',
      field: 'company',
    },
    {
      header: 'Email',
      field: 'email',
      pinned: 'right',
    },
    {
      header: 'Status',
      field: 'status',
      type: 'boolean',
    },
  ];

  columns3: MtxGridColumn[] = [
    {
      header: 'Name',
      field: 'name',
      formatter: (data: any) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
    },
    {
      header: 'Owner',
      field: 'owner.login',
    },
    {
      header: 'Owner Avatar',
      field: 'owner.avatar_url',
      type: 'image',
    },
    {
      header: 'Description',
      field: 'description',
      width: '300px',
    },
    {
      header: 'Stars',
      field: 'stargazers_count',
    },
    {
      header: 'Forks',
      field: 'forks_count',
    },
    {
      header: 'Score',
      field: 'score',
    },
    {
      header: 'Issues',
      field: 'open_issues',
    },
    {
      header: 'Language',
      field: 'language',
    },
    {
      header: 'License',
      field: 'license.name',
    },
    {
      header: 'Home Page',
      field: 'homepage',
      type: 'link',
    },
    {
      header: 'Is forked',
      field: 'fork',
      type: 'boolean',
    },
    {
      header: 'Archived',
      field: 'archived',
      type: 'tag',
      tag: {
        true: {
          text: 'Yes',
          color: 'red-100',
        },
        false: {
          text: 'No',
          color: 'green-100',
        },
      },
    },
    {
      header: 'Created Date',
      field: 'created_at',
    },
    {
      header: 'Updated Date',
      field: 'updated_at',
    },
  ];
  list3 = [];
  total3 = 0;
  rowSelected3 = [];
  isLoading3 = true;
  query = {
    q: 'user:nzbin',
    page: 0,
    per_page: 10,
  };

  get params() {
    const p = Object.assign({}, this.query);
    p.page += 1;
    return p;
  }

  // mat-table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = EXAMPLE_DATA;

  showColumns: MtxGridColumn[] = [];

  constructor(public translate: TranslateService, private http: HttpClient) {
    this.ds = from(EXAMPLE_DATA);
  }

  ngOnInit() {
    this.getRemoteData();
    this.rowGroupChanged(this.rowGroupColumns);
  }

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

  getRemoteData() {
    this.isLoading3 = true;
    this.http
      .get('https://api.github.com/search/repositories', { params: this.params as any })
      .subscribe(
        (res: any) => {
          this.list3 = res.items;
          this.total3 = res.total_count;
          this.isLoading3 = false;
        },
        () => {
          this.isLoading3 = false;
        },
        () => {
          this.isLoading3 = false;
        }
      );
  }

  getNextPage(e: PageEvent) {
    this.query.page = e.pageIndex;
    this.query.per_page = e.pageSize;
    this.getRemoteData();
  }

  scrollTop(value?: number) {
    if (value == null) {
      return console.log(this.grid2.scrollTop());
    }
    this.grid2.scrollTop(value);
  }

  scrollLeft(value?: number) {
    if (value == null) {
      return console.log(this.grid2.scrollLeft());
    }
    this.grid2.scrollLeft(value);
  }

  log(e: any) {
    console.log(e);
  }

  getColumnKeys(columns: MtxGridColumn[]): string[] {
    return columns.map(c => c.field);
  }

  rowGroupChanged(columns: MtxGridColumn[]) {
    this.showColumns = columns.filter((c: MtxGridColumn) => c.show);
  }
}
