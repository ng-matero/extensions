import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MtxSelectModule } from '@dcnx/mat-extensions/select';

@Component({
  selector: 'select-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatFormFieldModule, MtxSelectModule],
})
export class AppComponent {
  foods = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Lemon' },
    { id: 3, name: 'Lime' },
    { id: 4, name: 'Orange', disabled: true },
    { id: 5, name: 'Strawberry' },
  ];

  food: number | number[] = 2;

  multiple = false;
  disabled = false;
  required = true;

  onMultiSelectChange() {
    this.food = this.multiple ? [2] : 2;
  }
}
