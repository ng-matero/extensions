import { AnimationEvent } from '@angular/animations';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Direction } from '@angular/cdk/bidi';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
} from '@angular/core';
import { Subject } from 'rxjs';

import { transformPopover } from './popover-animations';
import { MTX_POPOVER_CONTENT, MtxPopoverContent } from './popover-content';
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
  styleUrl: './popover.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [transformPopover],
  exportAs: 'mtxPopover',
  imports: [CdkTrapFocus],
})
export class MtxPopover implements MtxPopoverPanel, OnInit, OnDestroy {
  private _elementRef = inject(ElementRef);
  private _unusedNgZone = inject(NgZone);
  private _defaultOptions = inject<MtxPopoverDefaultOptions>(MTX_POPOVER_DEFAULT_OPTIONS);

  private _previousElevation?: string;
  private _elevationPrefix = 'mat-elevation-z';
  private _baseElevation: number | null = null;

  /** Config object to be passed into the popover's class. */
  _classList: { [key: string]: boolean } = {};

  /** Current state of the panel animation. */
  _panelAnimationState: 'void' | 'enter' = 'void';

  /** Emits whenever an animation on the popover completes. */
  readonly _animationDone = new Subject<AnimationEvent>();

  /** Whether the popover is animating. */
  _isAnimating = false;

  /** Closing disabled on popover */
  closeDisabled = false;

  /** Config object to be passed into the popover's arrow style */
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
  @Input() triggerEvent: MtxPopoverTriggerEvent = this._defaultOptions.triggerEvent ?? 'hover';

  /** Popover's enter delay. */
  @Input() enterDelay = this._defaultOptions.enterDelay ?? 100;

  /** Popover's leave delay. */
  @Input() leaveDelay = this._defaultOptions.leaveDelay ?? 100;

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
  private _position = this._defaultOptions.position ?? ['below', 'after'];

  /** Popover-panel's X offset. */
  @Input() xOffset = this._defaultOptions.xOffset ?? 0;

  /** Popover-panel's Y offset. */
  @Input() yOffset = this._defaultOptions.yOffset ?? 0;

  /** Popover-arrow's width. */
  @Input() arrowWidth = this._defaultOptions.arrowWidth ?? 16;

  /** Popover-arrow's height. */
  @Input() arrowHeight = this._defaultOptions.arrowHeight ?? 16;

  /** Popover-arrow's X offset. */
  @Input() arrowOffsetX = this._defaultOptions.arrowOffsetX ?? 20;

  /** Popover-arrow's Y offset. */
  @Input() arrowOffsetY = this._defaultOptions.arrowOffsetY ?? 20;

  /** Whether the popover arrow should be hidden. */
  @Input({ transform: booleanAttribute })
  hideArrow = this._defaultOptions.hideArrow ?? false;

  /** Whether popover can be closed when click the popover-panel. */
  @Input({ transform: booleanAttribute })
  closeOnPanelClick = this._defaultOptions.closeOnPanelClick ?? false;

  /** Whether popover can be closed when click the backdrop. */
  @Input({ transform: booleanAttribute })
  closeOnBackdropClick = this._defaultOptions.closeOnBackdropClick ?? true;

  /** Whether enable focus trap using `cdkTrapFocus`. */
  @Input({ transform: booleanAttribute })
  focusTrapEnabled = this._defaultOptions.focusTrapEnabled ?? false;

  /** Whether enable focus trap auto capture using `cdkTrapFocusAutoCapture`. */
  @Input({ transform: booleanAttribute })
  focusTrapAutoCaptureEnabled = this._defaultOptions.focusTrapAutoCaptureEnabled ?? false;

  /** Whether the popover has a backdrop. It will always be false if the trigger event is hover. */
  @Input({ transform: booleanAttribute })
  hasBackdrop = this._defaultOptions.hasBackdrop;

  /**
   * This method takes classes set on the host mtx-popover element and applies them on the
   * popover template that displays in the overlay container. Otherwise, it's difficult
   * to style the containing popover from outside the component.
   * @param classes list of class names
   */
  @Input('class')
  set panelClass(classes: string) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = { ...this._classList };

    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(' ').forEach((className: string) => {
        newClassList[className] = false;
      });
    }

    this._previousPanelClass = classes;

    if (classes && classes.length) {
      classes.split(' ').forEach((className: string) => {
        newClassList[className] = true;
      });

      this._elementRef.nativeElement.className = '';

      this.setPositionClasses();
    }

    this._classList = newClassList;
  }
  private _previousPanelClass?: string;

  /**
   * This method takes classes set on the host mtx-popover element and applies them on the
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
    // The base elevation depends on which version of the spec
    // we're running so we have to resolve it at runtime.
    if (this._baseElevation === null) {
      const styles =
        typeof getComputedStyle === 'function'
          ? getComputedStyle(this._elementRef.nativeElement)
          : null;
      const value = styles?.getPropertyValue('--mtx-popover-base-elevation-level') || '8';
      this._baseElevation = parseInt(value);
    }

    // The elevation starts at the base and increases by one for each level.
    // Capped at 24 because that's the maximum elevation defined in the Material design spec.
    const elevation = Math.min(this._baseElevation, 24);
    const newElevation = `${this._elevationPrefix}${elevation}`;
    const customElevation = Object.keys(this._classList).find(className => {
      return className.startsWith(this._elevationPrefix);
    });
    if (!customElevation || customElevation === this._previousElevation) {
      const newClassList = { ...this._classList };
      if (this._previousElevation) {
        newClassList[this._previousElevation] = false;
      }
      newClassList[newElevation] = true;
      this._previousElevation = newElevation;
      this._classList = newClassList;
    }
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
}
