import { Directionality } from '@angular/cdk/bidi';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
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
    importProvidersFrom(NgProgressHttpModule, NgProgressRouterModule),
    { provide: Directionality, useClass: AppDirectionality },
  ],
}).catch(err => console.error(err));
