import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
  inject,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
  ThemePalette,
} from '@angular/material/core';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { provideMomentDatetimeAdapter } from '@ng-matero/extensions-moment-adapter';
import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS,
  MtxDatetimeFormats,
} from '@ng-matero/extensions/core';
import {
  MtxAMPM,
  MtxCalendar,
  MtxCalendarView,
  MtxClockView,
  MtxDatetimepicker,
  MtxDatetimepickerFilterType,
  MtxDatetimepickerInput,
  MtxDatetimepickerToggle,
} from '@ng-matero/extensions/datetimepicker';
import { TranslateService } from '@ngx-translate/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { Subject, Subscription, takeUntil } from 'rxjs';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'dev-datetimepicker-demo',
  templateUrl: 'datetimepicker-demo.component.html',
  styleUrls: ['datetimepicker-demo.component.scss'],
  standalone: true,
  imports: [
    MatRadioGroup,
    ReactiveFormsModule,
    FormsModule,
    MatRadioButton,
    MatFormField,
    MatLabel,
    MatSuffix,
    MatInput,
    MatError,
    MatButton,
    MatCard,
    MtxDatetimepickerToggle,
    MtxDatetimepicker,
    MtxDatetimepickerInput,
    MtxCalendar,
  ],
  providers: [
    provideMomentDatetimeAdapter(
      {
        parse: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          yearInput: 'YYYY',
          timeInput: 'HH:mm',
          datetimeInput: 'YYYY-MM-DD HH:mm',
        },
        display: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          yearInput: 'YYYY',
          timeInput: 'HH:mm',
          datetimeInput: 'YYYY-MM-DD HH:mm',
          monthYearLabel: 'YYYY MMMM',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
          popupHeaderDateLabel: 'MMM DD, ddd',
        },
      },
      { useUtc: false }
    ),
  ],
})
export class DatetimepickerDemoComponent implements OnInit, OnDestroy {
  themeColor: ThemePalette = 'primary';

  type = 'moment';

  group: UntypedFormGroup;
  today: moment.Moment;
  tomorrow: moment.Moment;
  yesterday: moment.Moment;
  min: moment.Moment;
  max: moment.Moment;
  start: moment.Moment;
  filter: (date: moment.Moment | null, type: MtxDatetimepickerFilterType) => boolean;
  customHeader = CustomExampleHeader;

  translateSubscription!: Subscription;

  constructor(
    fb: UntypedFormBuilder,
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService
  ) {
    this.today = moment.utc();
    this.tomorrow = moment.utc().date(moment.utc().date() + 1);
    this.yesterday = moment.utc().date(moment.utc().date() - 1);
    this.min = this.today.clone().year(2018).month(10).date(3).hour(11).minute(10);
    this.max = this.min.clone().date(4).minute(45);
    this.start = this.today.clone().year(1930).month(9).date(28);
    this.filter = (date: moment.Moment | null, type: MtxDatetimepickerFilterType) => {
      if (date === null) {
        return true;
      }
      switch (type) {
        case MtxDatetimepickerFilterType.DATE:
          return date.year() % 2 === 0 && date.month() % 2 === 0 && date.date() % 2 === 0;
        case MtxDatetimepickerFilterType.HOUR:
          return date.hour() % 2 === 0;
        case MtxDatetimepickerFilterType.MINUTE:
          return date.minute() % 2 === 0;
      }
    };

    this.group = fb.group({
      dateTime: [new Date('2017-11-09T12:10:00.000Z'), Validators.required],
      dateTimeManual: [new Date('2017-11-09T12:10:00.000Z'), Validators.required],
      dateTimeYear: [new Date('2017-11-09T12:10:00.000Z'), Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
      timeAMPM: [null, Validators.required],
      timeAMPMManual: [null, Validators.required],
      month: [null, Validators.required],
      year: [null, Validators.required],
      mintest: [this.today, Validators.required],
      filtertest: [this.today, Validators.required],
      touch: [null, Validators.required],
    });
  }

  selectedDate: Date | null = null;
  selectedTime: Date | null = null;

  ngOnInit() {
    this.translateSubscription = this.translate.onLangChange.subscribe((res: { lang: any }) => {
      this.dateAdapter.setLocale(res.lang);
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
}

/** Custom header component for datepicker. */
@Component({
  selector: 'dev-header',
  styles: `

  `,
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

      This is an example header component for the datepicker.
    }
  `,
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class CustomExampleHeader<D> {
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
