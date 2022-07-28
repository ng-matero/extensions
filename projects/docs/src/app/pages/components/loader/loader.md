# Loader

## API reference for Material Extensions Loader

`import { MtxLoaderModule } from '@ng-matero/extensions/loader';`

### Directives

#### `MtxLoader`

Selector: `[mtx-loader]`

Exported as: `mtxLoader`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`type: MtxLoaderType` | The loader type. Default is **`'spinner'`**. |
| `@Input()`<br>`loading: boolean` | The loading status. |
| `@Input()`<br>`color: ThemePalette` | Theme color palette for the component. |
| `@Input()`<br>`mode：ProgressSpinnerMode \| ProgressBarMode` | Mode of the progress. |
| `@Input()`<br>`value: number` | Value of the progress circle or progress bar. |
| `@Input()`<br>`strokeWidth: number` | Stroke width of the progress spinner. Default is **`4`**. |
| `@Input()`<br>`diameter: number` | The diameter of the progress spinner (will set width and height of svg). Default is **`48`**. |
| `@Input()`<br>`bufferValue: number` | Buffer value of the progress bar. Default is **`0`**. |
| `@Input()`<br>`hasBackdrop: boolean` | Whether show loader backdrop. Default is **`true`**. |


### Type aliases

#### `MtxLoaderType`

```ts
type MtxLoaderType = 'spinner' | 'progressbar';
```
