import { h, FunctionalComponent } from "@stencil/core";
import {
  dateInRange,
  getMonthStart,
  getMonthEnd,
} from "../../utils/date-helpers";
import { stringEnumToArray } from "../../utils/helpers";
import { IcSizes, IcDateInputMonths } from "../../utils/types";
import "../../../../web-components/src/components/ic-button/ic-button";

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

  const cols = size === "small" ? 2 : 3;
  const months: string[][] = [];
  for (let i = 0; i < monthNames.length; i += cols) {
    months.push(monthNames.slice(i, i + cols));
  }

  return (
    <div
      class={{
        "month-picker": true,
      }}
      role="grid"
    >
      {months.map((month, monthIdx) => (
        <div class="month-picker-row" key={monthIdx} role="row">
          {month.map((mon, index) => {
            const correctedIndex = monthIdx * cols + index;
            const current = monthInView === correctedIndex;
            const focussed = focussedMonth === correctedIndex;
            const outsideRange = !dateInRange(
              new Date(yearInView, correctedIndex, 1),
              minDate ? getMonthStart(minDate) : null,
              maxDate ? getMonthEnd(maxDate) : null
            );
            return (
              <ic-button
                role="gridcell"
                class={{
                  "month-button": true,
                  selected: current,
                  focussed: focussed,
                  disabled: outsideRange,
                }}
                full-width
                disabled={outsideRange}
                variant={current ? "primary" : "tertiary"}
                data-month={correctedIndex}
                size={size}
                tabIndex={focussed ? 0 : -1}
                aria-current={current ? "true" : "false"}
                aria-label={current ? "" : `select ${mon}`}
                onClick={handleMonthClick}
                onKeyDown={onKeyDown}
                ref={(el?: HTMLIcButtonElement) => {
                  if (focussed && el) {
                    focussedMonthRef(el);
                  }
                }}
              >
                {mon}
              </ic-button>
            );
          })}
        </div>
      ))}
    </div>
  );
};
