import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "ic-input-container",
  styleUrl: "ic-input-container.css",
})
export class InputContainer {
  /**
   * disabled
   */
  @Prop() disabled?: boolean = false;

  /**
   * readonly
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
