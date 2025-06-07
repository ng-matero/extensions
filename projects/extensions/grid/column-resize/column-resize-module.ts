/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCommonModule } from '@angular/material/core';

import { MatColumnResize } from './column-resize-directives/column-resize';
import { MatColumnResizeFlex } from './column-resize-directives/column-resize-flex';
import { MatColumnResizeOverlayHandle } from './overlay-handle';
import { MatResizable } from './resizable-directives/resizable';

const ENTRY_COMMON_COMPONENTS = [MatColumnResizeOverlayHandle];

@NgModule({
  imports: ENTRY_COMMON_COMPONENTS,
  exports: ENTRY_COMMON_COMPONENTS,
})
export class MatColumnResizeCommonModule {}

const IMPORTS = [MatCommonModule, OverlayModule, MatColumnResizeCommonModule];

@NgModule({
  imports: [...IMPORTS, MatColumnResize, MatColumnResizeFlex, MatResizable],
  exports: [MatColumnResize, MatColumnResizeFlex, MatResizable],
})
export class MatColumnResizeModule {}
