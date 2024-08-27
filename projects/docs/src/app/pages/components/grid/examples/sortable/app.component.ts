import { Component } from '@angular/core';
import { MtxGridColumn, MtxGridModule } from '@dcnx/mat-extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxGridModule],
})
export class AppComponent {
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
