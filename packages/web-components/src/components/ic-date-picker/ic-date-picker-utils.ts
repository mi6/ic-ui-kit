export enum WeekDays {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

// export function getWeekStart(date: Date, startDay: WeekDays): Date {
//   const tmpDate = new Date(date);
//   const day = tmpDate.getDay();
//   var diff = (day < startDay ? 7 : 0) + day - startDay;

//   tmpDate.setDate(tmpDate.getDate() - diff);
//   return tmpDate;
// }

// export function getWeekEnd(date: Date, startDay: WeekDays): Date {
//   var d = new Date(date);
//   var day = d.getDay();
//   var diff = (day < startDay ? -7 : 0) + 6 - (day - startDay);

//   d.setDate(d.getDate() + diff);
//   return d;
// }

// export function getMonthStart(date: Date): Date {
//   return new Date(date.getFullYear(), date.getMonth(), 1)
// }

// export function getMonthEnd(date: Date): Date {
//   return new Date(date.getFullYear(), date.getMonth() + 1, 0);
// }

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

/**
 * Compare if date is within specified range
 */
export const dateInRange = (date: Date, min: Date, max: Date): boolean => {
  // console.log(date, min, max)
  if (min === null || max === null) {
    return true;
  }

  return date >= min && date <= max;
};

/**
 * given start and end date, return an (inclusive) array of all dates in between
 * @param start
 * @param end
 */
// function getDaysInRange(start: Date, end: Date): Date[] {
//   const days: Date[] = [];
//   let current = start;

//   while (!dateMatches(current, end)) {
//     days.push(current);
//     // current = addDays(current, 1);
//     current = new Date(current);
//     current.setDate(current.getDate() + 1);
//   }

//   days.push(current);

//   return days;
// }

/**
 * given a date, return an array of dates from a calendar perspective
 * @param date
 * @param firstDayOfWeek
 */
// export function getMonthView(date: Date, startDay: WeekDays): Date[] {
//   const start = getWeekStart(getMonthStart(date), startDay);
//   const end = getWeekEnd(getMonthEnd(date), startDay);

//   const days: Date[] = [];
//   let current = start;

//   while (!dateMatches(current, end)) {
//     days.push(current);
//     current = new Date(current);
//     current.setDate(current.getDate() + 1);
//   }

//   days.push(current);

//   return days;
// }

// export function addDays(date: Date, days: number): Date {
//   var d = new Date(date)
//   d.setDate(d.getDate() + days)
//   return d
// }
