# Dialog

## API reference for Material Extensions Dialog

`import { MtxDialogModule } from '@ng-matero/extensions/dialog';`

### Services

#### `MtxDialog`

##### Methods

`alert`

| Parameter | Description |
| :--- | :--- |
| `title: string \| Observable<string>` | The dialog title. |
| `description: string \| Observable<string>` | The dialog description. Defaulted to **`''`**  |
| `onOk: () => void` | The ok callback function. Defaulted to **`() => {}`** |

`confirm`

| Parameter | Description |
| :--- | :--- |
| `title: string \| Observable<string>` | The dialog title. |
| `description: string \| Observable<string>` | The dialog description. Defaulted to **`''`** |
| `onOk: () => void` | The ok callback function. Defaulted to **`() => {}`** |
| `onClose: () => void` | The close callback function. Defaulted to **`() => {}`** |

`open`

| Parameter | Description |
| :--- | :--- |
| `config: MtxDialogData` | The dialog description. |
| `componentOrTemplateRef: ComponentType<T>` | The component to load into the dialog. Defaulted to **`MtxDialogComponent`** |

`originalOpen`

| Parameter | Description |
| :--- | :--- |
| `componentOrTemplateRef: ComponentType<T>` | The component to load into the dialog. Defaulted to **`MtxDialogComponent`** |
| `config?: MatDialogConfig<D>` | The dialog description. |

### Interfaces

#### Dialog Data

```typescript
export interface MtxDialogData extends MatDialogConfig {
  title?: string | Observable<string>;
  description?: string | Observable<string>;
  buttons?: MtxDialogBtns[];
  showCloseIcon?: boolean;
}
```

#### Dialog Button

```typescript
export interface MtxDialogBtns {
  type?: '' | 'raised' | 'stroked' | 'flat';
  color?: '' | 'primary' | 'accent' | 'warn';
  class?: string;
  focusInitial?: boolean;
  text: string | Observable<string>;
  onClick?: () => void;
}
```

