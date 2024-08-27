import { Component } from '@angular/core';
import { MtxGridColumn, MtxGridModule, MtxGridRowClassFormatter } from '@dcnx/mat-extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxGridModule],
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
