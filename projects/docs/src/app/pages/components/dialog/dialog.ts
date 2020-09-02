import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@shared';

import { DialogBasicComponent, dialogBasicExampleConfig } from './examples/basic';
import {
  DialogOriginalComponent,
  dialogOriginalExampleConfig,
  DialogOverviewExampleComponent,
} from './examples/original';

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
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: DialogOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [dialogBasicExampleConfig, dialogOriginalExampleConfig],
        },
      },
      {
        path: 'api',
        component: DialogApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [
    DialogOverviewComponent,

    DialogBasicComponent,
    DialogOriginalComponent,
    DialogOverviewExampleComponent,
  ],
})
export class DialogModule {}
