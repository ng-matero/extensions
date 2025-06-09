import { Routes } from '@angular/router';
import { DevApp404 } from './dev-app/dev-app-404';
import { DevAppHome } from './dev-app/dev-app-home';

export const DEV_APP_ROUTES: Routes = [
  { path: '', component: DevAppHome },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert-demo').then(m => m.AlertDemo),
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button-demo').then(m => m.ButtonDemo),
  },
  {
    path: 'checkbox-group',
    loadComponent: () =>
      import('./checkbox-group/checkbox-group-demo').then(m => m.CheckboxGroupDemo),
  },
  {
    path: 'colorpicker',
    loadComponent: () => import('./colorpicker/colorpicker-demo').then(m => m.ColorPickerDemo),
  },
  {
    path: 'datetimepicker',
    loadComponent: () =>
      import('./datetimepicker/datetimepicker-demo').then(m => m.DatetimepickerDemo),
  },
  {
    path: 'dialog',
    loadComponent: () => import('./dialog/dialog-demo').then(m => m.DialogDemo),
  },
  {
    path: 'drawer',
    loadComponent: () => import('./drawer/drawer-demo').then(m => m.DrawerDemo),
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid-demo').then(m => m.GridDemo),
  },
  {
    path: 'loader',
    loadComponent: () => import('./loader/loader-demo').then(m => m.LoaderDemo),
  },
  {
    path: 'photoviewer',
    loadComponent: () => import('./photoviewer/photoviewer-demo').then(m => m.PhotoviewerDemo),
  },
  {
    path: 'popover',
    loadComponent: () => import('./popover/popover-demo').then(m => m.PopoverDemo),
  },
  {
    path: 'progress',
    loadComponent: () => import('./progress/progress-demo').then(m => m.ProgressDemo),
  },
  {
    path: 'select',
    loadComponent: () => import('./select/select-demo').then(m => m.SelectDemo),
  },
  {
    path: 'split',
    loadComponent: () => import('./split/split-demo').then(m => m.SplitDemo),
  },
  {
    path: 'tooltip',
    loadComponent: () => import('./tooltip/tooltip-demo').then(m => m.TooltipDemo),
  },
  { path: '**', component: DevApp404 },
];
