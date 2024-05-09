import { Component } from '@angular/core';
import { MtxGrid, MtxGridColumn } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxGrid],
})
export class AppComponent {
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
