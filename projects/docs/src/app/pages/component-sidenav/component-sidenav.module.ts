import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

import { ComponentSidenavComponent } from './component-sidenav.component';
import { ComponentNavComponent } from '../component-nav/component-nav.component';
import { ComponentCategoryList } from '../component-category-list/component-category-list.component';

const routes = [
  { path: '', component: ComponentCategoryList },
  {
    path: 'alert',
    loadChildren: () => import('../components/alert/alert.module').then(m => m.AlertModule),
  },
  {
    path: 'button',
    loadChildren: () => import('../components/button/button.module').then(m => m.ButtonModule),
  },
  {
    path: 'checkbox-group',
    loadChildren: () =>
      import('../components/checkbox-group/checkbox-group.module').then(m => m.CheckboxGroupModule),
  },
  {
    path: 'color-picker',
    loadChildren: () =>
      import('../components/color-picker/color-picker.module').then(m => m.ColorPickerModule),
  },
  {
    path: 'data-grid',
    loadChildren: () =>
      import('../components/data-grid/data-grid.module').then(m => m.DataGridModule),
  },
  {
    path: 'dialog',
    loadChildren: () => import('../components/dialog/dialog.module').then(m => m.DialogModule),
  },
  {
    path: 'progress',
    loadChildren: () =>
      import('../components/progress/progress.module').then(m => m.ProgressModule),
  },
  {
    path: 'select',
    loadChildren: () => import('../components/select/select.module').then(m => m.SelectModule),
  },
  {
    path: 'split-pane',
    loadChildren: () =>
      import('../components/split-pane/split-pane.module').then(m => m.SplitPaneModule),
  },
  {
    path: 'text3d',
    loadChildren: () => import('../components/text3d/text3d.module').then(m => m.Text3dModule),
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ComponentSidenavComponent, ComponentNavComponent, ComponentCategoryList],
  exports: [ComponentSidenavComponent, ComponentNavComponent, ComponentCategoryList],
})
export class ComponentsSidenavModule {}
