import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DocHeadingComponent } from '../../../shared/doc-heading/doc-heading';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { gridBasicExampleConfig } from './examples/basic';
import { gridColumnHidingMovingExampleConfig } from './examples/column-hiding-moving';
import { gridColumnPinnableExampleConfig } from './examples/column-pinnable';
import { gridColumnResizeExampleConfig } from './examples/column-resize';
import { gridContextMenuExampleConfig } from './examples/context-menu';
import { gridCustomCellTemplateExampleConfig } from './examples/custom-cell-template';
import { gridCustomCellTemplate2ExampleConfig } from './examples/custom-cell-template-2';
import { gridCustomFooterTemplateExampleConfig } from './examples/custom-footer-template';
import { gridCustomHeaderTemplateExampleConfig } from './examples/custom-header-template';
import { gridCustomToolbarTemplateExampleConfig } from './examples/custom-toolbar-template';
import { gridDataFormattingExampleConfig } from './examples/data-formatting';
import { gridExpandableRowExampleConfig } from './examples/expandable-row';
import { gridHidePaginationExampleConfig } from './examples/hide-pagination';
import { gridHoverStripedExampleConfig } from './examples/hover-striped';
import { gridI18nExampleConfig } from './examples/i18n';
import { gridLoadingStatusExampleConfig } from './examples/loading-status';
import { gridNoResultExampleConfig } from './examples/no-result';
import { gridRemoteDataExampleConfig } from './examples/remote-data';
import { gridRowColumnClassExampleConfig } from './examples/row-column-class';
import { gridRowSelectableExampleConfig } from './examples/row-selectable';
import { gridRowWithButtonsExampleConfig } from './examples/row-with-buttons';
import { gridSortableExampleConfig } from './examples/sortable';

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

export const routes: Routes = [
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
];
