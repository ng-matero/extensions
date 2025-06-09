import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MtxGridColumn, MtxGridModule } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-custom-header-template-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxGridModule, MatIconModule, MatTooltipModule],
})
export class App {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name', description: 'Info about the name' },
    { header: 'Weight', field: 'weight', description: 'Info about the weight' },
    { header: 'Gender', field: 'gender', description: 'Info about the gender' },
    { header: 'Mobile', field: 'mobile', description: 'Info about the mobile' },
    { header: 'City', field: 'city', description: 'Info about the city' },
  ];

  list = EXAMPLE_DATA;
}
