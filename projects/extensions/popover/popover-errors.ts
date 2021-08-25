/**
 * Throws an exception for the case when popover trigger doesn't have a valid mtx-popover instance
 */
export function throwMtxPopoverMissingError() {
  throw Error(`mtx-popover-trigger: must pass in an mtx-popover instance.

    Example:
      <mtx-popover #popover="mtxPopover"></mtx-popover>
      <button [mtxPopoverTriggerFor]="popover"></button>`);
}

/**
 * Throws an exception for the case when popover's mtxPopoverPosition[0] value isn't valid.
 * In other words, it doesn't match 'above', 'below', 'before' or 'after'.
 */
export function throwMtxPopoverInvalidPositionStart() {
  throw Error(`mtxPopoverPosition[0] value must be either 'above', 'below', 'before' or 'after'.
    Example: <mtx-popover [position]="['below', 'after']" #popover="mtxPopover"></mtx-popover>`);
}

/**
 * Throws an exception for the case when popover's mtxPopoverPosition[1] value isn't valid.
 * In other words, it doesn't match 'above', 'below', 'before', 'after' or 'center'.
 */
export function throwMtxPopoverInvalidPositionEnd() {
  throw Error(`mtxPopoverPosition[1] value must be either 'above', 'below', 'before', 'after' or 'center'.
    Example: <mtx-popover [position]="['below', 'after']" #popover="mtxPopover"></mtx-popover>`);
}
