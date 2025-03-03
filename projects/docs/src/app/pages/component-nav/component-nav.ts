import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Params, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';

export const COMPONENTS_MENU = [
  {
    id: 'alert',
    name: 'Alert',
    summary: 'Provide contextual feedback messages for typical user actions.',
  },
  {
    id: 'button',
    name: 'Button',
    summary: 'Provide a button loading directive for Material.',
  },
  {
    id: 'checkbox-group',
    name: 'Checkbox Group',
    summary: 'Allows the user to create a set of checkbox with select all.',
  },
  {
    id: 'colorpicker',
    name: 'Color Picker',
    summary: 'An extra input to select color enhanced by the ngx-color.',
  },
  {
    id: 'grid',
    name: 'Data Grid',
    summary: 'A powerful data grid for Material table.',
  },
  {
    id: 'datetimepicker',
    name: 'Datetimepicker',
    summary: 'Allows the user to choose both dates and times.',
  },
  {
    id: 'dialog',
    name: 'Dialog',
    summary: 'A configurable modal to show alert and confirmation.',
  },
  {
    id: 'drawer',
    name: 'Drawer',
    summary: 'A large interactive panel that displays dynamic content.',
  },
  {
    id: 'loader',
    name: 'Loader',
    summary: 'An easier loading component wrap with progress bar and spinner.',
  },
  {
    id: 'photoviewer',
    name: 'Photoviewer',
    summary: 'A feature-rich image viewer.',
  },
  {
    id: 'popover',
    name: 'Popover',
    summary: 'A floating panel containing html content.',
  },
  {
    id: 'progress',
    name: 'Progress',
    summary: 'A linear progress indicator with Bootstrap style.',
  },
  {
    id: 'select',
    name: 'Select',
    summary: 'A ng-select wrapper to be used in the form field.',
  },
  {
    id: 'split',
    name: 'Split Pane',
    summary: 'A component for creating multi-view layouts.',
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    summary: 'The tooltip support rich content.',
  },
];

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.html',
  styleUrl: './component-nav.scss',
  imports: [MatListModule, RouterLinkActive, RouterLink],
})
export class ComponentNav {
  @Input() params: Observable<Params> | undefined;
  menus = COMPONENTS_MENU;
  constructor() {}
}
