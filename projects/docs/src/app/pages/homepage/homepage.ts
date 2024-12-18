import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

import { AppLogo } from '../../shared/logo/logo';
import { NavigationFocus } from '../../shared/navigation-focus/navigation-focus';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
  imports: [NavigationFocus, MatButtonModule, RouterLink, AppLogo],
})
export class Homepage implements OnInit {
  private _componentPageTitle = inject(ComponentPageTitle);

  @HostBinding('class.main-content') readonly mainContentClass = true;

  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }
}
