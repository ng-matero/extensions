import { Component } from '@angular/core';
import { MtxGridColumn, MtxGridModule } from '@ng-matero/extensions/grid';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MtxGridModule],
})
export class AppComponent {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
  ];

  list = [];
}
