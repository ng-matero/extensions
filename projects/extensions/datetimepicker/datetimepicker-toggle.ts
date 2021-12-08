import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatButton } from '@angular/material/button';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { merge, of as observableOf, Subscription } from 'rxjs';
import { MtxDatetimepicker } from './datetimepicker';

/** Can be used to override the icon of a `mtxDatetimepickerToggle`. */
@Directive({
  selector: '[mtxDatetimepickerToggleIcon]',
})
export class MtxDatetimepickerToggleIcon {}

@Component({
  selector: 'mtx-datetimepicker-toggle',
  templateUrl: 'datetimepicker-toggle.html',
  styleUrls: ['./datetimepicker-toggle.scss'],
  host: {
    'class': 'mtx-datetimepicker-toggle',
    // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
    // consumer may have provided, while still being able to receive focus.
    '[attr.tabindex]': 'disabled ? null : -1',
    '[class.mtx-datetimepicker-toggle-active]': 'datetimepicker && datetimepicker.opened',
    '[class.mat-accent]': 'datetimepicker && datetimepicker.color === "accent"',
    '[class.mat-warn]': 'datetimepicker && datetimepicker.color === "warn"',
    '(focus)': '_button.focus()',
  },
  exportAs: 'mtxDatetimepickerToggle',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxDatetimepickerToggle<D> implements AfterContentInit, OnChanges, OnDestroy {
  private _stateChanges = Subscription.EMPTY;

  /** Datetimepicker instance that the button will toggle. */
  @Input('for') datetimepicker!: MtxDatetimepicker<D>;

  /** Tabindex for the toggle. */
  @Input() tabIndex!: number;

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

  /** Whether ripples on the toggle should be disabled. */
  @Input() disableRipple!: boolean;

  /** Custom icon set by the consumer. */
  @ContentChild(MtxDatetimepickerToggleIcon) _customIcon!: MtxDatetimepickerToggleIcon;

  /** Underlying button element. */
  @ViewChild('button') _button!: MatButton;

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
      this.datetimepicker && this.datetimepicker.datetimepickerInput
        ? this.datetimepicker.datetimepickerInput._disabledChange
        : observableOf();

    this._stateChanges.unsubscribe();
    this._stateChanges = merge([
      this._intl.changes,
      datetimepickerDisabled,
      inputDisabled,
    ]).subscribe(() => this._changeDetectorRef.markForCheck());
  }

  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_disableRipple: BooleanInput;
}
