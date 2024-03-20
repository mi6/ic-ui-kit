import { IcWeekDays } from "../../../../utils/types";
import {
  dateMatches,
  dateInRange,
  getMonthStart,
  getMonthEnd,
  getWeekEnd,
  getWeekStart,
  yearInRange,
  createDate,
  convertToDoubleDigits,
  isDateOrEpoch,
  isDayFirstFormat,
  isMonthFirstFormat,
} from "../../../../utils/date-helpers";

describe("ic-date-picker-date-helpers", () => {
  describe("isDayFirstFormat", () => {
    it("should test 21/01/2023 is day first format", () => {
      expect(isDayFirstFormat("21/01/2023")).toBe(true);
    });
    it("should test 01/21/2023 is not day first format", () => {
      expect(isDayFirstFormat("21/01/2023")).toBe(true);
    });
    it("should test 07/07/2023 is day first format", () => {
      expect(isDayFirstFormat("07/07/2023")).toBe(true);
    });

    it("should test 2023/07/07 is not month first format", () => {
      expect(isDayFirstFormat("2023/07/07")).toBe(false);
    });
    it("should test 2023-07-07 is not month first format", () => {
      expect(isDayFirstFormat("2023-07-07")).toBe(false);
    });
  });

  describe("isMonthFirstFormat", () => {
    it("should test 01/21/2023 is month first format", () => {
      expect(isMonthFirstFormat("01/21/2023")).toBe(true);
    });
    it("should test 21/01/2023 is not month first format", () => {
      expect(isMonthFirstFormat("21/01/2023")).toBe(false);
    });
    it("should test 07/07/2023 is month first format", () => {
      expect(isMonthFirstFormat("07/07/2023")).toBe(true);
    });

    it("should test 01-21-2023 is month first format", () => {
      expect(isMonthFirstFormat("01-21-2023")).toBe(true);
    });
    it("should test 21-01-2023 is not month first format", () => {
      expect(isMonthFirstFormat("21-01-2023")).toBe(false);
    });
    it("should test 07-07-2023 is month first format", () => {
      expect(isMonthFirstFormat("07-07-2023")).toBe(true);
    });

    it("should test 2023/07/07 is not month first format", () => {
      expect(isMonthFirstFormat("2023/07/07")).toBe(false);
    });
    it("should test 2023-07-07 is not month first format", () => {
      expect(isMonthFirstFormat("2023-07-07")).toBe(false);
    });
  });

  describe("convertToDoubleDigits", () => {
    it("should test convertToDoubleDigits", () => {
      expect(convertToDoubleDigits("1")).toEqual("01");
      expect(convertToDoubleDigits("2")).toEqual("02");
      expect(convertToDoubleDigits("3")).toEqual("03");
      expect(convertToDoubleDigits("4")).toEqual("04");
      expect(convertToDoubleDigits("5")).toEqual("05");
      expect(convertToDoubleDigits("6")).toEqual("06");
      expect(convertToDoubleDigits("7")).toEqual("07");
      expect(convertToDoubleDigits("8")).toEqual("08");
      expect(convertToDoubleDigits("9")).toEqual("09");
      expect(convertToDoubleDigits("10")).toEqual("10");
      expect(convertToDoubleDigits("100")).toEqual("100");
    });
  });

  describe("createDate", () => {
    it("should test createDate with Zulu time", () => {
      expect(
        createDate(new Date("28 November 2023").toISOString(), "DD/MM/YYYY")
      ).toEqual(new Date(2023, 10, 28));
    });
    it("should test createDate with dashes", () => {
      expect(createDate("01/07/2023", "DD/MM/YYYY")).toEqual(
        new Date(2023, 6, 1)
      );
    });
    it("should test createDate without double-digit day and month", () => {
      expect(createDate("1/7/2023", "DD/MM/YYYY")).toEqual(
        new Date(2023, 6, 1)
      );
    });
    it("should test createDate with year first format", () => {
      expect(createDate("2023/07/01", "YYYY/MM/DD")).toEqual(
        new Date(2023, 6, 1)
      );
    });
    it("should test createDate with month first format - ambiguous date", () => {
      expect(createDate("01/07/2023", "MM/DD/YYYY")).toEqual(
        new Date(2023, 0, 7)
      );
    });
    it("should test createDate with month first format - unambiguous date", () => {
      expect(createDate("01/13/2023", "MM/DD/YYYY")).toEqual(
        new Date(2023, 0, 13)
      );
    });
    it("should test createDate with month first format - unambiguous date - month too high", () => {
      expect(createDate("13/01/2023", "MM/DD/YYYY")).toEqual(
        new Date(2023, 0, 13)
      );
    });
    it("should test createDate with date object", () => {
      expect(createDate(new Date(2023, 0, 13), "DD/MM/YYYY")).toEqual(
        new Date(2023, 0, 13)
      );
    });
    it("should test createDate with epoch value", () => {
      expect(createDate("500000000000", "DD/MM/YYYY")).toBeNaN;
    });
  });

  describe("isDateOrEpoch", () => {
    it("should test isDateOrEpoch with string", () => {
      expect(isDateOrEpoch("01/01/1970")).toBe(false);
    });
    it("should test isDateOrEpoch with date", () => {
      expect(isDateOrEpoch(new Date(2023, 0, 1))).toBe(true);
    });
    it("should test isDateOrEpoch with epoch", () => {
      expect(isDateOrEpoch(new Date(500000000000))).toBe(true);
    });
  });
});

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
});
