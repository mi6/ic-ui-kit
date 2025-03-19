import { Element, Component, Host, Prop, h } from "@stencil/core";

import {
  IcInformationStatus,
  IcInformationStatusOrEmpty,
} from "../../utils/types";
import errorIcon from "../../assets/error-icon.svg";
import successIcon from "../../assets/success-icon.svg";
import warningIcon from "../../assets/warning-icon.svg";

import {
  getInputValidationTextID,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import { IcAriaLiveModeVariants } from "./ic-input-validation.types";

const icon = {
  [IcInformationStatus.Warning]: warningIcon,
  [IcInformationStatus.Error]: errorIcon,
  [IcInformationStatus.Success]: successIcon,
};

/**
 * @slot validation-message-adornment - Content will be placed to the right of the validation message.
 */
@Component({
  tag: "ic-input-validation",
  styleUrl: "ic-input-validation.css",
})
export class InputValidation {
  @Element() el: HTMLIcInputValidationElement;

  /**
   *  The ARIA live mode to apply to the message.
   */
  @Prop() ariaLiveMode?: IcAriaLiveModeVariants = "polite";

  /**
   * The ID of the form element the validation is bound to.
   */
  @Prop() for?: string;

  /**
   *  If `true`, the input validation will fill the width of the container.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * The validation message to display.
   */
  @Prop() message!: string;

  /**
   * The status of the validation - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() status?: IcInformationStatusOrEmpty = "";

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.message, propName: "message" }],
      "Input Validation"
    );
  }

  render() {
    const { ariaLiveMode, fullWidth, status, message } = this;
    const displayIcon = status !== "" ? icon[status!] : "";
    return (
      <Host
        class={{
          [`ic-input-validation-${status}`]: status !== "",
          "ic-input-validation-full-width": !!fullWidth,
        }}
      >
        {displayIcon !== "" && (
          <span
            class={{
              "status-icon": true,
              [`icon-${status}`]: true,
            }}
            innerHTML={displayIcon}
          />
        )}

        <ic-typography variant="caption" class="statustext">
          <span
            aria-live={ariaLiveMode}
            id={this.for && getInputValidationTextID(this.for)}
          >
            {message}
          </span>
        </ic-typography>

        <slot name="validation-message-adornment"></slot>
      </Host>
    );
  }
}
