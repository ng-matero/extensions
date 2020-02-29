import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  items = [
    { name: 1, id: 1 },
    { name: 2, id: 2 },
    { name: 3, id: 3 },
    { name: 4, id: 4 },
    { name: 5, id: 5 },
  ];

  value = [1];

  constructor() {}

  ngOnInit() {}
}
