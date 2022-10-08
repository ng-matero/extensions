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
  NgZone,
  Optional,
  ContentChild,
  OnInit,
} from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { Directionality } from '@angular/cdk/bidi';
import {
  MtxPopoverTriggerEvent,
  MtxPopoverScrollStrategy,
  MtxPopoverPosition,
} from './popover-types';
import {
  throwMtxPopoverInvalidPositionStart,
  throwMtxPopoverInvalidPositionEnd,
} from './popover-errors';
import { MtxPopoverPanel, PopoverCloseReason } from './popover-interfaces';
import { transformPopover } from './popover-animations';
import { MtxPopoverContent, MTX_POPOVER_CONTENT } from './popover-content';
import { Subject } from 'rxjs';

let popoverPanelUid = 0;

@Component({
  selector: 'mtx-popover',
  templateUrl: './popover.html',
  styleUrls: ['./popover.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [transformPopover],
  exportAs: 'mtxPopover',
})
export class MtxPopover implements MtxPopoverPanel, OnInit, OnDestroy {
  private _position: MtxPopoverPosition = ['below', 'after'];
  private _triggerEvent: MtxPopoverTriggerEvent = 'hover';
  private _scrollStrategy: MtxPopoverScrollStrategy = 'reposition';
  private _enterDelay = 100;
  private _leaveDelay = 100;
  private _panelOffsetX = 0;
  private _panelOffsetY = 0;
  private _closeOnPanelClick = false;
  private _closeOnBackdropClick = true;
  private _disableAnimation = false;
  private _focusTrapEnabled = true;
  private _focusTrapAutoCaptureEnabled = true;
  private _arrowOffsetX = 20;
  private _arrowOffsetY = 20;
  private _arrowWidth = 16;
  private _arrowHeight = 16;

  /** Config object to be passed into the popover's ngClass */
  _classList: { [key: string]: boolean } = {};

  /** Current state of the panel animation. */
  _panelAnimationState: 'void' | 'enter' = 'void';

  /** Emits whenever an animation on the menu completes. */
  readonly _animationDone = new Subject<AnimationEvent>();

  /** Whether the menu is animating. */
  _isAnimating = false;

  /** Closing disabled on popover */
  closeDisabled = false;

  /** Config object to be passed into the popover's arrow ngStyle */
  arrowStyles!: Record<string, unknown>;

  /** Position of the popover. */
  @Input()
  get position() {
    return this._position;
  }
  set position(value: MtxPopoverPosition) {
    if (!['before', 'after', 'above', 'below'].includes(value[0])) {
      throwMtxPopoverInvalidPositionStart();
    }
    if (!['before', 'after', 'above', 'below', 'center'].includes(value[1])) {
      throwMtxPopoverInvalidPositionEnd();
    }
    this._position = value;
    this.setPositionClasses();
  }

  /** Popover trigger event */
  @Input()
  get triggerEvent(): MtxPopoverTriggerEvent {
    return this._triggerEvent;
  }
  set triggerEvent(value: MtxPopoverTriggerEvent) {
    this._triggerEvent = value;
  }

  /** Popover scroll strategy */
  @Input()
  get scrollStrategy(): MtxPopoverScrollStrategy {
    return this._scrollStrategy;
  }
  set scrollStrategy(value: MtxPopoverScrollStrategy) {
    this._scrollStrategy = value;
  }

  /** Popover enter delay */
  @Input()
  get enterDelay(): number {
    return this._enterDelay;
  }
  set enterDelay(value: number) {
    this._enterDelay = value;
  }

  /** Popover leave delay */
  @Input()
  get leaveDelay(): number {
    return this._leaveDelay;
  }
  set leaveDelay(value: number) {
    this._leaveDelay = value;
  }

  /** Popover target offset x */
  @Input()
  get xOffset(): number {
    return this._panelOffsetX;
  }
  set xOffset(value: number) {
    this._panelOffsetX = value;
  }

  /** Popover target offset y */
  @Input()
  get yOffset(): number {
    return this._panelOffsetY;
  }
  set yOffset(value: number) {
    this._panelOffsetY = value;
  }

  /** Popover arrow offset x */
  @Input()
  get arrowOffsetX(): number {
    return this._arrowOffsetX;
  }
  set arrowOffsetX(value: number) {
    this._arrowOffsetX = value;
  }

  /** Popover arrow offset y */
  @Input()
  get arrowOffsetY(): number {
    return this._arrowOffsetY;
  }
  set arrowOffsetY(value: number) {
    this._arrowOffsetY = value;
  }

  /** Popover arrow width */
  @Input()
  get arrowWidth(): number {
    return this._arrowWidth;
  }
  set arrowWidth(value: number) {
    this._arrowWidth = value;
  }

  /** Popover arrow height */
  @Input()
  get arrowHeight(): number {
    return this._arrowHeight;
  }
  set arrowHeight(value: number) {
    this._arrowHeight = value;
  }

  /** Popover close on container click */
  @Input()
  get closeOnPanelClick(): boolean {
    return this._closeOnPanelClick;
  }
  set closeOnPanelClick(value: boolean) {
    this._closeOnPanelClick = coerceBooleanProperty(value);
  }

  /** Popover close on backdrop click */
  @Input()
  get closeOnBackdropClick(): boolean {
    return this._closeOnBackdropClick;
  }
  set closeOnBackdropClick(value: boolean) {
    this._closeOnBackdropClick = coerceBooleanProperty(value);
  }

  /** Disable animations of popover and all child elements */
  @Input()
  get disableAnimation(): boolean {
    return this._disableAnimation;
  }
  set disableAnimation(value: boolean) {
    this._disableAnimation = coerceBooleanProperty(value);
  }

  /** Popover focus trap using cdkTrapFocus */
  @Input()
  get focusTrapEnabled(): boolean {
    return this._focusTrapEnabled;
  }
  set focusTrapEnabled(value: boolean) {
    this._focusTrapEnabled = coerceBooleanProperty(value);
  }

  /** Popover focus trap auto capture using cdkTrapFocusAutoCapture */
  @Input()
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
   * @breaking-change 8.0.0
   */
  @Input()
  get classList(): string {
    return this.panelClass;
  }
  set classList(classes: string) {
    this.panelClass = classes;
  }

  /** Event emitted when the popover is closed. */
  @Output() closed = new EventEmitter<PopoverCloseReason>();

  /** @docs-private */
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;

  /**
   * Popover content that will be rendered lazily.
   * @docs-private
   */
  @ContentChild(MTX_POPOVER_CONTENT) lazyContent?: MtxPopoverContent;

  readonly panelId = `mtx-popover-panel-${popoverPanelUid++}`;

  constructor(
    @Optional() private _dir: Directionality,
    private _elementRef: ElementRef,
    private _ngZone: NgZone
  ) {}

  ngOnInit() {
    this.setPositionClasses();
  }

  ngOnDestroy() {
    this.closed.complete();
  }

  /** Handle a keyboard event from the popover, delegating to the appropriate action. */
  _handleKeydown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit('keydown');
        }
        return;
    }
  }

  /** Close popover on click if closeOnPanelClick is true */
  _handleClick() {
    if (this.closeOnPanelClick) {
      this.closed.emit('click');
    }
  }

  /** Disables close of popover when leaving trigger element and mouse over the popover */
  _handleMouseOver() {
    if (this.triggerEvent === 'hover') {
      this.closeDisabled = true;
    }
  }

  /** Enables close of popover when mouse leaving popover element */
  _handleMouseLeave() {
    if (this.triggerEvent === 'hover') {
      setTimeout(() => {
        this.closeDisabled = false;
        this.closed.emit();
      }, this.leaveDelay);
    }
  }

  /** Sets the current styles for the popover to allow for dynamically changing settings */
  setCurrentStyles(pos = this.position) {
    const left =
      pos[1] === 'after'
        ? `${this.arrowOffsetX - this.arrowWidth / 2}px`
        : pos[1] === 'center'
        ? `calc(50% - ${this.arrowWidth / 2}px)`
        : '';
    const right = pos[1] === 'before' ? `${this.arrowOffsetX - this.arrowWidth / 2}px` : '';

    const bottom =
      pos[1] === 'above'
        ? `${this.arrowOffsetY - this.arrowHeight / 2}px`
        : pos[1] === 'center'
        ? `calc(50% - ${this.arrowHeight / 2}px)`
        : '';
    const top = pos[1] === 'below' ? `${this.arrowOffsetY - this.arrowHeight / 2}px` : '';

    this.arrowStyles =
      pos[0] === 'above' || pos[0] === 'below'
        ? {
            left: this._dir.value === 'ltr' ? left : right,
            right: this._dir.value === 'ltr' ? right : left,
          }
        : { top, bottom };
  }

  /**
   * It's necessary to set position-based classes to ensure the popover panel animation
   * folds out from the correct direction.
   */
  setPositionClasses(pos = this.position): void {
    this._classList['mtx-popover-before-above'] = pos[0] === 'before' && pos[1] === 'above';
    this._classList['mtx-popover-before-center'] = pos[0] === 'before' && pos[1] === 'center';
    this._classList['mtx-popover-before-below'] = pos[0] === 'before' && pos[1] === 'below';
    this._classList['mtx-popover-after-above'] = pos[0] === 'after' && pos[1] === 'above';
    this._classList['mtx-popover-after-center'] = pos[0] === 'after' && pos[1] === 'center';
    this._classList['mtx-popover-after-below'] = pos[0] === 'after' && pos[1] === 'below';
    this._classList['mtx-popover-above-before'] = pos[0] === 'above' && pos[1] === 'before';
    this._classList['mtx-popover-above-center'] = pos[0] === 'above' && pos[1] === 'center';
    this._classList['mtx-popover-above-after'] = pos[0] === 'above' && pos[1] === 'after';
    this._classList['mtx-popover-below-before'] = pos[0] === 'below' && pos[1] === 'before';
    this._classList['mtx-popover-below-center'] = pos[0] === 'below' && pos[1] === 'center';
    this._classList['mtx-popover-below-after'] = pos[0] === 'below' && pos[1] === 'after';
  }

  /** Starts the enter animation. */
  _startAnimation() {
    // @breaking-change 8.0.0 Combine with _resetAnimation.
    this._panelAnimationState = 'enter';
  }

  /** Resets the panel animation to its initial state. */
  _resetAnimation() {
    // @breaking-change 8.0.0 Combine with _startAnimation.
    this._panelAnimationState = 'void';
  }

  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(event: AnimationEvent) {
    this._animationDone.next(event);
    this._isAnimating = false;
  }

  _onAnimationStart(event: AnimationEvent) {
    this._isAnimating = true;
  }

  static ngAcceptInputType_closeOnPanelClick: BooleanInput;
  static ngAcceptInputType_closeOnBackdropClick: BooleanInput;
  static ngAcceptInputType_disableAnimation: BooleanInput;
  static ngAcceptInputType_focusTrapEnabled: BooleanInput;
  static ngAcceptInputType_focusTrapAutoCaptureEnabled: BooleanInput;
}
