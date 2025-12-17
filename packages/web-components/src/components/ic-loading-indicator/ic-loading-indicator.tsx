import { Component, Element, h, Host, Prop, State, Watch } from "@stencil/core";
import {
  IcLoadingCircleXYR,
  IcLoadingSizes,
  IcLoadingTypes,
} from "./ic-loading-indicator.types";
import { IcThemeMode } from "../../utils/types";

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
  private innerElement?: HTMLDivElement;
  private interval: ReturnType<typeof setInterval>;
  private labelList: string[] = [];
  private outerElement?: HTMLDivElement;

  @Element() el: HTMLIcLoadingIndicatorElement;

  @State() circularDiameter = 0;
  @State() circularLineWidth = 0;
  @State() circularDimensions: IcLoadingCircleXYR = {
    x: 0,
    y: 0,
    r: 0,
  };
  @State() indicatorLabel?: string;
  @State() clipInnerElement = false;
  @State() internalType: IcLoadingTypes = "circular";

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
   * The label to be displayed beneath the loading indicator.
   * Display a changing label by supplying an array of messages.
   */
  @Prop() label?: string | string[];
  @Watch("label")
  watchPropHandler(): void {
    this.updateLabel();
  }

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
   * The current amount of progress made.
   * If not provided, component acts as an indeterminate loading indicator.
   */
  @Prop() progress?: number;
  @Watch("max")
  @Watch("min")
  @Watch("progress")
  handleProgressChange(): void {
    if (this.internalType === "linear") {
      this.setLinearDeterminateWidth();
    } else {
      this.setCircleDimensions();
    }
  }

  /**
   * The size of the loading indicator.
   */
  @Prop({ reflect: true }) size: IcLoadingSizes = "medium";
  @Watch("size")
  handleIconSize(): void {
    this.setIndicatorDimensions();
  }

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * The type of indicator, either linear or circular. When size is set to 'icon' the type will be set to circular.
   */
  @Prop({ reflect: true }) type: IcLoadingTypes = "circular";
  @Watch("type")
  setIndicatorDimensions(): void {
    this.setInternalType();
    if (this.internalType === "circular") {
      // Sets the circular indicator line width - accounting for the circle size being altered using the CSS custom property
      const diameter = this.calculateWidth();
      if (this.outerElement && diameter !== this.circularDiameter) {
        this.circularLineWidth = diameter * 0.1;
        this.circularDiameter = diameter;
        this.outerElement.style.setProperty(
          "--circular-line-width",
          `${this.circularLineWidth}px`
        );
      }
      this.setCircleDimensions();
    } else {
      this.setLinearDeterminateWidth();
    }
  }

  disconnectedCallback(): void {
    clearInterval(this.interval);
  }

  componentWillLoad(): void {
    this.updateLabel();
    this.el.setAttribute("exportparts", "ic-loading-container");
  }

  componentDidLoad(): void {
    this.setIndicatorDimensions();
  }

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

  private getLabelVariant = () => {
    const width = this.internalType === "circular" ? this.calculateWidth() : 0;

    if (this.size === "small" || (width && width < 60)) {
      return "label";
    } else if (this.size === "large" || width >= 120) {
      return "h2";
    }
    return "h4";
  };

  private calculateWidth = () => {
    if (this.outerElement?.offsetWidth) return this.outerElement.offsetWidth;

    if (this.outerElement) {
      const { width } = window.getComputedStyle(this.outerElement);

      if (width) {
        // Regex to check the units of the css string
        if (width.match(/\D+$/)?.[0] !== "%") return parseFloat(width);

        const parentWidth = this.outerElement.parentElement?.offsetWidth;
        if (parentWidth) return parentWidth * (parseFloat(width) / 100);
      }
    }

    return LOADING_INDICATOR_WIDTHS[this.size];
  };

  private calculateProportion = (progress: number) => {
    const minProgress = Math.min(this.max, Math.max(this.min, progress));
    return (minProgress - this.min) / (this.max - this.min);
  };

  private setLinearDeterminateWidth = () => {
    // Ensure progress cannot be out of bounds
    if (!this.innerElement || !this.progress) return;

    const proportion = this.calculateProportion(this.progress);
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

  private setInternalType = () => {
    this.internalType = this.type;
    if (this.type == "linear") {
      this.internalType = this.size == "icon" ? "circular" : "linear";
    }
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

  private setCircleDimensions = () => {
    if (this.circularDiameter <= 0) return;

    const r = this.circularDiameter / 2;
    const nextRadius = r - this.circularLineWidth / 2;
    const dashArray = 2 * Math.PI * nextRadius;

    this.circularDimensions = {
      x: r,
      y: r,
      r: nextRadius,
      dashArray: `${dashArray}px`,
      dashOffset: this.progress
        ? `${(-1 - this.calculateProportion(this.progress)) * dashArray}px`
        : undefined,
    };
  };

  render() {
    const {
      circularDiameter,
      circularDimensions: { x, y, r, dashArray, dashOffset },
      description,
      fullWidth,
      indicatorLabel,
      innerLabel,
      internalType,
      label,
      max,
      min,
      monochrome,
      progress,
      size,
      theme,
    } = this;

    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
          "ic-loading-indicator-full-width": fullWidth,
          "ic-loading-indicator-label": !!label,
          "ic-loading-indicator-monochrome": monochrome,
          [`ic-loading-indicator-size-${size}`]: true,
        }}
      >
        <div class="ic-loading-container" part="ic-loading-container">
          <div
            ref={(el) => (this.outerElement = el)}
            class={{
              [`ic-loading-${internalType}-outer`]: true,
              [progress === undefined ? "indeterminate" : "determinate"]: true,
            }}
            role="progressbar"
            aria-labelledby={label && size !== "icon" && "ic-loading-label"}
            aria-label={description}
            aria-valuenow={progress}
            aria-valuemin={min}
            aria-valuemax={max}
          >
            <div
              ref={(el) => (this.innerElement = el)}
              class={{
                [`ic-loading-${internalType}-inner`]: true,
                "inner-label": !!innerLabel,
              }}
            >
              {innerLabel && size === "small" && (
                <ic-typography variant="subtitle-small" class="inner-text">
                  {innerLabel}
                </ic-typography>
              )}
              {internalType === "circular" && (
                <svg
                  class="ic-loading-circular-svg"
                  viewBox={`0 0 ${circularDiameter} ${circularDiameter}`}
                >
                  <circle cx={x} cy={y} r={r}></circle>
                  <circle
                    style={{
                      "--circular-steps-max": progress ? `${max}` : undefined,
                      "--progress-value":
                        progress !== undefined ? `${progress}` : undefined,
                      "--stroke-dasharray": dashArray,
                      "--stroke-dashoffset": dashOffset,
                    }}
                    cx={x}
                    cy={y}
                    r={r}
                  ></circle>
                </svg>
              )}
            </div>
          </div>
          {label && size !== "icon" && (
            <ic-typography
              id="ic-loading-label"
              class="ic-loading-label"
              role="alert"
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
