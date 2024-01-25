import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MtxGrid, MtxGridColumn, MtxGridRowSelectionFormatter } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatCheckbox, FormsModule, MatRadioGroup, MatRadioButton, MtxGrid],
})
export class AppComponent {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
  ];

  list = EXAMPLE_DATA;

  multiSelectable = true;
  hideRowSelectionCheckbox = false;
  rowSelectable = true;
  rowSelected = EXAMPLE_DATA.slice(2, 3);
  rowSelectionFormatter: MtxGridRowSelectionFormatter = {
    disabled: data => data.name === 'Boron',
    hideCheckbox: data => data.name === 'John',
  };

  log(e: any) {
    console.log(e);
  }
}
