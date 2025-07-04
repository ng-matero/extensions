import { Component } from '@angular/core';
import { MtxGridColumn, MtxGridModule } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-column-resize-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxGridModule],
})
export class App {
  columns: MtxGridColumn[] = [
    {
      header: 'Name',
      field: 'name',
      minWidth: 200,
      maxWidth: 300,
    },
    {
      header: 'Weight',
      field: 'weight',
      minWidth: 200,
    },
    {
      header: 'Gender',
      field: 'gender',
      width: '100px',
      resizable: false,
    },
    {
      header: 'Mobile',
      field: 'mobile',
      maxWidth: 200,
    },
    {
      header: 'City',
      field: 'city',
      minWidth: 200,
    },
  ];

  list = [...EXAMPLE_DATA, ...EXAMPLE_DATA, ...EXAMPLE_DATA];
}
