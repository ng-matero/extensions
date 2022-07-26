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
| @Input() `type: MtxAlertType` | The alert types. Default is `'default'`. |
| @Input() `isOpen: boolean` | Whether alert visible. Default is `true`. |
| @Input() `dismissible: boolean` | Whether displays an inline close button. |
| @Input() `elevation: number` | The material elevation for alert. Default is `0`. |
| @Output() `closed: EventEmitter<MtxAlertComponent>` | This event fires when alert closed. |

### Type aliases

#### `MtxAlertType`

```ts
type MtxAlertType = 'default' | 'info' | 'success' | 'warning' | 'danger';
```
