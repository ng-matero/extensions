import { Component, HostBinding, NgModule, OnInit } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink, RouterModule, Routes } from '@angular/router';

import { NavigationFocus } from '../../shared/navigation-focus/navigation-focus';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss'],
  standalone: true,
  imports: [NavigationFocus, MatAnchor, RouterLink],
})
export class Homepage implements OnInit {
  @HostBinding('class.main-content') readonly mainContentClass = true;

  constructor(public _componentPageTitle: ComponentPageTitle) {}

  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }
}

const routes: Routes = [{ path: '', component: Homepage }];

@NgModule({
  imports: [RouterModule.forChild(routes), Homepage],
  exports: [Homepage],
})
export class HomepageModule {}
