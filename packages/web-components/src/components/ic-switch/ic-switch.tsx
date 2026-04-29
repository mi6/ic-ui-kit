import {
  Component,
  Host,
  h,
  Prop,
  State,
  Element,
  Event,
  EventEmitter,
  Method,
  Watch,
} from "@stencil/core";
import {
  getInputDescribedByText,
  onComponentRequiredPropUndefined,
  renderHiddenInput,
  addFormResetListener,
  removeFormResetListener,
  removeDisabledFalse,
} from "../../utils/helpers";
import { IcSwitchChangeEventDetail } from "./ic-switch.types";
import { IcSizes, IcThemeMode } from "../../utils/types";

let inputIds = 0;

/**
 * @slot helper-text - Content is set as the helper text for the switch.
 * @slot right-adornment - Content is placed to the right of switch.
 */
@Component({
  tag: "ic-switch",
  styleUrl: "ic-switch.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Switch {
  private inputId = `ic-switch-input-${inputIds++}`;

  @Element() el: HTMLIcSwitchElement;

  @State() checkedState: boolean = false;
  @State() initiallyChecked = this.checked;

  /**
   * If `true`, the switch will display as checked.
   */
  @Prop() checked?: boolean = false;

  @Watch("checked")
  checkedChangeHandler(): void {
    this.checkedState = !!this.checked;
  }

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText?: string = "";

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel?: boolean = false;

  /**
   * The aria-label applied to the switch when no visual 'name' is provided.
   */
  @Prop() label!: string;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name?: string = this.inputId;

  /**
   * The size of the switch component.
   */
  @Prop() size?: IcSizes = "medium";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The value of the toggle does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
   * it's only used when the toggle participates in a native `<form>`.
   */
  @Prop() value?: string | null = "on";

  /**
   * Emitted when the toggle loses focus.
   */
  @Event() icBlur!: EventEmitter<void>;

  /**
   * Emitted when the value property has changed.
   */
  @Event() icChange!: EventEmitter<IcSwitchChangeEventDetail>;

  /**
   * Emitted when the toggle has focus.
   */
  @Event() icFocus!: EventEmitter<void>;

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

  componentWillLoad(): void {
    this.checkedState = this.checked!;
    addFormResetListener(this.el, this.handleFormReset);
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Switch"
    );
  }

  /**
   * Sets focus on the switch.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.el.shadowRoot?.querySelector("input")?.focus();
  }

  private handleChange = () => {
    this.checkedState = !this.checkedState;
    this.icChange.emit({
      checked: this.checkedState,
      value: this.value!,
    });
  };

  private onFocus = () => {
    this.icFocus.emit();
  };

  private onBlur = () => {
    this.icBlur.emit();
  };

  private handleFormReset = (): void => {
    this.checkedState = this.initiallyChecked!;
  };

  render() {
    const {
      label,
      checkedState,
      size,
      disabled,
      name,
      value,
      hideLabel,
      helperText,
      inputId,
      theme,
    } = this;

    renderHiddenInput(this.el, checkedState ? value : "", name, disabled);

    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <label
          class={{
            "ic-switch-container": true,
            "ic-switch-disabled": !!disabled,
            [`ic-switch-${size}`]: true,
          }}
          htmlFor={inputId}
        >
          {!hideLabel && (
            <ic-input-label
              for={inputId}
              label={label}
              helperText={helperText}
              readonly={false}
              disabled={disabled}
              class={{
                "ic-switch-label": true,
              }}
            >
              <slot name="helper-text" slot="helper-text"></slot>
            </ic-input-label>
          )}
          {!hideLabel && <span class="ic-switch-line-break"></span>}
          <input
            checked={checkedState}
            disabled={disabled}
            aria-label={label}
            aria-checked={checkedState ? "true" : "false"}
            aria-describedby={getInputDescribedByText(
              this.el,
              inputId,
              helperText !== "",
              false
            )}
            role="switch"
            class="ic-switch-input"
            type="checkbox"
            name="toggle"
            id={inputId}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.handleChange}
          />
          <span class="ic-switch-toggle">
            <span class="ic-switch-icon-line" aria-hidden="true"></span>
            <svg
              class="ic-switch-icon"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 8 8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                class="ic-switch-icon-circle"
                fill="none"
                cx="4"
                cy="4"
                r="3.5"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </span>
          <slot name="right-adornment"></slot>
        </label>
      </Host>
    );
  }
}
