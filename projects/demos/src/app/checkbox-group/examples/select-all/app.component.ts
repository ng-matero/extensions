import { Component } from '@angular/core';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
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
