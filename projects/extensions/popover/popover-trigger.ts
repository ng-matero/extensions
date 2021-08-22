import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Optional,
  Output,
  ViewContainerRef,
  HostListener,
  HostBinding,
  ChangeDetectorRef,
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

import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MtxPopoverPanel, MtxTarget } from './popover-interfaces';
import {
  MtxPopoverTriggerEvent,
  MtxPopoverScrollStrategy,
  MtxPopoverPosition,
  MtxPopoverPositionStart,
} from './popover-types';
import { throwMtxPopoverMissingError } from './popover-errors';

/**
 * This directive is intended to be used in conjunction with an mtx-popover tag. It is
 * responsible for toggling the display of the provided popover instance.
 */

@Directive({
  selector: '[mtxPopoverTriggerFor]',
  exportAs: 'mtxPopoverTrigger',
})
export class MtxPopoverTrigger implements AfterViewInit, OnDestroy {
  @HostBinding('attr.aria-haspopup') ariaHaspopup = true;

  popoverOpened$ = new Subject<void>();
  popoverClosed$ = new Subject<void>();

  private _portal!: TemplatePortal<any>;
  private _overlayRef: OverlayRef | null = null;
  private _popoverOpen = false;
  private _halt = false;
  private _backdropSubscription!: Subscription;
  private _positionSubscription!: Subscription;
  private _detachmentsSubscription!: Subscription;

  private _mouseoverTimer: any;

  // tracking input type is necessary so it's possible to only auto-focus
  // the first item of the list when the popover is opened via the keyboard
  private _openedByMouse = false;

  private _onDestroy = new Subject<void>();

  /** References the popover instance that the trigger is associated with. */
  @Input('mtxPopoverTriggerFor') popover!: MtxPopoverPanel;

  /** References the popover target instance that the trigger is associated with. */
  @Input('mtxPopoverTargetAt') targetElement!: MtxTarget;

  /** Popover trigger event */
  @Input('mtxPopoverTriggerOn') triggerEvent!: MtxPopoverTriggerEvent;

  /** Event emitted when the associated popover is opened. */
  @Output() popoverOpened = new EventEmitter<void>();

  /** Event emitted when the associated popover is closed. */
  @Output() popoverClosed = new EventEmitter<void>();

  constructor(
    private _overlay: Overlay,
    public _elementRef: ElementRef,
    private _viewContainerRef: ViewContainerRef,
    @Optional() private _dir: Directionality,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this._checkPopover();
    this._setCurrentConfig();
    this.popover.closed.subscribe(() => this.closePopover());
  }

  ngOnDestroy() {
    this.destroyPopover();
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

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.popover.triggerEvent === 'click') {
      this.togglePopover();
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    this._halt = false;
    if (this.popover.triggerEvent === 'hover') {
      this._mouseoverTimer = setTimeout(() => {
        this.openPopover();
      }, this.popover.enterDelay);
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent): void {
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

  /** Toggles the popover between the open and closed states. */
  togglePopover(): void {
    return this._popoverOpen ? this.closePopover() : this.openPopover();
  }

  /** Opens the popover. */
  openPopover(): void {
    if (!this._popoverOpen && !this._halt) {
      this._createOverlay().attach(this._portal);

      this._subscribeToBackdrop();
      this._subscribeToDetachments();

      this._initPopover();
    }
  }

  /** Closes the popover. */
  closePopover(): void {
    if (this._overlayRef) {
      this._overlayRef.detach();
      this._resetPopover();
    }

    this.destroyPopover();
  }

  /** Removes the popover from the DOM. */
  destroyPopover(): void {
    if (this._mouseoverTimer) {
      clearTimeout(this._mouseoverTimer);
      this._mouseoverTimer = null;
    }
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
      this._cleanUpSubscriptions();
    }

    this._onDestroy.next();
    this._onDestroy.complete();
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
   * This method ensures that the popover closes when the overlay backdrop is clicked.
   * We do not use first() here because doing so would not catch clicks from within
   * the popover, and it would fail to unsubscribe properly. Instead, we unsubscribe
   * explicitly when the popover is closed or destroyed.
   */
  private _subscribeToBackdrop(): void {
    if (this._overlayRef) {
      /** Only subscribe to backdrop if trigger event is click */
      if (this.triggerEvent === 'click' && this.popover.closeOnBackdropClick === true) {
        this._overlayRef
          .backdropClick()
          .pipe(takeUntil(this.popoverClosed$), takeUntil(this._onDestroy))
          .subscribe(() => {
            this.popover._emitCloseEvent();
          });
      }
    }
  }

  private _subscribeToDetachments(): void {
    if (this._overlayRef) {
      this._overlayRef
        .detachments()
        .pipe(takeUntil(this.popoverClosed$), takeUntil(this._onDestroy))
        .subscribe(() => {
          this._setPopoverClosed();
        });
    }
  }

  /**
   * This method sets the popover state to open and focuses the first item if
   * the popover was opened via the keyboard.
   */
  private _initPopover(): void {
    this._setPopoverOpened();
  }

  /**
   * This method resets the popover when it's closed, most importantly restoring
   * focus to the popover trigger if the popover was opened via the keyboard.
   */
  private _resetPopover(): void {
    this._setPopoverClosed();

    // Focus only needs to be reset to the host element if the popover was opened
    // by the keyboard and manually shifted to the first popover item.
    if (!this._openedByMouse) {
      this.focus();
    }
    this._openedByMouse = false;
  }

  /** set state rather than toggle to support triggers sharing a popover */
  private _setPopoverOpened(): void {
    if (!this._popoverOpen) {
      this._popoverOpen = true;

      this.popoverOpened$.next();
      this.popoverOpened.emit();
    }
  }

  /** set state rather than toggle to support triggers sharing a popover */
  private _setPopoverClosed(): void {
    if (this._popoverOpen) {
      this._popoverOpen = false;

      this.popoverClosed$.next();
      this.popoverClosed.emit();
    }
  }

  /**
   *  This method checks that a valid instance of MdPopover has been passed into
   *  mdPopoverTriggerFor. If not, an exception is thrown.
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
      this._portal = new TemplatePortal(this.popover.templateRef, this._viewContainerRef);
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

    /** Display overlay backdrop if trigger event is click */
    if (this.triggerEvent === 'click') {
      overlayState.hasBackdrop = true;
      overlayState.backdropClass = 'cdk-overlay-transparent-backdrop';
    }

    overlayState.direction = this.dir;
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

      this.popover.zone.run(() => {
        this.popover.setCurrentStyles(pos);
        this.popover.setPositionClasses(pos);
      });
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
      this.popover.containerPositioning = true;
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

  private _cleanUpSubscriptions(): void {
    if (this._backdropSubscription) {
      this._backdropSubscription.unsubscribe();
    }
    if (this._positionSubscription) {
      this._positionSubscription.unsubscribe();
    }
    if (this._detachmentsSubscription) {
      this._detachmentsSubscription.unsubscribe();
    }
  }

  @HostListener('mousedown', ['$event']) _handleMousedown(event: MouseEvent): void {
    if (event && !isFakeMousedownFromScreenReader(event)) {
      this._openedByMouse = true;
    }
  }
}
