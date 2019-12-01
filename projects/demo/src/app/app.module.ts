import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MtxProgressModule, MtxDialogModule, MtxAlertModule } from '@ng-matero/extensions';
import { MtxText3dModule } from '@ng-matero/extensions/lib/text3d';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MtxProgressModule,
    MtxDialogModule,
    MtxAlertModule,
    MtxText3dModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
