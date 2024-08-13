import { DateAdapter } from '@angular/material/core';

export abstract class DatetimeAdapter<D> extends DateAdapter<D> {
  constructor(protected _delegate: DateAdapter<D>) {
    super();
  }

  abstract getHour(date: D): number;

  abstract getMinute(date: D): number;
  /**
   * Gets the second component of the given date.
   * @param date The date to extract the month from.
   * @returns The second component.
   */
  abstract getSecond(date: D): number;

  abstract getFirstDateOfMonth(date: D): D;

  abstract isInNextMonth(startDate: D, endDate: D): boolean;

  abstract getHourNames(): string[];

  abstract getMinuteNames(): string[];

  abstract addCalendarHours(date: D, months: number): D;

  abstract addCalendarMinutes(date: D, minutes: number): D;

  abstract createDatetime(
    year: number,
    month: number,
    date: number,
    hour: number,
    minute: number
  ): D;
  /**
   * Set the hour component of the given date.
   * @param date The date to extract the month from.
   * @param value The value to set.
   */
  abstract setHour(date: D, value: number): void;

  /**
   * Set the second component of the given date.
   * @param date The date to extract the month from.
   * @param value The value to set.
   */
  abstract setMinute(date: D, value: number): void;

  /**
   * Set the second component of the given date.
   * @param date The date to extract the month from.
   * @param value The value to set.
   */
  abstract setSecond(date: D, value: number): void;
  getValidDateOrNull(obj: any): D | null {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }

  compareDatetime(first: D, second: D, respectMinutePart: boolean = true): number | boolean {
    return (
      this.compareDate(first, second) ||
      this.getHour(first) - this.getHour(second) ||
      (respectMinutePart && this.getMinute(first) - this.getMinute(second))
    );
  }

  sameDatetime(first: D | null, second: D | null): boolean {
    if (first && second) {
      const firstValid = this.isValid(first);
      const secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDatetime(first, second);
      }
      return firstValid === secondValid;
    }
    return first === second;
  }

  sameYear(first: D, second: D) {
    return first && second && this.getYear(first) === this.getYear(second);
  }

  sameDay(first: D, second: D) {
    return (
      first &&
      second &&
      this.getDate(first) === this.getDate(second) &&
      this.sameMonthAndYear(first, second)
    );
  }

  sameHour(first: D, second: D) {
    return (
      first && second && this.getHour(first) === this.getHour(second) && this.sameDay(first, second)
    );
  }

  sameMinute(first: D, second: D) {
    return (
      first &&
      second &&
      this.getMinute(first) === this.getMinute(second) &&
      this.sameHour(first, second)
    );
  }

  sameMonthAndYear(first: D | null, second: D | null): boolean {
    if (first && second) {
      const firstValid = this.isValid(first);
      const secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !(
          this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second)
        );
      }
      return firstValid === secondValid;
    }
    return first === second;
  }

  // delegate
  clone(date: D): D {
    return this._delegate.clone(date);
  }

  addCalendarYears(date: D, years: number): D {
    return this._delegate.addCalendarYears(date, years);
  }

  addCalendarMonths(date: D, months: number): D {
    return this._delegate.addCalendarMonths(date, months);
  }

  addCalendarDays(date: D, days: number): D {
    return this._delegate.addCalendarDays(date, days);
  }

  getYear(date: D): number {
    return this._delegate.getYear(date);
  }

  getMonth(date: D): number {
    return this._delegate.getMonth(date);
  }

  getDate(date: D): number {
    return this._delegate.getDate(date);
  }

  getDayOfWeek(date: D): number {
    return this._delegate.getDayOfWeek(date);
  }

  getMonthNames(style: any): string[] {
    return this._delegate.getMonthNames(style);
  }

  getDateNames(): string[] {
    return this._delegate.getDateNames();
  }

  getDayOfWeekNames(style: any): string[] {
    return this._delegate.getDayOfWeekNames(style);
  }

  getYearName(date: D): string {
    return this._delegate.getYearName(date);
  }

  getFirstDayOfWeek(): number {
    return this._delegate.getFirstDayOfWeek();
  }

  getNumDaysInMonth(date: D): number {
    return this._delegate.getNumDaysInMonth(date);
  }

  createDate(year: number, month: number, date: number): D {
    return this._delegate.createDate(year, month, date);
  }

  today(): D {
    return this._delegate.today();
  }

  parse(value: any, parseFormat: any): D | null {
    return this._delegate.parse(value, parseFormat);
  }

  format(date: D, displayFormat: any): string {
    return this._delegate.format(date, displayFormat);
  }

  toIso8601(date: D): string {
    return this._delegate.toIso8601(date);
  }

  isDateInstance(obj: any): boolean {
    return this._delegate.isDateInstance(obj);
  }

  isValid(date: D): boolean {
    return this._delegate.isValid(date);
  }

  invalid(): D {
    return this._delegate.invalid();
  }

  clampDate(date: D, min?: D | null, max?: D | null): D {
    if (min && (this.compareDatetime(date, min) as number) < 0) {
      return min;
    }
    if (max && (this.compareDatetime(date, max) as number) > 0) {
      return max;
    }
    return date;
  }
}
