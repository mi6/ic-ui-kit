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
  /**
   * disabled
   */
  @Prop() disabled: boolean = false;
  /**
   * readonly
   */
  @Prop() readonly: boolean = false;
  /**
   * validationStatus
   */
  @Prop() validationStatus: IcInformationStatusOrEmpty = "";
  /**
   * small
   */
  @Prop() small: boolean = false;
  /**
   * multiLine
   */
  @Prop() multiLine: boolean = false;
  /**
   * validationInline
   */
  @Prop() validationInline: boolean = false;

  /**
   * Determines whether the dark variant of the input-component-container focus indicator should be displayed.
   */
  @Prop() dark?: boolean = false;

  /**
   *  If true then fill width of container
   */
  @Prop() fullWidth: boolean = false;

  @Element() host: HTMLIcInputComponentContainerElement;

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
