# Dialog

### API reference for Material Extensions Dialog

`import { MtxDialogModule } from '@ng-matero/extensions/dialog';`

## Services

### MtxDialog

#### **Methods**

`alert(title: string, onOk = () => {}): void`

| Parameter | Description |
| :--- | :--- |
| `title: string` | The dialog title. |
| `onOk = () => {}` | The ok callback function. |

`confirm(title: string, onOk = () => {}, onClose = () => {})`

| Parameter | Description |
| :--- | :--- |
| `title: string` | The dialog title. |
| `onOk = () => {}` | The ok callback function. |
| `onClose = () => {}` | The close callback function. |

`open(config: MtxDialogData, componentOrTemplateRef: ComponentType | TemplateRef = MtxDialogComponent)`

`originalOpen(componentOrTemplateRef: ComponentType | TemplateRef = MtxDialogComponent, config: any)`

## Interfaces

### Dialog Data

```typescript
export interface MtxDialogData extends MatDialogConfig {
  title?: string;
  description?: string;
  buttons?: MtxDialogBtns[];
}
```

### Dialog Button

```typescript
export interface MtxDialogBtns {
  type?: '' | 'primary' | 'accent' | 'warn';
  text: string;
  onClick: () => void;
}
```

