import { Routes } from '@angular/router';
import { DevApp404 } from './dev-app/dev-app-404';
import { DevAppHome } from './dev-app/dev-app-home';

export const DEV_APP_ROUTES: Routes = [
  { path: '', component: DevAppHome },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert-demo.component').then(m => m.AlertDemoComponent),
  },
  {
    path: 'highlight-box',
    loadComponent: () =>
      import('./highlight-box/highlight-box-demo.component').then(m => m.HighlightBoxDemoComponent),
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button-demo.component').then(m => m.ButtonDemoComponent),
  },
  {
    path: 'checkbox-group',
    loadComponent: () =>
      import('./checkbox-group/checkbox-group-demo.component').then(
        m => m.CheckboxGroupDemoComponent
      ),
  },
  {
    path: 'colorpicker',
    loadComponent: () =>
      import('./colorpicker/colorpicker-demo.component').then(m => m.ColorPickerDemoComponent),
  },
  {
    path: 'datetimepicker',
    loadComponent: () =>
      import('./datetimepicker/datetimepicker-demo.component').then(
        m => m.DatetimepickerDemoComponent
      ),
  },
  {
    path: 'timepicker',
    loadComponent: () =>
      import('./timepicker/timepicker-demo.component').then(m => m.TimepickerDemoComponent),
  },
  {
    path: 'dialog',
    loadComponent: () => import('./dialog/dialog-demo.component').then(m => m.DialogDemoComponent),
  },
  {
    path: 'drawer',
    loadComponent: () => import('./drawer/drawer-demo.component').then(m => m.DrawerDemoComponent),
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid-demo.component').then(m => m.GridDemoComponent),
  },
  {
    path: 'loader',
    loadComponent: () => import('./loader/loader-demo.component').then(m => m.LoaderDemoComponent),
  },
  {
    path: 'photoviewer',
    loadComponent: () =>
      import('./photoviewer/photoviewer-demo.component').then(m => m.PhotoviewerDemoComponent),
  },
  {
    path: 'popover',
    loadComponent: () =>
      import('./popover/popover-demo.component').then(m => m.PopoverDemoComponent),
  },
  {
    path: 'progress',
    loadComponent: () =>
      import('./progress/progress-demo.component').then(m => m.ProgressDemoComponent),
  },
  {
    path: 'select',
    loadComponent: () => import('./select/select-demo.component').then(m => m.SelectDemoComponent),
  },
  {
    path: 'split',
    loadComponent: () => import('./split/split-demo.component').then(m => m.SplitDemoComponent),
  },
  {
    path: 'tooltip',
    loadComponent: () =>
      import('./tooltip/tooltip-demo.component').then(m => m.TooltipDemoComponent),
  },
  { path: '**', component: DevApp404 },
];
