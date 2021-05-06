# Checkbox Group

## API reference for Material Extensions CheckboxGroup

`import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';`

### Directives

#### `MtxCheckboxGroup`

Selector: `[mtx-checkbox-group]`

Exported as: `mtxCheckboxGroup`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input\(\) `items: any[]` | Items array. |
| @Input\(\) `bindLabel: string` | Object property to use for label. Defaulted to **`'label'`** |
| @Input\(\) `bindValue: string` | Object property to use for selected model. By default binds to whole object. Defaulted to **`'value'`** |
| @Input\(\) `compareWith: (a: any, b: any) => boolean` | A function to compare the option values with the selected values. The first argument is a value from an option. The second is a value from the selection\(model\). A boolean should be returned. |
| @Input\(\) `showSelectAll: boolean` | Whether show select all. Defaulted to **`true`**. |
| @Input\(\) `selectAllLabel: string` | The lable of select all. Defaulted to **`'Select All'`**. |
| @Output\(\) `change: EventEmitter<{  model: MtxCheckboxGroupOption[];  index: number; }>()` | Event emitted when the selection changed. |

### Interfaces

#### Checkbox Group Option

```typescript
export interface MtxCheckboxGroupOption {
  ariaDescribedby?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  label?: any;
  value?: any;
  color?: string;
  checked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  indeterminate?: boolean;
  labelPosition?: 'before' | 'after';
  id?: string;
  name?: string | null;
  required?: boolean;
  [k: string]: any;
}
```

