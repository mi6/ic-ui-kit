import {
  Component,
  Element,
  Host,
  Listen,
  Method,
  Prop,
  State,
  forceUpdate,
  h,
} from "@stencil/core";

import {
  IC_BLOCK_COLOR_COMPONENTS,
  IC_INHERITED_ARIA,
} from "../../utils/constants";
import {
  getBrandForegroundAppearance,
  inheritAttributes,
  isSlotUsed,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import {
  IcBrand,
  IcBrandForeground,
  IcBrandForegroundEnum,
  IcThemeMode,
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
  private buttonEl?: HTMLIcButtonElement;
  private inheritedAttributes: { [k: string]: string } = {};
  private hostMutationObserver: MutationObserver | null = null;

  @Element() el: HTMLIcNavigationButtonElement;

  /**
   * The display mode.
   */
  @State() mode: IcNavButtonModes = "navbar";

  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download: string | boolean = false;

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

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop({ mutable: true }) theme: IcThemeMode = "inherit";

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.el, MUTABLE_ATTRIBUTES);
  }

  componentDidLoad(): void {
    this.updateTheme();
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
    this.el
      .querySelector(`[slot="icon"]`)
      ?.setAttribute("viewBox", "0 0 24 24");
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

  @Listen("brandChange", { target: "document" })
  brandChangeHandler({ detail: { mode } }: CustomEvent<IcBrand>): void {
    this.updateTheme(mode);
  }

  /**
   * Sets focus on the native `button`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.buttonEl?.setFocus();
  }

  /**
   * Triggered when attributes of host element change
   */
  private hostMutationCallback = (mutationList: MutationRecord[]): void => {
    let forceComponentUpdate = false;
    mutationList.forEach(({ attributeName }) => {
      if (attributeName) {
        const attribute = this.el.getAttribute(attributeName);
        if (attribute && MUTABLE_ATTRIBUTES.includes(attributeName)) {
          this.inheritedAttributes[attributeName] = attribute;
          forceComponentUpdate = true;
        }
      }
    });
    if (forceComponentUpdate) {
      forceUpdate(this);
    }
  };

  private updateTheme(
    mode: IcBrandForeground = getBrandForegroundAppearance()
  ) {
    if (this.el.parentElement?.closest(IC_BLOCK_COLOR_COMPONENTS)) return;

    this.theme =
      mode === IcBrandForegroundEnum.Light
        ? IcBrandForegroundEnum.Dark
        : IcBrandForegroundEnum.Light;
  }

  render() {
    const {
      download,
      href,
      inheritedAttributes,
      label,
      mode,
      referrerpolicy,
      rel,
      target,
      theme,
    } = this;

    const isMenuMode = mode === "menu";

    const buttonProps = {
      download,
      href,
      referrerpolicy,
      rel,
      target,
      theme,
    };

    return (
      <Host
        class={{
          "in-side-menu": isMenuMode,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <ic-button
          ref={(el) => (this.buttonEl = el)}
          class={{ "popout-menu-button": isMenuMode }}
          aria-label={!isMenuMode ? label : null}
          disableTooltip={isMenuMode}
          fullWidth={isMenuMode}
          monochrome={!isMenuMode}
          size={isMenuMode ? "medium" : "large"}
          variant={isMenuMode ? "tertiary" : "icon"}
          {...buttonProps}
          {...inheritedAttributes}
        >
          {isMenuMode ? label : ""}
          <slot slot="left-icon" name="icon"></slot>
          {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
        </ic-button>
      </Host>
    );
  }
}
