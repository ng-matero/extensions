import { Component } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/data-grid';
import { EXAMPLE_DATA } from './data';

@Component({
  selector: 'dev-data-grid-demo',
  templateUrl: './data-grid-demo.component.html',
  styleUrls: ['./data-grid-demo.component.scss'],
})
export class DataGridDemoComponent {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    {
      header: 'Weight',
      field: 'weight',
      type: 'number',
      typeParameter: {
        digitsInfo: '1.2-2',
      },
    },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
    {
      header: 'Date',
      field: 'date',
      type: 'date',
      typeParameter: {
        format: 'yyyy-MM-dd',
      },
    },
  ];

  list = EXAMPLE_DATA;

  trackByName(index: number, item: any) {
    return item.name;
  }
}
