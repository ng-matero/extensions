import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

import { MaterialExtensionsModule } from '@ng-matero/extensions';
import { MtxText3dModule } from '@ng-matero/extensions/text3d';

import { HeaderLinkComponent } from './doc-heading/header-link';
import { DocHeadingComponent } from './doc-heading/doc-heading';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CopierService } from './copier/copier.service';
import { NavigationFocus } from './navigation-focus/navigation-focus';
import { TableOfContents } from './table-of-contents/table-of-contents';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    MaterialExtensionsModule,
    MtxText3dModule,
    FlexLayoutModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    NgOptionHighlightModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    MaterialExtensionsModule,
    MtxText3dModule,
    FlexLayoutModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    NgOptionHighlightModule,

    HeaderLinkComponent,
    DocHeadingComponent,
    ExampleViewerComponent,
    NavbarComponent,
    NavigationFocus,
    TableOfContents,
  ],
  declarations: [
    HeaderLinkComponent,
    DocHeadingComponent,
    ExampleViewerComponent,
    NavbarComponent,
    NavigationFocus,
    TableOfContents,
  ],
  providers: [CopierService],
})
export class SharedModule {}
