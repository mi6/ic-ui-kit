import { Component, Element, h, Host, Prop, State, Watch } from "@stencil/core";
import { IcLoadingSizes, IcLoadingTypes } from "./ic-loading-indicator.types";
import { IcThemeMode, IcTypographyVariants } from "../../utils/types";

const LOADING_INDICATOR_WIDTHS = {
  large: 120,
  medium: 80,
  small: 40,
  icon: 20,
};

@Component({
  tag: "ic-loading-indicator",
  styleUrl: "ic-loading-indicator.css",
  shadow: true,
})
export class LoadingIndicator {
  private circularMeter?: SVGCircleElement | null;
  private innerElement?: HTMLDivElement;
  private interval: ReturnType<typeof setInterval>;
  private labelList: string[] = [];
  private outerElement?: HTMLDivElement;

  @Element() el: HTMLIcLoadingIndicatorElement;

  @State() circularDiameter = 0;
  @State() circularLineWidth = 0;
  @State() indeterminate = false;
  @State() indicatorLabel?: string;
  @State() clipInnerElement = false;

  /**
   * The description that will be set as the aria-label of the loading indicator when not using a visible label.
   */
  @Prop() description = "Loading";

  /**
   * If `true`, when linear, the full-width variant (i.e. without a border radius) will be displayed.
   */
  @Prop({ reflect: true }) fullWidth = false;

  /**
   * @internal The step number of a compact step, managed by ic-step.
   */
  @Prop() innerLabel?: number;

  /**
   * The time in milliseconds before the label changes.
   */
  @Prop() labelDuration = 8000;

  /**
   * The maximum value that the progress value can take.
   * Used to calculate the proportional width of the progress bar.
   */
  @Prop() max = 100;

  /**
   * The minimum value that the progress value can take.
   * Used to calculate the proportional width of the progress bar.
   */
  @Prop() min = 0;

  /**
   * If `true`, the element will display as black and white.
   */
  @Prop() monochrome = false;

  /**
   * The size of the loading indicator.
   */
  @Prop({ reflect: true }) size: IcLoadingSizes = "medium";

  /**
   * The type of indicator, either linear or circular.
   */
  @Prop({ reflect: true }) type: IcLoadingTypes = "circular";

  /**
   * The label to be displayed beneath the loading indicator.
   * Display a changing label by supplying an array of messages.
   */
  @Prop() label?: string | string[];
  @Watch("label")
  watchPropHandler(): void {
    this.updateLabel();
  }

  /**
   * The current amount of progress made.
   * If not provided, component acts as an indeterminate loading indicator.
   */
  @Prop() progress?: number;
  @Watch("progress")
  watchProgressHandler(): void {
    if (this.type === "circular") {
      this.updateCircularProgressMeter();
    }
  }

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  disconnectedCallback(): void {
    clearInterval(this.interval);
  }

  componentWillLoad(): void {
    this.indeterminate = this.progress === undefined;
    this.updateLabel();
    this.el.setAttribute("exportparts", "ic-loading-container");
  }

  componentDidLoad(): void {
    if (this.type === "circular") {
      // Sets the circular indicator line width - accounting for the circle size being altered using the CSS custom property
      if (this.outerElement) {
        const diameter =
          this.outerElement.offsetWidth || this.calculateDiameter();

        this.circularLineWidth = diameter * 0.1;
        this.circularDiameter = diameter;
        this.outerElement.style.setProperty(
          "--circular-line-width",
          `${this.circularLineWidth}px`
        );
      }
      this.circularMeter = this.el.shadowRoot?.querySelector(
        ".ic-loading-circular-svg circle:nth-child(2)"
      );
      this.updateCircularProgressMeter();
    } else if (Number(this.progress) >= 0) {
      this.setLinearDeterminateWidth();
    }
  }

  componentWillUpdate(): void {
    this.indeterminate = this.progress === undefined;
  }

  componentDidUpdate(): void {
    if (Number(this.progress) >= 0 && this.type === "linear") {
      this.setLinearDeterminateWidth();
    }
  }

  private updateCircularProgressMeter = () => {
    if (!this.indeterminate && this.circularMeter) {
      this.circularMeter.style.setProperty(
        "--progress-value",
        String(this.progress)
      );
    }
  };

  private getLabel = (labelIndex: number) =>
    new Promise(() => {
      this.interval = setInterval(() => {
        if (labelIndex < this.labelList.length - 1) {
          labelIndex++;
        } else {
          labelIndex = 0;
        }
        this.indicatorLabel = this.labelList[labelIndex];
      }, this.labelDuration);
    });

  private getLabelVariant = (): IcTypographyVariants => {
    let variant: "label" | "h4" | "h2" = "h4";
    const width = this.outerElement?.offsetWidth;
    if (
      this.size === "small" ||
      (width && this.type === "circular" && width < 60)
    ) {
      variant = "label";
    } else if (
      this.size === "large" ||
      (width && this.type === "circular" && width >= 120)
    ) {
      variant = "h2";
    }
    return variant;
  };

  private calculateDiameter = () => {
    const customDiameter = this.el.style.getPropertyValue(
      "--circular-diameter"
    );

    if (customDiameter) {
      const units = customDiameter.match(/\D+$/)?.[0];

      if (!units || units === "px") return parseFloat(customDiameter);

      const customValue = parseFloat(customDiameter.replace(units, ""));
      const parentWidth = this.el.parentElement?.offsetWidth;

      if (units === "rem") return customValue * 16;
      else if (units === "%" && parentWidth)
        return parentWidth * (customValue / 100);
    }

    return LOADING_INDICATOR_WIDTHS[this.size];
  };

  private setLinearDeterminateWidth = () => {
    // Ensure progress cannot be out of bounds
    if (!this.innerElement || !this.progress) return;

    const progress = Math.min(this.max, Math.max(this.min, this.progress));
    const proportion = (progress - this.min) / (this.max - this.min);
    this.clipInnerElement = proportion > 0.5;
    if (this.clipInnerElement) {
      this.innerElement.classList.remove("clip");
    } else {
      this.innerElement.classList.add("clip");
    }
    this.innerElement.style.setProperty(
      "--linear-width",
      `${proportion * 100}%`
    );
  };

  private updateLabel = () => {
    if (!this.label) return;

    if (typeof this.label === "string") {
      this.indicatorLabel = this.label;
    } else {
      this.labelList = this.label;
      this.indicatorLabel = this.labelList[0];
      if (this.labelList.length > 1) {
        this.getLabel(0);
      }
    }
  };

  private setCircleXY = () => {
    if (this.circularDiameter <= 0) return { x: 0, y: 0, r: 0 };

    const r = this.circularDiameter / 2;
    const nextRadius = r - this.circularLineWidth / 2;
    this.setDashSteps(nextRadius);

    return { x: r, y: r, r: nextRadius };
  };

  private setDashSteps = (radius: number) => {
    const dashArray = 2 * Math.PI * radius;

    if (!this.circularMeter) return;

    this.circularMeter.style.setProperty(
      "--stroke-dasharray",
      `${dashArray}px`
    );

    if (this.indeterminate || !this.progress) return;

    const progress = Math.min(Math.max(this.progress, this.min), this.max);
    const proportion = -1 - (progress - this.min) / (this.max - this.min);
    this.circularMeter.style.setProperty("--circular-steps-max", `${this.max}`);
    this.circularMeter.style.setProperty(
      "--stroke-dashoffset",
      `${proportion * dashArray}px`
    );
  };

  render() {
    const {
      theme,
      label,
      description,
      size,
      fullWidth,
      innerLabel,
      monochrome,
      type,
      progress,
      indeterminate,
      min,
      max,
      circularDiameter,
      indicatorLabel,
    } = this;
    const { x, y, r } = this.setCircleXY();

    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
          "ic-loading-indicator-label": !!label,
          "ic-loading-indicator-full-width": fullWidth,
          "inner-label": !!innerLabel,
          "ic-loading-indicator-monochrome": monochrome,
        }}
      >
        <div class="ic-loading-container" part="ic-loading-container">
          <div
            ref={(el) => (this.outerElement = el as HTMLDivElement)}
            class={{
              [`ic-loading-${type}-outer`]: true,
              [indeterminate ? " indeterminate" : " determinate"]: true,
            }}
            role="progressbar"
            aria-labelledby={label && size !== "icon" && "ic-loading-label"}
            aria-label={description}
            aria-valuenow={progress}
            aria-valuemin={min}
            aria-valuemax={max}
          >
            <div
              ref={(el) => (this.innerElement = el as HTMLDivElement)}
              class={`ic-loading-${type}-inner`}
            >
              {innerLabel && size === "small" && (
                <ic-typography variant="subtitle-small" class="inner-text">
                  {innerLabel}
                </ic-typography>
              )}
              {type === "circular" && (
                <svg
                  class="ic-loading-circular-svg"
                  viewBox={`0 0 ${circularDiameter} ${circularDiameter}`}
                >
                  <circle cx={`${x}`} cy={`${y}`} r={`${r}`}></circle>
                  <circle cx={`${x}`} cy={`${y}`} r={`${r}`}></circle>
                </svg>
              )}
            </div>
          </div>
          {label && size !== "icon" && (
            <ic-typography
              id="ic-loading-label"
              class="ic-loading-label"
              role="status"
              variant={this.getLabelVariant()}
            >
              <p>{indicatorLabel}</p>
            </ic-typography>
          )}
        </div>
      </Host>
    );
  }
}
