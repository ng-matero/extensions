import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  items = [
    { name: 'Apple', id: 1 },
    { name: 'Lemon', id: 2 },
    { name: 'Lime', id: 3 },
    { name: 'Orange', id: 4, disabled: true },
    { name: 'Strawberry', id: 5 },
  ];

  value = 2;
  disableSelect = false;

  constructor() {}

  ngOnInit() {}

  change(e: any) {
    console.log(e);
  }
}
