import { Routes } from '@angular/router';
import { DevApp404 } from './dev-app-404';
import { DevAppHome } from './dev-app-home';

export const DEV_APP_ROUTES: Routes = [
  { path: '', component: DevAppHome },
  {
    path: 'alert',
    loadChildren: () => import('../alert/alert.module').then(m => m.AlertModule),
  },
  {
    path: 'checkbox-group',
    loadChildren: () =>
      import('../checkbox-group/checkbox-group.module').then(m => m.CheckboxGroupModule),
  },
  {
    path: 'color-picker',
    loadChildren: () =>
      import('../color-picker/color-picker.module').then(m => m.ColorPickerModule),
  },
  {
    path: 'data-grid',
    loadChildren: () =>
      import('../data-grid/data-grid.module').then(m => m.DataGridModule),
  },
  {
    path: 'dialog',
    loadChildren: () => import('../dialog/dialog.module').then(m => m.DialogModule),
  },
  {
    path: 'progress',
    loadChildren: () => import('../progress/progress.module').then(m => m.ProgressModule),
  },
  {
    path: 'select',
    loadChildren: () => import('../select/select.module').then(m => m.SelectModule),
  },
  {
    path: 'split-pane',
    loadChildren: () => import('../split-pane/split-pane.module').then(m => m.SplitPaneModule),
  },
  {
    path: 'text3d',
    loadChildren: () => import('../text3d/text3d-demo.module').then(m => m.Text3dDemoModule),
  },
  { path: '**', component: DevApp404 },
];
