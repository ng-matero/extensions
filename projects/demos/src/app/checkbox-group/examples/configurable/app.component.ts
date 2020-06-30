import { Component } from '@angular/core';
import { MtxCheckboxGroupOption } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  foods: MtxCheckboxGroupOption[] = [
    { value: 'steak-0', label: 'Steak', checked: true },
    { value: 'pizza-1', label: 'Pizza', disabled: true },
    { value: 'tacos-2', label: 'Tacos' },
  ];

  showSelectAll = true;

  constructor() {}

  changeOptions(e: any) {
    console.log(e);
  }
}
