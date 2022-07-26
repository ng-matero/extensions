# Dialog

## API reference for Material Extensions Dialog

`import { MtxDialogModule } from '@ng-matero/extensions/dialog';`

### Services

#### `MtxDialog`

##### Methods

| Name | Description |
| :--- | :--- |
| `alert(title: string \| Observable<string>, description: string \| Observable<string> = '', onOk = () => {})` | A simple alert dialog with a single button. |

| Parameters | Description |
| :--- | :--- |
| `title: string \| Observable<string>` | The dialog title. |
| `description: string \| Observable<string>` | The dialog description.  |
| `onOk: () => void` | The ok callback function. |

| Name | Description |
| :--- | :--- |
| `confirm(title: string \| Observable<string>, description: string \| Observable<string> = '', onOk = () => {}, onClose = () => {})` | A confirm dialog with a cancel and a confirm button. |

| Parameters | Description |
| :--- | :--- |
| `title: string \| Observable<string>` | The dialog title. |
| `description: string \| Observable<string>` | The dialog description. |
| `onOk: () => void` | The ok callback function. |
| `onClose: () => void` | The close callback function. |

| Name | Description |
| :--- | :--- |
| `open(config: MtxDialogData, componentOrTemplateRef: ComponentType<any> \| TemplateRef<any> = MtxDialogComponent)` | Opens a modal dialog containing the given template. |

| Parameters | Description |
| :--- | :--- |
| `config: MtxDialogData` | The dialog description. |
| `componentOrTemplateRef: ComponentType<T> \| TemplateRef<any>` | The component to load into the dialog. |

| Name | Description |
| :--- | :--- |
| `originalOpen(componentOrTemplateRef: ComponentType<any> \| TemplateRef<any> = MtxDialogComponent, config: any)` | The original `matDialog` open method. |

| Parameters | Description |
| :--- | :--- |
| `componentOrTemplateRef: ComponentType<T> \| TemplateRef<any>` | The component to load into the dialog. |
| `config?: MatDialogConfig<D>` | The dialog description. |

### Interfaces

#### `MtxDialogData`

```typescript
export interface MtxDialogData extends MatDialogConfig {
  title?: string | Observable<string>;
  description?: string | Observable<string>;
  buttons?: MtxDialogBtns[];
  showCloseIcon?: boolean;
}
```

#### `MtxDialogBtns`

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
