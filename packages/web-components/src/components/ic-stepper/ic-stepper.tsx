import { Component, Element, Host, Prop, h, State } from "@stencil/core";
import { checkResizeObserver } from "../../utils/helpers";
import { IcStepperAlignment } from "./ic-stepper.types";

@Component({
  tag: "ic-stepper",
  styleUrl: "ic-stepper.css",
  shadow: true,
})
export class IcStepper {
  @Element() el: HTMLIcStepperElement;

  /**
   * The alignment of the stepper within its container.
   */
  @Prop() aligned?: IcStepperAlignment = "full-width";

  /**
   * The length of the connnector between each step in pixels. Minimum length is 100px.
   */
  @Prop() connectorWidth?: number = 100;

  @State() stepperWidth: number = document
    .querySelector("ic-stepper")
    .getBoundingClientRect().width;

  @State() lastStepWidth: number = 0;

  private steps: HTMLIcStepElement[];

  private resizeObserver: ResizeObserver = null;

  /**
   * Get all steps currently within this stepper
   */
  private getChildren = (): void => {
    this.steps = Array.from(this.el.querySelectorAll("ic-step"));
  };

  private initialiseStepStates = (): void => {
    this.steps.forEach((step, index) => {
      // Assign stepNum to each step
      step.stepNum = index + 1;
      //Assign lastStep to final step
      step.lastStep = index === this.steps.length - 1;

      if (step.lastStep) {
        step.classList.add("last-step");
        if (this.el.classList.contains("aligned-full-width")) {
          step.style.maxWidth = `${this.lastStepWidth}px`;
        }
        if (this.el.classList.contains("aligned-left")) {
          step.style.maxWidth = `${this.connectorWidth + 48}px`;
        }
      }
    });

    for (let i = 0; i < this.steps.length - 1; i++) {
      if (this.el.classList.contains("aligned-full-width")) {
        this.steps[i].style.width = `${
          (this.stepperWidth - this.lastStepWidth) / (this.steps.length - 1)
        }px`;
        this.steps[i].style.minWidth = "148px";
      }

      if (this.el.classList.contains("aligned-left")) {
        this.steps[i].style.width = `${this.connectorWidth + 48}px`;
        const stepConnect = this.steps[i].shadowRoot.querySelector(
          "div > .step-top > .step-connect"
        ) as HTMLElement;
        stepConnect.style.width =
          this.connectorWidth > 100 ? `${this.connectorWidth}px` : "100px";
      }
    }
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.setStepperWidth();
      this.getChildren();
      this.initialiseStepStates();
    });
    this.resizeObserver.observe(this.el);
  };

  private setStepperWidth = (): void => {
    this.stepperWidth = this.el.offsetWidth;
    const allSteps = document.querySelectorAll("ic-step");
    const lastStep = allSteps[allSteps.length - 1];
    lastStep.style.maxWidth = "none";
    if (lastStep.classList.contains("aligned-full-width")) {
      lastStep.style.maxWidth = `${this.stepperWidth / allSteps.length}px`;
    }
    this.lastStepWidth = lastStep.offsetWidth;
    this.getChildren();
    this.initialiseStepStates();
  };

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
          ["aligned-left"]: this.aligned === "left",
          ["aligned-full-width"]: this.aligned === "full-width",
        }}
      >
        <ul class="step-item-list">
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
