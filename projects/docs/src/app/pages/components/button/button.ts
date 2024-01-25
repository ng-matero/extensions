import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared';
import { DocViewer } from '../../../shared/doc-viewer/doc-viewer';
import { ExampleViewer } from '../../../shared/example-viewer/example-viewer';
import {
  ButtonConfigurableComponent,
  buttonConfigurableExampleConfig,
} from './examples/configurable';

@Component({
  selector: 'app-button-overview',
  templateUrl: './button-overview.html',
  standalone: true,
  imports: [NgIf, NgFor, ExampleViewer, AsyncPipe],
})
export class ButtonOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-button-api',
  templateUrl: './button-api.html',
  standalone: true,
  imports: [NgIf, DocViewer, AsyncPipe],
})
export class ButtonApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: ButtonOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [buttonConfigurableExampleConfig],
        },
      },
      {
        path: 'api',
        component: ButtonApiComponent,
        pathMatch: 'full',
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./button.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
    ButtonOverviewComponent,
    ButtonApiComponent,
    ButtonConfigurableComponent,
  ],
})
export class ButtonModule {}
