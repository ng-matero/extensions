import { Directionality } from '@angular/cdk/bidi';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DOCS_APP_ROUTES } from './app/routes';
import { AppDirectionality } from './app/shared';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(
      DOCS_APP_ROUTES,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ),
    { provide: Directionality, useClass: AppDirectionality },
  ],
}).catch(err => console.error(err));
