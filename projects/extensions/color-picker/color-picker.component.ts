import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  Optional,
  Self,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { Color } from 'ngx-color';

let nextUniqueId = 0;

@Component({
  selector: 'mtx-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: MatFormFieldControl, useExisting: MtxColorPickerComponent }],
})
export class MtxColorPickerComponent
  implements OnInit, OnDestroy, ControlValueAccessor, MatFormFieldControl<any> {
  // value: T | null;
  // stateChanges: Observable<void>;
  // id: string;
  // placeholder: string;
  // ngControl: NgControl | null;
  // focused = false;
  // empty: boolean;
  // shouldLabelFloat: boolean;
  // required: boolean;
  // disabled: boolean;
  // errorState: boolean;
  // controlType?: string;
  // autofilled?: boolean;
  // setDescribedByIds(ids: string[]): void;
  // onContainerClick(event: MouseEvent): void;

  /** Value of the color picker control. */
  @Input()
  get value(): string | null {
    return this._value;
  }
  set value(newValue: string | null) {
    this._value = newValue;
    this.stateChanges.next();
  }
  private _value = null;

  readonly stateChanges: Subject<void> = new Subject<void>();

  /** Unique id for this input. */
  private _uid = `mat-select-${nextUniqueId++}`;

  /** Unique id of the element. */
  @Input()
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  private _id: string;

  /** Placeholder to be shown if no value has been selected. */
  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  /** Whether the input is focused. */
  get focused(): boolean {
    return this._focused || this._panelOpen;
  }
  private _focused = false;

  get empty(): boolean {
    return !this.value;
  }

  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  /** Event emitted when the color changed */
  @Output() readonly colorChange = new EventEmitter<{ color: Color; $event: MouseEvent }>();

  errorState = false;

  /** A name for this control that can be used by `mat-form-field`. */
  controlType = 'mtx-color-picker';

  /** The aria-describedby attribute on the select for improved a11y. */
  _ariaDescribedby: string;

  /** Whether or not the overlay panel is open. */
  _panelOpen = false;

  /** `View -> model callback called when value changes` */
  _onChange: (value: any) => void = () => {};

  /** `View -> model callback called when select has been touched` */
  _onTouched = () => {};

  constructor(
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl,
    private cdr: ChangeDetectorRef
  ) {
    _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
      if (this._focused && !origin) {
        this._onTouched();
      }
      this._focused = !!origin;
      this.stateChanges.next();
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  /** Implemented as part of MatFormFieldControl. */
  setDescribedByIds(ids: string[]) {
    this._ariaDescribedby = ids.join(' ');
  }

  /** Implemented as part of MatFormFieldControl. */
  onContainerClick(event: MouseEvent) {
    this.open();
  }

  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */
  writeValue(color: string | null): void {
    this.value = color;
  }

  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  /** Opens the overlay panel. */
  open() {
    this._panelOpen = true;
  }

  /** Closes the overlay panel and focuses the host element. */
  close() {
    if (this._panelOpen) {
      this._panelOpen = false;
      this.cdr.markForCheck();
      this._onTouched();
    }
  }

  /** The callback of color changed */
  changeColor(model: { color: Color; $event: MouseEvent }) {
    this.value = model.color.hex;

    this.colorChange.emit({ color: model.color, $event: model.$event });
  }
}
