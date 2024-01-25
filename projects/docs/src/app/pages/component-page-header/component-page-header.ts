import { Component, EventEmitter, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'component-page-header',
  templateUrl: './component-page-header.html',
  styleUrls: ['./component-page-header.scss'],
  standalone: true,
  imports: [MatButton, MatIcon],
})
export class ComponentPageHeader {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  @Output() toggleSidenav = new EventEmitter<void>();

  getTitle() {
    return this._componentPageTitle.title;
  }
}
