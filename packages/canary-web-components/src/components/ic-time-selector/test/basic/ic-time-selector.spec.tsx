import { TimeSelector } from "../../ic-time-selector";
import { newSpecPage } from "@stencil/core/testing";

jest.useFakeTimers();

function createMockElement({
  top,
  height,
  key,
  classList = [],
  textContent = "",
}: {
  top: number;
  height: number;
  key: string;
  classList?: string[];
  textContent?: string;
}) {
  return {
    getBoundingClientRect: () => ({ top, height }),
    getAttribute: (attr: string) => (attr === "key" ? key : null),
    classList: {
      contains: (cls: string) => classList.includes(cls),
    },
    textContent,
  };
}

const TIME_SELECTOR_ITEM = "ic-time-selector-item";

describe("ic-time-selector", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render small", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector size="small"></ic-time-selector>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render large", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector size="large"></ic-time-selector>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with time format", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector time-format="HH:MM"></ic-time-selector>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with time period", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector time-period="12"></ic-time-selector>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with default value - string", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector value="15:30:45"></ic-time-selector>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with default value - zulu time", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector value="15:30:45Z"></ic-time-selector>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with default value - date", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    page.rootInstance.value = new Date("2023-01-01T15:30:45");

    expect(page.root).toMatchSnapshot();
  });

  it("should render with min and max times", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector min="12:00" max="18:00"></ic-time-selector>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled times", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    page.rootInstance.disableTimes = [
      "15:00",
      { start: "16:00", end: "16:30" },
    ];

    expect(page.root).toMatchSnapshot();
  });

  it("should getColumnValues correctly for 24 hour time", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    expect(page.rootInstance.getColumnValues("hour")).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23,
    ]);
    expect(page.rootInstance.getColumnValues("minute")).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59,
    ]);
    expect(page.rootInstance.getColumnValues("second")).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59,
    ]);
  });

  it("should getColumnValues correctly for 12 hour time", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector time-period="12"></ic-time-selector>`,
    });

    expect(page.rootInstance.getColumnValues("hour")).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
    expect(page.rootInstance.getColumnValues("minute")).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59,
    ]);
    expect(page.rootInstance.getColumnValues("second")).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59,
    ]);
    expect(page.rootInstance.getColumnValues("period")).toEqual(["AM", "PM"]);
  });

  it("should call scrollTo on selected item", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector value="15:30:45"></ic-time-selector>`,
    });

    const mockScrollTo = jest.fn();
    page.rootInstance.el.shadowRoot = {
      querySelectorAll: jest.fn(() => [
        {
          querySelectorAll: jest.fn(() => [
            { classList: { contains: () => true }, offsetTop: 100 },
          ]),
          querySelector: jest.fn(() => ({ height: "50" })),
          scrollTo: mockScrollTo,
        },
      ]),
    };

    page.rootInstance.scrollSelectedItem("hour");

    expect(mockScrollTo).toHaveBeenCalled();
  });

  it("should set selectedHour, selectedMinute, selectedSecond and selectedPeriod state when handleSelect is called", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector time-period="12"></ic-time-selector>`,
    });

    page.rootInstance.handleSelect("hour", 10);
    page.rootInstance.handleSelect("minute", 20);
    page.rootInstance.handleSelect("second", 30);
    page.rootInstance.handleSelect("period", "PM");
    expect(page.rootInstance.selectedHour).toBe(10);
    expect(page.rootInstance.selectedMinute).toBe(20);
    expect(page.rootInstance.selectedSecond).toBe(30);
    expect(page.rootInstance.selectedPeriod).toBe("PM");
  });

  it("returns selectedHour when type is 'hour'", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    page.rootInstance.selectedHour = 7;
    expect(page.rootInstance.getSelectedValue("hour")).toBe(7);
  });

  it("returns selectedMinute when type is 'minute'", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    page.rootInstance.selectedMinute = 7;
    expect(page.rootInstance.getSelectedValue("minute")).toBe(7);
  });

  it("returns selectedSecond when type is 'second'", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    page.rootInstance.selectedSecond = 7;
    expect(page.rootInstance.getSelectedValue("second")).toBe(7);
  });

  it("returns selectedPeriod when type is 'period'", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector time-period="12"></ic-time-selector>`,
    });

    page.rootInstance.selectedPeriod = "PM";
    expect(page.rootInstance.getSelectedValue("period")).toBe("PM");
  });

  it("updates minTime when min changes", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    page.rootInstance.min = "12:34:56";
    await page.waitForChanges();

    expect(page.rootInstance.minTime).toBeInstanceOf(Date);
    expect(page.rootInstance.minTime.getHours()).toBe(12);
    expect(page.rootInstance.minTime.getMinutes()).toBe(34);
    expect(page.rootInstance.minTime.getSeconds()).toBe(56);
  });

  it("updates maxTime when max changes", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    page.rootInstance.max = "12:34:56";
    await page.waitForChanges();

    expect(page.rootInstance.maxTime).toBeInstanceOf(Date);
    expect(page.rootInstance.maxTime.getHours()).toBe(12);
    expect(page.rootInstance.maxTime.getMinutes()).toBe(34);
    expect(page.rootInstance.maxTime.getSeconds()).toBe(56);
  });

  it("should focus the seconds column when Tab+Shift is pressed on clear button", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    const clearBtn = page.root!.shadowRoot!.querySelector(
      ".ic-time-selector-clear-btn"
    );

    const focusHour = jest.fn();
    const focusMinute = jest.fn();
    const focusSecond = jest.fn();
    const columns = [
      { focus: focusHour },
      { focus: focusMinute },
      { focus: focusSecond },
    ];

    page.root!.shadowRoot!.querySelectorAll = () =>
      Object.assign([...columns], {
        item: (index: number) => columns[index],
        length: columns.length,
        forEach: (callback: (value: any, key: number) => void) =>
          columns.forEach(callback),
      }) as any;

    const event = new KeyboardEvent("keydown", {
      key: "Tab",
      shiftKey: true,
      bubbles: true,
    });
    clearBtn?.dispatchEvent(event);

    expect(focusSecond).toHaveBeenCalled();
  });

  it("should convert 24 hour time to 12 hour time when setTimeParts is called", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector time-period="12"></ic-time-selector>`,
    });

    page.rootInstance.setTimeParts(0, 0, 0);
    expect(page.rootInstance.selectedHour).toBe(12);
    expect(page.rootInstance.selectedPeriod).toBe("AM");

    page.rootInstance.setTimeParts(12, 0, 0);
    expect(page.rootInstance.selectedHour).toBe(12);
    expect(page.rootInstance.selectedPeriod).toBe("PM");

    page.rootInstance.setTimeParts(15, 0, 0);
    expect(page.rootInstance.selectedHour).toBe(3);
    expect(page.rootInstance.selectedPeriod).toBe("PM");

    page.rootInstance.setTimeParts(11, 0, 0);
    expect(page.rootInstance.selectedHour).toBe(11);
    expect(page.rootInstance.selectedPeriod).toBe("AM");
  });

  it("should return true if time is within disabled time range", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    page.rootInstance.disableTimes = [{ start: "16:00", end: "16:30" }];

    expect(page.rootInstance.isTimeDisabled(16, 15, 0)).toBe(true);
    expect(page.rootInstance.isTimeDisabled(15, 59, 59)).toBe(false);
    expect(page.rootInstance.isTimeDisabled(16, 30, 1)).toBe(false);
  });

  it("returns the highlighted value", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    const highlightTop = { getBoundingClientRect: () => ({ bottom: 100 }) };
    const highlightBottom = { getBoundingClientRect: () => ({ top: 200 }) };

    Object.defineProperty(page.rootInstance, "el", {
      get: () => ({
        shadowRoot: {
          querySelector: (selector: string) => {
            if (selector === ".ic-time-selector-highlight-top")
              return highlightTop;
            if (selector === ".ic-time-selector-highlight-bottom")
              return highlightBottom;
            return null;
          },
        },
      }),
    });

    const hourInRange = createMockElement({
      top: 120,
      height: 20,
      key: "hour-val-5",
      classList: [TIME_SELECTOR_ITEM],
      textContent: "05",
    });
    const hourOutOfRange = createMockElement({
      top: 80,
      height: 20,
      key: "hour-val-1",
      classList: [TIME_SELECTOR_ITEM],
      textContent: "01",
    });
    const scrollRow = createMockElement({
      top: 0,
      height: 0,
      key: "",
      classList: ["ic-time-selector-scroll-row"],
    });

    const col = {
      querySelectorAll: () => [hourInRange, hourOutOfRange, scrollRow],
    };

    const hour = page.rootInstance.getHighlightedValue("hour", col as any);
    expect(hour).toBe(5);

    const minuteInRange = createMockElement({
      top: 120,
      height: 20,
      key: "minute-val-5",
      classList: [TIME_SELECTOR_ITEM],
      textContent: "05",
    });
    const minuteOutOfRange = createMockElement({
      top: 80,
      height: 20,
      key: "minute-val-1",
      classList: [TIME_SELECTOR_ITEM],
      textContent: "01",
    });

    const minuteCol = {
      querySelectorAll: () => [minuteInRange, minuteOutOfRange, scrollRow],
    };

    const minute = page.rootInstance.getHighlightedValue(
      "minute",
      minuteCol as any
    );
    expect(minute).toBe(5);

    const secondInRange = createMockElement({
      top: 120,
      height: 20,
      key: "second-val-5",
      classList: [TIME_SELECTOR_ITEM],
      textContent: "05",
    });
    const secondOutOfRange = createMockElement({
      top: 80,
      height: 20,
      key: "second-val-1",
      classList: [TIME_SELECTOR_ITEM],
      textContent: "01",
    });

    const secondCol = {
      querySelectorAll: () => [secondInRange, secondOutOfRange, scrollRow],
    };

    const second = page.rootInstance.getHighlightedValue(
      "second",
      secondCol as any
    );
    expect(second).toBe(5);
  });

  it("should return correct highlighted value for period type", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector time-period="12"></ic-time-selector>`,
    });

    Object.defineProperty(page.rootInstance, "el", {
      get: () => ({
        shadowRoot: {
          querySelector: (selector: string) => {
            if (selector === ".ic-time-selector-highlight-top")
              return { getBoundingClientRect: () => ({ bottom: 100 }) };
            if (selector === ".ic-time-selector-highlight-bottom")
              return { getBoundingClientRect: () => ({ top: 200 }) };
            return null;
          },
        },
      }),
    });

    const periodItemKey = {
      getBoundingClientRect: () => ({ top: 120, height: 20 }),
      getAttribute: (attr: string) => (attr === "key" ? "period-val-AM" : null),
      classList: { contains: () => false },
      textContent: "AM",
    };
    const col = { querySelectorAll: () => [periodItemKey] };
    expect(page.rootInstance.getHighlightedValue("period", col as any)).toBe(
      "AM"
    );

    const periodItemText = {
      getBoundingClientRect: () => ({ top: 120, height: 20 }),
      getAttribute: () => null,
      classList: { contains: () => false },
      textContent: "PM",
    };
    const col2 = { querySelectorAll: () => [periodItemText] };
    expect(page.rootInstance.getHighlightedValue("period", col2 as any)).toBe(
      "PM"
    );
  });

  it("should emit icChange with correct value on confirm", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector time-format="HH:MM:SS" time-period="12"></ic-time-selector>`,
    });

    page.rootInstance.selectedHour = 10;
    page.rootInstance.selectedMinute = 30;
    page.rootInstance.selectedSecond = 45;
    page.rootInstance.selectedPeriod = "AM";

    const spy = jest.spyOn(page.rootInstance.icChange, "emit");

    page.rootInstance.handleConfirmClick();

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        value: expect.any(Date),
        timeString: "10:30:45 AM",
        timeObject: {
          hour: "10",
          minute: "30",
          second: "45",
          period: "AM",
        },
      })
    );
  });

  it("should emit icChange with correct value on confirm with HH:MM time format", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector time-format="HH:MM"></ic-time-selector>`,
    });

    page.rootInstance.selectedHour = 10;
    page.rootInstance.selectedMinute = 30;

    const spy = jest.spyOn(page.rootInstance.icChange, "emit");

    page.rootInstance.handleConfirmClick();

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        value: expect.any(Date),
        timeString: "10:30",
        timeObject: {
          hour: "10",
          minute: "30",
          second: null,
        },
      })
    );
  });

  it("should emit icChange with correct value on confirm when not all values are selected", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector time-format="HH:MM:SS" time-period="12"></ic-time-selector>`,
    });

    page.rootInstance.selectedMinute = 30;
    page.rootInstance.selectedPeriod = "AM";

    const spy = jest.spyOn(page.rootInstance.icChange, "emit");

    page.rootInstance.handleConfirmClick();

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        value: null,
        timeString: null,
        timeObject: {
          hour: null,
          minute: "30",
          second: null,
          period: "AM",
        },
      })
    );
  });

  it("should select highlighted on ArrowRight", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    const selectSpy = jest.spyOn(page.rootInstance, "handleSelect");

    const event = new KeyboardEvent("keydown", { key: "ArrowRight" });
    page.rootInstance.handleColumnKeyDown("hour", event);

    expect(selectSpy).toHaveBeenCalled();
  });

  it("should select highlighted on Tab", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    const selectSpy = jest.spyOn(page.rootInstance, "handleSelect");

    const event = new KeyboardEvent("keydown", { key: "Tab" });
    page.rootInstance.handleColumnKeyDown("hour", event);

    expect(selectSpy).toHaveBeenCalled();
  });

  it("should move focus to previous column on ArrowLeft", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    const focusMock = jest.fn();
    const columns = [{ focus: focusMock }, { focus: jest.fn() }];
    page.rootInstance.el.shadowRoot = {
      querySelectorAll: () => columns,
    } as any;

    const event = new KeyboardEvent("keydown", { key: "ArrowLeft" });
    page.rootInstance.handleColumnKeyDown("minute", event);

    expect(focusMock).toHaveBeenCalled();
  });

  it("should move focus to previous column on Shift Tab", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    const focusMock = jest.fn();
    const columns = [{ focus: focusMock }, { focus: jest.fn() }];
    page.rootInstance.el.shadowRoot = {
      querySelectorAll: () => columns,
    } as any;

    const event = new KeyboardEvent("keydown", { key: "Tab", shiftKey: true });
    page.rootInstance.handleColumnKeyDown("minute", event);

    expect(focusMock).toHaveBeenCalled();
  });

  it("should increment value on ArrowDown", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    page.rootInstance.selectedHour = 1;
    const selectSpy = jest.spyOn(page.rootInstance, "handleSelect");

    const event = new KeyboardEvent("keydown", { key: "ArrowDown" });
    page.rootInstance.handleColumnKeyDown("hour", event);

    expect(selectSpy).toHaveBeenCalledWith("hour", 2);
  });

  it("should decrement value on ArrowUp", async () => {
    const page = await newSpecPage({
      components: [TimeSelector],
      html: `<ic-time-selector></ic-time-selector>`,
    });

    page.rootInstance.selectedHour = 2;
    const selectSpy = jest.spyOn(page.rootInstance, "handleSelect");

    const event = new KeyboardEvent("keydown", { key: "ArrowUp" });
    page.rootInstance.handleColumnKeyDown("hour", event);

    expect(selectSpy).toHaveBeenCalledWith("hour", 1);
  });
});
