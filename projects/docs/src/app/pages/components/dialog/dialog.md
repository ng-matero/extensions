# Dialog

## API reference for Material Extensions Dialog

`import { MtxDialogModule } from '@ng-matero/extensions/dialog';`

### Services

#### `MtxDialog`

##### Methods

<a>alert</a>

A simple alert dialog with a single button.

| Parameters | Description |
| :--- | :--- |
| `title: string \| Observable<string>` | The dialog title. |
| `description: string \| Observable<string>` | The dialog description.  |
| `onOk: () => void` | The ok callback function. |

<a>confirm</a>

A confirm dialog with a cancel and a confirm button.

| Parameters | Description |
| :--- | :--- |
| `title: string \| Observable<string>` | The dialog title. |
| `description: string \| Observable<string>` | The dialog description. |
| `onOk: () => void` | The ok callback function. |
| `onClose: () => void` | The close callback function. |

<a>open</a>

Opens a modal dialog containing the given template.

| Parameters | Description |
| :--- | :--- |
| `config: MtxDialogData` | The dialog description. |
| `componentOrTemplateRef: ComponentType<T> \| TemplateRef<any>` | The component to load into the dialog. |

<a>originalOpen</a>

The original `matDialog` open method.

| Parameters | Description |
| :--- | :--- |
| `componentOrTemplateRef: ComponentType<T> \| TemplateRef<any>` | The component to load into the dialog. |
| `config?: MatDialogConfig<D>` | The dialog description. |

### Interfaces

#### `MtxDialogData`

```ts
interface MtxDialogData extends MatDialogConfig {
  title?: string | Observable<string>;
  description?: string | Observable<string>;
  buttons?: MtxDialogBtns[];
  showCloseIcon?: boolean;
}
```

#### `MtxDialogBtns`

```ts
interface MtxDialogBtns {
  type?: MatButtonAppearance;
  color?: ThemePalette;
  class?: string;
  focusInitial?: boolean;
  text: string | Observable<string>;
  onClick?: () => void;
}
```
