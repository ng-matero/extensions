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
| `@Input()`<br>`type: MtxProgressType` | The progress's type. Default is **`'info'`**. |
| `@Input()`<br>`value: number` | The value of the progress. Default is **`0`**. |
| `@Input()`<br>`height: number` | The height of the progress. |
| `@Input()`<br>`color: string` | The text color of the progress. |
| `@Input()`<br>`foreground: string` | The bar color of the progress. |
| `@Input()`<br>`background: string` | The track color of the progress. |
| `@Input()`<br>`striped: boolean` | Whether to apply the striped class. |
| `@Input()`<br>`animate: boolean` | Whether to apply the animated class. |

### Type aliases

#### `MtxProgressType`

```ts
type MtxProgressType = 'default' | 'info' | 'success' | 'warning' | 'danger';
```
