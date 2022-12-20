import { Component, Host, h, Prop, Element } from "@stencil/core";
import checkIcon from "../../assets/check-icon.svg";
import { IcStepTypes } from "./ic-step.types";

@Component({
  tag: "ic-step",
  styleUrl: "ic-step.css",
  shadow: true,
})
export class Step {
  @Element() el: HTMLIcStepElement;
  /**
   * State of step
   */
  @Prop() stepType?: IcStepTypes = "active";

  /**
   * Name of step
   */
  @Prop() stepTitle?: string;

  /**
   * Additional information about step
   */
  @Prop() stepSubtitle?: string;

  /**
   * @internal The step number, managed by ic-stepper
   */
  @Prop() stepNum?: number;

  /**
   * @internal Final step in series flag, managed by ic-stepper
   */
  @Prop() lastStep?: boolean;

  render() {
    let icon;
    if (this.stepType !== "completed") {
      icon = (
        <ic-typography variant="subtitle-small">
          <span class="step-icon-inner" aria-hidden="true">
            {this.stepNum}
          </span>
        </ic-typography>
      );
    } else {
      icon = (
        <div class="step-icon-inner" aria-hidden="true">
          <span class="check-icon" innerHTML={checkIcon}></span>
        </div>
      );
    }

    let ariaLabel = "";

    if (this.stepType === "completed") {
      ariaLabel = ". Completed step";
    } else if (this.stepType === "disabled") {
      ariaLabel = ". Disabled step";
    }

    const partialBar = this.stepType === "current" && (
      <div class="step-connect-inner"></div>
    );
    const finalStep = !this.lastStep && (
      <div
        class={{
          ["step-connect"]: true,
          ["aligned-full-width"]:
            this.el.parentElement.classList.contains("aligned-full-width"),
        }}
      >
        {partialBar}
      </div>
    );

    return (
      <Host
        role="listitem"
        aria-label={`Step ${this.stepNum}${ariaLabel}`}
        aria-current={this.stepType == "current" ? "step" : null}
        class={{
          ["aligned-full-width"]:
            this.el.parentElement.classList.contains("aligned-full-width"),
        }}
      >
        <div
          class={{
            ["step"]: true,
            [`${this.stepType}`]: true,
          }}
        >
          <div class="step-top">
            <div class="step-icon">{icon}</div>
            {finalStep}
          </div>
          {(this.stepTitle || this.stepSubtitle) && (
            <div class="step-title-area">
              {this.stepTitle && (
                <ic-typography variant="subtitle-large" class="step-title">
                  {this.stepTitle}
                </ic-typography>
              )}
              {this.stepSubtitle && (
                <ic-typography variant="caption" class="step-subtitle">
                  {this.stepSubtitle}
                </ic-typography>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }
}
