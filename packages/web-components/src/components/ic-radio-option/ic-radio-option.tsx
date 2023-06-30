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
  getSlotContent,
  onComponentRequiredPropUndefined,
  addFormResetListener,
  removeFormResetListener,
  removeDisabledFalse,
} from "../../utils/helpers";
@Component({
  tag: "ic-radio-option",
  styleUrl: "ic-radio-option.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class RadioOption {
  private defaultRadioValue: string = "";
  private hasAdditionalField: boolean = false;
  private radioElement: HTMLInputElement;
  private skipFocus = false;

  @Element() host: HTMLIcRadioOptionElement;

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
    removeFormResetListener(this.host, this.handleFormReset);
  }

  componentWillLoad(): void {
    const additonalFieldContent = getSlotContent(this.host, "additional-field");

    if (additonalFieldContent !== null) {
      this.hasAdditionalField = true;
      const Element = additonalFieldContent[0] as HTMLElement;
      if (Element.tagName === "IC-TEXT-FIELD") {
        const textField = Element as HTMLIcTextFieldElement;
        textField.hiddenInput = false;
      }
    }

    this.defaultRadioValue = this.value;

    addFormResetListener(this.host, this.handleFormReset);

    removeDisabledFalse(this.disabled, this.host);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.value, propName: "value" }],
      "Radio Option"
    );
  }

  componentDidRender(): void {
    if (this.additionalFieldDisplay === "static") {
      const textfield = this.host.querySelector("ic-text-field");
      if (!this.selected) {
        textfield && textfield.setAttribute("disabled", "");
      } else {
        textfield && textfield.removeAttribute("disabled");
      }
    }
  }

  @Listen("icChange")
  textfieldValueHandler(event: CustomEvent<{ value: string }>): void {
    const textFieldValue = event.detail.value;

    if (this.selected) {
      if (textFieldValue !== "") {
        this.value = event.detail.value;
        this.icCheck.emit({
          value: this.value,
        });
        this.radioOptionSelect.emit({
          value: this.value,
        });
      } else {
        this.value = this.defaultRadioValue;
        this.icCheck.emit({
          value: this.defaultRadioValue,
        });
        this.radioOptionSelect.emit({
          value: this.defaultRadioValue,
        });
      }
    }

    event.stopImmediatePropagation();
  }

  /**
   * Sets focus on the radio option.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.host.shadowRoot.querySelector("input")) {
      this.host.shadowRoot.querySelector("input").focus();
    }
  }

  private handleClick = () => {
    if (!this.disabled) {
      if (this.skipFocus === false) {
        this.radioElement.focus();
      }
      this.skipFocus = false;

      if (this.hasAdditionalField) {
        const textfield = this.host.querySelector("ic-text-field");
        this.value =
          textfield.value !== "" ? textfield.value : this.defaultRadioValue;
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
    const id = `ic-radio-option-${
      this.label !== undefined ? this.label : this.value
    }-${this.groupLabel}`;

    return (
      <Host onClick={this.handleClick} class={{ disabled: this.disabled }}>
        <div class={{ ["container"]: true, ["disabled"]: this.disabled }}>
          <div>
            <input
              role="radio"
              tabindex={this.selected ? "0" : "-1"}
              type="radio"
              name={this.name}
              id={id}
              value={this.value}
              disabled={this.disabled ? true : null}
              checked={this.selected}
              ref={(el) => (this.radioElement = el)}
            ></input>
            <span class="checkmark"></span>
          </div>
          <ic-typography class="radio-label" variant="body">
            <label htmlFor={id}>{this.label}</label>
          </ic-typography>
        </div>

        {this.hasAdditionalField && (
          <div
            onClick={this.swallowClick}
            class={{
              "dynamic-container": true,
              hidden:
                this.additionalFieldDisplay === "dynamic" && !this.selected,
            }}
          >
            {this.additionalFieldDisplay === "dynamic" && (
              <div class="branch-corner"></div>
            )}
            <div>
              {this.additionalFieldDisplay === "dynamic" && (
                <ic-typography variant="caption">
                  <p class="dynamic-text">{this.dynamicText}</p>
                </ic-typography>
              )}
              <div
                class={{
                  "additional-field-wrapper":
                    this.additionalFieldDisplay === "static",
                }}
              >
                <slot name="additional-field"></slot>
              </div>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
