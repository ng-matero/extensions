import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2,
  booleanAttribute,
  inject,
} from '@angular/core';

import { MtxSplit } from './split';
import { getInputPositiveNumber } from './utils';

@Directive({
  selector: 'mtx-split-pane, [mtx-split-pane]',
  exportAs: 'mtxSplitPane',
})
export class MtxSplitPane implements OnInit, OnDestroy {
  private ngZone = inject(NgZone);
  private renderer = inject(Renderer2);
  private split = inject(MtxSplit);

  elRef = inject(ElementRef);

  /**
   * Order of the area. Used to maintain the order of areas when toggling their visibility.
   * Toggling area visibility without specifying an `order` leads to weird behavior.
   */
  @Input()
  get order() {
    return this._order;
  }
  set order(v: number | null) {
    this._order = getInputPositiveNumber(v, null);

    this.split.updateArea(this, true, false);
  }
  private _order: number | null = null;

  /**
   * Size of the area in selected unit (percent/pixel).
   * - Percent: All areas sizes should equal to `100`, If not, all areas will have the same size.
   * - Pixel: An area with wildcard size (`size="*"`) is mandatory (only one) and
   *   can't have `visible="false"` or `minSize`/`maxSize`/`lockSize` properties.
   */
  @Input()
  get size() {
    return this._size;
  }
  set size(v: number | null) {
    this._size = getInputPositiveNumber(v, null);

    this.split.updateArea(this, false, true);
  }
  private _size: number | null = null;

  /** Minimum pixel or percent size, should be equal to or smaller than provided `size`. */
  @Input()
  get minSize() {
    return this._minSize;
  }
  set minSize(v: number | null) {
    this._minSize = getInputPositiveNumber(v, null);

    this.split.updateArea(this, false, true);
  }
  private _minSize: number | null = null;

  /** Maximum pixel or percent size, should be equal to or larger than provided `size`. */
  @Input()
  get maxSize() {
    return this._maxSize;
  }
  set maxSize(v: number | null) {
    this._maxSize = getInputPositiveNumber(v, null);

    this.split.updateArea(this, false, true);
  }
  private _maxSize: number | null = null;

  /** Lock area size, same as `minSize`=`maxSize`=`size`. */
  @Input({ transform: booleanAttribute })
  get lockSize() {
    return this._lockSize;
  }
  set lockSize(v: boolean) {
    this._lockSize = v;

    this.split.updateArea(this, false, true);
  }
  private _lockSize = false;

  /** Hide area visually but still present in the DOM, use `ngIf` to completely remove it. */
  @Input({ transform: booleanAttribute })
  get visible() {
    return this._visible;
  }
  set visible(v: boolean) {
    this._visible = v;

    if (this._visible) {
      this.split.showArea(this);
      this.renderer.removeClass(this.elRef.nativeElement, 'mtx-split-pane-hidden');
    } else {
      this.split.hideArea(this);
      this.renderer.addClass(this.elRef.nativeElement, 'mtx-split-pane-hidden');
    }
  }
  private _visible = true;

  private transitionListener!: () => void;
  private readonly lockListeners: (() => void)[] = [];

  constructor() {
    this.renderer.addClass(this.elRef.nativeElement, 'mtx-split-pane');
  }

  ngOnInit(): void {
    this.split.addArea(this);

    this.ngZone.runOutsideAngular(() => {
      this.transitionListener = this.renderer.listen(
        this.elRef.nativeElement,
        'transitionend',
        (event: TransitionEvent) => {
          // Limit only flex-basis transition to trigger the event
          if (event.propertyName === 'flex-basis') {
            this.split.notify('transitionEnd', -1);
          }
        }
      );
    });
  }

  setStyleOrder(value: number): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'order', value);
  }

  setStyleFlex(grow: number, shrink: number, basis: string, isMin: boolean, isMax: boolean): void {
    // Need 3 separated properties to work on IE11 (https://github.com/angular/flex-layout/issues/323)
    this.renderer.setStyle(this.elRef.nativeElement, 'flex-grow', grow);
    this.renderer.setStyle(this.elRef.nativeElement, 'flex-shrink', shrink);
    this.renderer.setStyle(this.elRef.nativeElement, 'flex-basis', basis);

    if (isMin === true) {
      this.renderer.addClass(this.elRef.nativeElement, 'mtx-min');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'mtx-min');
    }

    if (isMax === true) {
      this.renderer.addClass(this.elRef.nativeElement, 'mtx-max');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'mtx-max');
    }
  }

  lockEvents(): void {
    this.ngZone.runOutsideAngular(() => {
      this.lockListeners.push(
        this.renderer.listen(this.elRef.nativeElement, 'selectstart', (e: Event) => false)
      );
      this.lockListeners.push(
        this.renderer.listen(this.elRef.nativeElement, 'dragstart', (e: Event) => false)
      );
    });
  }

  unlockEvents(): void {
    while (this.lockListeners.length > 0) {
      const fct = this.lockListeners.pop();
      if (fct) {
        fct();
      }
    }
  }

  ngOnDestroy(): void {
    this.unlockEvents();

    if (this.transitionListener) {
      this.transitionListener();
    }

    this.split.removeArea(this);
  }
}
