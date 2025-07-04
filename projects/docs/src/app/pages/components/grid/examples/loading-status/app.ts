import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MtxGridColumn, MtxGridModule } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-loading-status-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatCheckboxModule, FormsModule, MtxGridModule],
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

  isLoading = true;
}
