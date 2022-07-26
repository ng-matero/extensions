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
| @Input() `position: MtxPopoverPosition` | Position of the popover. Default is **`['below', 'after']`**. |
| @Input() `enterDelay: number` | Popover enter delay. Only support hover event. Default is **`100`**. |
| @Input() `leaveDelay: number` | Popover enter delay. Only support hover event. Default is **`100`**. |
| @Input() `xOffset: number` | Popover target offset X. Default is **`0`**. |
| @Input() `yOffset: number` | Popover target offset Y. Default is **`0`**. |
| @Input() `closeOnPanelClick: boolean` | Whether close popover when click the panel. Default is **`false`**. |
| @Input() `closeOnBackdropClick: boolean` | Whether close popover when click the backdrop. Default is **`true`**. |
| @Input() `disableAnimation: boolean` | Whether the popover animations are disabled. Default is **`false`**. |
| @Input() `focusTrapEnabled: boolean` | Whether the popover should focus trap. Default is **`true`**. |
| @Input() `focusTrapAutoCaptureEnabled: boolean` | Whether the popover should focus trap auto capture focus. Default is **`true`**. |

#### `MtxPopoverTrigger`

Selector: `[mtxPopoverTriggerFor]`

Exported as: `mtxPopoverTrigger`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input() `mtxPopoverTriggerFor: MtxPopoverPanel` | References the popover instance that the trigger is associated with. |
| @Input() `mtxPopoverTriggerOn: MtxPopoverTriggerEvent` | Event for triggering popover click, hover and none. Default is **`'hover'`**. |
| @Input() `mtxPopoverTargetAt: MtxTarget` | References the popover target instance that the popover positioning is associated with. |

#### `MtxPopoverTarget`

Selector: `mtx-popover-target, [mtxPopoverTarget]`

Exported as: `mtxPopoverTarget`

### Interfaces

#### `MtxPopoverConfig`

```ts
interface MtxPopoverConfig {
  triggerEvent: MtxPopoverTriggerEvent;
  position: MtxPopoverPosition;
  xOffset: number;
  yOffset: number;
  enterDelay: number;
  leaveDelay: number;
  arrowOffsetX: number;
  arrowOffsetY: number;
  arrowWidth: number;
  arrowHeight: number;
  closeOnPanelClick: boolean;
  closeOnBackdropClick: boolean;
  panelClass: string;
  backdropClass: string;
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

#### `MtxPopoverScrollStrategy`

```ts
type MtxPopoverScrollStrategy = 'noop' | 'close' | 'block' | 'reposition';
```
