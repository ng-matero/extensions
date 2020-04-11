import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { MtxColorPickerModule } from '@ng-matero/extensions/color-picker';
import { MtxGridModule } from '@ng-matero/extensions/data-grid';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxProgressModule } from '@ng-matero/extensions/progress';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { MtxText3dModule } from '@ng-matero/extensions/text3d';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    NgProgressModule,
    NgProgressRouterModule,
    MtxGridModule,
    MtxColorPickerModule,
    MtxAlertModule,
    MtxCheckboxGroupModule,
    MtxDialogModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxText3dModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    NgProgressModule,
    NgProgressRouterModule,
    MtxGridModule,
    MtxColorPickerModule,
    MtxAlertModule,
    MtxCheckboxGroupModule,
    MtxDialogModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxText3dModule
  ],
})
export class SharedModule { }
