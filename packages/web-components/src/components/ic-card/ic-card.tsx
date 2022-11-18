import { Component, Element, Listen, Prop, State, h } from "@stencil/core";
import {
  onComponentRequiredPropUndefined,
  isSlotUsed,
} from "../../utils/helpers";

/**
 * @slot icon - Content will be placed to the left of the card title.
 * @slot heading - Content will be placed at the top of the card to the right of the icon.
 * @slot message - Content will be placed in the main body of the card.
 */
@Component({
  tag: "ic-card",
  styleUrl: "ic-card.css",
  shadow: true,
})
export class Card {
  @Element() el: HTMLIcCardElement;

  /**
   * Set the variant to static or clickable
   */
  @Prop({ mutable: true }) clickable?: boolean = false;
  /**
   * URL for clickable cards
   */
  @Prop() href?: string | undefined;
  /**
   * Human readable explanation of the URL
   */
  @Prop() hreflang?: string = "";
  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;
  /**
   * Where to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;
  /**
   * Title for the card
   */
  @Prop() heading!: string;
  /**
   * Main body message of the card
   */
  @Prop() message?: string = "";
  /**
   * Whether the card is disabled if it is clickable
   */
  @Prop() disabled?: boolean = false;
  /**
   *  If true then fill width of container
   */
  @Prop() fullWidth: boolean = false;

  @State() parentIsAnchorTag: boolean = false;

  @State() isFocussed: boolean = false;

  @State() parentEl: HTMLElement | null = null;

  @Listen("click", { capture: true })
  handleHostClick(event: Event): void {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  }

  private parentFocussed = (): void => {
    this.isFocussed = true;
  };

  private parentBlurred = (): void => {
    this.isFocussed = false;
  };

  componentWillLoad(): void {
    this.parentEl = this.el.parentElement;

    if (this.parentEl.tagName === "A") {
      this.clickable = true;
      this.parentIsAnchorTag = true;
      this.parentEl.classList.add("ic-card-wrapper-link");
      this.parentEl.addEventListener("focus", this.parentFocussed);
      this.parentEl.addEventListener("blur", this.parentBlurred);
    }
  }

  disconnectedCallback(): void {
    if (this.parentIsAnchorTag) {
      this.parentEl.removeEventListener("focus", this.parentFocussed);
      this.parentEl.removeEventListener("blur", this.parentBlurred);
    }
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.heading, propName: "heading" }],
      "Card"
    );
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
      fullWidth,
      parentIsAnchorTag,
      isFocussed,
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
          ["fullwidth"]: fullWidth,
          ["focussed"]: isFocussed,
        }}
        tabindex={clickable && !parentIsAnchorTag ? 0 : null}
        aria-disabled={disabled ? "true" : null}
        disabled={disabled ? true : null}
        {...attrs}
      >
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
          <div class="card-message">
            <slot name="message">
              <ic-typography variant="body">{message}</ic-typography>
            </slot>
          </div>
        )}
      </Component>
    );
  }
}
