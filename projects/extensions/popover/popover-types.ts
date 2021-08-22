export type MtxPopoverPositionStart = 'above' | 'below' | 'before' | 'after';

export type MtxPopoverPositionEnd = MtxPopoverPositionStart | 'center';

export type MtxPopoverPosition = [MtxPopoverPositionStart, MtxPopoverPositionEnd];

export type MtxPopoverTriggerEvent = 'click' | 'hover' | 'none';

export type MtxPopoverScrollStrategy = 'noop' | 'close' | 'block' | 'reposition';
