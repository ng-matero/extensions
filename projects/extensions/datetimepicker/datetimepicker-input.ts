import { DOWN_ARROW } from '@angular/cdk/keycodes';
import {
  AfterContentInit,
  booleanAttribute,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subscription } from 'rxjs';

import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS,
  MtxDatetimeFormats,
} from '@dcnx/mat-extensions/core';
import { MtxDatetimepicker } from './datetimepicker';
import { createMissingDateImplError } from './datetimepicker-errors';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';

export const MAT_DATETIMEPICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MtxDatetimepickerInput),
  multi: true,
};

export const MAT_DATETIMEPICKER_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MtxDatetimepickerInput),
  multi: true,
};

/**
 * An event used for datetimepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MtxDatetimepickerInputEvent instead.
 */
export class MtxDatetimepickerInputEvent<D> {
  /** The new value for the target datetimepicker input. */
  value: D | null;

  constructor(
    public target: MtxDatetimepickerInput<D>,
    public targetElement: HTMLElement
  ) {
    this.value = this.target.value;
  }
}

/** Directive used to connect an input to a MtxDatetimepicker. */
@Directive({
  selector: 'input[mtxDatetimepicker]',
  providers: [
    MAT_DATETIMEPICKER_VALUE_ACCESSOR,
    MAT_DATETIMEPICKER_VALIDATORS,
    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MtxDatetimepickerInput },
  ],
  host: {
    '[attr.aria-haspopup]': 'true',
    '[attr.aria-owns]': '(_datetimepicker?.opened && _datetimepicker.id) || null',
    '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
    '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
    '[disabled]': 'disabled',
    '(input)': '_onInput($event.target.value)',
    '(change)': '_onChange()',
    '(blur)': '_onBlur()',
    '(keydown)': '_onKeydown($event)',
  },
  exportAs: 'mtxDatetimepickerInput',
  standalone: true,
})
export class MtxDatetimepickerInput<D>
  implements AfterContentInit, ControlValueAccessor, OnDestroy, Validator
{
  _datetimepicker!: MtxDatetimepicker<D>;

  _dateFilter!: (date: D | null, type: MtxDatetimepickerFilterType) => boolean;

  /** Emits when a `change` event is fired on this `<input>`. */
  @Output() dateChange = new EventEmitter<MtxDatetimepickerInputEvent<D>>();

  /** Emits when an `input` event is fired on this `<input>`. */
  @Output() dateInput = new EventEmitter<MtxDatetimepickerInputEvent<D>>();

  /** Emits when the value changes (either due to user input or programmatic change). */
  _valueChange = new EventEmitter<D | null>();

  /** Emits when the disabled state has changed */
  _disabledChange = new EventEmitter<boolean>();

  private _datetimepickerSubscription = Subscription.EMPTY;

  private _localeSubscription = Subscription.EMPTY;

  /** Whether the last value set on the input was valid. */
  private _lastValueValid = false;

  constructor(
    private _elementRef: ElementRef,
    @Optional() public _dateAdapter: DatetimeAdapter<D>,
    @Optional() @Inject(MTX_DATETIME_FORMATS) private _dateFormats: MtxDatetimeFormats,
    @Optional() private _formField: MatFormField
  ) {
    if (!this._dateAdapter) {
      throw createMissingDateImplError('DatetimeAdapter');
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError('MTX_DATETIME_FORMATS');
    }

    // Update the displayed date when the locale changes.
    this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
      this.value = this._dateAdapter.deserialize(this.value);
    });
  }

  /** The datetimepicker that this input is associated with. */
  @Input()
  set mtxDatetimepicker(value: MtxDatetimepicker<D>) {
    this.registerDatetimepicker(value);
  }

  @Input()
  set mtxDatetimepickerFilter(
    filter: (date: D | null, type: MtxDatetimepickerFilterType) => boolean
  ) {
    this._dateFilter = filter;
    this._validatorOnChange();
  }

  /** The value of the input. */
  @Input()
  get value(): D | null {
    return this._value;
  }
  set value(value: D | null) {
    value = this._dateAdapter.deserialize(value);
    this._lastValueValid = !value || this._dateAdapter.isValid(value);
    value = this._dateAdapter.getValidDateOrNull(value);
    const oldDate = this.value;
    this._value = value;
    this._formatValue(value);

    // use timeout to ensure the datetimepicker is instantiated and we get the correct format
    setTimeout(() => {
      if (!this._dateAdapter.sameDatetime(oldDate, value)) {
        this._valueChange.emit(value);
      }
    });
  }
  private _value!: D | null;

  /** The minimum valid date. */
  @Input()
  get min(): D | null {
    return this._min;
  }
  set min(value: D | null) {
    this._min = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    this._validatorOnChange();
  }
  private _min!: D | null;

  /** The maximum valid date. */
  @Input()
  get max(): D | null {
    return this._max;
  }
  set max(value: D | null) {
    this._max = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    this._validatorOnChange();
  }
  private _max!: D | null;

  /** Whether the datetimepicker-input is disabled. */
  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return !!this._disabled;
  }
  set disabled(value: boolean) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._disabledChange.emit(value);
    }
  }
  private _disabled!: boolean;

  _onTouched = () => {};

  ngAfterContentInit() {
    if (this._datetimepicker) {
      this._datetimepickerSubscription = this._datetimepicker.selectedChanged.subscribe(
        (selected: D) => {
          this.value = selected;
          this._cvaOnChange(selected);
          this._onTouched();
          this.dateInput.emit(
            new MtxDatetimepickerInputEvent(this, this._elementRef.nativeElement)
          );
          this.dateChange.emit(
            new MtxDatetimepickerInputEvent(this, this._elementRef.nativeElement)
          );
        }
      );
    }
  }

  ngOnDestroy() {
    this._datetimepickerSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this._valueChange.complete();
    this._disabledChange.complete();
  }

  registerOnValidatorChange(fn: () => void): void {
    this._validatorOnChange = fn;
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this._validator ? this._validator(c) : null;
  }

  /**
   * Gets the element that the datetimepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin(): ElementRef {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }

  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId(): string | null {
    if (this._formField) {
      return this._formField.getLabelId();
    }

    return this._elementRef.nativeElement.getAttribute('aria-labelledby');
  }

  // Implemented as part of ControlValueAccessor
  writeValue(value: D): void {
    this.value = value;
  }

  // Implemented as part of ControlValueAccessor
  registerOnChange(fn: (value: any) => void): void {
    this._cvaOnChange = fn;
  }

  // Implemented as part of ControlValueAccessor
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  // Implemented as part of ControlValueAccessor
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  _onKeydown(event: KeyboardEvent) {
    if (event.altKey && event.keyCode === DOWN_ARROW) {
      this._datetimepicker.open();
      event.preventDefault();
    }
  }

  _onInput(value: string) {
    let date = this._dateAdapter.parse(value, this.getParseFormat());
    this._lastValueValid = !date || this._dateAdapter.isValid(date);
    date = this._dateAdapter.getValidDateOrNull(date);
    this._value = date;
    this._cvaOnChange(date);
    this._valueChange.emit(date);
    this.dateInput.emit(new MtxDatetimepickerInputEvent(this, this._elementRef.nativeElement));
  }

  _onChange() {
    this.dateChange.emit(new MtxDatetimepickerInputEvent(this, this._elementRef.nativeElement));
  }

  /** Handles blur events on the input. */
  _onBlur() {
    // Reformat the input only if we have a valid value.
    if (this.value) {
      this._formatValue(this.value);
    }

    this._onTouched();
  }

  private registerDatetimepicker(value: MtxDatetimepicker<D>) {
    if (value) {
      this._datetimepicker = value;
      this._datetimepicker._registerInput(this);
    }
  }

  private getDisplayFormat() {
    switch (this._datetimepicker.type) {
      case 'date':
        return this._dateFormats.display.dateInput;
      case 'datetime':
        return this._dateFormats.display.datetimeInput;
      case 'time':
        return this._dateFormats.display.timeInput;
      case 'month':
        return this._dateFormats.display.monthInput;
      case 'year':
        return this._dateFormats.display.yearInput;
    }
  }

  private getParseFormat() {
    let parseFormat;

    switch (this._datetimepicker.type) {
      case 'date':
        parseFormat = this._dateFormats.parse.dateInput;
        break;
      case 'datetime':
        parseFormat = this._dateFormats.parse.datetimeInput;
        break;
      case 'time':
        parseFormat = this._dateFormats.parse.timeInput;
        break;
      case 'month':
        parseFormat = this._dateFormats.parse.monthInput;
        break;
      case 'year':
        parseFormat = this._dateFormats.parse.yearInput;
        break;
    }
    if (!parseFormat) {
      parseFormat = this._dateFormats.parse.dateInput;
    }

    return parseFormat;
  }

  private _cvaOnChange: (value: any) => void = () => {};

  private _validatorOnChange = () => {};

  /** The form control validator for whether the input parses. */
  private _parseValidator: ValidatorFn = (): ValidationErrors | null => {
    return this._lastValueValid
      ? null
      : { mtxDatetimepickerParse: { text: this._elementRef.nativeElement.value } };
  };

  /** The form control validator for the min date. */
  private _minValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const controlValue = this._dateAdapter.getValidDateOrNull(
      this._dateAdapter.deserialize(control.value)
    );
    return !this.min ||
      !controlValue ||
      (this._dateAdapter.compareDatetime(this.min, controlValue) as number) <= 0
      ? null
      : { mtxDatetimepickerMin: { min: this.min, actual: controlValue } };
  };

  /** The form control validator for the max date. */
  private _maxValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const controlValue = this._dateAdapter.getValidDateOrNull(
      this._dateAdapter.deserialize(control.value)
    );
    return !this.max ||
      !controlValue ||
      (this._dateAdapter.compareDatetime(this.max, controlValue) as number) >= 0
      ? null
      : { mtxDatetimepickerMax: { max: this.max, actual: controlValue } };
  };

  /** The form control validator for the date filter. */
  private _filterValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const controlValue = this._dateAdapter.getValidDateOrNull(
      this._dateAdapter.deserialize(control.value)
    );
    return !this._dateFilter ||
      !controlValue ||
      this._dateFilter(controlValue, MtxDatetimepickerFilterType.DATE)
      ? null
      : { mtxDatetimepickerFilter: true };
  };

  /** The combined form control validator for this input. */
  private _validator: ValidatorFn | null = Validators.compose([
    this._parseValidator,
    this._minValidator,
    this._maxValidator,
    this._filterValidator,
  ]);

  /** Formats a value and sets it on the input element. */
  private _formatValue(value: D | null) {
    this._elementRef.nativeElement.value = value
      ? this._dateAdapter.format(value, this.getDisplayFormat())
      : '';
  }

  /** Returns the palette used by the input's form field, if any. */
  getThemePalette(): ThemePalette {
    return this._formField ? this._formField.color : undefined;
  }
}
