import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { SharedModule } from '../shared';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '_json');
}

import { DataGridComponent } from './data-grid.component';

import { DataGridBasicComponent, dataGridBasicExampleConfig } from './examples/basic';
import { DataGridLoadingStatusComponent, dataGridLoadingStatusExampleConfig } from './examples/loading-status';
import { DataGridHidePaginationComponent, dataGridHidePaginationExampleConfig } from './examples/hide-pagination';
import { DataGridSortableComponent, dataGridSortableExampleConfig } from './examples/sortable';
import { DataGridRowSelectableComponent, dataGridRowSelectableExampleConfig } from './examples/row-selectable';
import { DataGridExpandableRowComponent, dataGridExpandableRowExampleConfig } from './examples/expandable-row';
import { DataGridColumnHidingMovingComponent, dataGridColumnHidingMovingExampleConfig } from './examples/column-hiding-moving';
import { DataGridColumnPinnableComponent, dataGridColumnPinnableExampleConfig } from './examples/column-pinnable';
import { DataGridHoverStripedComponent, dataGridHoverStripedExampleConfig } from './examples/hover-striped';
import { DataGridRowWithButtonsComponent, dataGridRowWithButtonsExampleConfig } from './examples/row-with-buttons';
import { DataGridCustomCellTemplateComponent, dataGridCustomCellTemplateExampleConfig } from './examples/custom-cell-template';
import { DataGridCustomCellTemplate2Component, dataGridCustomCellTemplate2ExampleConfig } from './examples/custom-cell-template-2';
import { DataGridDataFormattingComponent, dataGridDataFormattingExampleConfig } from './examples/data-formatting';
import { DataGridNoResultComponent, dataGridNoResultExampleConfig } from './examples/no-result';
import { DataGridCustomHeaderTemplateComponent, dataGridCustomHeaderTemplateExampleConfig } from './examples/custom-header-template';
import { DataGridCustomFooterTemplateComponent, dataGridCustomFooterTemplateExampleConfig } from './examples/custom-footer-template';
import { DataGridCustomToolbarTemplateComponent, dataGridCustomToolbarTemplateExampleConfig } from './examples/custom-toolbar-template';
import { DataGridI18nComponent, dataGridI18nExampleConfig } from './examples/i18n';
import { DataGridRemoteDataComponent, dataGridRemoteDataExampleConfig } from './examples/remote-data';

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
    RouterModule.forChild([{
      path: '',
      component: DataGridComponent,
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
    }]),
  ],
  declarations: [
    DataGridComponent,

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
export class DataGridModule { }
