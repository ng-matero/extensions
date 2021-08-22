import { ElementRef, EventEmitter, NgZone, TemplateRef } from '@angular/core';
import {
  MtxPopoverPositionX,
  MtxPopoverPositionY,
  MtxPopoverTriggerEvent,
  MtxPopoverScrollStrategy,
  MtxPopoverPosition,
} from './popover-types';

export interface MtxPopoverPanel {
  triggerEvent: MtxPopoverTriggerEvent;
  position: MtxPopoverPosition;
  /** @deprecated */
  xPosition: MtxPopoverPositionX;
  /** @deprecated */
  yPosition: MtxPopoverPositionY;
  xOffset: number;
  yOffset: number;
  enterDelay: number;
  leaveDelay: number;
  /** @deprecated */
  overlapTrigger: boolean;
  arrowOffsetX: number;
  arrowOffsetY: number;
  arrowWidth: number;
  arrowHeight: number;
  closeOnPanelClick: boolean;
  closeOnBackdropClick: boolean;
  scrollStrategy: MtxPopoverScrollStrategy;
  containerPositioning: boolean;
  closeDisabled: boolean;
  templateRef: TemplateRef<any>;
  zone: NgZone;
  closed: EventEmitter<void>;
  setCurrentStyles: (pos?: MtxPopoverPosition) => void;
  setPositionClasses: (pos?: MtxPopoverPosition) => void;
  _emitCloseEvent: () => void;
}

export interface MtxPopoverConfig {
  triggerEvent: MtxPopoverTriggerEvent;
  position: MtxPopoverPosition;
  /** @deprecated */
  xPosition: MtxPopoverPositionX;
  /** @deprecated */
  yPosition: MtxPopoverPositionY;
  xOffset: number;
  yOffset: number;
  enterDelay: number;
  leaveDelay: number;
  /** @deprecated */
  overlapTrigger: boolean;
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
