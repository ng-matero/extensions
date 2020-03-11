import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { MtxGridColumn } from '@ng-matero/extensions/data-grid';

import { ELEMENT_DATA } from './data';
import { serialize } from './utils';

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
  @ViewChild('status', { static: true }) status: TemplateRef<any>;

  columns: MtxGridColumn[] = [];
  list = ELEMENT_DATA;
  isLoading = false;

  /** Backend Demo */
  query = {
    q: 'user:nzbin',
    sort: 'stars',
    order: 'desc',
    page: 0,
    per_page: 5,
  };

  columns2: MtxGridColumn[] = [
    {
      title: 'Name', index: 'name', type: 'format',
      format: (data: any) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
    },
    { title: 'Owner', index: 'owner.login' },
    { title: 'Owner Avatar', index: 'owner.avatar_url', type: 'img' },
    { title: 'Description', index: 'description', width: '300px' },
    { title: 'stars', index: 'stargazers_count' },
    { title: 'forks', index: 'forks_count' },
    { title: 'Score', index: 'score' },
    { title: 'Issues', index: 'open_issues' },
    { title: 'Language', index: 'language' },
    { title: 'License', index: 'license.name' },
    { title: 'Home Page', index: 'homepage', type: 'link' },
    {
      title: 'Is forked', index: 'fork', type: 'format',
      format: (data: any) => JSON.stringify(data.fork),
    },
    { title: 'Archived', index: 'archived', type: 'tag', tag: TAG },
    { title: 'Created Date', index: 'created_at' },
    { title: 'Updated Date', index: 'updated_at' },
  ];
  list2 = [];
  total2 = 0;
  isLoading2 = false;

  get params() {
    const p = Object.assign({}, this.query);
    p.page += 1;
    return p;
  }

  constructor(private http: HttpClient) {
    this.getData();
  }

  ngOnInit() {
    this.columns = [
      { title: 'Select', index: 'select', type: 'checkbox', fixed: 'left', width: '30px' },
      { title: 'Position', index: 'position', sort: true },
      { title: 'Name', index: 'name', sort: true },
      { title: 'tags', index: 'tag.0.value' },
      {
        title: 'Weight', index: 'weight', type: 'format',
        format: (data: any) => data.weight * 100,
      },
      { title: 'Symbol', index: 'symbol' },
      { title: 'Gender', index: 'gender' },
      { title: 'Mobile', index: 'mobile' },
      { title: 'Tele', index: 'tele' },
      { title: 'City', index: 'city' },
      { title: 'Address', index: 'address', width: '200px' },
      { title: 'Date', index: 'date' },
      { title: 'Website', index: 'website' },
      { title: 'Company', index: 'company' },
      { title: 'Email', index: 'email' },
      { title: 'Status', index: 'status', type: 'template', template: this.status },
      {
        title: 'Option',
        index: 'option',
        width: '80px',
        fixed: 'right',
        right: '0px',
        type: 'button',
        checked: true,
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
  }

  getNextPage(e: PageEvent) {
    this.query.page = e.pageIndex;
    this.query.per_page = e.pageSize;
    this.getData();
  }

  getData() {
    this.isLoading2 = true;
    this.http.get('https://api.github.com/search/repositories?' + serialize(this.params))
      .subscribe((res: any) => {
        this.list2 = res.items;
        this.total2 = res.total_count;
        this.isLoading2 = false;
      });
  }

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
