import { IcDateFormat } from "../utils/types";

export const isMonthFirstFormat = (dateString: string) => {
  const monthFirstFormat =
    /^(0[1-9]|1[0-2])(\/|-)(0[1-9]|[12][0-9]|3[01])(\/|-)\d{4}$/;
  return monthFirstFormat.test(dateString);
};

export const isDayFirstFormat = (dateString: string) => {
  const dayFirstFormat =
    /^(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|1[0-2])(\/|-)\d{4}$/;
  return dayFirstFormat.test(dateString);
};

export const createDate = (date: string | Date, dateFormat: IcDateFormat) => {
  let newDate;
  if (isDateOrEpoch(date)) {
    if (typeof date === "string") {
      newDate = new Date(date);
    } else {
      newDate = date;
    }
  } else if (typeof date === "string") {
    const dateArray = splitStringDate(date, dateFormat);
    const year = Number(dateArray[0]);
    const month = Number(dateArray[1]) - 1;
    const day = Number(dateArray[2]);
    newDate = new Date(year, month, day);
  }
  return newDate;
};

export const isDateOrEpoch = (date: Date | string) => {
  return date instanceof Date || !isNaN(+new Date(+date));
};

export const extractDateFromZuluDateTime = (zuluDateTime: string) =>
  zuluDateTime.slice(0, zuluDateTime.indexOf("T"));

export const splitStringDate = (
  date: string,
  dateFormat: IcDateFormat
): string[] => {
  // returns an array where item 1 is year, item 2 is month, item 3 is day
  if (date.includes("T") && date.includes("Z")) {
    const nextDate = extractDateFromZuluDateTime(date);
    return nextDate.split("-");
  }

  let newDate: string[] = [];

  const dateWithSlashes = date.replace(/-/g, "/");
  if (dateWithSlashes.split("/").length > 1) {
    const dateParts = dateWithSlashes.split("/");

    // pad any values to 2 characters
    dateParts.forEach((d, i) => {
      if (d.length === 1) {
        dateParts[i] = convertToDoubleDigits(d);
      }
    });
    if (dateParts[0].length === 4) {
      newDate = [dateParts[0], dateParts[1], dateParts[2]];
    } else {
      const newDateStr = dateParts.join("/");
      const validDayFirst = isDayFirstFormat(newDateStr);
      const validMonthFirst = isMonthFirstFormat(newDateStr);
      if (validDayFirst && validMonthFirst) {
        if (dateFormat.charAt(0) === "M") {
          newDate = [dateParts[2], dateParts[0], dateParts[1]];
        } else {
          newDate = [dateParts[2], dateParts[1], dateParts[0]];
        }
      } else if (validMonthFirst) {
        newDate = [dateParts[2], dateParts[0], dateParts[1]];
      } else {
        newDate = [dateParts[2], dateParts[1], dateParts[0]];
      }
    }
  }

  return newDate;
};

export const convertToDoubleDigits = (value: string | number): string => {
  if (+value < 10) {
    return `0${value}`;
  }
  return value.toString();
};
