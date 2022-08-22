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
| `@Input()`<br>`columns: MtxGridColumn[]` | The grid columns defination. |
| `@Input()`<br>`data: any[]` | The grid data source. |
| `@Input()`<br>`length: number` | The length of the total number of data. Default is **`0`**. |
| `@Input()`<br>`loading: boolean` | Whether the table loading is ended. Default is **`false`**. |
| `@Input()`<br>`trackBy: TrackByFunction<any>` | Tracking function that will be used to check the differences in data changes. |
| `@Input()`<br>`columnResizable: boolean` | Whether the column can be resized. Default is **`false`**. |

###### Page

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`pageOnFront: boolean` | Whether paging the data just on front end. Default is **`true`**. |
| `@Input()`<br>`showPaginator: boolean` | Whether show the paginator. Default is **`true`**. |
| `@Input()`<br>`pageDisabled: boolean` | Whether the paginator is disabled. Default is **`false`**. |
| `@Input()`<br>`showFirstLastButtons: boolean` | Whether to show the first/last buttons UI to the user. Default is **`true`**. |
| `@Input()`<br>`pageIndex: number` | The zero-based page index of the displayed list of items. Default is **`0`**. |
| `@Input()`<br>`pageSize: number` | Number of items to display on a page. Default is **`10`**. |
| `@Input()`<br>`pageSizeOptions: number[]` | The set of provided page size options to display to the user. Default is **`[10, 50, 100]`** |
| `@Input()`<br>`hidePageSize: boolean` | Whether hide the pagesize. Default is **`false`**. |
| `@Output()`<br>`page: EventEmitter<PageEvent>` | Event emitted when the paginator changes the page size or page index. |
| `@Input()`<br>`paginationTemplate: TemplateRef<any>` | The pagination template. |

###### Sort

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`sortOnFront: boolean` | Whether sort data just on front end. Default is **`true`**. |
| `@Input()`<br>`sortActive: string` | The id of the most recently sorted MatSortable. |
| `@Input()`<br>`sortDirection: SortDirection` | The sort direction of the currently active MatSortable. |
| `@Input()`<br>`sortDisableClear: boolean` | Whether to disable the user from clearing the sort by finishing the sort direction cycle. May be overriden by the column's disable clear definition. Default is **`false`**. |
| `@Input()`<br>`sortDisabled: boolean` | Whether the grid sort is disabled. Default is **`false`**. |
| `@Input()`<br>`sortStart: 'asc' \| 'desc'` | The direction to set when an MatSortable is initially sorted. May be overriden by the column's sort definition. Default is **`asc`**. |
| `@Output()`<br>`sortChange: EventEmitter<sort>` | Event emitted when the user changes either the active sort or sort direction. |

###### Expansion

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`expandable: boolean` | Whether the row can be expanded. Default is **`false`**. |
| `@Input()`<br>`expansionTemplate: TemplateRef<any>` | The template of expandable row. |
| `@Output()`<br>`expansionChange: EventEmitter<any>` | Event emitted when the user toggle the expandable row. |

###### Selection

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`multiSelectable: boolean` | Whether the user can selecte multiple row. Default is **`true`**. |
| `@Input()`<br>`multiSelectionWithClick: boolean` | Whether the user can selecte multiple row with clicks. Default is **`false`**. |
| `@Input()`<br>`rowSelectable: boolean` | Whether the row can be selectable. Default is **`false`**. |
| `@Input()`<br>`rowSelected: any[]` | The row selected items default. Default is **`[]`**. |
| `@Input()`<br>`hideRowSelectionCheckbox: boolean` | Whether hide the row selection checkbox. Default is **`false`**. |
| `@Input()`<br>`rowSelectionFormatter: MtxGridRowSelectionFormatter` | The row selection formatter to set disabled and checkbox hiding. |
| `@Output()`<br>`rowClassFormatter: MtxGridRowClassFormatter` | The row class formatter to set class. |
| `@Output()`<br>`rowSelectionChange: EventEmitter<any>` | Event emitted when the row be selected. |
| `@Input()`<br>`cellSelectable: boolean` | Whether the cell can be selectable. Default is **`true`**. |
| `@Output()`<br>`cellSelectionChange: EventEmitter<any>` | Event emitted when the cell be selected. |

###### Toolbar

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`showToolbar: boolean` | Whether show the grid toolbar. Default is **`false`**. |
| `@Input()`<br>`toolbarTitle: string` | The toolbar title. Default is **`''`**. |
| `@Input()`<br>`toolbarTemplate: TemplateRef<any>` | The toolbar template. |

###### Column menu

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`columnHideable: boolean` | Whether the column can be hiding. Default is **`true`**. |
| `@Input()`<br>`columnHideableChecked: 'show' \| 'hide'` | Hide or show when column hiding checkbox be checked. Default is **`'show'`**. |
| `@Input()`<br>`columnSortable: boolean` | Whether the column can be sorting. Default is **`true`**. |
| `@Input()`<br>`columnPinnable: boolean` | Whether the column can be fixed. Default is **`true`**. |
| `@Output()`<br>`columnChange: EventEmitter<string[]>` | Event emitted when the column be hided or be resorted. |
| `@Input()`<br>`showColumnMenuHeader: boolean` | Whether show header of column menu. Default is **`false`**. |
| `@Input()`<br>`columnMenuHeaderText: string` | The header text of column menu. Default is **`'Columns Header'`** |
| `@Input()`<br>`columnMenuHeaderTemplate: TemplateRef<any>` | The header template of column menu. |
| `@Input()`<br>`showColumnMenuFooter: boolean` | Whether show footer of column menu. Default is **`false`** |
| `@Input()`<br>`columnMenuFooterText: string` | The header text of column menu. Default is **`'Columns Footer'`** |
| `@Input()`<br>`columnMenuFooterTemplate: TemplateRef<any>` | The footer template of column menu. |
| `@Input()`<br>`showColumnMenuButton: boolean` | Whether show column menu button. Default is **`true`**. |
| `@Input()`<br>`columnMenuButtonText: string` | The column menu button text. Default is **`''`**. |
| `@Input()`<br>`columnMenuButtonType: 'raised' \| 'stroked' \| 'flat' \| 'icon' \| 'fab' \| 'mini-fab' \| ''` | The column menu button type. Default is **`'stroked'`**. |
| `@Input()`<br>`columnMenuButtonColor: string` | The column menu button color. Default is **`''`**. |
| `@Input()`<br>`columnMenuButtonClass: string` | The column menu button class. Default is **`''`**. |
| `@Input()`<br>`columnMenuButtonIcon: string` | The column menu button icon. Default is **`''`**. |
| `@Input()`<br>`columnPinOptions: MtxGridColumnPinOption[]` | The column pin options. |

###### Row

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`rowHover: boolean` | Whether use hover style. Default is **`false`**. |
| `@Input()`<br>`rowStriped: boolean` | Whether use striped style. Default is **`false`**. |
| `@Output()`<br>`rowClick: EventEmitter<any>;` | Row click event. |
| `@Input()`<br>`useContentRowTemplate: boolean` | Whether use custom row template. If true, you should define a `matRowDef`. Default is **`false`**. |

###### Cell templates

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`headerTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The grid header cell template. |
| `@Input()`<br>`headerExtraTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The grid header cell template exclude sort. |
| `@Input()`<br>`cellTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The grid body cell template. |

###### Summary

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`showSummary: boolean` | Whether show summary. Default is **`false`**. |
| `@Input()`<br>`summaryTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The summary template. |

###### No result

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`noResultText: string` | The no result text. Default is **`'No records found'`**. |
| `@Input()`<br>`noResultTemplate: TemplateRef<any>` | The no result template. |

###### Sidebar

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`showSidebar: boolean` | Whether show sidebar. Default is **`false`**. |
| `@Input()`<br>`sidebarTemplate: TemplateRef<any>` | The sidebar template. |

###### Status bar

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`showStatusbar: boolean` | Whether show status bar. Default is **`false`**. |
| `@Input()`<br>`statusbarTemplate: TemplateRef<any>` | The status bar template. |

### Interfaces

#### `MtxGridColumn`

```ts
interface MtxGridColumn {
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
  buttons?: MtxGridColumnButton[];
  formatter?: (rowData: any, colDef?: MtxGridColumn) => void;
  cellTemplate?: TemplateRef<any> | null;
  showExpand?: boolean;
  description?: string;
  summary?: ((data: any[], colDef?: MtxGridColumn) => void) | string;
  class?: string;
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
interface MtxGridColumnButton {
  type?: 'basic' | 'icon';
  text?: string | Observable<string>;
  icon?: string;
  color?: ThemePalette;
  class?: string;
  disabled?: boolean | ((rowData: any) => boolean);
  click?: (rowData: any) => void;
  iif?: (rowData: any) => boolean;
  pop?: MtxGridColumnButtonPop;
  tooltip?: string | Observable<string> | MtxGridColumnButtonTooltip;
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
  class?: any;
  hideDelay?: number;
  showDelay?: number;
  touchGestures?: TooltipTouchGestures;
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
interface MtxGridRowSelectionFormatter {
  disabled?: (rowData: any) => boolean;
  hideCheckbox?: (rowData: any) => boolean;
}
```

#### `MtxGridRowClassFormatter`

```ts
interface MtxGridRowClassFormatter {
  [className: string]: (rowData: any, index?: number) => boolean;
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
