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
| @Input() `type: MtxLoaderType` | The loader type. Default is `'spinner'` |
| @Input() `loading: boolean` | The loading status. |
| @Input() `color: ThemePalette` | Theme color palette for the component. |
| @Input() `mode：ProgressSpinnerMode \| ProgressBarMode` | Mode of the progress. |
| @Input() `value: number` | Value of the progress circle or progress bar. |
| @Input() `strokeWidth: number` | Stroke width of the progress spinner. Default is `4`. |
| @Input() `diameter: number` | The diameter of the progress spinner (will set width and height of svg). Default is `48`. |
| @Input() `bufferValue: number` | Buffer value of the progress bar. Default is `0`. |
| @Input() `hasBackdrop: boolean` | Whether show loader backdrop. Default is `true`. |


### Type aliases

#### `MtxLoaderType`

```ts
type MtxLoaderType = 'spinner' | 'progressbar';
```
