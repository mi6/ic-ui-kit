/* istanbul ignore file */
import { h, FunctionalComponent } from "@stencil/core";
import {
  dateInRange,
  getMonthStart,
  getMonthEnd,
} from "./ic-date-picker-utils";
import { stringEnumToArray } from "../../utils/helpers";
import { IcSizes, IcDateInputMonths } from "../../utils/types";

export type MonthPickerProps = {
  size: IcSizes;
  focussedMonth: number;
  monthInView: number;
  yearInView: number;
  onSelectMonth: (month: number) => void;
  onKeyDown: (ev: KeyboardEvent) => void;
  focussedMonthRef: (element: HTMLIcButtonElement) => void;
  minDate: Date;
  maxDate: Date;
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

  const buttonSize = size === "small" ? "small" : "default";
  const monthNames = stringEnumToArray(IcDateInputMonths);

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
        const outsideRange = !dateInRange(
          new Date(yearInView, index, 1),
          minDate ? getMonthStart(minDate) : null,
          maxDate ? getMonthEnd(maxDate) : null
        );

        return (
          <ic-button
            class={{
              "month-button": true,
              selected: current,
              disabled: outsideRange,
            }}
            full-width
            disabled={outsideRange}
            variant={current ? "primary" : "tertiary"}
            data-month={index}
            size={buttonSize}
            tabIndex={focussed ? 0 : -1}
            aria-label={
              current ? `${month} selected` : `choose ${month} ${yearInView}`
            }
            onClick={handleMonthClick}
            onKeyDown={onKeyDown}
            ref={(el: HTMLIcButtonElement) => {
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
