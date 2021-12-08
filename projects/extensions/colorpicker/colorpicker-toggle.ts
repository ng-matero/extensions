import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
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
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Subscription, of, merge } from 'rxjs';
import { MtxColorpicker } from './colorpicker';

/** Can be used to override the icon of a `mtxColorpickerToggle`. */
@Directive({
  selector: '[mtxColorpickerToggleIcon]',
})
export class MtxColorpickerToggleIcon {}

@Component({
  selector: 'mtx-colorpicker-toggle',
  templateUrl: './colorpicker-toggle.html',
  styleUrls: ['./colorpicker-toggle.scss'],
  host: {
    'class': 'mtx-colorpicker-toggle',
    // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
    // consumer may have provided, while still being able to receive focus.
    '[attr.tabindex]': 'disabled ? null : -1',
    '[class.mtx-colorpicker-toggle-active]': 'picker && picker.opened',
    '[class.mat-accent]': 'picker && picker.color === "accent"',
    '[class.mat-warn]': 'picker && picker.color === "warn"',
    '(focus)': '_button.focus()',
  },
  exportAs: 'mtxColorpickerToggle',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxColorpickerToggle implements OnInit, AfterContentInit, OnChanges, OnDestroy {
  private _stateChanges = Subscription.EMPTY;

  /** Colorpicker instance that the button will toggle. */
  @Input('for') picker!: MtxColorpicker;

  /** Tabindex for the toggle. */
  @Input() tabIndex!: number;

  /** Whether the toggle button is disabled. */
  @Input()
  get disabled(): boolean {
    if (this._disabled == null && this.picker) {
      return this.picker.disabled;
    }

    return !!this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled!: boolean;

  /** Whether ripples on the toggle should be disabled. */
  @Input() disableRipple!: boolean;

  /** Custom icon set by the consumer. */
  @ContentChild(MtxColorpickerToggleIcon) _customIcon!: MtxColorpickerToggleIcon;

  /** Underlying button element. */
  @ViewChild('button') _button!: MatButton;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      console.log(this._customIcon);
    }, 3000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.picker) {
      this._watchStateChanges();
    }
  }

  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }

  ngAfterContentInit() {
    this._watchStateChanges();
  }

  open(event: Event): void {
    if (this.picker && !this.disabled) {
      this.picker.open();
      event.stopPropagation();
    }
  }

  private _watchStateChanges() {
    const pickerDisabled = this.picker ? this.picker._disabledChange : of();
    const inputDisabled =
      this.picker && this.picker.pickerInput ? this.picker.pickerInput._disabledChange : of();
    const datepickerToggled = this.picker
      ? merge(this.picker.openedStream, this.picker.closedStream)
      : of();

    this._stateChanges.unsubscribe();
    this._stateChanges = merge(pickerDisabled, inputDisabled, datepickerToggled).subscribe(() =>
      this._changeDetectorRef.markForCheck()
    );
  }

  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_disableRipple: BooleanInput;
}
