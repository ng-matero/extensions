import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-select-all-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatButtonModule, MatCheckboxModule, FormsModule, MtxCheckboxGroupModule, JsonPipe],
})
export class App {
  foods = [
    { label: 'Steak', value: 'steak' },
    { label: 'Pizza', value: 'pizza', disabled: true },
    { label: 'Tacos', value: 'tacos' },
  ];

  selectedFoods = ['tacos'];

  disabled = false;

  onOptionChange(e: any) {
    console.log(e);
  }

  toggleOptionDisabled() {
    this.foods[1].disabled = !this.foods[1].disabled;
    this.foods = this.foods.filter(_ => true);
  }
}
