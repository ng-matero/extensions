import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  ChangeDetectorRef,
  Optional,
  Self,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';

export type CompareWithFn = (a: any, b: any) => boolean;
export type GroupValueFn = (key: string | object, children: any[]) => string | object;

let nextUniqueId = 0;

@Component({
  selector: 'mtx-select',
  exportAs: 'mtxSelect',
  host: {
    'class': 'mtx-select',
    '[class.mtx-select-floating]': 'shouldLabelFloat',
    '[attr.id]': 'id',
    '[attr.aria-describedby]': '_ariaDescribedby || null',
  },
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: MatFormFieldControl, useExisting: MtxSelectComponent }],
})
export class MtxSelectComponent
  implements OnInit, OnDestroy, DoCheck, ControlValueAccessor, MatFormFieldControl<any> {
  /** Mtx Select Options */
  @Input() addTag: boolean | ((term: string) => any | Promise<any>) = false;
  @Input() addTagText = 'Add item';
  @Input() appearance = 'underline';
  @Input() appendTo: string;
  @Input() bindLabel: string;
  @Input() bindValue: string;
  @Input() closeOnSelect = true;
  @Input() clearAllText = 'Clear all';
  @Input() clearable = true;
  @Input() clearOnBackspace = true;
  @Input() compareWith: CompareWithFn; // TODO:
  @Input() dropdownPosition: 'bottom' | 'top' | 'auto' = 'auto';
  @Input() groupBy: () => void | string;
  @Input() groupValue: GroupValueFn;
  @Input() selectableGroup = false;
  @Input() selectableGroupAsModel = true;
  @Input() hideSelected = false;
  @Input() items = [];
  @Input() isOpen: boolean;
  @Input() loading = false;
  @Input() loadingText = 'Loading...';
  @Input() labelForId = null;
  @Input() markFirst = true;
  @Input() maxSelectedItems: number;
  @Input() multiple = false;
  @Input() notFoundText = 'No items found';
  @Input() searchable = true;
  @Input() readonly = false;
  @Input() searchFn = null;
  @Input() searchWhileComposing = true;
  @Input() clearSearchOnAdd = true;
  @Input() selectOnTab = false;
  @Input() trackByFn = null;
  @Input() inputAttrs: { [key: string]: string } = {};
  @Input() tabIndex: number;
  @Input() openOnEnter = true;
  @Input() minTermLength = 0;
  @Input() keyDownFn = (_: KeyboardEvent) => true;
  @Input() virtualScroll = false;
  @Input() typeToSearchText = 'Type to search';
  @Input() typeahead: Subject<string>;

  @Output() blur = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();
  @Output() search = new EventEmitter<{ term: string; items: any[] }>();
  @Output() clear = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() scroll = new EventEmitter<{ start: number; end: number }>();
  @Output() scrollToEnd = new EventEmitter();

  /** Value of the select control. */
  @Input()
  get value(): any { return this._value; }
  set value(newValue: any) {
    this._value = newValue;
    this._onChange(newValue);
    this.stateChanges.next();
  }
  private _value = null;

  /** Implemented as part of MatFormFieldControl. */
  readonly stateChanges: Subject<void> = new Subject<void>();

  /** Unique id of the element. */
  @Input()
  get id(): string { return this._id; }
  set id(value: string) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  private _id: string;

  /** Unique id for this input. */
  private _uid = `mtx-select-${nextUniqueId++}`;

  /** Placeholder to be shown if value is empty. */
  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  /** Whether the input is focused. */
  get focused(): boolean { return this._focused; }
  private _focused = false;

  get empty(): boolean {
    return !this.value || (Array.isArray(this.value) && this.value.length === 0);
  }

  get shouldLabelFloat(): boolean { return this.focused || !this.empty; }

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.readonly = this._disabled;
    this.stateChanges.next();
  }
  private _disabled = false;

  errorState = false;

  /** A name for this control that can be used by `mat-form-field`. */
  controlType = 'mtx-select';

  /** The aria-describedby attribute on the select for improved a11y. */
  _ariaDescribedby: string;

  /** `View -> model callback called when value changes` */
  _onChange: (value: any) => void = () => { };

  /** `View -> model callback called when select has been touched` */
  _onTouched = () => { };

  constructor(
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() @Self() public ngControl: NgControl
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

  ngOnInit() { }

  ngDoCheck(): void {
    if (this.ngControl) {
      this.errorState = this.ngControl.invalid && this.ngControl.touched;
      this.stateChanges.next();
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  /** Implemented as part of MatFormFieldControl. */
  setDescribedByIds(ids: string[]) {
    this._ariaDescribedby = ids.join(' ');
  }

  /** Implemented as part of MatFormFieldControl. */
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  /** Implemented as part of MatFormFieldControl. */
  onContainerClick() { }

  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */
  writeValue(value: any): void {
    this._value = value;
    this._changeDetectorRef.markForCheck();
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
}
