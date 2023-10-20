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
import { IcAdditionalFieldTypes, IcSizes } from "../../utils/types";
import {
  isSlotUsed,
  onComponentRequiredPropUndefined,
  renderHiddenInput,
  removeHiddenInput,
  addFormResetListener,
  removeFormResetListener,
  removeDisabledFalse,
} from "../../utils/helpers";

/**
 * @slot additional-field - Content to be displayed alongside a checkbox.
 */
@Component({
  tag: "ic-checkbox",
  styleUrl: "ic-checkbox.css",
  shadow: {
    delegatesFocus: true,
  },
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Checkbox {
  private additionalFieldContainer: HTMLDivElement;
  private IC_TEXT_FIELD: string = "ic-text-field";

  @Element() el: HTMLIcCheckboxElement;

  /**
   * The style of additionalField that will be displayed if used.
   */
  @Prop({ reflect: true }) additionalFieldDisplay: IcAdditionalFieldTypes =
    "static";

  /**
   * If `true`, the checkbox will be set to the checked state.
   */
  @Prop({ reflect: true, mutable: true }) checked?: boolean = false;
  @State() initiallyChecked = this.checked;

  /**
   * If `true`, the checkbox will be set to the disabled state.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The text to be displayed when dynamic.
   */

  @Prop() dynamicText: string = "This selection requires additional answers";

  /**
   * The <form> element to associate the checkbox with.
   */
  @Prop() form?: string;

  /**
   * The URL that processes the information submitted by the checkbox. It overrides the action attribute of the checkbox's form owner. Does nothing if there is no form owner.
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
   * The place to display the response from submitting the form. It overrides the target attribute of the checkbox's form owner.
   */
  @Prop() formtarget?: string;

  /**
   * The group label for the checkbox.
   */
  @Prop() groupLabel: string;

  /**
   * If `true`, the indeterminate state will be displayed when checked.
   */
  @Prop() indeterminate: boolean = false;

  /**
   * The label for the checkbox.
   */
  @Prop() label!: string;

  /**
   * The name for the checkbox. If not set when used in a checkbox group, the name will be based on the group name.
   */
  @Prop() name: string;

  /**
   * The size of the checkbox to be displayed. This does not affect the font size of the label. If a checkbox is contained in a checkbox group, this will override the size set on checkbox group.
   */
  @Prop() size?: IcSizes;

  /**
   * @deprecated This prop should not be used anymore. Set prop `size` to "small" instead.
   */
  @Prop() small?: boolean = false;

  /**
   * The value for the checkbox.
   */
  @Prop() value!: string;

  /**
   * @deprecated This event should not be used anymore. Use icCheck instead.
   */
  @Event() checkboxChecked: EventEmitter<void>;

  /**
   * Emitted when a checkbox has been checked.
   */
  @Event() icCheck: EventEmitter<void>;

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);

    addFormResetListener(this.el, this.handleFormReset);
    this.el
      .querySelector(this.IC_TEXT_FIELD)
      ?.addEventListener("icChange", this.eventHandler);
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

  componentDidRender(): void {
    if (this.additionalFieldDisplay === "static") {
      const textfield = this.el.querySelector(this.IC_TEXT_FIELD);
      if (!this.checked) {
        textfield && textfield.setAttribute("disabled", "");
      } else {
        textfield && textfield.removeAttribute("disabled");
      }
    } else if (this.additionalFieldContainer) {
      if (!this.checked) {
        this.additionalFieldContainer.style.display = "none";
      } else {
        this.additionalFieldContainer.style.display = "flex";
      }
    }
  }

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
    this.el
      .querySelector(this.IC_TEXT_FIELD)
      ?.removeEventListener("icChange", this.eventHandler);
  }

  /**
   * Sets focus on the checkbox.
   */
  @Method()
  async setFocus(): Promise<void> {
    const checkboxEl: HTMLElement =
      this.el.shadowRoot.querySelector(".checkbox");
    if (checkboxEl) {
      checkboxEl.focus();
    }
  }

  private eventHandler = (event: CustomEvent) => {
    event.stopImmediatePropagation();
  };

  private handleClick = () => {
    this.checked = !this.checked;
    this.icCheck.emit();
    this.checkboxChecked.emit();
  };

  private handleFormReset = (): void => {
    this.checked = this.initiallyChecked;
  };

  render() {
    let id = `ic-checkbox-${
      this.label !== undefined ? this.label : this.value
    }-${this.groupLabel}`;

    id = id.replace(/ /g, "-");

    const parentElementSize = (
      this.el.parentElement as HTMLIcCheckboxGroupElement
    ).size;

    this.checked
      ? renderHiddenInput(
          true,
          this.el,
          this.name,
          this.checked && this.value,
          this.disabled
        )
      : removeHiddenInput(this.el);

    return (
      <Host
        class={{
          ["disabled"]: this.disabled,
          ["small"]: this.small,
          [`${this.size || parentElementSize}`]: true,
        }}
      >
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
            form={this.form}
            formaction={this.formaction}
            formenctype={this.formenctype}
            formmethod={this.formmethod}
            formnovalidate={this.formnovalidate}
            formtarget={this.formtarget}
          ></input>
          <ic-typography class="checkbox-label" variant="body">
            <label htmlFor={id}>{this.label}</label>
          </ic-typography>
        </div>
        {isSlotUsed(this.el, "additional-field") && (
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
