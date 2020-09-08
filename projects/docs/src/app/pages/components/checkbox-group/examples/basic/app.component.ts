import { Component } from '@angular/core';
import { MtxCheckboxGroupOption } from '@ng-matero/extensions';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
