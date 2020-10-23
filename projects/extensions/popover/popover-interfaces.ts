import { ElementRef, EventEmitter, NgZone, TemplateRef } from '@angular/core';
import {
  MtxPopoverPositionX,
  MtxPopoverPositionY,
  MtxPopoverTriggerEvent,
  MtxPopoverScrollStrategy,
} from './popover-types';

export interface MtxPopoverPanel {
  triggerEvent: MtxPopoverTriggerEvent;
  xPosition: MtxPopoverPositionX;
  yPosition: MtxPopoverPositionY;
  xOffset: number;
  yOffset: number;
  enterDelay: number;
  leaveDelay: number;
  overlapTrigger: boolean;
  arrowOffsetX: number;
  arrowWidth: number;
  closeOnPanelClick: boolean;
  closeOnBackdropClick: boolean;
  scrollStrategy: MtxPopoverScrollStrategy;
  containerPositioning: boolean;
  closeDisabled: boolean;
  templateRef: TemplateRef<any>;
  zone: NgZone;
  closed: EventEmitter<void>;
  setCurrentStyles: () => void;
  setPositionClasses: (x: MtxPopoverPositionX, y: MtxPopoverPositionY) => void;
  _emitCloseEvent: () => void;
}

export interface MtxPopoverConfig {
  triggerEvent: MtxPopoverTriggerEvent;
  xPosition: MtxPopoverPositionX;
  yPosition: MtxPopoverPositionY;
  xOffset: number;
  yOffset: number;
  enterDelay: number;
  leaveDelay: number;
  overlapTrigger: boolean;
  arrowOffsetX: number;
  arrowWidth: number;
  closeOnPanelClick: boolean;
  closeOnBackdropClick: boolean;
  panelClass: string;
  backdropClass: string;
}

export interface MtxTarget {
  _elementRef: ElementRef;
}
