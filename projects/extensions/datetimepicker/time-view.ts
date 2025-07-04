import { coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import { DOWN_ARROW, ENTER, SPACE, UP_ARROW } from '@angular/cdk/keycodes';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  viewChild,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { SubscriptionLike } from 'rxjs';
import { MtxClock, MtxClockView } from './clock';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';
import { MtxDatetimepickerIntl } from './datetimepicker-intl';
import { MtxAMPM } from './datetimepicker-types';

function pad(num: NumberInput, size: number) {
  num = String(num);
  while (num.length < size) num = '0' + num;
  return num;
}

@Directive({
  selector: 'input.mtx-time-input',
  host: {
    '(blur)': 'blur($event)',
    '(focus)': 'focus($event)',
  },
  exportAs: 'mtxTimeInput',
})
export class MtxTimeInput implements OnDestroy {
  private element = inject(ElementRef);
  private cdr = inject(ChangeDetectorRef);

  @Input('timeInterval')
  set timeInterval(value: NumberInput) {
    this._interval = coerceNumberProperty(value);
  }
  private _interval: number = 1;

  @Input('timeMin')
  set timeMin(value: NumberInput) {
    this._min = coerceNumberProperty(value);
  }
  private _min = 0;

  @Input('timeMax')
  set timeMax(value: NumberInput) {
    this._max = coerceNumberProperty(value);
  }
  private _max = Infinity;

  @Input('timeValue')
  set timeValue(value: NumberInput) {
    this._value = coerceNumberProperty(value);
    if (!this.hasFocus) {
      this.writeValue(this._value);
    }
    this.writePlaceholder(this._value);
  }

  @Output() timeValueChanged = new EventEmitter<NumberInput>();

  private _value: NumberInput;

  private keyDownListener = this.keyDownHandler.bind(this);
  private keyPressListener = this.keyPressHandler.bind(this);
  private inputEventListener = this.inputChangedHandler.bind(this);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    this.inputElement.addEventListener('keydown', this.keyDownListener, {
      passive: true,
    });

    // Do not passive since we want to be able to preventDefault()
    this.inputElement.addEventListener('keypress', this.keyPressListener);
    this.inputElement.addEventListener('input', this.inputEventListener, {
      passive: true,
    });
  }

  get hasFocus() {
    return this.element.nativeElement && this.element?.nativeElement === document?.activeElement;
  }

  get inputElement() {
    return this.element.nativeElement as HTMLInputElement;
  }

  // We look here at the placeholder value, because we write '' into the value on focus
  // placeholder should always be up to date with "currentValue"
  get valid() {
    // At the start _value is undefined therefore this would result in not valid and
    // make a ugly warning border afterwards we can safely check
    if (this._value) {
      const currentValue = String(this.inputElement.value);

      // It can be that currentValue is empty due to we removing the value on focus,
      // if that is the case we should check previous value which should be in the placeholder
      if (currentValue.length) {
        return this._value == this.inputElement.value;
      } else {
        return this._value == this.inputElement.placeholder;
      }
    }
    return true;
  }

  get invalid() {
    return !this.valid;
  }

  blur() {
    this.writeValue(this._value);
    this.writePlaceholder(this._value);
  }

  focus() {
    this.writeValue('');
  }

  /**
   * Write value to inputElement
   * @param value NumberInput
   */
  writeValue(value: NumberInput) {
    if (value !== '') {
      this.inputElement.value = pad(value, 2);
    } else {
      this.inputElement.value = '';
    }
    this.cdr.markForCheck();
  }

  /**
   * Writes value to placeholder
   * @param value NumberInput
   */
  writePlaceholder(value: NumberInput) {
    this.inputElement.placeholder = pad(value, 2);
    this.cdr.markForCheck();
  }

  keyDownHandler(event: KeyboardEvent) {
    if (String(this.inputElement.value).length > 0) {
      let value: number | null = null;
      if (event.keyCode === UP_ARROW) {
        value = coerceNumberProperty(this._value);
        value += this._interval;
        event.stopPropagation();
      } else if (event.keyCode === DOWN_ARROW) {
        value = coerceNumberProperty(this._value);
        value -= this._interval;
        event.stopPropagation();
      }

      // if value has changed
      if (typeof value === 'number') {
        this.writeValue(value);
        this.writePlaceholder(value);
        this.clampInputValue();
        this.timeValueChanged.emit(this._value);
      }
    }
  }

  /**
   * Prevent non number inputs in the inputElement with the exception of Enter/BackSpace
   * @param event KeyboardEvent
   */
  keyPressHandler(event: KeyboardEvent) {
    const key = event?.key ?? null;
    if (isNaN(Number(key)) && key !== 'Enter') {
      event.preventDefault();
    }
  }

  inputChangedHandler() {
    this.clampInputValue();
    this.timeValueChanged.emit(this._value);
  }

  clampInputValue() {
    if (this.inputElement?.value === '') {
      return;
    }

    const value = coerceNumberProperty(this.inputElement?.value ?? null);
    // if this._min === 0, we should allow 0
    if (value || (this._min === 0 && value === 0)) {
      const clampedValue = Math.min(Math.max(value, this._min), this._max);
      if (clampedValue !== value) {
        this.writeValue(clampedValue);
        this.writePlaceholder(clampedValue);
      }
      this._value = clampedValue;
    }
  }

  /**
   * Remove event listeners on destruction
   */
  ngOnDestroy(): void {
    this.inputElement.removeEventListener('keydown', this.keyDownListener);
    this.inputElement.removeEventListener('keypress', this.keyPressListener);
    this.inputElement.removeEventListener('input', this.inputEventListener);
  }
}

@Component({
  selector: 'mtx-time-view',
  templateUrl: 'time-view.html',
  styleUrl: 'time-view.scss',
  exportAs: 'mtxTime',
  host: {
    'class': 'mtx-time-view',
    'tabindex': '0',
    '(keydown)': '_handleCalendarBodyKeydown($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton, MtxClock, MtxTimeInput],
})
export class MtxTimeView<D> implements OnChanges, OnDestroy {
  private _adapter = inject<DatetimeAdapter<D>>(DatetimeAdapter);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _elementRef = inject(ElementRef);
  protected _datetimepickerIntl = inject(MtxDatetimepickerIntl);

  /** Emits when the currently selected date changes. */
  @Output() readonly selectedChange = new EventEmitter<D>();

  /** Emits when any date changes. */
  @Output() readonly activeDateChange = new EventEmitter<D>();

  /** Emits when any date is selected. */
  @Output() readonly _userSelection = new EventEmitter<void>();

  /** Emits when AM/PM button are clicked. */
  @Output() readonly ampmChange = new EventEmitter<MtxAMPM>();

  /** Emits when AM/PM button are clicked. */
  @Output() readonly clockViewChange = new EventEmitter<MtxClockView>();

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D, type: MtxDatetimepickerFilterType) => boolean;

  /** Input for action buttons. */
  @Input({ transform: booleanAttribute }) timeInput = false;

  /** Step over minutes. */
  @Input() interval = 1;

  /** Input for action buttons. */
  @Input() actionsPortal: TemplatePortal | null = null;

  /** Prevent user to select same date time */
  @Input({ transform: booleanAttribute }) preventSameDateTimeSelection = false;

  /** Whether the time input should be auto-focused after view init. */
  @Input({ transform: booleanAttribute }) autoFocus = true;

  @ViewChild('hourInput', { read: ElementRef<HTMLInputElement> })
  protected hourInputElement: ElementRef<HTMLInputElement> | undefined;

  @ViewChild('hourInput', { read: MtxTimeInput })
  set hourInputDirective(input: MtxTimeInput) {
    this._hourInputDirective = input;
    this._changeDetectorRef.detectChanges();
  }
  protected _hourInputDirective: MtxTimeInput | undefined;

  @ViewChild('minuteInput', { read: ElementRef<HTMLInputElement> })
  protected minuteInputElement: ElementRef<HTMLInputElement> | undefined;

  @ViewChild('minuteInput', { read: MtxTimeInput })
  set minuteInputDirective(input: MtxTimeInput) {
    this._minuteInputDirective = input;
    this._changeDetectorRef.detectChanges();
  }
  protected _minuteInputDirective: MtxTimeInput | undefined;

  datetimepickerIntlChangesSubscription: SubscriptionLike;

  /** Whether the clock uses 12 hour format. */
  @Input({ transform: booleanAttribute }) twelvehour = false;

  /** Whether the time is now in AM or PM. */
  @Input() AMPM: MtxAMPM = 'AM';

  /** The date to display in this clock view. */
  @Input()
  get activeDate(): D {
    return this._activeDate;
  }
  set activeDate(value: D) {
    this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
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
  get clockView() {
    return this._clockView;
  }
  set clockView(value: MtxClockView) {
    this._clockView = value;
  }
  /** Whether the clock is in hour view. */
  private _clockView: MtxClockView = 'hour';

  get isHourView() {
    return this._clockView === 'hour';
  }

  get isMinuteView() {
    return this._clockView === 'hour';
  }

  get hour() {
    if (!this.activeDate) {
      if (this.twelvehour) {
        return '12';
      } else {
        return '00';
      }
    }

    const hour = Number(this._adapter.getHour(this.activeDate));
    if (!this.twelvehour) {
      return this.prefixWithZero(hour);
    }

    if (hour === 0) {
      return '12';
    } else {
      return this.prefixWithZero(hour > 12 ? hour - 12 : hour);
    }
  }

  get minute() {
    if (this.activeDate) {
      return this.prefixWithZero(this._adapter.getMinute(this.activeDate));
    }

    return '00';
  }

  prefixWithZero(value: number) {
    if (value < 10) {
      return '0' + String(value);
    }

    return String(value);
  }

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    this.datetimepickerIntlChangesSubscription = this._datetimepickerIntl.changes.subscribe(() => {
      this._changeDetectorRef.detectChanges();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // when clockView changes by input we should focus the correct input
    if (changes.clockView) {
      if (changes.clockView.currentValue !== changes.clockView.previousValue && this.autoFocus) {
        this._focusInputElement();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.datetimepickerIntlChangesSubscription) {
      this.datetimepickerIntlChangesSubscription.unsubscribe();
    }
  }

  /** Handles keydown events on the calendar body when calendar is in clock view. */
  _handleCalendarBodyKeydown(event: KeyboardEvent): void {
    const oldActiveDate = this._activeDate;

    switch (event.keyCode) {
      case UP_ARROW:
        this.selected =
          this._clockView === 'hour'
            ? this._adapter.addCalendarHours(this._activeDate, 1)
            : this._adapter.addCalendarMinutes(this._activeDate, this.interval);
        break;
      case DOWN_ARROW:
        this.selected =
          this._clockView === 'hour'
            ? this._adapter.addCalendarHours(this._activeDate, -1)
            : this._adapter.addCalendarMinutes(this._activeDate, -this.interval);
        break;
      case ENTER:
      case SPACE:
        if (this.timeInput && event.keyCode == SPACE) {
          return;
        }
        if (this.clockView == 'hour') {
          this._timeSelected(this._activeDate);
          this._focusInputElement();
        } else {
          this._userSelection.emit();
        }
        return;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }

    this.selectedChange.emit(this.selected);

    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }

  _focusInputElement() {
    if (this.clockView === 'hour') {
      this.hourInputElement?.nativeElement.focus();
    } else {
      this.minuteInputElement?.nativeElement.focus();
    }
  }

  _handleHourInputChange(value: NumberInput) {
    const hour = coerceNumberProperty(value);
    if (hour || hour === 0) {
      const newValue = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._updateHourForAmPm(hour),
        this._adapter.getMinute(this.activeDate)
      );

      this._activeDate = this._adapter.clampDate(newValue, this.minDate, this.maxDate);
      this.activeDateChange.emit(this.activeDate);

      if (this.actionsPortal) {
        this.selectedChange.emit(this.activeDate);
      }

      // If previously we did set [mtxValue]="13" and the input changed to 6, and the clamping
      // will make it "13" again then the hourInputDirective will not have been updated
      // since "13" === "13" same reference so no change detected by directly setting it within
      // this handler, we handle this usecase
      if (this.hourInputDirective) {
        this.hourInputDirective.timeValue = this.hour;
      }
    }
  }

  _updateHourForAmPm(value: number) {
    if (!this.twelvehour) {
      return value;
    }

    // value should be between 1-12
    if (this.AMPM === 'AM') {
      if (value === 0 || value === 12) {
        return 0;
      }
      return value;
    }
    // PM
    else {
      if (value === 0 || value === 12) {
        return 12;
      }

      // other cases, we should add 12 to the value aka 3:00 PM = 3 + 12 = 15:00
      return value + 12;
    }
  }

  _handleMinuteInputChange(value: NumberInput) {
    const minute = coerceNumberProperty(value);
    if (minute || minute === 0) {
      const newValue = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._adapter.getHour(this.activeDate),
        minute
      );

      this._activeDate = this._adapter.clampDate(newValue, this.minDate, this.maxDate);
      this.activeDateChange.emit(this.activeDate);

      if (this.actionsPortal) {
        this.selectedChange.emit(this.activeDate);
      }

      // If previously we did set [mtxValue]="40" and the input changed to 30, and the clamping
      // will make it "40" again then the minuteInputDirective will not have been updated
      // since "40" === "40" same reference so no change detected by directly setting it within
      // this handler, we handle this usecase
      if (this._minuteInputDirective) {
        this._minuteInputDirective.timeValue = this.minute;
      }
    }
  }

  _handleFocus(clockView: MtxClockView) {
    this.clockView = clockView;
    this.clockViewChange.emit(clockView);
  }

  _dialTimeSelected(date: D): void {
    if (this.clockView === 'hour') {
      this.clockView = 'minute';
      this._activeDate = date;
    }
    if (!this._adapter.sameDatetime(date, this.selected) || !this.preventSameDateTimeSelection) {
      this.selectedChange.emit(date);
    }
  }

  _timeSelected(date: D): void {
    if (this.timeInput) {
      if (this.clockView === 'hour') {
        this.clockView = 'minute';
      }
      this._activeDate = this.selected = date;
    } else {
      this._dialTimeSelected(date);
    }
    this.clockViewChange.emit(this.clockView);
  }

  _onActiveDateChange(date: D) {
    // On mobile devices, inputs fail to blur properly when trigger touchstart event.
    // https://github.com/ng-matero/extensions/issues/425
    this.hourInputElement?.nativeElement.blur();
    this.minuteInputElement?.nativeElement.blur();

    this._activeDate = date;
    this.activeDateChange.emit(date);
  }

  _handleSelection() {
    if (this.timeInput) {
      if (this.actionsPortal && this._selected) {
        this.selectedChange.emit(this._selected);
      }
    } else {
      this._userSelection.emit();
    }
  }

  _handleOk() {
    if (this._selected) {
      this.selectedChange.emit(this._selected);
    }
    this._userSelection.emit();
  }

  _handleCancel() {
    this._userSelection.emit();
  }

  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    if (this.timeInput) {
      if (this.autoFocus) {
        this._focusInputElement();
      }
    } else {
      this._elementRef.nativeElement.focus();
    }
  }
}
