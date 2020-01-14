/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { AlertDemoComponent } from './alert-demo.component';

@NgModule({
  imports: [MtxAlertModule, RouterModule.forChild([{ path: '', component: AlertDemoComponent }])],
  declarations: [AlertDemoComponent],
})
export class AlertDemoModule {}
