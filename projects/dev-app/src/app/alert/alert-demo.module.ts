import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxAlertModule } from '@ng-matero/extensions/alert';

import { AlertDemoComponent } from './alert-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: AlertDemoComponent }]),
    MtxAlertModule,
  ],
  declarations: [AlertDemoComponent],
})
export class AlertDemoModule {}
