import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MtxGridColumn, MtxGridModule } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-custom-cell-template-2-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxGridModule, MatButtonModule],
})
export class App {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
  ];

  list = EXAMPLE_DATA;
}
