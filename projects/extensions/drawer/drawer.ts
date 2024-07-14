import { coerceCssPixelValue } from '@angular/cdk/coercion';
import { Dialog, DialogConfig } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import {
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  OnDestroy,
  Optional,
  SkipSelf,
  TemplateRef,
} from '@angular/core';
import { MtxDrawerConfig } from './drawer-config';
import { MtxDrawerContainer } from './drawer-container';
import { MtxDrawerRef } from './drawer-ref';

/** Injection token that can be used to access the data that was passed in to a drawer. */
export const MTX_DRAWER_DATA = new InjectionToken<any>('MtxDrawerData');

/** Injection token that can be used to specify default drawer options. */
export const MTX_DRAWER_DEFAULT_OPTIONS = new InjectionToken<MtxDrawerConfig>(
  'mtx-drawer-default-options'
);

/**
 * Service to trigger Material Design bottom sheets.
 */
@Injectable({ providedIn: 'root' })
export class MtxDrawer implements OnDestroy {
  private _drawerRefAtThisLevel: MtxDrawerRef<any> | null = null;
  private _dialog: Dialog;

  /** Reference to the currently opened drawer. */
  get _openedDrawerRef(): MtxDrawerRef<any> | null {
    const parent = this._parentDrawer;
    return parent ? parent._openedDrawerRef : this._drawerRefAtThisLevel;
  }

  set _openedDrawerRef(value: MtxDrawerRef<any> | null) {
    if (this._parentDrawer) {
      this._parentDrawer._openedDrawerRef = value;
    } else {
      this._drawerRefAtThisLevel = value;
    }
  }

  constructor(
    private _overlay: Overlay,
    injector: Injector,
    @Optional() @SkipSelf() private _parentDrawer: MtxDrawer,
    @Optional()
    @Inject(MTX_DRAWER_DEFAULT_OPTIONS)
    private _defaultOptions?: MtxDrawerConfig
  ) {
    this._dialog = injector.get(Dialog);
  }

  /**
   * Opens a drawer containing the given component.
   * @param component Type of the component to load into the drawer.
   * @param config Extra configuration options.
   * @returns Reference to the newly-opened drawer.
   */
  open<T, D = any, R = any>(
    component: ComponentType<T>,
    config?: MtxDrawerConfig<D>
  ): MtxDrawerRef<T, R>;

  /**
   * Opens a drawer containing the given template.
   * @param template TemplateRef to instantiate as the drawer content.
   * @param config Extra configuration options.
   * @returns Reference to the newly-opened drawer.
   */
  open<T, D = any, R = any>(
    template: TemplateRef<T>,
    config?: MtxDrawerConfig<D>
  ): MtxDrawerRef<T, R>;

  open<T, D = any, R = any>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    config?: MtxDrawerConfig<D>
  ): MtxDrawerRef<T, R> {
    let ref!: MtxDrawerRef<T, R>;

    const _config = { ...(this._defaultOptions || new MtxDrawerConfig()), ...config };

    _config.width =
      _config.position === 'left' || _config.position === 'right'
        ? coerceCssPixelValue(_config.width)
        : '100vw';

    _config.height =
      _config.position === 'top' || _config.position === 'bottom'
        ? coerceCssPixelValue(_config.height)
        : '100vh';

    this._dialog.open<R, D, T>(componentOrTemplateRef, {
      ..._config,
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on detachments so that we can sync up the animation.
      closeOnOverlayDetachments: false,
      container: {
        type: MtxDrawerContainer,
        providers: () => [
          // Provide our config as the CDK config as well since it has the same interface as the
          // CDK one, but it contains the actual values passed in by the user for things like
          // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
          { provide: MtxDrawerConfig, useValue: _config },
          { provide: DialogConfig, useValue: _config },
        ],
      },
      scrollStrategy: _config.scrollStrategy || this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay.position().global()[_config.position!]('0'),
      templateContext: () => ({ drawerRef: ref }),
      providers: (cdkRef, _cdkConfig, container) => {
        ref = new MtxDrawerRef(cdkRef, _config, container as MtxDrawerContainer);
        return [
          { provide: MtxDrawerRef, useValue: ref },
          { provide: MTX_DRAWER_DATA, useValue: _config.data },
        ];
      },
    });

    // When the drawer is dismissed, clear the reference to it.
    ref.afterDismissed().subscribe(() => {
      // Clear the drawer ref if it hasn't already been replaced by a newer one.
      if (this._openedDrawerRef == ref) {
        this._openedDrawerRef = null;
      }
    });

    if (this._openedDrawerRef) {
      // If a drawer is already in view, dismiss it and enter the
      // new drawer after exit animation is complete.
      this._openedDrawerRef.afterDismissed().subscribe(() => ref.containerInstance.enter());
      this._openedDrawerRef.dismiss();
    } else {
      // If no drawer is in view, enter the new drawer.
      ref.containerInstance.enter();
    }

    this._openedDrawerRef = ref;

    return ref;
  }

  /**
   * Dismisses the currently-visible drawer.
   * @param result Data to pass to the drawer instance.
   */
  dismiss<R = any>(result?: R): void {
    if (this._openedDrawerRef) {
      this._openedDrawerRef.dismiss(result);
    }
  }

  ngOnDestroy() {
    if (this._drawerRefAtThisLevel) {
      this._drawerRefAtThisLevel.dismiss();
    }
  }
}
