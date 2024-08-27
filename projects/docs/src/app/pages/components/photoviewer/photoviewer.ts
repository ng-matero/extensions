import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { MtxAlert } from '@dcnx/mat-extensions/alert';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { photoviewerBasicExampleConfig } from './examples/basic';
import { photoviewerSimpleImageExampleConfig } from './examples/simple-image';
import { photoviewerThumbnailExampleConfig } from './examples/thumbnail';

@Component({
  selector: 'app-photoviewer-overview',
  templateUrl: './photoviewer-overview.html',
  standalone: true,
  imports: [MtxAlert, ExampleViewer, AsyncPipe],
})
export class PhotoviewerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-photoviewer-api',
  templateUrl: './photoviewer-api.html',
  standalone: true,
  imports: [DocViewer, AsyncPipe],
})
export class PhotoviewerApiComponent {
  constructor(public route: ActivatedRoute) {}
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: PhotoviewerOverviewComponent,
    pathMatch: 'full',
    data: {
      examples: [
        photoviewerBasicExampleConfig,
        photoviewerSimpleImageExampleConfig,
        photoviewerThumbnailExampleConfig,
      ],
    },
  },
  {
    path: 'api',
    component: PhotoviewerApiComponent,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./photoviewer.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
