import { Injectable, inject } from '@angular/core';
import {
  MAT_LUXON_DATE_ADAPTER_OPTIONS,
  MatLuxonDateAdapterOptions,
} from '@angular/material-luxon-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
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

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    super();

    const matDateLocale: any = inject(MAT_DATE_LOCALE, { optional: true });
    const matLuxonAdapterOptions = inject<MatLuxonDateAdapterOptions>(
      MAT_LUXON_DATE_ADAPTER_OPTIONS,
      { optional: true }
    );

    this.setLocale(matDateLocale || DateTime.now().locale);
    this._useUtc = matLuxonAdapterOptions?.useUtc || false;
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

  getWeek(date: DateTime, firstDayOfWeek: number): number {
    return date.localWeekNumber;
  }

  createDatetime(year: number, month: number, day: number, hour: number, minute: number): DateTime {
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

    // Luxon uses 1-indexed months so we need to add one to the month.
    let result;
    if (this._useUtc) {
      result = DateTime.utc(year, month + 1, day, hour, minute);
    } else {
      result = DateTime.local(year, month + 1, day, hour, minute);
    }

    if (!result.isValid) {
      throw Error(`Invalid date "${day}" for month with index "${month}".`);
    }

    return result.setLocale(this.locale);
  }

  getFirstDateOfMonth(date: DateTime): DateTime {
    return super.clone(date).startOf('month');
  }

  getHourNames(): string[] {
    return range(24, i => i.toLocaleString(this.locale));
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
