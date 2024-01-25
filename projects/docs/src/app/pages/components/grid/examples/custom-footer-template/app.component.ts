import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MtxGrid, MtxGridColumn } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MtxGrid, CurrencyPipe],
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
