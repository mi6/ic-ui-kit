import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Listen,
  Watch,
  State,
} from "@stencil/core";
import { IcAdditionalFieldTypes } from "../../utils/types";
import {
  getSlotContent,
  onComponentRequiredPropUndefined,
  addFormResetListener,
  removeFormResetListener,
} from "../../utils/helpers";
import { IcValueEventDetail } from "../../interface";
@Component({
  tag: "ic-radio-option",
  styleUrl: "ic-radio-option.css",
  shadow: true,
})
export class RadioOption {
  private radioElement: HTMLInputElement;
  /**
   * Determines whether the radio should be in selected state.
   */
  @Prop({ reflect: true, mutable: true }) selected?: boolean = false;
  /**
   * Determines whether the radio should be in disabled state.
   */
  @Prop() disabled?: boolean = false;
  /**
   * Provide a label for the input.
   */
  @Prop() label?: string;
  /**
   * Provide a value for the input.
   */
  @Prop({ mutable: true }) value!: string;
  /**
   * Provide a name for the input.
   */
  @Prop() name: string;
  /**
   * Provide a group label for the input.
   */
  @Prop() groupLabel: string;
  /**
   * Provide a text prop for the dynamic text.
   */
  @Prop() dynamicText: string = "This selection requires additional answers";

  /** Determines type of additional text field in relation to radio option */

  @Prop({ reflect: true }) additionalFieldDisplay: IcAdditionalFieldTypes =
    "static";

  @State() initiallySelected = this.selected;

  @Element() host: HTMLIcRadioOptionElement;

  /**
   * Emitted when radio is checked
   */
  @Event() icCheck!: EventEmitter<void>;

  /**
   * Emitted when a radio is selected.
   */
  @Event() radioOptionSelect: EventEmitter<IcValueEventDetail>;

  @Watch("selected")
  selectedChangeHandler(selected: boolean): void {
    if (selected) {
      this.handleClick();
    }
  }

  private defaultRadioValue: string = "";
  private skipFocus = false;

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

      this.radioOptionSelect.emit({
        value: this.value,
      });
    }
  };

  private swallowClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  private hasAdditionalField: boolean = false;
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
  }

  private handleFormReset = (): void => {
    this.skipFocus = true;
    this.selected = this.initiallySelected;
  };

  @Listen("icChange")
  textfieldValueHandler(event: CustomEvent<{ value: string }>): void {
    const textFieldValue = event.detail.value;

    if (this.selected) {
      if (textFieldValue !== "") {
        this.value = event.detail.value;
        this.radioOptionSelect.emit({
          value: this.value,
        });
      } else {
        this.value = this.defaultRadioValue;
        this.radioOptionSelect.emit({
          value: this.defaultRadioValue,
        });
      }
    }
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

  disconnectedCallback(): void {
    removeFormResetListener(this.host, this.handleFormReset);
  }

  render() {
    const id = `ic-radio-option-${
      this.label !== undefined ? this.label : this.value
    }-${this.groupLabel}`;

    return (
      <Host onClick={this.handleClick}>
        <div class={{ ["container"]: true, ["disabled"]: this.disabled }}>
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
                  "addition-field-wrapper":
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
