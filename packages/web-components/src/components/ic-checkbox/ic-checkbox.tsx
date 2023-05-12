import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  State,
  Method,
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
  shadow: {
    delegatesFocus: true,
  },
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Checkbox {
  /**
   * If `true`, the checkbox will be set to the checked state.
   */
  @Prop({ reflect: true, mutable: true }) checked?: boolean = false;
  /**
   * If `true`, the checkbox will be set to the disabled state.
   */
  @Prop() disabled?: boolean = false;
  /**
   * The label for the checkbox.
   */
  @Prop() label!: string;
  /**
   * The value for the checkbox.
   */
  @Prop() value!: string;
  /**
   * The name for the checkbox. If not set when used in a checkbox group, the name will be based on the group name.
   */
  @Prop() name: string;
  /**
   * The group label for the checkbox.
   */
  @Prop() groupLabel: string;
  /**
   * The text to be displayed when dynamic.
   */
  @Prop() dynamicText: string = "This selection requires additional answers";
  /**
   * The style of additionalField that will be displayed if used.
   */
  @Prop({ reflect: true }) additionalFieldDisplay: IcAdditionalFieldTypes =
    "static";
  /**
   * If `true`, the indeterminate state will be displayed when checked.
   */
  @Prop() indeterminate: boolean = false;

  /**
   * If true, the small styling will be applied to the checkbox.
   */
  @Prop() small?: boolean = false;

  @State() initiallyChecked = this.checked;

  @Element() host: HTMLIcCheckboxElement;

  /**
   * @deprecated This event should not be used anymore. Use icCheck instead.
   */
  @Event() checkboxChecked: EventEmitter<void>;

  /**
   * Emitted when a checkbox has been checked.
   */
  @Event() icCheck: EventEmitter<void>;

  private additionalFieldContainer: HTMLDivElement;

  private handleClick = () => {
    this.checked = !this.checked;
    this.icCheck.emit();
    this.checkboxChecked.emit();
  };

  private handleFormReset = (): void => {
    this.checked = this.initiallyChecked;
  };

  /**
   * Sets focus on the checkbox.
   */
  @Method()
  async setFocus(): Promise<void> {
    const checkboxEl: HTMLElement =
      this.host.shadowRoot.querySelector(".checkbox");
    if (checkboxEl) {
      checkboxEl.focus();
    }
  }

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
    this.host
      .querySelector("ic-text-field")
      ?.addEventListener("icChange", (e) => e.stopImmediatePropagation());
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
    this.host
      .querySelector("ic-text-field")
      ?.removeEventListener("icChange", (e) => e.stopImmediatePropagation());
  }

  render() {
    let id = `ic-checkbox-${
      this.label !== undefined ? this.label : this.value
    }-${this.groupLabel}`;

    id = id.replace(/ /g, "-");

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
      <Host class={{ ["disabled"]: this.disabled, ["small"]: this.small }}>
        <div class="container">
          {this.checked && !this.indeterminate && (
            <svg
              class="checkmark"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
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
          <ic-typography class="checkbox-label" variant="body">
            <label htmlFor={id}>{this.label}</label>
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
