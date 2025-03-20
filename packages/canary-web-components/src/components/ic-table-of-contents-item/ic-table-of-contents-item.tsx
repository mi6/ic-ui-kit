import { Component, Element, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "ic-table-of-contents-item",
  styleUrl: "ic-table-of-contents-item.css",
  shadow: true,
})
export class TableOfContentsItem {
  @Element() el: HTMLIcTableOfContentsItemElement;

  // Prop to set the label of the item
  @Prop() label: string;
  // Prop to target element ID to skip to
  @Prop() target: string;

  @Prop() variant: string = "h3";
  @Prop() truncate: boolean = false;
  // private findTargetElement(target: string): Element {
  //   const targetElement = document.getElementById(target);
  //   return targetElement;
  // }

  // private createTargetObserver(target: string): void {
  //   console.log("Creating Target Observer for: ", target);
  //   const targetElement = this.findTargetElement(target);
  //   console.log("Target Element: ", targetElement);
  //   if (targetElement) {
  //     const observerElement = document.createElement("div");
  //     targetElement.parentNode.insertBefore(observerElement, targetElement);
  //   }
  // }

  // private onClick(): void {
  //   const targetElement = this.findTargetElement(this.target);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  // private createElementContent(): void {}

  // private getElementHeadingLevel(): void {
  //   let i = 0;
  //   let currentElement: HTMLElement = this.el;
  //   while (currentElement.parentElement.tagName !== "UL") {
  //     console.log(currentElement.tagName);
  //     currentElement = currentElement.parentElement;
  //     i++;
  //   }
  //   this.itemLevel = i > 5 ? `h5` : `h${i}`;
  // }

  private shouldTruncate(): boolean {
    // const listItem = document.createElement("li");
    // const heading = document.createElement(
    //   "ic-typography"
    // ) as HTMLUnknownElement;
    // const link = document.createElement("a");

    // heading.appendChild(link);
    // listItem.appendChild(heading);
    // listItem.style.position = "relative";
    // listItem.style.display = "flex";
    // listItem.style.padding = " 0 0.5rem ";
    // listItem.style.textDecoration = "none";
    // heading.setAttribute("variant", "h3");
    // heading.setAttribute("bold", "true");
    // heading.setAttribute(
    //   "style",
    //   "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
    // );
    // link.textContent = this.label;
    // link.href = `#${this.target}`;

    // this.el.parentElement.appendChild(listItem);
    // console.log("List Item: ", listItem.clientWidth);
    // console.log("Parent Element: ", this.el.parentElement.offsetWidth);
    // heading.removeChild(link);
    // listItem.removeChild(heading);
    // this.el.parentElement.removeChild(listItem);
    return false;
  }

  private constructHeadingText(): Element {
    const heading = document.createElement(this.variant);
    const typography = this.el.shadowRoot.querySelector("ic-typography");
    console.log("Typography: ", typography);
    heading.textContent = this.label;
    console.log("Heading: ", heading);
    typography.appendChild(heading);
    return heading;
  }

  componentWillLoad() {
    // this.getElementHeadingLevel();
    this.shouldTruncate();
  }

  componentDidLoad() {
    this.constructHeadingText();
    // this.createElementContent();
    // this.shouldTruncate();
  }

  render() {
    const { target } = this;

    return (
      <Host class={"table-of-contents-item-content"}>
        <a href={`#${target}`}>
          <ic-typography bold variant={"h5"}></ic-typography>
        </a>

        <slot></slot>
      </Host>
    );
  }
}
