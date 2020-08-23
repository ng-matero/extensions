import { Component } from '@angular/core';

@Component({
  selector: 'dev-app-select',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.scss'],
})
export class SelectDemoComponent {
  items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Lemon' },
    { id: 3, name: 'Lime' },
    { id: 4, name: 'Orange', disabled: true },
    { id: 5, name: 'Strawberry' },
  ];

  value = 5;

  multipleSelect = false;
  disableSelect = false;

  change(e: any) {
    console.log(e);
  }
}
