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
  Watch,
} from "@stencil/core";
import {
  IcAdditionalFieldTypes,
  IcSizes,
  IcThemeMode,
} from "../../utils/types";
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
  private additionalFieldContainer?: HTMLDivElement;
  private checkboxEl?: HTMLInputElement;

  @Element() el: HTMLIcCheckboxElement;

  /**
   * The style of additionalField that will be displayed if used.
   */
  @Prop({ reflect: true }) additionalFieldDisplay: IcAdditionalFieldTypes =
    "static";

  /**
   * If `true`, the checkbox will be set to the checked state. This is only the initial state and will be updated to unchecked if the checkbox is clicked.
   */
  @Prop({ reflect: true, mutable: true }) checked = false;
  @State() initiallyChecked = this.checked;

  /**
   * If `true`, the checkbox will be set to the disabled state.
   */
  @Prop() disabled = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * The text to be displayed when dynamic.
   */

  @Prop() dynamicText = "This selection requires additional answers";

  /**
   * The <form> element to associate the checkbox with.
   */
  @Prop() form?: string;

  /**
   * The group label for the checkbox.
   */
  @Prop({ mutable: true }) groupLabel?: string;

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel = false;

  /**
   * If `true`, the indeterminate state will be displayed when checked.
   */
  @Prop() indeterminate = false;
  @State() displayIndeterminate = this.indeterminate;

  @Watch("indeterminate")
  watchIndeterminateHandler(): void {
    this.displayIndeterminate =
      this.indeterminate && (this.nativeIndeterminateBehaviour || this.checked);
  }

  /**
   * The label for the checkbox.
   */
  @Prop() label!: string;

  /**
   * The name for the checkbox. If not set when used in a checkbox group, the name will be based on the group name.
   */
  @Prop({ mutable: true }) name?: string;

  /**
   * If `true`, the checkbox will behave like a native checkbox where the `indeterminate` prop sets the indeterminate visual styling, independent of the `checked` state.
   */
  @Prop() nativeIndeterminateBehaviour = false;

  /**
   * The size of the checkbox to be displayed. This does not affect the font size of the label. If a checkbox is contained in a checkbox group, this will override the size set on checkbox group.
   */
  @Prop({ mutable: true }) size?: IcSizes;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme: IcThemeMode = "inherit";

  /**
   * The value for the checkbox.
   */
  @Prop() value = "";

  /**
   * Emitted when a checkbox has been checked.
   */
  @Event() icCheck: EventEmitter<void>;

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);

    addFormResetListener(this.el, this.handleFormReset);

    const { parentElement } = this.el;
    if (parentElement?.tagName === "IC-CHECKBOX-GROUP") {
      const { name, label, size } = parentElement as HTMLIcCheckboxGroupElement;

      if (!this.name) this.name = name;
      if (!this.size) this.size = size;
      this.groupLabel = label;
    }
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Checkbox"
    );
  }

  componentDidRender(): void {
    if (this.additionalFieldDisplay === "static") {
      const textfield = this.el.querySelector("ic-text-field");
      if (!this.checked) {
        textfield?.setAttribute("disabled", "");
      } else {
        textfield?.removeAttribute("disabled");
      }
    } else if (this.additionalFieldContainer) {
      this.additionalFieldContainer.style.display = !this.checked
        ? "none"
        : "flex";
    }
  }

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

  /**
   * Sets focus on the checkbox.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.checkboxEl?.focus();
  }

  private handleClick = () => {
    this.checked = !this.checked;
    this.displayIndeterminate =
      !this.nativeIndeterminateBehaviour && this.indeterminate && this.checked;
    this.icCheck.emit();
  };

  private handleFormReset = (): void => {
    this.checked = this.initiallyChecked;
  };

  render() {
    const {
      additionalFieldDisplay,
      checked,
      disabled,
      displayIndeterminate,
      dynamicText,
      el,
      form,
      groupLabel,
      handleClick,
      hideLabel,
      label,
      name,
      size,
      theme,
      value,
    } = this;

    const id = `ic-checkbox-${label}-${groupLabel}`.replace(/ /g, "-");

    const isDynamicAdditionalField = additionalFieldDisplay === "dynamic";

    checked
      ? renderHiddenInput(el, value, name, disabled)
      : removeHiddenInput(el);

    return (
      <Host
        class={{
          "ic-checkbox-disabled": disabled,
          [`ic-checkbox-${size}`]: !!size,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <div class="container">
          {displayIndeterminate ? (
            <div class="indeterminate-symbol" />
          ) : (
            checked && (
              <svg
                class="checkmark"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <title>checkmark icon</title>
                <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
              </svg>
            )
          )}
          <input
            role="checkbox"
            class={{
              checkbox: true,
              checked,
              indeterminate: displayIndeterminate,
            }}
            ref={(el) => (this.checkboxEl = el)}
            type="checkbox"
            name={name}
            id={id}
            value={value}
            disabled={disabled}
            checked={checked}
            indeterminate={displayIndeterminate}
            onClick={handleClick}
            form={form}
            aria-label={hideLabel ? label : undefined}
          ></input>
          {!hideLabel && (
            <ic-typography class="checkbox-label" variant="body">
              <label htmlFor={id}>{label}</label>
            </ic-typography>
          )}
        </div>
        {isSlotUsed(el, "additional-field") && (
          <div
            class="dynamic-container"
            ref={(el) => (this.additionalFieldContainer = el)}
          >
            {isDynamicAdditionalField && <div class="branch-corner"></div>}
            <div>
              {isDynamicAdditionalField && (
                <ic-typography variant="caption">
                  <p class="dynamic-text" aria-live="polite">
                    {dynamicText}
                  </p>
                </ic-typography>
              )}
              <div
                class={{
                  "additional-field-wrapper": !isDynamicAdditionalField,
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
