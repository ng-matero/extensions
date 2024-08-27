import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MtxCheckboxGroupModule } from '@dcnx/mat-extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatCheckboxModule, FormsModule, MtxCheckboxGroupModule, JsonPipe],
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
