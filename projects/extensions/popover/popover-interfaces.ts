import { Direction } from '@angular/cdk/bidi';
import { EventEmitter, TemplateRef } from '@angular/core';
import { MtxPopoverTriggerEvent, MtxPopoverPosition, PopoverCloseReason } from './popover-types';

/**
 * Interface for a custom popover panel that can be used with `mtxPopoverTriggerFor`.
 * @docs-private
 */
export interface MtxPopoverPanel {
  triggerEvent: MtxPopoverTriggerEvent;
  enterDelay: number;
  leaveDelay: number;
  position: MtxPopoverPosition;
  xOffset: number;
  yOffset: number;
  closeOnPanelClick: boolean;
  closeOnBackdropClick: boolean;
  closeDisabled: boolean;
  backdropClass?: string;
  overlayPanelClass?: string | string[];
  hasBackdrop?: boolean;
  templateRef: TemplateRef<any>;
  lazyContent?: any;
  direction?: Direction;
  readonly panelId?: string;
  readonly closed: EventEmitter<PopoverCloseReason>;
  setCurrentStyles: (pos?: MtxPopoverPosition) => void;
  setPositionClasses: (pos?: MtxPopoverPosition) => void;
  setElevation: () => void;
}

/** Default `mtx-popover` options that can be overridden. */
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
  hideArrow?: boolean;
  closeOnPanelClick?: boolean;
  closeOnBackdropClick?: boolean;
  overlayPanelClass?: string;
  backdropClass?: string;
  hasBackdrop?: boolean;
  focusTrapEnabled?: boolean;
  focusTrapAutoCaptureEnabled?: boolean;
}
