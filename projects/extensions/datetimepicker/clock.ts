import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewEncapsulation,
  booleanAttribute,
} from '@angular/core';

import { DatetimeAdapter } from '@dcnx/mat-extensions/core';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';
import { MtxAMPM } from './datetimepicker-types';

const activeEventOptions = normalizePassiveListenerOptions({ passive: false });

export const CLOCK_RADIUS = 50;
export const CLOCK_INNER_RADIUS = 27.5;
export const CLOCK_OUTER_RADIUS = 41.25;
export const CLOCK_TICK_RADIUS = 7.0833;

/** Possible views for datetimepicker clock. */
export type MtxClockView = 'hour' | 'minute';

/**
 * A clock that is used as part of the datetimepicker.
 * @docs-private
 */
@Component({
  selector: 'mtx-clock',
  templateUrl: 'clock.html',
  styleUrl: 'clock.scss',
  host: {
    'role': 'clock',
    'class': 'mtx-clock',
    '(mousedown)': '_pointerDown($event)',
    '(touchstart)': '_pointerDown($event)',
  },
  exportAs: 'mtxClock',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MtxClock<D> implements AfterContentInit, OnDestroy, OnChanges {
  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D, type: MtxDatetimepickerFilterType) => boolean;

  /** Step over minutes. */
  @Input() interval: number = 1;

  /** Whether the clock uses 12 hour format. */
  @Input({ transform: booleanAttribute }) twelvehour: boolean = false;

  /** Whether the time is now in AM or PM. */
  @Input() AMPM: MtxAMPM = 'AM';

  /** Emits when the currently selected date changes. */
  @Output() selectedChange = new EventEmitter<D>();

  /** Emits when any date is activated. */
  @Output() activeDateChange = new EventEmitter<D>();

  /** Emits when any date is selected. */
  @Output() readonly _userSelection = new EventEmitter<void>();

  /** Whether the clock is in hour view. */
  _hourView: boolean = true;

  _hours: any[] = [];

  _minutes: any[] = [];

  _selectedHour!: number;

  _selectedMinute!: number;

  private _timeChanged = false;

  constructor(
    private _elementRef: ElementRef,
    private _adapter: DatetimeAdapter<D>,
    private _changeDetectorRef: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: any
  ) {}

  /**
   * The date to display in this clock view.
   */
  @Input()
  get activeDate(): D {
    return this._activeDate;
  }
  set activeDate(value: D) {
    const oldActiveDate = this._activeDate;
    this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
    if (!this._adapter.sameMinute(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  private _activeDate!: D;

  /** The currently selected date. */
  @Input()
  get selected(): D | null {
    return this._selected;
  }
  set selected(value: D | null) {
    this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
    if (this._selected) {
      this.activeDate = this._selected;
    }
  }
  private _selected!: D | null;

  /** The minimum selectable date. */
  @Input()
  get minDate(): D | null {
    return this._minDate;
  }
  set minDate(value: D | null) {
    this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  private _minDate!: D | null;

  /** The maximum selectable date. */
  @Input()
  get maxDate(): D | null {
    return this._maxDate;
  }
  set maxDate(value: D | null) {
    this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  private _maxDate!: D | null;

  /** Whether the clock should be started in hour or minute view. */
  @Input()
  set startView(value: MtxClockView) {
    this._hourView = value !== 'minute';
  }

  get _hand() {
    const hour = this._adapter.getHour(this.activeDate);
    this._selectedHour = hour;
    this._selectedMinute = this._adapter.getMinute(this.activeDate);
    let deg = 0;
    let radius = CLOCK_OUTER_RADIUS;
    if (this._hourView) {
      const outer = this._selectedHour > 0 && this._selectedHour < 13;
      radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
      if (this.twelvehour) {
        radius = CLOCK_OUTER_RADIUS;
      }
      deg = Math.round(this._selectedHour * (360 / (24 / 2)));
    } else {
      deg = Math.round(this._selectedMinute * (360 / 60));
    }
    return {
      height: `${radius}%`,
      marginTop: `${50 - radius}%`,
      transform: `rotate(${deg}deg)`,
    };
  }

  ngAfterContentInit() {
    this.activeDate = this._activeDate || this._adapter.today();
    this._init();
  }

  ngOnDestroy() {
    this._removeGlobalEvents();
  }

  ngOnChanges(): void {
    this._init();
  }

  /** Called when the user has put their pointer down on the clock. */
  private _pointerDown = (event: TouchEvent | MouseEvent) => {
    this._timeChanged = false;
    this.setTime(event);
    this._bindGlobalEvents(event);
  };

  /**
   * Called when the user has moved their pointer after
   * starting to drag. Bound on the document level.
   */
  private _pointerMove = (event: TouchEvent | MouseEvent) => {
    if (event.cancelable) {
      event.preventDefault();
    }
    this.setTime(event);
  };

  /** Called when the user has lifted their pointer. Bound on the document level. */
  private _pointerUp = (event: TouchEvent | MouseEvent) => {
    if (event.cancelable) {
      event.preventDefault();
    }
    this._removeGlobalEvents();

    if (this._timeChanged) {
      this.selectedChange.emit(this.activeDate);
      if (!this._hourView) {
        this._userSelection.emit();
      }
    }
  };

  /** Binds our global move and end events. */
  private _bindGlobalEvents(triggerEvent: TouchEvent | MouseEvent) {
    // Note that we bind the events to the `document`, because it allows us to capture
    // drag cancel events where the user's pointer is outside the browser window.
    const document = this._document;
    const isTouch = isTouchEvent(triggerEvent);
    const moveEventName = isTouch ? 'touchmove' : 'mousemove';
    const endEventName = isTouch ? 'touchend' : 'mouseup';
    document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
    document.addEventListener(endEventName, this._pointerUp, activeEventOptions);

    if (isTouch) {
      document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
    }
  }

  /** Removes any global event listeners that we may have added. */
  private _removeGlobalEvents() {
    const document = this._document;
    document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
    document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
    document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
    document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
    document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);
  }

  /** Initializes this clock view. */
  private _init() {
    this._hours.length = 0;
    this._minutes.length = 0;

    const hourNames = this._adapter.getHourNames();
    const minuteNames = this._adapter.getMinuteNames();
    if (this.twelvehour) {
      const hours = [];
      for (let i = 0; i < hourNames.length; i++) {
        const radian = (i / 6) * Math.PI;
        const radius = CLOCK_OUTER_RADIUS;

        const hour = i;
        const date = this._adapter.createDatetime(
          this._adapter.getYear(this.activeDate),
          this._adapter.getMonth(this.activeDate),
          this._adapter.getDate(this.activeDate),
          hour,
          0
        );

        // Check if the date is enabled, no need to respect the minute setting here
        const enabled =
          (!this.minDate ||
            (this._adapter.compareDatetime(date, this.minDate, false) as number) >= 0) &&
          (!this.maxDate ||
            (this._adapter.compareDatetime(date, this.maxDate, false) as number) <= 0) &&
          (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.HOUR));

        // display value for twelvehour clock should be from 1-12 not including 0 and not above 12
        hours.push({
          value: i,
          displayValue: i % 12 === 0 ? '12' : hourNames[i % 12],
          enabled,
          top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
          left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
        });
      }

      // filter out AM or PM hours based on AMPM
      if (this.AMPM === 'AM') {
        this._hours = hours.filter(x => x.value < 12);
      } else {
        this._hours = hours.filter(x => x.value >= 12);
      }
    } else {
      for (let i = 0; i < hourNames.length; i++) {
        const radian = (i / 6) * Math.PI;
        const outer = i > 0 && i < 13;
        const radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
        const date = this._adapter.createDatetime(
          this._adapter.getYear(this.activeDate),
          this._adapter.getMonth(this.activeDate),
          this._adapter.getDate(this.activeDate),
          i,
          0
        );

        // Check if the date is enabled, no need to respect the minute setting here
        const enabled =
          (!this.minDate ||
            (this._adapter.compareDatetime(date, this.minDate, false) as number) >= 0) &&
          (!this.maxDate ||
            (this._adapter.compareDatetime(date, this.maxDate, false) as number) <= 0) &&
          (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.HOUR));

        this._hours.push({
          value: i,
          displayValue: i === 0 ? '00' : hourNames[i],
          enabled,
          top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
          left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
          fontSize: i > 0 && i < 13 ? '' : '80%',
        });
      }
    }

    for (let i = 0; i < minuteNames.length; i += 5) {
      const radian = (i / 30) * Math.PI;
      const date = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._adapter.getHour(this.activeDate),
        i
      );
      const enabled =
        (!this.minDate || (this._adapter.compareDatetime(date, this.minDate) as number) >= 0) &&
        (!this.maxDate || (this._adapter.compareDatetime(date, this.maxDate) as number) <= 0) &&
        (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.MINUTE));
      this._minutes.push({
        value: i,
        displayValue: i === 0 ? '00' : minuteNames[i],
        enabled,
        top: CLOCK_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
        left: CLOCK_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
      });
    }
  }

  /**
   * Set Time
   * @param event
   */
  private setTime(event: TouchEvent | MouseEvent) {
    const trigger = this._elementRef.nativeElement;
    const triggerRect = trigger.getBoundingClientRect();
    const width = trigger.offsetWidth;
    const height = trigger.offsetHeight;
    const { pageX, pageY } = getPointerPositionOnPage(event);
    const x = width / 2 - (pageX - triggerRect.left - window.pageXOffset);
    const y = height / 2 - (pageY - triggerRect.top - window.pageYOffset);

    let radian = Math.atan2(-x, y);
    const unit = Math.PI / (this._hourView ? 6 : this.interval ? 30 / this.interval : 30);
    const z = Math.sqrt(x * x + y * y);
    const outer =
      this._hourView &&
      z > (width * (CLOCK_OUTER_RADIUS / 100) + width * (CLOCK_INNER_RADIUS / 100)) / 2;

    if (radian < 0) {
      radian = Math.PI * 2 + radian;
    }
    let value = Math.round(radian / unit);

    let date;
    if (this._hourView) {
      if (this.twelvehour) {
        if (this.AMPM === 'AM') {
          value = value === 0 ? 12 : value;
        } else {
          // if we chosen 12 in PM, the value should be 0 for 0:00,
          // else we can safely add 12 to the final value
          value = value === 12 ? 0 : value + 12;
        }
      } else {
        if (value === 12) {
          value = 0;
        }
        value = outer ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
      }

      date = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        value,
        this._adapter.getMinute(this.activeDate)
      );
    } else {
      if (this.interval) {
        value *= this.interval;
      }
      if (value === 60) {
        value = 0;
      }
      date = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._adapter.getHour(this.activeDate),
        value
      );
    }

    // if there is a dateFilter, check if the date is allowed if it is not then do not set/emit new date
    // https://github.com/dcnx/mat-extensions/issues/244
    if (
      this.dateFilter &&
      !this.dateFilter(
        date,
        this._hourView ? MtxDatetimepickerFilterType.HOUR : MtxDatetimepickerFilterType.MINUTE
      )
    ) {
      return;
    }

    this._timeChanged = true;
    this.activeDate = date;
    this._changeDetectorRef.markForCheck();
    this.activeDateChange.emit(this.activeDate);
  }
}

/** Returns whether an event is a touch event. */
function isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}

/** Gets the coordinates of a touch or mouse event relative to the document. */
function getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
  let point: { pageX: number; pageY: number };

  if (isTouchEvent(event)) {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    point = event.touches[0] || event.changedTouches[0];
  } else {
    point = event;
  }

  return point;
}
