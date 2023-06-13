import {
  Component,
  Element,
  Host,
  Prop,
  h,
  Watch,
  Method,
} from "@stencil/core";
import { Instance, createPopper } from "@popperjs/core";
import { IcTooltipPlacements } from "./ic-tooltip.types";
import { onComponentRequiredPropUndefined } from "../../utils/helpers";

@Component({
  tag: "ic-tooltip",
  styleUrl: "ic-tooltip.css",
  shadow: true,
})
export class Tooltip {
  @Element() el: HTMLIcTooltipElement;

  /**
   * The ID of the element the tooltip is describing - for when aria-labelledby or aria-describedby is used.
   */
  @Prop({ reflect: true }) target?: string;

  /**
   * The position of the tool-tip in relation to the parent element.
   */
  @Prop() placement?: IcTooltipPlacements = "bottom";

  /**
   * The text to display on the tooltip.
   */
  @Prop() label!: string;

  /**
   * If `true`, the tooltip will not be displayed on hover, it will require a click.
   */
  @Prop() disableHover?: boolean = false;

  @Watch("label")
  updateLabel(newValue: string): void {
    const describedBySpan = this.el.previousElementSibling as HTMLElement;
    if (describedBySpan !== null) {
      describedBySpan.innerText = newValue;
    }
  }

  /**
   * Method to programmatically show/hide the tooltip without needing to interact with an anchor element
   * @param show Whether to show or hide the tooltip
   * @param persistTooltip Whether the tooltip should stay on the screen when actions are performed that would previously dismiss the tooltip, such as on hover
   */
  @Method()
  async displayTooltip(show: boolean, persistTooltip?: boolean): Promise<void> {
    this.persistTooltip = persistTooltip;
    show ? this.show(this.popperInstance) : this.hide(this.popperInstance);
  }

  private toolTip: HTMLDivElement;
  private arrow: HTMLDivElement;
  private mouseOverTool: boolean = false;
  private showEvents = this.disableHover
    ? ["click"]
    : ["mouseenter", "focusin"];
  private instantHideEvents = ["focusout"];
  private delayedHideEvents = ["mouseleave"];
  private popperInstance: Instance;
  private persistTooltip = false;

  private show = (popper: Instance) => {
    this.toolTip.setAttribute("data-show", "");
    popper.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: "eventListeners", enabled: true },
      ],
    }));
    popper.update();
  };

  private hide = (popper: Instance) => {
    this.toolTip.removeAttribute("data-show");
    popper.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: "eventListeners", enabled: false },
      ],
    }));
    this.persistTooltip = false;
  };

  private checkCloseTooltip = (popper: Instance) => {
    setTimeout(() => {
      if (!this.mouseOverTool && !this.persistTooltip) {
        this.hide(popper);
      }
    }, 100);
  };

  private mouseEnterTooltip = () => {
    this.mouseOverTool = true;
  };

  private mouseLeaveTooltip = (popper: Instance) => {
    this.mouseOverTool = false;
    this.checkCloseTooltip(popper);
  };

  private handleKeyDown = (key: string) => {
    if (key === "Escape" && !this.persistTooltip) {
      this.hide(this.popperInstance);
    }
  };

  private manageEventListeners = (action: "add" | "remove") => {
    const method =
      action === "add" ? "addEventListener" : "removeEventListener";

    this.showEvents.forEach((event) => {
      this.el[method](event, () => this.show(this.popperInstance));
      if (this.toolTip !== undefined) {
        this.toolTip[method](event, () => this.mouseEnterTooltip());
      }
    });

    this.instantHideEvents.forEach((event) => {
      this.el[method](
        event,
        () => !this.persistTooltip && this.hide(this.popperInstance)
      );
    });

    this.delayedHideEvents.forEach((event) => {
      this.el[method](event, () => this.checkCloseTooltip(this.popperInstance));
      if (this.toolTip !== undefined) {
        this.toolTip[method](event, () =>
          this.mouseLeaveTooltip(this.popperInstance)
        );
      }
    });

    document[method]("keydown", (event: KeyboardEvent) =>
      this.handleKeyDown(event.key)
    );
  };

  private screenReaderOnlyStyles = {
    position: "absolute",
    left: "-10000px",
    top: "auto",
    width: "1px",
    height: "1px",
    overflow: "hidden",
  };

  componentDidLoad(): void {
    this.popperInstance = createPopper(this.el, this.toolTip, {
      placement: this.placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
        {
          name: "arrow",
          options: {
            element: this.arrow,
          },
        },
        {
          name: "eventListeners",
          options: { scroll: false, resize: false },
        },
      ],
    });

    this.manageEventListeners("add");

    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Tooltip"
    );

    if (this.target !== undefined) {
      const ariaDescribedBy = document.createElement("span");
      ariaDescribedBy.id = `ic-tooltip-${this.target}`;
      ariaDescribedBy.innerText = this.label;
      ariaDescribedBy.classList.add("ic-tooltip-label");
      Object.assign(ariaDescribedBy.style, this.screenReaderOnlyStyles);

      this.el.insertAdjacentElement("beforebegin", ariaDescribedBy);
    }
  }

  disconnectedCallback(): void {
    this.manageEventListeners("remove");
  }

  render() {
    const { label } = this;
    return (
      <Host class={{ "ic-tooltip": true }}>
        <div
          ref={(el) => (this.toolTip = el as HTMLDivElement)}
          role="tooltip"
          class="ic-tooltip-container"
        >
          <ic-typography variant="caption">{label}</ic-typography>
          <div
            ref={(el) => (this.arrow = el as HTMLDivElement)}
            class="ic-tooltip-arrow"
            data-popper-arrow
          ></div>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
