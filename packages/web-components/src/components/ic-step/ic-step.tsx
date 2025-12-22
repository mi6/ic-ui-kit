import { Component, Host, h, Prop, Element, Watch } from "@stencil/core";
import checkIcon from "../../assets/check-icon.svg";
import warningIcon from "../../assets/warning-icon-outline.svg";
import {
  IcStepVariants,
  IcStepStatuses,
  IcStepTypes,
  IcStepI18n,
} from "./ic-step.types";
import { isPropDefined, isSlotUsed } from "../../utils/helpers";
import { IcThemeMode } from "../../utils/types";

/**
 * @slot heading - Content will be rendered in place of the heading prop.
 */
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
   * Words within the component that can be replaced to translate the component into a different language
   */
  @Prop() icI18n: IcStepI18n = {
    next: "Next",
    step: "Step",
    steps: "Steps",
    of: "of",
    lastStep: "Last step",
    completed: "Completed",
    notRequired: "Not required",
    required: "Required",
    optional: "Optional",
  };

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
   * @internal Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

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
    const {
      compactStepStyling,
      current,
      heading,
      icI18n,
      lastStep,
      lastStepNum,
      nextStepHeading,
      progress,
      status,
      stepNum,
      subheading,
      theme,
      type,
      variant,
    } = this;

    // ARIA LABEL
    let ariaLabel = "";

    const hasHeading =
      (isPropDefined(heading) && heading !== "") ||
      isSlotUsed(this.el, "heading");

    if (type === "completed") {
      ariaLabel = `. ${icI18n.completed}`;
    } else if (type === "disabled") {
      ariaLabel = `. ${icI18n.notRequired}`;
    } else if (status === "required") {
      ariaLabel = `. ${icI18n.required}`;
    } else if (status === "optional") {
      ariaLabel = `. ${icI18n.optional}`;
    }

    // STEP STATUS
    let stepStatus;
    if (status && isPropDefined(status)) {
      stepStatus = status[0].toUpperCase() + status.slice(1);
    }

    // STEP TYPE
    let stepType;
    if (type === "disabled" || compactStepStyling === "disabled") {
      stepType = icI18n.notRequired;
    } else if (compactStepStyling === "completed") {
      stepType = icI18n.completed;
    }

    // STATUS ICON FOR COMPACT STEP
    let statusIcon;
    if (type === "completed" || compactStepStyling === "completed") {
      statusIcon = (
        <span
          class="check-icon step-icon"
          aria-hidden="true"
          innerHTML={checkIcon}
        ></span>
      );
    } else if (type === "disabled" || compactStepStyling === "disabled") {
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
          ["current"]: !!current,
          [`compact-step-${compactStepStyling}`]: !!compactStepStyling,
          ["disabled"]:
            type === "disabled" || compactStepStyling === "disabled",
        }}
      >
        <ic-loading-indicator
          class={{
            "compact-step-progress-indicator": true,
            "not-required":
              type === "disabled" || compactStepStyling === "disabled",
          }}
          aria-hidden="true"
          size="small"
          inner-label={stepNum}
          progress={progress}
        ></ic-loading-indicator>
        <div class="heading-area">
          {isSlotUsed(this.el, "heading") ? (
            <slot name="heading"></slot>
          ) : (
            <ic-typography variant="h4" class="heading">
              {heading}
            </ic-typography>
          )}
          <div class="info-line">
            <ic-typography variant="caption" class="step-num">
              {`${stepNum} ${icI18n.of} ${lastStepNum}`}
              <span class="visually-hidden">{` ${icI18n.steps}`}</span>
            </ic-typography>
            {(this.subheading ||
              type === "completed" ||
              type === "disabled" ||
              (this.variant === "compact" &&
                !!compactStepStyling &&
                compactStepStyling !== "active") ||
              !!status) && (
              <div class="step-status">
                {statusIcon !== undefined && statusIcon}
                {(subheading || stepType) && (
                  <ic-typography variant="caption">
                    {subheading !== null && isPropDefined(subheading)
                      ? subheading
                      : type === "disabled" ||
                        (variant === "compact" &&
                          compactStepStyling === "disabled") ||
                        type === "completed" ||
                        (variant === "compact" &&
                          compactStepStyling === "completed")
                      ? stepType
                      : status && stepStatus}
                  </ic-typography>
                )}
              </div>
            )}
          </div>
          {lastStep ? (
            <ic-typography variant="subtitle-small" class="next-step">
              {icI18n.lastStep}
            </ic-typography>
          ) : (
            isPropDefined(nextStepHeading) && (
              <ic-typography variant="subtitle-small" class="next-step">
                {icI18n.next}
                <span class="visually-hidden"> {icI18n.step}</span>:{" "}
                {this.nextStepHeading}
              </ic-typography>
            )
          )}
        </div>
      </div>
    );

    // ICON FOR DEFAULT STEP
    let icon;
    if (type !== "completed") {
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
    const partialBar = type === "current" && (
      <div class="step-connect-inner"></div>
    );

    const finalStep = !lastStep && (
      <div
        class={{
          ["step-connect"]: true,
          ["aligned-full-width"]: !!(
            this.el.parentElement?.classList.contains("ic-stepper-default") &&
            !this.el.parentElement.classList.contains("ic-stepper-aligned-left")
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
          [`${type}`]: true,
        }}
      >
        <div class="step-top">
          <div class="step-icon">{icon}</div>
          {finalStep}
        </div>
        {(hasHeading || subheading || status) && (
          <div class="heading-area">
            {isSlotUsed(this.el, "heading") ? (
              <slot name="heading"></slot>
            ) : (
              <ic-typography variant="subtitle-large" class="heading">
                {heading}
              </ic-typography>
            )}
            {hasHeading && (subheading || status) && (
              <ic-typography variant="caption" class="subheading">
                {subheading !== null && isPropDefined(subheading)
                  ? subheading
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
        aria-label={`${icI18n.step} ${stepNum}${ariaLabel}`}
        aria-current={(current || type === "current") && "step"}
        class={{
          ["aligned-full-width"]: !!(
            this.el.parentElement?.classList.contains("ic-stepper-default") &&
            !this.el.parentElement.classList.contains("ic-stepper-aligned-left")
          ),
          [`ic-step-${variant}`]: true,
          [`ic-theme-${theme}`]: this.theme !== "inherit",
        }}
      >
        {variant === "compact" ? compactStep : defaultStep}
      </Host>
    );
  }
}
