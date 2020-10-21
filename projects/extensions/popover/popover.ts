import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  ElementRef,
  ChangeDetectionStrategy,
  HostBinding,
  NgZone,
  Optional,
} from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE } from '@angular/cdk/keycodes';
import { Directionality } from '@angular/cdk/bidi';

import {
  MtxPopoverPositionX,
  MtxPopoverPositionY,
  MtxPopoverTriggerEvent,
  MtxPopoverScrollStrategy,
} from './popover-types';
import { throwMtxPopoverInvalidPositionX, throwMtxPopoverInvalidPositionY } from './popover-errors';
import { MtxPopoverPanel } from './popover-interfaces';
import { transformPopover } from './popover-animations';

@Component({
  selector: 'mtx-popover',
  templateUrl: './popover.html',
  styleUrls: ['./popover.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [transformPopover],
  exportAs: 'mtxPopover',
})
export class MtxPopover implements MtxPopoverPanel, OnDestroy {
  @HostBinding('attr.role') role = 'dialog';

  /** Settings for popover, view setters and getters for more detail */
  private _positionX: MtxPopoverPositionX = 'after';
  private _positionY: MtxPopoverPositionY = 'below';
  private _triggerEvent: MtxPopoverTriggerEvent = 'hover';
  private _scrollStrategy: MtxPopoverScrollStrategy = 'reposition';
  private _enterDelay = 100;
  private _leaveDelay = 100;
  private _overlapTrigger = false;
  private _disableAnimation = false;
  private _targetOffsetX = 0;
  private _targetOffsetY = 0;
  private _arrowOffsetX = 20;
  private _arrowWidth = 8;
  private _closeOnClick = false;
  private _focusTrapEnabled = true;
  private _focusTrapAutoCaptureEnabled = true;

  /** Config object to be passed into the popover's ngClass */
  _classList: { [key: string]: boolean } = {};

  // TODO: Write comment description
  /** */
  public containerPositioning = false;

  /** Closing disabled on popover */
  public closeDisabled = false;

  /** Config object to be passed into the popover's arrow ngStyle */
  public popoverPanelStyles: {};

  /** Config object to be passed into the popover's arrow ngStyle */
  public popoverArrowStyles: {};

  /** Config object to be passed into the popover's content ngStyle */
  public popoverContentStyles: {};

  /** Emits the current animation state whenever it changes. */
  _onAnimationStateChange = new EventEmitter<AnimationEvent>();

  /** Position of the popover in the X axis. */
  @Input('mtxPopoverPositionX')
  get positionX() {
    return this._positionX;
  }
  set positionX(value: MtxPopoverPositionX) {
    if (value !== 'before' && value !== 'after' && value !== 'center') {
      throwMtxPopoverInvalidPositionX();
    }
    this._positionX = value;
    this.setPositionClasses();
  }

  /** Position of the popover in the Y axis. */
  @Input('mtxPopoverPositionY')
  get positionY() {
    return this._positionY;
  }
  set positionY(value: MtxPopoverPositionY) {
    if (value !== 'above' && value !== 'below') {
      throwMtxPopoverInvalidPositionY();
    }
    this._positionY = value;
    this.setPositionClasses();
  }

  /** Popover trigger event */
  @Input('mtxPopoverTriggerOn')
  get triggerEvent(): MtxPopoverTriggerEvent {
    return this._triggerEvent;
  }
  set triggerEvent(value: MtxPopoverTriggerEvent) {
    this._triggerEvent = value;
  }

  /** Popover scroll strategy */
  @Input('mtxPopoverScrollStrategy')
  get scrollStrategy(): MtxPopoverScrollStrategy {
    return this._scrollStrategy;
  }
  set scrollStrategy(value: MtxPopoverScrollStrategy) {
    this._scrollStrategy = value;
  }

  /** Popover enter delay */
  @Input('mtxPopoverEnterDelay')
  get enterDelay(): number {
    return this._enterDelay;
  }
  set enterDelay(value: number) {
    this._enterDelay = value;
  }

  /** Popover leave delay */
  @Input('mtxPopoverLeaveDelay')
  get leaveDelay(): number {
    return this._leaveDelay;
  }
  set leaveDelay(value: number) {
    this._leaveDelay = value;
  }

  /** Popover overlap trigger */
  @Input('mtxPopoverOverlapTrigger')
  get overlapTrigger(): boolean {
    return this._overlapTrigger;
  }
  set overlapTrigger(value: boolean) {
    this._overlapTrigger = value;
  }

  /** Popover target offset x */
  @Input('mtxPopoverOffsetX')
  get targetOffsetX(): number {
    return this._targetOffsetX;
  }
  set targetOffsetX(value: number) {
    this._targetOffsetX = value;
  }

  /** Popover target offset y */
  @Input('mtxPopoverOffsetY')
  get targetOffsetY(): number {
    return this._targetOffsetY;
  }
  set targetOffsetY(value: number) {
    this._targetOffsetY = value;
  }

  /** Popover arrow offset x */
  @Input('mtxPopoverArrowOffsetX')
  get arrowOffsetX(): number {
    return this._arrowOffsetX;
  }
  set arrowOffsetX(value: number) {
    this._arrowOffsetX = value;
  }

  /** Popover arrow width */
  @Input('mtxPopoverArrowWidth')
  get arrowWidth(): number {
    return this._arrowWidth;
  }
  set arrowWidth(value: number) {
    this._arrowWidth = value;
  }

  /**
   * Popover container close on click
   * default: true
   */
  @Input('mtxPopoverCloseOnClick')
  get closeOnClick(): boolean {
    return this._closeOnClick;
  }
  set closeOnClick(value: boolean) {
    this._closeOnClick = coerceBooleanProperty(value);
  }

  /**
   * Disable animations of popover and all child elements
   * default: false
   */
  @Input('mtxPopoverDisableAnimation')
  get disableAnimation(): boolean {
    return this._disableAnimation;
  }
  set disableAnimation(value: boolean) {
    this._disableAnimation = coerceBooleanProperty(value);
  }

  /**
   * Popover focus trap using cdkTrapFocus
   * default: true
   */
  @Input('mtxFocusTrapEnabled')
  get focusTrapEnabled(): boolean {
    return this._focusTrapEnabled;
  }
  set focusTrapEnabled(value: boolean) {
    this._focusTrapEnabled = coerceBooleanProperty(value);
  }

  /**
   * Popover focus trap auto capture using cdkTrapFocusAutoCapture
   * default: true
   */
  @Input('mtxFocusTrapAutoCaptureEnabled')
  get focusTrapAutoCaptureEnabled(): boolean {
    return this._focusTrapAutoCaptureEnabled;
  }
  set focusTrapAutoCaptureEnabled(value: boolean) {
    this._focusTrapAutoCaptureEnabled = coerceBooleanProperty(value);
  }

  /**
   * This method takes classes set on the host md-popover element and applies them on the
   * popover template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing popover from outside the component.
   * @param classes list of class names
   */
  @Input('class')
  set panelClass(classes: string) {
    if (classes && classes.length) {
      this._classList = classes.split(' ').reduce((obj: any, className: string) => {
        obj[className] = true;
        return obj;
      }, {});

      this._elementRef.nativeElement.className = '';
      this.setPositionClasses();
    }
  }

  /**
   * This method takes classes set on the host md-popover element and applies them on the
   * popover template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing popover from outside the component.
   * @deprecated Use `panelClass` instead.
   */
  @Input()
  get classList(): string {
    return this.panelClass;
  }
  set classList(classes: string) {
    this.panelClass = classes;
  }

  /** Event emitted when the popover is closed. */
  @Output() close = new EventEmitter<void>();

  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

  constructor(
    @Optional() private _dir: Directionality,
    private _elementRef: ElementRef,
    public zone: NgZone
  ) {
    this.setPositionClasses();
  }

  ngOnDestroy() {
    this._emitCloseEvent();
    this.close.complete();
  }

  /** Handle a keyboard event from the popover, delegating to the appropriate action. */
  _handleKeydown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case ESCAPE:
        this._emitCloseEvent();
        return;
    }
  }

  /**
   * This emits a close event to which the trigger is subscribed. When emitted, the
   * trigger will close the popover.
   */
  _emitCloseEvent(): void {
    this.close.emit();
  }

  /** Close popover on click if closeOnClick is true */
  onClick() {
    if (this.closeOnClick) {
      this._emitCloseEvent();
    }
  }

  /**
   * TODO: Refactor when @angular/cdk includes feature I mentioned on github see link below.
   * https://github.com/angular/material2/pull/5493#issuecomment-313085323
   */
  /** Disables close of popover when leaving trigger element and mouse over the popover */
  onMouseOver() {
    if (this.triggerEvent === 'hover') {
      this.closeDisabled = true;
    }
  }
  /** Enables close of popover when mouse leaving popover element */
  onMouseLeave() {
    if (this.triggerEvent === 'hover') {
      this.closeDisabled = false;
      this._emitCloseEvent();
    }
  }

  // TODO: Refactor how styles are set and updated on the component, use best practices.
  // TODO: If arrow left and right positioning is requested, see if flex direction can be used to work with order.
  /** Sets the current styles for the popover to allow for dynamically changing settings */
  setCurrentStyles() {
    const left =
      this.positionX === 'after'
        ? this.arrowOffsetX - this.arrowWidth + 'px'
        : this.positionX === 'center'
        ? `calc(50% - ${this.arrowOffsetX / 2}px)`
        : '';
    const right = this.positionX === 'before' ? this.arrowOffsetX - this.arrowWidth + 'px' : '';

    this.popoverArrowStyles = {
      left: this._dir.value === 'ltr' ? left : right,
      right: this._dir.value === 'ltr' ? right : left,
    };
  }

  /**
   * It's necessary to set position-based classes to ensure the popover panel animation
   * folds out from the correct direction.
   */
  setPositionClasses(posX = this.positionX, posY = this.positionY): void {
    this._classList['mtx-popover-before'] = posX === 'before';
    this._classList['mtx-popover-center'] = posX === 'center';
    this._classList['mtx-popover-after'] = posX === 'after';
    this._classList['mtx-popover-above'] = posY === 'above';
    this._classList['mtx-popover-below'] = posY === 'below';
  }
}
