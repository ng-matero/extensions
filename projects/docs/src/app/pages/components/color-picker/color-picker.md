# Color Picker

## API reference for Material Extensions ColorPicker

`import { MtxColorPickerModule } from '@ng-matero/extensions/color-picker';`

### Directives

#### `MtxColorPicker`

Selector: `[mtx-color-picker]`

Exported as: `mtxColorPicker`

##### Properties

The color picker component is just like a `matInput`.

| Name | Description |
| :--- | :--- |
| @Input\(\) `value: string` | Value of the color picker control. |
| @Input\(\) `placeholder: string` | Placeholder of the color picker control. |
| @Input\(\) `disabled: boolean` | Whether disabled the color picker control. |
| @Output\(\) `colorChange: EventEmitter<{ color: Color; $event: MouseEvent }>` | Event emitted when the color changed. |

