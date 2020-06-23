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
        summary: 'Select color with the ngx-color.',
        route: '/color-picker'
      },
      {
        name: 'Checkbox Group',
        summary: 'Allows the user to create a set of checkbox.',
        route: '/checkbox-group'
      },
      {
        name: 'Data Grid',
        summary: 'A powerful grid for material table.',
        route: '/data-grid'
      },
      {
        name: 'Dialog',
        summary: 'A configurable modal that displays dynamic content.',
        route: '/dialog'
      },
      {
        name: 'Progress',
        summary: 'A linear progress indicator.',
        route: '/progress'
      },
      {
        name: 'Select',
        summary: 'Form field wrapper for the ng-select.',
        route: '/select'
      },
      {
        name: 'Split Pane',
        summary: 'Easiest way for creating multi-view layouts',
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
