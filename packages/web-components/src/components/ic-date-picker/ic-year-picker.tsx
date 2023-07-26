/* istanbul ignore file */
import { h, FunctionalComponent } from "@stencil/core";
import { yearInRange } from "./ic-date-picker-utils";
import { IcSizes } from "../../utils/types";

export type YearPickerProps = {
  decadeView: number[];
  size: IcSizes;
  focussedYear: number;
  yearInView: number;
  onSelectYear: (year: number) => void;
  onKeyDown: (ev: KeyboardEvent) => void;
  minDate: Date;
  maxDate: Date;
  focussedYearRef: (element: HTMLIcButtonElement) => void;
};

export const YearPicker: FunctionalComponent<YearPickerProps> = ({
  decadeView,
  size,
  focussedYear,
  yearInView,
  onSelectYear,
  onKeyDown,
  minDate,
  maxDate,
  focussedYearRef,
}) => {
  const handleYearClick = (ev: MouseEvent): void => {
    const button = ev.target as HTMLElement;
    onSelectYear(Number(button.getAttribute("data-year")));
  };
  const buttonSize = size === "small" ? "small" : "default";

  return (
    <div
      class={{
        "year-picker": true,
      }}
    >
      <div class="year-picker">
        <div class="year-picker-container">
          {decadeView.map((yr, index) => {
            const current = yearInView === yr;
            const focussed = focussedYear === yr;
            const inDecade = index > 0 && index < decadeView.length - 1;
            const label = inDecade ? yr : index === 0 ? `${yr - 9}s` : `${yr}s`;
            const iconSlot = index === 0 ? "left-icon" : "right-icon";
            return (
              <ic-button
                class={{
                  "year-button": true,
                  selected: current,
                  flip: index === 0,
                }}
                disabled={!yearInRange(yr, minDate, maxDate)}
                data-year={yr}
                tabIndex={focussed ? 0 : -1}
                variant={current ? "primary" : "tertiary"}
                onClick={handleYearClick}
                aria-label={current ? `${yr} selected` : `choose ${yr}`}
                onKeyDown={onKeyDown}
                size={buttonSize}
                ref={(el: HTMLIcButtonElement) => {
                  if (focussed && el) {
                    focussedYearRef(el);
                  }
                }}
              >
                {label}
                {!inDecade && (
                  <svg
                    slot={iconSlot}
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.49996 2.66675L7.55996 3.60675L11.28 7.33341H3.16663V8.66675H11.28L7.55996 12.3934L8.49996 13.3334L13.8333 8.00008L8.49996 2.66675Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </ic-button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
