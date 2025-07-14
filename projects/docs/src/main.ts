import { provideHttpClient, withFetch } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { App } from './app/app';
import { DOCS_APP_ROUTES } from './app/routes';

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideRouter(
      DOCS_APP_ROUTES,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ),
  ],
}).catch(err => console.error(err));
