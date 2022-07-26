# Color Picker

## API reference for Material Extensions colorpicker

`import { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';`

### Directives

#### `MtxColorpickerInput`

Directive used to connect an input to a MtxColorpickerInput.

Selector: `input[mtxColorpicker]`

Exported as: `mtxColorpickerInput`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input() `disabled: boolean` | Whether the colorpicker-input is disabled. |
| @Input() `mtxColorpicker: MtxColorpicker` | The colorpicker that this input is associated with. |
| @Input() `value: string \| null` | The value of the input. |
| @Input() `format: ColorFormat` | The color format. Can be `'hex'`, `'rgb'`, `'hsl'`, `'hsv'`. Default is `'hex'`. |
| @Output() `colorChange: EventEmitter<MtxColorPickerInputEvent>` | Emits when a change event is fired on this `<input>`. |
| @Output() `colorInput: EventEmitter<MtxColorPickerInputEvent>` | Emits when an input event is fired on this `<input>`. |

##### Methods

| Name | Description |
| :--- | :--- |
| `getConnectedOverlayOrigin(): ElementRef` | Gets the element that the colorpicker popup should be connected to. |
| `getOverlayLabelId(): string \| null` | Gets the ID of an element that should be used a description for the overlay. |
| `getThemePalette(): ThemePalette` | Returns the palette used by the input's form field, if any. |

#### `MtxColorpicker`

Component responsible for managing the colorpicker popup/dialog.

Selector: `mtx-colorpicker`

Exported as: `mtxColorpicker`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input() `disabled: boolean` | Whether the colorpicker pop-up should be disabled. |
| @Input() `format: ColorFormat` | The color format. Can be `'hex'`, `'rgb'`, `'hsl'`, `'hsv'`. Default is `'hex'`. |
| @Input() `opened: boolean` | Whether the color palette is open. |
| @Input() `restoreFocus: boolean` | Whether to restore focus to the previously-focused element when the color palette is closed. Note that automatic focus restoration is an accessibility feature and it is recommended that you provide your own equivalent, if you decide to turn it off. |
| @Input() `xPosition: ColorpickerDropdownPositionX`| Preferred position of the colorpicker in the X axis. |
| @Input() `yPosition: ColorpickerDropdownPositionY`| Preferred position of the colorpicker in the Y axis. |
| @Output(`'opened'`) `openedStream: EventEmitter<void>`| Emits when the colorpicker has been opened. |
| @Output(`'closed'`) `closedStream: EventEmitter<void>`| Emits when the colorpicker has been closed. |
| `selected: string` | The currently selected color. |

##### Methods

| Name | Description |
| :--- | :--- |
| `open(): void` | Open the colorpicker panel. |
| `close(): void` | Close the colorpicker panel. |
| `select(nextVal: string): void` | Selects the given color. |
| `registerInput(input: MtxColorpickerInput): void` | Register an input with this colorpicker. |

#### `MtxColorpickerToggleIcon`

Can be used to override the icon of a mtxColorpickerToggle.

Selector: `[mtxColorpickerToggleIcon]`

#### `MtxColorpickerToggle`

Selector: `mtx-colorpicker-toggle`

Exported as: `mtxColorpickerToggle`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input(`'for'`) `picker: MtxColorpicker` | Colorpicker instance that the button will toggle. |
| @Input() `disableRipple: boolean` | Whether ripples on the toggle should be disabled. |
| @Input() `disabled: boolean` | Whether the toggle button is disabled. |

### Classes

#### `MtxColorPickerInputEvent`

An event used for colorpicker input and change events. We don't always have access to a native input or change event because the event may have been triggered by the user clicking on the color palette popup. For consistency, we always use `MtxColorPickerInputEvent` instead.

##### Properties

| Name | Description |
| :--- | :--- |
| `target: MtxColorpickerInput` | Reference to the colorpicker input component that emitted the event. |
| `targetElement: HTMLElement` | Reference to the native input element associated with the colorpicker input. |
| `value: string \| null` | The new value for the target colorpicker input. |

### Type aliases

#### `ColorpickerDropdownPositionX`

Possible positions for the colorpicker dropdown along the X axis.

```ts
type ColorpickerDropdownPositionX = 'start' | 'end';
```

#### `ColorpickerDropdownPositionY`

Possible positions for the colorpicker dropdown along the Y axis.

```ts
type ColorpickerDropdownPositionY = 'above' | 'below';
```

#### `ColorFormat`

Possible color formats.

```ts
type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'hsv';
```

### Constants

#### `MTX_COLORPICKER_SCROLL_STRATEGY`

Injection token that determines the scroll handling while the color palette is open.

```ts
const MTX_COLORPICKER_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
```
