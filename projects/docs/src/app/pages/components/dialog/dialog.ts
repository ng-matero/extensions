import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocHeadingComponent } from '../../../shared/doc-heading/doc-heading';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { dialogBasicExampleConfig } from './examples/basic';
import { dialogI18nExampleConfig } from './examples/i18n';
import { dialogOriginalExampleConfig } from './examples/original';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.html',
  standalone: true,
  imports: [DocHeadingComponent, ExampleViewer, AsyncPipe],
})
export class DialogOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-dialog-api',
  templateUrl: './dialog-api.html',
  standalone: true,
  imports: [DocViewer, AsyncPipe],
})
export class DialogApiComponent {
  constructor(public route: ActivatedRoute) {}
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: DialogOverviewComponent,
    pathMatch: 'full',
    data: {
      examples: [dialogBasicExampleConfig, dialogOriginalExampleConfig, dialogI18nExampleConfig],
    },
  },
  {
    path: 'api',
    component: DialogApiComponent,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./dialog.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
