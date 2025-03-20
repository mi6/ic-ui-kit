import { Component, Element, h, Host, Prop } from "@stencil/core";
import { IcPosition, IcSizes, IcThemeMode } from "../../utils/types";

//TOC is a wrapper now
//Instead of slots for each option the slots are now the content of the page
//look for H tags and create a list of them based on level of heading
//the layout is of section containers where the position is set up left or right
//additionally is there is not an id for the heading it will be created based on the text of the heading

@Component({
  tag: "ic-table-of-contents",
  styleUrl: "ic-table-of-contents.css",
  shadow: true,
})
export class TableOfContents {
  @Element() el: HTMLIcTableOfContentsElement;
  @Prop() heading?: string = "Table of Contents";
  @Prop() size?: IcSizes = "medium";
  @Prop() theme?: IcThemeMode = "inherit";
  @Prop() position?: IcPosition = "right";

  private listContent: Element[];

  private listItemFactory(
    level: number,
    child: Element,
    children: Element[]
  ): Element[] {
    if (child.tagName === "H2") {
      // console.log("Creating list item for level: ", level);
      const listItem = document.createElement("ic-table-of-contents-item");
      listItem.setAttribute("variant", `${child.tagName.toLowerCase()}`);
      listItem.setAttribute("label", child.innerHTML);

      if (!child.id) {
        const id = child.innerHTML.replace(/\s+/g, "-").toLowerCase();
        child.setAttribute("id", id);
      }
      listItem.setAttribute("target", child.id);
      children.push(listItem);
    }
    if (child.children.length > 0) {
      console.log("Child has children: ", child.children);
      for (let i = 0; i < child.children.length; i++) {
        children = [
          ...children,
          ...this.listItemFactory(
            level > 5 ? 5 : level + 1,
            child.children[i],
            children
          ),
        ];
      }
    }

    return children;
  }

  private generateListItems(): Element[] {
    let listItems: Element[] = [];
    console.log("length", this.el.children);
    for (let i = 0; i < this.el.children.length; i++) {
      console.log(i, this.el.children[i]);
      listItems = [
        ...listItems,
        ...this.listItemFactory(3, this.el.children[i], []),
      ];
    }

    return listItems;
  }

  componentWillLoad() {
    // console.log(this.el);
    // console.log(this.el.children);
    this.listContent = this.generateListItems();
  }

  componentDidRender() {
    // console.log(this.el);
    // console.log(this.el.children);
    // this.listContent = this.generateListItems();
    console.log(this.listContent);
    const listContent = this.el.shadowRoot.querySelector("#toc-content");
    console.log(listContent);
    this.listContent.forEach((item) => {
      listContent.appendChild(item);
    });
  }
  render() {
    const {} = this;

    return (
      <Host>
        <div>
          <div class={"table-of-contents-content"}>
            <ic-typography variant="h2">Table of Contents</ic-typography>
            <div id={"toc-content"}></div>
          </div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
