import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { EXAMPLE_DATA } from '../../data';
import { MtxGridColumn } from '@ng-matero/extensions';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('statusTpl', { static: true }) statusTpl: TemplateRef<any>;

  columns: MtxGridColumn[] = [];

  list = EXAMPLE_DATA;

  ngOnInit() {
    this.columns = [
      { header: 'Name', field: 'name' },
      { header: 'Weight', field: 'weight' },
      { header: 'Gender', field: 'gender' },
      { header: 'Mobile', field: 'mobile' },
      { header: 'City', field: 'city' },
      { header: 'Status', field: 'status', cellTemplate: this.statusTpl },
    ];
  }
}
