import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Listen,
  State,
  Method,
  Watch,
} from "@stencil/core";
import { IcAdditionalFieldTypes, IcValueEventDetail } from "../../utils/types";
import {
  onComponentRequiredPropUndefined,
  addFormResetListener,
  removeFormResetListener,
  removeDisabledFalse,
  isPropDefined,
  isSlotUsed,
  slotHasContent,
} from "../../utils/helpers";

const ADDITIONAL_FIELD = "additional-field";
const TEXT_FIELD_SELECTOR = "ic-text-field";

/**
 * @slot additional-field - Content to displayed alongside a radio option.
 */
@Component({
  tag: "ic-radio-option",
  styleUrl: "ic-radio-option.css",
})
export class RadioOption {
  private defaultRadioValue: string = "";
  private hasAdditionalField: boolean = false;
  private radioElement: HTMLInputElement;
  private skipFocus = false;

  @Element() el: HTMLIcRadioOptionElement;

  /**
   * The style of additionalField that will be displayed if used.
   */
  @Prop({ reflect: true }) additionalFieldDisplay: IcAdditionalFieldTypes =
    "static";

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The text to be displayed when dynamic.
   */
  @Prop() dynamicText: string = "This selection requires additional answers";

  /**
   * The <form> element to associate the radio with.
   */
  @Prop() form?: string;

  /**
   * The URL that processes the information submitted by the radio. It overrides the action attribute of the radio's form owner. Does nothing if there is no form owner.
   */
  @Prop() formaction?: string;

  /**
   * The way the submitted form data is encoded.
   */
  @Prop() formenctype?: string;

  /**
   * The HTTP method used to submit the form.
   */
  @Prop() formmethod?: string;

  /**
   * If `true`, the form will not be validated when submitted.
   */
  @Prop() formnovalidate?: boolean;

  /**
   * The place to display the response from submitting the form. It overrides the target attribute of the radio's form owner.
   */
  @Prop() formtarget?: string;

  /**
   * The group label for the radio option.
   */
  @Prop() groupLabel: string;

  /**
   * The label for the radio option.
   */
  @Prop() label?: string;

  /**
   * The name for the radio option.
   */
  @Prop() name: string;

  /**
   * The value for the radio option.
   */
  @Prop({ mutable: true }) value!: string;

  /**
   * If `true`, the radio option will be displayed in a selected state.
   */
  @Prop({ reflect: true, mutable: true }) selected?: boolean = false;
  @State() initiallySelected = this.selected;

  @Watch("selected")
  watchSelectedHandler(): void {
    this.icSelectedChange.emit();
  }

  /**
   * Emitted when the radio option is selected.
   */
  @Event() icCheck: EventEmitter<IcValueEventDetail>;

  /**
   * @deprecated This event should not be used anymore. Use icCheck instead.
   */
  @Event() radioOptionSelect: EventEmitter<IcValueEventDetail>;

  /**
   * Emitted when the radio option is selected or deselected.
   */
  @Event() icSelectedChange: EventEmitter<void>;

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

  componentWillLoad(): void {
    if (isSlotUsed(this.el, ADDITIONAL_FIELD)) {
      this.hasAdditionalField = true;
      const textField = this.el.querySelector(TEXT_FIELD_SELECTOR);
      if (textField) textField.hiddenInput = false;
    }

    this.defaultRadioValue = this.value;

    addFormResetListener(this.el, this.handleFormReset);

    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.value, propName: "value" }],
      "Radio Option"
    );
  }

  componentWillRender(): void {
    const hasSlot = slotHasContent(this.el, ADDITIONAL_FIELD);
    if (hasSlot && !this.hasAdditionalField) {
      this.hasAdditionalField = true;
      const textField = this.el.querySelector(TEXT_FIELD_SELECTOR);
      if (textField) textField.hiddenInput = false;
    } else if (!hasSlot && this.hasAdditionalField) {
      this.hasAdditionalField = false;
    }
  }

  componentDidRender(): void {
    if (this.additionalFieldDisplay === "static") {
      const textfield = this.el.querySelector(TEXT_FIELD_SELECTOR);
      if (!this.selected || this.disabled) {
        textfield?.setAttribute("disabled", "");
      } else {
        textfield?.removeAttribute("disabled");
      }
    }
  }

  @Listen("icChange")
  textfieldValueHandler(event: CustomEvent<{ value: string }>): void {
    if (this.selected) {
      this.value = event.detail.value || this.defaultRadioValue;
      this.icCheck.emit({
        value: this.value,
      });
      this.radioOptionSelect.emit({
        value: this.value,
      });
    }

    event.stopImmediatePropagation();
  }

  /**
   * Sets focus on the radio option.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.radioElement?.focus();
  }

  /**
   * @internal Sets the tabIndex of the radio option.
   */
  @Method()
  async setTabIndex(value: number): Promise<void> {
    this.radioElement.tabIndex = value;
  }

  private handleClick = () => {
    if (!this.disabled) {
      if (this.skipFocus === false) {
        this.radioElement.focus();
      }
      this.skipFocus = false;

      if (this.hasAdditionalField) {
        this.value =
          this.el.querySelector(TEXT_FIELD_SELECTOR).value ||
          this.defaultRadioValue;
      }

      this.icCheck.emit({
        value: this.value,
      });

      this.radioOptionSelect.emit({
        value: this.value,
      });
    }
  };

  private swallowClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  private handleFormReset = (): void => {
    this.skipFocus = true;
    this.selected = this.initiallySelected;
  };

  render() {
    const {
      additionalFieldDisplay,
      disabled,
      dynamicText,
      form,
      formaction,
      formenctype,
      formmethod,
      formnovalidate,
      formtarget,
      groupLabel,
      handleClick,
      hasAdditionalField,
      label,
      name,
      selected,
      swallowClick,
      value,
    } = this;

    const id = `ic-radio-option-${isPropDefined(label) || value}-${groupLabel}`;

    return (
      <Host onClick={handleClick} class={{ disabled }}>
        <div class={{ container: true, disabled }}>
          <div>
            <input
              tabindex={selected ? "0" : "-1"}
              type="radio"
              name={name}
              id={id}
              value={value}
              disabled={disabled ? true : null}
              checked={selected}
              ref={(el) => (this.radioElement = el)}
              form={form}
              formaction={formaction}
              formenctype={formenctype}
              formmethod={formmethod}
              formnovalidate={formnovalidate}
              formtarget={formtarget}
            ></input>
            <span class="checkmark"></span>
          </div>
          <ic-typography class="radio-label" variant="body">
            <label htmlFor={id}>{label}</label>
          </ic-typography>
        </div>

        {hasAdditionalField && (
          <div
            onClick={swallowClick}
            class={{
              "dynamic-container": true,
              hidden: additionalFieldDisplay === "dynamic" && !selected,
            }}
          >
            {additionalFieldDisplay === "dynamic" && (
              <div class="branch-corner"></div>
            )}
            <div>
              {additionalFieldDisplay === "dynamic" && (
                <ic-typography variant="caption">
                  <p class="dynamic-text">{dynamicText}</p>
                </ic-typography>
              )}
              <div
                class={{
                  "additional-field-wrapper":
                    additionalFieldDisplay === "static",
                }}
              >
                <slot name={ADDITIONAL_FIELD}></slot>
              </div>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
