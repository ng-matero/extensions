import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Directionality } from '@angular/cdk/bidi';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';

import { AppComponent } from './app.component';
import { DevAppModule } from './dev-app/dev-app-module';
import { DEV_APP_ROUTES } from './dev-app/routes';
import { DevAppRippleOptions } from './dev-app/ripple-options';
import { DevAppDirectionality } from './dev-app/dev-app-directionality';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(DEV_APP_ROUTES, { relativeLinkResolution: 'legacy' }),
    DevAppModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
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
