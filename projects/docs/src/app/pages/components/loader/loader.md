# loader

## API reference for Material Extensions Loader

`import { MtxLoaderModule } from '@ng-matero/extensions/loader';`

### Directives

#### `MtxLoader`

Selector: `[mtx-loader]`

Exported as: `mtxLoader`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input\(\) `type: 'spinner' \| 'progressbar'` | The loader type. Defaulted to **`'spinner'`** |
| @Input\(\) `loading: boolean` | The loading status. |
| @Input\(\) `color: ThemePalette` | Theme color palette for the component. |
| @Input\(\) `mode：ProgressSpinnerMode \| ProgressBarMode` | Mode of the progress circle. |
| @Input\(\) `value: number` | Value of the progress circle or progress bar. |
| @Input\(\) `strokeWidth: number` | Stroke width of the progress spinner. Defaulted to **`4`**. |
| @Input\(\) `diameter: number` | The diameter of the progress spinner \(will set width and height of svg\). Defaulted to **`48`**. |
| @Input\(\) `bufferValue: number` | Buffer value of the progress bar. Defaulted to **`0`**. |
| @Input\(\) `hasBackdrop: boolean` | Whether show loader backdrop. Defaulted to **`true`**. |

