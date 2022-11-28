import {
  BooleanInput,
  coerceBooleanProperty,
  coerceNumberProperty,
  NumberInput,
} from '@angular/cdk/coercion';
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { MtxAmPM } from './calendar';
import { MtxClockView } from './clock';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';

type TimeI18nLabels = {
  confirmBtn: string;
  cancelBtn: string;
};

@Directive({
  selector: 'input.mtx-time-input',
  host: {
    '[placeholder]': '_value',
    '(blur)': 'blur($event)',
    '(focus)': 'focus($event)',
  },
  exportAs: 'mtxTimeInput',
})
export class MtxTimeInput implements OnDestroy {
  _interval: number = 1;
  @Input('mtxInterval')
  set mtxInterval(value: NumberInput) {
    this._interval = coerceNumberProperty(value);
  }

  @Output()
  mtxValueChanged = new EventEmitter<NumberInput>();

  private _value: NumberInput;

  private keyDownListener = this.keyDownHandler.bind(this);
  private keyPressListener = this.keyPressHandler.bind(this);
  private inputEventListener = this.inputChangedHandler.bind(this);

  constructor(private element: ElementRef, private zone: NgZone) {
    this.inputElement.addEventListener('keydown', this.keyDownListener, {
      passive: true,
    });

    // not passive since we want to be able to preventDefault()
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

  // we look here at the placeholder value, because we write '' into the value on focus
  // placeholder should always be up to date with "currentValue"
  get valid() {
    // at the start _value is undefined therefore this would result in not valid and make a ugly warning border
    // afterwards we can safely check
    if (this._value) {
      const currentValue = String(this.inputElement.value);

      // it can be that currentValue is empty due to we removing the value on focus,
      // if that is the case we should check previous value which should be in the placeholder
      if (currentValue.length) {
        return String(this._value) === this.inputElement.value;
      } else {
        return String(this._value) === this.inputElement.placeholder;
      }
    }
    return true;
  }

  get invalid() {
    return !this.valid;
  }

  @Input('mtxValue')
  set mtxValue(value: NumberInput) {
    this._value = coerceNumberProperty(value);
    if (!this.hasFocus) {
      this.writeValue(this._value);
    }
    this.writePlaceholder(this._value);
  }

  blur() {
    this.writeValue(this._value);
    this.writePlaceholder(this._value);
    this.mtxValueChanged.emit(this._value);
  }

  focus() {
    this.writeValue('');
  }

  /**
   * Write value to inputElement
   * @param value NumberInput
   */
  writeValue(value: NumberInput) {
    this.inputElement.value = String(value);
  }

  /**
   * Writes value to placeholder
   * @param value NumberInput
   */
  writePlaceholder(value: NumberInput) {
    this.inputElement.placeholder = String(value);
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
        this.mtxValueChanged.emit(this._value);
      }
    }
  }

  /**
   * Prevent non number inputs in the inputElement with the exception of Enter/BackSpace
   * @param e KeyboardEvent
   */
  keyPressHandler(event: KeyboardEvent) {
    const key = event?.key ?? null;
    if (isNaN(Number(key)) && key !== 'Enter') {
      event.preventDefault();
    }
  }

  inputChangedHandler() {
    this.clampInputValue();
    this.mtxValueChanged.emit(this._value);
  }

  clampInputValue() {
    const max = coerceNumberProperty(this.inputElement?.max ?? Infinity);
    const min = coerceNumberProperty(this.inputElement?.min ?? 0);
    const value = coerceNumberProperty(this.inputElement?.value ?? null);

    const clampedValue = Math.min(Math.max(value, min), max);
    if (clampedValue !== value) {
      this.writeValue(clampedValue);
      this.writePlaceholder(clampedValue);
    }
    this._value = clampedValue;
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
  selector: 'mtx-time',
  templateUrl: 'time.html',
  styleUrls: ['time.scss'],
  exportAs: 'mtxTime',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.mtx-time]': 'true',
  },
})
export class MtxTime<D> implements OnChanges, AfterViewInit {
  /** Emits when the currently selected date changes. */
  @Output() readonly selectedChange = new EventEmitter<D>();

  /** Emits when any date changes. */
  @Output() readonly activeDateChange = new EventEmitter<D>();

  /** Emits when any date is selected. */
  @Output() readonly _userSelection = new EventEmitter<void>();

  /** Emits when AM/PM button are clicked. */
  @Output() readonly ampmChange = new EventEmitter<MtxAmPM>();

  /** Emits when AM/PM button are clicked. */
  @Output() readonly clockViewChange = new EventEmitter<MtxClockView>();

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D, type: MtxDatetimepickerFilterType) => boolean;

  /** Step over minutes. */
  @Input() interval: number = 1;

  @Input() i18nLabels: TimeI18nLabels = {
    cancelBtn: 'Cancel',
    confirmBtn: 'Ok',
  };

  @ViewChild('hourInput', { read: ElementRef<HTMLInputElement> })
  protected hourInputElement: ElementRef<HTMLInputElement> | undefined;

  @ViewChild('hourInput', { read: MtxTimeInput })
  protected hourInputDirective: MtxTimeInput | undefined;

  @ViewChild('minuteInput', { read: ElementRef<HTMLInputElement> })
  protected minuteInputElement: ElementRef<HTMLInputElement> | undefined;

  @ViewChild('minuteInput', { read: MtxTimeInput })
  protected minuteInputDirective: MtxTimeInput | undefined;

  /** Whether the clock uses 12 hour format. */
  @Input()
  get twelvehour(): boolean {
    return this._twelvehour;
  }
  set twelvehour(value: boolean) {
    this._twelvehour = coerceBooleanProperty(value);
  }
  private _twelvehour = false;

  /** Whether the time is now in AM or PM. */
  @Input()
  AMPM: MtxAmPM = 'AM';

  /**
   * The date to display in this clock view.
   */
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
      return '00';
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

  constructor(private _adapter: DatetimeAdapter<D>, private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    // when clockView changes by input we should focus the correct input
    if (changes.clockView) {
      if (changes.clockView.currentValue !== changes.clockView.previousValue) {
        this.focusInputElement();
      }
    }
  }

  ngAfterViewInit(): void {
    this.focusInputElement();
  }

  focusInputElement() {
    if (this.clockView === 'hour') {
      if (this.hourInputElement) {
        (this.hourInputElement.nativeElement as HTMLInputElement).focus();
      }
    } else {
      if (this.minuteInputElement) {
        (this.minuteInputElement.nativeElement as HTMLInputElement).focus();
      }
    }
  }

  handleHourInputChange(value: NumberInput) {
    const hour = coerceNumberProperty(value);
    if (hour || hour === 0) {
      const newValue = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this.updateHourForAmPm(hour),
        this._adapter.getMinute(this.activeDate)
      );

      this._activeDate = this._adapter.clampDate(newValue, this.minDate, this.maxDate);
      this.activeDateChange.emit(this.activeDate);

      // If previously we did set [mtxValue]="13" and the input changed to 6, and the clamping will make it "13" again
      // then the hourInputDirective will not have been updated since "13" === "13" same reference so no change detected
      // by directly setting it within this handler, we handle this usecase
      if (this.hourInputDirective) {
        this.hourInputDirective.mtxValue = this.hour;
      }
    }
  }

  updateHourForAmPm(value: number) {
    if (this.twelvehour && this.AMPM === 'PM') {
      const newValue = value + 12;

      if (newValue > 23) {
        return 0;
      }
      return newValue;
    }

    return value;
  }

  handleMinuteInputChange(value: NumberInput) {
    const minute = coerceNumberProperty(value);
    if (minute || minute === 0) {
      const newValue = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._adapter.getHour(this._activeDate),
        minute
      );
      this._activeDate = this._adapter.clampDate(newValue, this.minDate, this.maxDate);
      this.activeDateChange.emit(this.activeDate);

      // If previously we did set [mtxValue]="40" and the input changed to 30, and the clamping will make it "40" again
      // then the minuteInputDirective will not have been updated since "40" === "40" same reference so no change detected
      // by directly setting it within this handler, we handle this usecase
      if (this.minuteInputDirective) {
        this.minuteInputDirective.mtxValue = this.minute;
      }
    }
  }

  _timeSelected(date: D): void {
    if (this.clockView === 'hour') {
      this.clockView = 'minute';
    } else {
      // this.clockView = 'hour';
    }
    this.selected = date;
  }

  _onActiveDateChange(date: D) {
    this._activeDate = date;
    this.activeDateChange.emit(date);
  }

  confirm() {
    if (this._selected) {
      this.selectedChange.emit(this._selected);
    }
    this._userSelection.emit();
  }

  cancel() {
    this._userSelection.emit();
  }

  static ngAcceptInputType_twelvehour: BooleanInput;
}
