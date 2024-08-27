import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MtxGrid, MtxGridColumn, MtxGridModule } from '@dcnx/mat-extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatRadioModule, MtxGridModule],
})
export class AppComponent {
  @ViewChild('grid') grid!: MtxGrid;

  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
  ];

  list = EXAMPLE_DATA;

  columnPinnable = false;
  columnSortable = true;
  columnHideable = true;
  columnHideableChecked: 'show' | 'hide' = 'show';

  closeMenu() {
    this.grid.columnMenu.menuTrigger.closeMenu();
  }

  log(e: any) {
    console.log(e);
  }
}
