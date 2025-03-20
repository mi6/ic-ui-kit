import { Component, Element, h, Host, Listen, Prop } from "@stencil/core";
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

  // private sidebarActivePosition: number = 0;
  private listContent: Element[];

  @Listen("contentsScroll", { capture: true })
  handleSidebarScroll(ev: CustomEvent) {
    this.sidebarTranslation(ev.detail);
    // this.sidebarActivePosition = ev.detail;
  }

  private createListItem(validChild: Element, children: Element[]): Element[] {
    const listItem = document.createElement("ic-table-of-contents-item");
    listItem.setAttribute("variant", `${validChild.tagName.toLowerCase()}`);
    listItem.setAttribute("label", validChild.innerHTML);
    listItem.setAttribute("position", `${children.length}`);

    if (!validChild.id) {
      const id = validChild.innerHTML.replace(/\s+/g, "-").toLowerCase();
      validChild.setAttribute("id", id);
    }
    listItem.setAttribute("target", validChild.id);
    children.push(listItem);
    return children;
  }

  private generateListItems(): Element[] {
    let listItems: Element[] = [];
    this.el.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((child) => {
      console.log("Child: ", child);
      listItems = this.createListItem(child, listItems);
    });
    return listItems;
  }
  private contianerOrientation(): void {
    if (this.position) {
      const container = this.el.shadowRoot.querySelector(
        "#section-container"
      ) as HTMLIcSectionContainerElement;
      switch (this.position) {
        case "left":
          container.style.flexDirection = "row-reverse";
        case "top":
          container.style.flexDirection = "column-reverse";
      }
    }
  }

  private attachListElements(): void {
    const listContent = this.el.shadowRoot.querySelector("#toc-content");
    this.listContent.forEach((item) => {
      listContent.appendChild(item);
    });
  }

  private sidebarTranslation(newPosition: number): void {
    const sidebar = this.el.shadowRoot.querySelector(
      ".table-of-contents-sidebar"
    ) as HTMLIcSectionContainerElement;
    const change = newPosition * 2;
    sidebar.style.transform = `translateY(${change}rem)`;
  }

  componentWillLoad() {
    this.listContent = this.generateListItems();
  }

  componentDidLoad() {
    this.contianerOrientation();
    this.attachListElements();
  }

  render() {
    const {} = this;

    return (
      <Host>
        <ic-section-container
          id={"section-container"}
          alligned={"full-width"}
          style={{ display: "flex" }}
        >
          <slot></slot>
          <div class={"table-of-contents-content"}>
            <ic-typography variant="h3" bold>
              Table of Contents
            </ic-typography>
            <div class={"table-of-contents-list"}>
              <div class={"table-of-contents-sidebar"}></div>
              <div
                id={"toc-content"}
                class={"table-of-contents-list-items"}
              ></div>
            </div>
          </div>
        </ic-section-container>
      </Host>
    );
  }
}
