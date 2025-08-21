import {
  Component,
  Element,
  Host,
  Prop,
  h,
  Method,
  State,
  Watch,
} from "@stencil/core";
import { Instance, Options, createPopper } from "@popperjs/core";
import { IcTooltipPlacements } from "./ic-tooltip.types";
import { onComponentRequiredPropUndefined } from "../../utils/helpers";
import { IcThemeMode } from "../../utils/types";

@Component({
  tag: "ic-tooltip",
  styleUrl: "ic-tooltip.css",
  shadow: true,
})
export class Tooltip {
  private arrow: HTMLDivElement;
  private delayedHideEvents = ["mouseleave"];
  private dialogContentArea: HTMLDivElement | null;
  private instantHideEvents = ["focusout"];
  private mouseOverTool: boolean = false;
  private persistTooltip = false;
  private popperInstance: Instance;
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

  @Watch("disableClick")
  watchDisableClickHandler(): void {
    if (this.disableClick) {
      this.hide();
    }
    this.updateTooltipEvents();
  }

  /**
   * If `true`, the tooltip will not be displayed on hover, it will require a click.
   */
  @Prop() disableHover?: boolean = false;

  @Watch("disableHover")
  watchDisableHoverHandler(): void {
    if (this.disableHover) {
      this.hide();
    }
    this.updateTooltipEvents();
  }

  /**
   * Setting to `true` can help in situations where tooltip content is clipped by a parent element.
   */
  @Prop() fixedPositioning: boolean = false;

  /**
   * The number of lines to display before truncating the text.
   */
  @Prop() maxLines?: number;

  /**
   * The position of the tooltip in relation to the parent element.
   */
  @Prop() placement?: IcTooltipPlacements = "bottom";

  /**
   * @internal Sets the tooltip to aria-hidden, when used as part of components that are already announced.
   */
  @Prop() silent?: boolean = false;

  /**
   * The ID of the element the tooltip is describing - for when aria-labelledby or aria-describedby is used.
   */
  @Prop({ reflect: true }) target?: string;

  /**
   * Sets the tooltip to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The text to display on the tooltip.
   */
  @Prop() label!: string;
  @Watch("label")
  watchLabelHandler(): void {
    if (this.toolTip?.hasAttribute("data-show") && this.popperInstance) {
      this.popperInstance.update();
    }
  }

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

    let dialog: HTMLIcDialogElement | null;
    if ((this.el.getRootNode() as ShadowRoot).host) {
      dialog = (this.el.getRootNode() as ShadowRoot).host.closest("ic-dialog");
    } else {
      dialog = this.el.closest("ic-dialog");
    }
    this.dialogContentArea =
      dialog?.shadowRoot?.querySelector(".content-area") ?? null;

    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Tooltip"
    );
  }

  componentDidRender(): void {
    const typographyEl = this.el.shadowRoot?.querySelector(
      ".ic-tooltip-container > ic-typography"
    );
    this.maxLines &&
      this.maxLines > 0 &&
      typographyEl?.setAttribute(
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
    this.persistTooltip = !!persistTooltip;
    show ? this.show() : this.hide();
  }

  /**
   * @internal Method to return if tooltip is currently visible.
   */
  @Method()
  async isTooltipVisible(): Promise<boolean> {
    return Promise.resolve(this.toolTip.hasAttribute("data-show"));
  }

  private show = () => {
    if (this.label) {
      this.toolTip.setAttribute("data-show", "");

      if (this.dialogContentArea) {
        this.el.classList.add("ic-tooltip-on-dialog");
      }

      this.popperInstance = createPopper(this.el, this.toolTip, {
        strategy: this.fixedPositioning ? "fixed" : "absolute",
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
          ...(this.dialogContentArea
            ? [
                {
                  name: "preventOverflow",
                  options: {
                    boundary: this.dialogContentArea,
                    padding: 8,
                  },
                },
                {
                  name: "flip",
                  options: {
                    boundary: this.dialogContentArea,
                  },
                },
              ]
            : []),
        ],
        ...this.popperProps,
      });
    } else {
      console.warn(`Tooltip can't display without prop 'label' set`);
    }
  };

  private hide = () => {
    if (this.toolTip !== undefined) {
      this.toolTip.removeAttribute("data-show");
      this.persistTooltip = false;
    }
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
      if (event) {
        this.el[method](event, this.show);
        if (this.toolTip !== undefined) {
          this.toolTip[method](event, this.mouseEnterTooltip);
        }
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

    document[method]("keydown", this.handleKeyDown as EventListener);
  };

  private updateTooltipEvents = () => {
    this.manageEventListeners("remove");
    this.showEvents = [
      !this.disableHover && "mouseenter",
      !this.disableHover && "focusin",
      !this.disableClick && "click",
    ];
    this.manageEventListeners("add");
  };

  render() {
    const { label, maxLines, silent, theme } = this;
    return (
      <Host
        class={{
          "ic-tooltip": true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
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
