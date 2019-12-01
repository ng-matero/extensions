import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MtxProgressModule, MtxDialogModule } from '@ng-matero/extensions';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MtxProgressModule,
    MtxDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
