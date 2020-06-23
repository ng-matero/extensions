import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.component.html',
  styleUrls: ['./component-nav.component.scss']
})
export class ComponentNavComponent implements OnInit {
  @Output() navChange = new EventEmitter<any>();

  menus = [
    {
      title: 'Basic',
      children: [
        { name: 'Alert', route: '/alert' },
        { name: 'Color Picker', route: '/color-picker' },
        { name: 'Checkbox Group', route: '/checkbox-group' },
        { name: 'Data Grid', route: '/data-grid' },
        { name: 'Dialog', route: '/dialog' },
        { name: 'Progress', route: '/progress' },
        { name: 'Select', route: '/select' },
        { name: 'Split Pane', route: '/split-pane' },
      ],
    },
    {
      title: 'Experimental',
      children: [{ name: 'Text 3D', route: '/text3d' }],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
