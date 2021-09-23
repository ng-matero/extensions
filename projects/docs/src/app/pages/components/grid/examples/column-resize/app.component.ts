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
