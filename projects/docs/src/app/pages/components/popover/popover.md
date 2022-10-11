# Popover

## API reference for Material Extensions Popover

`import { MtxPopoverModule } from '@ng-matero/extensions/popover';`

### Directives

#### `MtxPopover`

Selector: `[mtx-popover]`

Exported as: `mtxPopover`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input('aria-describedby')`<br>`ariaDescribedby: string` | aria-describedby for the popover panel. |
| `@Input('aria-label')`<br>`ariaLabel: string` | aria-label for the popover panel. |
| `@Input('aria-labelledby')`<br>`ariaLabelledby: string` | aria-labelledby for the popover panel. |
| `@Input()`<br>`triggerEvent: MtxPopoverTriggerEvent` | Popover's trigger event. Default is **`hover`**. |
| `@Input()`<br>`enterDelay: number` | Popover's enter delay. Only support hover event. Default is **`100`**. |
| `@Input()`<br>`leaveDelay: number` | Popover's leave delay. Only support hover event. Default is **`100`**. |
| `@Input()`<br>`position: MtxPopoverPosition` | Popover's position. Default is **`['below', 'after']`**. |
| `@Input()`<br>`xOffset: number` | Popover-panel's X offset. Default is **`0`**. |
| `@Input()`<br>`yOffset: number` | Popover-panel's Y offset. Default is **`0`**. |
| `@Input()`<br>`arrowWidth: number` | Popover-arrow's width. Default is **`16`**. |
| `@Input()`<br>`arrowHeight: number` | Popover-arrow's height. Default is **`16`**. |
| `@Input()`<br>`arrowOffsetX: number` | Popover-arrow's X offset. Default is **`20`**. |
| `@Input()`<br>`arrowOffsetY: number` | Popover-arrow's Y offset. Default is **`20`**. |
| `@Input()`<br>`closeOnPanelClick: boolean` | Whether popover can be closed when click the popover-panel. Default is **`false`**. |
| `@Input()`<br>`closeOnBackdropClick: boolean` | Whether popover can be closed when click the backdrop. Default is **`true`**. |
| `@Input()`<br>`focusTrapEnabled: boolean` | Whether the popover should focus trap. Default is **`false`**. |
| `@Input()`<br>`focusTrapAutoCaptureEnabled: boolean` | Whether the popover should focus trap auto capture. Default is **`false`**. |
| `@Input()`<br>`backdropClass: string` | Class to be added to the backdrop element. |
| `@Input()`<br>`hasBackdrop: boolean \| undefined` | Whether the popover has a backdrop. It will always be false if the trigger event is hover. |
| `@Input('class')`<br>`panelClass: string` | This method takes classes set on the host mtx-popover element and applies them on the popover template that displays in the overlay container. Otherwise, it's difficult to style the containing popover from outside the component. |
| `@Input()`<br>`elevation: number` | Popover-panel's elevation (0~24). Default is **`8`**. |
| `@Output()`<br>`closed: EventEmitter<PopoverCloseReason>` | Event emitted when the popover is closed. |

#### `MtxPopoverTrigger`

Selector: `[mtxPopoverTriggerFor]`

Exported as: `mtxPopoverTrigger`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`mtxPopoverTriggerFor: MtxPopoverPanel` | References the popover instance that the trigger is associated with. |
| `@Input()`<br>`mtxPopoverTriggerOn: MtxPopoverTriggerEvent` | Event for triggering popover click, hover and none. Default is **`'hover'`**. |
| `@Input()`<br>`mtxPopoverTargetAt: MtxPopoverTarget` | References the popover target instance that the popover positioning is associated with. |

#### `MtxPopoverTarget`

Selector: `mtx-popover-target, [mtxPopoverTarget]`

Exported as: `mtxPopoverTarget`

### Interfaces

#### `MtxPopoverConfig`

```ts
export interface MtxPopoverDefaultOptions {
  triggerEvent?: MtxPopoverTriggerEvent;
  enterDelay?: number;
  leaveDelay?: number;
  position?: MtxPopoverPosition;
  xOffset?: number;
  yOffset?: number;
  arrowWidth?: number;
  arrowHeight?: number;
  arrowOffsetX?: number;
  arrowOffsetY?: number;
  closeOnPanelClick?: boolean;
  closeOnBackdropClick?: boolean;
  overlayPanelClass?: string;
  backdropClass?: string;
  hasBackdrop?: boolean;
  focusTrapEnabled?: boolean;
  focusTrapAutoCaptureEnabled?: boolean;
  elevation?: number;
}
```

### Type aliases

#### `MtxPopoverPositionStart`

```ts
type MtxPopoverPositionStart = 'above' | 'below' | 'before' | 'after';
```

#### `MtxPopoverPositionEnd`

```ts
type MtxPopoverPositionEnd = MtxPopoverPositionStart | 'center';
```

#### `MtxPopoverPosition`

```ts
type MtxPopoverPosition = [MtxPopoverPositionStart, MtxPopoverPositionEnd];
```

#### `MtxPopoverTriggerEvent`

```ts
type MtxPopoverTriggerEvent = 'click' | 'hover' | 'none';
```

### Constants

#### `MTX_POPOVER_DEFAULT_OPTIONS`

Injection token to be used to override the default options for `mtx-popover`.

```ts
const MTX_POPOVER_DEFAULT_OPTIONS: InjectionToken<MtxPopoverDefaultOptions>;
```

#### `MTX_POPOVER_SCROLL_STRATEGY`

Injection token that determines the scroll handling while the popover is open.

```ts
const MTX_POPOVER_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
```

#### `MTX_POPOVER_CONTENT`

Injection token that can be used to reference instances of `MtxPopoverContent`. It serves as alternative token to the actual `MtxPopoverContent` class which could cause unnecessary retention of the class and its directive metadata.

```ts
const MTX_POPOVER_CONTENT: InjectionToken<MtxPopoverContent>;
```
