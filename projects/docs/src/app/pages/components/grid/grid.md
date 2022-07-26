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
| @Input() `columns: MtxGridColumn[]` | The grid columns defination. |
| @Input() `data: any[]` | The grid data source. |
| @Input() `length: number` | The length of the total number of data. Default is **`0`**. |
| @Input() `loading: boolean` | Whether the table loading is ended. Default is **`false`**. |
| @Input() `trackBy: TrackByFunction<any>` | Tracking function that will be used to check the differences in data changes. |
| @Input() `columnResizable: boolean` | Whether the column can be resized. Default is **`false`**. |

###### Page

| Name | Description |
| :--- | :--- |
| @Input() `pageOnFront: boolean` | Whether paging the data just on front end. Default is **`true`**. |
| @Input() `showPaginator: boolean` | Whether show the paginator. Default is **`true`**. |
| @Input() `pageDisabled: boolean` | Whether the paginator is disabled. Default is **`false`**. |
| @Input() `showFirstLastButtons: boolean` | Whether to show the first/last buttons UI to the user. Default is **`true`**. |
| @Input() `pageIndex: number` | The zero-based page index of the displayed list of items. Default is **`0`**. |
| @Input() `pageSize: number` | Number of items to display on a page. Default is **`10`**. |
| @Input() `pageSizeOptions: number[]` | The set of provided page size options to display to the user. Default is **`[10, 50, 100]`** |
| @Input() `hidePageSize: boolean` | Whether hide the pagesize. Default is **`false`**. |
| @Output() `page: EventEmitter<PageEvent>` | Event emitted when the paginator changes the page size or page index. |
| @Input() `paginationTemplate: TemplateRef<any>` | The pagination template. |

###### Sort

| Name | Description |
| :--- | :--- |
| @Input() `sortOnFront: boolean` | Whether sort data just on front end. Default is **`true`**. |
| @Input() `sortActive: string` | The id of the most recently sorted MatSortable. |
| @Input() `sortDirection: SortDirection` | The sort direction of the currently active MatSortable. |
| @Input() `sortDisableClear: boolean` | Whether to disable the user from clearing the sort by finishing the sort direction cycle. May be overriden by the column's disable clear definition. Default is **`false`**. |
| @Input() `sortDisabled: boolean` | Whether the grid sort is disabled. Default is **`false`**. |
| @Input() `sortStart: 'asc' \| 'desc'` | The direction to set when an MatSortable is initially sorted. May be overriden by the column's sort definition. Default is **`asc`**. |
| @Output() `sortChange: EventEmitter<sort>` | Event emitted when the user changes either the active sort or sort direction. |

###### Expansion

| Name | Description |
| :--- | :--- |
| @Input() `expandable: boolean` | Whether the row can be expanded. Default is **`false`**. |
| @Input() `expansionTemplate: TemplateRef<any>` | The template of expandable row. |
| @Output() `expansionChange: EventEmitter<any>` | Event emitted when the user toggle the expandable row. |

###### Selection

| Name | Description |
| :--- | :--- |
| @Input() `multiSelectable: boolean` | Whether the user can selecte multiple row. Default is **`true`**. |
| @Input() `multiSelectionWithClick: boolean` | Whether the user can selecte multiple row with clicks. Default is **`false`**. |
| @Input() `rowSelectable: boolean` | Whether the row can be selectable. Default is **`false`**. |
| @Input() `rowSelected: any[]` | The row selected items default. Default is **`[]`**. |
| @Input() `hideRowSelectionCheckbox: boolean` | Whether hide the row selection checkbox. Default is **`false`**. |
| @Input() `rowSelectionFormatter: MtxGridRowSelectionFormatter` | The row selection formatter to set disabled and checkbox hiding. |
| @Output()`rowClassFormatter: MtxGridRowClassFormatter` | The row class formatter to set class. |
| @Output()`rowSelectionChange: EventEmitter<any>` | Event emitted when the row be selected. |
| @Input() `cellSelectable: boolean` | Whether the cell can be selectable. Default is **`true`**. |
| @Output() `cellSelectionChange: EventEmitter<any>` | Event emitted when the cell be selected. |

###### Toolbar

| Name | Description |
| :--- | :--- |
| @Input() `showToolbar: boolean` | Whether show the grid toolbar. Default is **`false`**. |
| @Input() `toolbarTitle: string` | The toolbar title. Default is **`''`**. |
| @Input() `toolbarTemplate: TemplateRef<any>` | The toolbar template. |

###### Column menu

| Name | Description |
| :--- | :--- |
| @Input() `columnHideable: boolean` | Whether the column can be hiding. Default is **`true`**. |
| @Input() `columnHideableChecked: 'show' \| 'hide'` | Hide or show when column hiding checkbox be checked. Default is **`'show'`**. |
| @Input() `columnSortable: boolean` | Whether the column can be sorting. Default is **`true`**. |
| @Input() `columnPinnable: boolean` | Whether the column can be fixed. Default is **`true`**. |
| @Output() `columnChange: EventEmitter<string[]>` | Event emitted when the column be hided or be resorted. |
| @Input() `showColumnMenuHeader: boolean` | Whether show header of column menu. Default is **`false`**. |
| @Input() `columnMenuHeaderText: string` | The header text of column menu. Default is **`'Columns Header'`** |
| @Input() `columnMenuHeaderTemplate: TemplateRef<any>` | The header template of column menu. |
| @Input() `showColumnMenuFooter: boolean` | Whether show footer of column menu. Default is **`false`** |
| @Input() `columnMenuFooterText: string` | The header text of column menu. Default is **`'Columns Footer'`** |
| @Input() `columnMenuFooterTemplate: TemplateRef<any>` | The footer template of column menu. |
| @Input() `showColumnMenuButton: boolean` | Whether show column menu button. Default is **`true`**. |
| @Input() `columnMenuButtonText: string` | The column menu button text. Default is **`''`**. |
| @Input() `columnMenuButtonType: 'raised' \| 'stroked' \| 'flat' \| 'icon' \| 'fab' \| 'mini-fab' \| ''` | The column menu button type. Default is **`'stroked'`**. |
| @Input() `columnMenuButtonColor: string` | The column menu button color. Default is **`''`**. |
| @Input() `columnMenuButtonClass: string` | The column menu button class. Default is **`''`**. |
| @Input() `columnMenuButtonIcon: string` | The column menu button icon. Default is **`''`**. |
| @Input() `columnPinOptions: MtxGridColumnPinOption[]` | The column pin options. |

###### Row

| Name | Description |
| :--- | :--- |
| @Input() `rowHover: boolean` | Whether use hover style. Default is **`false`**. |
| @Input() `rowStriped: boolean` | Whether use striped style. Default is **`false`**. |
| @Output() `rowClick: EventEmitter<any>;` | Row click event. |
| @Input() `useContentRowTemplate: boolean` | Whether use custom row template. If true, you should define a `matRowDef`. Default is **`false`**. |

###### Cell templates

| Name | Description |
| :--- | :--- |
| @Input() `headerTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The grid header cell template. |
| @Input() `headerExtraTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The grid header cell template exclude sort. |
| @Input() `cellTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The grid body cell template. |

###### Summary

| Name | Description |
| :--- | :--- |
| @Input() `showSummary: boolean` | Whether show summary. Default is **`false`**. |
| @Input() `summaryTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The summary template. |

###### No result

| Name | Description |
| :--- | :--- |
| @Input() `noResultText: string` | The no result text. Default is **`'No records found'`**. |
| @Input() `noResultTemplate: TemplateRef<any>` | The no result template. |

###### Sidebar

| Name | Description |
| :--- | :--- |
| @Input() `showSidebar: boolean` | Whether show sidebar. Default is **`false`**. |
| @Input() `sidebarTemplate: TemplateRef<any>` | The sidebar template. |

###### Status bar

| Name | Description |
| :--- | :--- |
| @Input() `showStatusbar: boolean` | Whether show status bar. Default is **`false`**. |
| @Input() `statusbarTemplate: TemplateRef<any>` | The status bar template. |

### Interfaces

#### `MtxGridColumn`

```typescript
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
```typescript
interface MtxGridColumnPinOption {
  label: string | Observable<string>;
  value: MtxGridColumnPinValue;
}
```

#### `MtxGridColumnTypeParameter`

```typescript
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

```typescript
interface MtxGridSortProp {
  arrowPosition?: 'before' | 'after';
  disableClear?: boolean;
  id?: string;
  start?: 'asc' | 'desc';
}
```

#### `MtxGridColumnButton`

```typescript
interface MtxGridColumnButton {
  type?: 'basic' | 'icon';
  text?: string | Observable<string>;
  icon?: string;
  color?: ThemePalette;
  class?: string;
  click?: (record: any) => void;
  pop?: boolean;
  popTitle?: string | Observable<string>;
  popDescription?: string | Observable<string>;
  popOkColor?: ThemePalette;
  popOkText?: string | Observable<string>;
  popCloseColor?: ThemePalette;
  popCloseText?: string | Observable<string>;
  children?: MtxGridColumnButton[];
  iif?: (record: any) => boolean;
  tooltip?: string | Observable<string>;
  disabled?: boolean;
}
```

#### `MtxGridColumnTag`

```typescript
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

```typescript
interface MtxGridRowSelectionFormatter {
  disabled?: (rowData: any) => boolean;
  hideCheckbox?: (rowData: any) => boolean;
}
```

#### `MtxGridRowClassFormatter`

```typescript
interface MtxGridRowClassFormatter {
  [className: string]: (rowData: any, index?: number) => boolean;
}
```

### Type aliases

#### `MtxGridColumnType`

```typescript
type MtxGridColumnType = 'tag' | 'button' | 'link' | 'image' | 'boolean' | 'number' | 'currency' | 'percent' | 'date';
```

#### `MtxGridColumnPinValue`

```ts
type MtxGridColumnPinValue = 'left' | 'right' | null;
```
