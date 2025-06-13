import { Component, Element, Host, Prop, h } from "@stencil/core";

import {
  getInputHelperTextID,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";

@Component({
  tag: "ic-input-label",
  styleUrl: "./ic-input-label.css",
})
export class InputLabel {
  @Element() el: HTMLIcInputLabelElement;

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The ID of the form element the label is bound to.
   */
  @Prop() for?: string;

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

  /**
   * The status of the label - e.g. 'error'.
   */
  @Prop() status: "error" | "" = "";

  /**
   * @internal If `true`, wraps label text in label tag
   */
  @Prop() useLabelTag: boolean = true;

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
      status,
      hideLabel,
      useLabelTag,
    } = this;
    const labelText = required ? label + " *" : label;
    const helperTextId = this.for && getInputHelperTextID(this.for);
    const helperTextClass = {
      helpertext: true,
      "helpertext-normal": !disabled && !readonly,
      "helpertext-readonly": readonly,
    };
    const isHelperTextSlotUsed =
      (
        this.el.querySelector("slot[name='helper-text']") as HTMLSlotElement
      )?.assignedElements().length > 0;

    return (
      <Host
        class={{
          "ic-input-label-disabled": !!disabled,
          "ic-input-label-readonly": readonly,
          "with-helper": isHelperTextSlotUsed || helperText !== "",
        }}
      >
        {!hideLabel && (
          <ic-typography
            variant="label"
            class={{
              "readonly-label": readonly,
              "error-label": status === "error" && !(readonly || disabled),
            }}
          >
            {readonly || !useLabelTag ? (
              `${labelText}`
            ) : (
              <label htmlFor={this.for}>{labelText}</label>
            )}
          </ic-typography>
        )}
        {isHelperTextSlotUsed ? (
          <span id={helperTextId} class={helperTextClass}>
            <slot name="helper-text"></slot>
          </span>
        ) : (
          helperText !== "" && (
            <ic-typography variant="caption" class={helperTextClass}>
              <span id={helperTextId}>{helperText}</span>
            </ic-typography>
          )
        )}
      </Host>
    );
  }
}
