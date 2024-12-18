import { coerceCssPixelValue } from '@angular/cdk/coercion';
import { Dialog, DialogConfig } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import {
  Injectable,
  InjectionToken,
  Injector,
  OnDestroy,
  TemplateRef,
  inject,
} from '@angular/core';
import { defer, Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { MtxDrawerConfig } from './drawer-config';
import { MtxDrawerContainer } from './drawer-container';
import { MtxDrawerRef } from './drawer-ref';

/** Injection token that can be used to access the data that was passed in to a drawer. */
export const MTX_DRAWER_DATA = new InjectionToken<any>('MtxDrawerData');

/** Injection token that can be used to specify default drawer options. */
export const MTX_DRAWER_DEFAULT_OPTIONS = new InjectionToken<MtxDrawerConfig>(
  'mtx-drawer-default-options'
);

// Counter for unique drawer ids.
let uniqueId = 0;

/**
 * Service to trigger Material Design bottom sheets.
 */
@Injectable({ providedIn: 'root' })
export class MtxDrawer implements OnDestroy {
  private _overlay = inject(Overlay);
  private _parentDrawer = inject(MtxDrawer, { optional: true, skipSelf: true });
  private _defaultOptions = inject<MtxDrawerConfig>(MTX_DRAWER_DEFAULT_OPTIONS, { optional: true });

  private readonly _openDrawersAtThisLevel: MtxDrawerRef<any>[] = [];
  private readonly _afterAllDismissedAtThisLevel = new Subject<void>();
  private readonly _afterOpenedAtThisLevel = new Subject<MtxDrawerRef<any>>();
  private _dialog = inject(Dialog);

  /** Keeps track of the currently-open dialogs. */
  get openDrawers(): MtxDrawerRef<any>[] {
    return this._parentDrawer ? this._parentDrawer.openDrawers : this._openDrawersAtThisLevel;
  }

  /** Stream that emits when a drawer has been opened. */
  get afterOpened(): Subject<MtxDrawerRef<any>> {
    return this._parentDrawer ? this._parentDrawer.afterOpened : this._afterOpenedAtThisLevel;
  }

  private _getAfterAllDismissed(): Subject<void> {
    const parent = this._parentDrawer;
    return parent ? parent._getAfterAllDismissed() : this._afterAllDismissedAtThisLevel;
  }

  /**
   * Stream that emits when all open drawer have finished closing.
   * Will emit on subscribe if there are no open drawers to begin with.
   */
  readonly afterAllDismissed: Observable<void> = defer(() =>
    this.openDrawers.length
      ? this._getAfterAllDismissed()
      : this._getAfterAllDismissed().pipe(startWith(undefined))
  ) as Observable<any>;

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
    let drawerRef!: MtxDrawerRef<T, R>;

    const _config = { ...(this._defaultOptions || new MtxDrawerConfig()), ...config };
    _config.id = _config.id || `mtx-drawer-${uniqueId++}`;

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
      templateContext: () => ({ drawerRef }),
      providers: (cdkRef, _cdkConfig, container) => {
        drawerRef = new MtxDrawerRef(cdkRef, _config, container as MtxDrawerContainer);
        return [
          { provide: MtxDrawerRef, useValue: drawerRef },
          { provide: MTX_DRAWER_DATA, useValue: _config.data },
        ];
      },
    });

    this.openDrawers.push(drawerRef);
    this.afterOpened.next(drawerRef);

    drawerRef.afterDismissed().subscribe(() => {
      const index = this.openDrawers.indexOf(drawerRef);

      if (index > -1) {
        this.openDrawers.splice(index, 1);

        if (!this.openDrawers.length) {
          this._getAfterAllDismissed().next();
        }
      }
    });

    return drawerRef;
  }

  /**
   * Dismisses all of the currently-open drawers.
   */
  dismissAll(): void {
    this._dismissDrawers(this.openDrawers);
  }

  /**
   * Finds an open drawer by its id.
   * @param id ID to use when looking up the drawer.
   */
  getDrawerById(id: string): MtxDrawerRef<any> | undefined {
    return this.openDrawers.find(drawer => drawer.id === id);
  }

  ngOnDestroy() {
    // Only dismiss the drawers at this level on destroy
    // since the parent service may still be active.
    this._dismissDrawers(this._openDrawersAtThisLevel);
    this._afterAllDismissedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }

  private _dismissDrawers(drawers: MtxDrawerRef<any>[]) {
    let i = drawers.length;

    while (i--) {
      drawers[i].dismiss();
    }
  }
}
