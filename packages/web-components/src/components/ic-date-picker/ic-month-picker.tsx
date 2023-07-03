/* istanbul ignore file */
import { h, FunctionalComponent } from "@stencil/core";
// import { DAY_NAMES, MONTH_NAMES } from "../../utils/helpers";
// import {
//   IcDateInputMonths,
//   stringEnumToArray,
// } from "../../utils/helpers";
import { IcDatePickerSizes } from "./ic-date-picker.types";

export type MonthPickerProps = {
  size: IcDatePickerSizes;
  focussedMonth: number;
  monthInView: number;
  // hidden: boolean;
  monthNames: string[];
  // day: Date;
  onSelectMonth: (month: number) => void;
  onKeyDown: (ev: KeyboardEvent) => void;
  // focussedMonthRef?: (element: HTMLIcButtonElement) => void;
  // selected: boolean;
  // disabled: boolean
  // inRange: boolean
  // isSelected: boolean
  // dateFormatter: Intl.DateTimeFormat
  // onDaySelect: (event: MouseEvent, day: Date) => void
  // onKeyboardNavigation: (event: KeyboardEvent) => void
  // focusedDayRef?: (element: HTMLElement) => void
};

export const MonthPicker: FunctionalComponent<MonthPickerProps> = ({
  size,
  focussedMonth,
  monthInView,
  onSelectMonth,
  // hidden,
  monthNames,
  onKeyDown,
  // focussedMonthRef?,

  // onDaySelect,
  // onKeyboardNavigation,
  // focusedDayRef,
  // disabled,
  // inRange,
  // isSelected,
  // dateFormatter,
}) => {
  // const isToday = dateMatches(day, today)
  // const isMonth = isEqualMonth(day, focusedDay)
  // const isFocused = isEqual(day, focusedDay)
  // const isOutsideRange = !inRange

  const handleMonthClick = (ev: MouseEvent): void => {
    const button = ev.target as HTMLElement;
    // console.log(button.getAttribute("data-month"));
    // this.monthInView = Number(button.getAttribute("data-month"));
    onSelectMonth(Number(button.getAttribute("data-month")));
  };
  // const disabled = false;

  // const months = stringEnumToArray(IcDateInputMonths);
  const buttonSize = size === "small" ? "small" : "default";

  let focussedMonthEl: HTMLIcButtonElement;

  // console.log(focussedMonthEl)

  setTimeout(() => {
    focussedMonthEl.setFocus(), 100;
  });

  return (
    <div
      class={{
        "month-picker": true,
        // hidden: hidden,
      }}
    >
      {monthNames.map((month, index) => {
        const current = monthInView === index;
        const focussed = focussedMonth === index;
        return (
          <ic-button
            class={{
              "month-button": true,
              selected: current,
            }}
            full-width
            variant={current ? "primary" : "tertiary"}
            data-month={index}
            size={buttonSize}
            tabIndex={focussed ? 0 : -1}
            aria-label={current ? `choose ${month}` : `${month} selected`}
            onClick={handleMonthClick}
            onKeyDown={onKeyDown}
            ref={(el: HTMLIcButtonElement) => {
              if (focussed && el) {
                focussedMonthEl = el;
              }
            }}
          >
            {month}
          </ic-button>
        );
      })}
    </div>
  );
};
