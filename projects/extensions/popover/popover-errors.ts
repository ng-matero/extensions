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
 * Throws an exception for the case when popover's mtxPopoverPositionX value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 */
export function throwMtxPopoverInvalidPositionX() {
  throw Error(`mtxPopoverPositionX value must be either 'before', 'center' or after'.
      Example: <mtx-popover mtxPopoverPositionX="before" #popover="mtxPopover"></mtx-popover>`);
}

/**
 * Throws an exception for the case when popover's mtxPopoverPositionY value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 */
export function throwMtxPopoverInvalidPositionY() {
  throw Error(`mtxPopoverPositionY value must be either 'above' or below'.
      Example: <mtx-popover mtxPopoverPositionY="above" #popover="mtxPopover"></mtx-popover>`);
}
