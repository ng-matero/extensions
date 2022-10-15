import { Inject, Injectable, Optional } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import {
  MAT_LUXON_DATE_ADAPTER_OPTIONS,
  MatLuxonDateAdapterOptions,
} from '@angular/material-luxon-adapter';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { DateTime } from 'luxon';

function range<T>(length: number, valueFunction: (index: number) => T): T[] {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}

@Injectable()
export class LuxonDatetimeAdapter extends DatetimeAdapter<DateTime> {
  private _useUtc = false;

  constructor(
    @Optional() @Inject(MAT_DATE_LOCALE) matDateLocale: string,
    @Optional()
    @Inject(MAT_LUXON_DATE_ADAPTER_OPTIONS)
    matMomentAdapterOptions: MatLuxonDateAdapterOptions,
    _delegate: DateAdapter<DateTime>
  ) {
    super(_delegate);
    this.setLocale(matDateLocale || DateTime.now().locale);
    this._useUtc = matMomentAdapterOptions.useUtc!;
  }

  setLocale(locale: string) {
    super.setLocale(locale);
  }

  getHour(date: DateTime): number {
    return date.hour;
  }

  getMinute(date: DateTime): number {
    return date.minute;
  }

  isInNextMonth(startDate: DateTime, endDate: DateTime): boolean {
    const nextMonth = this.getDateInNextMonth(startDate);
    return super.sameMonthAndYear(nextMonth, endDate);
  }

  createDatetime(year: number, month: number, day: number, hour: number, minute: number): DateTime {
    // Check for invalid month and date (except upper bound on date which we have to check after
    // creating the Date).
    if (month < 0 || month > 11) {
      throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
    }

    if (day < 1) {
      throw Error(`Invalid date "${day}". Date has to be greater than 0.`);
    }

    if (hour < 0 || hour > 23) {
      throw Error(`Invalid hour "${hour}". Hour has to be between 0 and 23.`);
    }

    if (minute < 0 || minute > 59) {
      throw Error(`Invalid minute "${minute}". Minute has to be between 0 and 59.`);
    }

    // const result = moment({year, month, date, hour, minute}).locale(this.locale);
    let result = DateTime.fromObject({ year, month: month + 1, day, hour, minute });
    if (this._useUtc) {
      result = result.toUTC();
    }

    // If the result isn't valid, the date must have been out of bounds for this month.
    if (!result.isValid) {
      throw Error(`Invalid date "${day}" for month with index "${month}".`);
    }

    return result;
  }

  getFirstDateOfMonth(date: DateTime): DateTime {
    return super.clone(date).startOf('month');
  }

  getHourNames(): string[] {
    return range(23, i => i.toLocaleString(this.locale));
  }

  getMinuteNames(): string[] {
    return range(60, i => i.toLocaleString(this.locale));
  }

  addCalendarHours(date: DateTime, hours: number): DateTime {
    return date.plus({ hours });
  }

  addCalendarMinutes(date: DateTime, minutes: number): DateTime {
    return date.plus({ minutes });
  }

  deserialize(value: any): DateTime | null {
    return this._delegate.deserialize(value);
  }

  private getDateInNextMonth(date: DateTime) {
    return date.plus({ month: 1 });
  }
}
