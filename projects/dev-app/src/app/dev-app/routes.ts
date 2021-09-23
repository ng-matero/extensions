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
    path: 'datetimepicker',
    loadChildren: () =>
      import('../datetimepicker/datetimepicker-demo.module').then(m => m.DatetimepickerDemoModule),
  },
  {
    path: 'dialog',
    loadChildren: () => import('../dialog/dialog-demo.module').then(m => m.DialogDemoModule),
  },
  {
    path: 'form-group',
    loadChildren: () =>
      import('../form-group/form-group-demo.module').then(m => m.FormGroupDemoModule),
  },
  {
    path: 'grid',
    loadChildren: () => import('../grid/grid-demo.module').then(m => m.GridDemoModule),
  },
  {
    path: 'loader',
    loadChildren: () => import('../loader/loader-demo.module').then(m => m.LoaderDemoModule),
  },
  {
    path: 'popover',
    loadChildren: () => import('../popover/popover-demo.module').then(m => m.PopoverDemoModule),
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
    path: 'split',
    loadChildren: () => import('../split/split-demo.module').then(m => m.SplitDemoModule),
  },
  {
    path: 'text3d',
    loadChildren: () => import('../text3d/text3d-demo.module').then(m => m.Text3dDemoModule),
  },
  {
    path: 'tooltip',
    loadChildren: () => import('../tooltip/tooltip-demo.module').then(m => m.TooltipDemoModule),
  },
  { path: '**', component: DevApp404 },
];
