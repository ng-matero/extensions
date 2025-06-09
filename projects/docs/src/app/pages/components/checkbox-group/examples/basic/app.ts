import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import {
  MtxCheckboxGroupModule,
  MtxCheckboxGroupOption,
} from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-basic-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxCheckboxGroupModule, FormsModule, MatDividerModule, JsonPipe],
})
export class App {
  foods: MtxCheckboxGroupOption[] = [
    { label: 'Steak', value: 'steak', color: 'primary' },
    { label: 'Pizza', value: 'pizza', color: 'accent' },
    { label: 'Tacos', value: 'tacos', color: 'warn' },
  ];
  selectedFoods = ['steak', 'pizza', 'tacos'];

  cars = ['Ford', 'Chevrolet', 'Dodge'];
  selectedCars = ['Dodge'];
}
