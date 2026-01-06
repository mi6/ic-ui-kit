import { Element, Component, Host, Prop, h, Watch } from "@stencil/core";

import {
  IcAriaLive,
  IcInformationStatus,
  IcInformationStatusOrEmpty,
} from "../../utils/types";
import errorIcon from "../../assets/error-icon.svg";
import successIcon from "../../assets/success-icon.svg";
import warningIcon from "../../assets/warning-icon.svg";

import { getInputValidationTextID } from "../../utils/helpers";

const ICON = {
  [IcInformationStatus.Warning]: warningIcon,
  [IcInformationStatus.Error]: errorIcon,
  [IcInformationStatus.Success]: successIcon,
};
const INVISIBLE_CHAR = "\u200B";

/**
 * @slot validation-message-adornment - Content will be placed to the right of the validation message.
 */
@Component({
  tag: "ic-input-validation",
  styleUrl: "ic-input-validation.css",
})
export class InputValidation {
  private messageEl!: HTMLSpanElement;

  @Element() el: HTMLIcInputValidationElement;

  /**
   *  The ARIA live mode to apply to the message.
   */
  @Prop() ariaLiveMode?: IcAriaLive = "polite";

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
  @Prop() message?: string;
  @Watch("message")
  watchMessageHandler(newValue: string) {
    // Force detectable DOM changes
    // Invisible character used as screen readers can ignore whitespace changes e.g. "" and " "
    this.messageEl.textContent = INVISIBLE_CHAR;
    setTimeout(() => {
      this.messageEl.textContent = newValue;
    }, 200); // Delay to help ensure screen readers detect change
  }

  /**
   * The status of the validation - e.g. 'error' | 'warning' | 'success'.
   */
  @Prop() status?: IcInformationStatusOrEmpty = "";

  componentDidLoad(): void {
    this.messageEl.textContent = INVISIBLE_CHAR;
  }

  render() {
    const { ariaLiveMode, fullWidth, status, message } = this;
    const displayIcon = status !== "" ? ICON[status!] : "";
    return (
      <Host
        class={{
          [`ic-input-validation-${status}`]: status !== "",
          "ic-input-validation-full-width": !!fullWidth,
          "ic-input-validation-with-status": status !== "",
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
          <span id={this.for && getInputValidationTextID(this.for)}>
            {message}
          </span>
          {/* Separate aria-live region to avoid flashing due to textContent delay */}
          <span
            ref={(el) => (this.messageEl = el as HTMLSpanElement)}
            class="sr-only"
            aria-live={ariaLiveMode}
          ></span>
        </ic-typography>
        <slot name="validation-message-adornment"></slot>
      </Host>
    );
  }
}
