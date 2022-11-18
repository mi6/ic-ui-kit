import {
  Component,
  Host,
  h,
  Prop,
  State,
  Element,
  Event,
  EventEmitter,
} from "@stencil/core";
import {
  getInputDescribedByText,
  onComponentRequiredPropUndefined,
  renderHiddenInput,
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
   * Applies an aria-label to the component, for when no visual 'name' is provided.
   */
  @Prop() label!: string;

  /**
   * Hides the label and applies the required label value as an aria-label.
   */
  @Prop() hideLabel?: boolean = false;
  /**
   * Provide helper text to display additional field guidance.
   */
  @Prop() helperText?: string = "";
  /**
   * If true, the component is checked, if null the components state will be uncontrolled.
   */
  @Prop() checked?: boolean | null = null;
  /**
   * If true, the component reduces in size to the small state.
   */
  @Prop() small?: boolean = false;
  /**
   * If true, the component is not interactive.
   */
  @Prop() disabled?: boolean = false;
  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name?: string = this.inputId;
  /**
   * If true, the component will render the On/Off state text.
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

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Switch"
    );
  }

  render() {
    const {
      label,
      checked,
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

    const internalChecked = checked == null ? checkedState : checked;

    renderHiddenInput(
      true,
      this.el,
      name,
      internalChecked ? value : "",
      disabled
    );

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
            checked={internalChecked}
            disabled={disabled}
            aria-label={label}
            aria-checked={internalChecked ? "true" : "false"}
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
              {internalChecked ? "On" : "Off"}
            </ic-typography>
          )}
        </label>
      </Host>
    );
  }
}
