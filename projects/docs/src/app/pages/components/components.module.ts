import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';

import { ComponentViewer } from '../component-viewer/component-viewer';

const routes = [
  {
    path: '',
    component: ComponentViewer,
    children: [
      {
        path: 'alert',
        loadChildren: () => import('./alert/alert').then(m => m.AlertModule),
      },
      {
        path: 'button',
        loadChildren: () => import('./button/button').then(m => m.ButtonModule),
      },
      {
        path: 'checkbox-group',
        loadChildren: () =>
          import('./checkbox-group/checkbox-group').then(m => m.CheckboxGroupModule),
      },
      {
        path: 'colorpicker',
        loadChildren: () => import('./colorpicker/colorpicker').then(m => m.ColorPickerModule),
      },
      {
        path: 'datetimepicker',
        loadChildren: () =>
          import('./datetimepicker/datetimepicker').then(m => m.DatetimepickerModule),
      },
      {
        path: 'dialog',
        loadChildren: () => import('./dialog/dialog').then(m => m.DialogModule),
      },
      {
        path: 'drawer',
        loadChildren: () => import('./drawer/drawer').then(m => m.DrawerModule),
      },
      {
        path: 'grid',
        loadChildren: () => import('./grid/grid').then(m => m.GridModule),
      },
      {
        path: 'loader',
        loadChildren: () => import('./loader/loader').then(m => m.LoaderModule),
      },
      {
        path: 'photoviewer',
        loadChildren: () => import('./photoviewer/photoviewer').then(m => m.PhotoviewerModule),
      },
      {
        path: 'popover',
        loadChildren: () => import('./popover/popover').then(m => m.PopoverModule),
      },
      {
        path: 'progress',
        loadChildren: () => import('./progress/progress').then(m => m.ProgressModule),
      },
      {
        path: 'select',
        loadChildren: () => import('./select/select').then(m => m.SelectModule),
      },
      {
        path: 'split',
        loadChildren: () => import('./split/split').then(m => m.SplitModule),
      },
      {
        path: 'tooltip',
        loadChildren: () => import('./tooltip/tooltip').then(m => m.TooltipModule),
      },
    ],
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [],
})
export class ComponentsModule {}
