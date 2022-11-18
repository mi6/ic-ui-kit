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
   * for
   */
  @Prop() for: string;
  /**
   * required
   */
  @Prop() required: boolean = false;
  /**
   * helperText
   */
  @Prop() helperText: string = "";
  /**
   * label
   */
  @Prop() label!: string;
  /**
   * disabled
   */
  @Prop() disabled: boolean = false;
  /**
   * readonly
   */
  @Prop() readonly: boolean = false;
  /**
   * error
   */
  @Prop() error?: boolean = false;
  /**
   * dark
   */
  @Prop() dark?: boolean = false;

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Input Label"
    );
  }

  render() {
    const { disabled, readonly, label, required, helperText, error, dark } =
      this;
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
        <ic-typography
          variant="label"
          class={{
            ["readonly-label"]: readonly,
            ["error-label"]: error && !(readonly || disabled),
            ["dark"]: dark,
          }}
        >
          {labelContent}
        </ic-typography>

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
