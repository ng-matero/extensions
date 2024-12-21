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
  booleanAttribute,
  inject,
  HostAttributeToken,
} from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { Observable, Subscription, merge, of as observableOf } from 'rxjs';

import { MtxDatetimepicker } from './datetimepicker';
import { MtxDatetimepickerIntl } from './datetimepicker-intl';

/** Can be used to override the icon of a `mtxDatetimepickerToggle`. */
@Directive({
  selector: '[mtxDatetimepickerToggleIcon]',
})
export class MtxDatetimepickerToggleIcon {}

@Component({
  selector: 'mtx-datetimepicker-toggle',
  templateUrl: 'datetimepicker-toggle.html',
  styleUrl: './datetimepicker-toggle.scss',
  host: {
    'class': 'mtx-datetimepicker-toggle',
    '[attr.tabindex]': 'null',
    '[class.mtx-datetimepicker-toggle-active]': 'datetimepicker && datetimepicker.opened',
    '[class.mat-accent]': 'datetimepicker && datetimepicker.color === "accent"',
    '[class.mat-warn]': 'datetimepicker && datetimepicker.color === "warn"',
    // Used by the test harness to tie this toggle to its datetimepicker.
    '[attr.data-mtx-calendar]': 'datetimepicker ? datetimepicker.id : null',
    // Bind the `click` on the host, rather than the inner `button`, so that we can call
    // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
    // it so that the input doesn't get focused automatically by the form field (See #21836).
    '(click)': '_open($event)',
  },
  exportAs: 'mtxDatetimepickerToggle',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconButton],
})
export class MtxDatetimepickerToggle<D> implements AfterContentInit, OnChanges, OnDestroy {
  _intl = inject(MtxDatetimepickerIntl);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  private _stateChanges = Subscription.EMPTY;

  /** Datetimepicker instance that the button will toggle. */
  @Input('for') datetimepicker!: MtxDatetimepicker<D>;

  /** Tabindex for the toggle. */
  @Input() tabIndex: number | null;

  /** Screen-reader label for the button. */
  @Input('aria-label') ariaLabel?: string;

  /** Whether the toggle button is disabled. */
  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return this._disabled === undefined ? this.datetimepicker.disabled : !!this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  private _disabled!: boolean;

  /** Whether ripples on the toggle should be disabled. */
  @Input({ transform: booleanAttribute }) disableRipple!: boolean;

  /** Custom icon set by the consumer. */
  @ContentChild(MtxDatetimepickerToggleIcon) _customIcon!: MtxDatetimepickerToggleIcon;

  /** Underlying button element. */
  @ViewChild('button') _button!: MatButton;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    const defaultTabIndex = inject(new HostAttributeToken('tabindex'), { optional: true });
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }

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
    const datetimepickerToggled = this.datetimepicker
      ? merge(this.datetimepicker.openedStream, this.datetimepicker.closedStream)
      : observableOf();

    this._stateChanges.unsubscribe();
    this._stateChanges = merge(
      this._intl.changes,
      datetimepickerDisabled as Observable<void>,
      inputDisabled as Observable<void>,
      datetimepickerToggled
    ).subscribe(() => this._changeDetectorRef.markForCheck());
  }
}
