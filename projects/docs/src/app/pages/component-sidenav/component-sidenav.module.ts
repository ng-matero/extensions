import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared';

import { ComponentCategoryList } from '../component-category-list/component-category-list';
import { ComponentNav } from '../component-nav/component-nav';
import { ComponentPageHeader } from '../component-page-header/component-page-header';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ComponentSidenav } from './component-sidenav';

const routes: Routes = [
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
        loadChildren: () => import('../components/components.module').then(m => m.ComponentsModule),
      },
      { path: '**', redirectTo: 'categories' },
    ],
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ComponentSidenav,
    ComponentNav,
    ComponentCategoryList,
    ComponentPageHeader,
    ComponentViewer,
  ],
  exports: [
    ComponentSidenav,
    ComponentNav,
    ComponentCategoryList,
    ComponentPageHeader,
    ComponentViewer,
  ],
})
export class ComponentSidenavModule {}
