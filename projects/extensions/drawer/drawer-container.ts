import { AnimationEvent } from '@angular/animations';
import { CdkDialogContainer } from '@angular/cdk/dialog';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { mtxDrawerAnimations } from './drawer-animations';
import { MtxDrawerConfig } from './drawer-config';

/**
 * Internal component that wraps user-provided drawer content.
 * @docs-private
 */
@Component({
  selector: 'mtx-drawer-container',
  templateUrl: 'drawer-container.html',
  styleUrl: 'drawer-container.scss',
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
    '[id]': '_config.id',
    '[attr.role]': '_config.role',
    '[attr.aria-modal]': '_config.isModal',
    '[attr.aria-label]': '_config.ariaLabel',
    '[@state]': '_animationState',
    '(@state.start)': '_onAnimationStart($event)',
    '(@state.done)': '_onAnimationDone($event)',
  },
  imports: [CdkPortalOutlet],
})
export class MtxDrawerContainer extends CdkDialogContainer<MtxDrawerConfig> implements OnDestroy {
  /** The portal outlet inside of this container into which the content will be loaded. */
  @ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet!: CdkPortalOutlet;

  /** The state of the drawer animations. */
  _animationState: 'void' | 'visible' | 'hidden' = 'void';

  /** Emits whenever the state of the animation changes. */
  _animationStateChanged = new EventEmitter<AnimationEvent>();

  /** Whether the component has been destroyed. */
  private _destroyed = false;

  get _drawerPosition() {
    return `mtx-drawer-${this._config.position}`;
  }

  protected override _contentAttached(): void {
    // Delegate to the original dialog-container initialization (i.e. saving the
    // previous element, setting up the focus trap and moving focus to the container).
    super._contentAttached();

    this.enter();
  }

  /** Begin animation of bottom sheet entrance into view. */
  enter(): void {
    if (!this._destroyed) {
      this._animationState = 'visible';
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
    }
  }

  /** Begin animation of the bottom sheet exiting from view. */
  exit(): void {
    if (!this._destroyed) {
      this._animationState = 'hidden';
      this._changeDetectorRef.markForCheck();
    }
  }

  override ngOnDestroy() {
    super.ngOnDestroy();

    this._destroyed = true;
  }

  _onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'visible') {
      this._trapFocus();
    }

    this._animationStateChanged.emit(event);
  }

  _onAnimationStart(event: AnimationEvent) {
    this._animationStateChanged.emit(event);
  }

  protected override _captureInitialFocus(): void {}
}
