import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "ic-table-of-contents",
  styleUrl: "ic-table-of-contents.css",
  shadow: true,
})
export class TableOfContents {
  render() {
    const {} = this;

    return (
      <Host>
        <div>
          <h2>Table of Contents</h2>
          <slot name="item"></slot>
        </div>
      </Host>
    );
  }
}
