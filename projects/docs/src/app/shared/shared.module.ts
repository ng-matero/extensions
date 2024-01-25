import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { CopierService } from './copier/copier.service';
import { DocHeadingComponent } from './doc-heading/doc-heading';
import { HeaderLinkComponent } from './doc-heading/header-link';
import { DocViewer } from './doc-viewer/doc-viewer';
import { ExampleViewer } from './example-viewer/example-viewer';
import { Navbar } from './navbar/navbar';
import { NavigationFocus } from './navigation-focus/navigation-focus';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    HeaderLinkComponent,
    DocHeadingComponent,
    ExampleViewer,
    DocViewer,
    Navbar,
    NavigationFocus,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    HeaderLinkComponent,
    DocHeadingComponent,
    ExampleViewer,
    DocViewer,
    Navbar,
    NavigationFocus,
  ],
  providers: [CopierService],
})
export class SharedModule {}
