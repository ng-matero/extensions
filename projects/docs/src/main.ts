import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { App } from './app/app';
import { DOCS_APP_ROUTES } from './app/routes';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(
      DOCS_APP_ROUTES,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        scss: () => import('highlight.js/lib/languages/scss'),
        xml: () => import('highlight.js/lib/languages/xml'),
      },
    }),
  ],
}).catch(err => console.error(err));
