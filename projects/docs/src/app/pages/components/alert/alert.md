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
| `@Input()`<br>`type: MtxAlertType` | The alert types. Default is **`'default'`**. |
| `@Input()`<br>`isOpen: boolean` | Whether alert visible. Default is **`true`**. |
| `@Input()`<br>`dismissible: boolean` | Whether displays an inline close button. |
| `@Input()`<br>`elevation: number` | The material elevation for alert. Default is **`0`**. |
| `@Output()`<br>`closed: EventEmitter<MtxAlertComponent>` | This event fires when alert closed. |

### Type aliases

#### `MtxAlertType`

```ts
type MtxAlertType = 'default' | 'info' | 'success' | 'warning' | 'danger';
```
