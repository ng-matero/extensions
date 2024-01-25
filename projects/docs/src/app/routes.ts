import { Routes } from '@angular/router';

export const DOCS_APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/homepage').then(m => m.HomepageModule),
  },
  { path: 'categories', redirectTo: '/components/categories' },
  {
    path: 'components',
    loadChildren: () =>
      import('./pages/component-sidenav/component-sidenav.routes').then(m => m.routes),
  },
  { path: '**', redirectTo: '' },
];
