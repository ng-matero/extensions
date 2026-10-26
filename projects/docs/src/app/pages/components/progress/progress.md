# Progress

## API reference for Material Extensions Progress

`import { MtxProgressModule } from '@ng-matero/extensions/progress';`

### Accessibility

`<mtx-progress>` has `role="progressbar"`, with `aria-valuemin="0"`, `aria-valuemax="100"` and `aria-valuenow` set from `value`. Give each progress bar an accessible name with `aria-label` or `aria-labelledby`.

```html
<mtx-progress [value]="40" aria-label="Upload progress">40%</mtx-progress>
```

### Directives

#### `MtxProgress`

Selector: `[mtx-progress]`

Exported as: `mtxProgress`

##### Properties

| **Name** | Description |
| :--- | :--- |
| `@Input()`<br>`type: MtxProgressType \| undefined` | The progress's type. Default is **`undefined`**. |
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
type MtxProgressType = 'info' | 'success' | 'warning' | 'danger';
```
