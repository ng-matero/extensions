import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MtxCheckboxGroupOption } from './checkbox-group.interface';

export class MtxCheckboxBase {
  constructor(public label?: any, public value?: any) {}
}

@Component({
  selector: 'mtx-checkbox-group',
  exportAs: 'mtxCheckboxGroup',
  host: {
    class: 'mtx-checkbox-group',
  },
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MtxCheckboxGroupComponent),
      multi: true,
    },
  ],
})
export class MtxCheckboxGroupComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {
  @ContentChildren(forwardRef(() => MatCheckbox), { descendants: true })
  _checkboxes: QueryList<MatCheckbox>;

  @Input()
  get items() {
    return this._items;
  }
  set items(value: any[]) {
    // store the original data with deep clone
    this._originalItems = JSON.parse(JSON.stringify(value));
    this._items = value.map(option => {
      return option instanceof Object ? option : new MtxCheckboxBase(option, option);
    });
  }
  private _items: any[] = [];
  private _originalItems: any[] = [];

  @Input() bindLabel = 'label';

  @Input() bindValue = 'value';

  @Input()
  get showSelectAll(): boolean {
    return this._showSelectAll;
  }
  set showSelectAll(value: boolean) {
    this._showSelectAll = coerceBooleanProperty(value);
  }
  private _showSelectAll = false;

  @Input() selectAllLabel = 'Select All';

  @Input()
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn: ((o1: any, o2: any) => boolean) | undefined) {
    if (fn != null && typeof fn !== 'function') {
      throw Error('`compareWith` must be a function.');
    }

    if (fn) {
      this._compareWith = fn;
    }
  }
  private _compareWith!: (o1: any, o2: any) => boolean;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Output() change = new EventEmitter<{ model: MtxCheckboxGroupOption[]; index: number }>();

  selectAll = false;
  selectAllIndeterminate = false;

  selectedItems: MtxCheckboxGroupOption[] = [];

  _onChange: (value: MtxCheckboxGroupOption[]) => void = () => null;
  _onTouched: () => void = () => null;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        // When a focused element becomes disabled, the browser *immediately* fires a blur event.
        // Angular does not expect events to be raised during change detection, so any state change
        // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
        // See https://github.com/angular/angular/issues/17793. To work around this, we defer
        // telling the form control it has been touched until the next tick.
        Promise.resolve().then(() => {
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  /**
   * Finds and selects and option based on its value.
   * @returns Option that has the corresponding value.
   */
  private _selectValue(value: MtxCheckboxGroupOption) {
    const correspondingOption = (this.items as MtxCheckboxGroupOption[]).find(option => {
      try {
        const compareValue = option[this.bindValue] === value;
        return this._compareWith ? this._compareWith(option, value) : compareValue;
      } catch (error) {
        console.warn(error);
        return false;
      }
    });

    if (correspondingOption) {
      correspondingOption.checked = true;
    }

    return correspondingOption;
  }

  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value New value to be written to the model.
   */
  writeValue(value: any[]): void {
    if (value) {
      if (!Array.isArray(value)) {
        throw Error('Value must be an array.');
      }

      value.forEach((currentValue: any) => this._selectValue(currentValue));
      this.selectedItems = value;
    }

    this._checkMasterCheckboxState();
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn: (value: MtxCheckboxGroupOption[]) => {}): void {
    this._onChange = fn;
  }

  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled: boolean) {
    this._disabled = isDisabled;
  }

  private _checkMasterCheckboxState() {
    if (
      (this.items as MtxCheckboxGroupOption[])
        .filter(option => option.checked || !option.disabled)
        .every(option => !option.checked)
    ) {
      this.selectAll = false;
      this.selectAllIndeterminate = false;
    } else if (
      (this.items as MtxCheckboxGroupOption[])
        .filter(option => option.checked || !option.disabled)
        .every(option => option.checked)
    ) {
      this.selectAll = true;
      this.selectAllIndeterminate = false;
    } else {
      this.selectAllIndeterminate = true;
    }
  }

  private _getSelectedItems(index: number) {
    this.selectedItems = (this.items as MtxCheckboxGroupOption[]).filter(option => option.checked);

    if (this._compareWith) {
      this.selectedItems = (this._originalItems as MtxCheckboxGroupOption[]).filter(option =>
        this.selectedItems.find(selectedOption => this._compareWith!(option, selectedOption))
      );
    } else {
      this.selectedItems = this.selectedItems.map(option => option[this.bindValue]);
    }

    this._onChange(this.selectedItems);

    this.change.emit({ model: this.selectedItems, index });
  }

  /** Handle normal checkbox toggle */
  _updateNormalCheckboxState(e: MatCheckboxChange, index: number): void {
    this._checkMasterCheckboxState();
    this._getSelectedItems(index);
  }

  /** Handle master checkbox toggle */
  _updateMasterCheckboxState(e: MatCheckboxChange, index: number): void {
    this.selectAll = !this.selectAll;
    this.selectAllIndeterminate = false;

    if (this.selectAll) {
      (this.items as MtxCheckboxGroupOption[])
        .filter(option => option.checked || !option.disabled)
        .forEach(option => (option.checked = true));
    } else {
      (this.items as MtxCheckboxGroupOption[])
        .filter(option => option.checked || !option.disabled)
        .forEach(option => (option.checked = !!option.disabled));
    }

    this._getSelectedItems(index);
  }

  static ngAcceptInputType_showSelectAll: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
}
