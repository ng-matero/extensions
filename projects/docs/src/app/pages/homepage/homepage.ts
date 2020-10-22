import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss'],
})
export class Homepage implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }
}

const routes: Routes = [{ path: '', component: Homepage }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule {}
