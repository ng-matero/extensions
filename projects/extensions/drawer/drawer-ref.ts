import { DialogRef } from '@angular/cdk/dialog';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { merge, Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { MtxDrawerConfig } from './drawer-config';
import { MtxDrawerContainer } from './drawer-container';
import { ComponentRef } from '@angular/core';

/**
 * Reference to a drawer dispatched from the drawer service.
 */
export class MtxDrawerRef<T = any, R = any> {
  /** Instance of the component making up the content of the drawer. */
  get instance(): T {
    return this._ref.componentInstance!;
  }

  /**
   * `ComponentRef` of the component opened into the drawer. Will be
   * null when the drawer is opened using a `TemplateRef`.
   */
  get componentRef(): ComponentRef<T> | null {
    return this._ref.componentRef;
  }

  /**
   * Instance of the component into which the drawer content is projected.
   * @docs-private
   */
  containerInstance: MtxDrawerContainer;

  /** Whether the user is allowed to close the drawer. */
  disableClose: boolean | undefined;

  /** Unique ID for the drawer. */
  id: string;

  /** Subject for notifying the user that the drawer has been dismissed. */
  private readonly _afterDismissed = new Subject<R | undefined>();

  /** Subject for notifying the user that the drawer has opened and appeared. */
  private readonly _afterOpened = new Subject<void>();

  /** Result to be passed down to the `afterDismissed` stream. */
  private _result: R | undefined;

  /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
  private _closeFallbackTimeout: any;

  constructor(
    private _ref: DialogRef<R, T>,
    config: MtxDrawerConfig,
    containerInstance: MtxDrawerContainer
  ) {
    this.containerInstance = containerInstance;
    this.disableClose = config.disableClose;
    this.id = _ref.id;

    // Emit when opening animation completes
    containerInstance._animationStateChanged
      .pipe(
        filter(event => event.phaseName === 'done' && event.toState === 'visible'),
        take(1)
      )
      .subscribe(() => {
        this._afterOpened.next();
        this._afterOpened.complete();
      });

    // Dispose overlay when closing animation is complete
    containerInstance._animationStateChanged
      .pipe(
        filter(event => event.phaseName === 'done' && event.toState === 'hidden'),
        take(1)
      )
      .subscribe(() => {
        clearTimeout(this._closeFallbackTimeout);
        this._ref.close(this._result);
      });

    _ref.overlayRef.detachments().subscribe(() => {
      this._ref.close(this._result);
    });

    merge(
      this.backdropClick(),
      this.keydownEvents().pipe(filter(event => event.keyCode === ESCAPE))
    ).subscribe(event => {
      if (
        !this.disableClose &&
        (event.type !== 'keydown' || !hasModifierKey(event as KeyboardEvent))
      ) {
        event.preventDefault();
        this.dismiss();
      }
    });
  }

  /**
   * Dismisses the drawer.
   * @param result Data to be passed back to the drawer opener.
   */
  dismiss(result?: R): void {
    if (this.containerInstance && !this._afterDismissed.closed) {
      // Transition the backdrop in parallel to the drawer.
      this.containerInstance._animationStateChanged
        .pipe(
          filter(event => event.phaseName === 'start'),
          take(1)
        )
        .subscribe(event => {
          // The logic that disposes of the overlay depends on the exit animation completing, however
          // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
          // timeout which will clean everything up if the animation hasn't fired within the specified
          // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
          // vast majority of cases the timeout will have been cleared before it has fired.
          this._closeFallbackTimeout = setTimeout(() => {
            this._ref.close(this._result);
          }, event.totalTime + 100);

          this._ref.overlayRef.detachBackdrop();
        });

      this._result = result;
      this.containerInstance.exit();
      this.containerInstance = null!;
    }
  }

  /** Gets an observable that is notified when the drawer is finished closing. */
  afterDismissed(): Observable<R | undefined> {
    return this._ref.closed;
  }

  /** Gets an observable that is notified when the drawer has opened and appeared. */
  afterOpened(): Observable<void> {
    return this._afterOpened;
  }

  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick(): Observable<MouseEvent> {
    return this._ref.backdropClick;
  }

  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents(): Observable<KeyboardEvent> {
    return this._ref.keydownEvents;
  }
}
