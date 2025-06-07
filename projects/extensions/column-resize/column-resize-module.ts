/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import { NgModule } from '@angular/core';

import { CdkColumnResize } from './column-resize-directives/column-resize';
import { CdkColumnResizeFlex } from './column-resize-directives/column-resize-flex';

/**
 * One of two NgModules for use with CdkColumnResize.
 * When using this module, columns are not resizable by default.
 */
@NgModule({
  imports: [CdkColumnResize, CdkColumnResizeFlex],
  exports: [CdkColumnResize, CdkColumnResizeFlex],
})
export class CdkColumnResizeModule {}
