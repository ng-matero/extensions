import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Directionality } from '@angular/cdk/bidi';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';

import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { DOCS_APP_ROUTES } from './routes';

import { DocsAppModule } from './layout/docs-app-module';
import { DocsAppDirectionality } from './shared/directionality';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(DOCS_APP_ROUTES),
    DocsAppModule,
    SharedModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    { provide: Directionality, useClass: DocsAppDirectionality },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
