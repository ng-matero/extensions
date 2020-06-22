import { Component } from '@angular/core';
import { EXAMPLE_DATA } from '../../data';
import { MtxGridColumn } from '@ng-matero/extensions';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name', description: 'Info about the name' },
    { header: 'Weight', field: 'weight', description: 'Info about the weight' },
    { header: 'Gender', field: 'gender', description: 'Info about the gender' },
    { header: 'Mobile', field: 'mobile', description: 'Info about the mobile' },
    { header: 'City', field: 'city', description: 'Info about the city' },
  ];

  list = EXAMPLE_DATA;
}
