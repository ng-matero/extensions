/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
  selector: 'alert-demo',
  templateUrl: 'alert-demo.component.html',
  styleUrls: ['alert-demo.component.scss'],
})
export class AlertDemoComponent {
  onClosed(e: any) {
    console.log(e);
  }
}
