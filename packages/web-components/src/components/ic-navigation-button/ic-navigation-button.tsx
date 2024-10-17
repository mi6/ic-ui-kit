import {
  Component,
  Element,
  Host,
  Prop,
  State,
  h,
  Listen,
  Method,
  forceUpdate,
} from "@stencil/core";

import {
  getThemeForegroundColor,
  inheritAttributes,
  onComponentRequiredPropUndefined,
  isSlotUsed,
} from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import {
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
  IcThemeForegroundNoDefault,
} from "../../utils/types";
import { IcNavButtonModes } from "./ic-navigation-button.types";

const MUTABLE_ATTRIBUTES = [...IC_INHERITED_ARIA, "title"];

/**
 * @slot icon - Content will be placed to the left of the button label.
 * @slot badge - Badge component overlaying the top right of the button.
 */

@Component({
  tag: "ic-navigation-button",
  styleUrl: "ic-navigation-button.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class NavigationButton {
  private buttonEl: HTMLIcButtonElement;
  private inheritedAttributes: { [k: string]: string } = {};
  private hostMutationObserver: MutationObserver = null;

  @Element() el: HTMLIcNavigationButtonElement;

  @State() initialAppearance: IcThemeForegroundNoDefault | IcThemeForeground =
    getThemeForegroundColor();
  /**
   * The display mode.
   */
  @State() mode: IcNavButtonModes = "navbar";

  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download?: string | boolean = false;

  /**
   * The URL that the link points to. This will render the button as an "a" tag.
   */
  @Prop() href?: string;

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;

  /**
   * The label info to display.
   */
  @Prop() label!: string;

  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.el, MUTABLE_ATTRIBUTES);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Navigation Button"
    );

    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, {
      attributes: true,
    });
  }

  componentWillRender(): void {
    const iconEl = this.el.querySelector(`[slot="icon"]`);
    iconEl !== null && iconEl.setAttribute("viewBox", "0 0 24 24");
  }

  disconnectedCallback(): void {
    this.hostMutationObserver?.disconnect();
  }

  @Listen("icNavigationMenuOpened", { target: "document" })
  navBarMenuOpenHandler(): void {
    this.mode = "menu";
  }

  @Listen("icNavigationMenuClosed", { target: "document" })
  navBarMenuCloseHandler(): void {
    this.mode = "navbar";
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.initialAppearance = theme.mode;
  }

  /**
   * Sets focus on the native `button`.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.buttonEl) {
      this.buttonEl.focus();
    }
  }

  // triggered when attributes of host element change
  private hostMutationCallback = (mutationList: MutationRecord[]): void => {
    let forceComponentUpdate = false;
    mutationList.forEach(({ attributeName }) => {
      if (MUTABLE_ATTRIBUTES.includes(attributeName)) {
        this.inheritedAttributes[attributeName] =
          this.el.getAttribute(attributeName);
        forceComponentUpdate = true;
      }
    });
    if (forceComponentUpdate) {
      forceUpdate(this);
    }
  };

  render() {
    const { href, target, rel, download, referrerpolicy } = this;

    let label = "";
    let className = "";
    let variant: "icon" | "tertiary" = "icon";
    let appearance: IcThemeForeground | IcThemeForegroundEnum.Default =
      this.initialAppearance;
    let size: "medium" | "large" = "large";
    let fullWidth = false;
    let disableTooltip = false;

    if (this.mode === "menu") {
      label = this.label;
      variant = "tertiary";
      appearance = IcThemeForegroundEnum.Default;
      size = "medium";
      fullWidth = true;
      className = "popout-menu-button";
      disableTooltip = true;
    }

    const buttonProps = {
      variant,
      appearance,
      size,
      href,
      target,
      rel,
      download,
      referrerpolicy,
      fullWidth,
      disableTooltip,
    };

    return (
      <Host class={{ ["in-side-menu"]: this.mode === "menu" }}>
        <ic-button
          class={className}
          aria-label={variant == "icon" ? this.label : null}
          ref={(el) => (this.buttonEl = el)}
          {...buttonProps}
          {...this.inheritedAttributes}
        >
          {label}
          <slot slot="left-icon" name="icon"></slot>
          {isSlotUsed(this.el, "badge") && variant === "icon" && (
            <slot name="badge"></slot>
          )}
        </ic-button>
      </Host>
    );
  }
}
