import { Component, Element, Host, Prop, h } from "@stencil/core";

import {
  getInputHelperTextID,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";

/**
 * @slot label - Content is placed as the label text.
 */
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

  private isSlotUsed = (slot: Element | null): boolean => {
    const assignedEls = (slot as HTMLSlotElement)?.assignedElements();
    if (assignedEls && assignedEls.length) {
      for (const el of assignedEls) {
        if (el.tagName === "SLOT") {
          // Recursion needed for when slot is forwarded multiple times - through child components
          // (e.g. in date picker)
          if (this.isSlotUsed(el as HTMLSlotElement)) {
            return true;
          }
        } else {
          // Found an assigned element which is not a nested <slot>
          return true;
        }
      }
    }
    return false;
  };

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

    const helperTextSlot = this.el.querySelector("slot[name='helper-text']");
    const labelSlot = this.el.querySelector('[slot="label"]');

    const LabelContent = () =>
      this.isSlotUsed(labelSlot) ? (
        <slot name="label"></slot>
      ) : readonly || !useLabelTag ? (
        <ic-typography
          variant="label"
          class={{
            "readonly-label": readonly,
            "error-label": status === "error" && !(readonly || disabled),
          }}
        >
          {labelText}
        </ic-typography>
      ) : (
        <ic-typography
          variant="label"
          class={{
            "readonly-label": readonly,
            "error-label": status === "error" && !(readonly || disabled),
          }}
        >
          <label htmlFor={this.for}>{labelText}</label>
        </ic-typography>
      );

    return (
      <Host
        class={{
          "ic-input-label-disabled": !!disabled,
          "ic-input-label-readonly": readonly,
          "with-helper": this.isSlotUsed(helperTextSlot) || helperText !== "",
        }}
      >
        {!hideLabel && <LabelContent />}
        {this.isSlotUsed(helperTextSlot) ? (
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
