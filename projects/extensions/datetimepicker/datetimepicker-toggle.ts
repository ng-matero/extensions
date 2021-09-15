import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { merge, of as observableOf, Subscription } from 'rxjs';
import { MtxDatetimepicker } from './datetimepicker';

@Component({
  selector: 'mtx-datetimepicker-toggle',
  templateUrl: 'datetimepicker-toggle.html',
  host: {
    class: 'mtx-datetimepicker-toggle',
  },
  exportAs: 'mtxDatetimepickerToggle',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxDatetimepickerToggle<D> implements AfterContentInit, OnChanges, OnDestroy {
  /** Datetimepicker instance that the button will toggle. */
  @Input('for') datetimepicker!: MtxDatetimepicker<D>;

  private _stateChanges = Subscription.EMPTY;

  constructor(public _intl: MatDatepickerIntl, private _changeDetectorRef: ChangeDetectorRef) {}

  /** Whether the toggle button is disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled === undefined ? this.datetimepicker.disabled : !!this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled!: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.datetimepicker) {
      this._watchStateChanges();
    }
  }

  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }

  ngAfterContentInit() {
    this._watchStateChanges();
  }

  _open(event: Event): void {
    if (this.datetimepicker && !this.disabled) {
      this.datetimepicker.open();
      event.stopPropagation();
    }
  }

  private _watchStateChanges() {
    const datetimepickerDisabled = this.datetimepicker
      ? this.datetimepicker._disabledChange
      : observableOf();
    const inputDisabled =
      this.datetimepicker && this.datetimepicker._datetimepickerInput
        ? this.datetimepicker._datetimepickerInput._disabledChange
        : observableOf();

    this._stateChanges.unsubscribe();
    this._stateChanges = merge([
      this._intl.changes,
      datetimepickerDisabled,
      inputDisabled,
    ]).subscribe(() => this._changeDetectorRef.markForCheck());
  }

  static ngAcceptInputType_disabled: BooleanInput;
}
