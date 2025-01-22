import {
  Component,
  Element,
  Listen,
  Prop,
  State,
  h,
  Method,
  Watch,
} from "@stencil/core";
import {
  onComponentRequiredPropUndefined,
  isSlotUsed,
  getThemeFromContext,
  removeDisabledFalse,
  renderDynamicChildSlots,
} from "../../utils/helpers";
import {
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../../utils/types";
import { IcCardSizes } from "./ic-card-horizontal.types";

/**
 * @slot heading - Content will be placed at the top of the horizontal card to the right of the icon.
 * @slot message - Content will be placed in the main body of the horizontal card.
 * @slot image - Content will be placed to the left of all other content.
 * @slot icon - Content will be placed to the left of the horizontal card heading.
 * @slot badge - Badge component overlaying the top right of the horizontal card.
 */
@Component({
  tag: "ic-card-horizontal",
  styleUrl: "ic-card-horizontal.css",
  shadow: true,
})
export class Card {
  private hostMutationObserver: MutationObserver = null;

  @Element() el: HTMLIcCardHorizontalElement;

  @State() appearance?: IcThemeForeground = "default";
  @State() isFocussed: boolean = false;
  @State() parentEl: HTMLElement | null = null;
  @State() parentIsAnchorTag: boolean = false;

  /**
   * If `true`, the horizontal card will be a clickable variant, instead of static.
   */
  @Prop({ mutable: true }) clickable?: boolean = false;

  /**
   * If `true`, the horizontal card will be disabled if it is clickable.
   */
  @Prop() disabled?: boolean = false;
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
  @Prop() size: IcCardSizes = "medium";

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  disconnectedCallback(): void {
    if (this.parentIsAnchorTag) {
      this.parentEl.removeEventListener("focus", this.parentFocussed);
      this.parentEl.removeEventListener("blur", this.parentBlurred);
    }
    this.hostMutationObserver?.disconnect();
  }

  componentWillLoad(): void {
    this.parentEl = this.el.parentElement;

    if (this.parentEl.tagName === "A") {
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
      renderDynamicChildSlots(mutationList, "image", this)
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

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.updateTheme(theme.mode);
  }

  /**
   * Sets focus on the card.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.el.shadowRoot.querySelector("a")) {
      this.el.shadowRoot.querySelector("a").focus();
    } else if (this.el.shadowRoot.querySelector("button")) {
      this.el.shadowRoot.querySelector("button").focus();
    }
  }

  private parentFocussed = (): void => {
    this.isFocussed = true;
  };

  private parentBlurred = (): void => {
    this.isFocussed = false;
  };

  private updateTheme(newTheme: IcThemeForeground = null): void {
    const foregroundColor = getThemeFromContext(this.el, newTheme || null);

    if (foregroundColor !== IcThemeForegroundEnum.Default) {
      this.appearance = foregroundColor;
    }
  }

  render() {
    const {
      clickable,
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
    } = this;

    const Component = parentIsAnchorTag
      ? "div"
      : clickable
      ? this.href === undefined
        ? "button"
        : "a"
      : "div";

    const attrs = Component == "a" && {
      href: href,
      hrefLang: hreflang,
      referrerPolicy: referrerpolicy,
      rel: rel,
      target: target,
    };

    return (
      <Component
        class={{
          ["card"]: true,
          ["clickable"]: clickable && !disabled,
          ["disabled"]: disabled,
          ["focussed"]: isFocussed,
          ["dark"]: this.appearance === IcThemeForegroundEnum.Dark,
          [`${size}`]: true,
          ["with-icon"]: isSlotUsed(this.el, "icon"),
          ["with-image"]: isSlotUsed(this.el, "image"),
        }}
        tabindex={clickable && !parentIsAnchorTag ? 0 : null}
        aria-disabled={disabled ? "true" : null}
        disabled={disabled ? true : null}
        {...attrs}
      >
        {isSlotUsed(this.el, "image") && (
          <div class={{ ["image"]: true }}>
            <slot name="image"></slot>
          </div>
        )}
        <div class="card-content">
          <div class="card-header">
            {isSlotUsed(this.el, "icon") && (
              <div class="icon">
                <slot name="icon" />
              </div>
            )}
            <div class="card-title">
              <slot name="heading">
                <ic-typography variant="h4">
                  <p>{heading}</p>
                </ic-typography>
              </slot>
            </div>
          </div>
          {(message || isSlotUsed(this.el, "message")) && (
            <div
              class={{
                ["card-message"]: true,
              }}
            >
              {message && (
                <ic-typography variant="body">{message}</ic-typography>
              )}
              {isSlotUsed(this.el, "message") && <slot name="message"></slot>}
            </div>
          )}
        </div>
        {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
      </Component>
    );
  }
}
