import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MtxSelectModule } from '@dcnx/mat-extensions/select';

@Component({
  selector: 'select-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, JsonPipe, MtxSelectModule],
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
