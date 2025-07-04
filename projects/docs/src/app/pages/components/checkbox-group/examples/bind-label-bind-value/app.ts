import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-bind-label-bind-value-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxCheckboxGroupModule, FormsModule, JsonPipe],
})
export class App {
  cars = [
    { id: 1, name: 'Ford' },
    { id: 2, name: 'Chevrolet' },
    { id: 3, name: 'Dodge' },
  ];

  selectedCars = [3];
}
