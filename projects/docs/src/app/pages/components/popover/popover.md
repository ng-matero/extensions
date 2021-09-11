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
| @Input() `position: MtxPopoverPosition` | Position of the popover. Defaults to **`['below', 'after']`** |
| @Input() `enterDelay: number` | Popover enter delay. Only support hover event. Defaults to **`100`** |
| @Input() `leaveDelay: number` | Popover enter delay. Only support hover event. Defaults to **`100`** |
| @Input() `xOffset: number` | Popover target offset X. Defaults to **`0`** |
| @Input() `yOffset: number` | Popover target offset Y. Defaults to **`0`** |
| @Input() `closeOnPanelClick: boolean` | Whether close popover when click the panel. Defaults to **`false`** |
| @Input() `closeOnBackdropClick: boolean` | Whether close popover when click the backdrop. Defaults to **`true`** |
| @Input() `disableAnimation: boolean` | Whether overlap trigger. Defaults to **`false`** |
| @Input() `focusTrapEnabled: boolean` | Whether the popover should focus trap. Defaults to **`true`** |
| @Input() `focusTrapAutoCaptureEnabled: boolean` | Whether the popover should focus trap auto capture focus. Defaults to **`true`** |

#### MtxPopoverTrigger

Selector: `[mtxPopoverTriggerFor]`

Exported as: `mtxPopoverTrigger`

##### Properties

| Name | Description |
| :--- | :--- |
| @Input() `mtxPopoverTriggerFor: MtxPopoverPanel` | References the popover instance that the trigger is associated with. |
| @Input() `mtxPopoverTriggerOn: MtxPopoverTriggerEvent` | Event for triggering popover click, hover and none. Defaults to **`'hover'`** |
| @Input() `mtxPopoverTargetAt: MtxTarget` | References the popover target instance that the popover positioning is associated with. |

