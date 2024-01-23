import { Directionality } from '@angular/cdk/bidi';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app/app.component';
import { DevAppDirectionality } from './app/dev-app/dev-app-directionality';
import { ANIMATIONS_STORAGE_KEY } from './app/dev-app/dev-app-layout';
import { DevAppRippleOptions } from './app/dev-app/ripple-options';
import { DEV_APP_ROUTES } from './app/routes';

// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(DEV_APP_ROUTES),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      BrowserAnimationsModule.withConfig({
        disableAnimations: localStorage.getItem(ANIMATIONS_STORAGE_KEY) === 'true',
      }),
      BrowserModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: TranslateHttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useExisting: DevAppRippleOptions },
    { provide: Directionality, useClass: DevAppDirectionality },
  ],
}).catch(err => console.error(err));
