import { Inject, Injectable, Optional } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatetimeAdapter } from './datetime-adapter';

/** The default hour names to use if Intl API is not available. */
const DEFAULT_HOUR_NAMES = range(24, i => String(i));

/** The default minute names to use if Intl API is not available. */
const DEFAULT_MINUTE_NAMES = range(60, i => String(i));

function range<T>(length: number, valueFunction: (index: number) => T): T[] {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}

@Injectable()
export class NativeDatetimeAdapter extends DatetimeAdapter<Date> {
  constructor(
    @Optional() @Inject(MAT_DATE_LOCALE) matDateLocale: string,
    _delegate: DateAdapter<Date>
  ) {
    super(_delegate);
    this.setLocale(matDateLocale);
  }

  clone(date: Date): Date {
    return this.createDatetime(
      this.getYear(date),
      this.getMonth(date),
      this.getDate(date),
      this.getHour(date),
      this.getMinute(date)
    );
  }

  getHour(date: Date): number {
    return date.getHours();
  }

  getMinute(date: Date): number {
    return date.getMinutes();
  }
  getSecond(date: Date): number {
    return date.getSeconds();
  }
  isInNextMonth(startDate: Date, endDate: Date): boolean {
    const nextMonth = this.getDateInNextMonth(startDate);
    return this.sameMonthAndYear(nextMonth, endDate);
  }

  createDatetime(year: number, month: number, date: number, hour: number, minute: number): Date {
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

    const result = this._createDateWithOverflow(year, month, date, hour, minute);

    // Check that the date wasn't above the upper bound for the month, causing the month to overflow
    if (result.getMonth() !== month) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }

    return result;
  }

  getFirstDateOfMonth(date: Date): Date {
    const result = new Date();
    result.setFullYear(date.getFullYear(), date.getMonth(), 1);
    return result;
  }

  getHourNames(): string[] {
    return DEFAULT_HOUR_NAMES;
  }

  getMinuteNames(): string[] {
    return DEFAULT_MINUTE_NAMES;
  }

  addCalendarYears(date: Date, years: number): Date {
    return this.addCalendarMonths(date, years * 12);
  }

  addCalendarMonths(date: Date, months: number): Date {
    let newDate = this._createDateWithOverflow(
      this.getYear(date),
      this.getMonth(date) + months,
      this.getDate(date),
      this.getHour(date),
      this.getMinute(date)
    );

    // It's possible to wind up in the wrong month if the original month has more days than the new
    // month. In this case we want to go to the last day of the desired month.
    // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
    // guarantee this.
    if (this.getMonth(newDate) !== (((this.getMonth(date) + months) % 12) + 12) % 12) {
      newDate = this._createDateWithOverflow(
        this.getYear(newDate),
        this.getMonth(newDate),
        0,
        this.getHour(date),
        this.getMinute(date)
      );
    }

    return newDate;
  }

  addCalendarDays(date: Date, days: number): Date {
    return this._createDateWithOverflow(
      this.getYear(date),
      this.getMonth(date),
      this.getDate(date) + days,
      this.getHour(date),
      this.getMinute(date)
    );
  }

  addCalendarHours(date: Date, hours: number): Date {
    return this._createDateWithOverflow(
      this.getYear(date),
      this.getMonth(date),
      this.getDate(date),
      this.getHour(date) + hours,
      this.getMinute(date)
    );
  }

  addCalendarMinutes(date: Date, minutes: number): Date {
    return this._createDateWithOverflow(
      this.getYear(date),
      this.getMonth(date),
      this.getDate(date),
      this.getHour(date),
      this.getMinute(date) + minutes
    );
  }

  toIso8601(date: Date): string {
    return (
      super.toIso8601(date) +
      'T' +
      [this._2digit(date.getUTCHours()), this._2digit(date.getUTCMinutes())].join(':')
    );
  }

  private getDateInNextMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes());
  }

  /**
   * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
   * other browsers do not. We remove them to make output consistent and because they interfere with
   * date parsing.
   * @param str The string to strip direction characters from.
   * @returns The stripped string.
   */
  private _stripDirectionalityCharacters(str: string) {
    return str.replace(/[\u200e\u200f]/g, '');
  }

  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  private _2digit(n: number) {
    return ('00' + n).slice(-2);
  }

  /** Creates a date but allows the month and date to overflow. */
  private _createDateWithOverflow(
    year: number,
    month: number,
    date: number,
    hours: number,
    minutes: number
  ) {
    const result = new Date(year, month, date, hours, minutes);

    // We need to correct for the fact that JS native Date treats years in range [0, 99] as
    // abbreviations for 19xx.
    if (year >= 0 && year < 100) {
      result.setFullYear(this.getYear(result) - 1900);
    }
    return result;
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
