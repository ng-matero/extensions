import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import {
  MtxProgressModule,
  MtxDialogModule,
  MtxAlertModule,
  MtxDataGridModule,
} from '@ng-matero/extensions';
// import { MtxText3dModule } from '@ng-matero/extensions/text3d';

import { DialogOverviewComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, DialogOverviewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MtxProgressModule,
    MtxDialogModule,
    MtxAlertModule,
    MtxDataGridModule,
    // MtxText3dModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewComponent]
})
export class AppModule { }
