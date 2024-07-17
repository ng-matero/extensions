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
| `@Input()`<br>`disabled: boolean` | Whether the colorpicker-input is disabled. |
| `@Input()`<br>`mtxColorpicker: MtxColorpicker` | The colorpicker that this input is associated with. |
| `@Input()`<br>`value: string \| null` | The value of the input. |
| `@Input()`<br>`format: ColorFormat` | The color format. Can be `'hex'`, `'rgb'`, `'hsl'`, `'hsv'`. Default is **`'hex'`**. |
| `@Output()`<br>`colorChange: EventEmitter<MtxColorPickerInputEvent>` | Emits when a change event is fired on this `<input>`. |
| `@Output()`<br>`colorInput: EventEmitter<MtxColorPickerInputEvent>` | Emits when an input event is fired on this `<input>`. |

##### Methods

<a>getConnectedOverlayOrigin</a>

Gets the element that the colorpicker popup should be connected to.

| | |
| :--- | :--- |

<a>getOverlayLabelId</a>

Gets the ID of an element that should be used a description for the overlay.

| | |
| :--- | :--- |

<a>getThemePalette</a>

Returns the palette used by the input's form field, if any.

| | |
| :--- | :--- |

#### `MtxColorpicker`

Component responsible for managing the colorpicker popup/dialog.

Selector: `mtx-colorpicker`

Exported as: `mtxColorpicker`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`disabled: boolean` | Whether the colorpicker pop-up should be disabled. |
| `@Input()`<br>`format: ColorFormat` | The color format. Can be `'hex'`, `'rgb'`, `'hsl'`, `'hsv'`. Default is **`'hex'`**. |
| `@Input()`<br>`opened: boolean` | Whether the color palette is open. |
| `@Input()`<br>`restoreFocus: boolean` | Whether to restore focus to the previously-focused element when the color palette is closed. Note that automatic focus restoration is an accessibility feature and it is recommended that you provide your own equivalent, if you decide to turn it off. |
| `@Input()`<br>`xPosition: ColorpickerDropdownPositionX`| Preferred position of the colorpicker in the X axis. |
| `@Input()`<br>`yPosition: ColorpickerDropdownPositionY`| Preferred position of the colorpicker in the Y axis. |
| `@Output('opened')`<br>`openedStream: EventEmitter<void>`| Emits when the colorpicker has been opened. |
| `@Output('closed')`<br>`closedStream: EventEmitter<void>`| Emits when the colorpicker has been closed. |
| `selected: string` | The currently selected color. |

##### Methods

<a>open</a>

Open the colorpicker panel.

| | |
| :--- | :--- |

<a>close</a>

Close the colorpicker panel.

| | |
| :--- | :--- |

<a>select</a>

Selects the given color.

| Parameters | Description |
| :--- | :--- |
| `nextVal: string` | The color value. |

<a>registerInput</a>

Register an input with this colorpicker.

| Parameters | Description |
| :--- | :--- |
| `input: MtxColorpickerInput` | The colorpicker input to register with this colorpicker. |

#### `MtxColorpickerToggleIcon`

Can be used to override the icon of a mtxColorpickerToggle.

Selector: `[mtxColorpickerToggleIcon]`

#### `MtxColorpickerToggle`

Selector: `mtx-colorpicker-toggle`

Exported as: `mtxColorpickerToggle`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input('for')`<br>`picker: MtxColorpicker` | Colorpicker instance that the button will toggle. |
| `@Input()`<br>`disableRipple: boolean` | Whether ripples on the toggle should be disabled. |
| `@Input()`<br>`disabled: boolean` | Whether the toggle button is disabled. |

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
