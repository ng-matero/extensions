import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MtxAlert } from '@ng-matero/extensions/alert';
import { SharedModule } from '../../../shared';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { PhotoviewerBasicComponent, photoviewerBasicExampleConfig } from './examples/basic';
import {
  PhotoviewerSimpleImageComponent,
  photoviewerSimpleImageExampleConfig,
} from './examples/simple-image';
import {
  PhotoviewerThumbnailComponent,
  photoviewerThumbnailExampleConfig,
} from './examples/thumbnail';

@Component({
  selector: 'app-photoviewer-overview',
  templateUrl: './photoviewer-overview.html',
  standalone: true,
  imports: [MtxAlert, NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class PhotoviewerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-photoviewer-api',
  templateUrl: './photoviewer-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class PhotoviewerApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
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
    ]),
    PhotoviewerOverviewComponent,
    PhotoviewerApiComponent,
    PhotoviewerBasicComponent,
    PhotoviewerSimpleImageComponent,
    PhotoviewerThumbnailComponent,
  ],
})
export class PhotoviewerModule {}
