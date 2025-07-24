import {
  Component,
  Element,
  h,
  Host,
  Method,
  Prop,
  Watch,
} from "@stencil/core";
import OpenInNew from "../../assets/OpenInNew.svg";
import {
  isElInAGGrid,
  isSlotUsed,
  onComponentRequiredPropUndefined,
  removeDisabledFalse,
  renderDynamicChildSlots,
} from "../../utils/helpers";
import { IcEmphasisType, IcSizes, IcThemeMode } from "../../utils/types";
import { IcButtonTypes } from "../ic-button/ic-button.types";

/**
 * @slot badge - Badge component overlaying the top right of the chip.
 * @slot icon - Content will be rendered at the start of the chip.
 */
@Component({
  tag: "ic-action-chip",
  styleUrl: "ic-action-chip.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class ActionChip {
  private chipEl?: HTMLButtonElement | HTMLAnchorElement;
  private hostMutationObserver?: MutationObserver;

  @Element() el: HTMLIcActionChipElement;

  /**
   * If `true`, the chip will appear disabled.
   */
  @Prop() disabled = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * If `true`, the user can save the linked URL instead of navigating to it.
   */
  @Prop() download: string | boolean = false;

  /**
   * The <form> element to associate the chip with.
   */
  @Prop() form?: string;

  /**
   * The URL that processes the information submitted by the chip. It overrides the action attribute of the chip's form owner. Does nothing if there is no form owner.
   */
  @Prop() formaction?: string;

  /**
   * The way the submitted form data is encoded.
   */
  @Prop() formenctype?: string;

  /**
   * The HTTP method used to submit the form.
   */
  @Prop() formmethod?: string;

  /**
   * If `true`, the form will not be validated when submitted.
   */
  @Prop() formnovalidate?: boolean;

  /**
   * The place to display the response from submitting the form. It overrides the target attribute of the chip's form owner.
   */
  @Prop() formtarget?: string;

  /**
   * The URL that the link points to. This will render the chip as an "a" tag.
   */
  @Prop() href?: string;

  /**
   * The human language of the linked URL.
   */
  @Prop() hreflang?: string;

  /**
   * The text rendered within the chip.
   */
  @Prop() label!: string;

  /**
   * If `true`, the button will display as monochromatic in either `light` or `dark` theme.
   */
  @Prop() monochrome = false;

  /**
   * How much of the referrer to send when following the link.
   */
  @Prop() referrerpolicy?: ReferrerPolicy;

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  @Prop() rel?: string;

  /**
   * The size of the chip.
   */
  @Prop() size: IcSizes = "medium";

  /**
   * The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).
   */
  @Prop() target?: string;

  /**
   * Sets the chip to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * If `true`, the outlined variant of chip will have a transparent background rather than the theme defined color.
   */
  @Prop() transparentBackground = true;

  /**
   * The type of the chip.
   */
  @Prop() type: IcButtonTypes = "button";

  /**
   * The emphasis of the chip.
   */
  @Prop() variant: IcEmphasisType = "filled";

  disconnectedCallback(): void {
    this.hostMutationObserver?.disconnect();
  }

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Chip"
    );

    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(mutationList, ["icon", "badge"], this)
    );
    this.hostMutationObserver.observe(this.el, {
      childList: true,
    });
  }

  /**
   * Sets focus on the chip.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.chipEl?.focus();
  }

  render() {
    const {
      disabled,
      download,
      form,
      formaction,
      formenctype,
      formmethod,
      formnovalidate,
      formtarget,
      href,
      hreflang,
      label,
      monochrome,
      referrerpolicy,
      rel,
      size,
      target,
      theme,
      transparentBackground,
      type,
      variant,
    } = this;

    const TagType = href ? "a" : "button";
    const isButtonElement = TagType === "button";

    const chipAttrs = isButtonElement
      ? {
          disabled,
          form,
          formaction,
          formenctype,
          formmethod,
          formnovalidate,
          formtarget,
          type,
        }
      : {
          download: download !== false ? download : null,
          href,
          hreflang,
          referrerpolicy,
          rel,
          target,
        };

    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <TagType
          class={{
            chip: true,
            disabled: isButtonElement && disabled,
            monochrome,
            "non-transparent": variant === "outlined" && !transparentBackground,
            [`${size}`]: true,
            [`${variant}`]: true,
          }}
          ref={(el) => (this.chipEl = el)}
          {...chipAttrs}
        >
          {isSlotUsed(this.el, "icon") && (
            <div class="icon">
              <slot name="icon" />
            </div>
          )}
          <ic-typography
            variant="label"
            class={{ label: true, "in-ag-grid": isElInAGGrid(this.el) }}
          >
            <span>{label}</span>
          </ic-typography>
          {!isButtonElement && target === "_blank" && (
            <span class="open-in-new-icon" innerHTML={OpenInNew} />
          )}
          {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
        </TagType>
      </Host>
    );
  }
}
