import { Routes } from '@angular/router';
import { ComponentCategoryList } from './shared/component-category-list/component-category-list.component';

export const DOCS_APP_ROUTES: Routes = [
  { path: '', component: ComponentCategoryList },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then(m => m.AlertModule),
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then(m => m.ButtonModule),
  },
  {
    path: 'checkbox-group',
    loadChildren: () =>
      import('./checkbox-group/checkbox-group.module').then(m => m.CheckboxGroupModule),
  },
  {
    path: 'color-picker',
    loadChildren: () => import('./color-picker/color-picker.module').then(m => m.ColorPickerModule),
  },
  {
    path: 'data-grid',
    loadChildren: () => import('./data-grid/data-grid.module').then(m => m.DataGridModule),
  },
  {
    path: 'dialog',
    loadChildren: () => import('./dialog/dialog.module').then(m => m.DialogModule),
  },
  {
    path: 'progress',
    loadChildren: () => import('./progress/progress.module').then(m => m.ProgressModule),
  },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then(m => m.SelectModule),
  },
  {
    path: 'split-pane',
    loadChildren: () => import('./split-pane/split-pane.module').then(m => m.SplitPaneModule),
  },
  {
    path: 'text3d',
    loadChildren: () => import('./text3d/text3d.module').then(m => m.Text3dModule),
  },
  { path: '**', redirectTo: '' },
];
