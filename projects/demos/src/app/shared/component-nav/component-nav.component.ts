import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export const DOCS = [
  {
    title: 'Basic',
    children: [
      {
        name: 'Alert',
        summary: 'Provide contextual feedback messages for typical user actions.',
        route: '/alert'
      },
      {
        name: 'Color Picker',
        summary: 'An extra input to select color enhanced by the ngx-color.',
        route: '/color-picker'
      },
      {
        name: 'Checkbox Group',
        summary: 'Allows the user to create a set of checkbox with configuration.',
        route: '/checkbox-group'
      },
      {
        name: 'Data Grid',
        summary: 'A powerful grid for material table.',
        route: '/data-grid'
      },
      {
        name: 'Dialog',
        summary: 'A configurable modal to show alert and confirmation.',
        route: '/dialog'
      },
      {
        name: 'Progress',
        summary: 'A linear progress indicator with Bootstrap style.',
        route: '/progress'
      },
      {
        name: 'Select',
        summary: 'An ng-select wrapper to be used in the form field.',
        route: '/select'
      },
      {
        name: 'Split Pane',
        summary: 'An component for creating multi-view layouts which cloned from angular-split.',
        route: '/split-pane'
      },
    ],
  },
  {
    title: 'Experimental',
    children: [{
      name: 'Text 3D',
      summary: 'Experimental component for 3d text.',
      route: '/text3d'
    }],
  },
];

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.component.html',
  styleUrls: ['./component-nav.component.scss']
})
export class ComponentNavComponent implements OnInit {
  @Output() navChange = new EventEmitter<any>();

  menus = DOCS;

  constructor() { }

  ngOnInit(): void {
  }

}
