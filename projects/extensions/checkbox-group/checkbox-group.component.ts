import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

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
export class MtxCheckboxGroupComponent implements OnInit, ControlValueAccessor {
  @Input() selectAllLabel = 'Select All';
  @Input() showSelectAll = true;

  @Output() change = new EventEmitter<{ model: MtxCheckboxGroupOption[]; index: number }>();

  selectAll = false;
  selectAllIndeterminate = false;

  options: MtxCheckboxGroupOption[] = [];

  controlDisabled = false;

  _onChange: (value: MtxCheckboxGroupOption[]) => void = () => null;
  _onTouched: () => void = () => null;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  writeValue(value: MtxCheckboxGroupOption[]): void {
    if (value) {
      this.options = value;
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
    if (this.options.filter(item => item.checked || !item.disabled).every(item => !item.checked)) {
      this.selectAll = false;
      this.selectAllIndeterminate = false;
    } else if (
      this.options.filter(item => item.checked || !item.disabled).every(item => item.checked)
    ) {
      this.selectAll = true;
      this.selectAllIndeterminate = false;
    } else {
      this.selectAllIndeterminate = true;
    }
  }

  _updateNormalCheckboxState(e?: MatCheckboxChange, index?: number): void {
    this._checkMasterCheckboxState();

    this.change.emit({
      model: this.options,
      index,
    });
  }

  _updateMasterCheckboxState(e?: MatCheckboxChange, index?: number): void {
    this.selectAll = !this.selectAll;
    this.selectAllIndeterminate = false;
    if (this.selectAll) {
      this.options
        .filter(item => item.checked || !item.disabled)
        .forEach(item => (item.checked = true));
    } else {
      this.options
        .filter(item => item.checked || !item.disabled)
        .forEach(item => (item.checked = !!item.disabled));
    }

    this.change.emit({
      model: this.options,
      index,
    });
  }
}
