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
   *  If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   *  If `true`, the input component container will fill the width of the container it is in.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   *  If `true`, the input component container will allow for multiple lines.
   */
  @Prop() multiLine?: boolean = false;

  /**
   *  If `true`, the readonly state will be set.
   */
  @Prop() readonly?: boolean = false;

  /**
   * The size of the input component container component.
   */
  @Prop() size?: IcSizes = "medium";

  /**
   *  If `true`, the validation will display inline.
   */
  @Prop() validationInline?: boolean = false;

  /**
   * The validation status of the input component container - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus?: IcInformationStatusOrEmpty = "";

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
      validationStatus,
      disabled,
      readonly,
      multiLine,
      fullWidth,
      validationInline,
    } = this;

    return (
      <Host
        class={{
          [`ic-input-component-container-${size}`]: true,
          [`ic-input-component-container-${validationStatus}`]:
            validationStatus !== "" && !disabled && !readonly,
          "ic-input-component-container-disabled": !!disabled,
          "ic-input-component-container-readonly": !!readonly,
          "ic-input-component-container-multiline": !!multiLine,
          "ic-input-component-container-full-width": !!fullWidth,
        }}
        aria-disabled={disabled ? "true" : null}
      >
        <div class="focus-indicator">
          {slotHasContent(this.el, "left-icon") && (
            <div class="icon-container">
              <slot name="left-icon" />
            </div>
          )}
          <slot></slot>

          {validationInline &&
            validationStatus === IcInformationStatus.Success && (
              <span class="inline-success" innerHTML={successIcon} />
            )}
        </div>
      </Host>
    );
  }
}
