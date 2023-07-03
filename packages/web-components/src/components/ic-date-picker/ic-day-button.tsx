/* istanbul ignore file */
import { h, FunctionalComponent } from "@stencil/core";
// import { DAY_NAMES, MONTH_NAMES } from "../../utils/helpers";
import {
  IcDayNames,
  IcDateInputMonths,
  stringEnumToArray,
} from "../../utils/helpers";
import { IcDatePickerSizes } from "./ic-date-picker.types";

export type DayButtonProps = {
  size: IcDatePickerSizes;
  focussed: boolean;
  today: boolean;
  day: Date;
  monthInView: number;
  onSelectDay: (day: Date) => void;
  selected: boolean;
  focussedDayRef?: (element: HTMLButtonElement) => void;
  // disabled: boolean
  inRange: boolean;
  showDaysOutsideMonth: boolean;
  disabledDay: boolean;
  // isSelected: boolean
  // dateFormatter: Intl.DateTimeFormat
  // onDaySelect: (event: MouseEvent, day: Date) => void
  // onKeyboardNavigation: (event: KeyboardEvent) => void
  // focusedDayRef?: (element: HTMLElement) => void
};

export const DayButton: FunctionalComponent<DayButtonProps> = ({
  size,
  focussed,
  today,
  day,
  monthInView,
  onSelectDay,
  selected,
  focussedDayRef,
  inRange,
  showDaysOutsideMonth,
  disabledDay,
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

  const handleDayClick = (): void => {
    onSelectDay(day);
  };
  const disabled = false;

  const dayNames = stringEnumToArray(IcDayNames);
  const months = stringEnumToArray(IcDateInputMonths);
  const typography = size === "large" ? "subtitle-large" : "caption";
  const outsideRange = !inRange || disabledDay;
  const outsideMonth = monthInView !== day.getMonth();

  return (
    <button
      class={{
        "day-button": true,
        "outside-month": outsideMonth,
        "outside-range": outsideRange,
        today: today,
        selected: selected,
        focussed: focussed,
      }}
      tabIndex={focussed ? 0 : -1}
      aria-disabled={disabled}
      aria-pressed={selected ? "true" : "false"}
      aria-current={today ? "date" : undefined}
      aria-label={
        !disabled
          ? `Choose ${dayNames[day.getDay()]}, ${day.getDate()} ${
              months[day.getMonth()]
            } ${day.getFullYear()}`
          : undefined
      }
      disabled={outsideRange || (outsideMonth && !showDaysOutsideMonth)}
      onClick={handleDayClick}
      ref={(el: HTMLButtonElement) => {
        if (focussed && el && focussedDayRef) {
          focussedDayRef(el);
        }
      }}
    >
      {(!outsideMonth || (outsideMonth && showDaysOutsideMonth)) && (
        <ic-typography variant={typography}>{day.getDate()}</ic-typography>
      )}
    </button>
  );
};
