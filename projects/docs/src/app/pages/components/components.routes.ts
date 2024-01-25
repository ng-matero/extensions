import { ComponentViewer } from '../component-viewer/component-viewer';

export const routes = [
  {
    path: '',
    component: ComponentViewer,
    children: [
      {
        path: 'alert',
        loadChildren: () => import('./alert/alert').then(m => m.routes),
      },
      {
        path: 'button',
        loadChildren: () => import('./button/button').then(m => m.routes),
      },
      {
        path: 'checkbox-group',
        loadChildren: () => import('./checkbox-group/checkbox-group').then(m => m.routes),
      },
      {
        path: 'colorpicker',
        loadChildren: () => import('./colorpicker/colorpicker').then(m => m.routes),
      },
      {
        path: 'datetimepicker',
        loadChildren: () => import('./datetimepicker/datetimepicker').then(m => m.routes),
      },
      {
        path: 'dialog',
        loadChildren: () => import('./dialog/dialog').then(m => m.routes),
      },
      {
        path: 'drawer',
        loadChildren: () => import('./drawer/drawer').then(m => m.routes),
      },
      {
        path: 'grid',
        loadChildren: () => import('./grid/grid').then(m => m.routes),
      },
      {
        path: 'loader',
        loadChildren: () => import('./loader/loader').then(m => m.routes),
      },
      {
        path: 'photoviewer',
        loadChildren: () => import('./photoviewer/photoviewer').then(m => m.routes),
      },
      {
        path: 'popover',
        loadChildren: () => import('./popover/popover').then(m => m.routes),
      },
      {
        path: 'progress',
        loadChildren: () => import('./progress/progress').then(m => m.routes),
      },
      {
        path: 'select',
        loadChildren: () => import('./select/select').then(m => m.routes),
      },
      {
        path: 'split',
        loadChildren: () => import('./split/split').then(m => m.routes),
      },
      {
        path: 'tooltip',
        loadChildren: () => import('./tooltip/tooltip').then(m => m.routes),
      },
    ],
  },
];
