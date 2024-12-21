import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  HostAttributeToken,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
} from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { Observable, Subscription, merge, of as observableOf } from 'rxjs';

import { MtxColorpicker } from './colorpicker';

/** Can be used to override the icon of a `mtxColorpickerToggle`. */
@Directive({
  selector: '[mtxColorpickerToggleIcon]',
})
export class MtxColorpickerToggleIcon {}

@Component({
  selector: 'mtx-colorpicker-toggle',
  templateUrl: './colorpicker-toggle.html',
  styleUrl: './colorpicker-toggle.scss',
  host: {
    'class': 'mtx-colorpicker-toggle',
    '[attr.tabindex]': 'null',
    '[class.mtx-colorpicker-toggle-active]': 'picker && picker.opened',
    '[class.mat-accent]': 'picker && picker.color === "accent"',
    '[class.mat-warn]': 'picker && picker.color === "warn"',
    // Bind the `click` on the host, rather than the inner `button`, so that we can call
    // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
    // it so that the input doesn't get focused automatically by the form field (See #21836).
    '(click)': '_open($event)',
  },
  exportAs: 'mtxColorpickerToggle',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconButton],
})
export class MtxColorpickerToggle implements AfterContentInit, OnChanges, OnDestroy {
  private _changeDetectorRef = inject(ChangeDetectorRef);

  private _stateChanges = Subscription.EMPTY;

  /** Colorpicker instance that the button will toggle. */
  @Input('for') picker!: MtxColorpicker;

  /** Tabindex for the toggle. */
  @Input() tabIndex: number | null;

  /** Screen-reader label for the button. */
  @Input('aria-label') ariaLabel!: string;

  /** Whether the toggle button is disabled. */
  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    if (this._disabled == null && this.picker) {
      return this.picker.disabled;
    }

    return !!this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  private _disabled!: boolean;

  /** Whether ripples on the toggle should be disabled. */
  @Input({ transform: booleanAttribute }) disableRipple!: boolean;

  /** Custom icon set by the consumer. */
  @ContentChild(MtxColorpickerToggleIcon) _customIcon!: MtxColorpickerToggleIcon;

  /** Underlying button element. */
  @ViewChild('button') _button!: MatButton;

  constructor() {
    const defaultTabIndex = inject(new HostAttributeToken('tabindex'), { optional: true });

    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
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

  _open(event: Event): void {
    if (this.picker && !this.disabled) {
      this.picker.open();
      event.stopPropagation();
    }
  }

  private _watchStateChanges() {
    const pickerDisabled = this.picker ? this.picker._disabledChange : observableOf();
    const inputDisabled =
      this.picker && this.picker.pickerInput
        ? this.picker.pickerInput._disabledChange
        : observableOf();
    const pickerToggled = this.picker
      ? merge(this.picker.openedStream, this.picker.closedStream)
      : observableOf();

    this._stateChanges.unsubscribe();
    this._stateChanges = merge(
      pickerDisabled as Observable<void>,
      inputDisabled as Observable<void>,
      pickerToggled
    ).subscribe(() => this._changeDetectorRef.markForCheck());
  }
}
