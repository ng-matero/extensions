# Data Grid

## API reference for Material Extensions grid

`import { MtxGridModule } from '@ng-matero/extensions/grid';`

### Directives

#### `MtxGrid`

Selector: `[mtx-grid]`

Exported as: `mtxGrid`

##### Properties

###### Basic

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`columns: MtxGridColumn[]` | The grid's columns. |
| `@Input()`<br>`data: any[]` | The grid's data. |
| `@Input()`<br>`length: number` | The total number of the data. Default is **`0`**. |
| `@Input()`<br>`loading: boolean` | Whether the grid is loading. Default is **`false`**. |
| `@Input()`<br>`trackBy: TrackByFunction<any>` | Tracking function that will be used to check the differences in data changes. |
| `@Input()`<br>`columnResizable: boolean` | Whether the column is resizable. Default is **`false`**. |
| `@Input()`<br>`emptyValuePlaceholder: string` | Placeholder for the empty value (`null`, `''`, `[]`). Default is **`--`**. |

###### Page

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`pageOnFront: boolean` | Whether to paginate the data on front end. Default is **`true`**. |
| `@Input()`<br>`showPaginator: boolean` | Whether to show the paginator. Default is **`true`**. |
| `@Input()`<br>`pageDisabled: boolean` | Whether the paginator is disabled. Default is **`false`**. |
| `@Input()`<br>`showFirstLastButtons: boolean` | Whether to show the first/last buttons UI to the user. Default is **`true`**. |
| `@Input()`<br>`pageIndex: number` | The zero-based page index of the displayed list of items. Default is **`0`**. |
| `@Input()`<br>`pageSize: number` | Number of items to display on a page. Default is **`10`**. |
| `@Input()`<br>`pageSizeOptions: number[]` | The set of provided page size options to display to the user. Default is **`[10, 50, 100]`** |
| `@Input()`<br>`hidePageSize: boolean` | Whether to hide the page size selection UI from the user. Default is **`false`**. |
| `@Output()`<br>`page: EventEmitter<PageEvent>` | Event emitted when the paginator changes the page size or page index. |
| `@Input()`<br>`paginationTemplate: TemplateRef<any>` | The template for the pagination. |

###### Sort

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`sortOnFront: boolean` | Whether to sort the data on front end. Default is **`true`**. |
| `@Input()`<br>`sortActive: string` | The id of the most recently sorted MatSortable. |
| `@Input()`<br>`sortDirection: SortDirection` | The sort direction of the currently active MatSortable. |
| `@Input()`<br>`sortDisableClear: boolean` | Whether to disable the user from clearing the sort by finishing the sort direction cycle. May be overriden by the column's `disableClear` in `sortProp`. Default is **`false`**. |
| `@Input()`<br>`sortDisabled: boolean` | Whether the sort is disabled. Default is **`false`**. |
| `@Input()`<br>`sortStart: 'asc' \| 'desc'` | The direction to set when an MatSortable is initially sorted. May be overriden by the column's `start` in `sortProp`. Default is **`asc`**. |
| `@Output()`<br>`sortChange: EventEmitter<sort>` | Event emitted when the user changes either the active sort or sort direction. |

###### Expansion

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`expandable: boolean` | Whether the row is expandable. Default is **`false`**. |
| `@Input()`<br>`expansionTemplate: TemplateRef<any>` | The template for the expandable row. |
| `@Output()`<br>`expansionChange: EventEmitter<any>` | Event emitted when the user toggles the expandable row. |

###### Selection

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`multiSelectable: boolean` | Whether to support multiple row/cell selection. Default is **`true`**. |
| `@Input()`<br>`multiSelectionWithClick: boolean` | Whether the user can select multiple rows with click. Default is **`false`**. |
| `@Input()`<br>`rowSelectable: boolean` | Whether the row is selectable. Default is **`false`**. |
| `@Input()`<br>`rowSelected: any[]` | The selected row items. Default is **`[]`**. |
| `@Input()`<br>`hideRowSelectionCheckbox: boolean` | Whether to hide the row selection checkbox. Default is **`false`**. |
| `@Input()`<br>`disableRowClickSelection: boolean` | Whether disable rows to be selected when clicked. Default is **`false`**. |
| `@Input()`<br>`rowSelectionFormatter: MtxGridRowSelectionFormatter` | The formatter to disable the row selection or hide the row's checkbox. |
| `@Output()`<br>`rowClassFormatter: MtxGridRowClassFormatter` | The formatter to set the row's class. |
| `@Output()`<br>`rowSelectedChange: EventEmitter<any>` | Event emitted when the row is selected. |
| `@Input()`<br>`cellSelectable: boolean` | Whether the cell is selectable. Default is **`true`**. |
| `@Output()`<br>`cellSelectedChange: EventEmitter<any>` | Event emitted when the cell is selected. |

###### Toolbar

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`showToolbar: boolean` | Whether to show the toolbar. Default is **`false`**. |
| `@Input()`<br>`toolbarTitle: string` | The text of the toolbar's title. Default is **`''`**. |
| `@Input()`<br>`toolbarTemplate: TemplateRef<any>` | The template for the toolbar . |

###### Column menu

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`columnHideable: boolean` | Whether the column is hideable. Default is **`true`**. |
| `@Input()`<br>`columnHideableChecked: 'show' \| 'hide'` | Hide or show when the column's checkbox is checked. Default is **`'show'`**. |
| `@Input()`<br>`columnSortable: boolean` | Whether the column is sortable. Default is **`true`**. |
| `@Input()`<br>`columnPinnable: boolean` | Whether the column is pinnable. Default is **`true`**. |
| `@Output()`<br>`columnChange: EventEmitter<string[]>` | Event emitted when the column is hided or is sorted. |
| `@Input()`<br>`showColumnMenuHeader: boolean` | Whether to show the column-menu's header. Default is **`false`**. |
| `@Input()`<br>`columnMenuHeaderText: string` | The text for the column-menu's header. Default is **`'Columns Header'`** |
| `@Input()`<br>`columnMenuHeaderTemplate: TemplateRef<any>` | The template for the column-menu's header. |
| `@Input()`<br>`showColumnMenuFooter: boolean` | Whether to show the column-menu's footer. Default is **`false`** |
| `@Input()`<br>`columnMenuFooterText: string` | The text for the column-menu's footer. Default is **`'Columns Footer'`** |
| `@Input()`<br>`columnMenuFooterTemplate: TemplateRef<any>` | The template for the column-menu's footer. |
| `@Input()`<br>`showColumnMenuButton: boolean` | Whether to show the column menu button. Default is **`true`**. |
| `@Input()`<br>`columnMenuButtonText: string` | The text for the column menu button. Default is **`''`**. |
| `@Input()`<br>`columnMenuButtonType: MtxGridButtonType` | The type for the column menu button. Default is **`'stroked'`**. |
| `@Input()`<br>`columnMenuButtonColor: string` | The color for the column menu button. Default is **`''`**. |
| `@Input()`<br>`columnMenuButtonClass: string` | The class for the column menu button. Default is **`''`**. |
| `@Input()`<br>`columnMenuButtonIcon: string` | The icon for the column menu button. Default is **`''`**. |
| `@Input()`<br>`columnPinOptions: MtxGridColumnPinOption[]` | The options for the column pin list. |

###### Row

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`rowHover: boolean` | Whether to use the row hover style. Default is **`false`**. |
| `@Input()`<br>`rowStriped: boolean` | Whether to use the row striped style. Default is **`false`**. |
| `@Output()`<br>`rowClick: EventEmitter<any>;` | Event emitted when the user clicks the row. |
| `@Output()`<br>`rowContextMenu: EventEmitter<any>;` | Event emitted when the user attempts to open a context menu. |
| `@Input()`<br>`useContentRowTemplate: boolean` | Whether to use custom row template. If true, you should define a `matRowDef`. Default is **`false`**. |

###### Cell templates

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`headerTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The header's cell template for the grid. |
| `@Input()`<br>`headerExtraTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The header's cell template for the grid exclude sort. |
| `@Input()`<br>`cellTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The cell template for the grid. |

###### Summary

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`showSummary: boolean` | Whether to show the summary. Default is **`false`**. |
| `@Input()`<br>`summaryTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The template for the summary . |

###### No result

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`noResultText: string` | The displayed text for the empty data. Default is **`'No records found'`**. |
| `@Input()`<br>`noResultTemplate: TemplateRef<any>` | The template for the empty data. |

###### Sidebar

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`showSidebar: boolean` | Whether to show the sidebar. Default is **`false`**. |
| `@Input()`<br>`sidebarTemplate: TemplateRef<any>` | The template for the sidebar. |

###### Status bar

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`showStatusbar: boolean` | Whether to show the status bar. Default is **`false`**. |
| `@Input()`<br>`statusbarTemplate: TemplateRef<any>` | The template for the status bar . |

### Interfaces

#### `MtxGridColumn`

```ts
interface MtxGridColumn<T = any> {
  field: string;
  header?: string | Observable<string>;
  hide?: boolean;
  show?: boolean;
  disabled?: boolean;
  pinned?: MtxGridColumnPinValue;
  left?: string;
  right?: string;
  width?: string;
  resizable?: boolean;
  minWidth?: number;
  maxWidth?: number;
  sortable?: boolean | string;
  sortProp?: MtxGridSortProp;
  type?: MtxGridColumnType;
  typeParameter?: MtxGridColumnTypeParameter;
  tag?: MtxGridColumnTag;
  buttons?: MtxGridColumnButton<T>[] | ((rowData: T) => MtxGridColumnButton<T>[]);
  formatter?: (rowData: T, colDef?: MtxGridColumn) => any;
  cellTemplate?: TemplateRef<any> | null;
  showExpand?: boolean;
  description?: string;
  summary?: ((data: T[], colDef?: MtxGridColumn) => any) | string;
  class?: string | ((rowData?: T, colDef?: MtxGridColumn) => string);
}
```

#### `MtxGridColumnPinOption`

```ts
interface MtxGridColumnPinOption {
  label: string | Observable<string>;
  value: MtxGridColumnPinValue;
}
```

#### `MtxGridColumnTypeParameter`

```ts
interface MtxGridColumnTypeParameter {
  currencyCode?: string;
  display?: string | boolean;
  digitsInfo?: string;
  format?: string;
  locale?: string;
  timezone?: string;
}
```

#### `MtxGridSortProp`

```ts
interface MtxGridSortProp {
  arrowPosition?: 'before' | 'after';
  disableClear?: boolean;
  id?: string;
  start?: 'asc' | 'desc';
}
```

#### `MtxGridColumnButton`

```ts
interface MtxGridColumnButton<T = any> {
  type?: MtxGridButtonType;
  text?: string | Observable<string>;
  icon?: string;
  fontIcon?: string;
  svgIcon?: string;
  color?: ThemePalette;
  class?: string;
  disabled?: boolean | ((rowData: T) => boolean);
  click?: (rowData: T) => void;
  iif?: (rowData: T) => boolean;
  pop?: string | Observable<string> | MtxGridColumnButtonPop;
  tooltip?: string | Observable<string> | MtxGridColumnButtonTooltip;
  badge?: number | string | Observable<string> | MtxGridColumnButtonBadge;
}
```

#### `MtxGridColumnButtonPop`

```ts
export interface MtxGridColumnButtonPop {
  title: string | Observable<string>;
  description?: string | Observable<string>;
  okColor?: ThemePalette;
  okText?: string | Observable<string>;
  closeColor?: ThemePalette;
  closeText?: string | Observable<string>;
}
```

#### `MtxGridColumnButtonTooltip`

```ts
export interface MtxGridColumnButtonTooltip {
  message: string | Observable<string>;
  position?: TooltipPosition;
  positionAtOrigin?: boolean;
  class?: any;
  hideDelay?: number;
  showDelay?: number;
  touchGestures?: TooltipTouchGestures;
  disabled?: boolean;
}
```

#### `MtxGridColumnButtonBadge`

```ts
export interface MtxGridColumnButtonBadge {
  content: number | string | Observable<string>;
  description?: string | Observable<string>;
  color?: ThemePalette;
  position?: MatBadgePosition;
  size?: MatBadgeSize;
  overlap?: boolean;
  disabled?: boolean;
  hidden?: boolean;
}
```

#### `MtxGridColumnTag`

```ts
interface MtxGridColumnTag {
  [key: number]: MtxGridColumnTagValue;
  [key: string]: MtxGridColumnTagValue;
}
```

#### `MtxGridColumnTagValue`

```ts
interface MtxGridColumnTagValue {
  text?: string;
  color?: string;
}
```

#### `MtxGridRowSelectionFormatter`

```ts
interface MtxGridRowSelectionFormatter<T = any> {
  disabled?: (rowData: T, index: number) => boolean;
  hideCheckbox?: (rowData: T, index: number) => boolean;
}
```

#### `MtxGridRowClassFormatter`

```ts
interface MtxGridRowClassFormatter<T = any> {
  [className: string]: (rowData: T, index: number) => boolean;
}
```

#### `MtxGridDefaultOptions`

```ts
interface MtxGridDefaultOptions {
  columnResizable?: boolean;
  emptyValuePlaceholder?: string;

  pageOnFront?: boolean;
  showPaginator?: boolean;
  pageDisabled?: boolean;
  showFirstLastButtons?: boolean;
  pageIndex?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  hidePageSize?: boolean;

  sortOnFront?: boolean;
  sortActive?: string;
  sortDirection?: SortDirection;
  sortDisableClear?: boolean;
  sortDisabled?: boolean;
  sortStart?: 'asc' | 'desc';

  rowHover?: boolean;
  rowStriped?: boolean;

  multiSelectable?: boolean;
  multiSelectionWithClick?: boolean;
  rowSelectable?: boolean;
  hideRowSelectionCheckbox?: boolean;
  disableRowClickSelection?: boolean;

  cellSelectable?: boolean;

  showToolbar?: boolean;
  toolbarTitle?: string;

  columnHideable?: boolean;
  columnHideableChecked?: 'show' | 'hide';
  columnSortable?: boolean;
  columnPinnable?: boolean;
  columnPinOptions?: MtxGridColumnPinOption[];

  showColumnMenuButton?: boolean;
  columnMenuButtonText?: string;
  columnMenuButtonType?: MtxGridButtonType;
  columnMenuButtonColor?: ThemePalette;
  columnMenuButtonClass?: string;
  columnMenuButtonIcon?: string;

  showColumnMenuHeader?: boolean;
  columnMenuHeaderText?: string;
  showColumnMenuFooter?: boolean;
  columnMenuFooterText?: string;

  noResultText?: string;
}
```

### Type aliases

#### `MtxGridColumnType`

```ts
type MtxGridColumnType = 'tag' | 'button' | 'link' | 'image' | 'boolean' | 'number' | 'currency' | 'percent' | 'date';
```

#### `MtxGridColumnPinValue`

```ts
type MtxGridColumnPinValue = 'left' | 'right' | null;
```


#### `MtxGridButtonType`

```ts
type MtxGridButtonType = 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab';
```

### Constants

#### `MTX_GRID_DEFAULT_OPTIONS`

Injection token that can be used to specify default grid options.

```ts
const MTX_GRID_DEFAULT_OPTIONS: InjectionToken<() => MtxGridDefaultOptions>;
```
