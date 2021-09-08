import { coerceBooleanProperty } from '@angular/cdk/coercion';
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
  /** Datepicker instance that the button will toggle. */
  @Input('for') datetimepicker!: MtxDatetimepicker<D>;
  private _stateChanges = Subscription.EMPTY;

  constructor(public _intl: MatDatepickerIntl, private _changeDetectorRef: ChangeDetectorRef) {}

  private _disabled!: boolean;

  /** Whether the toggle button is disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled === undefined ? this.datetimepicker.disabled : !!this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.datepicker) {
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
    const datepickerDisabled = this.datetimepicker
      ? this.datetimepicker._disabledChange
      : observableOf();
    const inputDisabled =
      this.datetimepicker && this.datetimepicker._datepickerInput
        ? this.datetimepicker._datepickerInput._disabledChange
        : observableOf();

    this._stateChanges.unsubscribe();
    this._stateChanges = merge([this._intl.changes, datepickerDisabled, inputDisabled]).subscribe(
      () => this._changeDetectorRef.markForCheck()
    );
  }
}
