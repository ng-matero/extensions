import { AnimationEvent } from '@angular/animations';
import { FocusTrap, FocusTrapFactory, InteractivityChecker } from '@angular/cdk/a11y';
import { coerceArray, coerceCssPixelValue } from '@angular/cdk/coercion';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  DomPortal,
  TemplatePortal,
} from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  Inject,
  NgZone,
  OnDestroy,
  Optional,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { mtxDrawerAnimations } from './drawer-animation';
import { MtxDrawerConfig } from './drawer-config';

/**
 * Internal component that wraps user-provided drawer content.
 * @docs-private
 */
@Component({
  selector: 'mtx-drawer-container',
  templateUrl: 'drawer-container.html',
  styleUrls: ['drawer-container.scss'],
  // In Ivy embedded views will be change detected from their declaration place, rather than where
  // they were stamped out. This means that we can't have the drawer container be OnPush,
  // because it might cause the sheets that were opened from a template not to be out of date.
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  animations: [mtxDrawerAnimations.drawerState],
  host: {
    'class': 'mtx-drawer-container',
    '[class]': '_drawerPosition',
    'tabindex': '-1',
    'role': 'dialog',
    'aria-modal': 'true',
    '[attr.aria-label]': 'drawerConfig?.ariaLabel',
    '[@state]': '_animationState',
    '(@state.start)': '_onAnimationStart($event)',
    '(@state.done)': '_onAnimationDone($event)',
  },
  standalone: true,
  imports: [CdkPortalOutlet],
})
export class MtxDrawerContainer extends BasePortalOutlet implements OnDestroy {
  private _breakpointSubscription: Subscription;

  /** The portal outlet inside of this container into which the content will be loaded. */
  @ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet!: CdkPortalOutlet;

  /** The state of the drawer animations. */
  _animationState: 'void' | 'visible' | 'hidden' = 'void';

  /** Emits whenever the state of the animation changes. */
  _animationStateChanged = new EventEmitter<AnimationEvent>();

  /** The class that traps and manages focus within the drawer. */
  private _focusTrap!: FocusTrap;

  /** Element that was focused before the drawer was opened. */
  private _elementFocusedBeforeOpened: HTMLElement | null = null;

  /** Server-side rendering-compatible reference to the global document object. */
  private _document: Document;

  /** Whether the component has been destroyed. */
  private _destroyed!: boolean;

  get _drawerPosition() {
    return `mtx-drawer-${this.drawerConfig.position}`;
  }

  get _drawerWidth() {
    return this.drawerConfig.position === 'left' || this.drawerConfig.position === 'right'
      ? coerceCssPixelValue(this.drawerConfig.width)
      : '100vw';
  }

  get _drawerHeight() {
    return this.drawerConfig.position === 'top' || this.drawerConfig.position === 'bottom'
      ? coerceCssPixelValue(this.drawerConfig.height)
      : '100vh';
  }

  _getDrawerSize() {
    return {
      width: this._drawerWidth,
      height: this._drawerHeight,
      minWidth: coerceCssPixelValue(this.drawerConfig.minWidth),
      minHeight: coerceCssPixelValue(this.drawerConfig.minHeight),
      maxWidth: coerceCssPixelValue(this.drawerConfig.maxWidth),
      maxHeight: coerceCssPixelValue(this.drawerConfig.maxHeight),
    };
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef,
    private _focusTrapFactory: FocusTrapFactory,
    private readonly _interactivityChecker: InteractivityChecker,
    private readonly _ngZone: NgZone,
    breakpointObserver: BreakpointObserver,
    @Optional() @Inject(DOCUMENT) document: any,
    /** The drawer configuration. */
    public drawerConfig: MtxDrawerConfig
  ) {
    super();

    this._document = document;
    this._breakpointSubscription = breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(() => {});
  }

  /** Attach a component portal as content to this drawer container. */
  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    this._validatePortalAttached();
    this._setPanelClass();
    this._savePreviouslyFocusedElement();
    return this._portalOutlet.attachComponentPortal(portal);
  }

  /** Attach a template portal as content to this drawer container. */
  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    this._validatePortalAttached();
    this._setPanelClass();
    this._savePreviouslyFocusedElement();
    return this._portalOutlet.attachTemplatePortal(portal);
  }

  /**
   * Attaches a DOM portal to the drawer container.
   * @deprecated To be turned into a method.
   * @breaking-change 10.0.0
   */
  override attachDomPortal = (portal: DomPortal) => {
    this._validatePortalAttached();
    this._setPanelClass();
    this._savePreviouslyFocusedElement();
    return this._portalOutlet.attachDomPortal(portal);
  };

  /** Begin animation of drawer entrance into view. */
  enter(): void {
    if (!this._destroyed) {
      this._animationState = 'visible';
      this._changeDetectorRef.detectChanges();
    }
  }

  /** Begin animation of the drawer exiting from view. */
  exit(): void {
    if (!this._destroyed) {
      this._animationState = 'hidden';
      this._changeDetectorRef.markForCheck();
    }
  }

  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
    this._destroyed = true;
  }

  _onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'hidden') {
      this._restoreFocus();
    } else if (event.toState === 'visible') {
      this._trapFocus();
    }

    this._animationStateChanged.emit(event);
  }

  _onAnimationStart(event: AnimationEvent) {
    this._animationStateChanged.emit(event);
  }

  private _toggleClass(cssClass: string, add: boolean) {
    this._elementRef.nativeElement.classList.toggle(cssClass, add);
  }

  private _validatePortalAttached() {
    if (this._portalOutlet.hasAttached()) {
      throw Error('Attempting to attach drawer content after content is already attached');
    }
  }

  private _setPanelClass() {
    const element: HTMLElement = this._elementRef.nativeElement;
    element.classList.add(...coerceArray(this.drawerConfig.panelClass || []));
  }

  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  private _forceFocus(element: HTMLElement, options?: FocusOptions) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      // The tabindex attribute should be removed to avoid navigating to that element again
      this._ngZone.runOutsideAngular(() => {
        element.addEventListener('blur', () => element.removeAttribute('tabindex'));
        element.addEventListener('mousedown', () => element.removeAttribute('tabindex'));
      });
    }
    element.focus(options);
  }

  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  private _focusByCssSelector(selector: string, options?: FocusOptions) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const elementToFocus = this._elementRef.nativeElement.querySelector(
      selector
    ) as HTMLElement | null;
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }

  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'bottom-sheet',
   * if focus cannot be moved then focus will go to the drawer container.
   */
  private _trapFocus() {
    const element = this._elementRef.nativeElement;

    if (!this._focusTrap) {
      this._focusTrap = this._focusTrapFactory.create(element);
    }

    // If were to attempt to focus immediately, then the content of the drawer would not
    // yet be ready in instances where change detection has to run first. To deal with this,
    // we simply wait for the microtask queue to be empty when setting focus when autoFocus
    // isn't set to drawer. If the element inside the drawer can't be focused,
    // then the container is focused so the user can't tab into other elements behind it.
    switch (this.drawerConfig.autoFocus) {
      case false:
      case 'dialog':
        // eslint-disable-next-line no-case-declarations
        const activeElement = _getFocusedElementPierceShadowDom();
        // Ensure that focus is on the drawer container. It's possible that a different
        // component tried to move focus while the open animation was running. See:
        // https://github.com/angular/components/issues/16215. Note that we only want to do this
        // if the focus isn't inside the drawer already, because it's possible that the
        // consumer specified `autoFocus` in order to move focus themselves.
        if (activeElement !== element && !element.contains(activeElement)) {
          element.focus();
        }
        break;
      case true:
      case 'first-tabbable':
        this._focusTrap.focusInitialElementWhenReady();
        break;
      case 'first-heading':
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this.drawerConfig.autoFocus!);
        break;
    }
  }

  /** Restores focus to the element that was focused before the drawer was opened. */
  private _restoreFocus() {
    const toFocus = this._elementFocusedBeforeOpened;

    // We need the extra check, because IE can set the `activeElement` to null in some cases.
    if (this.drawerConfig.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;

      // Make sure that focus is still inside the drawer or is on the body (usually because a
      // non-focusable element like the backdrop was clicked) before moving it. It's possible that
      // the consumer moved it themselves before the animation was done, in which case we shouldn't
      // do anything.
      if (
        !activeElement ||
        activeElement === this._document.body ||
        activeElement === element ||
        element.contains(activeElement)
      ) {
        toFocus.focus();
      }
    }

    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }

  /** Saves a reference to the element that was focused before the drawer was opened. */
  private _savePreviouslyFocusedElement() {
    this._elementFocusedBeforeOpened = _getFocusedElementPierceShadowDom();

    // The `focus` method isn't available during server-side rendering.
    if (this._elementRef.nativeElement.focus) {
      this._ngZone.runOutsideAngular(() => {
        Promise.resolve().then(() => this._elementRef.nativeElement.focus());
      });
    }
  }
}
