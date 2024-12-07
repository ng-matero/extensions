import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MtxCheckboxGroupModule, FormsModule, JsonPipe],
})
export class AppComponent {
  cars = [
    { id: 1, name: 'Ford' },
    { id: 2, name: 'Chevrolet' },
    { id: 3, name: 'Dodge' },
  ];

  selectedCars = [3];
}
