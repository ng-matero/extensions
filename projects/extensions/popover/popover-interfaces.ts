import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { MtxPopoverTriggerEvent, MtxPopoverPosition } from './popover-types';

export interface MtxPopoverPanel {
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
  closeDisabled: boolean;
  templateRef: TemplateRef<any>;
  lazyContent?: any;
  readonly closed: EventEmitter<PopoverCloseReason>;
  readonly panelId?: string;
  setCurrentStyles: (pos?: MtxPopoverPosition) => void;
  setPositionClasses: (pos?: MtxPopoverPosition) => void;
}

export interface MtxPopoverConfig {
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

export interface MtxTarget {
  _elementRef: ElementRef;
}

/** Reason why the popover was closed. */
export type PopoverCloseReason = void | 'click' | 'keydown' | 'tab';
