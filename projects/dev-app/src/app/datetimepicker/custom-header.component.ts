import { ChangeDetectorRef, Component, Inject, Optional } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS,
  MtxDatetimeFormats,
} from '@dcnx/mat-extensions/core';
import {
  MtxAMPM,
  MtxCalendar,
  MtxCalendarView,
  MtxClockView,
} from '@dcnx/mat-extensions/datetimepicker';

/** Custom header component for datetimepicker. */
@Component({
  selector: 'dev-custom-header',
  template: `
    @if (type !== 'time') {
      <button
        mat-button
        type="button"
        class="mtx-calendar-header-year"
        [class.active]="currentView === 'year' || currentView === 'multi-year'"
        [attr.aria-label]="_yearButtonLabel"
        (click)="_yearClicked()"
      >
        <span>{{ _yearButtonText }}</span>
        @if (multiYearSelector || type === 'year') {
          <svg
            class="mtx-calendar-header-year-dropdown"
            matButtonIcon
            iconPositionEnd
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        }
      </button>
    }
    @if (type !== 'year') {
      <div class="mtx-calendar-header-date-time">
        @if (type !== 'time') {
          <button
            mat-button
            type="button"
            class="mtx-calendar-header-date"
            [class.active]="currentView === 'month'"
            [class.not-clickable]="type === 'month'"
            [attr.aria-label]="_dateButtonLabel"
            (click)="_dateClicked()"
          >
            {{ _dateButtonText }}
          </button>
        }
        @if (type.endsWith('time')) {
          <span class="mtx-calendar-header-time" [class.active]="currentView === 'clock'">
            <span class="mtx-calendar-header-hour-minute-container">
              <button
                mat-button
                type="button"
                class="mtx-calendar-header-hours"
                [class.active]="_clockView === 'hour'"
                [attr.aria-label]="_hourButtonLabel"
                (click)="_hoursClicked()"
              >
                {{ _hoursButtonText }}
              </button>
              <span class="mtx-calendar-header-hour-minute-separator">:</span>
              <button
                mat-button
                type="button"
                class="mtx-calendar-header-minutes"
                [class.active]="_clockView === 'minute'"
                [attr.aria-label]="_minuteButtonLabel"
                (click)="_minutesClicked()"
              >
                {{ _minutesButtonText }}
              </button>
            </span>
            @if (twelvehour) {
              <span class="mtx-calendar-header-ampm-container">
                <button
                  mat-button
                  type="button"
                  class="mtx-calendar-header-ampm"
                  [class.active]="_AMPM === 'AM'"
                  aria-label="AM"
                  (click)="_ampmClicked('AM')"
                >
                  AM
                </button>
                <button
                  mat-button
                  type="button"
                  class="mtx-calendar-header-ampm"
                  [class.active]="_AMPM === 'PM'"
                  aria-label="PM"
                  (click)="_ampmClicked('PM')"
                >
                  PM
                </button>
              </span>
            }
          </span>
        }
      </div>

      <p>This is an example header component for the datetimepicker.</p>
    }
  `,
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class CustomHeader<D> {
  constructor(
    private _calendar: MtxCalendar<D>,
    @Optional() public _dateAdapter: DatetimeAdapter<D>,
    @Optional() @Inject(MTX_DATETIME_FORMATS) private _dateFormats: MtxDatetimeFormats,
    cdr: ChangeDetectorRef
  ) {}

  get currentView(): MtxCalendarView {
    return this._calendar.currentView;
  }

  get type(): string {
    return this._calendar.type;
  }

  get twelvehour(): boolean {
    return this._calendar.twelvehour;
  }

  get _yearButtonLabel(): string {
    return this._calendar._yearButtonLabel;
  }

  get _yearButtonText(): string {
    return this._calendar._yearButtonText;
  }

  get _dateButtonLabel(): string {
    return this._calendar._dateButtonLabel;
  }

  get _dateButtonText(): string {
    return this._calendar._dateButtonText;
  }

  get _hourButtonLabel(): string {
    return this._calendar._hourButtonLabel;
  }

  get _hoursButtonText(): string {
    return this._calendar._hoursButtonText;
  }

  get _minuteButtonLabel(): string {
    return this._calendar._minuteButtonLabel;
  }

  get _minutesButtonText(): string {
    return this._calendar._minutesButtonText;
  }

  get _clockView(): MtxClockView {
    return this._calendar._clockView;
  }

  get _AMPM(): MtxAMPM {
    return this._calendar._AMPM;
  }

  _yearClicked(): void {
    this._calendar._yearClicked();
  }

  _dateClicked(): void {
    this._calendar._dateClicked();
  }

  _hoursClicked(): void {
    this._calendar._hoursClicked();
  }

  _minutesClicked(): void {
    this._calendar._minutesClicked();
  }

  _ampmClicked(ampm: MtxAMPM): void {
    this._calendar._ampmClicked(ampm);
  }

  get multiYearSelector(): boolean {
    return this._calendar.multiYearSelector;
  }
}
