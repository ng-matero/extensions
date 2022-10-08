import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Optional,
  Output,
  ViewContainerRef,
  ChangeDetectorRef,
  AfterContentInit,
} from '@angular/core';
import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  Overlay,
  OverlayRef,
  OverlayConfig,
  HorizontalConnectionPos,
  VerticalConnectionPos,
  FlexibleConnectedPositionStrategy,
  ScrollStrategy,
  ConnectedPosition,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription, merge, of as observableOf } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { MtxPopoverPanel, MtxTarget, PopoverCloseReason } from './popover-interfaces';
import {
  MtxPopoverTriggerEvent,
  MtxPopoverScrollStrategy,
  MtxPopoverPosition,
  MtxPopoverPositionStart,
} from './popover-types';
import { throwMtxPopoverMissingError } from './popover-errors';
import { MtxPopover } from './popover';

/**
 * This directive is intended to be used in conjunction with an `mtx-popover` tag. It is
 * responsible for toggling the display of the provided popover instance.
 */
@Directive({
  selector: '[mtx-popover-trigger-for], [mtxPopoverTriggerFor]',
  exportAs: 'mtxPopoverTrigger',
  host: {
    'aria-haspopup': 'true',
    '[attr.aria-expanded]': 'popoverOpen || null',
    '[attr.aria-controls]': 'popoverOpen ? popover.panelId : null',
    '(click)': '_handleClick($event)',
    '(mouseenter)': '_handleMouseEnter($event)',
    '(mouseleave)': '_handleMouseLeave($event)',
    '(mousedown)': '_handleMousedown($event)',
  },
})
export class MtxPopoverTrigger implements AfterContentInit, OnDestroy {
  private _portal?: TemplatePortal;
  private _overlayRef: OverlayRef | null = null;
  private _popoverOpen = false;
  private _halt = false;

  private _positionSubscription = Subscription.EMPTY;
  private _popoverCloseSubscription = Subscription.EMPTY;
  private _closingActionsSubscription = Subscription.EMPTY;

  private _mouseoverTimer: any;

  // TODO: Tracking input type is necessary so it's possible to only auto-focus
  // the first item of the list when the popover is opened via the keyboard
  _openedByMouse = false;

  /** References the popover instance that the trigger is associated with. */
  @Input('mtxPopoverTriggerFor')
  get popover() {
    return this._popover;
  }
  set popover(popover: MtxPopoverPanel) {
    if (popover === this._popover) {
      return;
    }

    this._popover = popover;
    this._popoverCloseSubscription.unsubscribe();

    if (popover) {
      this._popoverCloseSubscription = popover.closed.subscribe((reason: PopoverCloseReason) => {
        this._destroyPopover();
      });
    }
  }
  private _popover!: MtxPopoverPanel;

  /** Data to be passed along to any lazily-rendered content. */
  @Input('mtxPopoverTriggerData') popoverData: any;

  /** References the popover target instance that the trigger is associated with. */
  @Input('mtxPopoverTargetAt') targetElement?: MtxTarget;

  /** Popover trigger event */
  @Input('mtxPopoverTriggerOn') triggerEvent?: MtxPopoverTriggerEvent;

  /** Event emitted when the associated popover is opened. */
  @Output() popoverOpened = new EventEmitter<void>();

  /** Event emitted when the associated popover is closed. */
  @Output() popoverClosed = new EventEmitter<void>();

  constructor(
    private _overlay: Overlay,
    private _elementRef: ElementRef<HTMLElement>,
    private _viewContainerRef: ViewContainerRef,
    @Optional() private _dir: Directionality,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterContentInit() {
    this._checkPopover();
    this._setCurrentConfig();
  }

  ngOnDestroy() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }

    this._positionSubscription.unsubscribe();
    this._popoverCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
  }

  private _setCurrentConfig() {
    if (this.triggerEvent) {
      this.popover.triggerEvent = this.triggerEvent;
    }

    this.popover.setCurrentStyles();
  }

  /** Whether the popover is open. */
  get popoverOpen(): boolean {
    return this._popoverOpen;
  }

  _handleClick(event: MouseEvent): void {
    if (this.popover.triggerEvent === 'click') {
      this.togglePopover();
    }
  }

  _handleMouseEnter(event: MouseEvent): void {
    this._halt = false;

    if (this.popover.triggerEvent === 'hover') {
      this._mouseoverTimer = setTimeout(() => {
        this.openPopover();
      }, this.popover.enterDelay);
    }
  }

  _handleMouseLeave(event: MouseEvent): void {
    if (this.popover.triggerEvent === 'hover') {
      if (this._mouseoverTimer) {
        clearTimeout(this._mouseoverTimer);
        this._mouseoverTimer = null;
      }

      if (this._popoverOpen) {
        setTimeout(() => {
          if (!this.popover.closeDisabled) {
            this.closePopover();
          }
        }, this.popover.leaveDelay);
      } else {
        this._halt = true;
      }
    }
  }

  _handleMousedown(event: MouseEvent): void {
    if (!isFakeMousedownFromScreenReader(event)) {
      // Since right or middle button clicks won't trigger the `click` event,
      // we shouldn't consider the popover as opened by mouse in those cases.
      this._openedByMouse = true;
    }
  }

  /** Toggles the popover between the open and closed states. */
  togglePopover(): void {
    return this._popoverOpen ? this.closePopover() : this.openPopover();
  }

  /** Opens the popover. */
  openPopover(): void {
    if (this._popoverOpen || this._halt) {
      return;
    }

    this._checkPopover();

    const overlayRef = this._createOverlay();
    const overlayConfig = overlayRef.getConfig();

    overlayRef.attach(this._getPortal());

    if (this.popover.lazyContent) {
      this.popover.lazyContent.attach(this.popoverData);
    }

    this._closingActionsSubscription = this._popoverClosingActions().subscribe(() =>
      this.closePopover()
    );
    this._initPopover();

    if (this.popover instanceof MtxPopover) {
      this.popover._startAnimation();
    }
  }

  /** Closes the popover. */
  closePopover(): void {
    this.popover.closed.emit();
  }

  /** Removes the popover from the DOM. */
  private _destroyPopover(reason: PopoverCloseReason) {
    if (!this._overlayRef || !this.popoverOpen) {
      return;
    }

    // Clear the timeout for hover event.
    if (this._mouseoverTimer) {
      clearTimeout(this._mouseoverTimer);
      this._mouseoverTimer = null;
    }

    const popover = this.popover;
    this._closingActionsSubscription.unsubscribe();
    this._overlayRef.detach();

    if (popover instanceof MtxPopover) {
      popover._resetAnimation();

      if (popover.lazyContent) {
        // Wait for the exit animation to finish before detaching the content.
        popover._animationDone
          .pipe(
            filter(event => event.toState === 'void'),
            take(1),
            // Interrupt if the content got re-attached.
            takeUntil(popover.lazyContent._attached)
          )
          .subscribe({
            next: () => popover.lazyContent!.detach(),
            // No matter whether the content got re-attached, reset the menu.
            complete: () => this._setIsPopoverOpen(false),
          });
      } else {
        this._setIsPopoverOpen(false);
      }
    } else {
      this._setIsPopoverOpen(false);

      if (popover.lazyContent) {
        popover.lazyContent.detach();
      }
    }
  }

  /** Focuses the popover trigger. */
  focus() {
    this._elementRef.nativeElement.focus();
  }

  /** The text direction of the containing app. */
  get dir(): Direction {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }

  /**
   * This method sets the popover state to open and focuses the first item if
   * the popover was opened via the keyboard.
   */
  private _initPopover(): void {
    this._setIsPopoverOpen(true);
  }

  // set state rather than toggle to support triggers sharing a popover
  private _setIsPopoverOpen(isOpen: boolean): void {
    this._popoverOpen = isOpen;
    this._popoverOpen ? this.popoverOpened.emit() : this.popoverClosed.emit();
  }

  /**
   *  This method checks that a valid instance of MdPopover has been passed into
   *  `mtxPopoverTriggerFor`. If not, an exception is thrown.
   */
  private _checkPopover() {
    if (!this.popover) {
      throwMtxPopoverMissingError();
    }
  }

  /**
   *  This method creates the overlay from the provided popover's template and saves its
   *  OverlayRef so that it can be attached to the DOM when openPopover is called.
   */
  private _createOverlay(): OverlayRef {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig();
      this._subscribeToPositions(config.positionStrategy as FlexibleConnectedPositionStrategy);
      this._overlayRef = this._overlay.create(config);
    }

    return this._overlayRef;
  }

  /**
   * This method builds the configuration object needed to create the overlay, the OverlayConfig.
   * @returns OverlayConfig
   */
  private _getOverlayConfig(): OverlayConfig {
    const overlayState = new OverlayConfig();
    overlayState.positionStrategy = this._getPosition();

    // Display overlay backdrop if trigger event is click
    if (this.triggerEvent === 'click') {
      overlayState.hasBackdrop = true;
      overlayState.backdropClass = 'cdk-overlay-transparent-backdrop';
    }

    overlayState.direction = this._dir;
    overlayState.scrollStrategy = this._getOverlayScrollStrategy(this.popover.scrollStrategy);

    return overlayState;
  }

  /**
   * This method returns the scroll strategy used by the cdk/overlay.
   */
  private _getOverlayScrollStrategy(strategy: MtxPopoverScrollStrategy): ScrollStrategy {
    switch (strategy) {
      case 'noop':
        return this._overlay.scrollStrategies.noop();
      case 'close':
        return this._overlay.scrollStrategies.close();
      case 'block':
        return this._overlay.scrollStrategies.block();
      case 'reposition':
      default:
        return this._overlay.scrollStrategies.reposition();
    }
  }

  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the popover based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  private _subscribeToPositions(position: FlexibleConnectedPositionStrategy): void {
    this._positionSubscription = position.positionChanges.subscribe(change => {
      const posX =
        change.connectionPair.overlayX === 'start'
          ? 'after'
          : change.connectionPair.overlayX === 'end'
          ? 'before'
          : 'center';
      const posY =
        change.connectionPair.overlayY === 'top'
          ? 'below'
          : change.connectionPair.overlayY === 'bottom'
          ? 'above'
          : 'center';

      const pos: MtxPopoverPosition =
        this.popover.position[0] === 'above' || this.popover.position[0] === 'below'
          ? [posY as MtxPopoverPositionStart, posX]
          : [posX as MtxPopoverPositionStart, posY];

      // required for ChangeDetectionStrategy.OnPush
      this._changeDetectorRef.markForCheck();

      this.popover.setCurrentStyles(pos);
      this.popover.setPositionClasses(pos);
    });
  }

  /**
   * This method builds the position strategy for the overlay, so the popover is properly connected
   * to the trigger.
   * @returns ConnectedPositionStrategy
   */
  private _getPosition(): FlexibleConnectedPositionStrategy {
    const [originX, origin2ndX, origin3rdX]: HorizontalConnectionPos[] =
      this.popover.position[0] === 'before' || this.popover.position[1] === 'after'
        ? ['start', 'center', 'end']
        : this.popover.position[0] === 'after' || this.popover.position[1] === 'before'
        ? ['end', 'center', 'start']
        : ['center', 'start', 'end'];

    const [originY, origin2ndY, origin3rdY]: VerticalConnectionPos[] =
      this.popover.position[0] === 'above' || this.popover.position[1] === 'below'
        ? ['top', 'center', 'bottom']
        : this.popover.position[0] === 'below' || this.popover.position[1] === 'above'
        ? ['bottom', 'center', 'top']
        : ['center', 'top', 'bottom'];

    const [overlayX, overlayFallbackX]: HorizontalConnectionPos[] =
      this.popover.position[0] === 'below' || this.popover.position[0] === 'above'
        ? [originX, originX]
        : this.popover.position[0] === 'before'
        ? ['end', 'start']
        : ['start', 'end'];

    const [overlayY, overlayFallbackY]: VerticalConnectionPos[] =
      this.popover.position[0] === 'before' || this.popover.position[0] === 'after'
        ? [originY, originY]
        : this.popover.position[0] === 'below'
        ? ['top', 'bottom']
        : ['bottom', 'top'];

    const originFallbackX = overlayX;
    const originFallbackY = overlayY;

    const offsetX =
      this.popover.xOffset && !isNaN(Number(this.popover.xOffset))
        ? Number(this.dir === 'ltr' ? this.popover.xOffset : -this.popover.xOffset)
        : 0;
    const offsetY =
      this.popover.yOffset && !isNaN(Number(this.popover.yOffset))
        ? Number(this.popover.yOffset)
        : 0;

    /**
     * For overriding position element, when `mtxPopoverTargetAt` has a valid element reference.
     * Useful for sticking popover to parent element and offsetting arrow to trigger element.
     * If undefined defaults to the trigger element reference.
     */
    let element = this._elementRef;
    if (typeof this.targetElement !== 'undefined') {
      element = this.targetElement._elementRef;
    }

    let positions: ConnectedPosition[] = [{ originX, originY, overlayX, overlayY }];

    if (this.popover.position[0] === 'above' || this.popover.position[0] === 'below') {
      positions = [
        { originX, originY, overlayX, overlayY, offsetY },
        { originX: origin2ndX, originY, overlayX: origin2ndX, overlayY, offsetY },
        { originX: origin3rdX, originY, overlayX: origin3rdX, overlayY, offsetY },
        {
          originX,
          originY: originFallbackY,
          overlayX,
          overlayY: overlayFallbackY,
          offsetY: -offsetY,
        },
        {
          originX: origin2ndX,
          originY: originFallbackY,
          overlayX: origin2ndX,
          overlayY: overlayFallbackY,
          offsetY: -offsetY,
        },
        {
          originX: origin3rdX,
          originY: originFallbackY,
          overlayX: origin3rdX,
          overlayY: overlayFallbackY,
          offsetY: -offsetY,
        },
      ];
    }

    if (this.popover.position[0] === 'before' || this.popover.position[0] === 'after') {
      positions = [
        { originX, originY, overlayX, overlayY, offsetX },
        { originX, originY: origin2ndY, overlayX, overlayY: origin2ndY, offsetX },
        { originX, originY: origin3rdY, overlayX, overlayY: origin3rdY, offsetX },
        {
          originX: originFallbackX,
          originY,
          overlayX: overlayFallbackX,
          overlayY,
          offsetX: -offsetX,
        },
        {
          originX: originFallbackX,
          originY: origin2ndY,
          overlayX: overlayFallbackX,
          overlayY: origin2ndY,
          offsetX: -offsetX,
        },
        {
          originX: originFallbackX,
          originY: origin3rdY,
          overlayX: overlayFallbackX,
          overlayY: origin3rdY,
          offsetX: -offsetX,
        },
      ];
    }

    return this._overlay
      .position()
      .flexibleConnectedTo(element)
      .withLockedPosition()
      .withPositions(positions)
      .withDefaultOffsetX(offsetX)
      .withDefaultOffsetY(offsetY);
  }

  /** Returns a stream that emits whenever an action that should close the popover occurs. */
  private _popoverClosingActions() {
    const backdrop =
      this.triggerEvent === 'click' && this.popover.closeOnBackdropClick === true
        ? this._overlayRef!.backdropClick()
        : observableOf();
    const detachments = this._overlayRef!.detachments();
    return merge(backdrop, detachments);
  }

  /** Gets the portal that should be attached to the overlay. */
  private _getPortal(): TemplatePortal {
    // Note that we can avoid this check by keeping the portal on the popover panel.
    // While it would be cleaner, we'd have to introduce another required method on
    // `MtxPopoverPanel`, making it harder to consume.
    if (!this._portal || this._portal.templateRef !== this.popover.templateRef) {
      this._portal = new TemplatePortal(this.popover.templateRef, this._viewContainerRef);
    }

    return this._portal;
  }
}
