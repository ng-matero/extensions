/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Provider } from '@angular/core';

import {
  ColumnResize,
  ColumnResizeNotifier,
  ColumnResizeNotifierSource,
  HeaderRowEventDispatcher,
} from '@ng-matero/extensions/column-resize';

import {
  TABLE_LAYOUT_FIXED_RESIZE_STRATEGY_PROVIDER,
  FLEX_RESIZE_STRATEGY_PROVIDER,
} from '../resize-strategy';

const PROVIDERS: Provider[] = [
  ColumnResizeNotifier,
  HeaderRowEventDispatcher,
  ColumnResizeNotifierSource,
];
export const TABLE_PROVIDERS: Provider[] = [
  ...PROVIDERS,
  TABLE_LAYOUT_FIXED_RESIZE_STRATEGY_PROVIDER,
];
export const FLEX_PROVIDERS: Provider[] = [...PROVIDERS, FLEX_RESIZE_STRATEGY_PROVIDER];

export const TABLE_HOST_BINDINGS = {
  class: 'mat-column-resize-table',
};
export const FLEX_HOST_BINDINGS = {
  class: 'mat-column-resize-flex',
};

export abstract class AbstractMatColumnResize extends ColumnResize {
  getTableHeight() {
    const table = this.elementRef.nativeElement;
    const tableParent = table.parentNode as HTMLElement;
    const isTableContainer = tableParent.classList.contains('mat-table-container');
    return isTableContainer ? tableParent.offsetHeight : table.offsetHeight;
  }
}
