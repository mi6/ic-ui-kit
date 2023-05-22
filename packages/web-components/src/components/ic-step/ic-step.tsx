import { Component, Host, h, Prop, Element, Watch } from "@stencil/core";
import checkIcon from "../../assets/check-icon.svg";
import warningIcon from "../../assets/warning-icon-outline.svg";
import { IcStepVariants, IcStepStatuses, IcStepTypes } from "./ic-step.types";

@Component({
  tag: "ic-step",
  styleUrl: "ic-step.css",
  shadow: true,
})
export class Step {
  @Element() el: HTMLIcStepElement;
  /**
   * @internal The variant of the step. This is managed by ic-stepper.
   */
  @Prop() variant!: IcStepVariants;

  /**
   * The title of the step within the stepper.
   */
  @Prop() stepTitle?: string;

  /**
   * Additional information about the step. Use this prop to override the default step status messaging displayed when selecting a step type or step status.
   */
  @Prop() stepSubtitle?: string;

  /**
   * The status of the step. Use this prop to display a status message on the step if it is required or optional.
   */
  @Prop() stepStatus?: IcStepStatuses;

  /**
   * The state of the step within the stepper.
   */
  @Prop() stepType?: IcStepTypes = "active";

  /**
   * @internal If `true`, and a compact stepper  is being used, the current step will be the only step in view.
   */
  @Prop({ mutable: true }) current?: boolean = false;

  /**
   * @internal If a compact stepper is being used, this sets the styling of the step.
   */
  @Prop() compactStepStyling?: IcStepTypes;

  /**
   * @internal The step number, managed by ic-stepper.
   */
  @Prop() stepNum?: number;

  /**
   * @internal If `true`, the step will be marked as being the last one in the series. This is managed by ic-stepper.
   */
  @Prop() lastStep!: boolean;

  /**
   * @internal The step number of the final step. This is managed by ic-stepper.
   */
  @Prop() lastStepNum?: number;

  /**
   * @internal The name of the next step. This is managed by ic-stepper.
   */
  @Prop() nextStepTitle?: string;

  /**
   * @internal The progress of the next step, calculated by dividing the current step number by the total number of steps. This is managed by ic-stepper.
   */
  @Prop() progress?: number;

  @Watch("stepType")
  stepTypeChangeHandler(): void {
    if (this.variant === "compact" && this.stepType === "current") {
      this.current = true;
    } else {
      this.current = false;
    }
  }

  render() {
    // ARIA LABEL
    let ariaLabel = "";

    if (this.stepType === "completed") {
      ariaLabel = ". Completed step";
    } else if (this.stepType === "disabled") {
      ariaLabel = ". Non-required step";
    } else if (this.stepStatus === "required") {
      ariaLabel = ". Required step";
    } else if (this.stepStatus === "optional") {
      ariaLabel = ". Optional step";
    }

    // STEP STATUS
    let stepStatus;
    if (this.stepStatus) {
      stepStatus = this.stepStatus[0].toUpperCase() + this.stepStatus.slice(1);
    }

    // STEP TYPE
    let stepType;
    if (
      this.stepType === "disabled" ||
      this.compactStepStyling === "disabled"
    ) {
      stepType = "Not required";
    } else if (this.compactStepStyling === "completed") {
      stepType = "Completed";
    }

    // STATUS ICON FOR COMPACT STEP
    let statusIcon;
    if (
      this.stepType === "completed" ||
      this.compactStepStyling === "completed"
    ) {
      statusIcon = (
        <span
          class="check-icon step-icon"
          aria-hidden="true"
          innerHTML={checkIcon}
        ></span>
      );
    } else if (
      this.stepType === "disabled" ||
      this.compactStepStyling === "disabled"
    ) {
      statusIcon = (
        <span
          class="warning-icon step-icon"
          aria-hidden="true"
          innerHTML={warningIcon}
        ></span>
      );
    }

    // COMPACT STEP COMPONENT
    const compactStep = (
      <div
        class={{
          ["step"]: true,
          ["current"]: this.current,
          [`compact-step-${this.compactStepStyling}`]:
            !!this.compactStepStyling,
        }}
      >
        <ic-loading-indicator
          class={{
            "compact-step-progress-indicator": true,
            "not-required":
              this.stepType === "disabled" ||
              this.compactStepStyling === "disabled",
          }}
          aria-hidden="true"
          size="small"
          inner-label={this.stepNum}
          progress={this.progress}
        ></ic-loading-indicator>
        <div class="step-title-area">
          <ic-typography variant="h4" class="step-title">
            {this.stepTitle}
          </ic-typography>
          <div class="info-line">
            <ic-typography variant="caption" class="step-num">
              {`${this.stepNum} of ${this.lastStepNum}`}
              <span class="visually-hidden"> steps</span>
            </ic-typography>
            {(this.stepSubtitle ||
              this.stepType === "completed" ||
              this.stepType === "disabled" ||
              (this.variant === "compact" &&
                !!this.compactStepStyling &&
                this.compactStepStyling !== "active") ||
              !!this.stepStatus) && (
              <div class="step-status">
                {statusIcon !== undefined && statusIcon}
                {(this.stepSubtitle || stepType) && (
                  <ic-typography variant="caption">
                    {this.stepSubtitle !== null &&
                    this.stepSubtitle !== undefined
                      ? this.stepSubtitle
                      : this.stepType === "disabled" ||
                        (this.variant === "compact" &&
                          this.compactStepStyling === "disabled") ||
                        this.stepType === "completed" ||
                        (this.variant === "compact" &&
                          this.compactStepStyling === "completed")
                      ? stepType
                      : this.stepStatus && stepStatus}
                  </ic-typography>
                )}
              </div>
            )}
          </div>
          {this.lastStep ? (
            <ic-typography variant="subtitle-small" class="next-step">
              Last step
            </ic-typography>
          ) : (
            this.nextStepTitle !== undefined && (
              <ic-typography variant="subtitle-small" class="next-step">
                Next<span class="visually-hidden"> step is</span>:{" "}
                {this.nextStepTitle}
              </ic-typography>
            )
          )}
        </div>
      </div>
    );

    // ICON FOR DEFAULT STEP
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

    // STEP CONNECT FOR DEFAULT STEP
    const partialBar = this.stepType === "current" && (
      <div class="step-connect-inner"></div>
    );

    const finalStep = !this.lastStep && (
      <div
        class={{
          ["step-connect"]: true,
          ["aligned-full-width"]:
            this.el.parentElement.classList.contains("default") &&
            !this.el.parentElement.classList.contains("aligned-left"),
        }}
      >
        {partialBar}
      </div>
    );

    // DEFAULT STEP COMPONENT
    const defaultStep = (
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
        {(this.stepTitle || this.stepSubtitle || this.stepStatus) && (
          <div class="step-title-area">
            {this.stepTitle && (
              <ic-typography variant="subtitle-large" class="step-title">
                {this.stepTitle}
              </ic-typography>
            )}
            {this.stepTitle && (this.stepSubtitle || this.stepStatus) && (
              <ic-typography variant="caption" class="step-subtitle">
                {this.stepSubtitle !== null && this.stepSubtitle !== undefined
                  ? this.stepSubtitle
                  : stepStatus}
              </ic-typography>
            )}
          </div>
        )}
      </div>
    );

    return (
      <Host
        role="listitem"
        aria-label={`Step ${this.stepNum}${ariaLabel}`}
        aria-current={(this.current || this.stepType === "current") && "step"}
        class={{
          ["aligned-full-width"]:
            this.el.parentElement.classList.contains("default") &&
            !this.el.parentElement.classList.contains("aligned-left"),
          [`${this.variant}`]: true,
        }}
      >
        {this.variant === "compact" ? compactStep : defaultStep}
      </Host>
    );
  }
}
