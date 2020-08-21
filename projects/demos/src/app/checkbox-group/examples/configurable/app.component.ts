import { Component } from '@angular/core';
import { MtxCheckboxGroupOption } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  foods: MtxCheckboxGroupOption[] = [
    { value: 1, label: 'Steak' },
    { value: 2, label: 'Pizza' },
    { value: 3, label: 'Tacos' },
  ];

  selectedFoods = [1];

  showSelectAll = false;

  constructor() {}

  changeOptions(e: any) {
    console.log(e);
  }
}
