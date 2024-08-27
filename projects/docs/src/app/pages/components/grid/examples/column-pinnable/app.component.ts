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
    { header: 'Position', field: 'position', width: '200px' },
    { header: 'Name', field: 'name', width: '200px', pinned: 'left' },
    { header: 'tags', field: 'tag.0.value', width: '200px' },
    { header: 'Weight', field: 'weight', width: '200px', pinned: 'left' },
    { header: 'Symbol', field: 'symbol', width: '200px' },
    { header: 'Gender', field: 'gender', width: '200px' },
    { header: 'Mobile', field: 'mobile', width: '200px' },
    { header: 'Tele', field: 'tele', width: '200px' },
    { header: 'City', field: 'city', width: '200px' },
    { header: 'Address', field: 'address', width: '200px' },
    { header: 'Date', field: 'date', width: '200px' },
    { header: 'Website', field: 'website', width: '200px' },
    { header: 'Company', field: 'company', width: '200px' },
    { header: 'Email', field: 'email', width: '200px', pinned: 'right' },
    { header: 'Status', field: 'status', type: 'boolean', width: '200px' },
  ];

  list = EXAMPLE_DATA;
}
