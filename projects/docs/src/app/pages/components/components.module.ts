import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

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
        path: 'data-grid',
        loadChildren: () => import('./data-grid/data-grid').then(m => m.DataGridModule),
      },
      {
        path: 'dialog',
        loadChildren: () => import('./dialog/dialog').then(m => m.DialogModule),
      },
      {
        path: 'loader',
        loadChildren: () => import('./loader/loader').then(m => m.LoaderModule),
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
        path: 'split-pane',
        loadChildren: () => import('./split-pane/split-pane').then(m => m.SplitPaneModule),
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
