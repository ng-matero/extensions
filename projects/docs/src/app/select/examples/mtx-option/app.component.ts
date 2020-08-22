import { Component } from '@angular/core';

@Component({
  selector: 'select-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedCars = [3];
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  toggleDisabled() {
    const car: any = this.cars[1];
    car.disabled = !car.disabled;
  }
}
