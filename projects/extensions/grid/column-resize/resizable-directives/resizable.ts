import {
  Directive,
  ElementRef,
  Inject,
  Injector,
  NgZone,
  ViewContainerRef,
  ChangeDetectorRef,
  Input,
  HostBinding,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Directionality } from '@angular/cdk/bidi';
import { Overlay } from '@angular/cdk/overlay';
import {
  CdkColumnDef,
  _CoalescedStyleScheduler,
  _COALESCED_STYLE_SCHEDULER,
} from '@angular/cdk/table';
import {
  ColumnResize,
  ColumnResizeNotifierSource,
  HeaderRowEventDispatcher,
  ResizeStrategy,
} from '@dcnx/mat-extensions/column-resize';

import { AbstractMatResizable, RESIZABLE_HOST_BINDINGS, RESIZABLE_INPUTS } from './common';

/**
 * Explicitly enables column resizing for a mat-header-cell.
 */
@Directive({
  selector: 'mat-header-cell[resizable], th[mat-header-cell][resizable]',
  host: RESIZABLE_HOST_BINDINGS,
  inputs: RESIZABLE_INPUTS,
  standalone: true,
})
export class MatResizable extends AbstractMatResizable {
  isResizable = true;

  @HostBinding('class') get hasResizableClass() {
    return this.isResizable ? RESIZABLE_HOST_BINDINGS.class : '';
  }

  @Input()
  get resizable() {
    return this.isResizable;
  }
  set resizable(newValue: any) {
    this.isResizable = newValue == null || newValue === '' || newValue;
  }

  protected readonly document: Document;

  constructor(
    protected readonly columnDef: CdkColumnDef,
    protected readonly columnResize: ColumnResize,
    protected readonly directionality: Directionality,
    @Inject(DOCUMENT) document: any,
    protected readonly elementRef: ElementRef,
    protected readonly eventDispatcher: HeaderRowEventDispatcher,
    protected readonly injector: Injector,
    protected readonly ngZone: NgZone,
    protected readonly overlay: Overlay,
    protected readonly resizeNotifier: ColumnResizeNotifierSource,
    protected readonly resizeStrategy: ResizeStrategy,
    @Inject(_COALESCED_STYLE_SCHEDULER)
    protected readonly styleScheduler: _CoalescedStyleScheduler,
    protected readonly viewContainerRef: ViewContainerRef,
    protected readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super();
    this.document = document;
  }
}
