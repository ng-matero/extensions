import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  Inject,
  InjectionToken,
  Injector,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Injection token that can be used to reference instances of `MtxPopoverContent`. It serves
 * as alternative token to the actual `MtxPopoverContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export const MTX_POPOVER_CONTENT = new InjectionToken<MtxPopoverContent>('MtxPopoverContent');

@Directive()
export abstract class _MtxPopoverContentBase implements OnDestroy {
  private _portal!: TemplatePortal<any>;
  private _outlet!: DomPortalOutlet;

  /** Emits when the popover content has been attached. */
  readonly _attached = new Subject<void>();

  constructor(
    private _template: TemplateRef<any>,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private _injector: Injector,
    private _viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) private _document: any,
    private _changeDetectorRef?: ChangeDetectorRef
  ) {}

  /**
   * Attaches the content with a particular context.
   * @docs-private
   */
  attach(context: any = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }

    this.detach();

    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(
        this._document.createElement('div'),
        this._componentFactoryResolver,
        this._appRef,
        this._injector
      );
    }

    const element: HTMLElement = this._template.elementRef.nativeElement;

    // Because we support opening the same popover from different triggers (which in turn have their
    // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
    // risk it staying attached to a pane that's no longer in the DOM.
    element.parentNode!.insertBefore(this._outlet.outletElement, element);

    // When `MtxPopoverContent` is used in an `OnPush` component, the insertion of the popover
    // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
    // by Angular. This causes the `@ContentChildren` for popover items within the popover to
    // not be updated by Angular. By explicitly marking for check here, we tell Angular that
    // it needs to check for new popover items and update the `@ContentChild` in `MtxPopover`.
    // @breaking-change 9.0.0 Make change detector ref required
    if (this._changeDetectorRef) {
      this._changeDetectorRef.markForCheck();
    }

    this._portal.attach(this._outlet, context);
    this._attached.next();
  }

  /**
   * Detaches the content.
   * @docs-private
   */
  detach() {
    if (this._portal.isAttached) {
      this._portal.detach();
    }
  }

  ngOnDestroy() {
    if (this._outlet) {
      this._outlet.dispose();
    }
  }
}

/**
 * Popover content that will be rendered lazily once the popover is opened.
 */
@Directive({
  selector: 'ng-template[mtxPopoverContent]',
  providers: [{ provide: MTX_POPOVER_CONTENT, useExisting: MtxPopoverContent }],
})
export class MtxPopoverContent extends _MtxPopoverContentBase {}
