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
        path: 'color-picker',
        loadChildren: () => import('./color-picker/color-picker').then(m => m.ColorPickerModule),
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
        path: 'grid',
        loadChildren: () => import('./grid/grid').then(m => m.GridModule),
      },
      {
        path: 'loader',
        loadChildren: () => import('./loader/loader').then(m => m.LoaderModule),
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
      {
        path: 'form-group',
        loadChildren: () => import('./form-group/form-group').then(m => m.FormGroupModule),
      },
      {
        path: 'text3d',
        loadChildren: () => import('./text3d/text3d').then(m => m.Text3dModule),
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
