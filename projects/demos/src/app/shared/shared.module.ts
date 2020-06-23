import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { MtxColorPickerModule } from '@ng-matero/extensions/color-picker';
import { MtxGridModule } from '@ng-matero/extensions/data-grid';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxProgressModule } from '@ng-matero/extensions/progress';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { MtxSplitModule } from '@ng-matero/extensions/split-pane';
import { MtxText3dModule } from '@ng-matero/extensions/text3d';

import { HeaderLinkComponent } from './doc-heading/header-link';
import { DocHeadingComponent } from './doc-heading/doc-heading';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { ComponentNavComponent } from './component-nav/component-nav.component';

import { CopierService } from './copier/copier.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,

    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    MtxGridModule,
    MtxColorPickerModule,
    MtxAlertModule,
    MtxCheckboxGroupModule,
    MtxDialogModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxSplitModule,
    MtxText3dModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,

    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    MtxGridModule,
    MtxColorPickerModule,
    MtxAlertModule,
    MtxCheckboxGroupModule,
    MtxDialogModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxSplitModule,
    MtxText3dModule,

    HeaderLinkComponent,
    DocHeadingComponent,
    ExampleViewerComponent,
    ComponentNavComponent
  ],
  declarations: [
    HeaderLinkComponent,
    DocHeadingComponent,
    ExampleViewerComponent,
    ComponentNavComponent
  ],
  providers: [CopierService],
})
export class SharedModule { }
