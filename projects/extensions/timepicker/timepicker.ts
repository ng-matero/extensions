import {
  ChangeDetectorRef,
  Component, effect,
  forwardRef,
  inject,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder, FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR, ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  DEFAULT_STEP, formatTwoDigitTimeValue, HOURS, LIMIT_TIMES,
  MERIDIANS, MINUTES, NUMERIC_REGEX,
  PATTERN_INPUT_HOUR,
  PATTERN_INPUT_MINUTE,
  PATTERN_INPUT_SECOND, TimeUnits,
} from '@ng-matero/extensions/timepicker/date-utils';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Subject } from 'rxjs';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';

interface TimeForm {
  hour: FormControl<string | null>;
  minute: FormControl<string | null>;
  second: FormControl<string | null>;
}

@Component({
  selector: 'mtx-timepicker',
  templateUrl: './timepicker.html',
  styleUrls: ['./timepicker.scss'],
  host: {
    class: 'mtx-timepicker',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MtxTimepicker),
      multi: true,
    },
  ],
  standalone: true,
  exportAs: 'mtxTimepicker',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatIconButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatButton,
    MatSelect,
    MatOption,
    MatAutocompleteTrigger,
    MatAutocomplete,
  ],
})
export class MtxTimepicker<D> implements ControlValueAccessor, OnInit, OnChanges {
  form!: FormGroup;
  protected hoursOfTheDay = HOURS;
  protected minutesOfTheDay = MINUTES;
  selectedValue!: string;
  disabled = input(false);
  showSpinners = input(true);
  stepHour = input<number>(DEFAULT_STEP);
  stepMinute = input<number>(DEFAULT_STEP);
  stepSecond = input<number>(DEFAULT_STEP);
  showSeconds = input(false);
  disableMinute = input(false);
  enableMeridian = input(false);
  defaultTime = input<number[]>();
  hoursToShow = input<number[]>([8,17]);
  color = 'primary';
  meridian: string = MERIDIANS.AM;

  get #hour() {
    const val = Number(this.form?.controls.hour.value);
    return isNaN(val) ? 0 : val;
  }

  get #minute() {
    const val = Number(this.form?.controls['minute'].value);
    return isNaN(val) ? 0 : val;
  }

  get #second() {
    const val = Number(this.form?.controls['second'].value);
    return isNaN(val) ? 0 : val;
  }

  /** Whether the form is valid */
  get valid(): boolean {
    return this.form?.valid;
  }

  private _onChange: any = () => {};
  private _onTouched: any = () => {};
  private _disabled!: boolean;
  private _model!: D;

  _dateAdapter = inject(DatetimeAdapter, { optional: true });
  #cd = inject(ChangeDetectorRef);
  #formBuilder = inject(FormBuilder);

  #destroyed: Subject<void> = new Subject<void>();

  pattern = PATTERN_INPUT_HOUR;

  constructor() {
    effect(() => {
      if(this.hoursToShow()) {
        console.log(this.hoursToShow());
      }
    });
    this.form = this.#formBuilder.group({
      hour: [
        { value: new Date().getHours(), disabled: this.disabled() },
        [Validators.required, Validators.pattern(PATTERN_INPUT_HOUR)],
      ],
      minute: [
        {
          value: null,
          disabled: this.disabled(),
        },
        [Validators.required, Validators.pattern(PATTERN_INPUT_MINUTE)],
      ],
      second: [
        {
          value: null,
          disabled: this.disabled(),
        },
        [Validators.required, Validators.pattern(PATTERN_INPUT_SECOND)],
      ],
    });

    this.form?.valueChanges.pipe(takeUntilDestroyed(), debounceTime(400)).subscribe(val => {
      console.log(val);
      this._updateModel();
    });
  }

  writeValue(val: D): void {
    if (val !== null) {
      this._model = val;
      this._updateHourMinuteSecond();
    }
  }

  registerOnChange(fn: (_: any) => NonNullable<unknown>): void {
    this._onChange = fn;
  }

  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: () => NonNullable<unknown>): void {
    this._onTouched = fn;
  }
  /** Enables or disables the appropriate DOM element */
  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this.#cd.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled || changes.disableMinute) {
      this.#setDisableStates();
    }
  }

  ngOnInit() {}

  /**
   * Format input
   * @param input
   */
  public formatInput(input: HTMLInputElement) {
    console.log('format',input.value);
    input.value = input.value.replace(NUMERIC_REGEX, '');
  }

  /** Toggle meridian */
  public toggleMeridian() {
    this.meridian = this.meridian === MERIDIANS.AM ? MERIDIANS.PM : MERIDIANS.AM;
    this.change('hour');
  }

  /** Change property of time */
  public change(prop: TimeUnits, up?: boolean) {
    const next = this.#getNextValueByProp(prop, up);
    console.log(next)
    this.form?.controls[prop].setValue(formatTwoDigitTimeValue(next), {
      onlySelf: false,
      emitEvent: true,
    });
    this._updateModel();
  }

  /** Update controls of form by model */
  private _updateHourMinuteSecond() {
    console.log('dere');
    let _hour = this._dateAdapter?.getHour(this._model);
    const _minute = this._dateAdapter?.getMinute(this._model);
    const _second = this._dateAdapter?.getSecond(this._model);

    if (this.enableMeridian()) {
      if (!_hour) {
        return;
      }
      if (_hour >= LIMIT_TIMES.meridian) {
        _hour = _hour - LIMIT_TIMES.meridian;
        this.meridian = MERIDIANS.PM;
      } else {
        this.meridian = MERIDIANS.AM;
      }
      if (_hour === 0) {
        _hour = LIMIT_TIMES.meridian;
      }
    }

    this.form?.patchValue(
      {
        hour: formatTwoDigitTimeValue(_hour as number),
        minute: formatTwoDigitTimeValue(_minute as number),
        second: formatTwoDigitTimeValue(_second as number),
      },
      {
        emitEvent: false,
      }
    );
  }

  /** Update model */
  private _updateModel() {
    let _hour = this.#hour;
    if (this.enableMeridian()) {
      if (this.meridian === MERIDIANS.AM && _hour === LIMIT_TIMES.meridian) {
        _hour = 0;
      } else if (this.meridian === MERIDIANS.PM && _hour !== LIMIT_TIMES.meridian) {
        _hour = _hour + LIMIT_TIMES.meridian;
      }
    }

    if (this._model) {
      const clonedModel = this._dateAdapter?.clone(this._model);

      this._dateAdapter?.setHour(clonedModel, _hour);
      this._dateAdapter?.setMinute(clonedModel, this.#minute);
      this._dateAdapter?.setSecond(clonedModel, this.#second);
      this._onChange(clonedModel);
    }
  }

  /**
   * Get next value by property
   * @param timeUnit
   * @param up
   */
  // #getNextValueByProp(timeUnit: TimeUnits, up?: boolean): number {
  //   const keyProp = timeUnit[0].toUpperCase() + timeUnit.slice(1);
  //
  //   const min = LIMIT_TIMES[`min${keyProp}`];
  //
  //   let max = LIMIT_TIMES[`max${keyProp}`];
  //
  //   if (timeUnit === 'hour' && this.enableMeridian()) {
  //     max = LIMIT_TIMES.meridian;
  //   }
  //
  //   let next;
  //   if (up === null) {
  //     switch (timeUnit) {
  //       case 'second':
  //         next = this.#second % max;
  //         break;
  //       case 'minute':
  //         next = this.#minute % max;
  //         break;
  //       default: next = this.#hour % max;
  //         break;
  //     }
  //
  //     if (timeUnit === 'hour' && this.enableMeridian()) {
  //       if (next === 0) {
  //         next = max;
  //       }
  //     }
  //   } else {
  //     let stepSignalValue;
  //     switch (keyProp) {
  //       case 'Second':
  //         stepSignalValue = this.stepSecond();
  //         break;
  //       case 'Minute':
  //         stepSignalValue = this.stepMinute();
  //         break;
  //       default: stepSignalValue = this.stepHour();
  //     }
  //
  //     switch (timeUnit) {
  //       case 'second':
  //         next = up ? this.#second + stepSignalValue : this.#second - stepSignalValue;
  //         break;
  //       case 'minute':
  //         next = up ? this.#minute + stepSignalValue : this.#minute - stepSignalValue;
  //         break;
  //       default:  next = up ? this.#hour + stepSignalValue : this.#hour - stepSignalValue;
  //         break;
  //     }
  //
  //     if (timeUnit === 'hour' && this.enableMeridian()) {
  //       next = next % (max + 1);
  //       if (next === 0) {
  //         next = up ? 1 : max;
  //       }
  //     } else {
  //       next = next % max;
  //     }
  //     if (up) {
  //       next = next > max ? next - max + min : next;
  //     } else {
  //       next = next < min ? next - min + max : next;
  //     }
  //   }
  //
  //   return next;
  // }

  #getNextValueByProp(timeUnit: TimeUnits, up?: boolean): number {
    const getLimits = (unit: string) => {
      const keyProp = unit.charAt(0).toUpperCase() + unit.slice(1);
      const min = LIMIT_TIMES[`min${keyProp}`];
      let max = LIMIT_TIMES[`max${keyProp}`];

      if (unit === 'hour' && this.enableMeridian()) {
        max = LIMIT_TIMES.meridian;
      }

      return { min, max };
    };

    const getCurrentValue = (unit: string) => {
      switch (unit) {
        case 'hour':
          return this.#hour;
        case 'minute':
          return this.#minute;
        case 'second':
          return this.#second;
        default:
          throw new Error(`Unknown time unit: ${unit}`);
      }
    };

    const getStepValue = (unit: string) => {
      switch (unit) {
        case 'Hour':
          return this.stepHour();
        case 'Minute':
          return this.stepMinute();
        case 'Second':
          return this.stepSecond();
        default:
          throw new Error(`Unknown time unit: ${unit}`);
      }
    };

    const { min, max } = getLimits(timeUnit);
    const currentValue = getCurrentValue(timeUnit);
    const stepSignalValue = getStepValue(timeUnit.charAt(0).toUpperCase() + timeUnit.slice(1));

    const calculateNext = (current: number, max: number, min: number, up?: boolean) => {
      if (up === null) {
        const result = current % max;
        if (timeUnit === 'hour' && this.enableMeridian() && result === 0) {
          return max;
        }
        return result;
      }

      let next = up ? current + stepSignalValue : current - stepSignalValue;

      if (timeUnit === 'hour' && this.enableMeridian()) {
        next = next % (max + 1);
        if (next === 0) {
          return up ? 1 : max;
        }
      } else {
        next = next % max;
      }

      return up ? (next > max ? next - max + min : next) : next < min ? next - min + max : next;
    };

    return calculateNext(currentValue, max, min, up);
  }

  /**
   * Set disable states
   */
  #setDisableStates() {
    if (this.disabled()) {
      this.form?.disable();
    } else {
      this.form?.enable();
      if (this.disableMinute()) {
        this.form?.get('minute')?.disable();
        if (this.showSeconds()) {
          this.form?.get('second')?.disable();
        }
      }
    }
  }
}


