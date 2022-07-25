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
| @Input() `mtxDatetimepickerFilter: (date: D \| null, type: MtxDatetimepickerFilterType) => boolean` | Function that can be used to filter out dates within the datetimepicker. |
| @Input() `disabled: boolean` | Whether the datetimepicker-input is disabled. |
| @Input() `mtxDatetimepicker: MtxDatetimepicker<D>` | The datetimepicker that this input is associated with. |
| @Input() `max: D \| null` | The maximum valid date. |
| @Input() `min: D \| null` | The minimum valid date. | 
| @Input() `value: D \| null` | The value of the input. |
| @Output() `dateChange: EventEmitter<MtxDatetimepickerInputEvent<D>>` | Emits when a `change` event is fired on this `<input>`. |
| @Output() `dateInput: EventEmitter<MtxDatetimepickerInputEvent<D>>` | Emits when an `input` event is fired on this `<input>`. |

##### Methods

| Name | Description |
| :--- | :--- |
| `getConnectedOverlayOrigin(): ElementRef` | Gets the element that the datetimepicker popup should be connected to. |
| `getOverlayLabelId(): string \| null` | Gets the ID of an element that should be used a description for the overlay. |
| `getThemePalette(): ThemePalette` | Returns the palette used by the input's form field, if any. |

#### `MtxCalendar`

A calendar that is used as part of the datetimepicker.

Selector: `mtx-calendar`

Exported as: `mtxCalendar`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input() `dateFilter: (date: D, type: MtxDatetimepickerFilterType) => boolean` | Function used to filter which dates are selectable. |
| @Input() `type: MtxDatetimepickerType` | The type of datetimepicker. Default is `'date'`. |
| @Input() `multiYearSelector: boolean` | Whether to show multi-year view. Default is `false`. |
| @Input() `twelvehour: boolean` | Whether the clock uses 12 hour format. Default is `false`. |
| @Input() `timeInterval: number` | Step over minutes. Default is `1`. |
| @Input() `maxDate: D \| null` | The maximum selectable date. |
| @Input() `minDate: D \| null` | The minimum selectable date. |
| @Input() `selected: D \| null` | The currently selected datetime. |
| @Input() `startAt: D \| null` | A date representing the period (month or year) to start the calendar in. |
| @Input() `startView: MtxCalendarView` | The calendar started view. Default is `'month'`. |
| @Output() `selectedChange: EventEmitter<D \| null>` | Emits when the currently selected datetime changes. |
| @Output() `viewChanged: EventEmitter<MtxCalendarView>` | Emits when the current view changes. |

#### `MtxDatetimepicker`

Component responsible for managing the datetimepicker popup/dialog.

Selector: `mtx-datetimepicker`

Exported as: `mtxDatetimepicker`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input() `color: ThemePalette` | Color palette to use on the datetimepicker's calendar. |
| @Input() `disabled: boolean` | Whether the datetimepicker pop-up should be disabled. |
| @Input() `opened: boolean` | Whether the calendar is open. |
| @Input() `panelClass: string \| string[]` | Classes to be passed to the date picker panel. Supports string and string array values, similar to ngClass. |
| @Input() `restoreFocus: boolean` | Whether to restore focus to the previously-focused element when the calendar is closed. Note that automatic focus restoration is an accessibility feature and it is recommended that you provide your own equivalent, if you decide to turn it off. |
| @Input() `touchUi: boolean` | Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a dropdown and elements have more padding to allow for bigger touch targets. |
| @Input() `xPosition: DatetimepickerDropdownPositionX`| Preferred position of the datetimepicker in the X axis. |
| @Input() `yPosition: DatetimepickerDropdownPositionY`| Preferred position of the datetimepicker in the Y axis. |
| @Input() `mode: MtxDatetimepickerMode` | The display mode of datetimepicker pop-up. Default is `'auto'`. |
| @Input() `type: MtxDatetimepickerType` | The type of datetimepicker. Default is `'date'`. |
| @Input() `multiYearSelector: boolean` | Whether to show multi-year view. Default is `false`. |
| @Input() `twelvehour: boolean` | Whether the clock uses 12 hour format. Default is `false`. |
| @Input() `timeInterval: number` | Step over minutes. Default is `1`. |
| @Input() `maxDate: D \| null` | The maximum selectable date. |
| @Input() `minDate: D \| null` | The minimum selectable date. |
| @Input() `selected: D \| null` | The currently selected datetime. |
| @Input() `startAt: D \| null` | A date representing the period (month or year) to start the calendar in. |
| @Input() `startView: MtxCalendarView` | The calendar started view. Default is `'month'`. |
| @Output(`'opened'`) `openedStream: EventEmitter<void>`| Emits when the datetimepicker has been opened. |
| @Output(`'closed'`) `closedStream: EventEmitter<void>`| Emits when the datetimepicker has been closed. |
| @Output() `viewChanged: EventEmitter<MtxCalendarView>` | Emits when the current view changes. |
| @Output() `selectedChanged: EventEmitter<D>` | Emits new selected date when selected date changes. |

##### Methods

| Name | Description |
| :--- | :--- |
| `open(): void` | Open the calendar. |
| `close(): void` | Close the calendar. |

#### `MtxDatetimepickerToggleIcon`

Can be used to override the icon of a mtxDatetimepickerToggleIcon.

Selector: `[mtxDatetimepickerToggleIcon]`

#### `MtxDatetimepickerToggle`

Selector: `mtx-datetimepicker-toggle`

Exported as: `mtxDatetimepickerToggle`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input(`'for'`) `datetimepicker: MtxDatetimepicker<D>` | Datetimepicker instance that the button will toggle. |
| @Input() `disableRipple: boolean` | Whether ripples on the toggle should be disabled. |
| @Input() `disabled: boolean` | Whether the toggle button is disabled. |

#### `MtxClock`

A clock that is used as part of the datetimepicker.

Selector: `mtx-clock`

Exported as: `mtxClock`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input() `dateFilter: (date: D, type: MtxDatetimepickerFilterType) => boolean` | Function used to filter which dates are selectable. |
| @Input() `interval: number` | Step over minutes. Default is `1`. |
| @Input() `twelvehour: boolean` | Whether the clock uses 12 hour format. Default is `false`. |
| @Input() `maxDate: D \| null` | The maximum selectable date. |
| @Input() `minDate: D \| null` | The minimum selectable date. |
| @Input() `selected: D \| null` | The currently selected datetime. |
| @Input() `startView: MtxCalendarView` | The calendar started view. Default is `'month'`. |
| @Output() `selectedChanged: EventEmitter<D>` | Emits new selected date when selected date changes. |
| @Output() `activeDateChange: EventEmitter<D>` | Emits when any date is activated. |

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
