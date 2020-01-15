import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { AlertDemoComponent } from './alert-demo.component';

@NgModule({
  imports: [MtxAlertModule, RouterModule.forChild([{ path: '', component: AlertDemoComponent }])],
  declarations: [AlertDemoComponent],
})
export class AlertDemoModule {}
