import { ElementRef, EventEmitter, NgZone, TemplateRef } from '@angular/core';
import {
  MtxPopoverPositionX,
  MtxPopoverPositionY,
  MtxPopoverTriggerEvent,
  MtxPopoverScrollStrategy,
} from './popover-types';

export interface MtxPopoverPanel {
  positionX: MtxPopoverPositionX;
  positionY: MtxPopoverPositionY;
  containerPositioning: boolean;
  overlapTrigger: boolean;
  triggerEvent: MtxPopoverTriggerEvent;
  scrollStrategy: MtxPopoverScrollStrategy;
  enterDelay: number;
  leaveDelay: number;
  targetOffsetX: number;
  targetOffsetY: number;
  arrowOffsetX: number;
  arrowWidth: number;
  closeOnClick: boolean;
  closeDisabled: boolean;
  setCurrentStyles: () => void;
  templateRef: TemplateRef<any>;
  close: EventEmitter<void>;
  zone: NgZone;
  setPositionClasses: (x: MtxPopoverPositionX, y: MtxPopoverPositionY) => void;
  _emitCloseEvent: () => void;
}

export interface MtxPopoverConfig {
  positionX: MtxPopoverPositionX;
  positionY: MtxPopoverPositionY;
  overlapTrigger: boolean;
  triggerEvent: MtxPopoverTriggerEvent;
  triggerDelay: number;
  targetOffsetX: number;
  targetOffsetY: number;
  arrowOffsetX: number;
  arrowWidth: number;
  closeOnClick: boolean;
}

export interface MtxTarget {
  _elementRef: ElementRef;
}
