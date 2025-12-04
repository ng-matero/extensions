import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { App } from './app/app';
import { DOCS_APP_ROUTES } from './app/routes';

bootstrapApplication(App, {
  providers: [
    provideZoneChangeDetection(),
    provideHttpClient(withFetch()),
    provideRouter(
      DOCS_APP_ROUTES,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
  ],
}).catch(err => console.error(err));
