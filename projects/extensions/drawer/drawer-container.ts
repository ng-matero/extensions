import { CdkDialogContainer } from '@angular/cdk/dialog';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MtxDrawerConfig } from './drawer-config';

const ENTER_ANIMATION = '_mtx-drawer-enter';
const EXIT_ANIMATION = '_mtx-drawer-exit';

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
  host: {
    'class': 'mtx-drawer-container',
    '[class]': '_drawerPosition',
    '[class.mtx-drawer-container-animations-enabled]': '!_animationsDisabled',
    '[class.mtx-drawer-container-enter]': '_animationState === "visible"',
    '[class.mtx-drawer-container-exit]': '_animationState === "hidden"',
    'tabindex': '-1',
    '[id]': '_config.id',
    '[attr.role]': '_config.role',
    '[attr.aria-modal]': '_config.isModal',
    '[attr.aria-label]': '_config.ariaLabel',
    '(animationstart)': '_handleAnimationEvent(true, $event.animationName)',
    '(animationend)': '_handleAnimationEvent(false, $event.animationName)',
    '(animationcancel)': '_handleAnimationEvent(false, $event.animationName)',
  },
  imports: [CdkPortalOutlet],
})
export class MtxDrawerContainer extends CdkDialogContainer<MtxDrawerConfig> implements OnDestroy {
  /** The portal outlet inside of this container into which the content will be loaded. */
  @ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet!: CdkPortalOutlet;

  protected _animationsDisabled =
    inject(ANIMATION_MODULE_TYPE, { optional: true }) === 'NoopAnimations';

  /** The state of the drawer animations. */
  _animationState: 'void' | 'visible' | 'hidden' = 'void';

  /** Emits whenever the state of the animation changes. */
  _animationStateChanged = new EventEmitter<{
    toState: 'visible' | 'hidden';
    phase: 'start' | 'done';
  }>();

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
      if (this._animationsDisabled) {
        this._simulateAnimation(ENTER_ANIMATION);
      }
    }
  }

  /** Begin animation of the bottom sheet exiting from view. */
  exit(): void {
    if (!this._destroyed) {
      this._animationState = 'hidden';
      this._changeDetectorRef.markForCheck();
      if (this._animationsDisabled) {
        this._simulateAnimation(EXIT_ANIMATION);
      }
    }
  }

  override ngOnDestroy() {
    super.ngOnDestroy();

    this._destroyed = true;
  }

  private _simulateAnimation(name: typeof ENTER_ANIMATION | typeof EXIT_ANIMATION) {
    this._ngZone.run(() => {
      this._handleAnimationEvent(true, name);
      setTimeout(() => this._handleAnimationEvent(false, name));
    });
  }

  protected _handleAnimationEvent(isStart: boolean, animationName: string) {
    const isEnter = animationName === ENTER_ANIMATION;
    const isExit = animationName === EXIT_ANIMATION;

    if (isEnter) {
      this._trapFocus();
    }

    if (isEnter || isExit) {
      this._animationStateChanged.emit({
        toState: isEnter ? 'visible' : 'hidden',
        phase: isStart ? 'start' : 'done',
      });
    }
  }

  protected override _captureInitialFocus(): void {}
}
