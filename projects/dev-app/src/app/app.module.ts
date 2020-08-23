/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Directionality } from '@angular/cdk/bidi';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';

import { AppComponent } from './app.component';
import { DevAppModule } from './dev-app/dev-app-module';
import { DEV_APP_ROUTES } from './dev-app/routes';
import { DevAppRippleOptions } from './dev-app/ripple-options';
import { DevAppDirectionality } from './dev-app/dev-app-directionality';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(DEV_APP_ROUTES),
    DevAppModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useExisting: DevAppRippleOptions },
    { provide: Directionality, useClass: DevAppDirectionality },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
