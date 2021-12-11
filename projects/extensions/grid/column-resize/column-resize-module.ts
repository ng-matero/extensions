/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { MatColumnResize } from './column-resize-directives/column-resize';
import { MatColumnResizeFlex } from './column-resize-directives/column-resize-flex';
import { MatResizable } from './resizable-directives/resizable';
import { MatColumnResizeOverlayHandle } from './overlay-handle';

const ENTRY_COMMON_COMPONENTS = [MatColumnResizeOverlayHandle];

@NgModule({
  declarations: ENTRY_COMMON_COMPONENTS,
  exports: ENTRY_COMMON_COMPONENTS,
})
export class MatColumnResizeCommonModule {}

const IMPORTS = [OverlayModule, MatColumnResizeCommonModule];

@NgModule({
  imports: IMPORTS,
  declarations: [MatColumnResize, MatColumnResizeFlex, MatResizable],
  exports: [MatColumnResize, MatColumnResizeFlex, MatResizable],
})
export class MatColumnResizeModule {}
