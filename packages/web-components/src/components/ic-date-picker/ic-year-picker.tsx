import { h, FunctionalComponent } from "@stencil/core";
// import { DAY_NAMES, MONTH_NAMES } from "../../utils/helpers";
// import {
//   IcDateInputMonths,
//   stringEnumToArray,
// } from "../../utils/helpers";
import { IcDatePickerSizes } from "./ic-date-picker.types";
// import chevron from "../../assets/chevron-icon.svg";

export type YearPickerProps = {
  size: IcDatePickerSizes;
  focussedYear: number;
  // selectedYear: number;
  yearInView: number;
  backMode: boolean;
  // yearPickerView: number[];
  // hidden: boolean;
  // monthNames: string[];
  // day: Date;
  onSelectYear: (year: number) => void;
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

export const YearPicker: FunctionalComponent<YearPickerProps> = ({
  size,
  focussedYear,
  yearInView,
  onSelectYear,
  // yearPickerView
  // hidden,
  // monthNames,
  onKeyDown,
  backMode,
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

  const handlePreviousDecadeClick = (): void => {
    return null;
  };

  const handleNextDecadeClick = (): void => {
    return null;
  };

  const handleYearClick = (ev: MouseEvent): void => {
    const button = ev.target as HTMLElement;
    // console.log(button.getAttribute("data-month"));
    // this.monthInView = Number(button.getAttribute("data-month"));
    // onSelectYear(Number(button.getAttribute("data-year")));
    // console.log(button.innerText)
    onSelectYear(Number(button.innerText));
  };
  // const disabled = false;
  // const months = stringEnumToArray(IcDateInputMonths);
  const buttonSize = size === "small" ? "small" : "default";
  const decadeBtnType = backMode ? "secondary" : "tertiary";
  const decade = Math.floor(focussedYear / 10) * 10;
  const prevDecade = decade - 10;
  const nextDecade = decade + 10;

  let currYear = decade;
  const decadeArr = [];
  while (currYear < decade + 10) {
    decadeArr.push(currYear);
    currYear++;
  }

  let focussedYearEl: HTMLIcButtonElement;

  setTimeout(() => {
    focussedYearEl.setFocus(), 100;
  });

  return (
    <div
      class={{
        "year-picker": true,
        // hidden: hidden,
      }}
    >
      <div class="year-picker-container">
        <ic-button
          class="decade-button"
          size={buttonSize}
          variant={decadeBtnType}
          aria-label="go to previous decade"
          onClick={handlePreviousDecadeClick}
        >{`${prevDecade}s`}</ic-button>
        {/* <ic-button class="flip decade-button" size={buttonSize} variant="tertiary" aria-label="go to previous decade" onClick={handlePreviousDecadeClick} innerHTML={`${chevron} ${prevDecade}s`}> */}
        {/* </ic-button> */}
        {decadeArr.map((yr) => {
          const current = yearInView === yr;
          const focussed = focussedYear === yr;
          return (
            <ic-button
              class={{
                "year-button": true,
                selected: current,
                focussed: focussed,
              }}
              data-year={yr}
              tabIndex={focussed ? 0 : -1}
              variant={current ? "primary" : "tertiary"}
              onClick={handleYearClick}
              aria-label={current ? `choose ${yr}` : `${yr} selected`}
              onKeyDown={onKeyDown}
              size={buttonSize}
              ref={(el: HTMLIcButtonElement) => {
                if (focussed && el) {
                  focussedYearEl = el;
                }
              }}
            >
              {yr}
            </ic-button>
          );
        })}
        <ic-button
          class="decade-button"
          size={buttonSize}
          variant={decadeBtnType}
          aria-label="go to next decade"
          onClick={handleNextDecadeClick}
        >
          {`${nextDecade}s`}
        </ic-button>

        {/* <ic-button class="decade-button" size={buttonSize} variant="tertiary" aria-label="go to next decade" innerHTML={`${nextDecade}s ${chevron}`} onClick={handleNextDecadeClick}>
        </ic-button> */}

        {/* {monthNames.map((month, index) => {
        const current = monthInView === index;
        const focussed = focussedMonth === index;
        return (
          <ic-button
            class={{
              "month-button": true,
              selected: current,
              focussed: focussed,
            }}
            full-width
            variant={current ? "primary" : "tertiary"}
            data-month={index}
            size={buttonSize}
            tabIndex={focussedMonth === index ? 0 : -1}
            // aria-pressed={current ? "true" : "false"}
            // aria-current={current ? "date" : undefined}
            aria-label={current ? `choose ${month}` : `${month} selected`}
            onClick={handleMonthClick}
            onKeyDown={onKeyDown}
            ref={(el: HTMLIcButtonElement) => {
              // if (focussed && el && focussedMonthRef) {
              //   focussedMonthRef(el)
              // }
              if (focussed && el) {
                focussedMonthEl = el;
              }
            }}
          >
            {month}
          </ic-button>
        );
      })} */}
      </div>
    </div>
  );
};
