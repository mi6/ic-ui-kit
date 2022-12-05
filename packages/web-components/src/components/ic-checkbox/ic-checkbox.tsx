import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  State,
} from "@stencil/core";
import { IcAdditionalFieldTypes } from "../../utils/types";
import {
  isSlotUsed,
  onComponentRequiredPropUndefined,
  renderHiddenInput,
  removeHiddenInput,
  addFormResetListener,
  removeFormResetListener,
} from "../../utils/helpers";

@Component({
  tag: "ic-checkbox",
  styleUrl: "ic-checkbox.css",
  shadow: true,
})
export class Checkbox {
  /**
   * Set the checkbox to the checked state
   */
  @Prop({ reflect: true, mutable: true }) checked?: boolean = false;
  /**
   * Set the checkbox to the disabled state
   */
  @Prop() disabled?: boolean = false;
  /**
   * Provide a label for the input
   */
  @Prop() label!: string;
  /**
   * Provide a value for the input
   */
  @Prop() value!: string;
  /**
   * Provide a name for the input
   */
  @Prop() name: string;
  /**
   * Provide a group label for the input
   */
  @Prop() groupLabel: string;
  /**
   * Provide a text prop for the dynamic text
   */
  @Prop() dynamicText: string = "This selection requires additional answers";
  /**
   * Set which style of additionalField will be displayed if used
   */
  @Prop({ reflect: true }) additionalFieldDisplay: IcAdditionalFieldTypes =
    "static";
  /**
   * Display the indeterminate state when checked
   */
  @Prop() indeterminate: boolean = false;

  @State() initiallyChecked = this.checked;

  @Element() host: HTMLIcCheckboxElement;

  /**
   * Emitted when a checkbox has been checked
   */
  @Event() checkboxChecked: EventEmitter<void>;

  private additionalFieldContainer: HTMLDivElement;

  private handleClick = () => {
    this.checked = !this.checked;
    this.checkboxChecked.emit();
  };

  private handleFormReset = (): void => {
    this.checked = this.initiallyChecked;
  };

  componentDidRender(): void {
    if (this.additionalFieldDisplay === "static") {
      const textfield = this.host.querySelector("ic-text-field");
      if (!this.checked) {
        textfield && textfield.setAttribute("disabled", "");
      } else {
        textfield && textfield.removeAttribute("disabled");
      }
    } else {
      if (!this.checked) {
        this.additionalFieldContainer.style.display = "none";
      } else {
        this.additionalFieldContainer.style.display = "flex";
      }
    }
  }

  componentWillLoad(): void {
    addFormResetListener(this.host, this.handleFormReset);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [
        { prop: this.label, propName: "label" },
        { prop: this.value, propName: "value" },
      ],
      "Checkbox"
    );
  }

  disconnectedCallback(): void {
    removeFormResetListener(this.host, this.handleFormReset);
  }

  render() {
    const id = `ic-checkbox-${
      this.label !== undefined ? this.label : this.value
    }-${this.groupLabel}`;

    this.checked
      ? renderHiddenInput(
          true,
          this.host,
          this.name,
          this.checked && this.value,
          this.disabled
        )
      : removeHiddenInput(this.host);

    return (
      <Host>
        <div class={{ ["container"]: true, ["disabled"]: this.disabled }}>
          {this.checked && !this.indeterminate && (
            <svg
              class="checkmark"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <title>checkmark icon</title>
              <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
            </svg>
          )}
          {this.checked && this.indeterminate && (
            <div class="indeterminate-symbol" />
          )}
          <input
            role="checkbox"
            class={{
              ["checkbox"]: true,
              ["checked"]: this.checked,
              ["indeterminate"]: this.indeterminate,
            }}
            type="checkbox"
            name={this.name}
            id={id}
            value={this.value}
            disabled={this.disabled ? true : null}
            checked={this.checked}
            indeterminate={this.indeterminate}
            onClick={this.handleClick}
          ></input>
          <ic-typography variant="body">
            <label class="checkbox-label" htmlFor={id}>
              {this.label}
            </label>
          </ic-typography>
        </div>
        {isSlotUsed(this.host, "additional-field") && (
          <div
            class="dynamic-container"
            ref={(el) => (this.additionalFieldContainer = el)}
          >
            {this.additionalFieldDisplay === "dynamic" && (
              <div class="branch-corner"></div>
            )}
            <div>
              {this.additionalFieldDisplay === "dynamic" && (
                <ic-typography variant="caption">
                  <p class="dynamic-text" aria-live="polite">
                    {this.dynamicText}
                  </p>
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
