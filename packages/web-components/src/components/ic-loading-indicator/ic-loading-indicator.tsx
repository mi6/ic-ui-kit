import { Component, Element, h, Host, Prop, State, Watch } from "@stencil/core";
import { IcLoadingSizes, IcLoadingTypes } from "./ic-loading-indicator.types";
import {
  IcThemeForegroundNoDefault,
  IcThemeForegroundEnum,
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
   * Provide a description to be set as the aria-label of the loading indicator when not using a visible label.
   */
  @Prop() description?: string = "Loading";

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
   * When linear, determines whether the full-width version (i.e. without a border radius) should be displayed.
   */
  @Prop({ reflect: true }) fullWidth?: boolean = false;

  /**
   * Determines whether the dark or light loading indicator should be displayed.
   */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";

  @State() indicatorLabel: string;
  @State() indeterminate: boolean;
  @State() showSecond: boolean = false;

  @Watch("label")
  watchPropHandler(): void {
    this.updateLabel();
  }

  private outerElement?: HTMLDivElement;
  private innerElement?: HTMLDivElement;
  private labelList: string[];

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
    const width = this.outerElement?.offsetWidth;
    if (width) {
      this.outerElement.style.setProperty(
        "--circular-line-width",
        `${width * 0.1}px`
      );
    }
  };

  private setDeterminateWidth = () => {
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
      "--circular-rotation",
      `${proportion * 360}deg`
    );
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

  componentWillLoad(): void {
    this.indeterminate = this.progress === undefined;
    this.updateLabel();
  }

  componentDidLoad(): void {
    this.setCircleLineWidth();
    if (Number(this.progress) >= 0) {
      this.setDeterminateWidth();
    }
  }

  componentWillUpdate(): void {
    this.indeterminate = this.progress === undefined;
  }

  componentDidUpdate(): void {
    if (Number(this.progress) >= 0) {
      this.setDeterminateWidth();
    }
  }

  render() {
    const { appearance, label, description, size } = this;
    return (
      <Host class={{ ["light"]: appearance === IcThemeForegroundEnum.Light }}>
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
              {this.indeterminate || <div class="left" />}
              {this.indeterminate || <div class="right" />}
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
