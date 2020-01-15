import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

import { DevApp404 } from './dev-app-404';
import { DevAppHome } from './dev-app-home';
import { DevAppLayout } from './dev-app-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    NgProgressModule,
    NgProgressRouterModule,
  ],
  declarations: [DevAppLayout, DevAppHome, DevApp404],
  exports: [DevAppLayout],
})
export class DevAppModule {}
