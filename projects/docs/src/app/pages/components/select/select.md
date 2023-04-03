# Select

## API reference for Material Extensions Select

`import { MtxSelectModule } from '@ng-matero/extensions/select';`

### Directives

#### `MtxSelect`

Selector: `[mtx-select]`

Exported as: `mtxSelect`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`addTag: boolean \| ((term: string) => any \| Promise<any>)` | Allows to create custom options. Default is **`false`**. |
| `@Input()`<br>`addTagText: string` | Set custom text when using tagging. Default is **`Add item`**. |
| `@Input()`<br>`appendTo: string` | Append dropdown to body or any other element using css selector. For correct positioning body should have `position:relative`. Default is **`body`** (since v15). |
| `@Input()`<br>`bindValue: string` | Object property to use for selected model. By default binds to whole object. |
| `@Input()`<br>`bindLabel: string` | Object property to use for label. Default is **`label`**. |
| `@Input()`<br>`closeOnSelect: boolean` | Whether to close the menu when a value is selected. Default is **`true`**. |
| `@Input()`<br>`clearAllText: string` | Set custom text for clear all icon title. Default is **`Clear all`**. |
| `@Input()`<br>`clearable: boolean` | Allow to clear selected value. Default is **`true`**. |
| `@Input()`<br>`clearOnBackspace: boolean` | Clear selected values one by one when clicking backspace. Default is **`true`**. |
| `@Input()`<br>`compareWith: (a: any, b: any) => boolean` | A function to compare the option values with the selected values. The first argument is a value from an option. The second is a value from the selection(model). A boolean should be returned. |
| `@Input()`<br>`dropdownPosition: bottom \| top \| auto` | Set the dropdown position on open. Default is **`auto`**. |
| `@Input()`<br>`groupBy: string \| Function` | Allow to group items by key or function expression. |
| `@Input()`<br>`groupValue: (groupKey: string, children: any[]) => Object` | Function expression to provide group value. |
| `@Input()`<br>`selectableGroup: boolean` | Allow to select group when groupBy is used. Default is **`false`**. |
| `@Input()`<br>`selectableGroupAsModel: boolean` | Indicates whether to select all children or group itself. Default is **`true`**. |
| `@Input()`<br>`items: boolean` | Items array. Default is **`[]`**. |
| `@Input()`<br>`loading: boolean` | You can set the loading state from the outside (e.g. async items loading). |
| `@Input()`<br>`loadingText: string` | Set custom text when for loading items. Default is **`Loading...`**. |
| `@Input()`<br>`labelForId: string` | Id to associate control with label. |
| `@Input()`<br>`markFirst: boolean` | Marks first item as focused when opening/filtering. Default is **`true`**. |
| `@Input()`<br>`isOpen: boolean` | Allows manual control of dropdown opening and closing. `True` - won't close. `False` - won't open. |
| `@Input()`<br>`maxSelectedItems: number` | When `multiple = true`, allows to set a limit number of selection. |
| `@Input()`<br>`hideSelected: boolean` | Allows to hide selected items. Default is **`false`**. |
| `@Input()`<br>`multiple: boolean` | Allows to select multiple items. Default is **`false`**. |
| `@Input()`<br>`notFoundText: string` | Set custom text when filter returns empty result. Default is **`No items found`**. |
| `@Input()`<br>`placeholder: string` | Placeholder text. |
| `@Input()`<br>`searchable: boolean` | Allow to search for value. Default is **`true`**. |
| `@Input()`<br>`readonly: boolean` | Set ng-select as readonly. Mostly used with reactive forms. Default is **`false`**. |
| `@Input()`<br>`searchFn: (term: string, item: any) => boolean` | Allow to clear selected value. Default is **`null`**. |
| `@Input()`<br>`searchWhileComposing: boolean` | Whether items should be filtered while composition started. Default is **`true`**. |
| `@Input()`<br>`trackByFn: (item: any) => any` | Provide custom trackBy function. Default is **`null`**. |
| `@Input()`<br>`clearSearchOnAdd: boolean` | Clears search input when item is selected. Default true. Default false when `closeOnSelect` is false. Default is **`true`**. |
| `@Input()`<br>`editableSearchTerm: boolean` | Allow to edit search query if option selected. Default `false`. Works only if multiple is `false`. |
| `@Input()`<br>`selectOnTab: boolean` | Select marked dropdown item using tab. Default is **`true`**. |
| `@Input()`<br>`openOnEnter: boolean` | Open dropdown using enter. Default is **`true`**. |
| `@Input()`<br>`typeahead: Subject` | Custom autocomplete or advanced filter. |
| `@Input()`<br>`minTermLength: number` | Minimum term length to start a search. Should be used with typeahead. Default is **`0`**. |
| `@Input()`<br>`typeToSearchText: string` | Set custom text when using Typeahead. Default is **`Type to search`**. |
| `@Input()`<br>`virtualScroll: boolean` |Enable virtual scroll for better performance when rendering a lot of data. Default is **`false`**. |
| `@Input()`<br>`inputAttrs: { [key: string]: string }` |Pass custom attributes to underlying input element. |
| `@Input()`<br>`tabIndex: number` | Set tabindex on `ng-select`. |
| `@Input()`<br>`keyDownFn: ($event: KeyboardEvent) => boolean` | Provide custom keyDown function. Executed before default handler. Return false to suppress execution of default key down handlers. Default is **`true`**. |

### Interfaces

#### `MtxSelectDefaultOptions`

Represents the default options for the select that can be configured using the `MTX_SELECT_DEFAULT_OPTIONS` injection token.

```ts
interface MtxSelectDefaultOptions {
  placeholder?: string;
  notFoundText?: string;
  typeToSearchText?: string;
  addTagText?: string;
  loadingText?: string;
  clearAllText?: string;
  appendTo?: string;
  bindValue?: string;
  bindLabel?: string;
  openOnEnter?: boolean;
  clearSearchOnAdd?: boolean;
}
```

### Constants

#### `MTX_SELECT_DEFAULT_OPTIONS`

Injection token that can be used to specify default select options.

```ts
const MTX_SELECT_DEFAULT_OPTIONS: InjectionToken<() => MtxSelectDefaultOptions>;
```
