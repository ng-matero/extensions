import { Directionality } from '@angular/cdk/bidi';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  importProvidersFrom,
  provideZoneChangeDetection,
  provideZonelessChangeDetection,
} from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { App } from './app/app';
import { DevAppDirectionality } from './app/dev-app/dev-app-directionality';
import { getAppState } from './app/dev-app/dev-app-state';
import { DevAppRippleOptions } from './app/dev-app/ripple-options';
import { DEV_APP_ROUTES } from './app/routes';

const cachedAppState = getAppState();

// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

bootstrapApplication(App, {
  providers: [
    provideRouter(DEV_APP_ROUTES),
    provideHttpClient(withFetch()),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    importProvidersFrom(
      BrowserAnimationsModule.withConfig({
        disableAnimations: !cachedAppState.animations,
      })
    ),
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useExisting: DevAppRippleOptions },
    { provide: Directionality, useClass: DevAppDirectionality },
    cachedAppState.zoneless
      ? provideZonelessChangeDetection()
      : provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),
  ],
}).catch(err => console.error(err));
