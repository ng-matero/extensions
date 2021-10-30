import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import {
  BooleanInput,
  coerceBooleanProperty,
  coerceNumberProperty,
  NumberInput,
} from '@angular/cdk/coercion';
import {
  DOWN_ARROW,
  END,
  HOME,
  LEFT_ARROW,
  PAGE_DOWN,
  PAGE_UP,
  RIGHT_ARROW,
  UP_ARROW,
} from '@angular/cdk/keycodes';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  CanColor,
  CanDisable,
  HasTabIndex,
  mixinColor,
  mixinDisabled,
  mixinTabIndex,
} from '@angular/material/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { Subscription } from 'rxjs';

const activeEventOptions = normalizePassiveListenerOptions({ passive: false });

/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 */
const MIN_AUTO_TICK_SEPARATION = 30;

/** The thumb gap size for a disabled slider. */
const DISABLED_THUMB_GAP = 7;

/** The thumb gap size for a non-active slider at its minimum value. */
const MIN_VALUE_NONACTIVE_THUMB_GAP = 7;

/** The thumb gap size for an active slider at its minimum value. */
const MIN_VALUE_ACTIVE_THUMB_GAP = 10;

/**
 * Provider Expression that allows mtx-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 */
export const MTX_SLIDER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MtxSlider),
  multi: true,
};

/** A simple change event emitted by the MtxSlider component. */
export class MtxSliderChange {
  /** The MtxSlider that changed. */
  source!: MtxSlider;

  /** The new value of the source slider. */
  value!: number | number[] | null;
}

// Boilerplate for applying mixins to MtxSlider.
/** @docs-private */
const _MtxSliderBase = mixinTabIndex(
  mixinColor(
    mixinDisabled(
      class {
        constructor(public _elementRef: ElementRef) {}
      }
    ),
    'accent'
  )
);

/**
 * Allows users to select from a range of values by moving the slider thumb. It is similar in
 * behavior to the native `<input type="range">` element.
 */
@Component({
  selector: 'mtx-slider',
  exportAs: 'mtxSlider',
  providers: [MTX_SLIDER_VALUE_ACCESSOR],
  host: {
    '(focus)': '_onFocus()',
    '(blur)': '_onBlur()',
    '(click)': '_onClick($event)',
    '(keydown)': '_onKeydown($event)',
    '(keyup)': '_onKeyup()',
    '(mouseenter)': '_onMouseenter()',

    // On Safari starting to slide temporarily triggers text selection mode which
    // show the wrong cursor. We prevent it by stopping the `selectstart` event.
    '(selectstart)': '$event.preventDefault()',
    'class': 'mtx-slider mat-focus-indicator',
    'role': 'slider',
    '[tabIndex]': 'tabIndex',
    '[attr.aria-disabled]': 'disabled',
    '[attr.aria-valuemax]': 'max',
    '[attr.aria-valuemin]': 'min',
    '[attr.aria-valuenow]': 'value',

    // NVDA and Jaws appear to announce the `aria-valuenow` by calculating its percentage based
    // on its value between `aria-valuemin` and `aria-valuemax`. Due to how decimals are handled,
    // it can cause the slider to read out a very long value like 0.20000068 if the current value
    // is 0.2 with a min of 0 and max of 1. We work around the issue by setting `aria-valuetext`
    // to the same value that we set on the slider's thumb which will be truncated.
    '[attr.aria-valuetext]': 'valueText == null ? displayValue : valueText',
    '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
    '[class.mtx-slider-disabled]': 'disabled',
    '[class.mtx-slider-has-ticks]': 'tickInterval',
    '[class.mtx-slider-horizontal]': '!vertical',
    '[class.mtx-slider-axis-inverted]': '_invertAxis',
    '[class.mtx-slider-sliding]': '_isSliding',
    '[class.mtx-slider-thumb-label-showing]': 'thumbLabel',
    '[class.mtx-slider-vertical]': 'vertical',
    '[class.mtx-slider-min-value]': '_isMinValue',
    '[class.mtx-range-slider]': 'isRangeSlider()',
    '[class.mtx-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
    '[class._mtx-animation-noopable]': '_animationMode === "NoopAnimations"',
  },
  templateUrl: 'slider.html',
  styleUrls: ['slider.scss'],
  inputs: ['disabled', 'color', 'tabIndex'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxSlider
  extends _MtxSliderBase
  implements ControlValueAccessor, OnDestroy, CanDisable, CanColor, OnInit, HasTabIndex
{
  /** Whether the slider is inverted. */
  @Input()
  get invert(): boolean {
    return this._invert;
  }
  set invert(value: boolean) {
    this._invert = coerceBooleanProperty(value);
  }
  private _invert = false;

  /** The maximum value that the slider can have. */
  @Input()
  get max(): number {
    return this._max;
  }
  set max(v: number) {
    this._max = coerceNumberProperty(v, this._max);
    this._percent = this._calculatePercentage(this._value);

    // Since this also modifies the percentage, we need to let the change detection know.
    this._changeDetectorRef.markForCheck();
  }
  private _max: number = 100;

  /** The minimum value that the slider can have. */
  @Input()
  get min(): number {
    return this._min;
  }
  set min(v: number) {
    this._min = coerceNumberProperty(v, this._min);

    // If the value wasn't explicitly set by the user, set it to the min.
    if (this._value === null) {
      this.value = this._min;
    }
    this._percent = this._calculatePercentage(this._value);

    // Since this also modifies the percentage, we need to let the change detection know.
    this._changeDetectorRef.markForCheck();
  }
  private _min: number = 0;

  /** The values at which the thumb will snap. */
  @Input()
  get step(): number {
    return this._step;
  }
  set step(v: number) {
    this._step = coerceNumberProperty(v, this._step);

    if (this._step % 1 !== 0) {
      this._roundToDecimal = this._step.toString().split('.').pop()!.length;
    }

    // Since this could modify the label, we need to notify the change detection.
    this._changeDetectorRef.markForCheck();
  }
  private _step: number = 1;

  /** Whether or not to show the thumb label. */
  @Input()
  get thumbLabel(): boolean {
    return this._thumbLabel;
  }
  set thumbLabel(value: boolean) {
    this._thumbLabel = coerceBooleanProperty(value);
  }
  private _thumbLabel: boolean = false;

  /**
   * How often to show ticks. Relative to the step so that a tick always appears on a step.
   * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
   */
  @Input()
  get tickInterval() {
    return this._tickInterval;
  }
  set tickInterval(value: 'auto' | number) {
    if (value === 'auto') {
      this._tickInterval = 'auto';
    } else if (typeof value === 'number' || typeof value === 'string') {
      this._tickInterval = coerceNumberProperty(value, this._tickInterval as number);
    } else {
      this._tickInterval = 0;
    }
  }
  private _tickInterval: 'auto' | number = 0;

  /** Value of the slider. */
  @Input()
  get value(): number | number[] | null {
    // If the value needs to be read and it is still uninitialized, initialize it to the min.
    if (this._value === null) {
      this.value = this._min;
    }
    return this._value;
  }
  set value(v: number | number[] | null) {
    if (
      v !== this._value ||
      (v instanceof Array &&
        this._value != null &&
        (v[0] !== (this._value as number[])[0] || v[1] !== (this._value as number[])[1]))
    ) {
      let value: number | number[] | null = null;
      if (v instanceof Array) {
        value = [coerceNumberProperty(v[0]), coerceNumberProperty(v[1])];
        value = [Math.min(value[0], value[1]), Math.max(value[1], value[0])];
      } else {
        value = coerceNumberProperty(v);
      }

      // While incrementing by a decimal we can end up with values like 33.300000000000004.
      // Truncate it to ensure that it matches the label and to make it easier to work with.
      if (this._roundToDecimal) {
        if (v instanceof Array) {
          value = [
            parseFloat((value as number[])[0].toFixed(this._roundToDecimal)),
            parseFloat((value as number[])[1].toFixed(this._roundToDecimal)),
          ];
        } else {
          value = parseFloat(Number(value).toFixed(this._roundToDecimal));
        }
      }

      this._value = value;
      this._percent = this._calculatePercentage(this._value);

      // Since this also modifies the percentage, we need to let the change detection know.
      this._changeDetectorRef.markForCheck();
    }
  }
  private _value: number | number[] | null = null;

  /**
   * Function that will be used to format the value before it is displayed
   * in the thumb label. Can be used to format very large number in order
   * for them to fit into the slider thumb.
   */
  @Input() displayWith!: (value: number | null) => string | number;

  /** Text corresponding to the slider's value. Used primarily for improved accessibility. */
  @Input() valueText!: string;

  /** Whether the slider is vertical. */
  @Input()
  get vertical(): boolean {
    return this._vertical;
  }
  set vertical(value: boolean) {
    this._vertical = coerceBooleanProperty(value);
  }
  private _vertical = false;

  /** Event emitted when the slider value has changed. */
  @Output() readonly change: EventEmitter<MtxSliderChange> = new EventEmitter<MtxSliderChange>();

  /** Event emitted when the slider thumb moves. */
  @Output() readonly input: EventEmitter<MtxSliderChange> = new EventEmitter<MtxSliderChange>();

  /**
   * Emits when the raw value of the slider changes. This is here primarily
   * to facilitate the two-way binding for the `value` input.
   * @docs-private
   */
  @Output() readonly valueChange: EventEmitter<number | number[] | null> = new EventEmitter<
    number | number[] | null
  >();

  /** The value to be used for display purposes. */
  get displayValue(): string | number {
    if (this.value == null) {
      return '';
    }
    if (this.displayWith) {
      if (this.value instanceof Array) {
        return this.displayWith(this.value[0]);
      } else {
        return this.displayWith(this.value);
      }
    }

    // Note that this could be improved further by rounding something like 0.999 to 1 or
    // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
    // every change detection cycle.
    if (this.value instanceof Array) {
      if (
        this._roundToDecimal &&
        this.value &&
        (this.value[0] % 1 !== 0 || this.value[1] % 1 !== 0)
      ) {
        return this.value[0].toFixed(this._roundToDecimal);
      }
    } else {
      if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
        return this.value.toFixed(this._roundToDecimal);
      }
    }

    if (this.value instanceof Array) {
      return this.value[0] || 0;
    } else {
      return this.value || 0;
    }
  }

  /** The value to be used for display purposes. */
  get displayValueRight(): string | number {
    if (this.value == null) {
      return '';
    }
    if (this.displayWith) {
      return this.displayWith((this.value as number[])[1]);
    }

    // Note that this could be improved further by rounding something like 0.999 to 1 or
    // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
    // every change detection cycle.
    if (
      this._roundToDecimal &&
      this.value &&
      this.value != null &&
      (this.value as number[])[1] % 1 !== 0
    ) {
      return (this.value as number[])[1].toFixed(this._roundToDecimal);
    }

    return (this.value as number[])[1] || 0;
  }

  /** set focus to the host element */
  focus() {
    this._focusHostElement();
  }

  /** blur the host element */
  blur() {
    this._blurHostElement();
  }

  /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
  onTouched: () => any = () => {};

  /** The percentage of the slider that coincides with the value. */
  get percent(): number | number[] {
    return this._clamp(this._percent);
  }

  private _percent: number | number[] = 0;

  /**
   * Whether or not the thumb is sliding.
   * Used to determine if there should be a transition for the thumb and fill track.
   */
  _isSliding: boolean = false;

  /**
   * Whether or not the slider is active (clicked or sliding).
   * Used to shrink and grow the thumb as according to the Material Design spec.
   */
  _isActive: boolean = false;

  /**
   * Whether the axis of the slider is inverted.
   * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's
   *  value).
   */
  get _invertAxis() {
    // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom
    // to top. However from a y-axis standpoint this is inverted.
    return this.vertical ? !this.invert : this.invert;
  }

  /** Whether the slider is at its minimum value. */
  get _isMinValue() {
    if (this.value instanceof Array) {
      return (this.percent as number[])[0] === 0;
    } else {
      return this.percent === 0;
    }
  }

  /**
   * The amount of space to leave between the slider thumb and the track fill & track background
   * elements.
   */
  get _thumbGap() {
    if (this.disabled) {
      return DISABLED_THUMB_GAP;
    }
    if (this._isMinValue && !this.thumbLabel) {
      return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
    }
    return 0;
  }

  /** CSS styles for the track background element. */
  get _trackBackgroundStylesLeft(): { [key: string]: string } {
    const axis = this.vertical ? 'Y' : 'X';
    let scale: string = '';
    if (this.percent instanceof Array) {
      scale = this.vertical ? `1, ${this.percent[0]}, 1` : `${this.percent[0]}, 1, 1`;
    } else {
      scale = this.vertical ? `1, ${this.percent}, 1` : `${this.percent}, 1, 1`;
    }
    const sign = this._shouldInvertMouseCoords() ? '' : '-';

    return {
      // scale3d avoids some rendering issues in Chrome. See #12071.
      transform: `translate${axis}(${sign}${this._thumbGap}px) scale3d(${scale})`,
    };
  }

  get _trackBackgroundStylesRight(): { [key: string]: string } {
    const axis = this.vertical ? 'Y' : 'X';
    let scale: string = '';
    if (this.percent instanceof Array) {
      scale = this.vertical ? `1, ${1 - this.percent[1]}, 1` : `${1 - this.percent[1]}, 1, 1`;
    } else {
      scale = this.vertical ? `1, ${1 - this.percent}, 1` : `${1 - this.percent}, 1, 1`;
    }
    const sign = this._shouldInvertMouseCoords() ? '-' : '';
    return {
      // scale3d avoids some rendering issues in Chrome. See #12071.
      transform: `translate${axis}(${sign}${this._thumbGap}px) scale3d(${scale})`,
    };
  }

  /** CSS styles for the track fill element. */
  get _trackFillStyles(): { [key: string]: string } {
    const axis = this.vertical ? 'Y' : 'X';
    let scale: string = '';
    if (this.percent instanceof Array) {
      scale = this.vertical
        ? `1, ${this.percent[1] - this.percent[0]}, 1`
        : `${this.percent[1] - this.percent[0]}, 1, 1`;
    } else {
      scale = this.vertical ? `1, ${this.percent}, 1` : `${this.percent}, 1, 1`;
    }

    const invertOffset =
      this._getDirection() === 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
    let offset: number = 0;
    if (this.percent instanceof Array) {
      offset = (invertOffset ? 1 - this.percent[1] : this.percent[0]) * 100;
    } else {
      offset = 0;
    }
    const sign = this._shouldInvertMouseCoords() ? '' : '-';

    if (this.isRangeSlider()) {
      return {
        // scale3d avoids some rendering issues in Chrome. See #12071.
        transform: `translate${axis}(${offset}%) scale3d(${scale})`,
      };
    } else {
      return {
        // scale3d avoids some rendering issues in Chrome. See #12071.
        transform: `translate${axis}(${sign}${this._thumbGap}px) scale3d(${scale})`,
      };
    }
  }

  /** CSS styles for the ticks container element. */
  get _ticksContainerStyles(): { [key: string]: string } {
    const axis = this.vertical ? 'Y' : 'X';
    // For a horizontal slider in RTL languages we push the ticks container off the left edge
    // instead of the right edge to avoid causing a horizontal scrollbar to appear.
    const sign = !this.vertical && this._getDirection() === 'rtl' ? '' : '-';
    const offset = (this._tickIntervalPercent / 2) * 100;
    return {
      transform: `translate${axis}(${sign}${offset}%)`,
    };
  }

  /** CSS styles for the ticks element. */
  get _ticksStyles(): { [key: string]: string } {
    const tickSize = this._tickIntervalPercent * 100;
    const backgroundSize = this.vertical ? `2px ${tickSize}%` : `${tickSize}% 2px`;
    const axis = this.vertical ? 'Y' : 'X';
    // Depending on the direction we pushed the ticks container, push the ticks the opposite
    // direction to re-center them but clip off the end edge. In RTL languages we need to flip
    // the ticks 180 degrees so we're really cutting off the end edge abd not the start.
    const sign = !this.vertical && this._getDirection() === 'rtl' ? '-' : '';
    const rotate = !this.vertical && this._getDirection() === 'rtl' ? ' rotate(180deg)' : '';
    const styles: { [key: string]: string } = {
      backgroundSize,
      // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
      transform: `translateZ(0) translate${axis}(${sign}${tickSize / 2}%)${rotate}`,
    };

    if (this._isMinValue && this._thumbGap) {
      const side = this.vertical
        ? this._invertAxis
          ? 'Bottom'
          : 'Top'
        : this._invertAxis
        ? 'Right'
        : 'Left';
      styles[`padding${side}`] = `${this._thumbGap}px`;
    }

    return styles;
  }

  get _thumbContainerStylesLeft(): { [key: string]: string } {
    const axis = this.vertical ? 'Y' : 'X';
    // For a horizontal slider in RTL languages we push the thumb container off the left edge
    // instead of the right edge to avoid causing a horizontal scrollbar to appear.
    const invertOffset =
      this._getDirection() === 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
    let offset: number = 0;
    if (this.percent instanceof Array) {
      offset = (invertOffset ? this.percent[0] : 1 - this.percent[0]) * 100;
    } else {
      offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
    }
    return {
      transform: `translate${axis}(-${offset}%)`,
    };
  }

  get _thumbContainerStylesRight(): { [key: string]: string } {
    const axis = this.vertical ? 'Y' : 'X';
    // For a horizontal slider in RTL languages we push the thumb container off the left edge
    // instead of the right edge to avoid causing a horizontal scrollbar to appear.
    const invertOffset =
      this._getDirection() === 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
    let offset: number = 0;
    if (this.percent instanceof Array) {
      offset = (invertOffset ? this.percent[1] : 1 - this.percent[1]) * 100;
    } else {
      offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
    }
    return {
      transform: `translate${axis}(-${offset}%)`,
    };
  }

  /** The size of a tick interval as a percentage of the size of the track. */
  private _tickIntervalPercent: number = 0;

  /** The dimensions of the slider. */
  private _sliderDimensions: ClientRect | null = null;

  private _controlValueAccessorChangeFn: (value: any) => void = () => {};

  /** Decimal places to round to, based on the step amount. */
  private _roundToDecimal!: number;

  /** Subscription to the Directionality change EventEmitter. */
  private _dirChangeSubscription = Subscription.EMPTY;

  /** The value of the slider when the slide start event fires. */
  private _valueOnSlideStart!: number | number[] | null;

  /** Position of the pointer when the dragging started. */
  private _pointerPositionOnStart!: { x: number; y: number } | null;

  /** Reference to the inner slider wrapper element. */
  @ViewChild('sliderWrapper') private _sliderWrapper!: ElementRef;

  /** The slider thumb which is currently used (left or right) */
  private _currentSliderDir = 'l';

  /**
   * Whether mouse events should be converted to a slider position by calculating their distance
   * from the right or bottom edge of the slider as opposed to the top or left.
   */
  private _shouldInvertMouseCoords() {
    return this._getDirection() === 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
  }

  /** The language direction for this slider element. */
  private _getDirection() {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }

  constructor(
    elementRef: ElementRef,
    private _focusMonitor: FocusMonitor,
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() private _dir: Directionality,
    @Attribute('tabindex') tabIndex: string,
    // @breaking-change 7.0.0 `_animationMode` parameter to be made required.
    @Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode?: string,
    private _ngZone?: NgZone
  ) {
    super(elementRef);

    this.tabIndex = parseInt(tabIndex, 10) || 0;

    this._runOutsizeZone(() => {
      const element = elementRef.nativeElement;
      element.addEventListener('mousedown', this._pointerDown, activeEventOptions);
      element.addEventListener('touchstart', this._pointerDown, activeEventOptions);
    });
  }

  ngOnInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((origin: FocusOrigin) => {
      this._isActive = !!origin && origin !== 'keyboard';
      this._changeDetectorRef.detectChanges();
    });
    if (this._dir) {
      this._dirChangeSubscription = this._dir.change.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
    }
  }

  ngOnDestroy() {
    const element = this._elementRef.nativeElement;
    element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
    element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
    this._removeGlobalEvents();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._dirChangeSubscription.unsubscribe();
  }

  _onMouseenter() {
    if (this.disabled) {
      return;
    }

    // We save the dimensions of the slider here so we can use them to update the spacing of the
    // ticks and determine where on the slider click and slide events happen.
    this._sliderDimensions = this._getSliderDimensions();
    this._updateTickIntervalPercent();
  }

  _onClick(event: MouseEvent) {
    if (this.disabled) {
      return;
    }

    let oldValue;
    if (this.value instanceof Array) {
      oldValue = [this.value[0], this.value[1]];
    } else {
      oldValue = this.value;
    }

    this._isSliding = false;
    this._focusHostElement();

    if (!this._sliderDimensions) {
      return;
    }
    const offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
    const size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
    const posComponent = this.vertical ? event.clientY : event.clientX;

    // The exact value is calculated from the event and used to find the closest snap value.
    let percent = Number(this._clamp((posComponent - offset) / size));

    if (this._shouldInvertMouseCoords()) {
      percent = 1 - percent;
    }

    if (
      percent <=
      (this.percent as number[])[0] +
        ((this.percent as number[])[1] - (this.percent as number[])[0]) / 2
    ) {
      this._currentSliderDir = 'l';
    } else {
      this._currentSliderDir = 'r';
    }

    if (this._currentSliderDir === 'l') {
      this._updateValueFromPositionLeft({ x: event.clientX, y: event.clientY });
    } else {
      this._updateValueFromPositionRight({ x: event.clientX, y: event.clientY });
    }

    // Emit a change and input event if the value changed.
    if (this.value instanceof Array) {
      if (
        (oldValue as number[])[0] !== this.value[0] ||
        (oldValue as number[])[1] !== this.value[1]
      ) {
        this._emitInputEvent();
        this._emitChangeEvent();
      }
    } else {
      if (oldValue !== this.value) {
        this._emitInputEvent();
        this._emitChangeEvent();
      }
    }
  }

  _onFocus() {
    // We save the dimensions of the slider here so we can use them to update the spacing of the
    // ticks and determine where on the slider click and slide events happen.
    this._sliderDimensions = this._getSliderDimensions();
    this._updateTickIntervalPercent();
  }

  _onBlur() {
    this.onTouched();
  }

  _onKeydown(event: KeyboardEvent) {
    if (this.disabled) {
      return;
    }

    let oldValue;
    if (this.value instanceof Array) {
      oldValue = [this.value[0], this.value[1]];
    } else {
      oldValue = this.value;
    }

    switch (event.keyCode) {
      case PAGE_UP:
        this._increment(10);
        break;
      case PAGE_DOWN:
        this._increment(-10);
        break;
      case END:
        this.value = this.max;
        break;
      case HOME:
        this.value = this.min;
        break;
      case LEFT_ARROW:
        // NOTE: For a sighted user it would make more sense that when they press an arrow
        // key on an inverted slider the thumb moves in that direction. However for a blind
        // user, nothing about the slider indicates that it is inverted. They will expect
        // left to be decrement, regardless of how it appears on the screen. For speakers
        // ofRTL languages, they probably expect left to mean increment. Therefore we flip
        // the meaning of the side arrow keys for RTL. For inverted sliders we prefer a
        // good a11y experience to having it "look right" for sighted users, therefore we do
        // not swap the meaning.
        this._increment(this._getDirection() === 'rtl' ? 1 : -1);
        break;
      case UP_ARROW:
        this._increment(1);
        break;
      case RIGHT_ARROW:
        // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
        this._increment(this._getDirection() === 'rtl' ? -1 : 1);
        break;
      case DOWN_ARROW:
        this._increment(-1);
        break;
      default:
        // Return if the key is not one that we explicitly handle to avoid calling
        // preventDefault on it.
        return;
    }

    if (this.value instanceof Array) {
      if (
        (oldValue as number[])[0] !== this.value[0] ||
        (oldValue as number[])[1] !== this.value[1]
      ) {
        this._emitInputEvent();
        this._emitChangeEvent();
      }
    } else {
      if (oldValue !== this.value) {
        this._emitInputEvent();
        this._emitChangeEvent();
      }
    }

    this._isSliding = true;
    event.preventDefault();
  }

  _onKeyup() {
    this._isSliding = false;
  }

  /** Called when the user has put their pointer down on the slider. */
  private _pointerDown = (event: TouchEvent | MouseEvent) => {
    // Don't do anything if the slider is disabled or the
    // user is using anything other than the main mouse button.
    if (this.disabled || this._isSliding || (!isTouchEvent(event) && event.button !== 0)) {
      return;
    }

    this.calculateInitialSlideDirection(event);

    this._runInsideZone(() => {
      const oldValue = this.value;
      const pointerPosition = getPointerPositionOnPage(event);
      this._isSliding = true;
      event.preventDefault();
      this._focusHostElement();
      this._onMouseenter(); // Simulate mouseenter in case this is a mobile device.
      this._bindGlobalEvents(event);
      this._focusHostElement();

      // TODO:
      // this._updateValueFromPosition(pointerPosition);
      if (this.value instanceof Array) {
        if (this._currentSliderDir === 'l') {
          this._updateValueFromPositionLeft(pointerPosition);
        } else if (this._currentSliderDir === 'r') {
          this._updateValueFromPositionRight(pointerPosition);
        }
      } else {
        this._updateValueFromPositionLeft(pointerPosition);
      }

      this._valueOnSlideStart = this.value;
      this._pointerPositionOnStart = pointerPosition;

      // Emit a change and input event if the value changed.
      if (oldValue !== this.value) {
        this._emitInputEvent();
        this._emitChangeEvent();
      }
    });
  };

  /**
   * Called when the user has moved their pointer after
   * starting to drag. Bound on the document level.
   */
  private _pointerMove = (event: TouchEvent | MouseEvent) => {
    if (this._isSliding) {
      this.calculateInitialSlideDirection(event);

      // Prevent the slide from selecting anything else.
      event.preventDefault();
      const oldValue = this.value;

      // TODO:
      // this._updateValueFromPosition(getPointerPositionOnPage(event));
      const pointerPosition = getPointerPositionOnPage(event);
      if (this._currentSliderDir === 'l') {
        this._updateValueFromPositionLeft(pointerPosition);
      } else if (this._currentSliderDir === 'r') {
        this._updateValueFromPositionRight(pointerPosition);
      } else {
        if (!this.isRangeSlider()) {
          this._updateValueFromPositionLeft(pointerPosition);
        }
      }

      // Native range elements always emit `input` events when the value changed while sliding.
      if (oldValue !== this.value) {
        this._emitInputEvent();
      }
    }
  };

  /** Called when the user has lifted their pointer. Bound on the document level. */
  private _pointerUp = (event: TouchEvent | MouseEvent) => {
    if (this._isSliding) {
      const pointerPositionOnStart = this._pointerPositionOnStart;
      const currentPointerPosition = getPointerPositionOnPage(event);

      event.preventDefault();
      this._removeGlobalEvents();
      this._valueOnSlideStart = this._pointerPositionOnStart = null;
      this._isSliding = false;

      if (
        this._valueOnSlideStart !== this.value &&
        !this.disabled &&
        pointerPositionOnStart &&
        (pointerPositionOnStart.x !== currentPointerPosition.x ||
          pointerPositionOnStart.y !== currentPointerPosition.y)
      ) {
        this._emitChangeEvent();
      }
    }
  };

  /**
   * Binds our global move and end events. They're bound at the document level and only while
   * dragging so that the user doesn't have to keep their pointer exactly over the slider
   * as they're swiping across the screen.
   */
  private _bindGlobalEvents(triggerEvent: TouchEvent | MouseEvent) {
    if (typeof document !== 'undefined' && document) {
      const isTouch = isTouchEvent(triggerEvent);
      const moveEventName = isTouch ? 'touchmove' : 'mousemove';
      const endEventName = isTouch ? 'touchend' : 'mouseup';
      document.body.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
      document.body.addEventListener(endEventName, this._pointerUp, activeEventOptions);
    }
  }

  /** Removes any global event listeners that we may have added. */
  private _removeGlobalEvents() {
    if (typeof document !== 'undefined' && document) {
      document.body.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
      document.body.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
      document.body.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
      document.body.removeEventListener('touchend', this._pointerUp, activeEventOptions);
    }
  }

  /** Increments the slider by the given number of steps (negative number decrements). */
  private _increment(numSteps: number) {
    if (this.value instanceof Array) {
      this.value = this._clamp(
        [(this.value[0] || 0) + this.step * numSteps, (this.value[1] || 0) + this.step * numSteps],
        this.min,
        this.max
      );
    } else {
      this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
    }
  }

  /** Calculate the new value from the new physical location. The value will always be snapped. */
  private _updateValueFromPosition(pos: { x: number; y: number }) {
    if (!this._sliderDimensions) {
      return;
    }

    const offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
    const size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
    const posComponent = this.vertical ? pos.y : pos.x;

    // The exact value is calculated from the event and used to find the closest snap value.
    let percent = this._clamp((posComponent - offset) / size);

    if (this._shouldInvertMouseCoords()) {
      percent = 1 - (percent as any);
    }

    // Since the steps may not divide cleanly into the max value, if the user
    // slid to 0 or 100 percent, we jump to the min/max value. This approach
    // is slightly more intuitive than using `Math.ceil` below, because it
    // follows the user's pointer closer.
    if (percent === 0) {
      this.value = this.min;
    } else if (percent === 1) {
      this.value = this.max;
    } else {
      const exactValue = this._calculateValue(percent);

      // This calculation finds the closest step by finding the closest
      // whole number divisible by the step relative to the min.
      const closestValue =
        Math.round(((exactValue as any) - this.min) / this.step) * this.step + this.min;

      // The value needs to snap to the min and max.
      this.value = this._clamp(closestValue, this.min, this.max);
    }
  }

  /** Calculate the new value from the new physical location. The value will always be snapped. */
  private _updateValueFromPositionLeft(pos: { x: number; y: number }) {
    if (!this._sliderDimensions) {
      return;
    }

    const offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
    const size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
    const posComponent = this.vertical ? pos.y : pos.x;

    // The exact value is calculated from the event and used to find the closest snap value.
    let percent = Number(this._clamp((posComponent - offset) / size));

    if (this._shouldInvertMouseCoords()) {
      percent = 1 - percent;
    }

    // Since the steps may not divide cleanly into the max value, if the user
    // slid to 0 or 100 percent, we jump to the min/max value. This approach
    // is slightly more intuitive than using `Math.ceil` below, because it
    // follows the user's pointer closer.
    if (percent === 0) {
      if (this.value instanceof Array) {
        this.value = [this.min, this.value[1]];
      } else {
        this.value = this.min;
      }
    } else if (percent === 1) {
      if (this.value instanceof Array) {
        this.value = [this.max, this.value[1]];
      } else {
        this.value = this.max;
      }
    } else {
      const exactValue = this._calculateValue(percent);

      // This calculation finds the closest step by finding the closest
      // whole number divisible by the step relative to the min.
      const closestValue =
        Math.round((Number(exactValue) - this.min) / this.step) * this.step + this.min;

      // The value needs to snap to the min and max.
      if (this.value instanceof Array) {
        this.value = [Number(this._clamp(closestValue, this.min, this.max)), this.value[1]];
      } else {
        this.value = this._clamp(closestValue, this.min, this.max);
      }
    }
  }

  /** Calculate the new value from the new physical location. The value will always be snapped. */
  private _updateValueFromPositionRight(pos: { x: number; y: number }) {
    if (!this._sliderDimensions) {
      return;
    }

    const offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
    const size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
    const posComponent = this.vertical ? pos.y : pos.x;

    // The exact value is calculated from the event and used to find the closest snap value.
    let percent = Number(this._clamp((posComponent - offset) / size));

    if (this._shouldInvertMouseCoords()) {
      percent = 1 - percent;
    }

    // Since the steps may not divide cleanly into the max value, if the user
    // slid to 0 or 100 percent, we jump to the min/max value. This approach
    // is slightly more intuitive than using `Math.ceil` below, because it
    // follows the user's pointer closer.
    if (percent === 0) {
      if (this.value instanceof Array) {
        this.value = [this.value[0], this.min];
      } else {
        this.value = this.min;
      }
    } else if (percent === 1) {
      if (this.value instanceof Array) {
        this.value = [this.value[0], this.max];
      } else {
        this.value = this.max;
      }
    } else {
      const exactValue = this._calculateValue(percent);

      // This calculation finds the closest step by finding the closest
      // whole number divisible by the step relative to the min.
      const closestValue =
        Math.round((Number(exactValue) - this.min) / this.step) * this.step + this.min;

      // The value needs to snap to the min and max.
      if (this.value instanceof Array) {
        this.value = [this.value[0], Number(this._clamp(closestValue, this.min, this.max))];
      } else {
        this.value = this._clamp(closestValue, this.min, this.max);
      }
    }
  }

  /** Emits a change event if the current value is different from the last emitted value. */
  private _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.value);
    this.valueChange.emit(this.value);
    this.change.emit(this._createChangeEvent());
  }

  /** Emits an input event when the current value is different from the last emitted value. */
  private _emitInputEvent() {
    this.input.emit(this._createChangeEvent());
  }

  /** Updates the amount of space between ticks as a percentage of the width of the slider. */
  private _updateTickIntervalPercent() {
    if (!this.tickInterval || !this._sliderDimensions) {
      return;
    }

    if (this.tickInterval === 'auto') {
      const trackSize = this.vertical
        ? this._sliderDimensions.height
        : this._sliderDimensions.width;
      const pixelsPerStep = (trackSize * this.step) / (this.max - this.min);
      const stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
      const pixelsPerTick = stepsPerTick * this.step;
      this._tickIntervalPercent = pixelsPerTick / trackSize;
    } else {
      this._tickIntervalPercent = (this.tickInterval * this.step) / (this.max - this.min);
    }
  }

  /** Creates a slider change object from the specified value. */
  private _createChangeEvent(value = this.value): MtxSliderChange {
    const event = new MtxSliderChange();

    event.source = this;
    event.value = value;

    return event;
  }

  /** Calculates the percentage of the slider that a value is. */
  private _calculatePercentage(value: number | number[] | null) {
    if (value instanceof Array) {
      return [
        ((value[0] || 0) - this.min) / (this.max - this.min),
        ((value[1] || 0) - this.min) / (this.max - this.min),
      ];
    } else {
      return ((value || 0) - this.min) / (this.max - this.min);
    }
  }

  /** Calculates the value a percentage of the slider corresponds to. */
  private _calculateValue(percentage: number | number[]) {
    if (percentage instanceof Array) {
      return [
        this.min + percentage[0] * (this.max - this.min),
        this.min + percentage[1] * (this.max - this.min),
      ];
    } else {
      return this.min + percentage * (this.max - this.min);
    }
  }

  /** Return a number between two numbers. */
  private _clamp(value: number | number[], min = 0, max = 1) {
    if (value instanceof Array) {
      return [Math.max(min, Math.min(value[0], max)), Math.max(min, Math.min(value[1], max))];
    } else {
      return Math.max(min, Math.min(value, max));
    }
  }

  /**
   * Get the bounding client rect of the slider track element.
   * The track is used rather than the native element to ignore the extra space that the thumb can
   * take up.
   */
  private _getSliderDimensions() {
    return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
  }

  /**
   * Focuses the native element.
   * Currently only used to allow a blur event to fire but will be used with keyboard input later.
   */
  private _focusHostElement() {
    this._elementRef.nativeElement.focus();
  }

  /** Blurs the native element. */
  private _blurHostElement() {
    this._elementRef.nativeElement.blur();
  }

  /** Runs a callback outside of the NgZone, if possible. */
  private _runOutsizeZone(fn: () => any) {
    // @breaking-change 9.0.0 Remove this function once `_ngZone` is a required parameter.
    this._ngZone ? this._ngZone.runOutsideAngular(fn) : fn();
  }

  /** Runs a callback inside of the NgZone, if possible. */
  private _runInsideZone(fn: () => any) {
    // @breaking-change 9.0.0 Remove this function once `_ngZone` is a required parameter.
    this._ngZone ? this._ngZone.run(fn) : fn();
  }

  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value: any) {
    this.value = value;
  }

  /**
   * Registers a callback to be triggered when the value has changed.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn: (value: any) => void) {
    this._controlValueAccessorChangeFn = fn;
  }

  /**
   * Registers a callback to be triggered when the component is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  /**
   * Sets whether the component should be disabled.
   * Implemented as part of ControlValueAccessor.
   * @param isDisabled
   */
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  isRangeSlider(): boolean {
    return this.value instanceof Array;
  }

  private calculateInitialSlideDirection(event: MouseEvent | TouchEvent) {
    if (!this._sliderDimensions) {
      return;
    }
    const offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
    const size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
    const pointerPosition = getPointerPositionOnPage(event);
    const posComponent = this.vertical ? pointerPosition.y : pointerPosition.x;

    // The exact value is calculated from the event and used to find the closest snap value.
    let percent = Number(this._clamp((posComponent - offset) / size));

    if (this._shouldInvertMouseCoords()) {
      percent = 1 - percent;
    }

    if (
      percent <=
      (this.percent as number[])[0] +
        ((this.percent as number[])[1] - (this.percent as number[])[0]) / 2
    ) {
      this._currentSliderDir = 'l';
    } else {
      this._currentSliderDir = 'r';
    }
  }

  static ngAcceptInputType_invert: BooleanInput;
  static ngAcceptInputType_max: NumberInput;
  static ngAcceptInputType_min: NumberInput;
  static ngAcceptInputType_step: NumberInput;
  static ngAcceptInputType_thumbLabel: BooleanInput;
  static ngAcceptInputType_tickInterval: NumberInput;
  static ngAcceptInputType_value: NumberInput;
  static ngAcceptInputType_vertical: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_tabIndex: NumberInput;
}

/** Returns whether an event is a touch event. */
function isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}

/** Gets the coordinates of a touch or mouse event relative to the viewport. */
function getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
  // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
  const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
  return { x: point.clientX, y: point.clientY };
}
