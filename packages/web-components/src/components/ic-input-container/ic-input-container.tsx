import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "ic-input-container",
  styleUrl: "ic-input-container.css",
})
export class InputContainer {
  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the readonly state will be set.
   */
  @Prop() readonly?: boolean = false;

  render() {
    return (
      <Host>
        <div
          class={{
            ["component-container"]: true,
            ["disabled"]: this.disabled,
            ["readonly"]: this.readonly,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
