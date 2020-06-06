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

import { MtxCheckboxGroupOption } from './checkbox-group.interface';

@Component({
  selector: 'mtx-checkbox-group',
  exportAs: 'mtxCheckboxGroup',
  host: {
    class: 'mtx-checkbox-group'
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

  @Output() change = new EventEmitter<{
    model: MtxCheckboxGroupOption[];
    index: number;
  }>();

  selectAll = false;
  selectAllIndeterminate = false;

  options: MtxCheckboxGroupOption[] = [];

  onChange: (value: MtxCheckboxGroupOption[]) => void = () => null;
  onTouched: () => void = () => null;

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() { }

  writeValue(value: MtxCheckboxGroupOption[]): void {
    this.options = value;
    if (this.options) {
      this.updateSingleChecked();
    }
    this._changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: (value: MtxCheckboxGroupOption[]) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  updateSingleChecked(e?: boolean, index?: number): void {
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

    this.change.emit({
      model: this.options,
      index,
    });
  }

  updateAllChecked(e?: boolean, index?: number): void {
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
