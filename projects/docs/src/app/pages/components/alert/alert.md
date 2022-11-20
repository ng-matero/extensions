# Alert

## API reference for Material Extensions Alert

`import { MtxAlertModule } from '@ng-matero/extensions/alert';`

### Directives

#### `MtxAlert`

Selector: `[mtx-alert]`

Exported as: `mtxAlert`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`type: MtxAlertType` | The alert's type. Default is **`'default'`**. |
| `@Input()`<br>`dismissible: boolean` | Whether to display an inline close button. |
| `@Input()`<br>`elevation: number` | The alert's elevation (0~24). Default is **`0`**. |
| `@Output()`<br>`closed: EventEmitter<MtxAlertComponent>` | Event emitted when the alert closed. |

### Type aliases

#### `MtxAlertType`

```ts
type MtxAlertType = 'default' | 'info' | 'success' | 'warning' | 'danger';
```
