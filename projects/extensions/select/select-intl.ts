import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { MTX_SELECT_DEFAULT_OPTIONS, MtxSelectDefaultOptions } from './select';

@Injectable({ providedIn: 'root' })
export class MtxSelectIntl {
  constructor(
    @Optional()
    @Inject(MTX_SELECT_DEFAULT_OPTIONS)
    private _defaultOptions?: MtxSelectDefaultOptions
  ) {}

  /**
   * Stream to emit from when labels are changed. Use this to notify components when the labels have
   * changed after initialization.
   */
  readonly changes = new Subject<void>();

  placeholder = this._defaultOptions?.placeholder;
  notFoundText = this._defaultOptions?.notFoundText ?? 'No items found';
  typeToSearchText = this._defaultOptions?.typeToSearchText ?? 'Type to search';
  addTagText = this._defaultOptions?.addTagText ?? 'Add item';
  loadingText = this._defaultOptions?.loadingText ?? 'Loading...';
  clearAllText = this._defaultOptions?.clearAllText ?? 'Clear all';
}
