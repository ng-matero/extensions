import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DocHeadingComponent } from '../../../shared/doc-heading/doc-heading';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { dialogBasicExampleConfig } from './examples/basic';
import { dialogI18nExampleConfig } from './examples/i18n';
import { dialogOriginalExampleConfig } from './examples/original';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.html',
  imports: [DocHeadingComponent, ExampleViewer, AsyncPipe],
})
export class DialogOverviewComponent {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'app-dialog-api',
  templateUrl: './dialog-api.html',
  imports: [DocViewer, AsyncPipe],
})
export class DialogApiComponent {
  route = inject(ActivatedRoute);
}

export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/dialog/', '_json');
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
    providers: [
      provideTranslateService({
        loader: {
          provide: TranslateLoader,
          useFactory: TranslateHttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ],
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
