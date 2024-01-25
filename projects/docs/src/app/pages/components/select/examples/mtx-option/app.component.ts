import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MtxOption, MtxSelect } from '@ng-matero/extensions/select';

@Component({
  selector: 'select-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatLabel,
    NgFor,
    MatHint,
    MatError,
    JsonPipe,
    MtxSelect,
    MtxOption,
  ],
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
