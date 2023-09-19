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
  private arrow: HTMLDivElement;
  private ariaDescribedBy: HTMLElement;
  private delayedHideEvents = ["mouseleave"];
  private dialogOverflow = false;
  private icDialogEl: HTMLIcDialogElement;
  private instantHideEvents = ["focusout"];
  private mouseOverTool: boolean = false;
  private persistTooltip = false;
  private popperInstance: Instance;
  private onDialog: boolean = false;
  private screenReaderOnlyStyles = {
    position: "absolute",
    left: "-10000px",
    top: "auto",
    width: "1px",
    height: "1px",
    overflow: "hidden",
  };
  private showEvents = [
    !this.disableHover && "mouseenter",
    !this.disableHover && "focusin",
    !this.disableClick && "click",
  ];
  private toolTip: HTMLDivElement;

  @Element() el: HTMLIcTooltipElement;

  /**
   * If `true`, the tooltip will not be displayed on click, it will require hover or using the display method.
   */
  @Prop() disableClick?: boolean = false;

  /**
   * If `true`, the tooltip will not be displayed on hover, it will require a click or using the display method.
   */
  @Prop() disableHover?: boolean = false;

  /**
   * The position of the tool-tip in relation to the parent element.
   */
  @Prop({ mutable: true }) placement?: IcTooltipPlacements = "bottom";

  /**
   * The ID of the element the tooltip is describing - for when aria-labelledby or aria-describedby is used.
   */
  @Prop({ reflect: true }) target?: string;

  /**
   * The text to display on the tooltip.
   */
  @Prop() label!: string;

  @Watch("label")
  updateLabel(newValue: string): void {
    if (this.ariaDescribedBy !== null) {
      this.ariaDescribedBy.innerText = newValue;
    }
  }

  disconnectedCallback(): void {
    this.manageEventListeners("remove");
    if (this.popperInstance !== undefined) {
      this.popperInstance.destroy();
    }
  }

  private show = (popper: Instance) => {
    this.toolTip.setAttribute("data-show", "");

    if (this.onDialog) {
      this.el.classList.add("on-dialog");
      const dialogEl = this.icDialogEl.shadowRoot
        .querySelector("dialog")
        .getBoundingClientRect();

      this.getTooltipTranslate(dialogEl);
    }

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

    this.icDialogEl = this.el.closest("ic-dialog");
    this.dialogOverflow =
      this.icDialogEl?.getAttribute("data-overflow") === "true";

    this.onDialog = this.icDialogEl !== null;

    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Tooltip"
    );

    if (this.target !== undefined) {
      this.ariaDescribedBy = document.createElement("span");
      this.ariaDescribedBy.id = `ic-tooltip-${this.target}`;
      this.ariaDescribedBy.innerText = this.label;
      this.ariaDescribedBy.classList.add("ic-tooltip-label");
      Object.assign(this.ariaDescribedBy.style, this.screenReaderOnlyStyles);

      this.el.insertAdjacentElement("beforebegin", this.ariaDescribedBy);
    }
  }

  /**
   * Method to programmatically show/hide the tooltip without needing to interact with an anchor element
   * @param show Whether to show or hide the tooltip
   * @param persistTooltip Whether the tooltip should stay on the screen when actions are performed that would previously dismiss the tooltip, such as on hover
   */
  // @Method()
  // async displayTooltip(show: boolean, persistTooltip?: boolean): Promise<void> {
  //   this.persistTooltip = persistTooltip;
  //   show ? this.show() : this.hide();
  // }

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

  // private show = () => {
  //   this.toolTip.setAttribute("data-show", "");

  //   if (this.onDialog) {
  //     this.el.classList.add("on-dialog");
  //     const dialogEl = this.icDialogEl.shadowRoot
  //       .querySelector("dialog")
  //       .getBoundingClientRect();

  //     this.getTooltipTranslate(dialogEl);
  //   }

  //   this.popperInstance = createPopper(this.el, this.toolTip, {
  //     placement: this.placement,
  //     modifiers: [
  //       {
  //         name: "offset",
  //         options: {
  //           offset: [0, 10],
  //         },
  //       },
  //       {
  //         name: "arrow",
  //         options: {
  //           element: this.arrow,
  //         },
  //       },
  //       {
  //         name: "eventListeners",
  //         options: { scroll: false, resize: false },
  //       },
  //     ],
  //   });
  // };

  // private hide = () => {
  //   this.toolTip.removeAttribute("data-show");
  //   this.persistTooltip = false;
  // };

  // private checkCloseTooltip = () => {
  //   setTimeout(() => {
  //     if (!this.mouseOverTool && !this.persistTooltip) {
  //       this.hide();
  //     }
  //   }, 100);
  // };

  // private mouseEnterTooltip = () => {
  //   this.mouseOverTool = true;
  // };

  // private mouseLeaveTooltip = () => {
  //   this.mouseOverTool = false;
  //   this.checkCloseTooltip();
  // };

  // private handleKeyDown = (event: KeyboardEvent) => {
  //   if (event.key === "Escape" && !this.persistTooltip) {
  //     this.hide();
  //   }
  // };

  // private manageEventListeners = (action: "add" | "remove") => {
  //   const method =
  //     action === "add" ? "addEventListener" : "removeEventListener";

  //   this.showEvents.forEach((event) => {
  //     this.el[method](event, this.show);
  //     if (this.toolTip !== undefined) {
  //       this.toolTip[method](event, this.mouseEnterTooltip);
  //     }
  //   });

  //   if (!this.persistTooltip) {
  //     this.instantHideEvents.forEach((event) => {
  //       this.el[method](event, this.hide);
  //     });
  //   }

  //   this.delayedHideEvents.forEach((event) => {
  //     this.el[method](event, this.checkCloseTooltip);
  //     if (this.toolTip !== undefined) {
  //       this.toolTip[method](event, this.mouseLeaveTooltip);
  //     }
  //   });

  //   document[method]("keydown", this.handleKeyDown);
  // };

  // this.manageEventListeners("add");

  // onComponentRequiredPropUndefined(
  //   [{ prop: this.label, propName: "label" }],
  //   "Tooltip"
  // );

  // if (this.target !== undefined) {
  //   const ariaDescribedBy = document.createElement("span");
  //   ariaDescribedBy.id = `ic-tooltip-${this.target}`;
  //   ariaDescribedBy.innerText = this.label;
  //   ariaDescribedBy.classList.add("ic-tooltip-label");
  //   Object.assign(ariaDescribedBy.style, this.screenReaderOnlyStyles);

  //   this.el.insertAdjacentElement("beforebegin", ariaDescribedBy);
  // }
  // }

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
