import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'component-page-header',
  templateUrl: './component-page-header.html',
  styleUrl: './component-page-header.scss',
  imports: [MatButtonModule, MatIconModule],
})
export class ComponentPageHeader {
  private _componentPageTitle = inject(ComponentPageTitle);

  @Output() toggleSidenav = new EventEmitter<void>();

  getTitle() {
    return this._componentPageTitle.title;
  }
}
