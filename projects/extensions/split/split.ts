import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgZone,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
  ViewChildren,
  ViewEncapsulation,
  booleanAttribute,
  inject,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable, Subject, Subscriber } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import {
  MtxSplitArea,
  MtxSplitAreaSnapshot,
  MtxSplitDefaultOptions,
  MtxSplitOutputAreaSizes,
  MtxSplitOutputData,
  MtxSplitPoint,
  MtxSplitSnapshot,
} from './interfaces';
import { MtxSplitPane } from './split-pane';
import {
  getAreaMaxSize,
  getAreaMinSize,
  getElementPixelSize,
  getGutterSideAbsorptionCapacity,
  getInputPositiveNumber,
  getPointFromEvent,
  isUserSizesValid,
  updateAreaSize,
} from './utils';

/** Injection token that can be used to specify default split options. */
export const MTX_SPLIT_DEFAULT_OPTIONS = new InjectionToken<MtxSplitDefaultOptions>(
  'mtx-split-default-options'
);

/**
 * mtx-split
 *
 *
 *  PERCENT MODE ([unit]="'percent'")
 *  ___________________________________________________________________________________________
 * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
 * |-------------------------------------------------------------------------------------------|
 * |       20                 30                 20                 15                 15      | <-- [size]="x"
 * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
 * |calc(20% - 8px)    calc(30% - 12px)   calc(20% - 8px)    calc(15% - 6px)    calc(15% - 6px)| <-- CSS flex-basis property (with flex-grow&shrink at 0)
 * |     152px              228px              152px              114px              114px     | <-- el.getBoundingClientRect().width
 * |___________________________________________________________________________________________|
 *                                                                                 800px         <-- el.getBoundingClientRect().width
 *  flex-basis = calc( { area.size }% - { area.size/100 * nbGutter*gutterSize }px );
 *
 *
 *  PIXEL MODE ([unit]="'pixel'")
 *  ___________________________________________________________________________________________
 * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
 * |-------------------------------------------------------------------------------------------|
 * |      100                250                 *                 150                100      | <-- [size]="y"
 * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
 * |   0 0 100px          0 0 250px           1 1 auto          0 0 150px          0 0 100px   | <-- CSS flex property (flex-grow/flex-shrink/flex-basis)
 * |     100px              250px              200px              150px              100px     | <-- el.getBoundingClientRect().width
 * |___________________________________________________________________________________________|
 *                                                                                 800px         <-- el.getBoundingClientRect().width
 *
 */

@Component({
  selector: 'mtx-split',
  exportAs: 'mtxSplit',
  host: {
    class: 'mtx-split',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './split.scss',
  templateUrl: './split.html',
})
export class MtxSplit implements AfterViewInit, OnDestroy {
  private ngZone = inject(NgZone);
  private elRef = inject(ElementRef);
  private cdRef = inject(ChangeDetectorRef);
  private renderer = inject(Renderer2);
  protected _defaultOptions = inject<MtxSplitDefaultOptions>(MTX_SPLIT_DEFAULT_OPTIONS, {
    optional: true,
  });

  @Input() color: ThemePalette;

  /** The split direction. */
  @Input()
  get direction() {
    return this._direction;
  }
  set direction(v: 'horizontal' | 'vertical') {
    this._direction = v === 'vertical' ? 'vertical' : 'horizontal';

    this.renderer.addClass(this.elRef.nativeElement, `mtx-split-${this._direction}`);
    this.renderer.removeClass(
      this.elRef.nativeElement,
      `mtx-split-${this._direction === 'vertical' ? 'horizontal' : 'vertical'}`
    );

    this.build(false, false);
  }
  private _direction: 'horizontal' | 'vertical' = 'horizontal';

  /** The unit you want to specify area sizes. */
  @Input()
  get unit() {
    return this._unit;
  }
  set unit(v: 'percent' | 'pixel') {
    this._unit = v === 'pixel' ? 'pixel' : 'percent';

    this.renderer.addClass(this.elRef.nativeElement, `mtx-split-${this._unit}`);
    this.renderer.removeClass(
      this.elRef.nativeElement,
      `mtx-split-${this._unit === 'pixel' ? 'percent' : 'pixel'}`
    );

    this.build(false, true);
  }
  private _unit: 'percent' | 'pixel' = 'percent';

  /** Gutters's size (dragging elements) in pixels. */
  @Input()
  get gutterSize() {
    return this._gutterSize;
  }
  set gutterSize(v: number) {
    this._gutterSize = getInputPositiveNumber(v, 4);

    this.build(false, false);
  }
  private _gutterSize = 4;

  /** Gutter step while moving in pixels. */
  @Input()
  get gutterStep() {
    return this._gutterStep;
  }
  set gutterStep(v: number) {
    this._gutterStep = getInputPositiveNumber(v, 1);
  }
  private _gutterStep = 1;

  /** Set to true if you want to limit gutter move to adjacent areas only. */
  @Input({ transform: booleanAttribute }) restrictMove = false;

  /** Add transition when toggling visibility using `visible` or `size` changes. */
  @Input({ transform: booleanAttribute })
  get useTransition() {
    return this._useTransition;
  }
  set useTransition(v: boolean) {
    this._useTransition = v;

    if (this._useTransition) {
      this.renderer.addClass(this.elRef.nativeElement, 'mtx-split-transition');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'mtx-split-transition');
    }
  }
  private _useTransition = false;

  /**
   * Disable the dragging feature (remove cursor/image on gutters).
   * `gutterClick`/`gutterDblClick` still emits.
   */
  @Input({ transform: booleanAttribute })
  get disabled() {
    return this._disabled;
  }
  set disabled(v: boolean) {
    this._disabled = v;

    if (this._disabled) {
      this.renderer.addClass(this.elRef.nativeElement, 'mtx-split-disabled');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'mtx-split-disabled');
    }
  }
  private _disabled = false;

  /** Indicates the directionality of the areas. */
  @Input()
  get dir() {
    return this._dir;
  }
  set dir(v: 'ltr' | 'rtl') {
    this._dir = v === 'rtl' ? 'rtl' : 'ltr';

    this.renderer.setAttribute(this.elRef.nativeElement, 'dir', this._dir);
  }
  private _dir: 'ltr' | 'rtl' = 'ltr';

  /**
   * Milliseconds to detect a double click on a gutter. Set it around 300-500ms if
   * you want to use `gutterDblClick` event.
   */
  @Input()
  get gutterDblClickDuration() {
    return this._gutterDblClickDuration;
  }
  set gutterDblClickDuration(v: number) {
    this._gutterDblClickDuration = getInputPositiveNumber(v, 0);
  }
  private _gutterDblClickDuration = 0;

  /** Event emitted when drag starts. */
  @Output() dragStart = new EventEmitter<MtxSplitOutputData>(false);
  /** Event emitted when drag ends. */
  @Output() dragEnd = new EventEmitter<MtxSplitOutputData>(false);
  /** Event emitted when user clicks on a gutter. */
  @Output() gutterClick = new EventEmitter<MtxSplitOutputData>(false);
  /** Event emitted when user double clicks on a gutter. */
  @Output() gutterDblClick = new EventEmitter<MtxSplitOutputData>(false);
  /**
   * Event emitted when transition ends (could be triggered from `visible` or `size` changes).
   * Only if `useTransition` equals true.
   */
  @Output()
  get transitionEnd(): Observable<MtxSplitOutputAreaSizes> {
    return new Observable(subscriber => (this.transitionEndSubscriber = subscriber)).pipe(
      debounceTime<any>(20)
    );
  }
  private transitionEndSubscriber!: Subscriber<MtxSplitOutputAreaSizes>;

  private dragProgressSubject = new Subject<MtxSplitOutputData>();
  dragProgress$: Observable<MtxSplitOutputData> = this.dragProgressSubject.asObservable();

  private isDragging = false;
  private dragListeners: (() => void)[] = [];
  private snapshot: MtxSplitSnapshot | null = null;
  private startPoint: MtxSplitPoint | null = null;
  private endPoint: MtxSplitPoint | null = null;

  public readonly displayedAreas: MtxSplitArea[] = [];
  private readonly hidedAreas: MtxSplitArea[] = [];

  @ViewChildren('gutterEls') private gutterEls!: QueryList<ElementRef>;

  constructor() {
    const _defaultOptions = this._defaultOptions;

    if (_defaultOptions) {
      this.color = _defaultOptions.color ?? 'primary';
      this.direction = _defaultOptions.direction ?? 'horizontal';
      this.dir = _defaultOptions.dir ?? 'ltr';
      this.unit = _defaultOptions.unit ?? 'percent';
      this.gutterDblClickDuration = _defaultOptions.gutterDblClickDuration ?? 0;
      this.gutterSize = _defaultOptions.gutterSize ?? 4;
      this.gutterStep = _defaultOptions.gutterStep ?? 1;
      this.restrictMove = _defaultOptions.restrictMove ?? false;
      this.useTransition = _defaultOptions.useTransition ?? false;
    }
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      // To avoid transition at first rendering
      setTimeout(() => this.renderer.addClass(this.elRef.nativeElement, 'mtx-split-init'));
    });
  }

  private getNbGutters(): number {
    return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1;
  }

  addArea(component: MtxSplitPane): void {
    const newArea: MtxSplitArea = {
      component,
      order: 0,
      size: 0,
      minSize: null,
      maxSize: null,
    };

    if (component.visible === true) {
      this.displayedAreas.push(newArea);

      this.build(true, true);
    } else {
      this.hidedAreas.push(newArea);
    }
  }

  removeArea(component: MtxSplitPane): void {
    if (this.displayedAreas.some(a => a.component === component)) {
      const area = this.displayedAreas.find(a => a.component === component) as MtxSplitArea;
      this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);

      this.build(true, true);
    } else if (this.hidedAreas.some(a => a.component === component)) {
      const area = this.hidedAreas.find(a => a.component === component) as MtxSplitArea;
      this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);
    }
  }

  updateArea(component: MtxSplitPane, resetOrders: boolean, resetSizes: boolean): void {
    if (component.visible === true) {
      this.build(resetOrders, resetSizes);
    }
  }

  showArea(component: MtxSplitPane): void {
    const area = this.hidedAreas.find(a => a.component === component);
    if (area === undefined) {
      return;
    }

    const areas = this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);
    this.displayedAreas.push(...areas);

    this.build(true, true);
  }

  hideArea(comp: MtxSplitPane): void {
    const area = this.displayedAreas.find(a => a.component === comp);
    if (area === undefined) {
      return;
    }

    const areas = this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
    areas.forEach(_area => {
      _area.order = 0;
      _area.size = 0;
    });
    this.hidedAreas.push(...areas);

    this.build(true, true);
  }

  getVisibleAreaSizes(): MtxSplitOutputAreaSizes {
    return this.displayedAreas.map(a => (a.size === null ? '*' : a.size));
  }

  setVisibleAreaSizes(sizes: MtxSplitOutputAreaSizes): boolean {
    if (sizes.length !== this.displayedAreas.length) {
      return false;
    }

    const formatedSizes = sizes.map(s => getInputPositiveNumber(s, null)) as number[];
    const isValid = isUserSizesValid(this.unit, formatedSizes);

    if (isValid === false) {
      return false;
    }

    this.displayedAreas.forEach((area, i) => (area.component.size = formatedSizes[i]));

    this.build(false, true);
    return true;
  }

  private build(resetOrders: boolean, resetSizes: boolean): void {
    this.stopDragging();

    // ¤ AREAS ORDER

    if (resetOrders === true) {
      // If user provided 'order' for each area, use it to sort them.
      if (this.displayedAreas.every(a => a.component.order !== null)) {
        this.displayedAreas.sort(
          (a, b) => (a.component.order as number) - (b.component.order as number)
        );
      }

      // Then set real order with multiples of 2, numbers between will be used by gutters.
      this.displayedAreas.forEach((area, i) => {
        area.order = i * 2;
        area.component.setStyleOrder(area.order);
      });
    }

    // ¤ AREAS SIZE

    if (resetSizes === true) {
      const useUserSizes = isUserSizesValid(
        this.unit,
        this.displayedAreas.map(a => a.component.size) as number[]
      );

      switch (this.unit) {
        case 'percent': {
          const defaultSize = 100 / this.displayedAreas.length;

          this.displayedAreas.forEach(area => {
            area.size = useUserSizes ? (area.component.size as number) : defaultSize;
            area.minSize = getAreaMinSize(area);
            area.maxSize = getAreaMaxSize(area);
          });
          break;
        }
        case 'pixel': {
          if (useUserSizes) {
            this.displayedAreas.forEach(area => {
              area.size = area.component.size;
              area.minSize = getAreaMinSize(area);
              area.maxSize = getAreaMaxSize(area);
            });
          } else {
            const wildcardSizeAreas = this.displayedAreas.filter(a => a.component.size === null);

            // No wildcard area > Need to select one arbitrarily > first
            if (wildcardSizeAreas.length === 0 && this.displayedAreas.length > 0) {
              this.displayedAreas.forEach((area, i) => {
                area.size = i === 0 ? null : area.component.size;
                area.minSize = i === 0 ? null : getAreaMinSize(area);
                area.maxSize = i === 0 ? null : getAreaMaxSize(area);
              });
            }
            // More than one wildcard area > Need to keep only one arbitrarly > first
            else if (wildcardSizeAreas.length > 1) {
              let alreadyGotOne = false;
              this.displayedAreas.forEach(area => {
                if (area.component.size === null) {
                  if (alreadyGotOne === false) {
                    area.size = null;
                    area.minSize = null;
                    area.maxSize = null;
                    alreadyGotOne = true;
                  } else {
                    area.size = 100;
                    area.minSize = null;
                    area.maxSize = null;
                  }
                } else {
                  area.size = area.component.size;
                  area.minSize = getAreaMinSize(area);
                  area.maxSize = getAreaMaxSize(area);
                }
              });
            }
          }
          break;
        }
      }
    }

    this.refreshStyleSizes();
    this.cdRef.markForCheck();
  }

  private refreshStyleSizes(): void {
    ///////////////////////////////////////////
    // PERCENT MODE
    if (this.unit === 'percent') {
      // Only one area > flex-basis 100%
      if (this.displayedAreas.length === 1) {
        this.displayedAreas[0].component.setStyleFlex(0, 0, `100%`, false, false);
      }
      // Multiple areas > use each percent basis
      else {
        const sumGutterSize = this.getNbGutters() * this.gutterSize;

        this.displayedAreas.forEach(area => {
          area.component.setStyleFlex(
            0,
            0,
            `calc( ${area.size}% - ${((area.size as number) / 100) * sumGutterSize}px )`,
            area.minSize !== null && area.minSize === area.size ? true : false,
            area.maxSize !== null && area.maxSize === area.size ? true : false
          );
        });
      }
    }
    ///////////////////////////////////////////
    // PIXEL MODE
    else if (this.unit === 'pixel') {
      this.displayedAreas.forEach(area => {
        // Area with wildcard size
        if (area.size === null) {
          if (this.displayedAreas.length === 1) {
            area.component.setStyleFlex(1, 1, `100%`, false, false);
          } else {
            area.component.setStyleFlex(1, 1, `auto`, false, false);
          }
        }
        // Area with pixel size
        else {
          // Only one area > flex-basis 100%
          if (this.displayedAreas.length === 1) {
            area.component.setStyleFlex(0, 0, `100%`, false, false);
          }
          // Multiple areas > use each pixel basis
          else {
            area.component.setStyleFlex(
              0,
              0,
              `${area.size}px`,
              area.minSize !== null && area.minSize === area.size ? true : false,
              area.maxSize !== null && area.maxSize === area.size ? true : false
            );
          }
        }
      });
    }
  }

  _clickTimeout: number | null = null;

  clickGutter(event: MouseEvent | TouchEvent, gutterNum: number): void {
    const tempPoint = getPointFromEvent(event) as MtxSplitPoint;

    // Be sure mouseup/touchend happened at same point as mousedown/touchstart to trigger click/dblclick
    if (this.startPoint && this.startPoint.x === tempPoint.x && this.startPoint.y === tempPoint.y) {
      // If timeout in progress and new click > clearTimeout & dblClickEvent
      if (this._clickTimeout !== null) {
        window.clearTimeout(this._clickTimeout);
        this._clickTimeout = null;
        this.notify('dblclick', gutterNum);
        this.stopDragging();
      }
      // Else start timeout to call clickEvent at end
      else {
        this._clickTimeout = window.setTimeout(() => {
          this._clickTimeout = null;
          this.notify('click', gutterNum);
          this.stopDragging();
        }, this.gutterDblClickDuration);
      }
    }
  }

  startDragging(event: MouseEvent | TouchEvent, gutterOrder: number, gutterNum: number): void {
    event.preventDefault();
    event.stopPropagation();

    this.startPoint = getPointFromEvent(event);
    if (this.startPoint === null || this.disabled === true) {
      return;
    }

    this.snapshot = {
      gutterNum,
      lastSteppedOffset: 0,
      allAreasSizePixel:
        getElementPixelSize(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize,
      allInvolvedAreasSizePercent: 100,
      areasBeforeGutter: [],
      areasAfterGutter: [],
    };

    this.displayedAreas.forEach(area => {
      const areaSnapshot: MtxSplitAreaSnapshot = {
        area,
        sizePixelAtStart: getElementPixelSize(area.component.elRef, this.direction),
        sizePercentAtStart: (this.unit === 'percent' ? area.size : -1) as number, // If pixel mode, anyway, will not be used.
      };

      if (area.order < gutterOrder) {
        if (this.restrictMove === true) {
          (this.snapshot as MtxSplitSnapshot).areasBeforeGutter = [areaSnapshot];
        } else {
          (this.snapshot as MtxSplitSnapshot).areasBeforeGutter.unshift(areaSnapshot);
        }
      } else if (area.order > gutterOrder) {
        if (this.restrictMove === true) {
          if ((this.snapshot as MtxSplitSnapshot).areasAfterGutter.length === 0) {
            (this.snapshot as MtxSplitSnapshot).areasAfterGutter = [areaSnapshot];
          }
        } else {
          (this.snapshot as MtxSplitSnapshot).areasAfterGutter.push(areaSnapshot);
        }
      }
    });

    this.snapshot.allInvolvedAreasSizePercent = [
      ...this.snapshot.areasBeforeGutter,
      ...this.snapshot.areasAfterGutter,
    ].reduce((t, a) => t + a.sizePercentAtStart, 0);

    if (
      this.snapshot.areasBeforeGutter.length === 0 ||
      this.snapshot.areasAfterGutter.length === 0
    ) {
      return;
    }

    this.dragListeners.push(
      this.renderer.listen('document', 'mouseup', this.stopDragging.bind(this))
    );
    this.dragListeners.push(
      this.renderer.listen('document', 'touchend', this.stopDragging.bind(this))
    );
    this.dragListeners.push(
      this.renderer.listen('document', 'touchcancel', this.stopDragging.bind(this))
    );

    this.ngZone.runOutsideAngular(() => {
      this.dragListeners.push(
        this.renderer.listen('document', 'mousemove', this.dragEvent.bind(this))
      );
      this.dragListeners.push(
        this.renderer.listen('document', 'touchmove', this.dragEvent.bind(this))
      );
    });

    this.displayedAreas.forEach(area => area.component.lockEvents());

    this.isDragging = true;
    this.renderer.addClass(this.elRef.nativeElement, 'mtx-dragging');
    this.renderer.addClass(
      this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement,
      'mtx-dragged'
    );

    this.notify('start', this.snapshot.gutterNum);
  }

  private dragEvent(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this._clickTimeout !== null) {
      window.clearTimeout(this._clickTimeout);
      this._clickTimeout = null;
    }

    if (this.isDragging === false) {
      return;
    }

    this.endPoint = getPointFromEvent(event);
    if (this.endPoint === null) {
      return;
    }

    // Calculate steppedOffset

    let offset =
      this.direction === 'horizontal'
        ? (this.startPoint as MtxSplitPoint).x - this.endPoint.x
        : (this.startPoint as MtxSplitPoint).y - this.endPoint.y;
    if (this.dir === 'rtl' && this.direction === 'horizontal') {
      offset = -offset;
    }
    const steppedOffset = Math.round(offset / this.gutterStep) * this.gutterStep;

    if (steppedOffset === (this.snapshot as MtxSplitSnapshot).lastSteppedOffset) {
      return;
    }

    (this.snapshot as MtxSplitSnapshot).lastSteppedOffset = steppedOffset;

    // Need to know if each gutter side areas could reacts to steppedOffset

    let areasBefore = getGutterSideAbsorptionCapacity(
      this.unit,
      (this.snapshot as MtxSplitSnapshot).areasBeforeGutter,
      -steppedOffset,
      (this.snapshot as MtxSplitSnapshot).allAreasSizePixel
    );
    let areasAfter = getGutterSideAbsorptionCapacity(
      this.unit,
      (this.snapshot as MtxSplitSnapshot).areasAfterGutter,
      steppedOffset,
      (this.snapshot as MtxSplitSnapshot).allAreasSizePixel
    );

    // Each gutter side areas can't absorb all offset
    if (areasBefore.remain !== 0 && areasAfter.remain !== 0) {
      if (Math.abs(areasBefore.remain) === Math.abs(areasAfter.remain)) {
        /** */
      } else if (Math.abs(areasBefore.remain) > Math.abs(areasAfter.remain)) {
        areasAfter = getGutterSideAbsorptionCapacity(
          this.unit,
          (this.snapshot as MtxSplitSnapshot).areasAfterGutter,
          steppedOffset + areasBefore.remain,
          (this.snapshot as MtxSplitSnapshot).allAreasSizePixel
        );
      } else {
        areasBefore = getGutterSideAbsorptionCapacity(
          this.unit,
          (this.snapshot as MtxSplitSnapshot).areasBeforeGutter,
          -(steppedOffset - areasAfter.remain),
          (this.snapshot as MtxSplitSnapshot).allAreasSizePixel
        );
      }
    }
    // Areas before gutter can't absorbs all offset > need to recalculate sizes for areas after gutter.
    else if (areasBefore.remain !== 0) {
      areasAfter = getGutterSideAbsorptionCapacity(
        this.unit,
        (this.snapshot as MtxSplitSnapshot).areasAfterGutter,
        steppedOffset + areasBefore.remain,
        (this.snapshot as MtxSplitSnapshot).allAreasSizePixel
      );
    }
    // Areas after gutter can't absorbs all offset > need to recalculate sizes for areas before gutter.
    else if (areasAfter.remain !== 0) {
      areasBefore = getGutterSideAbsorptionCapacity(
        this.unit,
        (this.snapshot as MtxSplitSnapshot).areasBeforeGutter,
        -(steppedOffset - areasAfter.remain),
        (this.snapshot as MtxSplitSnapshot).allAreasSizePixel
      );
    }

    if (this.unit === 'percent') {
      // Hack because of browser messing up with sizes using calc(X% - Ypx) -> el.getBoundingClientRect()
      // If not there, playing with gutters makes total going down to 99.99875% then 99.99286%, 99.98986%,..
      const all = [...areasBefore.list, ...areasAfter.list];
      const areaToReset = all.find(
        a =>
          a.percentAfterAbsorption !== 0 &&
          a.percentAfterAbsorption !== a.areaSnapshot.area.minSize &&
          a.percentAfterAbsorption !== a.areaSnapshot.area.maxSize
      );

      if (areaToReset) {
        areaToReset.percentAfterAbsorption =
          (this.snapshot as MtxSplitSnapshot).allInvolvedAreasSizePercent -
          all
            .filter(a => a !== areaToReset)
            .reduce((total, a) => total + a.percentAfterAbsorption, 0);
      }
    }

    // Now we know areas could absorb steppedOffset, time to really update sizes

    areasBefore.list.forEach(item => updateAreaSize(this.unit, item));
    areasAfter.list.forEach(item => updateAreaSize(this.unit, item));

    this.refreshStyleSizes();
    this.notify('progress', (this.snapshot as MtxSplitSnapshot).gutterNum);
  }

  private stopDragging(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (this.isDragging === false) {
      return;
    }

    this.displayedAreas.forEach(area => area.component.unlockEvents());

    while (this.dragListeners.length > 0) {
      const fct = this.dragListeners.pop();
      if (fct) {
        fct();
      }
    }

    // Warning: Have to be before "notify('end')"
    // because "notify('end')"" can be linked to "[size]='x'" > "build()" > "stopDragging()"
    this.isDragging = false;

    // If moved from starting point, notify end
    if (
      this.endPoint &&
      ((this.startPoint as MtxSplitPoint).x !== this.endPoint.x ||
        (this.startPoint as MtxSplitPoint).y !== this.endPoint.y)
    ) {
      this.notify('end', (this.snapshot as MtxSplitSnapshot).gutterNum);
    }

    this.renderer.removeClass(this.elRef.nativeElement, 'mtx-dragging');
    this.renderer.removeClass(
      this.gutterEls.toArray()[(this.snapshot as MtxSplitSnapshot).gutterNum - 1].nativeElement,
      'mtx-dragged'
    );
    this.snapshot = null;

    // Needed to let (click)="clickGutter(...)" event run and verify if mouse moved or not
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.startPoint = null;
        this.endPoint = null;
      });
    });
  }

  notify(
    type: 'start' | 'progress' | 'end' | 'click' | 'dblclick' | 'transitionEnd',
    gutterNum: number
  ): void {
    const sizes = this.getVisibleAreaSizes();

    if (type === 'start') {
      this.dragStart.emit({ gutterNum, sizes });
    } else if (type === 'end') {
      this.dragEnd.emit({ gutterNum, sizes });
    } else if (type === 'click') {
      this.gutterClick.emit({ gutterNum, sizes });
    } else if (type === 'dblclick') {
      this.gutterDblClick.emit({ gutterNum, sizes });
    } else if (type === 'transitionEnd') {
      if (this.transitionEndSubscriber) {
        this.ngZone.run(() => this.transitionEndSubscriber.next(sizes));
      }
    } else if (type === 'progress') {
      // Stay outside zone to allow users do what they want about change detection mechanism.
      this.dragProgressSubject.next({ gutterNum, sizes });
    }
  }

  ngOnDestroy(): void {
    this.stopDragging();
  }
}
