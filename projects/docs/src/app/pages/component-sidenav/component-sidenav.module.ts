import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

import { ComponentSidenav } from './component-sidenav.component';
import { ComponentCategoryList } from '../component-category-list/component-category-list';
import { ComponentNav } from '../component-nav/component-nav';
import { ComponentPageHeader } from '../component-page-header/component-page-header';
import { ComponentViewer } from '../component-viewer/component-viewer';

const routes = [
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
    ],
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
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
