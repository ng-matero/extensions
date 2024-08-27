import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MtxGridColumn, MtxGridModule } from '@dcnx/mat-extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxGridModule, MatIconModule, MatTooltipModule],
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
