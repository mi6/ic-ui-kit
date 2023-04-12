import { Component, Element, h, Host, Prop, State, Watch } from "@stencil/core";
import {
  IcLoadingCircleXYR,
  IcLoadingSizes,
  IcLoadingTypes,
} from "./ic-loading-indicator.types";
import {
  IcThemeForegroundEnum,
  IcThemeForegroundNoDefault,
} from "../../utils/types";

@Component({
  tag: "ic-loading-indicator",
  styleUrl: "ic-loading-indicator.css",
  shadow: true,
})
export class LoadingIndicator {
  @Element() host: HTMLIcLoadingIndicatorElement;

  /**
   * The current amount of progress made.
   * If not provided, component acts as an indeterminate loading indicator.
   */
  @Prop() progress?: number;

  /**
   * The minimum value that the progress value can take.
   * Used to calculate the proportional width of the progress bar.
   */
  @Prop() min?: number = 0;

  /**
   * The maximum value that the progress value can take.
   * Used to calculate the proportional width of the progress bar.
   */
  @Prop() max?: number = 100;

  /**
   * The label to be displayed beneath the loading indicator.
   * Display a changing label by separating multiple messages with forward slashes.
   */
  @Prop() label?: string;

  /**
   * The description that will be set as the aria-label of the loading indicator when not using a visible label.
   */
  @Prop() description?: string = "Loading";

  /**
   * @internal The step number of a compact step, managed by ic-step.
   */
  @Prop() innerLabel?: number;

  /**
   * The time in milliseconds before the label changes.
   */
  @Prop() labelDuration?: number = 8000;

  /**
   * The size of the loading indicator.
   */
  @Prop({ reflect: true }) size?: IcLoadingSizes = "default";

  /**
   * The type of indicator, either linear or circular.
   */
  @Prop({ reflect: true }) type?: IcLoadingTypes = "circular";

  /**
   * If `true`, when linear, the full-width variant (i.e. without a border radius) will be displayed.
   */
  @Prop({ reflect: true }) fullWidth?: boolean = false;

  /**
   * The appearance of the loading indicator, e.g. dark or light.
   */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";

  @State() indicatorLabel: string;
  @State() indeterminate: boolean;
  @State() showSecond: boolean = false;
  @State() circularLineWidth: number;
  @State() circularDiameter: number;

  @Watch("label")
  watchPropHandler(): void {
    this.updateLabel();
  }

  @Watch("progress")
  watchProgressHandler(): void {
    if (this.type === "circular") {
      this.updateCircularProgressMeter();
    }
  }

  private outerElement?: HTMLDivElement;
  private innerElement?: HTMLDivElement;
  private labelList: string[];
  private circularMeter: SVGCircleElement;

  private updateCircularProgressMeter = () => {
    if (!this.indeterminate) {
      this.circularMeter.style.setProperty(
        "--progress-value",
        String(this.progress)
      );
    }
  };

  private getLabel = (
    labelIndex: number,
    setLabel: (label: string) => void
  ) => {
    return new Promise(() => {
      setInterval(() => {
        if (labelIndex < this.labelList.length - 1) {
          labelIndex++;
        } else {
          labelIndex = 0;
        }
        setLabel(this.labelList[labelIndex]);
      }, this.labelDuration);
    });
  };

  private getLabelVariant = () => {
    let variant: "label" | "h4" | "h2" = "h4";
    const width = this.outerElement?.offsetWidth;
    if (this.size === "small" || (this.type === "circular" && width < 60)) {
      variant = "label";
    } else if (
      this.size === "large" ||
      (this.type === "circular" && width >= 120)
    ) {
      variant = "h2";
    }
    return variant;
  };

  // Sets the circular indicator line width - accounting for the circle size being altered using the CSS custom property
  private setCircleLineWidth = () => {
    const { offsetWidth: width } = this.outerElement;

    const compactStepCircularLineWidth = this.host.classList.contains(
      "compact-step-progress-indicator"
    )
      ? 40
      : 0;
    const toastDismissTimerCircularLineWidth = this.host.classList.contains(
      "toast-dismiss-timer"
    )
      ? 20
      : 0;

    if (
      width ||
      compactStepCircularLineWidth ||
      toastDismissTimerCircularLineWidth
    ) {
      this.circularLineWidth =
        (compactStepCircularLineWidth ||
          toastDismissTimerCircularLineWidth ||
          width) * 0.1;
      this.circularDiameter =
        compactStepCircularLineWidth ||
        toastDismissTimerCircularLineWidth ||
        width;
      this.outerElement.style.setProperty(
        "--circular-line-width",
        `${this.circularLineWidth}px`
      );
    }
  };

  private setLinearDeterminateWidth = () => {
    if (!this.innerElement) return;
    // Ensure progress cannot be out of bounds

    const progress = Math.min(this.max, Math.max(this.min, this.progress));
    const proportion = (progress - this.min) / (this.max - this.min);
    this.showSecond = proportion > 0.5;
    if (this.showSecond) {
      this.innerElement.classList.remove("clip");
    } else {
      this.innerElement.classList.add("clip");
    }
    this.innerElement.style.setProperty(
      "--linear-width",
      `${proportion * 100}%`
    );
  };

  private calcOuterClass = (): string => {
    let cls = `ic-loading-${this.type}-outer`;
    cls += this.indeterminate ? " indeterminate" : " determinate";
    return cls;
  };

  private updateLabel = (): void => {
    if (this.label !== undefined) {
      this.labelList = this.label.split("/");
      const labelIndex = 0;
      this.indicatorLabel = this.labelList[labelIndex];
      if (this.labelList.length > 1) {
        this.getLabel(labelIndex, (label) => {
          this.indicatorLabel = label;
        });
      }
    }
  };

  private setCircleXY = (): IcLoadingCircleXYR => {
    if (this.circularDiameter > 0) {
      const r = this.circularDiameter / 2;
      const x = r;
      const y = r;
      const nextRadius = r - this.circularLineWidth / 2;
      this.setDashSteps(nextRadius);

      return { x, y, r: nextRadius };
    }
    return { x: 0, y: 0, r: 0 };
  };

  private setDashSteps = (radius: number) => {
    const dashArray = 2 * Math.PI * radius;
    const progress = Math.min(Math.max(this.progress, this.min), this.max);
    const proportion = -1 - (progress - this.min) / (this.max - this.min);

    this.circularMeter.style.setProperty(
      "--stroke-dasharray",
      `${dashArray}px`
    );

    if (!this.indeterminate) {
      this.circularMeter.style.setProperty(
        "--circular-steps-max",
        String(this.max)
      );
      this.circularMeter.style.setProperty(
        "--stroke-dashoffset",
        `${proportion * dashArray}px`
      );
    }
  };

  componentWillLoad(): void {
    this.indeterminate = this.progress === undefined;
    this.updateLabel();
  }

  componentDidLoad(): void {
    if (this.type === "circular") {
      this.setCircleLineWidth();
      this.circularMeter = this.host.shadowRoot.querySelector(
        ".ic-loading-circular-svg circle:nth-child(2)"
      );
      this.updateCircularProgressMeter();
    }

    if (Number(this.progress) >= 0 && this.type === "linear") {
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

  render() {
    const { appearance, label, description, size, fullWidth, innerLabel } =
      this;
    const { x, y, r } = this.setCircleXY();

    return (
      <Host
        class={{
          ["light"]: appearance === IcThemeForegroundEnum.Light,
          ["label"]: !!label,
          ["full-width"]: fullWidth,
          ["inner-label"]: !!innerLabel,
        }}
      >
        <div class="ic-loading-container">
          <div
            ref={(el) => (this.outerElement = el as HTMLDivElement)}
            class={this.calcOuterClass()}
            role="progressbar"
            aria-labelledby={
              this.label && this.size !== "icon" && "ic-loading-label"
            }
            aria-label={description}
            aria-valuenow={this.progress}
            aria-valuemin={this.min}
            aria-valuemax={this.max}
          >
            <div
              ref={(el) => (this.innerElement = el as HTMLDivElement)}
              class={`ic-loading-${this.type}-inner`}
            >
              {this.innerLabel &&
                this.innerLabel !== undefined &&
                this.size === "small" && (
                  <ic-typography variant="subtitle-small" class="inner-text">
                    {this.innerLabel}
                  </ic-typography>
                )}
              {this.type === "circular" && (
                <svg
                  class="ic-loading-circular-svg"
                  viewBox={`0 0 ${this.circularDiameter || 0} ${
                    this.circularDiameter || 0
                  }`}
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
              <p>{this.indicatorLabel}</p>
            </ic-typography>
          )}
        </div>
      </Host>
    );
  }
}
