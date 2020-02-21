import { Component, OnInit } from '@angular/core';

import { MtxCheckboxGroupOption } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
})
export class CheckboxGroupComponent implements OnInit {
  foods: MtxCheckboxGroupOption[] = [
    { value: 'steak-0', label: 'Steak', checked: true },
    { value: 'pizza-1', label: 'Pizza', disabled: true },
    { value: 'tacos-2', label: 'Tacos' },
  ];

  constructor() {}

  ngOnInit() {}
}
