import { h, FunctionalComponent } from "@stencil/core";
import {
  dateInRange,
  getMonthStart,
  getMonthEnd,
} from "../../utils/date-helpers";
import { stringEnumToArray } from "../../utils/helpers";
import { IcSizes, IcDateInputMonths } from "../../utils/types";

export type MonthPickerProps = {
  focussedMonth: number;
  monthInView: number;
  yearInView: number;
  onSelectMonth: (month: number) => void;
  onKeyDown: (ev: KeyboardEvent) => void;
  focussedMonthRef: (element: HTMLIcButtonElement) => void;
  minDate: Date | null;
  maxDate: Date | null;
  size?: IcSizes;
};

export const MonthPicker: FunctionalComponent<MonthPickerProps> = ({
  size,
  focussedMonth,
  monthInView,
  onSelectMonth,
  onKeyDown,
  focussedMonthRef,
  minDate,
  maxDate,
  yearInView,
}) => {
  const handleMonthClick = (ev: MouseEvent): void => {
    const button = ev.target as HTMLElement;
    onSelectMonth(Number(button.getAttribute("data-month")));
  };

  const monthNames = stringEnumToArray(IcDateInputMonths);

  return (
    <div
      class={{
        "month-picker": true,
      }}
      role="list"
    >
      {monthNames.map((month, index) => {
        const current = monthInView === index;
        const focussed = focussedMonth === index;
        const outsideRange = !dateInRange(
          new Date(yearInView, index, 1),
          minDate ? getMonthStart(minDate) : null,
          maxDate ? getMonthEnd(maxDate) : null
        );

        return (
          <ic-button
            role="listitem"
            class={{
              "month-button": true,
              selected: current,
              focussed: focussed,
              disabled: outsideRange,
            }}
            full-width
            disabled={outsideRange}
            variant={current ? "primary" : "tertiary"}
            data-month={index}
            size={size}
            tabIndex={focussed ? 0 : -1}
            aria-current={current ? "true" : "false"}
            aria-label={current ? "" : `select ${month}`}
            onClick={handleMonthClick}
            onKeyDown={onKeyDown}
            ref={(el?: HTMLIcButtonElement) => {
              if (focussed && el) {
                focussedMonthRef(el);
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
