import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/dialog/', '_json');
}

import { DialogBasicComponent, dialogBasicExampleConfig } from './examples/basic';
import {
  DialogOriginalComponent,
  dialogOriginalExampleConfig,
  DialogOriginalOverviewComponent,
} from './examples/original';
import { DialogI18nComponent, dialogI18nExampleConfig } from './examples/i18n';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.html',
})
export class DialogOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-dialog-api',
  templateUrl: './dialog-api.html',
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
  ],
  declarations: [
    DialogOverviewComponent,
    DialogApiComponent,

    DialogBasicComponent,
    DialogOriginalComponent,
    DialogOriginalOverviewComponent,
    DialogI18nComponent,
  ],
})
export class DialogModule {}
