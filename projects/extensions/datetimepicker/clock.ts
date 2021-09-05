/* tslint:disable */
import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { MatDatetimepickerFilterType } from './datetimepicker-filtertype';

export const CLOCK_RADIUS = 50;
export const CLOCK_INNER_RADIUS = 27.5;
export const CLOCK_OUTER_RADIUS = 41.25;
export const CLOCK_TICK_RADIUS = 7.0833;

export type MatClockView = 'hour' | 'minute';

/**
 * A clock that is used as part of the datepicker.
 * @docs-private
 */
@Component({
  selector: 'mat-datetimepicker-clock',
  templateUrl: 'clock.html',
  styleUrls: ['clock.scss'],
  host: {
    'role': 'clock',
    '(mousedown)': '_handleMousedown($event)',
  },
})
export class MatDatetimepickerClock<D> implements AfterContentInit {
  @Output() _userSelection = new EventEmitter<void>();
  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D, type: MatDatetimepickerFilterType) => boolean;
  @Input() interval: number = 1;
  @Input() twelvehour: boolean = false;
  /** Emits when the currently selected date changes. */
  @Output() selectedChange = new EventEmitter<D>();
  @Output() activeDateChange = new EventEmitter<D>();
  /** Hours and Minutes representing the clock view. */
  _hours: Array<Object> = [];
  _minutes: Array<Object> = [];
  /** Whether the clock is in hour view. */
  _hourView: boolean = true;
  _selectedHour!: number;
  _selectedMinute!: number;
  private _timeChanged = false;
  private mouseMoveListener: any;
  private mouseUpListener: any;

  constructor(private _element: ElementRef, private _adapter: DatetimeAdapter<D>) {
    this.mouseMoveListener = (event: any) => {
      this._handleMousemove(event);
    };
    this.mouseUpListener = () => {
      this._handleMouseup();
    };
  }

  private _activeDate!: D;

  /**
   * The date to display in this clock view.
   */
  @Input()
  get activeDate(): D {
    return this._activeDate;
  }

  set activeDate(value: D) {
    let oldActiveDate = this._activeDate;
    this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
    if (!this._adapter.sameMinute(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }

  private _selected!: D | null;

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

  private _minDate!: D | null;

  /** The minimum selectable date. */
  @Input()
  get minDate(): D | null {
    return this._minDate;
  }

  set minDate(value: D | null) {
    this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }

  private _maxDate!: D | null;

  /** The maximum selectable date. */
  @Input()
  get maxDate(): D | null {
    return this._maxDate;
  }

  set maxDate(value: D | null) {
    this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }

  /** Whether the clock should be started in hour or minute view. */
  @Input()
  set startView(value: MatClockView) {
    this._hourView = value != 'minute';
  }

  get _hand(): any {
    let hour = this._adapter.getHour(this.activeDate);
    if (!!this.twelvehour) {
      if (hour === 0) {
        hour = 24;
      }
      this._selectedHour = hour > 12 ? hour - 12 : hour;
    } else {
      this._selectedHour = hour;
    }
    this._selectedMinute = this._adapter.getMinute(this.activeDate);
    let deg = 0;
    let radius = CLOCK_OUTER_RADIUS;
    if (this._hourView) {
      let outer = this._selectedHour > 0 && this._selectedHour < 13;
      radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
      if (this.twelvehour) {
        radius = CLOCK_OUTER_RADIUS;
      }
      deg = Math.round(this._selectedHour * (360 / (24 / 2)));
    } else {
      deg = Math.round(this._selectedMinute * (360 / 60));
    }
    return {
      'transform': `rotate(${deg}deg)`,
      'height': `${radius}%`,
      'margin-top': `${50 - radius}%`,
    };
  }

  ngAfterContentInit() {
    this.activeDate = this._activeDate || this._adapter.today();
    this._init();
  }

  /** Handles mousedown events on the clock body. */
  _handleMousedown(event: any) {
    this._timeChanged = false;
    this.setTime(event);
    document.addEventListener('mousemove', this.mouseMoveListener);
    document.addEventListener('touchmove', this.mouseMoveListener);
    document.addEventListener('mouseup', this.mouseUpListener);
    document.addEventListener('touchend', this.mouseUpListener);
  }

  _handleMousemove(event: any) {
    event.preventDefault();
    this.setTime(event);
  }

  _handleMouseup() {
    document.removeEventListener('mousemove', this.mouseMoveListener);
    document.removeEventListener('touchmove', this.mouseMoveListener);
    document.removeEventListener('mouseup', this.mouseUpListener);
    document.removeEventListener('touchend', this.mouseUpListener);
    if (this._timeChanged) {
      this.selectedChange.emit(this.activeDate);
      if (!this._hourView) {
        this._userSelection.emit();
      }
    }
  }

  /** Initializes this clock view. */
  private _init() {
    this._hours.length = 0;
    this._minutes.length = 0;

    let hourNames = this._adapter.getHourNames();
    let minuteNames = this._adapter.getMinuteNames();

    if (this.twelvehour) {
      for (let i = 1; i < hourNames.length / 2 + 1; i++) {
        let radian = (i / 6) * Math.PI;
        let radius = CLOCK_OUTER_RADIUS;
        const date = this._adapter.createDatetime(
          this._adapter.getYear(this.activeDate),
          this._adapter.getMonth(this.activeDate),
          this._adapter.getDate(this.activeDate),
          i + 1,
          0
        );
        let enabled =
          (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
          (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0);
        this._hours.push({
          value: i,
          displayValue: i === 0 ? '00' : hourNames[i],
          enabled: enabled,
          top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
          left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
        });
      }
    } else {
      for (let i = 0; i < hourNames.length; i++) {
        let radian = (i / 6) * Math.PI;
        let outer = i > 0 && i < 13,
          radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
        const date = this._adapter.createDatetime(
          this._adapter.getYear(this.activeDate),
          this._adapter.getMonth(this.activeDate),
          this._adapter.getDate(this.activeDate),
          i,
          0
        );
        let enabled =
          (!this.minDate || this._adapter.compareDatetime(date, this.minDate, false) >= 0) &&
          (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate, false) <= 0) &&
          (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.HOUR));
        this._hours.push({
          value: i,
          displayValue: i === 0 ? '00' : hourNames[i],
          enabled: enabled,
          top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
          left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
          fontSize: i > 0 && i < 13 ? '' : '80%',
        });
      }
    }

    for (let i = 0; i < minuteNames.length; i += 5) {
      let radian = (i / 30) * Math.PI;
      const date = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._adapter.getHour(this.activeDate),
        i
      );
      let enabled =
        (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
        (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
        (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.MINUTE));
      this._minutes.push({
        value: i,
        displayValue: i === 0 ? '00' : minuteNames[i],
        enabled: enabled,
        top: CLOCK_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
        left: CLOCK_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
      });
    }
  }

  /**
   * Set Time
   * @param event
   */
  private setTime(event: any) {
    let trigger = this._element.nativeElement;
    let triggerRect = trigger.getBoundingClientRect();
    let width = trigger.offsetWidth;
    let height = trigger.offsetHeight;
    let pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
    let pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
    let x = width / 2 - (pageX - triggerRect.left - window.pageXOffset);
    let y = height / 2 - (pageY - triggerRect.top - window.pageYOffset);
    let radian = Math.atan2(-x, y);
    let unit = Math.PI / (this._hourView ? 6 : this.interval ? 30 / this.interval : 30);
    let z = Math.sqrt(x * x + y * y);
    let outer =
      this._hourView &&
      z > (width * (CLOCK_OUTER_RADIUS / 100) + width * (CLOCK_INNER_RADIUS / 100)) / 2;

    if (radian < 0) {
      radian = Math.PI * 2 + radian;
    }
    let value = Math.round(radian / unit);

    let date;
    if (this._hourView) {
      if (this.twelvehour) {
        value = value === 0 ? 12 : value;
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

    this._timeChanged = true;
    this.activeDate = date;
    this.activeDateChange.emit(this.activeDate);
  }
}
