import { Component } from '@angular/core';
import { EXAMPLE_DATA } from '../../data';
import { MtxGridColumn, MtxGridRowClassFormatter } from '@ng-matero/extensions/grid';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rowClassFormatter: MtxGridRowClassFormatter = {
    success: (data, index) => data.name === 'Boron',
    danger: (data, index) => index === 1,
  };

  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    {
      header: 'Weight',
      field: 'weight',
      class: data => {
        return data?.weight > 10 ? 'warning' : '';
      },
    },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile', class: 'info' },
    { header: 'City', field: 'city' },
  ];

  list = EXAMPLE_DATA;
}
