import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@shared';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/data-grid/', '_json');
}

import { DataGridBasicComponent, dataGridBasicExampleConfig } from './examples/basic';
import {
  DataGridLoadingStatusComponent,
  dataGridLoadingStatusExampleConfig,
} from './examples/loading-status';
import {
  DataGridHidePaginationComponent,
  dataGridHidePaginationExampleConfig,
} from './examples/hide-pagination';
import { DataGridSortableComponent, dataGridSortableExampleConfig } from './examples/sortable';
import {
  DataGridRowSelectableComponent,
  dataGridRowSelectableExampleConfig,
} from './examples/row-selectable';
import {
  DataGridExpandableRowComponent,
  dataGridExpandableRowExampleConfig,
} from './examples/expandable-row';
import {
  DataGridColumnHidingMovingComponent,
  dataGridColumnHidingMovingExampleConfig,
} from './examples/column-hiding-moving';
import {
  DataGridColumnPinnableComponent,
  dataGridColumnPinnableExampleConfig,
} from './examples/column-pinnable';
import {
  DataGridHoverStripedComponent,
  dataGridHoverStripedExampleConfig,
} from './examples/hover-striped';
import {
  DataGridRowWithButtonsComponent,
  dataGridRowWithButtonsExampleConfig,
} from './examples/row-with-buttons';
import {
  DataGridCustomCellTemplateComponent,
  dataGridCustomCellTemplateExampleConfig,
} from './examples/custom-cell-template';
import {
  DataGridCustomCellTemplate2Component,
  dataGridCustomCellTemplate2ExampleConfig,
} from './examples/custom-cell-template-2';
import {
  DataGridDataFormattingComponent,
  dataGridDataFormattingExampleConfig,
} from './examples/data-formatting';
import { DataGridNoResultComponent, dataGridNoResultExampleConfig } from './examples/no-result';
import {
  DataGridCustomHeaderTemplateComponent,
  dataGridCustomHeaderTemplateExampleConfig,
} from './examples/custom-header-template';
import {
  DataGridCustomFooterTemplateComponent,
  dataGridCustomFooterTemplateExampleConfig,
} from './examples/custom-footer-template';
import {
  DataGridCustomToolbarTemplateComponent,
  dataGridCustomToolbarTemplateExampleConfig,
} from './examples/custom-toolbar-template';
import { DataGridI18nComponent, dataGridI18nExampleConfig } from './examples/i18n';
import {
  DataGridRemoteDataComponent,
  dataGridRemoteDataExampleConfig,
} from './examples/remote-data';

@Component({
  selector: 'app-data-grid-overview',
  templateUrl: './data-grid-overview.html',
})
export class DataGridOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-data-grid-api',
  templateUrl: './data-grid-api.html',
})
export class DataGridApiComponent {
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
        component: DataGridOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [
            dataGridBasicExampleConfig,
            dataGridLoadingStatusExampleConfig,
            dataGridHidePaginationExampleConfig,
            dataGridSortableExampleConfig,
            dataGridRowSelectableExampleConfig,
            dataGridExpandableRowExampleConfig,
            dataGridColumnHidingMovingExampleConfig,
            dataGridColumnPinnableExampleConfig,
            dataGridHoverStripedExampleConfig,
            dataGridRowWithButtonsExampleConfig,
            dataGridCustomCellTemplateExampleConfig,
            dataGridCustomCellTemplate2ExampleConfig,
            dataGridDataFormattingExampleConfig,
            dataGridNoResultExampleConfig,
            dataGridCustomHeaderTemplateExampleConfig,
            dataGridCustomFooterTemplateExampleConfig,
            dataGridCustomToolbarTemplateExampleConfig,
            dataGridI18nExampleConfig,
            dataGridRemoteDataExampleConfig,
          ],
        },
      },
      {
        path: 'api',
        component: DataGridApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [
    DataGridOverviewComponent,
    DataGridApiComponent,

    DataGridBasicComponent,
    DataGridLoadingStatusComponent,
    DataGridHidePaginationComponent,
    DataGridSortableComponent,
    DataGridRowSelectableComponent,
    DataGridExpandableRowComponent,
    DataGridColumnHidingMovingComponent,
    DataGridColumnPinnableComponent,
    DataGridHoverStripedComponent,
    DataGridRowWithButtonsComponent,
    DataGridCustomCellTemplateComponent,
    DataGridCustomCellTemplate2Component,
    DataGridDataFormattingComponent,
    DataGridNoResultComponent,
    DataGridCustomHeaderTemplateComponent,
    DataGridCustomFooterTemplateComponent,
    DataGridCustomToolbarTemplateComponent,
    DataGridI18nComponent,
    DataGridRemoteDataComponent,
  ],
})
export class DataGridModule {}
