import { Component, Host, Prop, h } from "@stencil/core";

import {
  getInputHelperTextID,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";

@Component({
  tag: "ic-input-label",
  styleUrl: "./ic-input-label.css",
})
export class InputLabel {
  /**
   * The appearance of the input label.
   */
  @Prop() appearance?: "dark" | "default" = "default";

  /**
   * @deprecated This prop should not be used anymore. Set prop `appearance` to "dark" instead.
   */
  @Prop() dark?: boolean = false;

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled: boolean = false;

  /**
   * If `true`, the input label will display with error styling.
   */
  @Prop() error?: boolean = false;

  /**
   * The ID of the form element the label is bound to.
   */
  @Prop() for: string;

  /**
   * The helper text that will be displayed.
   */
  @Prop() helperText: string = "";

  /**
   * The label will be visually hidden.
   */
  @Prop() hideLabel: boolean = false;

  /**
   * The text content of the label.
   */
  @Prop() label!: string;

  /**
   * If `true`, the readonly state will be set.
   */
  @Prop() readonly: boolean = false;

  /**
   * If `true`, the input label will require a value.
   */
  @Prop() required: boolean = false;

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Input Label"
    );
  }

  render() {
    const {
      disabled,
      readonly,
      label,
      required,
      helperText,
      hideLabel,
      error,
      dark,
      appearance,
    } = this;
    const labelText = required ? label + " *" : label;
    const labelContent = readonly ? (
      `${labelText}`
    ) : (
      <label htmlFor={this.for}>{labelText}</label>
    );

    const id = getInputHelperTextID(this.for);

    return (
      <Host
        class={{
          ["disabled"]: disabled,
          ["readonly"]: readonly,
          ["with-helper"]: helperText !== "",
        }}
      >
        {!hideLabel && (
          <ic-typography
            variant="label"
            class={{
              ["readonly-label"]: readonly,
              ["error-label"]: error && !(readonly || disabled),
              ["dark"]: dark || appearance === "dark",
            }}
          >
            {labelContent}
          </ic-typography>
        )}

        {helperText !== "" && (
          <ic-typography
            variant="caption"
            class={{
              ["helpertext"]: true,
              ["helpertext-normal"]: !disabled && !readonly,
              ["helpertext-readonly"]: readonly,
            }}
          >
            <span id={id}>{helperText}</span>
          </ic-typography>
        )}
      </Host>
    );
  }
}
