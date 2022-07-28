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
| `@Input()`<br>`type: MtxProgressType` | The progress types. Default is **`'info'`**. |
| `@Input()`<br>`value: number` | The progress value. Default is **`0`**. |
| `@Input()`<br>`height: number` | The progress height. |
| `@Input()`<br>`color: string` | The progress text color. |
| `@Input()`<br>`foreground: string` | The progress bar color. |
| `@Input()`<br>`background: string` | The progress track color. |
| `@Input()`<br>`striped: boolean` | Whether applies striped class. |
| `@Input()`<br>`animate: boolean` | Whether applies animated class. |

### Type aliases

#### `MtxProgressType`

```ts
type MtxProgressType = 'default' | 'info' | 'success' | 'warning' | 'danger';
```
