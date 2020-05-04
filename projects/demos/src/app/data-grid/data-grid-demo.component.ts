import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/data-grid';

import { ELEMENT_DATA } from './data';

const TAG = {
  true: { text: 'Yes', color: 'red-100' },
  false: { text: 'No', color: 'green-100' },
};

@Component({
  selector: 'app-data-grid-demo',
  templateUrl: './data-grid-demo.component.html',
  styleUrls: ['./data-grid-demo.component.scss'],
})
export class DataGridDemoComponent implements OnInit {
  @ViewChild('statusTpl', { static: true }) statusTpl: TemplateRef<any>;

  list = ELEMENT_DATA;
  isLoading = false;

  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
  ];

  columnsSortable: MtxGridColumn[] = [
    { header: 'Name', field: 'name', sortable: true },
    { header: 'Weight', field: 'weight', sortable: true },
    { header: 'Gender', field: 'gender', sortable: true },
    { header: 'Mobile', field: 'mobile', sortable: true },
    { header: 'City', field: 'city', sortable: true },
  ];

  columnsExpandable: MtxGridColumn[] = [
    { header: 'Name', field: 'name', showExpand: true },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
  ];

  columnsPinnable: MtxGridColumn[] = [
    { header: 'Position', field: 'position', width: '200px' },
    { header: 'Name', field: 'name', width: '200px', pinned: 'left' },
    { header: 'tags', field: 'tag.0.value', width: '200px' },
    { header: 'Weight', field: 'weight', width: '200px', pinned: 'left' },
    { header: 'Symbol', field: 'symbol', width: '200px' },
    { header: 'Gender', field: 'gender', width: '200px' },
    { header: 'Mobile', field: 'mobile', width: '200px' },
    { header: 'Tele', field: 'tele', width: '200px' },
    { header: 'City', field: 'city', width: '200px' },
    { header: 'Address', field: 'address', width: '200px' },
    { header: 'Date', field: 'date', width: '200px' },
    { header: 'Website', field: 'website', width: '200px' },
    { header: 'Company', field: 'company', width: '200px' },
    { header: 'Email', field: 'email', width: '200px', pinned: 'right' },
    { header: 'Status', field: 'status', type: 'boolean', width: '200px' },
  ];

  columnsWithButtons: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
    {
      header: 'Option',
      field: 'option',
      width: '120px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          text: 'edit',
          icon: 'edit',
          tooltip: 'Edit',
          click: () => { alert('edit'); },
        },
        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Delete',
          color: 'warn',
          pop: true,
          popTitle: 'Confirm delete?',
          click: () => { alert('delete'); },
        },
      ],
    }
  ];

  columnsWithFormatting: MtxGridColumn[] = [
    { header: 'Name', field: 'name', formatter: (data: any) => `<span class="label">${data.name}</span>` },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
  ];

  columnsWithCustomCell: MtxGridColumn[] = [];

  multiSelectable = true;
  rowSelectable = true;
  hideRowSelectionCheckbox = false;
  columnHideable = true;
  columnMovable = true;
  rowHover = true;
  rowStriped = false;

  trackByName(index: number, item: any) {
    return item.name;
  }

  constructor() { }

  ngOnInit() {
    this.columnsWithCustomCell = [
      { header: 'Name', field: 'name' },
      { header: 'Weight', field: 'weight' },
      { header: 'Gender', field: 'gender' },
      { header: 'Mobile', field: 'mobile' },
      { header: 'City', field: 'city' },
      { header: 'Status', field: 'status', cellTemplate: this.statusTpl },
    ];
  }

  log(e: any) {
    console.log(e);
  }

}
