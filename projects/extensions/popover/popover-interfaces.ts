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
  overlapTrigger: boolean;
  enterDelay: number;
  leaveDelay: number;
  panelOffsetX: number;
  panelOffsetY: number;
  arrowOffsetX: number;
  closeOnPanelClick: boolean;
  closeOnBackdropClick: boolean;
  scrollStrategy: MtxPopoverScrollStrategy;
  containerPositioning: boolean;
  closeDisabled: boolean;
  templateRef: TemplateRef<any>;
  zone: NgZone;
  close: EventEmitter<void>;
  setCurrentStyles: () => void;
  setPositionClasses: (x: MtxPopoverPositionX, y: MtxPopoverPositionY) => void;
  _emitCloseEvent: () => void;
}

export interface MtxPopoverConfig {
  xPosition: MtxPopoverPositionX;
  yPosition: MtxPopoverPositionY;
  overlapTrigger: boolean;
  triggerEvent: MtxPopoverTriggerEvent;
  panelOffsetX: number;
  panelOffsetY: number;
  arrowOffsetX: number;
  closeOnPanelClick: boolean;
}

export interface MtxTarget {
  _elementRef: ElementRef;
}
