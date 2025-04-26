export function mtxGetSeconds<D>(date: D): number {
  let seconds: number = 0;
  if (date) {
    const checkDate = <any>date;
    if (checkDate.getSeconds) {
      //Date
      seconds = checkDate.getSeconds();
    } else if (checkDate.seconds) {
      //Moment
      seconds = checkDate.seconds();
    }
  }

  return seconds;
}

export function mtxSetSeconds<D>(date: D, seconds: number): D {
  if (date && HasValue(seconds)) {
    const checkDate = <any>date;
    if (checkDate.setSeconds) {
      //Date
      checkDate.setSeconds(seconds);
    } else if (checkDate.seconds) {
      //Moment
      seconds = checkDate.seconds(seconds);
    }
  }
  return date;
}

export function mtxSameSeconds<D>(date1: D, date2: D): boolean {
  return mtxGetSeconds(date1) == mtxGetSeconds(date2);
}

/**
 * When adding seconds, returns a new date object without changing the old one
 * @param date
 * @param seconds
 * @returns
 */
export function mtxAddSeconds<D>(date: D, seconds: number): D {
  if (date && HasValue(seconds)) {
    const checkDate = <any>date;
    if (checkDate.getSeconds && checkDate.setSeconds) {
      //Date
      const newDate = new Date(checkDate);
      newDate.setSeconds(checkDate.getSeconds() + seconds);
      return <D>newDate;
    } else if (checkDate.add && checkDate.clone) {
      //Moment
      const newDate = checkDate.clone();
      newDate.add(seconds, 'seconds');
      return <D>newDate;
    }
  }
  return date;
}

 function HasValue(value: any): boolean {
  return value || value == '0' ? true : false;
}