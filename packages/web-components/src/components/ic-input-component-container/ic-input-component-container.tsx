import { Component, Element, Host, Prop, h } from "@stencil/core";

import {
  IcInformationStatus,
  IcInformationStatusOrEmpty,
} from "../../utils/types";
import successIcon from "../../assets/success-icon.svg";
import { isSlotUsed } from "../../utils/helpers";

/**
 * @slot left-icon - Content will be placed to the left of the input.
 */
@Component({
  tag: "ic-input-component-container",
  styleUrl: "ic-input-component-container.css",
})
export class InputComponentContainer {
  @Element() host: HTMLIcInputComponentContainerElement;

  /**
   *  If `true`, the dark variant of the input component container will be displayed.
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
   *  If `true`, the small styling will be applied to the input component container.
   */
  @Prop() small: boolean = false;

  /**
   *  If `true`, the validation will display inline.
   */
  @Prop() validationInline: boolean = false;

  /**
   * The validation status of the input component container - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";

  render() {
    const {
      small,
      validationStatus,
      disabled,
      readonly,
      multiLine,
      fullWidth,
      dark,
      validationInline,
    } = this;
    const hasValidationStatus =
      this.validationStatus !== "" && !this.disabled && !this.readonly
        ? true
        : false;
    return (
      <Host
        class={{
          ["small"]: small,
          [validationStatus]: hasValidationStatus,
          ["disabled"]: disabled,
          ["readonly"]: readonly,
          ["multiline"]: multiLine,
          ["fullwidth"]: fullWidth,
          ["dark"]: dark,
        }}
      >
        <div
          class={{
            "focus-indicator": true,
            dark: dark,
          }}
        >
          {isSlotUsed(this.host, "left-icon") && (
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
