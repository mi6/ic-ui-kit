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
   * Emitted when the radio option is selected or deselected.
   */
  @Event() icSelectedChange: EventEmitter<void>;

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

  componentWillLoad(): void {
    if (isSlotUsed(this.el, ADDITIONAL_FIELD)) {
      this.hasAdditionalField = true;
      this.getAdditionalField();
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
      this.getAdditionalField();
    } else if (!hasSlot && this.hasAdditionalField) {
      this.hasAdditionalField = false;
    }
  }

  componentDidRender(): void {
    if (this.additionalFieldDisplay === "static") {
      const additionalField = this.getAdditionalField();
      if (!this.selected || this.disabled) {
        additionalField?.setAttribute("disabled", "");
      } else {
        additionalField?.removeAttribute("disabled");
      }
    }
  }

  @Listen("icChange")
  additionalFieldValueHandler(event: CustomEvent<{ value: string }>): void {
    if (this.selected) {
      this.value = event.detail.value || this.defaultRadioValue;
      this.icCheck.emit({
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

  private getAdditionalField(): HTMLIcTextFieldElement {
    const additionalField = this.el.querySelector(
      '[slot="additional-field"]'
    ) as HTMLIcTextFieldElement;
    if (additionalField) additionalField.hiddenInput = false;
    return additionalField;
  }

  private handleClick = (event: MouseEvent) => {
    const clickedAdditionalField = (event.target as Element).matches(
      ".dynamic-container, .dynamic-container *"
    );

    if (!this.disabled && !clickedAdditionalField) {
      event.stopPropagation();
      if (this.skipFocus === false) {
        this.radioElement.focus();
      }
      this.skipFocus = false;

      if (this.hasAdditionalField) {
        this.value = this.getAdditionalField().value || this.defaultRadioValue;
      }

      this.icCheck.emit({
        value: this.value,
      });
    }
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    const preventPropagationElements = ["IC-DATE-INPUT", "IC-DATE-PICKER"];

    if (
      this.getAdditionalField() == document.activeElement &&
      preventPropagationElements.includes(this.getAdditionalField().nodeName)
    ) {
      event.stopPropagation();
    }
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
      groupLabel,
      handleClick,
      handleKeyDown,
      hasAdditionalField,
      label,
      name,
      selected,
      value,
    } = this;

    const id = `ic-radio-option-${isPropDefined(label) || value}-${groupLabel}`;

    return (
      <Host
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        class={{ ["ic-radio-option-disabled"]: disabled }}
      >
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
            ></input>
            <span class="checkmark"></span>
          </div>
          <ic-typography class="radio-label" variant="body">
            <label htmlFor={id}>{label}</label>
          </ic-typography>
        </div>

        {hasAdditionalField && (
          <div
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
