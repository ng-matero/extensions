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

import {
  MaterialExtensionsModule,
  MaterialExtensionsExperimentalModule,
} from '@ng-matero/extensions';

import { HeaderLinkComponent } from './doc-heading/header-link';
import { DocHeadingComponent } from './doc-heading/doc-heading';
import { ExampleViewer } from './example-viewer/example-viewer';
import { Navbar } from './navbar/navbar';
import { CopierService } from './copier/copier.service';
import { NavigationFocus } from './navigation-focus/navigation-focus';
import { TableOfContents } from './table-of-contents/table-of-contents';
import { DocViewer } from './doc-viewer/doc-viewer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    MaterialExtensionsModule,
    MaterialExtensionsExperimentalModule,
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
    MaterialExtensionsExperimentalModule,
    FlexLayoutModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    NgOptionHighlightModule,

    HeaderLinkComponent,
    DocHeadingComponent,
    ExampleViewer,
    DocViewer,
    Navbar,
    NavigationFocus,
    TableOfContents,
  ],
  declarations: [
    HeaderLinkComponent,
    DocHeadingComponent,
    ExampleViewer,
    DocViewer,
    Navbar,
    NavigationFocus,
    TableOfContents,
  ],
  providers: [CopierService],
})
export class SharedModule {}
