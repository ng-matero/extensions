import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {
  MtxGrid,
  MtxGridColumn,
  MtxGridColumnPinOption,
  MtxGridModule,
  MtxGridRowClassFormatter,
  MtxGridRowSelectionFormatter,
} from '@dcnx/mat-extensions/grid';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription, finalize, fromEvent, merge } from 'rxjs';
import { EXAMPLE_DATA, EXAMPLE_DATA2 } from './data';

@Component({
  selector: 'dev-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrl: './grid-demo.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MtxGridModule,
  ],
})
export class GridDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('grid', { static: true }) grid!: MtxGrid;
  @ViewChild('grid2', { static: true }) grid2!: MtxGrid;

  multiSelectable = true;
  multiSelectionWithClick = false;
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
  showStatusbar = false;
  showPaginator = true;
  loading = false;

  list = EXAMPLE_DATA;
  isNewList = false;
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
      class: data => {
        return data?.weight > 10 ? 'warning' : '';
      },
    },
    {
      header: this.translate.stream('gender'),
      field: 'gender',
      minWidth: 150,
      class: 'info',
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
      class: 'text-center',
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
          pop: {
            title: this.translate.stream('confirm_delete'),
            okText: this.translate.stream('ok'),
            closeText: this.translate.stream('close'),
          },
          class: 'custom',
          disabled: data => data.weight > 10,
          click: () => alert('delete'),
        },
      ],
    },
  ];

  columnPinOptions: MtxGridColumnPinOption[] = [
    { label: this.translate.stream('pin_left'), value: 'left' },
    { label: this.translate.stream('pin_right'), value: 'right' },
    { label: this.translate.stream('no_pin'), value: null },
  ];

  list2: any[] = [];
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

  list3 = [];
  columns3: MtxGridColumn[] = [
    {
      header: 'Name',
      field: 'name',
      formatter: (data: any) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
    },
    { header: 'Owner', field: 'owner.login' },
    { header: 'Owner Avatar', field: 'owner.avatar_url', type: 'image' },
    { header: 'Description', field: 'description', width: '300px' },
    { header: 'Stars', field: 'stargazers_count' },
    { header: 'Forks', field: 'forks_count' },
    { header: 'Score', field: 'score' },
    { header: 'Issues', field: 'open_issues' },
    { header: 'Language', field: 'language' },
    { header: 'License', field: 'license.name' },
    { header: 'Home Page', field: 'homepage', type: 'link' },
    { header: 'Is forked', field: 'fork', type: 'boolean' },
    {
      header: 'Archived',
      field: 'archived',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'red-100' },
        false: { text: 'No', color: 'green-100' },
      },
    },
    { header: 'Created Date', field: 'created_at' },
    { header: 'Updated Date', field: 'updated_at' },
  ];
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

  constructor(
    private translate: TranslateService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getRemoteData();
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
      item.weight = Math.round(Math.random() * 2000) / 100;
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
      .get('https://api.github.com/search/repositories', { params: this.params })
      .pipe(finalize(() => (this.isLoading3 = false)))
      .subscribe((res: any) => {
        this.list3 = res.items;
        this.total3 = res.total_count;
      });
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

  // ========== Context Menu ==========

  @ViewChild(MatMenuTrigger) contextMenu!: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  private closingMenuSubscription!: Subscription;

  onContextMenu(e: any) {
    const { event, rowData, index } = e;
    event.preventDefault();

    this.contextMenu.closeMenu();

    const timer = this.contextMenu.menuOpen ? 150 : 0;
    setTimeout(() => this.contextMenu.openMenu(), timer);

    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { rowData, index };
    this.contextMenu.menu?.focusFirstItem('mouse');

    this.closingMenuSubscription = merge(
      fromEvent(document, 'click') as Observable<MouseEvent>,
      fromEvent(document, 'touchend') as Observable<MouseEvent>
    ).subscribe(_ => {
      this.contextMenu.closeMenu();
      this.closingMenuSubscription.unsubscribe();
    });
  }
}
