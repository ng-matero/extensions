import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NgSelectConfig {
  placeholder = '';
  fixedPlaceholder = false;
  notFoundText = 'No items found';
  typeToSearchText = 'Type to search';
  addTagText = 'Add item';
  loadingText = 'Loading...';
  clearAllText = 'Clear all';
  disableVirtualScroll = true;
  openOnEnter = true;
  appendTo = '';
  bindValue = '';
  bindLabel = '';
  appearance = 'underline';
  clearSearchOnAdd = false;
  deselectOnClick = false;
  tabFocusOnClear = true;
}
