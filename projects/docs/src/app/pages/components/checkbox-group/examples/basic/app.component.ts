import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDivider } from '@angular/material/divider';
import { MtxCheckboxGroup, MtxCheckboxGroupOption } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxCheckboxGroup, FormsModule, MatDivider, JsonPipe],
})
export class AppComponent {
  foods: MtxCheckboxGroupOption[] = [
    { label: 'Steak', value: 'steak', color: 'primary' },
    { label: 'Pizza', value: 'pizza', color: 'accent' },
    { label: 'Tacos', value: 'tacos', color: 'warn' },
  ];
  selectedFoods = ['steak', 'pizza', 'tacos'];

  cars = ['Ford', 'Chevrolet', 'Dodge'];
  selectedCars = ['Dodge'];
}
