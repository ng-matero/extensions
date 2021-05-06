# Data Grid

## API reference for Material Extensions Data Grid

`import { MtxGridModule } from '@ng-matero/extensions/data-grid';`

### Directives

#### `MtxGrid`

Selector: `[mtx-grid]`

Exported as: `mtxGrid`

##### Properties

###### Basic

| Name | Description |
| :--- | :--- |
| @Input\(\) `columns: MtxGridColumn[]` | The grid columns defination. |
| @Input\(\) `data: any[]` | The grid data source. |
| @Input\(\) `length: number` | The length of the total number of data. Defaulted to **0**. |
| @Input\(\) `loading: boolean` | Whether the table loading is ended. Defaulted to **false**. |
| @Input\(\)`trackBy: TrackByFunction<any>` | Tracking function that will be used to check the differences in data changes. |

###### Page

| Name | Description |
| :--- | :--- |
| @Input\(\)`pageOnFront: boolean` | Whether paging the data just on front end. Defaulted to **true**. |
| @Input\(\)`showPaginator: boolean` | Whether show the paginator. Defaulted to **true**. |
| @Input\(\)`pageDisabled: boolean` | Whether the paginator is disabled. Defaulted to **false**. |
| @Input\(\)`showFirstLastButtons: boolean` | Whether to show the first/last buttons UI to the user. Defaulted to **true**. |
| @Input\(\)`pageIndex: number` | The zero-based page index of the displayed list of items. Defaulted to **0**. |
| @Input\(\) `pageSize: number` | Number of items to display on a page. By default set to **10**. |
| @Input\(\)`pageSizeOptions: number[]` | The set of provided page size options to display to the user. By default set to **\[10, 50, 100\]** |
| @Input\(\)`hidePageSize: boolean` | Whether hide the pagesize. Defaulted to **false**. |
| @Output\(\)`page: EventEmitter<PageEvent>` | Event emitted when the paginator changes the page size or page index. |

###### Sort

| Name | Description |
| :--- | :--- |
| @Input\(\) `sortOnFront: boolean` | Whether sort data just on front end. Defaulted to **true**. |
| @Input\(\) `sortActive: string` | The id of the most recently sorted MatSortable. |
| @Input\(\) `sortDirection: SortDirection` | The sort direction of the currently active MatSortable. |
| @Input\(\) `sortDisableClear: boolean` | Whether to disable the user from clearing the sort by finishing the sort direction cycle. May be overriden by the column's disable clear definition. Defaulted to **false**. |
| @Input\(\)`sortDisabled: boolean` | Whether the grid sort is disabled. Defaulted to **false**. |
| @Input\(\) `sortStart: 'asc' \| 'desc'` | The direction to set when an MatSortable is initially sorted. May be overriden by the column's sort definition. Defaulted to asc. |
| @Output\(\) `sortChange: EventEmitter<sort>` | Event emitted when the user changes either the active sort or sort direction. |

###### Expansion

| Name | Description |
| :--- | :--- |
| @Input\(\) `expandable: boolean` | Whether the row can be expanded. Defaulted to **false**. |
| @Input\(\) `expansionTemplate: TemplateRef<any>` | The template of expandable row. |
| @Output\(\) `expansionChange: EventEmitter<any>` | Event emitted when the user toggle the expandable row. |

###### Selection

| Name | Description |
| :--- | :--- |
| @Input\(\) `multiSelectable: boolean` | Whether the user can selecte multiple row or cell. Defaulted to **true**. |
| @Input\(\) `rowSelectable: boolean` | Whether the row can be selectable. Defaulted to **false**. |
| @Input\(\) `rowSelected: any[]` | The row selected items default. Defaulted to `[]`. |
| @Input\(\) `hideRowSelectionCheckbox: boolean` | Whether hide the row selection checkbox. Defaulted to **false**. |
| @Input\(\) `rowSelectionFormatter: MtxGridRowSelectionFormatter` | The row selection formatter to set disabled and checkbox hiding. |
| @Output\(\)`rowSelectionChange: EventEmitter<any>` | Event emitted when the row be selected. |
| @Input\(\) `cellSelectable: boolean` | Whether the cell can be selectable. Defaulted to **true**. |
| @Output\(\) `cellSelectionChange: EventEmitter<any>` | Event emitted when the cell be selected. |

###### Toolbar

| Name | Description |
| :--- | :--- |
| @Input\(\) `showToolbar: boolean` | Whether show the grid toolbar. Defaulted to **false**. |
| @Input\(\) `toolbarTitle: string` | The toolbar title. Defaulted to **''**. |
| @Input\(\) `toolbarTemplate: TemplateRef<any>` | The toolbar template. |

###### Column menu

| Name | Description |
| :--- | :--- |
| @Input\(\) `columnHideable: boolean` | Whether the column can be hiding. Defaulted to **true**. |
| @Input\(\) `columnHideableChecked: 'show' \| 'hide'` | Hide or show when column hiding checkbox be checked. Defaulted to **'show'**. |
| @Input\(\) `columnMovable: boolean` | Whether the column can be moving. Defaulted to **true**. |
| @Output\(\) `columnChange: EventEmitter<string[]>` | Event emitted when the column be hided or be resorted. |
| @Input\(\) `showColumnMenuHeader: boolean` | Whether show header of column menu. Defaulted to **false.** |
| @Input\(\) `columnMenuHeaderText: string` | The header text of column menu. Defaulted to `'Columns Header'` |
| @Input\(\) `columnMenuHeaderTemplate: TemplateRef<any>` | The header template of column menu. |
| @Input\(\) `showColumnMenuFooter: boolean` | Whether show footer of column menu. Defaulted to `false` |
| @Input\(\) `columnMenuFooterText: string` | The header text of column menu. Defaulted to `'Columns Footer'` |
| @Input\(\) `columnMenuFooterTemplate: TemplateRef<any>` | The footer template of column menu. |
| @Input\(\) `showColumnMenuButton: boolean` | Whether show column menu button. Defaulted to **true**. |
| @Input\(\) `columnMenuButtonText: string` | The column menu button text. Defaulted to **''**. |
| @Input\(\) `columnMenuButtonType: 'raised' \| 'stroked' \| 'flat' \| 'icon' \| 'fab' \| 'mini-fab' \| ''` | The column menu button type. Defaulted to '**stroked'**. |
| @Input\(\) `columnMenuButtonColor: string` | The column menu button color. Defaulted to **''**. |
| @Input\(\) `columnMenuButtonClass: string` | The column menu button class. Defaulted to **''**. |
| @Input\(\) `columnMenuButtonIcon: string` | The column menu button icon. Defaulted to **''**. |

###### Template

| Name | Description |
| :--- | :--- |
| @Input\(\) `noResultText: string` | The no result text. Defaulted to **'No records found'**. |
| @Input\(\) `noResultTemplate: TemplateRef<any>` | The no result template. |
| @Input\(\) `headerTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The grid header cell template. |
| @Input\(\) `cellTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The grid body cell template. |
| @Input\(\) `showSummary: boolean` | Whether show summary. Defaulted to **false** |
| @Input\(\) `summaryTemplate: TemplateRef<any> \| MtxGridCellTemplate` | The summary template. |

###### Row

| Name | Description |
| :--- | :--- |
| @Input\(\) `rowHover = false` | Whether use hover style. |
| @Input\(\) `rowStriped = false` | Whether use striped style. |
| @Output\(\) `rowClick: EventEmitter<any>;` | Row click event. |

### Interfaces

#### Column

```typescript
export interface MtxGridColumn {
  field: string;
  header?: string;
  hide?: boolean;
  disabled?: boolean;
  pinned?: 'left' | 'right';
  left?: string;
  right?: string;
  width?: string;
  resizable?: boolean;
  sortable?: boolean | string;
  sortProp?: MtxGridColumnSortProp;
  type?: MtxGridColumnType;
  typeParameter?: MtxGridColumnTypeParameter;
  tag?: MtxGridColumnTag;
  buttons?: MtxGridColumnButton[];
  formatter?: (rowData: any, colDef?: any) => void;
  cellTemplate?: TemplateRef<any> | null;
  showExpand?: boolean;
  description?: string;
  summary?: ((colData: any, colDef?: any) => void) | string;
}
```

#### Column Type

```typescript
export declare type MtxGridColumnType =
  | 'tag'
  | 'button'
  | 'link'
  | 'image'
  | 'boolean'
  | 'number'
  | 'currency'
  | 'percent'
  | 'date';
```

#### Column Type Parameter

```typescript
export interface MtxGridColumnTypeParameter {
  currencyCode?: string;
  display?: string | boolean;
  digitsInfo?: string;
  format?: string;
  locale?: string;
  timezone?: string;
}
```

#### Column Sort Properties

```typescript
export interface MtxGridColumnSortProp {
  arrowPosition?: 'before' | 'after';
  disableClear?: boolean;
  id?: string;
  start?: 'asc' | 'desc';
}
```

#### Column Button

```typescript
export interface MtxGridColumnButton {
  type?: 'basic' | 'icon';
  text?: string | Observable<string>;
  icon?: string;
  color?: 'primary' | 'accent' | 'warn';
  class?: string;
  click?: (record: any) => void;
  pop?: boolean;
  popTitle?: string | Observable<string>;
  popDescription?: string | Observable<string>;
  popOkColor?: '' | 'primary' | 'accent' | 'warn';
  popOkText?: string | Observable<string>;
  popCloseColor?: '' | 'primary' | 'accent' | 'warn';
  popCloseText?: string | Observable<string>;
  children?: MtxGridColumnButton[];
  iif?: (record: any) => boolean;
  tooltip?: string | Observable<string>;
  disabled?: boolean;
}
```

#### Column Tag

```typescript
export interface MtxGridColumnTag {
  [key: number]: MtxGridColumnTagValue;
  [key: string]: MtxGridColumnTagValue;
}

export interface MtxGridColumnTagValue {
  text?: string;
  color?: string;
}
```

#### Row Selection Formatter

```typescript
export interface MtxGridRowSelectionFormatter {
  disabled?: (rowData: any) => boolean;
  hideCheckbox?: (rowData: any) => boolean;
}
```

