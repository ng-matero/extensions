import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '../../../shared';
import { DocHeadingComponent } from '../../../shared/doc-heading/doc-heading';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { DialogBasicComponent, dialogBasicExampleConfig } from './examples/basic';
import { DialogI18nComponent, dialogI18nExampleConfig } from './examples/i18n';
import {
  DialogOriginalComponent,
  DialogOriginalOverviewComponent,
  dialogOriginalExampleConfig,
} from './examples/original';

// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/dialog/', '_json');
}

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, DocHeadingComponent, ExampleViewer, AsyncPipe],
})
export class DialogOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-dialog-api',
  templateUrl: './dialog-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class DialogApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: DialogOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [
            dialogBasicExampleConfig,
            dialogOriginalExampleConfig,
            dialogI18nExampleConfig,
          ],
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
    ]),
    DialogOverviewComponent,
    DialogApiComponent,
    DialogBasicComponent,
    DialogOriginalComponent,
    DialogOriginalOverviewComponent,
    DialogI18nComponent,
  ],
})
export class DialogModule {}
