import { DOWN_ARROW } from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  booleanAttribute,
  forwardRef,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subscription } from 'rxjs';

import { MtxColorpicker } from './colorpicker';

export class MtxColorPickerInputEvent {
  /** The new value for the target colorpicker input. */
  value: string | null;

  constructor(
    /** Reference to the colorpicker input component that emitted the event. */
    public target: MtxColorpickerInput,
    /** Reference to the native input element associated with the colorpicker input. */
    public targetElement: HTMLElement
  ) {
    this.value = this.target.value;
  }
}

export const MTX_COLORPICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MtxColorpickerInput),
  multi: true,
};

export const MTX_COLORPICKER_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MtxColorpickerInput),
  multi: true,
};

export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'hsv';

@Directive({
  selector: 'input[mtxColorpicker]',
  providers: [
    MTX_COLORPICKER_VALUE_ACCESSOR,
    MTX_COLORPICKER_VALIDATORS,
    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MtxColorpickerInput },
  ],
  host: {
    'class': 'mtx-colorpicker-input',
    '[attr.aria-haspopup]': '_picker ? "dialog" : null',
    '[attr.aria-owns]': '(_picker?.opened && _picker.id) || null',
    '[disabled]': 'disabled',
    '(input)': '_onInput($event.target.value)',
    '(change)': '_onChange()',
    '(blur)': '_onBlur()',
    '(keydown)': '_onKeydown($event)',
  },
  exportAs: 'mtxColorpickerInput',
})
export class MtxColorpickerInput implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private _elementRef = inject<ElementRef<HTMLInputElement>>(ElementRef);
  private _formField = inject(MatFormField, { optional: true });

  /** Whether the component has been initialized. */
  private _isInitialized!: boolean;

  @Input()
  set mtxColorpicker(value: MtxColorpicker) {
    if (!value) {
      return;
    }

    this._picker = value;
    this._picker.registerInput(this);
    this._pickerSubscription.unsubscribe();

    this._pickerSubscription = this._picker._selectedChanged.subscribe((selected: string) => {
      this.value = selected;
      this._cvaOnChange(selected);
      this._onTouched();
      this.colorInput.emit(new MtxColorPickerInputEvent(this, this._elementRef.nativeElement));
      this.colorChange.emit(new MtxColorPickerInputEvent(this, this._elementRef.nativeElement));
    });
  }
  _picker!: MtxColorpicker;

  /** Whether the colorpicker-input is disabled. */
  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return !!this._disabled;
  }
  set disabled(value: boolean) {
    const element = this._elementRef.nativeElement;

    if (this._disabled !== value) {
      this._disabled = value;
      this._disabledChange.emit(value);
    }

    // We need to null check the `blur` method, because it's undefined during SSR.
    // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
    // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
    // element has been inserted.
    if (value && this._isInitialized && element.blur) {
      // Normally, native input elements automatically blur if they turn disabled. This behavior
      // is problematic, because it would mean that it triggers another change detection cycle,
      // which then causes a changed after checked error if the input element was focused before.
      element.blur();
    }
  }
  private _disabled!: boolean;

  /** The value of the input. */
  @Input()
  get value(): string | null {
    return this._value;
  }
  set value(value: string | null) {
    const oldValue = this.value;
    this._value = value;
    this._formatValue(value);

    this._valueChange.emit(value);
  }
  private _value!: string | null;

  /** The input and output color format. */
  @Input() format: ColorFormat = 'hex';

  /** Emits when a `change` event is fired on this `<input>`. */
  @Output() readonly colorChange: EventEmitter<MtxColorPickerInputEvent> =
    new EventEmitter<MtxColorPickerInputEvent>();

  /** Emits when an `input` event is fired on this `<input>`. */
  @Output() readonly colorInput: EventEmitter<MtxColorPickerInputEvent> =
    new EventEmitter<MtxColorPickerInputEvent>();

  /** Emits when the disabled state has changed */
  _disabledChange = new EventEmitter<boolean>();

  /** Emits when the value changes (either due to user input or programmatic change). */
  _valueChange = new EventEmitter<string | null>();

  _onTouched = () => {};

  _validatorOnChange = () => {};

  private _cvaOnChange: (value: any) => void = () => {};

  private _pickerSubscription = Subscription.EMPTY;

  /** The combined form control validator for this input. */
  private _validator: ValidatorFn | null = Validators.compose([]);

  /** Whether the last value set on the input was valid. */
  private _lastValueValid = false;

  ngAfterViewInit() {
    this._isInitialized = true;
  }

  ngOnDestroy() {
    this._pickerSubscription.unsubscribe();
    this._valueChange.complete();
    this._disabledChange.complete();
  }

  registerOnValidatorChange(fn: () => void): void {
    this._validatorOnChange = fn;
  }

  /** @docs-private */
  validate(c: AbstractControl): ValidationErrors | null {
    return this._validator ? this._validator(c) : null;
  }

  /**
   * @deprecated
   * @breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
   */
  getPopupConnectionElementRef(): ElementRef {
    return this.getConnectedOverlayOrigin();
  }

  /**
   * Gets the element that the colorpicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin(): ElementRef {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }

  /** Gets the ID of an element that should be used a description for the overlay. */
  getOverlayLabelId(): string | null {
    if (this._formField) {
      return this._formField.getLabelId();
    }

    return this._elementRef.nativeElement.getAttribute('aria-labelledby');
  }

  // Implemented as part of ControlValueAccessor.
  writeValue(value: string): void {
    this.value = value;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn: (value: any) => void): void {
    this._cvaOnChange = fn;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  _onKeydown(event: KeyboardEvent) {
    const isAltDownArrow = event.altKey && event.keyCode === DOWN_ARROW;

    if (this._picker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._picker.open();
      event.preventDefault();
    }
  }

  /** Handles blur events on the input. */
  _onBlur() {
    // Reformat the input only if we have a valid value.
    if (this.value) {
      this._formatValue(this.value);
    }

    this._onTouched();
  }

  _onInput(value: string) {
    const nextValue = value;

    this._value = nextValue;
    this._cvaOnChange(nextValue);
    this._valueChange.emit(nextValue);
    this.colorInput.emit(new MtxColorPickerInputEvent(this, this._elementRef.nativeElement));
  }

  _onChange() {
    this.colorChange.emit(new MtxColorPickerInputEvent(this, this._elementRef.nativeElement));
  }

  /** Returns the palette used by the input's form field, if any. */
  getThemePalette(): ThemePalette {
    return this._formField ? this._formField.color : undefined;
  }

  /** TODO: Formats a value and sets it on the input element. */
  private _formatValue(value: string | null) {
    this._elementRef.nativeElement.value = value ? value : '';
  }
}
