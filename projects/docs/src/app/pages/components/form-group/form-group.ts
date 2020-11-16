import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import { FormGroupBasicComponent, formGroupBasicExampleConfig } from './examples/basic';

@Component({
  selector: 'app-form-group-overview',
  templateUrl: './form-group-overview.html',
})
export class FormGroupOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-form-group-api',
  templateUrl: './form-group-api.html',
})
export class FormGroupApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: FormGroupOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [formGroupBasicExampleConfig],
        },
      },
      {
        path: 'api',
        component: FormGroupApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [FormGroupOverviewComponent, FormGroupApiComponent, FormGroupBasicComponent],
})
export class FormGroupModule {}
