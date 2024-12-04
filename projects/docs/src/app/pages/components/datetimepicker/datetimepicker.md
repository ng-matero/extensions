# Datetimepicker

## API reference for Material Extensions Datetimepicker

`import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';`

### Directives

#### `MtxDatetimepickerInput`

Directive used to connect an input to a MtxDatetimepicker.

Selector: `input[mtxDatetimepicker]`

Exported as: `mtxDatetimepickerInput`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`mtxDatetimepickerFilter: (date: D \| null, type: MtxDatetimepickerFilterType) => boolean` | Function that can be used to filter out dates within the datetimepicker. |
| `@Input()`<br>`disabled: boolean` | Whether the datetimepicker-input is disabled. |
| `@Input()`<br>`mtxDatetimepicker: MtxDatetimepicker<D>` | The datetimepicker that this input is associated with. |
| `@Input()`<br>`max: D \| null` | The maximum valid date. |
| `@Input()`<br>`min: D \| null` | The minimum valid date. | 
| `@Input()`<br>`value: D \| null` | The value of the input. |
| `@Output()`<br>`dateChange: EventEmitter<MtxDatetimepickerInputEvent<D>>` | Emits when a `change` event is fired on this `<input>`. |
| `@Output()`<br>`dateInput: EventEmitter<MtxDatetimepickerInputEvent<D>>` | Emits when an `input` event is fired on this `<input>`. |

##### Methods

<a>getConnectedOverlayOrigin</a>

Gets the element that the datetimepicker popup should be connected to.

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

#### `MtxCalendar`

A calendar that is used as part of the datetimepicker.

Selector: `mtx-calendar`

Exported as: `mtxCalendar`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`dateFilter: (date: D, type: MtxDatetimepickerFilterType) => boolean` | Function used to filter which dates are selectable. |
| `@Input()`<br>`type: MtxDatetimepickerType` | The type of datetimepicker. Default is **`'date'`**. |
| `@Input()`<br>`multiYearSelector: boolean` | Whether to show multi-year view. Default is **`false`**. |
| `@Input()`<br>`headerComponent: ComponentType<any>` | Component for a custom header |
| `@Input()`<br>`actionsPortal: TemplatePortal` | Input for providing action buttons. Default is **`null`**. |
| `@Input()`<br>`twelvehour: boolean` | Whether the clock uses 12 hour format. Default is **`false`**. |
| `@Input()`<br>`timeInterval: number` | Step over minutes. Default is **`1`**. |
| `@Input()`<br>`maxDate: D \| null` | The maximum selectable date. |
| `@Input()`<br>`minDate: D \| null` | The minimum selectable date. |
| `@Input()`<br>`selected: D \| null` | The currently selected datetime. |
| `@Input()`<br>`startAt: D \| null` | A date representing the period (month or year) to start the calendar in. |
| `@Input()`<br>`startView: MtxCalendarView` | The calendar started view. Default is **`'month'`**. |
| `@Input()`<br>`timeInput: boolean` | Whether to show the time input in time mode. When the `touchUi` is enabled it will be disabled. Default is **`false`**. |
| `@Input()`<br>`timeInpuAutoFocus: boolean` | Whether the time input should be auto-focused after view init. Default is **`true`**. |
| `@Output()`<br>`selectedChange: EventEmitter<D \| null>` | Emits when the currently selected datetime changes. |
| `@Output()`<br>`viewChanged: EventEmitter<MtxCalendarView>` | Emits when the current view changes. |

#### `MtxDatetimepicker`

Component responsible for managing the datetimepicker popup/dialog.

Selector: `mtx-datetimepicker`

Exported as: `mtxDatetimepicker`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`color: ThemePalette` | Color palette to use on the datetimepicker's calendar. |
| `@Input()`<br>`disabled: boolean` | Whether the datetimepicker pop-up should be disabled. |
| `@Input()`<br>`opened: boolean` | Whether the calendar is open. |
| `@Input()`<br>`panelClass: string \| string[]` | Classes to be passed to the date picker panel. |
| `@Input()`<br>`_actionsPortal: TemplatePortal` |  Portal with projected action buttons. Default is **`null`**. |
| `@Input()`<br>`restoreFocus: boolean` | Whether to restore focus to the previously-focused element when the calendar is closed. Note that automatic focus restoration is an accessibility feature and it is recommended that you provide your own equivalent, if you decide to turn it off. |
| `@Input()`<br>`touchUi: boolean` | Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a dropdown and elements have more padding to allow for bigger touch targets. |
| `@Input()`<br>`xPosition: DatetimepickerDropdownPositionX`| Preferred position of the datetimepicker in the X axis. |
| `@Input()`<br>`yPosition: DatetimepickerDropdownPositionY`| Preferred position of the datetimepicker in the Y axis. |
| `@Input()`<br>`mode: MtxDatetimepickerMode` | The display mode of datetimepicker pop-up. Default is **`'auto'`**. |
| `@Input()`<br>`type: MtxDatetimepickerType` | The type of datetimepicker. Default is **`'date'`**. |
| `@Input()`<br>`multiYearSelector: boolean` | Whether to show multi-year view. Default is **`false`**. |
| `@Input()`<br>`calendarHeaderComponent: ComponentType<any>` | Component for a custom header |
| `@Input()`<br>`twelvehour: boolean` | Whether the clock uses 12 hour format. Default is **`false`**. |
| `@Input()`<br>`timeInterval: number` | Step over minutes. Default is **`1`**. |
| `@Input()`<br>`maxDate: D \| null` | The maximum selectable date. |
| `@Input()`<br>`minDate: D \| null` | The minimum selectable date. |
| `@Input()`<br>`selected: D \| null` | The currently selected datetime. |
| `@Input()`<br>`startAt: D \| null` | A date representing the period (month or year) to start the calendar in. |
| `@Input()`<br>`startView: MtxCalendarView` | The calendar started view. Default is **`'month'`**. |
| `@Input()`<br>`timeInput: boolean` | Whether to show the time input in time mode. When the `touchUi` is enabled it will be disabled. Default is **`false`**. |
| `@Input()`<br>`timeInpuAutoFocus: boolean` | Whether the time input should be auto-focused after view init. Default is **`true`**. |
| `@Output('opened')`<br>`openedStream: EventEmitter<void>`| Emits when the datetimepicker has been opened. |
| `@Output('closed')`<br>`closedStream: EventEmitter<void>`| Emits when the datetimepicker has been closed. |
| `@Output()`<br>`viewChanged: EventEmitter<MtxCalendarView>` | Emits when the current view changes. |
| `@Output()`<br>`selectedChanged: EventEmitter<D>` | Emits new selected date when selected date changes. |

##### Methods

<a>open</a>

Open the calendar.

| | |
| :--- | :--- |

<a>close</a>

Close the calendar.

| | |
| :--- | :--- |

#### `MtxDatetimepickerToggleIcon`

Can be used to override the icon of a mtxDatetimepickerToggleIcon.

Selector: `[mtxDatetimepickerToggleIcon]`

#### `MtxDatetimepickerToggle`

Selector: `mtx-datetimepicker-toggle`

Exported as: `mtxDatetimepickerToggle`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input('for')`<br>`datetimepicker: MtxDatetimepicker<D>` | Datetimepicker instance that the button will toggle. |
| `@Input()`<br>`disableRipple: boolean` | Whether ripples on the toggle should be disabled. |
| `@Input()`<br>`disabled: boolean` | Whether the toggle button is disabled. |

#### `MtxClock`

A clock that is used as part of the datetimepicker.

Selector: `mtx-clock`

Exported as: `mtxClock`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`dateFilter: (date: D, type: MtxDatetimepickerFilterType) => boolean` | Function used to filter which dates are selectable. |
| `@Input()`<br>`interval: number` | Step over minutes. Default is `1`. |
| `@Input()`<br>`twelvehour: boolean` | Whether the clock uses 12 hour format. Default is `false`. |
| `@Input()`<br>`maxDate: D \| null` | The maximum selectable date. |
| `@Input()`<br>`minDate: D \| null` | The minimum selectable date. |
| `@Input()`<br>`selected: D \| null` | The currently selected datetime. |
| `@Input()`<br>`startView: MtxCalendarView` | The calendar started view. Default is `'month'`. |
| `@Output()`<br>`selectedChanged: EventEmitter<D>` | Emits new selected date when selected date changes. |
| `@Output()`<br>`activeDateChange: EventEmitter<D>` | Emits when any date is activated. |

### Classes

#### `MtxDatetimepickerInputEvent`

An event used for datetimepicker input and change events. We don't always have access to a native input or change event because the event may have been triggered by the user clicking on the calendar popup. For consistency, we always use `MtxDatetimepickerInputEvent` instead.

##### Properties

| Name | Description |
| :--- | :--- |
| `target: MtxDatetimepickerInput<D>` | Reference to the datetimepicker input component that emitted the event. |
| `targetElement: HTMLElement` | Reference to the native input element associated with the datetimepicker input. |
| `value: D \| null` | The new value for the target datetimepicker input. |

### Type aliases

#### `DatetimepickerDropdownPositionX`

Possible positions for the datetimepicker dropdown along the X axis.

```ts
type DatetimepickerDropdownPositionX = 'start' | 'end';
```

#### `DatetimepickerDropdownPositionY`

Possible positions for the datetimepicker dropdown along the Y axis.

```ts
type DatetimepickerDropdownPositionY = 'above' | 'below';
```

#### `MtxDatetimepickerType`

Possible types for datetimepicker dropdown display.

```ts
type MtxDatetimepickerType = 'date' | 'time' | 'month' | 'year' | 'datetime';
```

#### `MtxDatetimepickerMode`

Possible modes for datetimepicker dropdown display.

```ts
type MtxDatetimepickerMode = 'auto' | 'portrait' | 'landscape';
```

#### `MtxCalendarView`

Possible views for datetimepicker calendar.

```ts
type MtxCalendarView = 'clock' | 'month' | 'year' | 'multi-year';
```

#### `MtxClockView`

Possible views for datetimepicker clock.

```ts
type MtxClockView = 'hour' | 'minute';
```

### Constants

#### `MTX_DATETIMEPICKER_SCROLL_STRATEGY`

Injection token that determines the scroll handling while the calendar is open.

```ts
const MTX_DATETIMEPICKER_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
```
