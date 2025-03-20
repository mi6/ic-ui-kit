import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "ic-table-of-contents-item",
  styleUrl: "ic-table-of-contents-item.css",
  shadow: true,
})
export class TableOfContentsItem {
  @Prop() label: string;
  @Prop() target: string;

  render() {
    const { label } = this;

    return (
      <Host>
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "2px",
            margin: "2px",
          }}
        >
          <p>{label}</p>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <slot name="sub-item"></slot>
        </div>
      </Host>
    );
  }
}
