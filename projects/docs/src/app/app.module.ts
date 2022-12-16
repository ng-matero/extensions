import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Directionality } from '@angular/cdk/bidi';

import { SharedModule, AppDirectionality } from './shared';

import { AppComponent } from './app.component';
import { DOCS_APP_ROUTES } from './routes';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(DOCS_APP_ROUTES, {
      // scrollPositionRestoration: 'enabled',
      // anchorScrolling: 'enabled',
    }),
    SharedModule,
  ],
  declarations: [AppComponent],
  providers: [{ provide: Directionality, useClass: AppDirectionality }],
  bootstrap: [AppComponent],
})
export class AppModule {}
