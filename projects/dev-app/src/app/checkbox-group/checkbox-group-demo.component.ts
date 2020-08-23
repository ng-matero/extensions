import { Component } from '@angular/core';

import { MtxCheckboxGroupOption } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'dev-checkbox-group-demo',
  templateUrl: './checkbox-group-demo.component.html',
  styleUrls: ['./checkbox-group-demo.component.scss'],
})
export class CheckboxGroupDemoComponent {
  foods: MtxCheckboxGroupOption[] = [
    { label: 'Steak', value: 'steak', color: 'primary' },
    { label: 'Pizza', value: 'pizza', color: 'accent' },
    { label: 'Tacos', value: 'tacos', color: 'warn' },
  ];
  selectedFoods = ['steak', 'pizza'];
}
