import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from "@stencil/core";
import {
  IcBrand,
  IcBrandForeground,
  IcBrandForegroundEnum,
  IcCardDensity,
  IcSizes,
  IcThemeMode,
} from "../../utils/types";
import {
  getBrandFromContext,
  isSlotUsed,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
  renderDynamicChildSlots,
} from "../../utils/helpers";

/**
 * @slot heading - Content will be placed at the top of the horizontal card to the right of the icon.
 * @slot message - Content will be placed in the main body of the horizontal card.
 * @slot subheading - Content will be placed below the card heading. Only for `density="spacious"`.
 * @slot adornment - Content will be placed below the card subheading. Only for `density="spacious"`.
 * @slot image-left - Content will be placed to the left of all other content.
 * @slot image-right - Content will be placed to the right of all other content.
 * @slot icon - Content will be placed to the left of the horizontal card heading.
 * @slot interaction-button - Content will be placed in the top right corner of the heading section.
 * @slot badge - Badge component overlaying the top right of the horizontal card.
 */
@Component({
  tag: "ic-card-horizontal",
  styleUrl: "ic-card-horizontal.css",
  shadow: true,
})
export class Card {
  private hostMutationObserver: MutationObserver | null = null;
  private IMAGE_LEFT = "image-left";
  private IMAGE_RIGHT = "image-right";
  private INTERACTION_BUTTON = "interaction-button";

  @Element() el: HTMLIcCardHorizontalElement;

  @State() appearance?: IcBrandForeground = "default";
  @State() isFocussed: boolean = false;
  @State() parentEl: HTMLElement | null = null;
  @State() parentIsAnchorTag: boolean = false;

  /**
   * If `true`, the horizontal card will be a clickable variant, instead of static.
   */
  @Prop({ mutable: true }) clickable: boolean = false;

  /**
   * The padding of the horizontal card.
   */
  @Prop() density: IcCardDensity = "default";

  /**
   * If `true`, the horizontal card will be disabled if it is clickable.
   */
  @Prop() disabled: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * The heading for the horizontal card. This is required, unless a slotted heading is used.
   */
  @Prop() heading?: string;

  /**
   * The URL that the clickable horizontal card link points to. If set, the clickable horizontal card will render as an "a" tag, otherwise it will render as a button.
   */
  @Prop() href?: string | undefined;

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string = "";

  /**
   * The main body message of the horizontal card.
   */
  @Prop() message?: string = "";

  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;

  /**
   * The size of the horizontal card.
   */
  @Prop() size: IcSizes = "medium";

  /**
   * The subheading for the card.
   */
  @Prop() subheading?: string;

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  disconnectedCallback(): void {
    if (this.parentEl && this.parentIsAnchorTag) {
      this.parentEl.removeEventListener("focus", this.parentFocussed);
      this.parentEl.removeEventListener("blur", this.parentBlurred);
    }
    this.hostMutationObserver?.disconnect();
  }

  componentWillLoad(): void {
    this.parentEl = this.el.parentElement;

    if (this.parentEl?.tagName === "A") {
      this.clickable = true;
      this.parentIsAnchorTag = true;
      this.parentEl.classList.add("ic-card-wrapper-link");
      this.parentEl.addEventListener("focus", this.parentFocussed);
      this.parentEl.addEventListener("blur", this.parentBlurred);
    }
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    !isSlotUsed(this.el, "heading") &&
      onComponentRequiredPropUndefined(
        [{ prop: this.heading, propName: "heading" }],
        "Card"
      );
    this.updateTheme();

    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(
        mutationList,
        [
          "message",
          "adornment",
          this.IMAGE_LEFT,
          this.IMAGE_RIGHT,
          "icon",
          this.INTERACTION_BUTTON,
          "badge",
        ],
        this
      )
    );
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
  }

  @Listen("click", { capture: true })
  handleHostClick(event: Event): void {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  }

  @Listen("brandChange", { target: "document" })
  brandChangeHandler(ev: CustomEvent<IcBrand>): void {
    this.updateTheme(ev.detail.mode);
  }

  /**
   * Sets focus on the card.
   */
  @Method()
  async setFocus(): Promise<void> {
    const linkElement = this.el.shadowRoot?.querySelector("a");
    const buttonElement = this.el.shadowRoot?.querySelector("button");
    if (linkElement) {
      linkElement.focus();
    } else if (buttonElement) {
      buttonElement.focus();
    }
  }

  private parentFocussed = (): void => {
    this.isFocussed = true;
  };

  private parentBlurred = (): void => {
    this.isFocussed = false;
  };

  private updateTheme(mode?: IcBrandForeground): void {
    const foregroundColor = getBrandFromContext(this.el, mode);

    if (foregroundColor !== IcBrandForegroundEnum.Default) {
      this.theme =
        foregroundColor === IcBrandForegroundEnum.Light
          ? IcBrandForegroundEnum.Dark
          : IcBrandForegroundEnum.Light;
    }
  }

  render() {
    const {
      appearance,
      clickable,
      density,
      disabled,
      heading,
      message,
      href,
      hreflang,
      referrerpolicy,
      rel,
      target,
      parentIsAnchorTag,
      isFocussed,
      size,
      subheading,
      theme,
    } = this;

    const Component =
      parentIsAnchorTag || !clickable
        ? "div"
        : href === undefined
        ? "button"
        : "a";

    const attrs = Component == "a" && {
      href: href,
      hrefLang: hreflang,
      referrerPolicy: referrerpolicy,
      rel: rel,
      target: target,
    };

    const hasLeftImage = isSlotUsed(this.el, this.IMAGE_LEFT);
    const hasRightImage = isSlotUsed(this.el, this.IMAGE_RIGHT);

    return (
      <Host class={{ [`ic-theme-${theme}`]: theme !== "inherit" }}>
        <Component
          class={{
            card: true,
            clickable: clickable && !disabled,
            disabled,
            focussed: isFocussed,
            dark: appearance === IcBrandForegroundEnum.Dark,
            [`${size}`]: true,
            "with-icon": isSlotUsed(this.el, "icon"),
            "with-image": hasLeftImage || hasRightImage,
            spacious: density === "spacious",
          }}
          tabindex={clickable && !parentIsAnchorTag ? 0 : undefined}
          aria-disabled={disabled ? "true" : undefined}
          disabled={disabled ? true : undefined}
          {...attrs}
        >
          {hasLeftImage && (
            <div class="image">
              <slot name="image-left"></slot>
            </div>
          )}
          <div
            class={{
              "card-content": true,
              "left-image": hasLeftImage,
              "right-image": hasRightImage,
            }}
          >
            <div class="card-header">
              {isSlotUsed(this.el, "icon") && (
                <div class="icon">
                  <slot name="icon" />
                </div>
              )}
              <div
                class={{
                  "card-title": true,
                  "with-interaction-button": isSlotUsed(
                    this.el,
                    this.INTERACTION_BUTTON
                  ),
                }}
              >
                <slot name="heading">
                  <ic-typography variant="h4">
                    <p>{heading}</p>
                  </ic-typography>
                </slot>
              </div>
              {isSlotUsed(this.el, this.INTERACTION_BUTTON) && (
                <div class="interaction-button">
                  <slot name="interaction-button"></slot>
                </div>
              )}
            </div>
            {density === "spacious" &&
              (subheading || isSlotUsed(this.el, "subheading")) && (
                <div class="subheading">
                  <slot name="subheading">
                    <ic-typography variant="subtitle-small">
                      {subheading}
                    </ic-typography>
                  </slot>
                </div>
              )}
            {density === "spacious" && isSlotUsed(this.el, "adornment") && (
              <div class="adornment">
                <slot name="adornment"></slot>
              </div>
            )}
            {(message || isSlotUsed(this.el, "message")) && (
              <div class="card-message">
                {message && (
                  <ic-typography variant="body">{message}</ic-typography>
                )}
                {isSlotUsed(this.el, "message") && <slot name="message"></slot>}
              </div>
            )}
          </div>
          {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
          {hasRightImage && (
            <div class="image">
              <slot name="image-right"></slot>
            </div>
          )}
        </Component>
      </Host>
    );
  }
}
