import { Component } from '@angular/core';
import { EXAMPLE_DATA } from '../../data';
import { MtxGridColumn } from '@ng-matero/extensions';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name', summary: 'Total' },
    { header: 'Weight', field: 'weight', summary: data => Math.max(...data) },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
    { header: 'Cost', field: 'cost', type: 'currency' },
  ];

  list = EXAMPLE_DATA;

  getTotalCost(data: any) {
    return data.reduce((acc: any, value: any) => acc + value, 0);
  }
}
