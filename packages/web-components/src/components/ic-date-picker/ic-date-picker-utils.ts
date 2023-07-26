import { IcWeekDays } from "../../utils/types";

const IC_ISO_DATE_FORMAT = /^(\d{4})-(\d{2})-(\d{2})$/;

export const createDateFromISOString = (isoDate: string): Date => {
  if (isoDate === null || isoDate === "" || isoDate === undefined) {
    return null;
  }

  const matches = isoDate.match(IC_ISO_DATE_FORMAT);

  if (matches) {
    return createDate(matches[1], matches[2], matches[3]);
  }

  return null;
};

export const createDate = (year: string, month: string, day: string): Date => {
  const dayInt = parseInt(day, 10);
  const monthInt = parseInt(month, 10);
  const yearInt = parseInt(year, 10);

  const isValid =
    Number.isInteger(yearInt) && // all parts should be integers
    Number.isInteger(monthInt) &&
    Number.isInteger(dayInt) &&
    monthInt > 0 && // month must be 1-12
    monthInt <= 12 &&
    dayInt > 0 && // day must be 1-31
    dayInt <= 31 &&
    yearInt > 0;

  if (isValid) {
    return new Date(yearInt, monthInt - 1, dayInt);
  }
  return null;
};

export const getWeekStart = (date: Date, startDay: IcWeekDays): Date => {
  const tmpDate = new Date(date);
  const day = tmpDate.getDay();
  const diff = (day < startDay ? 7 : 0) + day - startDay;

  tmpDate.setDate(tmpDate.getDate() - diff);
  return tmpDate;
};

export const getWeekEnd = (date: Date, startDay: IcWeekDays): Date => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = (day < startDay ? -7 : 0) + 6 - (day - startDay);

  d.setDate(d.getDate() + diff);
  return d;
};

export const getMonthStart = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getMonthEnd = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

/**
 * Compare if two dates are equal exactly equal
 */
export const dateMatches = (a: Date, b: Date): boolean => {
  if (a === null || b === null) {
    return false;
  }

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

export const clampDate = (date: Date, min: Date, max: Date): Date => {
  const time = date.getTime();
  if (min !== null && time < min.getTime()) {
    return min;
  }
  if (max !== null && time > max.getTime()) {
    return max;
  }
  return date;
};

/**
 * Compare if date is within specified range
 */
export const dateInRange = (date: Date, min: Date, max: Date): boolean => {
  return clampDate(date, min, max) === date;
  // if (min === null && max === null) {
  //   return true;
  // } else if (min !== null && max !== null) {
  //   return date >= min && date <= max;
  // } else if (min !== null) {
  //   return date >= min;
  // } else {
  //   return date <= max;
  // }
};

export const yearInRange = (year: number, min: Date, max: Date): boolean => {
  let allowed = true;
  if (year !== null) {
    if (min !== null && year < min.getFullYear()) {
      allowed = false;
    }
    if (allowed && max !== null && year > max.getFullYear()) {
      allowed = false;
    }
  }
  return allowed;
};
