import { AnimationEvent } from '@angular/animations';
import { Direction } from '@angular/cdk/bidi';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
import { transformPopover } from './popover-animations';
import { MtxPopoverContent, MTX_POPOVER_CONTENT } from './popover-content';
import {
  throwMtxPopoverInvalidPositionEnd,
  throwMtxPopoverInvalidPositionStart,
} from './popover-errors';
import { MtxPopoverDefaultOptions, MtxPopoverPanel } from './popover-interfaces';
import { MtxPopoverPosition, MtxPopoverTriggerEvent, PopoverCloseReason } from './popover-types';

/** Injection token to be used to override the default options for `mtx-popover`. */
export const MTX_POPOVER_DEFAULT_OPTIONS = new InjectionToken<MtxPopoverDefaultOptions>(
  'mtx-popover-default-options',
  {
    providedIn: 'root',
    factory: MTX_POPOVER_DEFAULT_OPTIONS_FACTORY,
  }
);

/** @docs-private */
export function MTX_POPOVER_DEFAULT_OPTIONS_FACTORY(): MtxPopoverDefaultOptions {
  return {
    backdropClass: 'cdk-overlay-transparent-backdrop',
  };
}

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
  private _triggerEvent = this._defaultOptions.triggerEvent ?? 'hover';
  private _enterDelay = this._defaultOptions.enterDelay ?? 100;
  private _leaveDelay = this._defaultOptions.leaveDelay ?? 100;
  private _position = this._defaultOptions.position ?? ['below', 'after'];
  private _panelOffsetX = this._defaultOptions.xOffset ?? 0;
  private _panelOffsetY = this._defaultOptions.yOffset ?? 0;
  private _arrowWidth = this._defaultOptions.arrowWidth ?? 16;
  private _arrowHeight = this._defaultOptions.arrowHeight ?? 16;
  private _arrowOffsetX = this._defaultOptions.arrowOffsetX ?? 20;
  private _arrowOffsetY = this._defaultOptions.arrowOffsetY ?? 20;
  private _closeOnPanelClick = this._defaultOptions.closeOnPanelClick ?? false;
  private _closeOnBackdropClick = this._defaultOptions.closeOnBackdropClick ?? true;
  private _focusTrapEnabled = this._defaultOptions.focusTrapEnabled ?? false;
  private _focusTrapAutoCaptureEnabled = this._defaultOptions.focusTrapAutoCaptureEnabled ?? false;
  private _hasBackdrop = this._defaultOptions.hasBackdrop;
  private _elevation = this._defaultOptions.elevation ?? 8;

  private _previousElevation?: string;
  private _elevationPrefix = 'mat-elevation-z';

  /** Config object to be passed into the popover's ngClass. */
  _classList: { [key: string]: boolean } = {};

  /** Current state of the panel animation. */
  _panelAnimationState: 'void' | 'enter' = 'void';

  /** Emits whenever an animation on the popover completes. */
  readonly _animationDone = new Subject<AnimationEvent>();

  /** Whether the popover is animating. */
  _isAnimating = false;

  /** Closing disabled on popover */
  closeDisabled = false;

  /** Config object to be passed into the popover's arrow ngStyle */
  arrowStyles?: Record<string, unknown>;

  /** Layout direction of the popover. */
  direction?: Direction;

  /** Class or list of classes to be added to the overlay panel. */
  overlayPanelClass: string | string[] = this._defaultOptions.overlayPanelClass || '';

  /** Class to be added to the backdrop element. */
  @Input() backdropClass = this._defaultOptions.backdropClass;

  /** aria-label for the popover panel. */
  @Input('aria-label') ariaLabel?: string;

  /** aria-labelledby for the popover panel. */
  @Input('aria-labelledby') ariaLabelledby?: string;

  /** aria-describedby for the popover panel. */
  @Input('aria-describedby') ariaDescribedby?: string;

  /** Popover's trigger event. */
  @Input()
  get triggerEvent(): MtxPopoverTriggerEvent {
    return this._triggerEvent;
  }
  set triggerEvent(value: MtxPopoverTriggerEvent) {
    this._triggerEvent = value;
  }

  /** Popover's enter delay. */
  @Input()
  get enterDelay(): number {
    return this._enterDelay;
  }
  set enterDelay(value: number) {
    this._enterDelay = value;
  }

  /** Popover's leave delay. */
  @Input()
  get leaveDelay(): number {
    return this._leaveDelay;
  }
  set leaveDelay(value: number) {
    this._leaveDelay = value;
  }

  /** Popover's position. */
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

  /** Popover-panel's X offset. */
  @Input()
  get xOffset(): number {
    return this._panelOffsetX;
  }
  set xOffset(value: number) {
    this._panelOffsetX = value;
  }

  /** Popover-panel's Y offset. */
  @Input()
  get yOffset(): number {
    return this._panelOffsetY;
  }
  set yOffset(value: number) {
    this._panelOffsetY = value;
  }

  /** Popover-arrow's width. */
  @Input()
  get arrowWidth(): number {
    return this._arrowWidth;
  }
  set arrowWidth(value: number) {
    this._arrowWidth = value;
  }

  /** Popover-arrow's height. */
  @Input()
  get arrowHeight(): number {
    return this._arrowHeight;
  }
  set arrowHeight(value: number) {
    this._arrowHeight = value;
  }

  /** Popover-arrow's X offset. */
  @Input()
  get arrowOffsetX(): number {
    return this._arrowOffsetX;
  }
  set arrowOffsetX(value: number) {
    this._arrowOffsetX = value;
  }

  /** Popover-arrow's Y offset. */
  @Input()
  get arrowOffsetY(): number {
    return this._arrowOffsetY;
  }
  set arrowOffsetY(value: number) {
    this._arrowOffsetY = value;
  }

  /** Whether popover can be closed when click the popover-panel. */
  @Input()
  get closeOnPanelClick(): boolean {
    return this._closeOnPanelClick;
  }
  set closeOnPanelClick(value: boolean) {
    this._closeOnPanelClick = coerceBooleanProperty(value);
  }

  /** Whether popover can be closed when click the backdrop. */
  @Input()
  get closeOnBackdropClick(): boolean {
    return this._closeOnBackdropClick;
  }
  set closeOnBackdropClick(value: boolean) {
    this._closeOnBackdropClick = coerceBooleanProperty(value);
  }

  /** Whether enable focus trap using `cdkTrapFocus`. */
  @Input()
  get focusTrapEnabled(): boolean {
    return this._focusTrapEnabled;
  }
  set focusTrapEnabled(value: boolean) {
    this._focusTrapEnabled = coerceBooleanProperty(value);
  }

  /** Whether enable focus trap auto capture using `cdkTrapFocusAutoCapture`. */
  @Input()
  get focusTrapAutoCaptureEnabled(): boolean {
    return this._focusTrapAutoCaptureEnabled;
  }
  set focusTrapAutoCaptureEnabled(value: boolean) {
    this._focusTrapAutoCaptureEnabled = coerceBooleanProperty(value);
  }

  /** Whether the popover has a backdrop. It will always be false if the trigger event is hover. */
  @Input()
  get hasBackdrop(): boolean | undefined {
    return this._hasBackdrop;
  }
  set hasBackdrop(value: boolean | undefined) {
    this._hasBackdrop = coerceBooleanProperty(value);
  }

  /** Popover-panel's elevation (0~24). */
  @Input()
  get elevation(): number {
    return Math.max(0, Math.min(Math.round(this._elevation), 24));
  }
  set elevation(value: number) {
    this._elevation = value;
  }

  /**
   * This method takes classes set on the host md-popover element and applies them on the
   * popover template that displays in the overlay container. Otherwise, it's difficult
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
   * popover template that displays in the overlay container. Otherwise, it's difficult
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
    private _elementRef: ElementRef,
    private _ngZone: NgZone,
    @Inject(MTX_POPOVER_DEFAULT_OPTIONS) private _defaultOptions: MtxPopoverDefaultOptions
  ) {}

  ngOnInit() {
    this.setPositionClasses();
  }

  ngOnDestroy() {
    this.closed.complete();
  }

  /** Handle a keyboard event from the popover, delegating to the appropriate action. */
  _handleKeydown(event: KeyboardEvent) {
    const keyCode = event.keyCode;

    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit('keydown');
        }
        break;
    }
  }

  /** Close popover on click if `closeOnPanelClick` is true. */
  _handleClick() {
    if (this.closeOnPanelClick) {
      this.closed.emit('click');
    }
  }

  /** Disables close of popover when leaving trigger element and mouse over the popover. */
  _handleMouseOver() {
    if (this.triggerEvent === 'hover') {
      this.closeDisabled = true;
    }
  }

  /** Enables close of popover when mouse leaving popover element. */
  _handleMouseLeave() {
    if (this.triggerEvent === 'hover') {
      setTimeout(() => {
        this.closeDisabled = false;
        this.closed.emit();
      }, this.leaveDelay);
    }
  }

  /** Sets the current styles for the popover to allow for dynamically changing settings. */
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
            left: this.direction === 'ltr' ? left : right,
            right: this.direction === 'ltr' ? right : left,
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

  /** Sets the popover-panel's elevation. */
  setElevation(): void {
    const newElevation = `${this._elevationPrefix}${this.elevation}`;

    if (this._previousElevation) {
      this._classList[this._previousElevation] = false;
    }

    this._classList[newElevation] = true;
    this._previousElevation = newElevation;
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
  static ngAcceptInputType_focusTrapEnabled: BooleanInput;
  static ngAcceptInputType_focusTrapAutoCaptureEnabled: BooleanInput;
  static ngAcceptInputType_hasBackdrop: BooleanInput;
}
