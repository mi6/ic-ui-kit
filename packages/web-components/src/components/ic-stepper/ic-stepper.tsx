import { Component, Element, Host, Prop, h, State, Watch } from "@stencil/core";
import { checkResizeObserver, pxToRem } from "../../utils/helpers";
import { IcStepperAlignment } from "./ic-stepper.types";
import { IcStepTypes, IcStepVariants } from "../ic-step/ic-step.types";
import { IcThemeMode } from "../../utils/types";

@Component({
  tag: "ic-stepper",
  styleUrl: "ic-stepper.css",
  shadow: true,
})
export class Stepper {
  private resizeObserver: ResizeObserver | null = null;
  private steps: HTMLIcStepElement[];
  private stepsWithStepTitles: HTMLIcStepElement[];
  private visuallyHidden: string = "visually-hidden";

  @Element() el: HTMLIcStepperElement;

  @State() alignedFullWidth: boolean = true;
  @State() autoSetStepTitles: boolean = true;
  @State() lastStepWidth: number = 0;
  @State() noOfResizes?: number = 0;
  @State() stepperWidth: number | undefined = document
    .querySelector("ic-stepper")
    ?.getBoundingClientRect().width;
  @State() stepTypes: IcStepTypes[] = [];
  @State() variantOverride?: boolean = this.variant !== "compact";

  /**
   * The alignment of the default stepper within its container.
   */
  @Prop() aligned?: IcStepperAlignment = "full-width";

  /**
   * The length of the connector between each step in pixels. Minimum length is 100px.
   */
  @Prop() connectorWidth?: number = 100;

  /**
   * If `true`, the information about each step, i.e. step title, step subtitle and step status, will be hidden on all default steps. The information about each step will still be visible in the compact variant of the stepper.
   */
  @Prop() hideStepInfo?: boolean = false;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";
  @Watch("theme")
  handleThemeChange(): void {
    this.getChildren();
    this.steps.forEach((step) => {
      step.theme = this.theme;
    });
  }

  /**
   * The variant of the stepper.
   */
  @Prop({ mutable: true }) variant?: IcStepVariants = "default";

  @Watch("hideStepInfo")
  @Watch("variant")
  handlePropChange(): void {
    this.setHideStepInfo();
    this.getChildren();
  }

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
  }

  componentWillLoad(): void {
    this.setStepTypes();
    this.handleThemeChange();

    if (this.variant === "compact") {
      this.variantOverride = false;
    }
  }

  componentWillRender(): void {
    this.initialiseStepStates();
  }

  componentDidLoad(): void {
    checkResizeObserver(this.runResizeObserver);
  }

  // Get all steps currently within this stepper
  private getChildren = (): void => {
    this.steps = Array.from(this.el.querySelectorAll("ic-step"));

    this.stepsWithStepTitles = Array.from(
      this.el.querySelectorAll("ic-step[heading]")
    );
  };

  // Inform the user that stepTitles are required on all steps in a compact stepper
  private checkStepTitles = (): void => {
    if (
      this.stepsWithStepTitles.length < this.steps.length &&
      this.variantOverride &&
      this.variant === "compact"
    ) {
      this.noOfResizes = this.noOfResizes! + 1;
      if (this.noOfResizes === 1) {
        console.error(
          `The prop 'heading' is required for all steps of the Stepper component (compact variant)`
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
      lastStep.style.maxWidth = pxToRem(
        `${this.stepperWidth / this.steps.length}px`
      );
      this.lastStepWidth = lastStep.offsetWidth;
    }
  };

  private initialiseStepStates = (): void => {
    this.steps.forEach((step, index) => {
      // Set variant
      step.variant = this.variant!;
      // Assign stepNum to each step
      step.stepNum = index + 1;
      // Assign lastStep to final step
      step.lastStep = index === this.steps.length - 1;
      step.lastStepNum = this.steps.length;

      if (step.type !== "current") {
        step.current = false;
        this.stepTypes[index] = step.type!;
      } else {
        step.current = true;
      }

      const stepTitleArea =
        step.shadowRoot &&
        step.shadowRoot.querySelector(".step > .heading-area");

      if (this.stepsWithStepTitles.length == 0 && this.variantOverride) {
        if (this.variant === "compact") {
          this.autoSetStepTitles = true;
          if (this.autoSetStepTitles) {
            step.heading = "Step " + step.stepNum;
            stepTitleArea &&
              stepTitleArea
                ?.querySelector(".heading")
                ?.setAttribute("aria-hidden", "true");
          }
        }
        if (this.variant === "default") {
          this.autoSetStepTitles = false;
          if (!this.autoSetStepTitles) {
            step.heading = undefined;
            stepTitleArea &&
              stepTitleArea
                ?.querySelector(".heading")
                ?.removeAttribute("aria-hidden");
          }
        }
      }

      if (this.variant === "compact") {
        if (step.current === true || step.type === "current") {
          step.classList.remove("hide");
          step.classList.add("show");
        } else if (step.classList.contains("show")) {
          step.classList.remove("show");
          step.classList.add("hide");
        }

        if (!step.lastStep) {
          step.nextStepHeading = this.steps[index + 1].heading;
          step.progress = (step.stepNum / this.steps.length) * 100;
        } else if (step.lastStep && this.stepTypes[index] !== "completed") {
          step.progress = 95;
        } else {
          step.progress = 100;
        }

        if (this.hideStepInfo && stepTitleArea !== null) {
          stepTitleArea.classList.remove(this.visuallyHidden);
        }

        step.compactStepStyling = this.stepTypes[index];
      }

      if (this.variant === "default") {
        if (!step.lastStep) {
          if (this.alignedFullWidth && this.stepperWidth !== undefined) {
            step.style.width = pxToRem(
              `${
                (this.stepperWidth - this.lastStepWidth) /
                (this.steps.length - 1)
              }px`
            );
            step.style.minWidth = pxToRem("148px");
          }
        } else if (step.lastStep) {
          step.classList.add("last-step");
          if (this.alignedFullWidth) {
            step.style.maxWidth = `${this.lastStepWidth}px`;
          } else if (this.connectorWidth) {
            step.style.maxWidth =
              this.connectorWidth > 100
                ? pxToRem(`${this.connectorWidth + 48}px`)
                : pxToRem("148px");
          }
        }

        if (this.aligned === "left" && this.connectorWidth) {
          step.style.width =
            this.connectorWidth > 100
              ? pxToRem(`${this.connectorWidth + 48}px`)
              : pxToRem("148px");
          const stepConnect = step.shadowRoot?.querySelector(
            ".step > .step-top > .step-connect"
          ) as HTMLElement;

          if (stepConnect) {
            stepConnect.style.width =
              this.connectorWidth > 100
                ? pxToRem(`${this.connectorWidth}px`)
                : pxToRem("100px");
          }
        }

        if (this.hideStepInfo && stepTitleArea !== null) {
          stepTitleArea.classList.add(this.visuallyHidden);
        }
      }
    });
  };

  private setHideStepInfo = (): void => {
    this.steps.forEach((step) => {
      const stepTitleArea = step.shadowRoot?.querySelector(
        ".step > .heading-area"
      );

      if (stepTitleArea) {
        if (this.hideStepInfo) {
          stepTitleArea.classList?.add(this.visuallyHidden);
        } else {
          stepTitleArea.classList?.remove(this.visuallyHidden);
        }
      }
    });
  };

  private overrideVariant = () => {
    if (this.variantOverride) {
      let minDefaultStepperWidth = 148 * this.steps.length;

      if (
        this.aligned === "left" &&
        this.connectorWidth &&
        this.connectorWidth > 100
      ) {
        minDefaultStepperWidth = (this.connectorWidth + 48) * this.steps.length;
      }
      if (this.el.clientWidth < minDefaultStepperWidth) {
        this.variant = "compact";
      } else {
        this.variant = "default";
      }
    }
  };

  private resizeObserverCallback = () => {
    this.getChildren();
    this.checkStepTitles();
    this.overrideVariant();
    this.setStepperWidth();
    this.initialiseStepStates();
    this.handleThemeChange();
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeObserverCallback();
    });
    this.resizeObserver.observe(this.el);
  };

  render() {
    return (
      <Host
        class={{
          [`ic-stepper-${this.variant}`]: true,
          ["ic-stepper-aligned-left"]:
            this.variant === "default" && this.aligned === "left",
          [`ic-theme-${this.theme}`]: this.theme !== "inherit",
        }}
      >
        <ul class="step-item-list">
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
