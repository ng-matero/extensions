export type MtxPopoverPositionX = 'before' | 'after' | 'center';

export type MtxPopoverPositionY = 'above' | 'below';

export type MtxPopoverPosition = (MtxPopoverPositionX | MtxPopoverPositionY)[];

export type MtxPopoverTriggerEvent = 'click' | 'hover' | 'none';

export type MtxPopoverScrollStrategy = 'noop' | 'close' | 'block' | 'reposition';
