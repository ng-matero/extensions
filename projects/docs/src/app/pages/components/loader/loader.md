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
| `@Input()`<br>`type: MtxLoaderType` | The loader's type. Default is **`'spinner'`**. |
| `@Input()`<br>`loading: boolean` | Whether the loader is loading. |
| `@Input()`<br>`color: ThemePalette` | Theme color palette for the component. |
| `@Input()`<br>`mode：ProgressSpinnerMode \| ProgressBarMode` | Mode of the progress circle or the progress bar. |
| `@Input()`<br>`value: number` | Value of the progress circle or the progress bar. |
| `@Input()`<br>`strokeWidth: number` | Stroke width of the spinner loader. Default is **`4`**. |
| `@Input()`<br>`diameter: number` | The diameter of the spinner loader (will set width and height of svg). Default is **`48`**. |
| `@Input()`<br>`bufferValue: number` | Buffer value of the progressbar loader. Default is **`0`**. |
| `@Input()`<br>`hasBackdrop: boolean` | Whether the loader has a backdrop. Default is **`true`**. |


### Type aliases

#### `MtxLoaderType`

```ts
type MtxLoaderType = 'spinner' | 'progressbar';
```
