import {
  Component,
  Element,
  Host,
  Prop,
  State,
  h,
  Listen,
  Method,
} from "@stencil/core";

import {
  getThemeForegroundColor,
  inheritAttributes,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import { IC_INHERITED_ARIA } from "../../utils/constants";
import {
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../../utils/types";
import { IcNavButtonModes } from "./ic-navigation-button.types";

/**
 * @slot icon - Content will be placed to the left of the button label.
 */

@Component({
  tag: "ic-navigation-button",
  styleUrl: "ic-navigation-button.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class NavigationButton {
  @Element() el: HTMLIcNavigationButtonElement;

  /**
   * The label info to display.
   */
  @Prop() label!: string;
  /**
   * The URL that the link points to. This will render the button as an "a" tag.
   */
  @Prop() href?: string;
  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;
  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download?: string | boolean = false;
  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;
  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   * The display mode.
   */
  @State() mode: IcNavButtonModes = "navbar";

  @State() initialAppearance = getThemeForegroundColor();

  private buttonEl: HTMLIcButtonElement;
  private inheritedAttributes: { [k: string]: unknown } = {};

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

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.el, [
      ...IC_INHERITED_ARIA,
      "title",
    ]);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Navigation Button"
    );
  }

  render() {
    const { href, target, rel, download, referrerpolicy } = this;

    let label = "";
    let className = "";
    let variant: "icon" | "tertiary" = "icon";
    let appearance: IcThemeForeground | IcThemeForegroundEnum.Default =
      this.initialAppearance;
    let size: "default" | "large" = "large";
    let fullWidth = false;

    if (this.mode === "menu") {
      label = this.label;
      variant = "tertiary";
      appearance = IcThemeForegroundEnum.Default;
      size = "default";
      fullWidth = true;
      className = "popout-menu-button";
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
    };

    return (
      <Host class={{ ["in-side-menu"]: this.mode === "menu" }}>
        <ic-button
          class={className}
          aria-label={this.label}
          ref={(el) => (this.buttonEl = el)}
          {...buttonProps}
          {...this.inheritedAttributes}
        >
          {label}
          <slot slot="icon" name="icon"></slot>
        </ic-button>
      </Host>
    );
  }
}
