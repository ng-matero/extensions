import { Routes } from '@angular/router';

import { ComponentCategoryList } from '../component-category-list/component-category-list';
import { ComponentSidenav } from './component-sidenav';

export const routes: Routes = [
  {
    path: '',
    component: ComponentSidenav,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      {
        path: 'categories',
        children: [{ path: '', component: ComponentCategoryList }],
      },
      {
        path: '',
        loadChildren: () => import('../components/components.routes').then(m => m.routes),
      },
      { path: '**', redirectTo: 'categories' },
    ],
  },
];
