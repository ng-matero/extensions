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
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { MtxCheckboxGroupOption } from './checkbox-group.interface';

@Component({
  selector: 'mtx-checkbox-group',
  exportAs: 'mtxCheckboxGroup',
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
export class MtxCheckboxGroupComponent implements OnInit {
  @Output() checkedChange = new EventEmitter<{
    model: MtxCheckboxGroupOption[];
    index: number;
  }>();

  @Input() selectAllLabel = 'Select All';
  @Input() showSelectAll = true;

  checkedAll = false;
  indeterminate = false;

  options: MtxCheckboxGroupOption[] = [];

  onChange: (value: any) => void = () => null;
  onTouched: () => any = () => null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  writeValue(value: MtxCheckboxGroupOption[]): void {
    this.options = value;
    if (this.options) {
      this.updateSingleChecked();
    }
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: MtxCheckboxGroupOption[]) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  updateSingleChecked(e?: boolean, index?: number) {
    if (this.options.filter(item => item.checked || !item.disabled).every(item => !item.checked)) {
      this.checkedAll = false;
      this.indeterminate = false;
    } else if (
      this.options.filter(item => item.checked || !item.disabled).every(item => item.checked)
    ) {
      this.checkedAll = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }

    this.checkedChange.emit({
      model: this.options,
      index,
    });
  }

  updateAllChecked(e?: boolean, index?: number): void {
    this.checkedAll = !this.checkedAll;
    this.indeterminate = false;
    if (this.checkedAll) {
      this.options
        .filter(item => item.checked || !item.disabled)
        .forEach(item => (item.checked = true));
    } else {
      this.options
        .filter(item => item.checked || !item.disabled)
        .forEach(item => (item.checked = !!item.disabled));
    }

    this.checkedChange.emit({
      model: this.options,
      index,
    });
  }
}
