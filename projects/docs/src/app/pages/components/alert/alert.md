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
| @Input\(\) `type: 'default' \| 'info' \| 'success' \| 'warning' \| 'danger'` | The alert types. Defaulted to **`default`**. |
| @Input\(\) `isOpen: boolean` | Whether alert visible. Defaulted to **`true`**. |
| @Input\(\) `dismissible: boolean` | Whether displays an inline close button. |
| @Input\(\) `color: string` | The alert text color. |
| @Input\(\) `elevation: number` | The material elevation for alert. Defaulted to **`0`**. |
| @Output\(\) `closed: EventEmitter<MtxAlertComponent>` | This event fires when alert closed. |

