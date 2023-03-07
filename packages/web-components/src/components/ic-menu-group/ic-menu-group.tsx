import { Component, Element, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "ic-menu-group",
  styleUrl: "ic-menu-group.css",
  shadow: true,
})
export class MenuGroup {
  @Element() el: HTMLIcMenuGroupElement;

  @Prop() label?: string;

  render() {
    let ariaLabel: string = this.el.ariaLabel ? ` ${this.el.ariaLabel}` : "";
    this.el.ariaLabel = `${this.label}.${ariaLabel}`;

    const parentMenu = this.el.closest("ic-popover-menu");

    return (
      <Host>
        {this.label !== undefined && (
          <ic-typography variant="subtitle-small">{this.label}</ic-typography>
        )}
        <ul role="group">
          <slot></slot>
        </ul>
        {/* The line under the menu group is added on all menu groups except in the case that the menu group is the last item in the popover menu */}
        {this.el !== parentMenu?.querySelector("ic-menu-group:last-child") && (
          <hr />
        )}
      </Host>
    );
  }
}
