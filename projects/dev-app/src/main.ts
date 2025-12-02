import { Directionality } from '@angular/cdk/bidi';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import {
  AnimationsConfig,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MATERIAL_ANIMATIONS,
} from '@angular/material/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { App } from './app/app';
import { DevAppDirectionality } from './app/dev-app/dev-app-directionality';
import { getAppState } from './app/dev-app/dev-app-state';
import { DevAppRippleOptions } from './app/dev-app/ripple-options';
import { DEV_APP_ROUTES } from './app/routes';

const cachedAppState = getAppState();

bootstrapApplication(App, {
  providers: [
    provideRouter(DEV_APP_ROUTES),
    provideHttpClient(withFetch()),
    provideTranslateService({
      loader: provideTranslateHttpLoader({ prefix: 'assets/i18n/', suffix: '.json' }),
    }),
    {
      provide: MATERIAL_ANIMATIONS,
      useValue: {
        animationsDisabled: !cachedAppState.animations,
      } as AnimationsConfig,
    },
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useExisting: DevAppRippleOptions },
    { provide: Directionality, useClass: DevAppDirectionality },
    cachedAppState.zoneless
      ? provideZonelessChangeDetection()
      : provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),
  ],
}).catch(err => console.error(err));
