import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MtxAlert } from '@ng-matero/extensions/alert';
import { SharedModule } from '../../../shared';
import { DocHeadingComponent } from '../../../shared/doc-heading/doc-heading';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import { SelectBasicComponent, selectBasicExampleConfig } from './examples/basic';
import {
  SelectCustomLabelTemplateComponent,
  selectCustomLabelTemplateExampleConfig,
} from './examples/custom-label-template';
import {
  SelectCustomOptgroupTemplateComponent,
  selectCustomOptgroupTemplateExampleConfig,
} from './examples/custom-optgroup-template';
import {
  SelectCustomOptionTemplateComponent,
  selectCustomOptionTemplateExampleConfig,
} from './examples/custom-option-template';
import { SelectOptionComponent, selectOptionExampleConfig } from './examples/mtx-option';

@Component({
  selector: 'app-select-overview',
  templateUrl: './select-overview.html',
  styles: [
    `
      :host {
        position: relative;
        display: block;
      }
    `,
  ],
  standalone: true,
  imports: [MtxAlert, NgIf, NgFor, DocHeadingComponent, ExampleViewer, AsyncPipe],
})
export class SelectOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-select-api',
  templateUrl: './select-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class SelectApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: SelectOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [
            selectBasicExampleConfig,
            selectOptionExampleConfig,
            selectCustomLabelTemplateExampleConfig,
            selectCustomOptionTemplateExampleConfig,
            selectCustomOptgroupTemplateExampleConfig,
          ],
        },
      },
      {
        path: 'api',
        component: SelectApiComponent,
        pathMatch: 'full',
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./select.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
    SelectOverviewComponent,
    SelectApiComponent,
    SelectBasicComponent,
    SelectOptionComponent,
    SelectCustomLabelTemplateComponent,
    SelectCustomOptionTemplateComponent,
    SelectCustomOptgroupTemplateComponent,
  ],
})
export class SelectModule {}
