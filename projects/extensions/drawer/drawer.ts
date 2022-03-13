import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Injectable,
  Injector,
  Optional,
  SkipSelf,
  TemplateRef,
  InjectionToken,
  Inject,
  OnDestroy,
  StaticProvider,
  InjectFlags,
} from '@angular/core';
import { of as observableOf } from 'rxjs';
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
@Injectable()
export class MtxDrawer implements OnDestroy {
  private _drawerRefAtThisLevel: MtxDrawerRef<any> | null = null;

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
    private _injector: Injector,
    @Optional() @SkipSelf() private _parentDrawer: MtxDrawer,
    @Optional()
    @Inject(MTX_DRAWER_DEFAULT_OPTIONS)
    private _defaultOptions?: MtxDrawerConfig
  ) {}

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
    const _config = _applyConfigDefaults(this._defaultOptions || new MtxDrawerConfig(), config);
    const overlayRef = this._createOverlay(_config);
    const container = this._attachContainer(overlayRef, _config);
    const ref = new MtxDrawerRef<T, R>(container, overlayRef);

    if (componentOrTemplateRef instanceof TemplateRef) {
      container.attachTemplatePortal(
        new TemplatePortal<T>(componentOrTemplateRef, null!, {
          $implicit: _config.data,
          drawerRef: ref,
        } as any)
      );
    } else {
      const portal = new ComponentPortal(
        componentOrTemplateRef,
        undefined,
        this._createInjector(_config, ref)
      );
      const contentRef = container.attachComponentPortal(portal);
      ref.instance = contentRef.instance;
    }

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

  /**
   * Attaches the drawer container component to the overlay.
   */
  private _attachContainer(overlayRef: OverlayRef, config: MtxDrawerConfig): MtxDrawerContainer {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this._injector,
      providers: [{ provide: MtxDrawerConfig, useValue: config }],
    });

    const containerPortal = new ComponentPortal(
      MtxDrawerContainer,
      config.viewContainerRef,
      injector
    );
    const containerRef: ComponentRef<MtxDrawerContainer> = overlayRef.attach(containerPortal);
    return containerRef.instance;
  }

  /**
   * Creates a new overlay and places it in the correct location.
   * @param config The user-specified drawer config.
   */
  private _createOverlay(config: MtxDrawerConfig): OverlayRef {
    const overlayConfig = new OverlayConfig({
      direction: config.direction,
      hasBackdrop: config.hasBackdrop,
      disposeOnNavigation: config.closeOnNavigation,
      maxWidth: '100%',
      scrollStrategy: config.scrollStrategy || this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay.position().global()[config.position!]('0'),
    });

    if (config.backdropClass) {
      overlayConfig.backdropClass = config.backdropClass;
    }

    return this._overlay.create(overlayConfig);
  }

  /**
   * Creates an injector to be used inside of a drawer component.
   * @param config Config that was used to create the drawer.
   * @param drawerRef Reference to the drawer.
   */
  private _createInjector<T>(config: MtxDrawerConfig, drawerRef: MtxDrawerRef<T>): Injector {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const providers: StaticProvider[] = [
      { provide: MtxDrawerRef, useValue: drawerRef },
      { provide: MTX_DRAWER_DATA, useValue: config.data },
    ];

    if (
      config.direction &&
      (!userInjector ||
        !userInjector.get<Directionality | null>(Directionality, null, InjectFlags.Optional))
    ) {
      providers.push({
        provide: Directionality,
        useValue: { value: config.direction, change: observableOf() },
      });
    }

    return Injector.create({ parent: userInjector || this._injector, providers });
  }
}

/**
 * Applies default options to the drawer config.
 * @param defaults Object containing the default values to which to fall back.
 * @param config The configuration to which the defaults will be applied.
 * @returns The new configuration object with defaults applied.
 */
function _applyConfigDefaults(
  defaults: MtxDrawerConfig,
  config?: MtxDrawerConfig
): MtxDrawerConfig {
  return { ...defaults, ...config };
}
