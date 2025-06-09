import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MtxGridColumn, MtxGridModule } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-custom-footer-template-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxGridModule, CurrencyPipe],
})
export class App {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name', summary: 'Total' },
    { header: 'Weight', field: 'weight', summary: data => Math.max(...data) },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
    { header: 'Cost', field: 'cost', type: 'currency', typeParameter: { display: '$' } },
  ];

  list = EXAMPLE_DATA;

  getTotalCost(data: any) {
    return data.reduce((acc: any, value: any) => acc + value, 0);
  }
}
