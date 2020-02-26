import { Component, OnInit } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/data-grid';

import { ELEMENT_DATA } from './data';

@Component({
  selector: 'app-data-grid-demo',
  templateUrl: './data-grid-demo.component.html',
  styleUrls: ['./data-grid-demo.component.scss'],
})
export class DataGridDemoComponent implements OnInit {
  columns: MtxGridColumn[] = [
    {
      title: 'Select',
      index: 'select',
      type: 'checkbox',
      fixed: 'left',
      width: '30px',
    },
    {
      title: 'Position',
      index: 'position',
      width: 'auto',
      sort: true,
    },
    {
      title: 'Name',
      index: 'name',
      width: 'auto',
      sort: true,
    },
    {
      title: 'tags',
      index: 'tag.0.value',
      width: 'auto',
    },
    {
      title: 'Weight',
      index: 'weight',
      width: 'auto',
      type: 'format',
      format: (data: any) => data.weight * 100,
    },
    {
      title: 'Symbol',
      index: 'symbol',
      width: 'auto',
    },
    {
      title: 'Gender',
      index: 'gender',
      width: 'auto',
    },
    {
      title: 'Mobile',
      index: 'mobile',
      width: 'auto',
    },
    {
      title: 'Tele',
      index: 'tele',
      width: 'auto',
    },
    {
      title: 'City',
      index: 'city',
      width: 'auto',
    },
    {
      title: 'Address',
      index: 'address',
      width: '200px',
    },
    {
      title: 'Date',
      index: 'date',
      width: 'auto',
    },
    {
      title: 'Website',
      index: 'website',
      width: 'auto',
    },
    {
      title: 'Company',
      index: 'company',
      width: 'auto',
    },
    {
      title: 'Email',
      index: 'email',
      width: 'auto',
    },
  ];
  list = ELEMENT_DATA;
  isLoading = false;

  constructor() {}

  ngOnInit() {}

  changePage(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  changeSelection(e: any) {
    console.log(e);
  }
}
