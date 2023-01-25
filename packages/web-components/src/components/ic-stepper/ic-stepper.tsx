import { Component, Element, Host, Prop, h, State } from "@stencil/core";
import { checkResizeObserver } from "../../utils/helpers";
import { IcStepperAlignment } from "./ic-stepper.types";
import { IcStepTypes, IcStepVariants } from "../ic-step/ic-step.types";

@Component({
  tag: "ic-stepper",
  styleUrl: "ic-stepper.css",
  shadow: true,
})
export class Stepper {
  @Element() el: HTMLIcStepperElement;

  /**
   * The alignment of the default stepper within its container.
   */
  @Prop() aligned?: IcStepperAlignment = "full-width";

  /**
   * The variant of the stepper.
   */
  @Prop({ mutable: true }) variant?: IcStepVariants = "default";

  /**
   * The length of the connnector between each step in pixels. Minimum length is 100px.
   */
  @Prop() connectorWidth?: number = 100;

  /**
   * If `true`, the information about each step, i.e. step title, step subtitle and step status, will be hidden on all default steps. The information about each step will still be visible in the compact variant of the stepper.
   */
  @Prop() hideStepInfo?: boolean = false;

  @State() stepperWidth: number = document
    .querySelector("ic-stepper")
    .getBoundingClientRect().width;

  @State() lastStepWidth: number = 0;

  @State() stepTypes: IcStepTypes[] = [];

  @State() alignedFullWidth: boolean = true;

  @State() autoSetStepTitles: boolean = true;

  @State() variantOverride?: boolean = this.variant !== "compact";

  @State() noOfResizes?: number = 0;

  private steps: HTMLIcStepElement[];

  private stepsWithStepTitles: HTMLIcStepElement[];

  private resizeObserver: ResizeObserver = null;

  // Get all steps currently within this stepper
  private getChildren = (): void => {
    this.steps = Array.from(this.el.querySelectorAll("ic-step"));

    this.stepsWithStepTitles = Array.from(
      this.el.querySelectorAll("ic-step[step-title]")
    );
  };

  // Inform the user that stepTitles are required on all steps in a compact stepper
  private checkStepTitles = (): void => {
    if (
      this.stepsWithStepTitles.length < this.steps.length &&
      this.variantOverride &&
      this.variant === "compact"
    ) {
      this.noOfResizes = this.noOfResizes + 1;
      if (this.noOfResizes === 1) {
        console.error(
          `The prop 'step-title' (web components) / 'stepTitle' (react) is required for all steps of the Stepper component (compact variant)`
        );
      }
    }
  };

  private setStepTypes = (): void => {
    this.getChildren();
    this.stepTypes = [];
    for (let i = 0; i < this.steps.length; i++) {
      this.stepTypes.push("active");
    }
  };

  private setStepperWidth = (): void => {
    this.alignedFullWidth =
      this.variant === "default" && this.aligned === "full-width";

    const lastStep = this.steps[this.steps.length - 1];
    lastStep.style.maxWidth = "none";

    if (this.alignedFullWidth) {
      this.stepperWidth = this.el.offsetWidth;
      lastStep.style.maxWidth = this.pxToRem(`${this.stepperWidth / this.steps.length}px`);
      this.lastStepWidth = lastStep.offsetWidth;
    }
  };

  private pxToRem = (px: string, base = 16) => {
    const tempPx = parseInt(px)
    return (1 / base) * tempPx + 'rem'
  }

  private initialiseStepStates = (): void => {
    this.steps.forEach((step, index) => {
      // Set variant
      step.variant = this.variant;
      // Assign stepNum to each step
      step.stepNum = index + 1;
      // Assign lastStep to final step
      step.lastStep = index === this.steps.length - 1;
      step.lastStepNum = this.steps.length;

      if (step.stepType !== "current") {
        step.current = false;
        this.stepTypes[index] = step.stepType;
      } else {
        step.current = true;
      }

      const stepTitleArea =
        step.shadowRoot &&
        step.shadowRoot.querySelector(".step > .step-title-area");

      if (this.stepsWithStepTitles.length == 0 && this.variantOverride) {
        if (this.variant === "compact") {
          this.autoSetStepTitles = true;
          if (this.autoSetStepTitles) {
            step.stepTitle = "Step " + step.stepNum;
            stepTitleArea &&
              stepTitleArea
                .querySelector(".step-title")
                .setAttribute("aria-hidden", "true");
          }
        }
        if (this.variant === "default") {
          this.autoSetStepTitles = false;
          if (!this.autoSetStepTitles) {
            step.stepTitle = undefined;
            stepTitleArea &&
              stepTitleArea
                .querySelector(".step-title")
                .removeAttribute("aria-hidden");
          }
        }
      }

      if (this.variant === "compact") {
        if (step.current === true || step.stepType === "current") {
          step.classList.remove("hide");
          step.classList.add("show");
        } else if (step.classList.contains("show")) {
          step.classList.remove("show");
          step.classList.add("hide");
        }

        if (!step.lastStep) {
          step.nextStepTitle = this.steps[index + 1].stepTitle;
          step.progress = (step.stepNum / this.steps.length) * 100;
        } else if (step.lastStep && this.stepTypes[index] !== "completed") {
          step.progress = 95;
        } else {
          step.progress = 100;
        }

        if (this.hideStepInfo && stepTitleArea !== null) {
          stepTitleArea.classList.remove("visually-hidden");
        }

        step.compactStepStyling = this.stepTypes[index];
      }

      if (this.variant === "default") {
        if (!step.lastStep) {
          if (this.alignedFullWidth) {
            step.style.width = this.pxToRem(`${
              (this.stepperWidth - this.lastStepWidth) / (this.steps.length - 1)
            }px`);
            step.style.minWidth = this.pxToRem("148px");
          }
        } else if (step.lastStep) {
          step.classList.add("last-step");
          if (this.alignedFullWidth) {
            step.style.maxWidth = `${this.lastStepWidth}px`;
          } else {
            step.style.maxWidth =
              this.connectorWidth > 100
                ? this.pxToRem(`${this.connectorWidth + 48}px`)
                : this.pxToRem("148px");
          }
        }

        if (this.aligned === "left") {
          step.style.width =
            this.connectorWidth > 100
              ? this.pxToRem(`${this.connectorWidth + 48}px`)
              : this.pxToRem("148px");
          const stepConnect = step.shadowRoot.querySelector(
            ".step > .step-top > .step-connect"
          ) as HTMLElement;

          if (stepConnect) {
            stepConnect.style.width =
              this.connectorWidth > 100 ? this.pxToRem(`${this.connectorWidth}px`) : this.pxToRem("100px");
          }
        }

        if (this.hideStepInfo && stepTitleArea !== null) {
          stepTitleArea.classList.add("visually-hidden");
        }
      }
    });
  };

  private overrideVariant = () => {
    let minDefaultStepperWidth = 148 * this.steps.length;

    if (this.aligned === "left" && this.connectorWidth > 100) {
      minDefaultStepperWidth = (this.connectorWidth + 48) * this.steps.length;
    }

    if (this.variantOverride) {
      if (this.el.clientWidth < minDefaultStepperWidth) {
        this.variant = "compact";
        this.getChildren();
      } else {
        this.variant = "default";
        this.getChildren();
      }
    }
  };

  private resizeObserverCallback = () => {
    this.getChildren();
    this.checkStepTitles();
    this.overrideVariant();
    this.setStepperWidth();
    this.initialiseStepStates();
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeObserverCallback();
    });
    this.resizeObserver.observe(this.el);
  };

  componentWillLoad(): void {
    this.setStepTypes();
    if (this.variant === "compact") {
      this.variantOverride = false;
    }
  }

  componentDidLoad(): void {
    checkResizeObserver(this.runResizeObserver);
  }

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
  }

  render() {
    return (
      <Host
        class={{
          [`${this.variant}`]: true,
          ["aligned-left"]:
            this.variant === "default" && this.aligned === "left",
        }}
      >
        <ul class="step-item-list">
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
