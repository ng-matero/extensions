import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MtxCheckboxGroup } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatButton, MatCheckbox, FormsModule, MtxCheckboxGroup, JsonPipe],
})
export class AppComponent {
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
