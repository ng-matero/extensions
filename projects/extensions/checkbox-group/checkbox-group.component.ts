import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  forwardRef,
  AfterViewInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { MtxCheckboxGroupOption } from './checkbox-group.interface';

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
export class MtxCheckboxGroupComponent implements AfterViewInit, ControlValueAccessor {
  @Input() items: MtxCheckboxGroupOption[] = [];
  @Input() bindLabel = 'label';
  @Input() bindValue: string;
  @Input() showSelectAll = false;
  @Input() selectAllLabel = 'Select All';
  @Input()
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn: (o1: any, o2: any) => boolean) {
    if (typeof fn !== 'function') {
      throw Error('`compareWith` must be a function.');
    }
    // `compareWith` and `bindValue` cannot coexist
    if (!this.bindValue) {
      this._compareWith = fn;
    }
  }
  private _compareWith = (o1: any, o2: any) => o1 === o2;

  @Output() change = new EventEmitter<{ model: MtxCheckboxGroupOption[]; index: number }>();

  controlDisabled = false;

  selectAll = false;
  selectAllIndeterminate = false;

  selectedItems: MtxCheckboxGroupOption[] = [];

  _onChange: (value: MtxCheckboxGroupOption[]) => void = () => null;
  _onTouched: () => void = () => null;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {}

  private _selectValue(value: any) {
    const correspondingOption = this.items.find((option: MtxCheckboxGroupOption) => {
      try {
        return this._compareWith(this.bindValue ? option[this.bindValue] : option, value);
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

  writeValue(value: MtxCheckboxGroupOption[]): void {
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

  registerOnChange(fn: (value: MtxCheckboxGroupOption[]) => {}): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.controlDisabled = isDisabled;
  }

  private _checkMasterCheckboxState() {
    if (
      this.items
        .filter(option => option.checked || !option.disabled)
        .every(option => !option.checked)
    ) {
      this.selectAll = false;
      this.selectAllIndeterminate = false;
    } else if (
      this.items
        .filter(option => option.checked || !option.disabled)
        .every(option => option.checked)
    ) {
      this.selectAll = true;
      this.selectAllIndeterminate = false;
    } else {
      this.selectAllIndeterminate = true;
    }
  }

  private _getSelectedItems(index?: number) {
    this.selectedItems = this.items.filter(option => option.checked);

    if (this.bindValue) {
      this.selectedItems = this.selectedItems.map(option => option[this.bindValue]);
    }

    this._onChange(this.selectedItems);

    this.change.emit({ model: this.selectedItems, index });
  }

  _updateNormalCheckboxState(e?: boolean, index?: number): void {
    this._checkMasterCheckboxState();
    this._getSelectedItems(index);
  }

  _updateMasterCheckboxState(e?: boolean, index?: number): void {
    this.selectAll = !this.selectAll;
    this.selectAllIndeterminate = false;
    if (this.selectAll) {
      this.items
        .filter(option => option.checked || !option.disabled)
        .forEach(option => (option.checked = true));
    } else {
      this.items
        .filter(option => option.checked || !option.disabled)
        .forEach(option => (option.checked = !!option.disabled));
    }

    this._getSelectedItems(index);
  }
}
