import { Inject, Injectable, Optional } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import {
  addHours,
  addMinutes,
  addMonths,
  getHours,
  getMinutes,
  getSeconds,
  isValid,
  startOfMonth,
} from 'date-fns';

function range<T>(length: number, valueFunction: (index: number) => T): T[] {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}

@Injectable()
export class DateFnsDateTimeAdapter extends DatetimeAdapter<Date> {
  constructor(
    @Optional() @Inject(MAT_DATE_LOCALE) matDateLocale: string,
    _delegate: DateAdapter<Date>
  ) {
    super(_delegate);
    this.setLocale(matDateLocale);
  }

  setLocale(locale: string) {
    super.setLocale(locale);
  }

  getHour(date: Date): number {
    return getHours(date);
  }

  getMinute(date: Date): number {
    return getMinutes(date);
  }

  getSecond(date: Date): number {
    return getSeconds(date);
  }

  isInNextMonth(startDate: Date, endDate: Date): boolean {
    const nextMonth = this.getDateInNextMonth(startDate);
    return super.sameMonthAndYear(nextMonth, endDate);
  }

  createDatetime(year: number, month: number, day: number, hour: number, minute: number): Date {
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

    const result = new Date(year, month, day, hour, minute);

    if (!isValid(result)) {
      throw Error(`Invalid date "${day}" for month with index "${month}".`);
    }

    return result;
  }

  getFirstDateOfMonth(date: Date): Date {
    return startOfMonth(date);
  }

  getHourNames(): string[] {
    return range(24, i => i.toLocaleString(this.locale));
  }

  getMinuteNames(): string[] {
    return range(60, i => i.toLocaleString(this.locale));
  }

  addCalendarHours(date: Date, hours: number): Date {
    return addHours(date, hours);
  }

  addCalendarMinutes(date: Date, minutes: number): Date {
    return addMinutes(date, minutes);
  }

  deserialize(value: any): Date | null {
    return this._delegate.deserialize(value);
  }

  private getDateInNextMonth(date: Date) {
    return addMonths(date, 1);
  }

  setHour(date: Date, value: number): void {
    date.setHours(value);
  }

  setMinute(date: Date, value: number): void {
    date.setMinutes(value);
  }

  setSecond(date: Date, value: number): void {
    date.setSeconds(value);
  }
}
