import { Component, Element, Host, Prop, forceUpdate, h } from "@stencil/core";

import {
  IcInformationStatus,
  IcInformationStatusOrEmpty,
  IcSizes,
} from "../../utils/types";
import successIcon from "../../assets/success-icon.svg";
import { checkSlotInChildMutations, slotHasContent } from "../../utils/helpers";

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

  componentDidLoad(): void {
    this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
    this.hostMutationObserver.observe(this.el, { childList: true });
  }

  private hostMutationCallback = (mutationList: MutationRecord[]): void => {
    if (
      mutationList.some(({ type, addedNodes, removedNodes }) =>
        type === "childList"
          ? checkSlotInChildMutations(addedNodes, removedNodes, "left-icon")
          : false
      )
    ) {
      forceUpdate(this);
    }
  };

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
          ["ic-input-component-container-small"]: small,
          [`ic-input-component-container-${size}`]: true,
          [`ic-input-component-container-${validationStatus}`]:
            hasValidationStatus,
          [`ic-input-component-container-disabled`]: disabled,
          [`ic-input-component-container-readonly`]: readonly,
          ["ic-input-component-container-multiline"]: multiLine,
          ["ic-input-component-container-full-width"]: fullWidth,
          ["ic-input-component-container-dark"]: dark || appearance === "dark",
        }}
        aria-disabled={disabled && `${disabled}`}
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
