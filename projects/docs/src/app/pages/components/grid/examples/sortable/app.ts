import { Component } from '@angular/core';
import { MtxGridColumn, MtxGridModule } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxGridModule],
})
export class App {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name', sortable: true },
    { header: 'Weight', field: 'weight', sortable: true },
    { header: 'Gender', field: 'gender', sortable: true },
    { header: 'Mobile', field: 'mobile', sortable: false },
    {
      header: 'City',
      field: 'city',
      sortable: true,
      sortProp: {
        arrowPosition: 'before',
        disableClear: true,
        start: 'desc',
      },
    },
  ];

  list = EXAMPLE_DATA;

  log(e: any) {
    console.log(e);
  }
}
