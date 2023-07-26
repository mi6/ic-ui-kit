import { IcWeekDays } from "../../../../utils/types";
import {
  createDateFromISOString,
  dateMatches,
  dateInRange,
  getMonthStart,
  getMonthEnd,
  getWeekEnd,
  getWeekStart,
  yearInRange,
} from "../../ic-date-picker-utils";

describe("ic-date-picker-utils", () => {
  describe("getWeekStart", () => {
    it("should return the first day of the week - Sunday", () => {
      expect(getWeekStart(new Date(2023, 0, 1), IcWeekDays.Sunday)).toEqual(
        new Date(2023, 0, 1)
      );
    });
    it("should return the first day of the week - Monday", () => {
      expect(getWeekStart(new Date(2023, 0, 1), IcWeekDays.Monday)).toEqual(
        new Date(2022, 11, 26)
      );
    });
    it("should return the first day of the week - Tuesday", () => {
      expect(getWeekStart(new Date(2023, 0, 1), IcWeekDays.Tuesday)).toEqual(
        new Date(2022, 11, 27)
      );
    });
    it("should return the first day of the week - Wednesday", () => {
      expect(getWeekStart(new Date(2023, 0, 1), IcWeekDays.Wednesday)).toEqual(
        new Date(2022, 11, 28)
      );
    });
    it("should return the first day of the week - Thursday", () => {
      expect(getWeekStart(new Date(2023, 0, 1), IcWeekDays.Thursday)).toEqual(
        new Date(2022, 11, 29)
      );
    });
    it("should return the first day of the week - Friday", () => {
      expect(getWeekStart(new Date(2023, 0, 1), IcWeekDays.Friday)).toEqual(
        new Date(2022, 11, 30)
      );
    });
    it("should return the first day of the week - Saturday", () => {
      expect(getWeekStart(new Date(2023, 0, 1), IcWeekDays.Saturday)).toEqual(
        new Date(2022, 11, 31)
      );
    });
  });

  describe("getWeekEnd", () => {
    it("should return the last day of the week - Sunday", () => {
      expect(getWeekEnd(new Date(2023, 0, 1), IcWeekDays.Sunday)).toEqual(
        new Date(2023, 0, 7)
      );
    });
    it("should return the last day of the week - Monday", () => {
      expect(getWeekEnd(new Date(2023, 0, 1), IcWeekDays.Monday)).toEqual(
        new Date(2023, 0, 1)
      );
    });
    it("should return the last day of the week - Tuesday", () => {
      expect(getWeekEnd(new Date(2023, 0, 1), IcWeekDays.Tuesday)).toEqual(
        new Date(2023, 0, 2)
      );
    });
    it("should return the last day of the week - Wednesday", () => {
      expect(getWeekEnd(new Date(2023, 0, 1), IcWeekDays.Wednesday)).toEqual(
        new Date(2023, 0, 3)
      );
    });
    it("should return the last day of the week - Thursday", () => {
      expect(getWeekEnd(new Date(2023, 0, 1), IcWeekDays.Thursday)).toEqual(
        new Date(2023, 0, 4)
      );
    });
    it("should return the last day of the week - Friday", () => {
      expect(getWeekEnd(new Date(2023, 0, 1), IcWeekDays.Friday)).toEqual(
        new Date(2023, 0, 5)
      );
    });
    it("should return the last day of the week - Saturday", () => {
      expect(getWeekEnd(new Date(2023, 0, 1), IcWeekDays.Saturday)).toEqual(
        new Date(2023, 0, 6)
      );
    });
  });

  describe("getMonthStart", () => {
    it("should return the first day of the month", () => {
      expect(getMonthStart(new Date(2023, 0, 15))).toEqual(
        new Date(2023, 0, 1)
      );
    });
  });

  describe("getMonthEnd", () => {
    it("should return the last day of the month", () => {
      expect(getMonthEnd(new Date(2023, 1, 15))).toEqual(new Date(2023, 1, 28));
    });
  });

  describe("dateMatches", () => {
    it("should test null dates as params", () => {
      expect(dateMatches(new Date(2023, 0, 1), null)).toBe(false);
      expect(dateMatches(null, new Date(2023, 0, 1))).toBe(false);
    });
    it("should test dates match", () => {
      expect(dateMatches(new Date(2023, 0, 1), new Date(2023, 0, 1))).toBe(
        true
      );
    });
    it("should test dates don't match", () => {
      expect(dateMatches(new Date(2023, 0, 1), new Date(2023, 0, 2))).toBe(
        false
      );
    });
  });

  describe("dateInRange", () => {
    it("should test null dates as params", () => {
      expect(dateInRange(new Date(2023, 0, 1), null, null)).toBe(true);
    });
    it("should test date is in range", () => {
      expect(
        dateInRange(
          new Date(2023, 0, 1),
          new Date(2022, 0, 1),
          new Date(2024, 0, 1)
        )
      ).toBe(true);
    });
    it("should test date is in range - no min", () => {
      expect(
        dateInRange(new Date(2023, 0, 1), null, new Date(2024, 0, 1))
      ).toBe(true);
    });
    it("should test date is in range - no max", () => {
      expect(
        dateInRange(new Date(2023, 0, 1), new Date(2022, 0, 1), null)
      ).toBe(true);
    });
    it("should test date is out of range - less than min", () => {
      expect(
        dateInRange(new Date(2023, 0, 1), new Date(2024, 0, 1), null)
      ).toBe(false);
    });
    it("should test date is out of range - greater than max", () => {
      expect(
        dateInRange(
          new Date(2023, 0, 1),
          new Date(2022, 0, 1),
          new Date(2022, 5, 1)
        )
      ).toBe(false);
    });
  });

  describe("yearInRange", () => {
    it("should test null dates as params", () => {
      expect(yearInRange(null, null, null)).toBe(true);
    });
    it("should test year less than min", () => {
      expect(yearInRange(2023, new Date(2024, 0, 1), null)).toBe(false);
    });
    it("should test year more than max", () => {
      expect(
        yearInRange(2025, new Date(2022, 0, 1), new Date(2024, 0, 1))
      ).toBe(false);
    });
    it("should test year is in range", () => {
      expect(
        yearInRange(2023, new Date(2022, 0, 1), new Date(2024, 0, 1))
      ).toBe(true);
    });
  });

  describe("createDateFromISOString", () => {
    it("should test empty string", () => {
      expect(createDateFromISOString("")).toBe(null);
    });
    it("should test null", () => {
      expect(createDateFromISOString(null)).toBe(null);
    });
    it("should test undefined", () => {
      expect(createDateFromISOString(undefined)).toBe(null);
    });
    it("should test invalid format", () => {
      expect(createDateFromISOString("01-01-2023")).toBe(null);
    });
    it("should return valid date", () => {
      expect(createDateFromISOString("2023-01-01")).toEqual(
        new Date(2023, 0, 1)
      );
    });
    it("should test invalid date", () => {
      expect(createDateFromISOString("2023-01-32")).toBe(null);
    });
  });
});
