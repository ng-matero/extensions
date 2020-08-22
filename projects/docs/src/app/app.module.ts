import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Directionality } from '@angular/cdk/bidi';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';

import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { DocsAppHome } from './docs-app-home';
import { DocsApp404 } from './docs-app-404';
import { DOCS_APP_ROUTES } from './routes';

import { DocsAppModule } from './layout/docs-app-module';
import { DocsAppRippleOptions } from './shared/ripple-options';
import { DocsAppDirectionality } from './shared/directionality';
import { environment } from '../environments/environment.prod';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(DOCS_APP_ROUTES),
    DocsAppModule,
    SharedModule,
  ],
  declarations: [AppComponent, DocsAppHome, DocsApp404],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useExisting: DocsAppRippleOptions },
    { provide: Directionality, useClass: DocsAppDirectionality },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
