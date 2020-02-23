import { Routes } from '@angular/router';
import { DevApp404 } from './dev-app-404';
import { DevAppHome } from './dev-app-home';

export const DEV_APP_ROUTES: Routes = [
  { path: '', component: DevAppHome },
  {
    path: 'alert',
    loadChildren: () => import('../alert/alert-demo.module').then(m => m.AlertDemoModule),
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
      import('../data-grid/data-grid-demo.module').then(m => m.DataGridDemoModule),
  },
  {
    path: 'dialog',
    loadChildren: () => import('../dialog/dialog-demo.module').then(m => m.DialogDemoModule),
  },
  {
    path: 'progress',
    loadChildren: () => import('../progress/progress-demo.module').then(m => m.ProgressDemoModule),
  },
  {
    path: 'text3d',
    loadChildren: () => import('../text3d/text3d-demo.module').then(m => m.Text3dDemoModule),
  },
  { path: '**', component: DevApp404 },
];
