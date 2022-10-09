/** First value of popover's position. */
export type MtxPopoverPositionStart = 'above' | 'below' | 'before' | 'after';

/** Second value of popover's position. */
export type MtxPopoverPositionEnd = MtxPopoverPositionStart | 'center';

/** Popover's position. */
export type MtxPopoverPosition = [MtxPopoverPositionStart, MtxPopoverPositionEnd];

/** Popover's trigger event. */
export type MtxPopoverTriggerEvent = 'click' | 'hover' | 'none';

/** Reason why the popover was closed. */
export type PopoverCloseReason = void | 'click' | 'keydown' | 'tab';
