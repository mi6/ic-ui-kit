import { h, FunctionalComponent } from "@stencil/core";
import { yearInRange } from "../../utils/date-helpers";
import { IcSizes } from "../../utils/types";
import "../../../../web-components/src/components/ic-button/ic-button";

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

  const cols = size === "small" ? 2 : 3;
  const rows = size === "small" ? 6 : 4;

  const thisDecade: number[][] = [];
  for (let i = 0; i < decadeView.length; i += cols) {
    thisDecade.push(decadeView.slice(i, i + cols));
  }

  const renderYearButton = (yr: number, yearIdx: number, idx: number) => {
    const isPrevDecade = yearIdx === 0 && idx === 0;
    const isNextDecade = yearIdx === rows - 1 && idx === cols - 1;
    const isCurrent = yearInView === yr;
    const isFocussed = focussedYear === yr;

    return (
      <ic-button
        key={yr}
        role="gridcell"
        id={
          isPrevDecade
            ? "prev-decade-button"
            : isNextDecade
            ? "next-decade-button"
            : undefined
        }
        class={{
          "prev-decade": isPrevDecade,
          "next-decade": isNextDecade,
          "year-button": true,
          selected: !isPrevDecade && !isNextDecade ? isCurrent : false,
          focussed: !isPrevDecade && !isNextDecade ? isFocussed : false,
          flip: isNextDecade,
        }}
        full-width
        disabled={!yearInRange(yr, minDate, maxDate)}
        data-year={yr}
        tabIndex={isPrevDecade || isNextDecade ? -1 : isFocussed ? 0 : -1}
        variant={
          isPrevDecade || isNextDecade
            ? "tertiary"
            : isCurrent
            ? "primary"
            : "tertiary"
        }
        onClick={handleYearClick}
        onMouseDown={
          isPrevDecade || isNextDecade ? navButtonMouseDownHandler : undefined
        }
        size={size}
        aria-label={
          !isPrevDecade && !isNextDecade
            ? isCurrent
              ? ""
              : `select ${yr}`
            : undefined
        }
        aria-current={
          !isPrevDecade && !isNextDecade
            ? isCurrent
              ? "true"
              : "false"
            : undefined
        }
        onKeyDown={!isPrevDecade && !isNextDecade ? onKeyDown : undefined}
        onFocus={!isPrevDecade && !isNextDecade ? handleYearFocus : undefined}
        onBlur={!isPrevDecade && !isNextDecade ? handleYearBlur : undefined}
        ref={
          !isPrevDecade && !isNextDecade && isFocussed
            ? (el: HTMLIcButtonElement | undefined) => el && focussedYearRef(el)
            : undefined
        }
      >
        {isPrevDecade ? `${yr - 9}s` : isNextDecade ? `${yr}s` : yr}
        {(isPrevDecade || isNextDecade) && (
          <svg
            slot={isPrevDecade ? "left-icon" : "right-icon"}
            width="12"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
              fill="currentColor"
            />
          </svg>
        )}
      </ic-button>
    );
  };

  return (
    <div class="year-picker" role="grid">
      {thisDecade.map((years, yearIdx) => (
        <div class="year-picker-row" role="row" key={yearIdx}>
          {years.map((yr, idx) => renderYearButton(yr, yearIdx, idx))}
        </div>
      ))}
    </div>
  );
};
