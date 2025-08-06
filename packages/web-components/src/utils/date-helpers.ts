import { IcDateFormat, IcWeekDays } from "../utils/types";

export const isMonthFirstFormat = (dateString: string): boolean => {
  const monthFirstFormat =
    /^(0[1-9]|1[0-2])(\/|-)(0[1-9]|[12][0-9]|3[01])(\/|-)\d{4}$/;
  return monthFirstFormat.test(dateString);
};

export const isDayFirstFormat = (dateString: string): boolean => {
  const dayFirstFormat =
    /^(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|1[0-2])(\/|-)\d{4}$/;
  return dayFirstFormat.test(dateString);
};

export const createDate = (
  date: string | Date,
  dateFormat: IcDateFormat
): Date => {
  let newDate = new Date();
  if (isDateOrEpoch(date)) {
    newDate = typeof date === "string" ? new Date(date) : date;
  } else if (typeof date === "string") {
    const dateArray = splitStringDate(date, dateFormat);
    const year = Number(dateArray[0]);
    const month = Number(dateArray[1]) - 1;
    const day = Number(dateArray[2]);
    newDate = new Date(year, month, day);
  }
  return newDate;
};

export const isDateOrEpoch = (date: Date | string): boolean =>
  date instanceof Date || !isNaN(+new Date(+date));

export const extractDateFromZuluDateTime = (zuluDateTime: string): string =>
  zuluDateTime.slice(0, zuluDateTime.indexOf("T"));

export const splitStringDate = (
  date: string,
  dateFormat: IcDateFormat
): string[] => {
  // returns an array where item 1 is year, item 2 is month, item 3 is day
  if (date.includes("T") && date.includes("Z"))
    return extractDateFromZuluDateTime(date).split("-");

  let newDate: string[] = [];

  const splitDateWithSlashes = date.replace(/-/g, "/").split("/");
  if (splitDateWithSlashes.length > 1) {
    const dateParts = splitDateWithSlashes.map((part) =>
      part.length === 1 ? convertToDoubleDigits(part) : part
    ); // pad any values to 2 characters

    if (dateParts[0].length === 4) {
      newDate = [dateParts[0], dateParts[1], dateParts[2]];
    } else {
      newDate = [dateParts[2], dateParts[1], dateParts[0]];

      if (
        isMonthFirstFormat(dateParts.join("/")) &&
        dateFormat.charAt(0) === "M"
      ) {
        newDate = [dateParts[2], dateParts[0], dateParts[1]];
      }
    }
  }

  return newDate;
};

export const convertToDoubleDigits = (value: string | number): string =>
  +value < 10 ? `0${value}` : value.toString();

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
export const dateMatches = (a: Date | null, b: Date | null): boolean =>
  a !== null &&
  b !== null &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const clampDate = (
  date: Date,
  min: Date | null,
  max: Date | null
): Date => {
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
export const dateInRange = (
  date: Date,
  min: Date | null,
  max: Date | null
): boolean => clampDate(date, min, max) === date;

export const yearInRange = (
  year: number | null,
  min: Date | null,
  max: Date | null
): boolean =>
  !year ||
  (!(min && year < min.getFullYear()) && !(max && year > max.getFullYear()));
