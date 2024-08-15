import {
  Component,
  Element,
  Host,
  Prop,
  h,
  Method,
  State,
} from "@stencil/core";
import { Instance, Options, createPopper } from "@popperjs/core";
import { IcTooltipPlacements } from "./ic-tooltip.types";
import { onComponentRequiredPropUndefined } from "../../utils/helpers";

@Component({
  tag: "ic-tooltip",
  styleUrl: "ic-tooltip.css",
  shadow: true,
})
export class Tooltip {
  private arrow: HTMLDivElement;
  private delayedHideEvents = ["mouseleave"];
  private dialogOverflow = false;
  private icDialogEl: HTMLIcDialogElement;
  private instantHideEvents = ["focusout"];
  private mouseOverTool: boolean = false;
  private persistTooltip = false;
  private popperInstance: Instance;
  private onDialog: boolean = false;
  private showEvents = [
    !this.disableHover && "mouseenter",
    !this.disableHover && "focusin",
    !this.disableClick && "click",
  ];
  private toolTip: HTMLDivElement;

  @Element() el: HTMLIcTooltipElement;

  /**
   * @internal If `true`, the tooltip will not be displayed on click, it will require hover or using the display method.
   */
  @Prop() disableClick?: boolean = false;

  /**
   * If `true`, the tooltip will not be displayed on hover, it will require a click.
   */
  @Prop() disableHover?: boolean = false;

  /**
   * The number of lines to display before truncating the text.
   */
  @Prop() maxLines?: number;

  /**
   * The position of the tooltip in relation to the parent element.
   */
  @Prop({ mutable: true }) placement?: IcTooltipPlacements = "bottom";

  /**
   * @internal Sets the tooltip to aria-hidden, when used as part of components that are already announced.
   */
  @Prop() silent?: boolean = false;

  /**
   * The ID of the element the tooltip is describing - for when aria-labelledby or aria-describedby is used.
   */
  @Prop({ reflect: true }) target?: string;

  /**
   * The text to display on the tooltip.
   */
  @Prop() label!: string;

  @State() popperProps: Partial<Options> = {};

  /**
   * @internal This method allows props to be added to the PopperJS createPopper instance outside of tooltip
   * @param props object - createPopper props set externally
   */
  @Method()
  async setExternalPopperProps<T extends Partial<Options>>(props: T) {
    this.popperProps = props;
  }

  disconnectedCallback(): void {
    this.manageEventListeners("remove");
    if (this.popperInstance !== undefined) {
      this.popperInstance.destroy();
    }
  }

  componentDidLoad(): void {
    this.manageEventListeners("add");

    this.icDialogEl = this.el.closest("ic-dialog");
    this.dialogOverflow =
      this.icDialogEl?.getAttribute("data-overflow") === "true";

    this.onDialog = this.icDialogEl !== null;

    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Tooltip"
    );
  }

  componentDidRender(): void {
    const typographyEl = this.el.shadowRoot.querySelector(
      ".ic-tooltip-container > ic-typography"
    );
    this.maxLines > 0 &&
      typographyEl.setAttribute(
        "style",
        `--truncation-max-lines: ${this.maxLines}`
      );
  }
  /**
   * Method to programmatically show/hide the tooltip without needing to interact with an anchor element
   * @param show Whether to show or hide the tooltip
   * @param persistTooltip Whether the tooltip should stay on the screen when actions are performed that would previously dismiss the tooltip, such as on hover
   */
  @Method()
  async displayTooltip(show: boolean, persistTooltip?: boolean): Promise<void> {
    this.persistTooltip = persistTooltip;
    show ? this.show() : this.hide();
  }

  /**
   * @internal Method to return if tooltip is currently visible.
   */
  @Method()
  async isTooltipVisible(): Promise<boolean> {
    return Promise.resolve(this.toolTip.hasAttribute("data-show"));
  }

  private getTooltipTranslate = (dialogEl: DOMRect) => {
    const child = this.el.children[0].getBoundingClientRect();
    let tooltipX;
    let tooltipY;
    switch (this.placement) {
      case "bottom":
        tooltipX = child.left - dialogEl.left - 0.5 * child.width;
        tooltipY = child.bottom - dialogEl.top;
        break;
      case "bottom-start":
        tooltipX = child.left - dialogEl.left;
        tooltipY = child.bottom - dialogEl.top;
        break;
      case "bottom-end":
        tooltipX = child.right - dialogEl.right;
        tooltipY = child.bottom - dialogEl.top;
        break;
      case "top":
        tooltipX = child.left - dialogEl.left - 0.5 * child.width;
        tooltipY = child.top - dialogEl.bottom;
        break;
      case "top-start":
        tooltipX = child.left - dialogEl.left;
        tooltipY = child.top - dialogEl.bottom;
        break;
      case "top-end":
        tooltipX = child.right - dialogEl.right;
        tooltipY = child.top - dialogEl.bottom;
        break;
      case "left":
      case "left-start":
        tooltipX = child.right - dialogEl.right - child.width;
        tooltipY = child.bottom - dialogEl.top - child.height;
        break;
      case "left-end":
        tooltipX = child.right - dialogEl.right - child.width;
        tooltipY = child.top - dialogEl.bottom + child.height;
        break;
      case "right":
      case "right-start":
        tooltipX = child.left - dialogEl.left + child.width;
        tooltipY = child.bottom - dialogEl.top - child.height;
        break;
      case "right-end":
        tooltipX = child.left - dialogEl.left + child.width;
        tooltipY = child.top - dialogEl.bottom + child.height;
        break;
    }
    if (this.dialogOverflow && tooltipX < 0) {
      if (this.placement.includes("top") || this.placement.includes("bottom")) {
        this.toolTip.style.setProperty(
          "--tooltip-arrow-translate",
          `${tooltipX}px`
        );
        tooltipX = child.left - dialogEl.left;
      }
      if (this.placement.includes("left")) {
        this.placement = "right";
        tooltipX = child.left - dialogEl.left + child.width;
      }
    }

    this.toolTip.style.setProperty("--tooltip-translate-x", `${tooltipX}px`);
    this.toolTip.style.setProperty("--tooltip-translate-y", `${tooltipY}px`);
  };

  private show = () => {
    if (this.label) {
      this.toolTip.setAttribute("data-show", "");

      if (this.onDialog) {
        this.el.classList.add("on-dialog");
        const dialogEl = this.icDialogEl.shadowRoot
          .querySelector("dialog")
          .getBoundingClientRect();

        this.getTooltipTranslate(dialogEl);
      }

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
        ...this.popperProps,
      });
    } else {
      console.warn(`Tooltip can't display without prop 'label' set`);
    }
  };

  private hide = () => {
    this.toolTip.removeAttribute("data-show");
    this.persistTooltip = false;
    if (this.popperInstance !== undefined) {
      this.popperInstance.destroy();
    }
  };

  private checkCloseTooltip = () => {
    setTimeout(() => {
      if (!this.mouseOverTool && !this.persistTooltip) {
        this.hide();
      }
    }, 100);
  };

  private mouseEnterTooltip = () => {
    this.mouseOverTool = true;
  };

  private mouseLeaveTooltip = () => {
    this.mouseOverTool = false;
    this.checkCloseTooltip();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && !this.persistTooltip) {
      this.hide();
    }
  };

  private manageEventListeners = (action: "add" | "remove") => {
    const method =
      action === "add" ? "addEventListener" : "removeEventListener";

    this.showEvents.forEach((event) => {
      this.el[method](event, this.show);
      if (this.toolTip !== undefined) {
        this.toolTip[method](event, this.mouseEnterTooltip);
      }
    });

    if (!this.persistTooltip) {
      this.instantHideEvents.forEach((event) => {
        this.el[method](event, this.hide);
      });
    }

    this.delayedHideEvents.forEach((event) => {
      this.el[method](event, this.checkCloseTooltip);
      if (this.toolTip !== undefined) {
        this.toolTip[method](event, this.mouseLeaveTooltip);
      }
    });

    document[method]("keydown", this.handleKeyDown);
  };

  render() {
    const { label, maxLines, silent } = this;
    return (
      <Host class={{ "ic-tooltip": true }}>
        <div
          ref={(el) => (this.toolTip = el as HTMLDivElement)}
          role="tooltip"
          class="ic-tooltip-container"
          aria-hidden={`${silent}`}
        >
          <ic-typography maxLines={maxLines} variant="caption">
            {label}
          </ic-typography>
          <div
            ref={(el) => (this.arrow = el as HTMLDivElement)}
            class="ic-tooltip-arrow"
          ></div>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
