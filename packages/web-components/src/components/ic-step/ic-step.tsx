import { Component, Host, h, Prop, Element, Watch } from "@stencil/core";
import checkIcon from "../../assets/check-icon.svg";
import warningIcon from "../../assets/warning-icon-outline.svg";
import { IcStepVariants, IcStepStatuses, IcStepTypes } from "./ic-step.types";
import { isPropDefined } from "../../utils/helpers";

@Component({
  tag: "ic-step",
  styleUrl: "ic-step.css",
  shadow: true,
})
export class Step {
  @Element() el: HTMLIcStepElement;

  /**
   * @internal If a compact stepper is being used, this sets the styling of the step.
   */
  @Prop() compactStepStyling?: IcStepTypes;

  /**
   * @internal If `true`, and a compact stepper  is being used, the current step will be the only step in view.
   */
  @Prop({ mutable: true }) current?: boolean = false;

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
  @Prop() nextStepHeading?: string;

  /**
   * @internal The progress of the next step, calculated by dividing the current step number by the total number of steps. This is managed by ic-stepper.
   */
  @Prop() progress?: number;

  /**
   * @internal The step number, managed by ic-stepper.
   */
  @Prop() stepNum?: number;

  /**
   * The status of the step. Use this prop to display a status message on the step if it is required or optional.
   */
  @Prop() status?: IcStepStatuses;

  /**
   * Additional information about the step. Use this prop to override the default step status messaging displayed when selecting a step type or step status.
   */
  @Prop() subheading?: string;

  /**
   * The title of the step within the stepper.
   */
  @Prop() heading?: string;

  /**
   * @internal The variant of the step. This is managed by ic-stepper.
   */
  @Prop() variant!: IcStepVariants;

  /**
   * The state of the step within the stepper.
   */
  @Prop() type?: IcStepTypes = "active";

  @Watch("type")
  typeChangeHandler(): void {
    if (this.variant === "compact" && this.type === "current") {
      this.current = true;
    } else {
      this.current = false;
    }
  }

  render() {
    // ARIA LABEL
    let ariaLabel = "";

    if (this.type === "completed") {
      ariaLabel = ". Completed step";
    } else if (this.type === "disabled") {
      ariaLabel = ". Non-required step";
    } else if (this.status === "required") {
      ariaLabel = ". Required step";
    } else if (this.status === "optional") {
      ariaLabel = ". Optional step";
    }

    // STEP STATUS
    let stepStatus;
    if (isPropDefined(this.status)) {
      stepStatus = this.status[0].toUpperCase() + this.status.slice(1);
    }

    // STEP TYPE
    let stepType;
    if (this.type === "disabled" || this.compactStepStyling === "disabled") {
      stepType = "Not required";
    } else if (this.compactStepStyling === "completed") {
      stepType = "Completed";
    }

    // STATUS ICON FOR COMPACT STEP
    let statusIcon;
    if (this.type === "completed" || this.compactStepStyling === "completed") {
      statusIcon = (
        <span
          class="check-icon step-icon"
          aria-hidden="true"
          innerHTML={checkIcon}
        ></span>
      );
    } else if (
      this.type === "disabled" ||
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
              this.type === "disabled" ||
              this.compactStepStyling === "disabled",
          }}
          aria-hidden="true"
          size="small"
          inner-label={this.stepNum}
          progress={this.progress}
        ></ic-loading-indicator>
        <div class="heading-area">
          <ic-typography variant="h4" class="heading">
            {this.heading}
          </ic-typography>
          <div class="info-line">
            <ic-typography variant="caption" class="step-num">
              {`${this.stepNum} of ${this.lastStepNum}`}
              <span class="visually-hidden"> steps</span>
            </ic-typography>
            {(this.subheading ||
              this.type === "completed" ||
              this.type === "disabled" ||
              (this.variant === "compact" &&
                !!this.compactStepStyling &&
                this.compactStepStyling !== "active") ||
              !!this.status) && (
              <div class="step-status">
                {statusIcon !== undefined && statusIcon}
                {(this.subheading || stepType) && (
                  <ic-typography variant="caption">
                    {this.subheading !== null && isPropDefined(this.subheading)
                      ? this.subheading
                      : this.type === "disabled" ||
                        (this.variant === "compact" &&
                          this.compactStepStyling === "disabled") ||
                        this.type === "completed" ||
                        (this.variant === "compact" &&
                          this.compactStepStyling === "completed")
                      ? stepType
                      : this.status && stepStatus}
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
            isPropDefined(this.nextStepHeading) && (
              <ic-typography variant="subtitle-small" class="next-step">
                Next<span class="visually-hidden"> step is</span>:{" "}
                {this.nextStepHeading}
              </ic-typography>
            )
          )}
        </div>
      </div>
    );

    // ICON FOR DEFAULT STEP
    let icon;
    if (this.type !== "completed") {
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
    const partialBar = this.type === "current" && (
      <div class="step-connect-inner"></div>
    );

    const finalStep = !this.lastStep && (
      <div
        class={{
          ["step-connect"]: true,
          ["aligned-full-width"]:
            this.el.parentElement.classList.contains("ic-stepper-default") &&
            !this.el.parentElement.classList.contains(
              "ic-stepper-aligned-left"
            ),
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
          [`${this.type}`]: true,
        }}
      >
        <div class="step-top">
          <div class="step-icon">{icon}</div>
          {finalStep}
        </div>
        {(this.heading || this.subheading || this.status) && (
          <div class="heading-area">
            {this.heading && (
              <ic-typography variant="subtitle-large" class="heading">
                {this.heading}
              </ic-typography>
            )}
            {this.heading && (this.subheading || this.status) && (
              <ic-typography variant="caption" class="subheading">
                {this.subheading !== null && isPropDefined(this.subheading)
                  ? this.subheading
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
        aria-current={(this.current || this.type === "current") && "step"}
        class={{
          ["aligned-full-width"]:
            this.el.parentElement.classList.contains("ic-stepper-default") &&
            !this.el.parentElement.classList.contains(
              "ic-stepper-aligned-left"
            ),
          [`ic-step-${this.variant}`]: true,
          ["ic-step-light"]:
            (this.el.parentElement as HTMLIcStepperElement)?.appearance ===
            "light",
        }}
      >
        {this.variant === "compact" ? compactStep : defaultStep}
      </Host>
    );
  }
}
