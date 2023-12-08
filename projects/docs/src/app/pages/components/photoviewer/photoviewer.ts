import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';
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
})
export class PhotoviewerOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-photoviewer-api',
  templateUrl: './photoviewer-api.html',
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
  ],
  declarations: [
    PhotoviewerOverviewComponent,
    PhotoviewerApiComponent,
    PhotoviewerBasicComponent,
    PhotoviewerSimpleImageComponent,
    PhotoviewerThumbnailComponent,
  ],
})
export class PhotoviewerModule {}
