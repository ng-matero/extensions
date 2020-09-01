import { Component } from '@angular/core';
import { COMPONENTS_MENU } from '../component-nav/component-nav.component';

@Component({
  selector: 'app-component-category-list',
  templateUrl: './component-category-list.component.html',
  styleUrls: ['./component-category-list.component.scss'],
})
export class ComponentCategoryList {
  list = COMPONENTS_MENU;
}
