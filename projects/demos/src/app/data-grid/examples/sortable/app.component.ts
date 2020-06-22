import { Component } from '@angular/core';
import { EXAMPLE_DATA } from '../../data';
import { MtxGridColumn } from '@ng-matero/extensions';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name', sortable: true },
    { header: 'Weight', field: 'weight', sortable: true },
    { header: 'Gender', field: 'gender', sortable: true },
    { header: 'Mobile', field: 'mobile', sortable: true },
    { header: 'City', field: 'city', sortable: true },
  ];

  list = EXAMPLE_DATA;

  log(e: any) {
    console.log(e);
  }
}
