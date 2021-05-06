# Progress

## API reference for Material Extensions Progress

`import { MtxProgressModule } from '@ng-matero/extensions/progress';`

### Directives

#### `MtxProgress`

Selector: `[mtx-progress]`

Exported as: `mtxProgress`

##### Properties

| **Name** | Description |
| :--- | :--- |
| @Input\(\) `type: 'default' \| 'info' \| 'success' \| 'warning' \| 'danger'` | The progress types. Defaulted to **`'info'`**. |
| @Input\(\) `value: number` | The progress value. Defaulted to **`0`**. |
| @Input\(\) `height: number` | The progress height. |
| @Input\(\) `color: string` | The progress text color. |
| @Input\(\) `foreground: string` | The progress bar color. |
| @Input\(\) `background: string` | The progress track color. |
| @Input\(\) `striped: boolean` | Whether applies striped class. |
| @Input\(\) `animate: boolean` | Whether applies animated class. |

