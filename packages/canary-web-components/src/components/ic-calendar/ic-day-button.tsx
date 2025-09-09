import { h, FunctionalComponent } from "@stencil/core";
import { stringEnumToArray } from "../../utils/helpers";
import { IcDayNames, IcDateInputMonths } from "../../utils/types";

export type DayButtonProps = {
  focussed: boolean;
  today: boolean;
  day: Date;
  monthInView: number;
  onFocusDay: () => void;
  onBlurDay: () => void;
  onSelectDay: (day: Date) => void;
  selected: boolean;
  focussedDayRef?: (element: HTMLButtonElement) => void;
  inRange: boolean;
  showDaysOutsideMonth?: boolean;
  disableDay?: boolean;
};

export const DayButton: FunctionalComponent<DayButtonProps> = ({
  focussed,
  today,
  day,
  monthInView,
  onFocusDay,
  onBlurDay,
  onSelectDay,
  selected,
  focussedDayRef,
  inRange,
  showDaysOutsideMonth,
  disableDay,
}) => {
  const handleDayClick = (): void => {
    onSelectDay(day);
  };

  const handleDayFocus = (): void => {
    onFocusDay();
  };

  const handleDayBlur = (): void => {
    onBlurDay();
  };

  const dayNames = stringEnumToArray(IcDayNames);
  const months = stringEnumToArray(IcDateInputMonths);
  const outsideRange = !inRange || disableDay;
  const outsideMonth = monthInView !== day.getMonth();
  const disabled = outsideRange || (outsideMonth && !showDaysOutsideMonth);

  return (
    <div class="day-button-container">
      <button
        class={{
          "day-button": true,
          "outside-month": outsideMonth,
          "outside-range": !!outsideRange,
          hidden: outsideMonth && !showDaysOutsideMonth,
          disabled: disabled,
          today: today,
          selected: selected,
          focussed: focussed,
        }}
        tabIndex={focussed ? 0 : -1}
        aria-hidden={outsideMonth ? "true" : "false"}
        aria-disabled={disabled ? "true" : "false"}
        aria-current={today ? "date" : undefined}
        aria-label={
          disabled || outsideMonth || outsideRange
            ? undefined
            : `Choose ${dayNames[day.getDay()]}, ${day.getDate()} ${
                months[day.getMonth()]
              } ${day.getFullYear()}`
        }
        disabled={disabled}
        onClick={handleDayClick}
        onBlur={handleDayBlur}
        onFocus={handleDayFocus}
        ref={(el) => {
          if (focussed && el && focussedDayRef) {
            focussedDayRef(el);
          }
        }}
      >
        {(!outsideMonth || (outsideMonth && showDaysOutsideMonth)) && (
          <ic-typography variant="subtitle-small" italic={outsideMonth}>
            {day.getDate()}
          </ic-typography>
        )}
      </button>
    </div>
  );
};
