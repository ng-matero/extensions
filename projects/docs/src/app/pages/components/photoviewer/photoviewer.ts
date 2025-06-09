import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { MtxAlert } from '@ng-matero/extensions/alert';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { photoviewerBasicExampleConfig } from './examples/basic';
import { photoviewerSimpleImageExampleConfig } from './examples/simple-image';
import { photoviewerThumbnailExampleConfig } from './examples/thumbnail';

@Component({
  selector: 'app-photoviewer-overview',
  templateUrl: './photoviewer-overview.html',
  imports: [MtxAlert, ExampleViewer, AsyncPipe],
})
export class PhotoviewerOverview {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-photoviewer-api',
  templateUrl: './photoviewer-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class PhotoviewerApi {
  route = inject(ActivatedRoute);
}

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: PhotoviewerOverview,
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
    component: PhotoviewerApi,
    pathMatch: 'full',
    data: {
      content: require('!!raw-loader!!highlight-loader!markdown-loader!./photoviewer.md'),
    },
  },
  { path: '**', redirectTo: 'overview' },
];
