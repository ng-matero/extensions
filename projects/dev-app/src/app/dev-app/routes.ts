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
    path: 'colorpicker',
    loadChildren: () =>
      import('../colorpicker/colorpicker-demo.module').then(m => m.ColorPickerDemoModule),
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
    path: 'drawer',
    loadChildren: () => import('../drawer/drawer-demo.module').then(m => m.DrawerDemoModule),
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
    path: 'photoviewer',
    loadChildren: () =>
      import('../photoviewer/photoviewer-demo.module').then(m => m.PhotoviewerDemoModule),
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
    path: 'tooltip',
    loadChildren: () => import('../tooltip/tooltip-demo.module').then(m => m.TooltipDemoModule),
  },
  { path: '**', component: DevApp404 },
];
