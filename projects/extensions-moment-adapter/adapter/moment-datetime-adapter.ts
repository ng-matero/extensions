import { Inject, Injectable, Optional } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MatMomentDateAdapterOptions,
} from '@angular/material-moment-adapter';
import { DatetimeAdapter } from '@dcnx/mat-extensions/core';

import * as _moment from 'moment';
import { Moment } from 'moment';

const moment = 'default' in _moment ? (_moment as any).default : _moment;

function range<T>(length: number, valueFunction: (index: number) => T): T[] {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}

@Injectable()
export class MomentDatetimeAdapter extends DatetimeAdapter<Moment> {
  private _localeData!: {
    firstDayOfWeek: number;
    longMonths: string[];
    shortMonths: string[];
    dates: string[];
    hours: string[];
    minutes: string[];
    longDaysOfWeek: string[];
    shortDaysOfWeek: string[];
    narrowDaysOfWeek: string[];
  };

  private _useUtc = false;

  constructor(
    @Optional() @Inject(MAT_DATE_LOCALE) matDateLocale: string,
    @Optional()
    @Inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS)
    matMomentAdapterOptions: MatMomentDateAdapterOptions,
    _delegate: DateAdapter<Moment>
  ) {
    super(_delegate);
    this.setLocale(matDateLocale || moment.locale());
    this._useUtc = matMomentAdapterOptions.useUtc!;
  }

  setLocale(locale: string) {
    super.setLocale(locale);

    const momentLocaleData = moment.localeData(locale);
    this._localeData = {
      firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
      longMonths: momentLocaleData.months(),
      shortMonths: momentLocaleData.monthsShort(),
      dates: range(31, i => super.createDate(2017, 0, i + 1).format('D')),
      hours: range(24, i => this.createDatetime(2017, 0, 1, i, 0).format('H')),
      minutes: range(60, i => this.createDatetime(2017, 0, 1, 1, i).format('m')),
      longDaysOfWeek: momentLocaleData.weekdays(),
      shortDaysOfWeek: momentLocaleData.weekdaysShort(),
      narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
    };
  }

  getHour(date: Moment): number {
    return super.clone(date).hour();
  }

  getMinute(date: Moment): number {
    return super.clone(date).minute();
  }

  getSecond(date: _moment.Moment): number {
    return date.seconds();
  }

  isInNextMonth(startDate: Moment, endDate: Moment): boolean {
    const nextMonth = this.getDateInNextMonth(startDate);
    return super.sameMonthAndYear(nextMonth, endDate);
  }

  createDatetime(year: number, month: number, date: number, hour: number, minute: number): Moment {
    // Check for invalid month and date (except upper bound on date which we have to check after
    // creating the Date).
    if (month < 0 || month > 11) {
      throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
    }

    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }

    if (hour < 0 || hour > 23) {
      throw Error(`Invalid hour "${hour}". Hour has to be between 0 and 23.`);
    }

    if (minute < 0 || minute > 59) {
      throw Error(`Invalid minute "${minute}". Minute has to be between 0 and 59.`);
    }

    let result;
    if (this._useUtc) {
      result = moment.utc({ year, month, date, hour, minute });
    } else {
      result = moment({ year, month, date, hour, minute });
    }

    // If the result isn't valid, the date must have been out of bounds for this month.
    if (!result.isValid()) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }

    return result.locale(this.locale);
  }

  getFirstDateOfMonth(date: Moment): Moment {
    return super.clone(date).startOf('month');
  }

  getHourNames(): string[] {
    return this._localeData.hours;
  }

  getMinuteNames(): string[] {
    return this._localeData.minutes;
  }

  addCalendarHours(date: Moment, hours: number): Moment {
    return super.clone(date).add({ hours });
  }

  addCalendarMinutes(date: Moment, minutes: number): Moment {
    return super.clone(date).add({ minutes });
  }

  deserialize(value: any): Moment | null {
    return this._delegate.deserialize(value);
  }

  private getDateInNextMonth(date: Moment) {
    return super.clone(date).date(1).add({ month: 1 });
  }

  setHour(date: _moment.Moment, value: number): void {
    date.hours(value);
  }
  setMinute(date: _moment.Moment, value: number): void {
    date.minutes(value);
  }
  setSecond(date: _moment.Moment, value: number): void {
    date.seconds(value);
  }
}
