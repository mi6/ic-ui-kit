import { h, FunctionalComponent } from "@stencil/core";
import { yearInRange } from "../../utils/date-helpers";
import { IcSizes } from "../../utils/types";

export type YearPickerProps = {
  decadeView: number[];
  focussedYear: number;
  yearInView: number;
  onSelectYear: (year: number) => void;
  onKeyDown: (ev: KeyboardEvent) => void;
  onFocusYear: () => void;
  onBlurYear: () => void;
  minDate: Date | null;
  maxDate: Date | null;
  focussedYearRef: (element: HTMLIcButtonElement) => void;
  size?: IcSizes;
};

export const YearPicker: FunctionalComponent<YearPickerProps> = ({
  decadeView,
  size,
  focussedYear,
  yearInView,
  onSelectYear,
  onFocusYear,
  onBlurYear,
  onKeyDown,
  minDate,
  maxDate,
  focussedYearRef,
}) => {
  const handleYearClick = (ev: MouseEvent): void => {
    const button = ev.target as HTMLElement;
    onSelectYear(Number(button.getAttribute("data-year")));
  };

  const handleYearFocus = (): void => {
    onFocusYear();
  };

  const handleYearBlur = (): void => {
    onBlurYear();
  };

  const navButtonMouseDownHandler = (ev: MouseEvent): void => {
    ev.preventDefault();
  };

  const prevDecade = decadeView[0];
  const nextDecade = decadeView[11];
  const years = decadeView.slice(1, 11);

  return (
    <div class="year-picker" role="list">
      <div class="prev-decade" aria-hidden="true">
        <ic-button
          id="prev-decade-button"
          class={{
            "year-button": true,
          }}
          disabled={!yearInRange(prevDecade, minDate, maxDate)}
          data-year={prevDecade}
          tabIndex={-1}
          variant="tertiary"
          onClick={handleYearClick}
          onMouseDown={navButtonMouseDownHandler}
          aria-hidden="true"
          size={size}
        >
          {`${prevDecade - 9}s`}
          <svg
            slot="left-icon"
            width="12"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3333 5.33341H3.21996L6.94663 1.60675L5.99996 0.666748L0.666626 6.00008L5.99996 11.3334L6.93996 10.3934L3.21996 6.66675H11.3333V5.33341Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
      </div>
      {years.map((yr) => {
        const current = yearInView === yr;
        const focussed = focussedYear === yr;
        return (
          <ic-button
            class={{
              "year-button": true,
              selected: current,
              focussed: focussed,
            }}
            disabled={!yearInRange(yr, minDate, maxDate)}
            data-year={yr}
            tabIndex={focussed ? 0 : -1}
            variant={current ? "primary" : "tertiary"}
            onClick={handleYearClick}
            aria-label={current ? "" : `select ${yr}`}
            role="listitem"
            aria-current={current ? "true" : "false"}
            onKeyDown={onKeyDown}
            onFocus={handleYearFocus}
            onBlur={handleYearBlur}
            size={size}
            ref={(el: HTMLIcButtonElement) => {
              if (focussed && el) {
                focussedYearRef(el);
              }
            }}
          >
            {yr}
          </ic-button>
        );
      })}
      <div class="next-decade" aria-hidden="true">
        <ic-button
          id="next-decade-button"
          class={{
            "year-button": true,
            flip: true,
          }}
          disabled={!yearInRange(nextDecade, minDate, maxDate)}
          data-year={nextDecade}
          tabIndex={-1}
          variant="tertiary"
          onClick={handleYearClick}
          onMouseDown={navButtonMouseDownHandler}
          aria-hidden="true"
          size={size}
        >
          {`${nextDecade}s`}
          <svg
            slot="right-icon"
            width="12"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3333 5.33341H3.21996L6.94663 1.60675L5.99996 0.666748L0.666626 6.00008L5.99996 11.3334L6.93996 10.3934L3.21996 6.66675H11.3333V5.33341Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
      </div>
    </div>
  );
};
