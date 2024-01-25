import { Directionality } from '@angular/cdk/bidi';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DOCS_APP_ROUTES } from './app/routes';
import { AppDirectionality, SharedModule } from './app/shared';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, SharedModule),
    { provide: Directionality, useClass: AppDirectionality },
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(
      DOCS_APP_ROUTES,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ),
  ],
}).catch(err => console.error(err));
