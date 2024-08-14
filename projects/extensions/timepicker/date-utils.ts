interface LimitTimes {
  [key:string]: number
}

export const LIMIT_TIMES: LimitTimes = {
  minHour: 0,
  maxHour: 24,
  minMinute: 0,
  maxMinute: 60,
  minSecond: 0,
  maxSecond: 60,
  meridian: 12
};

export const MERIDIANS = {
  AM: 'AM',
  PM: 'PM'
};

export const HOURS = [
  { value: 0, viewValue: "00" },
  { value: 1, viewValue: "01" },
  { value: 2, viewValue: "02" },
  { value: 3, viewValue: "03" },
  { value: 4, viewValue: "04" },
  { value: 5, viewValue: "05" },
  { value: 6, viewValue: "06" },
  { value: 7, viewValue: "07" },
  { value: 8, viewValue: "08" },
  { value: 9, viewValue: "09" },
  { value: 10, viewValue: "10" },
  { value: 11, viewValue: "11" },
  { value: 12, viewValue: "12" },
  { value: 13, viewValue: "13" },
  { value: 14, viewValue: "14" },
  { value: 15, viewValue: "15" },
  { value: 16, viewValue: "16" },
  { value: 17, viewValue: "17" },
  { value: 18, viewValue: "18" },
  { value: 19, viewValue: "19" },
  { value: 20, viewValue: "20" },
  { value: 21, viewValue: "21" },
  { value: 22, viewValue: "22" },
  { value: 23, viewValue: "23" },
];

export const MINUTES = [
  { value: 0, viewValue: "00" },
  { value: 15, viewValue: "15" },
  { value: 3, viewValue: "30" },
  { value: 45, viewValue: "45" },

]
export type TimeUnits = 'hour' |'minute'|'second';

export const DEFAULT_STEP = 1;
export const NUMERIC_REGEX = /[^0-9]/g;

export const PATTERN_INPUT_HOUR = /^(2[0-3]|[0-1][0-9]|[0-9])$/;
export const PATTERN_INPUT_MINUTE = /^([0-5][0-9]|[0-9])$/;
export const PATTERN_INPUT_SECOND = /^([0-5][0-9]|[0-9])$/;

export function formatTwoDigitTimeValue(val: number) {
  const txt = val.toString();
  console.log('da', txt);
  return txt.length > 1 ? txt : `0${txt}`;
}

export function createMissingDateImplError(provider: string) {
  return Error(
    `NgxMatTimePicker: No provider found for ${provider}. You must import one of the following ` +
    `modules at your application root: NgxMatNativeDateModule, NgxMatMomentModule, or provide a ` +
    `custom implementation.`);
}

/** Formats a range of years. */
export function formatYearRange(start: string, end: string): string {
  return `${start} \u2013 ${end}`;
}
