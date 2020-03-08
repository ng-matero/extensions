import { Component, OnInit } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/data-grid';

import { ELEMENT_DATA } from './data';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material';

/**
 * 序列化 JSON，同时转义，删除两边空格
 */
export function serialize(obj = {}) {
  const arr = [];
  for (const k of Object.keys(obj)) {
    arr.push(
      `${k}=${encodeURIComponent(
        typeof obj[k] === 'string'
          ? String.prototype.trim.call(obj[k])
          : obj[k] === null
            ? ''
            : obj[k]
      )}`
    );
  }
  return arr.join('&');
}

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
  columns: MtxGridColumn[] = [
    { title: 'Select', index: 'select', type: 'checkbox', fixed: 'left', width: '30px' },
    { title: 'Position', index: 'position', width: 'auto', sort: true },
    { title: 'Name', index: 'name', width: 'auto', sort: true },
    { title: 'tags', index: 'tag.0.value', width: 'auto' },
    {
      title: 'Weight', index: 'weight', width: 'auto', type: 'format',
      format: (data: any) => data.weight * 100,
    },
    { title: 'Symbol', index: 'symbol', width: 'auto' },
    { title: 'Gender', index: 'gender', width: 'auto' },
    { title: 'Mobile', index: 'mobile', width: 'auto' },
    { title: 'Tele', index: 'tele', width: 'auto' },
    { title: 'City', index: 'city', width: 'auto' },
    { title: 'Address', index: 'address', width: '200px' },
    { title: 'Date', index: 'date', width: 'auto' },
    { title: 'Website', index: 'website', width: 'auto' },
    { title: 'Company', index: 'company', width: 'auto' },
    { title: 'Email', index: 'email', width: 'auto' },
  ];
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

  ngOnInit() { }

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
