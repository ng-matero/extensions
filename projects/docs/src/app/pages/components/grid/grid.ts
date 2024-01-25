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
import { GridBasicComponent, gridBasicExampleConfig } from './examples/basic';
import {
  GridColumnHidingMovingComponent,
  gridColumnHidingMovingExampleConfig,
} from './examples/column-hiding-moving';
import {
  GridColumnPinnableComponent,
  gridColumnPinnableExampleConfig,
} from './examples/column-pinnable';
import { GridColumnResizeComponent, gridColumnResizeExampleConfig } from './examples/column-resize';
import { GridContextMenuComponent, gridContextMenuExampleConfig } from './examples/context-menu';
import {
  GridCustomCellTemplateComponent,
  gridCustomCellTemplateExampleConfig,
} from './examples/custom-cell-template';
import {
  GridCustomCellTemplate2Component,
  gridCustomCellTemplate2ExampleConfig,
} from './examples/custom-cell-template-2';
import {
  GridCustomFooterTemplateComponent,
  gridCustomFooterTemplateExampleConfig,
} from './examples/custom-footer-template';
import {
  GridCustomHeaderTemplateComponent,
  gridCustomHeaderTemplateExampleConfig,
} from './examples/custom-header-template';
import {
  GridCustomToolbarTemplateComponent,
  gridCustomToolbarTemplateExampleConfig,
} from './examples/custom-toolbar-template';
import {
  GridDataFormattingComponent,
  gridDataFormattingExampleConfig,
} from './examples/data-formatting';
import {
  GridExpandableRowComponent,
  gridExpandableRowExampleConfig,
} from './examples/expandable-row';
import {
  GridHidePaginationComponent,
  gridHidePaginationExampleConfig,
} from './examples/hide-pagination';
import { GridHoverStripedComponent, gridHoverStripedExampleConfig } from './examples/hover-striped';
import { GridI18nComponent, gridI18nExampleConfig } from './examples/i18n';
import {
  GridLoadingStatusComponent,
  gridLoadingStatusExampleConfig,
} from './examples/loading-status';
import { GridNoResultComponent, gridNoResultExampleConfig } from './examples/no-result';
import { GridRemoteDataComponent, gridRemoteDataExampleConfig } from './examples/remote-data';
import {
  GridRowColumnClassComponent,
  gridRowColumnClassExampleConfig,
} from './examples/row-column-class';
import {
  GridRowSelectableComponent,
  gridRowSelectableExampleConfig,
} from './examples/row-selectable';
import {
  GridRowWithButtonsComponent,
  gridRowWithButtonsExampleConfig,
} from './examples/row-with-buttons';
import { GridSortableComponent, gridSortableExampleConfig } from './examples/sortable';

// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/data-grid/', '_json');
}

@Component({
  selector: 'app-grid-overview',
  templateUrl: './grid-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, DocHeadingComponent, ExampleViewer, AsyncPipe],
})
export class GridOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-grid-api',
  templateUrl: './grid-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class GridApiComponent {
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
        component: GridOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [
            gridBasicExampleConfig,
            gridColumnResizeExampleConfig,
            gridContextMenuExampleConfig,
            gridLoadingStatusExampleConfig,
            gridHidePaginationExampleConfig,
            gridSortableExampleConfig,
            gridRowSelectableExampleConfig,
            gridExpandableRowExampleConfig,
            gridColumnHidingMovingExampleConfig,
            gridColumnPinnableExampleConfig,
            gridHoverStripedExampleConfig,
            gridRowWithButtonsExampleConfig,
            gridCustomCellTemplateExampleConfig,
            gridCustomCellTemplate2ExampleConfig,
            gridDataFormattingExampleConfig,
            gridRowColumnClassExampleConfig,
            gridNoResultExampleConfig,
            gridCustomHeaderTemplateExampleConfig,
            gridCustomFooterTemplateExampleConfig,
            gridCustomToolbarTemplateExampleConfig,
            gridI18nExampleConfig,
            gridRemoteDataExampleConfig,
          ],
        },
      },
      {
        path: 'api',
        component: GridApiComponent,
        pathMatch: 'full',
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./grid.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
    GridOverviewComponent,
    GridApiComponent,
    GridBasicComponent,
    GridColumnResizeComponent,
    GridContextMenuComponent,
    GridLoadingStatusComponent,
    GridHidePaginationComponent,
    GridSortableComponent,
    GridRowSelectableComponent,
    GridExpandableRowComponent,
    GridColumnHidingMovingComponent,
    GridColumnPinnableComponent,
    GridHoverStripedComponent,
    GridRowWithButtonsComponent,
    GridCustomCellTemplateComponent,
    GridCustomCellTemplate2Component,
    GridDataFormattingComponent,
    GridRowColumnClassComponent,
    GridNoResultComponent,
    GridCustomHeaderTemplateComponent,
    GridCustomFooterTemplateComponent,
    GridCustomToolbarTemplateComponent,
    GridI18nComponent,
    GridRemoteDataComponent,
  ],
})
export class GridModule {}
