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
    path: 'button',
    loadChildren: () => import('../button/button-demo.module').then(m => m.ButtonDemoModule),
  },
  {
    path: 'checkbox-group',
    loadChildren: () =>
      import('../checkbox-group/checkbox-group-demo.module').then(m => m.CheckboxGroupDemoModule),
  },
  {
    path: 'color-picker',
    loadChildren: () =>
      import('../color-picker/color-picker-demo.module').then(m => m.ColorPickerDemoModule),
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
    path: 'select',
    loadChildren: () => import('../select/select-demo.module').then(m => m.SelectDemoModule),
  },
  {
    path: 'split-pane',
    loadChildren: () =>
      import('../split-pane/split-pane-demo.module').then(m => m.SplitPaneDemoModule),
  },
  {
    path: 'text3d',
    loadChildren: () => import('../text3d/text3d-demo.module').then(m => m.Text3dDemoModule),
  },
  { path: '**', component: DevApp404 },
];
