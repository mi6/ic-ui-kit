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
} from "@stencil/core";
import {
  getInputDescribedByText,
  onComponentRequiredPropUndefined,
  renderHiddenInput,
  addFormResetListener,
  removeFormResetListener,
} from "../../utils/helpers";
import { IcSwitchChangeEventDetail } from "./ic-switch.types";

let inputIds = 0;

/**
 * @slot right-adornment - Content is placed to the right of switch before state label.
 */
@Component({
  tag: "ic-switch",
  styleUrl: "ic-switch.css",
  shadow: true,
})
export class Switch {
  private inputId = `ic-switch-input-${inputIds++}`;

  @Element() el: HTMLIcSwitchElement;

  /**
   * The aria-label applied to the switch when no visual 'name' is provided.
   */
  @Prop() label!: string;

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel?: boolean = false;
  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText?: string = "";
  /**
   * If `true`, the switch will display as checked.
   */
  @Prop() checked?: boolean = false;
  /**
   * If `true`, the small styling will be applied to the switch.
   */
  @Prop() small?: boolean = false;
  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;
  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name?: string = this.inputId;
  /**
   * If `true`, the switch will render the On/Off state text.
   */
  @Prop() showState?: boolean = false;

  /**
   * The value of the toggle does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
   * it's only used when the toggle participates in a native `<form>`.
   */
  @Prop() value?: string | null = "on";

  /**
   * Emitted when the value property has changed.
   */
  @Event() icChange!: EventEmitter<IcSwitchChangeEventDetail>;

  /**
   * Emitted when the toggle has focus.
   */
  @Event() icFocus!: EventEmitter<void>;

  /**
   * Emitted when the toggle loses focus.
   */
  @Event() icBlur!: EventEmitter<void>;

  @State() checkedState: boolean = false;
  @State() initiallyChecked = this.checked;

  private handleChange = () => {
    this.checkedState = !this.checkedState;
    this.icChange.emit({
      checked: this.checkedState,
      value: this.value,
    });
  };

  private onFocus = () => {
    this.icFocus.emit();
  };

  private onBlur = () => {
    this.icBlur.emit();
  };

  private handleFormReset = (): void => {
    this.checkedState = this.initiallyChecked;
  };

  /**
   * Sets focus on the switch.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.el.shadowRoot.querySelector("input")) {
      this.el.shadowRoot.querySelector("input").focus();
    }
  }

  componentWillLoad(): void {
    this.checkedState = this.checked;
    addFormResetListener(this.el, this.handleFormReset);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Switch"
    );
  }

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

  render() {
    const {
      label,
      checkedState,
      small,
      disabled,
      name,
      showState,
      value,
      hideLabel,
      helperText,
      inputId,
    } = this;

    renderHiddenInput(true, this.el, name, checkedState ? value : "", disabled);

    const describedBy = getInputDescribedByText(
      inputId,
      helperText !== "",
      false
    );

    return (
      <Host>
        <label
          class={{
            ["ic-switch-container"]: true,
            ["ic-switch-disabled"]: disabled,
            ["ic-switch-small"]: small,
          }}
          htmlFor={inputId}
        >
          {!hideLabel && (
            <ic-input-label
              for={inputId}
              label={label}
              helperText={helperText}
              readonly={true}
              disabled={disabled}
              class={{
                ["ic-switch-label"]: true,
                ["ic-switch-label-small"]: small,
              }}
            ></ic-input-label>
          )}
          {!hideLabel && <span class="ic-switch-line-break"></span>}
          <input
            checked={checkedState}
            disabled={disabled}
            aria-label={label}
            aria-checked={checkedState ? "true" : "false"}
            aria-describedby={describedBy}
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
            <svg
              class="ic-switch-icon"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                class="ic-switch-icon-line"
                x1="9"
                y1={small ? "2" : "1"}
                x2="9"
                y2={small ? "8" : "9"}
              />
            </svg>
            <svg
              class="ic-switch-icon"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="ic-switch-icon-circle"
                fill="none"
                cx="5"
                cy="5"
                r={small ? "3.335" : "4.445"}
              />
            </svg>
          </span>
          <slot name="right-adornment"></slot>
          {showState && (
            <ic-typography
              aria-hidden="true"
              variant="label"
              class="ic-switch-checked-status"
            >
              {checkedState ? "On" : "Off"}
            </ic-typography>
          )}
        </label>
      </Host>
    );
  }
}
