import { Component, Element, Host, Prop, Watch, h } from "@stencil/core";

import {
  IcInformationStatus,
  IcInformationStatusOrEmpty,
  IcSizes,
} from "../../utils/types";
import successIcon from "../../assets/success-icon.svg";
import {
  removeDisabledFalse,
  renderDynamicChildSlots,
  slotHasContent,
} from "../../utils/helpers";

/**
 * @slot left-icon - Content will be placed to the left of the input.
 */
@Component({
  tag: "ic-input-component-container",
  styleUrl: "ic-input-component-container.css",
})
export class InputComponentContainer {
  private hostMutationObserver: MutationObserver;
  @Element() el: HTMLIcInputComponentContainerElement;

  /**
   * The appearance of the input component container.
   */
  @Prop() appearance?: "dark" | "default" = "default";

  /**
   * @deprecated This prop should not be used anymore. Set prop `appearance` to "dark" instead.
   */
  @Prop() dark?: boolean = false;

  /**
   *  If `true`, the disabled state will be set.
   */
  @Prop() disabled: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   *  If `true`, the input component container will fill the width of the container it is in.
   */
  @Prop() fullWidth: boolean = false;

  /**
   *  If `true`, the input component container will allow for multiple lines.
   */
  @Prop() multiLine: boolean = false;

  /**
   *  If `true`, the readonly state will be set.
   */
  @Prop() readonly: boolean = false;

  /**
   * The size of the input component container component.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * @deprecated This prop should not be used anymore. Set prop `size` to "small" instead.
   */
  @Prop() small?: boolean = false;

  /**
   *  If `true`, the validation will display inline.
   */
  @Prop() validationInline: boolean = false;

  /**
   * The validation status of the input component container - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    this.hostMutationObserver = new MutationObserver((mutationList) =>
      renderDynamicChildSlots(mutationList, "left-icon", this)
    );
    this.hostMutationObserver.observe(this.el, { childList: true });
  }

  render() {
    const {
      size,
      small,
      validationStatus,
      disabled,
      readonly,
      multiLine,
      fullWidth,
      dark,
      appearance,
      validationInline,
    } = this;
    const hasValidationStatus =
      this.validationStatus !== "" && !this.disabled && !this.readonly
        ? true
        : false;

    return (
      <Host
        class={{
          small: small,
          [`${size}`]: true,
          [validationStatus]: hasValidationStatus,
          disabled: disabled,
          readonly: readonly,
          ["multiline"]: multiLine,
          ["fullwidth"]: fullWidth,
          ["dark"]: dark || appearance === "dark",
        }}
        aria-disabled={disabled ? "true" : null}
      >
        <div
          class={{
            "focus-indicator": true,
            dark: dark || appearance === "dark",
          }}
        >
          {slotHasContent(this.el, "left-icon") && (
            <div
              class={{
                ["icon-container"]: true,
              }}
            >
              <slot name="left-icon" />
            </div>
          )}
          <slot></slot>

          {validationInline &&
            validationStatus === IcInformationStatus.Success && (
              <span
                class={{
                  ["inline-success"]: true,
                }}
                innerHTML={successIcon}
              />
            )}
        </div>
      </Host>
    );
  }
}
