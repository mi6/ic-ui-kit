import {
  Component,
  h,
  Element,
  State,
  Prop,
  Event,
  EventEmitter,
  Host,
  Watch,
} from "@stencil/core";
import {
  IcDisableTimeSelection,
  IcSizes,
  IcThemeMode,
  IcTimeFormatSelector,
} from "../../utils/types";
import { parseTimeHelper } from "../../utils/helpers";
import Check from "../../assets/check-icon.svg";
import Clear from "../../assets/close-icon.svg";
import { IcTimePeriods } from "./ic-time-selector.types";

const COLUMN_TYPES = ["hour", "minute", "second", "period"] as const;
const COLUMN_CLASS = ".ic-time-selector-column";
const ITEM_CLASS = ".ic-time-selector-item";
type ColumnType = typeof COLUMN_TYPES[number];

@Component({
  tag: "ic-time-selector",
  styleUrl: "ic-time-selector.css",
  shadow: true,
})
export class TimeSelector {
  private DEFAULT_TIME_FORMAT: IcTimeFormatSelector = "HH:MM:SS";
  private minutes: number[] = Array.from({ length: 60 }, (_, i) => i);
  private seconds: number[] = Array.from({ length: 60 }, (_, i) => i);
  private periods: IcTimePeriods[] = ["AM", "PM"];
  private minTime: Date | null = null;
  private maxTime: Date | null = null;
  private lastAnnouncedType?: ColumnType;
  private lastAnnouncedValue?: number | IcTimePeriods | null;

  @Element() el: HTMLIcTimeSelectorElement;

  @State() selectedHour?: number;
  @State() selectedMinute?: number;
  @State() selectedSecond?: number;
  @State() selectedPeriod?: IcTimePeriods;
  @State() ariaLiveMessage: string = "";

  /**
   * An array of objects with start and end values that will be disabled in the time selector. The times can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
   */
  @Prop() disableTimes: IcDisableTimeSelection[] = [];

  /**
   * The earliest time that will be allowed. The value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
   */
  @Prop() min: string | Date = "";
  @Watch("min")
  watchMinHandler(): void {
    this.minTime = parseTimeHelper(this.min).date;
  }

  /**
   * The latest time that will be allowed. The value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
   */
  @Prop() max: string | Date = "";
  @Watch("max")
  watchMaxHandler(): void {
    this.maxTime = parseTimeHelper(this.max).date;
  }

  /**
   * The size of the time selector to be displayed.
   */
  @Prop() size: IcSizes = "medium";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The format in which the time will be displayed.
   */
  @Prop() timeFormat: IcTimeFormatSelector = this.DEFAULT_TIME_FORMAT;

  /**
   * The time period format: "12" for 12-hour, "24" for 24-hour. Defaults to "24".
   */
  @Prop() timePeriod: "12" | "24" = "24";

  /**
   * The value of the time selector. The value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
   */
  @Prop({ mutable: true }) value?: string | Date | null | undefined = "";
  @Watch("value")
  watchValueHandler(): void {
    this.setTime(this.value);
    setTimeout(() => {
      this.scrollSelectedItem("hour");
      this.scrollSelectedItem("minute");
      if (this.timeFormat === this.DEFAULT_TIME_FORMAT) {
        this.scrollSelectedItem("second");
      }
      if (this.timePeriod === "12") {
        this.scrollSelectedItem("period");
      }
    }, 0);
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() icChange: EventEmitter<{
    value: Date | null;
    timeString: string | null;
    timeObject: {
      hour: string | null;
      minute: string | null;
      second: string | null;
      period?: IcTimePeriods;
    };
  }>;

  componentWillLoad() {
    this.setTime(this.value);
  }

  componentDidLoad() {
    setTimeout(() => {
      if (this.selectedHour !== undefined && this.selectedHour !== null) {
        this.scrollSelectedItem("hour");
      } else if (this.min) {
        this.scrollMinTime("hour");
      }
      if (this.selectedMinute !== undefined && this.selectedMinute !== null) {
        this.scrollSelectedItem("minute");
      } else if (this.min) {
        this.scrollMinTime("minute");
      }
      if (this.timeFormat === this.DEFAULT_TIME_FORMAT) {
        if (this.selectedSecond !== undefined && this.selectedSecond !== null) {
          this.scrollSelectedItem("second");
        } else if (this.min) {
          this.scrollMinTime("second");
        }
      }
      if (this.timePeriod === "12") {
        if (this.selectedPeriod !== undefined && this.selectedPeriod !== null) {
          this.scrollSelectedItem("period");
        } else if (this.min) {
          this.scrollMinTime("period");
        }
      }
      this.updateAriaLiveMessage();
    }, 0);
  }

  private getHeaderLabel(type: ColumnType): string {
    switch (type) {
      case "hour":
        return "HH";
      case "minute":
        return "MM";
      case "second":
        return "SS";
      default:
        return "";
    }
  }

  private setTimeParts = (hour: number, minute: number, second: number) => {
    let period: IcTimePeriods = "AM";
    if (this.timePeriod === "12") {
      if (hour === 0) {
        hour = 12;
        period = "AM";
      } else if (hour === 12) {
        period = "PM";
      } else if (hour > 12) {
        hour = hour - 12;
        period = "PM";
      } else {
        period = "AM";
      }
      this.selectedHour = hour;
      this.selectedPeriod = period;
    } else {
      this.selectedHour = hour;
    }
    this.selectedMinute = minute;
    this.selectedSecond = second;
  };

  private setTime(time?: string | Date | null) {
    if (time === null || time === undefined || time === "") {
      this.handleClear();
      return;
    }

    if (typeof time === "string") {
      const zuluMatch = time.match(
        /^([0-9]{2}):([0-9]{2}):([0-9]{2})(?:\.[0-9]{1,3})?Z?$/
      );
      if (zuluMatch) {
        this.setTimeParts(
          Number(zuluMatch[1]),
          Number(zuluMatch[2]),
          Number(zuluMatch[3])
        );
      } else {
        const parts = time.split(":");
        this.setTimeParts(
          Number(parts[0]) || 0,
          Number(parts[1]) || 0,
          Number(parts[2]) || 0
        );
      }
    } else {
      const { parts } = parseTimeHelper(time);
      if (parts) {
        this.setTimeParts(parts.hour, parts.minute, parts.second);
      }
    }
  }

  private renderScrollRows(count: number, keyPrefix = "scroll-row") {
    return Array.from({ length: count }).map((_, i) => {
      const isLast = keyPrefix.endsWith("bottom-spacer")
        ? i === count - 1
        : false;
      return (
        <li
          class={{
            "ic-time-selector-item": true,
            "ic-time-selector-scroll-row": true,
            ...(isLast ? { "ic-time-selector-scroll-row-last": true } : {}),
          }}
          aria-hidden="true"
          tabIndex={-1}
          key={`${keyPrefix}-${i}`}
        />
      );
    });
  }

  private scrollSelectedItem(colClass: ColumnType, clear?: boolean) {
    const columns = this.el.shadowRoot?.querySelectorAll(COLUMN_CLASS);
    let colIdx = COLUMN_TYPES.indexOf(colClass);
    if (colClass === "period" && columns?.length) {
      colIdx = columns.length - 1;
    }
    const col = columns?.[colIdx];
    if (col) {
      const items = col.querySelectorAll(ITEM_CLASS);
      let selectedIdx = -1;
      items.forEach((item, idx) => {
        if (item.classList.contains("selected")) selectedIdx = idx;
      });
      if (clear) {
        selectedIdx = 0;
      }
      if (selectedIdx > -1) {
        const scrollRow = col.querySelector(
          ".ic-time-selector-scroll-row"
        ) as HTMLElement;
        let resolvedHeight = 0;
        if (scrollRow) {
          resolvedHeight = parseFloat(getComputedStyle(scrollRow).height);
        }
        const offset = resolvedHeight * 2;
        const scrollTop =
          (items[selectedIdx] as HTMLElement).offsetTop - offset;
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        col.scrollTo({
          top: scrollTop,
          behavior: prefersReducedMotion ? "instant" : "smooth",
        });
        if (clear) {
          setTimeout(() => {
            const columns = this.el.shadowRoot?.querySelectorAll(COLUMN_CLASS);
            if (columns && columns.length > 0) {
              this.checkIfScrollIsFinished(columns[0], scrollTop);
            }
          }, 300);
        }
      }
    }
  }

  private checkIfScrollIsFinished = (
    column: { scrollTop: number },
    scrollTop: number
  ) => {
    const isScrollFinished = setInterval(() => {
      if (column.scrollTop === scrollTop + 56) {
        (column as HTMLElement)?.focus();
        clearInterval(isScrollFinished);
      }
    }, 25);
  };

  private scrollMinTime(colClass: ColumnType) {
    const columns = this.el.shadowRoot?.querySelectorAll(COLUMN_CLASS);
    const colIdx = COLUMN_TYPES.indexOf(colClass);
    const col = columns?.[colIdx];
    if (!col) return;
    const items = col.querySelectorAll(ITEM_CLASS);
    let minHour = 0,
      minMinute = 0,
      minSecond = 0;
    if (this.minTime) {
      minHour = this.minTime.getHours() + 2;
      minMinute = this.minTime.getMinutes() + 2;
      minSecond = this.minTime.getSeconds();
    } else if (this.min) {
      const minDate = parseTimeHelper(this.min).date;
      if (minDate) {
        minHour = minDate.getHours();
        minMinute = minDate.getMinutes();
        minSecond = minDate.getSeconds();
      }
    }
    let targetIdx = -1;
    const values = this.getColumnValues(colClass);
    if (colClass === "hour") {
      targetIdx = values.findIndex((v) => v === minHour);
    } else if (colClass === "minute") {
      targetIdx = values.findIndex((v) => v === minMinute);
    } else if (colClass === "second") {
      targetIdx = values.findIndex((v) => v === minSecond);
    } else if (colClass === "period") {
      let period: IcTimePeriods = "AM";
      if (this.timePeriod === "12") {
        if (minHour === 0) {
          period = "AM";
        } else if (minHour === 12) {
          period = "PM";
        } else if (minHour > 12) {
          period = "PM";
        } else {
          period = "AM";
        }
      }
      targetIdx = values.findIndex((v) => v === period);
    }
    if (targetIdx > -1) {
      const scrollRow = col.querySelector(
        ".ic-time-selector-scroll-row"
      ) as HTMLElement;
      let resolvedHeight = 0;
      if (scrollRow) {
        resolvedHeight = parseFloat(getComputedStyle(scrollRow).height);
      }
      const offset = resolvedHeight * 2;
      const scrollTop = (items[targetIdx] as HTMLElement).offsetTop - offset;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      col.scrollTo({
        top: scrollTop,
        behavior: prefersReducedMotion ? "instant" : "smooth",
      });
    }
  }

  private handleSelect = (type: ColumnType, value: number | IcTimePeriods) => {
    const prevValue = this.getSelectedValue(type);
    switch (type) {
      case "hour":
        this.selectedHour = Number(value);
        break;
      case "minute":
        this.selectedMinute = Number(value);
        break;
      case "second":
        this.selectedSecond = Number(value);
        break;
      case "period":
        this.selectedPeriod = value as IcTimePeriods;
        break;
    }
    const columns = this.el.shadowRoot?.querySelectorAll(COLUMN_CLASS);
    const idx = COLUMN_TYPES.indexOf(type);
    if (columns && columns[idx]) {
      (columns[idx] as HTMLElement).focus();
      window.requestAnimationFrame(() => {
        this.scrollSelectedItem(type);
      });
    }
    if (prevValue === undefined || prevValue === null) {
      this.announceSelectedColumn(type);
    } else {
      this.lastAnnouncedType = type;
      this.lastAnnouncedValue = this.getSelectedValue(type);
    }
  };

  private isTimeDisabled = (
    hour: number,
    minute: number,
    second: number,
    type?: ColumnType
  ): boolean => {
    for (const t of this.disableTimes) {
      if (t && typeof t === "object" && "start" in t && "end" in t) {
        const startParts = parseTimeHelper(t.start).parts;
        const endParts = parseTimeHelper(t.end).parts;
        if (startParts && endParts) {
          const timeVal = hour * 3600 + minute * 60 + second;
          const startVal =
            startParts.hour * 3600 + startParts.minute * 60 + startParts.second;
          const endVal =
            endParts.hour * 3600 + endParts.minute * 60 + endParts.second;
          if (timeVal >= startVal && timeVal <= endVal) {
            return true;
          }
        }
      }
    }
    if (this.min) {
      this.minTime = parseTimeHelper(this.min).date;
      if (this.minTime) {
        const minHour = this.minTime.getHours();
        const minMinute = this.minTime.getMinutes();
        const minSecond = this.minTime.getSeconds();
        if (type === "hour") {
          const highlightedMinute = this.selectedMinute ?? minMinute;
          const highlightedSecond = this.selectedSecond ?? minSecond;
          if (
            hour < minHour ||
            (hour === minHour && highlightedMinute < minMinute) ||
            (hour === minHour &&
              highlightedMinute === minMinute &&
              highlightedSecond < minSecond)
          ) {
            return true;
          }
        } else if (type === "minute") {
          if (hour === minHour && minute < minMinute) {
            return true;
          }
        } else if (type === "second") {
          if (hour === minHour && minute === minMinute && second < minSecond) {
            return true;
          }
        } else {
          if (
            hour < minHour ||
            (hour === minHour && minute < minMinute) ||
            (hour === minHour && minute === minMinute && second < minSecond)
          ) {
            return true;
          }
        }
      }
    }
    if (this.max) {
      this.maxTime = parseTimeHelper(this.max).date;
      if (this.maxTime) {
        const maxHour = this.maxTime.getHours();
        const maxMinute = this.maxTime.getMinutes();
        const maxSecond = this.maxTime.getSeconds();
        if (type === "hour") {
          const selectedMinute = this.selectedMinute ?? 59;
          const selectedSecond = this.selectedSecond ?? 59;
          if (
            hour > maxHour ||
            (hour === maxHour && selectedMinute > maxMinute) ||
            (hour === maxHour &&
              selectedMinute === maxMinute &&
              selectedSecond > maxSecond)
          ) {
            return true;
          }
        } else if (type === "minute") {
          if (hour === maxHour && minute > maxMinute) {
            return true;
          }
        } else if (type === "second") {
          if (hour === maxHour && minute === maxMinute && second > maxSecond) {
            return true;
          }
        } else {
          if (
            hour > maxHour ||
            (hour === maxHour && minute > maxMinute) ||
            (hour === maxHour && minute === maxMinute && second > maxSecond)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  private announceSelectedColumn(type: ColumnType) {
    const value = this.getSelectedValue(type);
    if (
      value !== null &&
      value !== undefined &&
      (type !== this.lastAnnouncedType || value !== this.lastAnnouncedValue)
    ) {
      this.ariaLiveMessage = `Selected ${type}: ${value}`;
    } else {
      this.ariaLiveMessage = "";
    }
    this.lastAnnouncedType = type;
    this.lastAnnouncedValue = value;
  }

  private getColumnValues(type: ColumnType): number[] | IcTimePeriods[] {
    if (type === "hour")
      return this.timePeriod === "12"
        ? Array.from({ length: 12 }, (_, i) => i + 1)
        : Array.from({ length: 24 }, (_, i) => i);
    if (type === "minute") return this.minutes;
    if (type === "second") return this.seconds;
    if (type === "period") return this.periods;
    return [];
  }

  private getSelectedValue(type: ColumnType): number | IcTimePeriods | null {
    if (type === "hour") return this.selectedHour ?? null;
    if (type === "minute") return this.selectedMinute ?? null;
    if (type === "second") return this.selectedSecond ?? null;
    if (type === "period") return this.selectedPeriod ?? null;
    return null;
  }

  private getHighlightedValue(
    type: ColumnType,
    col: HTMLElement
  ): number | IcTimePeriods | null {
    const items = Array.from(col.querySelectorAll(ITEM_CLASS));
    const realItems = items.filter(
      (item) => !item.classList.contains("ic-time-selector-scroll-row")
    );
    if (realItems.length === 0) return null;
    const highlightTop = this.el.shadowRoot?.querySelector(
      ".ic-time-selector-highlight-top"
    ) as HTMLElement;
    const highlightBottom = this.el.shadowRoot?.querySelector(
      ".ic-time-selector-highlight-bottom"
    ) as HTMLElement;
    if (!highlightTop || !highlightBottom) return null;
    const topRect = highlightTop.getBoundingClientRect();
    const bottomRect = highlightBottom.getBoundingClientRect();
    const highlightStart = topRect.bottom;
    const highlightEnd = bottomRect.top;
    for (const item of realItems) {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;
      if (itemCenter >= highlightStart && itemCenter <= highlightEnd) {
        const key = item.getAttribute("key");
        if (key) {
          const valStr = key.replace(`${type}-val-`, "");
          if (type === "hour" || type === "minute" || type === "second") {
            return Number(valStr);
          } else {
            return valStr as IcTimePeriods;
          }
        }
        const text = item.textContent?.trim();
        if (type === "hour" || type === "minute" || type === "second") {
          return text ? Number(text) : null;
        } else {
          return text as IcTimePeriods;
        }
      }
    }
    return null;
  }

  private handleColumnKeyDown = (type: ColumnType, event: KeyboardEvent) => {
    const columns = this.el.shadowRoot?.querySelectorAll(COLUMN_CLASS);
    const idx = COLUMN_TYPES.indexOf(type);
    if (!columns) return;

    const values = this.getColumnValues(type);
    const selected = this.getSelectedValue(type);
    const col = columns[idx] as HTMLElement;
    if (!col) return;

    const selectHighlighted = () => {
      const highlighted = this.getHighlightedValue(type, col);
      if (highlighted !== null) {
        this.handleSelect(type, highlighted);
      } else if (values.length > 0) {
        this.handleSelect(type, values[0]);
      }
    };

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        selectHighlighted();
        return;
      case "ArrowRight":
        event.preventDefault();
        selectHighlighted();
        if (idx < columns.length - 1) {
          (columns[idx + 1] as HTMLElement)?.focus();
        }
        return;
      case "ArrowLeft":
        event.preventDefault();
        if (idx > 0) (columns[idx - 1] as HTMLElement)?.focus();
        return;
      case "Tab":
        if (event.shiftKey) {
          if (idx === 0) {
            return;
          } else {
            event.preventDefault();
            (columns[idx - 1] as HTMLElement)?.focus();
          }
        } else {
          event.preventDefault();
          selectHighlighted();
          this.announceSelectedColumn(type);
          if (idx < columns.length - 1) {
            (columns[idx + 1] as HTMLElement)?.focus();
          } else {
            (
              this.el.shadowRoot?.querySelector(
                ".ic-time-selector-clear-btn"
              ) as HTMLElement
            )?.focus();
            this.updateAriaLiveMessage();
          }
        }
        return;
      case "ArrowUp":
      case "ArrowDown": {
        let idxInValues = values.findIndex((v) => v === selected);
        if (idxInValues === -1) idxInValues = 0;
        let newIdx = idxInValues;
        const direction = event.key === "ArrowUp" ? -1 : 1;
        const maxIdx = values.length - 1;
        do {
          newIdx += direction;
        } while (
          newIdx >= 0 &&
          newIdx <= maxIdx &&
          (() => {
            if (type === "hour" || type === "minute" || type === "second") {
              const hour =
                type === "hour"
                  ? (values[newIdx] as number)
                  : this.selectedHour ?? 0;
              const minute =
                type === "minute"
                  ? (values[newIdx] as number)
                  : this.selectedMinute ?? 0;
              const second =
                type === "second"
                  ? (values[newIdx] as number)
                  : this.selectedSecond ?? 0;
              return this.isTimeDisabled(hour, minute, second);
            }
            return false;
          })()
        );
        this.ariaLiveMessage = `Selected ${type}: ${values[newIdx]}`;
        if (newIdx >= 0 && newIdx <= maxIdx && newIdx !== idxInValues) {
          this.handleSelect(type, values[newIdx]);
        }
        return;
      }
      default:
        return;
    }
  };

  private updateAriaLiveMessage() {
    const hourStr =
      this.selectedHour != null
        ? this.selectedHour.toString().padStart(2, "0")
        : null;
    const minuteStr =
      this.selectedMinute != null
        ? this.selectedMinute.toString().padStart(2, "0")
        : null;
    const secondStr =
      this.selectedSecond != null
        ? this.selectedSecond.toString().padStart(2, "0")
        : null;
    let timeString = "";
    let allSelected = false;
    if (this.timeFormat === "HH:MM") {
      allSelected = hourStr !== null && minuteStr !== null;
      if (allSelected) {
        timeString =
          hourStr +
          ":" +
          minuteStr +
          (this.selectedPeriod ? " " + this.selectedPeriod : "");
      }
    } else if (this.timeFormat === this.DEFAULT_TIME_FORMAT) {
      allSelected =
        hourStr !== null && minuteStr !== null && secondStr !== null;
      if (allSelected) {
        timeString =
          hourStr +
          ":" +
          minuteStr +
          ":" +
          secondStr +
          (this.selectedPeriod ? " " + this.selectedPeriod : "");
      }
    }
    this.ariaLiveMessage =
      allSelected && timeString ? `Selected time: ${timeString}` : "";
  }

  private renderColumn = (
    type: ColumnType,
    values: number[] | IcTimePeriods[],
    selected: number | IcTimePeriods | null
  ) => {
    const isTimeColumn =
      type === "hour" || type === "minute" || type === "second";
    const isPeriodColumn = type === "period";
    const headerLabel = this.getHeaderLabel(type);
    const topSpacerCount = 2;
    let bottomSpacerCount = 6;
    if (this.size === "large") {
      bottomSpacerCount = 5;
    } else if (this.size === "small") {
      bottomSpacerCount = 8;
    }
    return (
      <div class="ic-time-selector-column-wrapper">
        {isPeriodColumn ? (
          <div class="ic-time-selector-header-row" />
        ) : (
          headerLabel && (
            <div class="ic-time-selector-header-row">
              <ic-typography variant="subtitle-small">
                {headerLabel}
              </ic-typography>
            </div>
          )
        )}
        <div
          class={{
            "ic-time-selector-column": true,
            "ic-time-selector-column-period": isPeriodColumn,
          }}
          tabIndex={0}
          onKeyDown={(e) => this.handleColumnKeyDown(type, e as KeyboardEvent)}
        >
          <ul class="ic-time-selector-list" role="listbox" aria-label={type}>
            {this.renderScrollRows(topSpacerCount, `${type}-top-spacer`)}
            {values.map((val) => {
              let disabled = false;
              if (isTimeColumn) {
                const hour =
                  type === "hour" ? (val as number) : this.selectedHour ?? 0;
                const minute =
                  type === "minute"
                    ? (val as number)
                    : this.selectedMinute ?? 0;
                const second =
                  type === "second"
                    ? (val as number)
                    : this.selectedSecond ?? 0;
                disabled = this.isTimeDisabled(hour, minute, second, type);
              }
              return (
                <li
                  class={{
                    "ic-time-selector-item": true,
                    selected: val === selected,
                    disabled,
                  }}
                  role="option"
                  aria-selected={val === selected ? "true" : "false"}
                  aria-disabled={disabled ? "true" : "false"}
                  onClick={() =>
                    !disabled && this.handleSelect(type, val as any)
                  }
                  tabIndex={-1}
                  key={`${type}-val-${val}`}
                >
                  <ic-typography variant="subtitle-small">
                    {typeof val === "number"
                      ? val.toString().padStart(2, "0")
                      : val}
                  </ic-typography>
                </li>
              );
            })}
            {(isTimeColumn || isPeriodColumn) &&
              this.renderScrollRows(bottomSpacerCount, `${type}-bottom-spacer`)}
          </ul>
        </div>
      </div>
    );
  };

  private handleClear = () => {
    this.selectedHour = undefined;
    this.scrollSelectedItem("hour", true);
    this.selectedMinute = undefined;
    this.scrollSelectedItem("minute", true);
    this.selectedSecond = undefined;
    this.scrollSelectedItem("second", true);
    this.selectedPeriod = undefined;
    this.scrollSelectedItem("period", true);
    this.lastAnnouncedType = undefined;
    this.lastAnnouncedValue = undefined;
    this.icChange.emit({
      value: null,
      timeString: null,
      timeObject: {
        hour: null,
        minute: null,
        second: null,
        period: undefined,
      },
    });
  };

  private handleConfirmClick = () => {
    const hour = this.selectedHour != null ? this.selectedHour : null;
    const minute = this.selectedMinute != null ? this.selectedMinute : null;
    const second = this.selectedSecond != null ? this.selectedSecond : null;
    const period = this.selectedPeriod;

    const hourStr = hour != null ? hour.toString().padStart(2, "0") : null;
    const minuteStr =
      minute != null ? minute.toString().padStart(2, "0") : null;
    const secondStr =
      second != null ? second.toString().padStart(2, "0") : null;

    let allSelected = false;
    if (this.timeFormat === this.DEFAULT_TIME_FORMAT) {
      allSelected = hour !== null && minute !== null && second !== null;
    } else {
      allSelected = hour !== null && minute !== null;
    }

    let value: Date | null = null;
    let timeString: string | null = null;
    if (allSelected) {
      let date24hours = hour;
      if (hour != null && period && this.timePeriod === "12") {
        if (period === "PM" && hour < 12) date24hours = hour + 12;
        if (period === "AM" && hour === 12) date24hours = 0;
      }
      value = new Date();
      value.setHours(date24hours ?? 0);
      value.setMinutes(minute ?? 0);
      value.setSeconds(second ?? 0);
      value.setMilliseconds(0);
      if (this.timeFormat === "HH:MM") {
        timeString = hourStr + ":" + minuteStr + (period ? " " + period : "");
      } else if (this.timeFormat === this.DEFAULT_TIME_FORMAT) {
        timeString =
          hourStr +
          ":" +
          minuteStr +
          ":" +
          secondStr +
          (period ? " " + period : "");
      }
      this.value = value;
    }

    this.icChange.emit({
      value: allSelected ? value : null,
      timeString: allSelected ? timeString : null,
      timeObject: {
        hour: hourStr,
        minute: minuteStr,
        second: secondStr,
        ...(period ? { period } : {}),
      },
    });
  };

  render() {
    const hours =
      this.timePeriod === "12"
        ? Array.from({ length: 12 }, (_, i) => i + 1)
        : Array.from({ length: 24 }, (_, i) => i);
    const timeFormat = this.timeFormat || this.DEFAULT_TIME_FORMAT;
    const columns = [
      this.renderColumn("hour", hours, this.selectedHour ?? null),
      this.renderColumn("minute", this.minutes, this.selectedMinute ?? null),
    ];
    if (timeFormat === this.DEFAULT_TIME_FORMAT) {
      columns.push(
        this.renderColumn("second", this.seconds, this.selectedSecond ?? null)
      );
    }

    let colonSelectedStates: boolean[] = [];
    if (timeFormat === this.DEFAULT_TIME_FORMAT) {
      colonSelectedStates = [
        this.selectedHour !== undefined && this.selectedMinute !== undefined,
        this.selectedMinute !== undefined && this.selectedSecond !== undefined,
      ];
    } else {
      colonSelectedStates = [
        this.selectedHour !== undefined && this.selectedMinute !== undefined,
      ];
    }

    const isInPicker = this.el.closest("ic-time-picker") !== null;

    const { size, theme, timePeriod } = this;

    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
          [`ic-time-selector-${size}`]: true,
        }}
      >
        <div
          role={isInPicker ? "dialog" : undefined}
          aria-modal={isInPicker ? true : undefined}
          aria-label="Select time. Use arrow keys to navigate and select the options and then tab to move onto the next selection."
          class={{
            "ic-time-selector-dialog-container": true,
          }}
        >
          <div class="ic-time-selector-highlight-lines">
            <div class="ic-time-selector-header-border" />
            <div
              class={{
                "ic-time-selector-highlight": true,
                "ic-time-selector-highlight-top": true,
              }}
            />
            <div class="ic-time-selector-columns">
              {columns.map((col, idx) => [
                col,
                idx < columns.length - 1 ? (
                  <ic-typography
                    class={{
                      "ic-time-selector-colon": true,
                      "ic-time-selector-colon-selected":
                        colonSelectedStates[idx],
                    }}
                    variant="subtitle-small"
                    aria-hidden="true"
                    key={`colon-${idx}`}
                  >
                    :
                  </ic-typography>
                ) : null,
              ])}
              {timePeriod !== "24" &&
                this.renderColumn(
                  "period",
                  this.periods,
                  this.selectedPeriod ?? null
                )}
            </div>
            <div
              class={{
                "ic-time-selector-highlight": true,
                "ic-time-selector-highlight-bottom": true,
              }}
            />
          </div>
          <div class="ic-time-selector-actions">
            <ic-button
              variant="icon-tertiary"
              aria-label="Clear time"
              class={{
                "ic-time-selector-clear-btn": true,
              }}
              onClick={this.handleClear}
              disabled={
                this.selectedHour === undefined &&
                this.selectedMinute === undefined &&
                this.selectedSecond === undefined &&
                this.selectedPeriod === undefined
              }
              size={size}
              tabIndex={0}
              onKeyDown={(e: KeyboardEvent) => {
                if (e.key === "Tab" && e.shiftKey) {
                  e.preventDefault();
                  const columns =
                    this.el.shadowRoot?.querySelectorAll(COLUMN_CLASS);
                  if (columns && columns.length > 0) {
                    const lastCol = columns[columns.length - 1] as HTMLElement;
                    lastCol?.focus();
                  }
                }
              }}
            >
              <span aria-hidden="true" innerHTML={Clear}></span>
            </ic-button>
            <ic-button
              variant="icon-tertiary"
              aria-label="Select time"
              class="ic-time-selector-check-btn"
              onClick={this.handleConfirmClick}
              disabled={
                this.selectedHour === undefined &&
                this.selectedMinute === undefined &&
                this.selectedSecond === undefined &&
                this.selectedPeriod === undefined
              }
              size={size}
              tabIndex={0}
            >
              <span aria-hidden="true" innerHTML={Check}></span>
            </ic-button>
          </div>
        </div>
        <div class="sr-only" aria-live="polite">
          {this.ariaLiveMessage}
        </div>
      </Host>
    );
  }
}
