import { Component, Element, h, Host, Prop, State, Watch } from "@stencil/core";
import { IcPosition, IcSizes, IcThemeMode } from "../../utils/types";
import { TableOfContentsItem } from "../ic-table-of-contents-item/ic-table-of-contents-item";
import { DEVICE_SIZES } from "../../utils/helpers";

@Component({
  tag: "ic-table-of-contents",
  styleUrl: "ic-table-of-contents.css",
  shadow: true,
})
export class TableOfContents {
  @Element() el: HTMLIcTableOfContentsElement;

  // theme and monochrome props
  @Prop() monochrome?: boolean = false;
  @Prop() theme?: IcThemeMode = "inherit";

  // position props
  @Prop() truncate: boolean = true;
  @Prop() size: IcSizes = "medium";
  @Prop() position: IcPosition = "right";

  // heading text prop
  @Prop() heading: string = "Table of Contents";

  // scroll and click heights determine how far down the page an item is to be focused
  @Prop() setScrollHeight: number = 50;
  @Prop() setClickHeight: number = 75;
  // maximum heading level to be included in the list
  @Prop() maximumHeadingLevel: number = 3;

  @State() focusedElement: number = 0;
  // heading items
  private referenceElements: HTMLElement[] = [];
  // generated list items
  private listContent: HTMLElement[] = [];
  // heights of heading items
  private currentTargetHeights: number[] = [];

  private resizeObserver: ResizeObserver;
  // header height if present
  private headerHeight: number = 0;
  // holds initial position to allow for responsive changes
  private initialPosition: IcPosition = this.position;

  // supress scroll listener to allow for click selection without scroll listener firing
  @State() supressListener: boolean = false;

  @Watch("supressListener")
  supressListenerHandler() {
    window.scrollTo(0, window.scrollY - this.headerHeight - 50);
  }

  // create a list item from a valid child element
  private createListItem = (
    validChild: Element,
    children: HTMLElement[],
    index: number
  ): HTMLElement[] => {
    if (!validChild.id) {
      const id = validChild.innerHTML.replace(/\s+/g, "-").toLowerCase();
      validChild.setAttribute("id", id);
    }

    const item = (
      <TableOfContentsItem
        variant={validChild.tagName.toLowerCase()}
        label={validChild.innerHTML}
        target={validChild.id}
        truncate={this.truncate}
        selected={this.focusedElement}
        updateSelected={this.updateOnSelection}
        position={index}
        size={this.size}
        monochrome={this.monochrome}
      />
    );

    this.listContent.push(item as HTMLElement);
    children.push(item);
    return children;
  };

  // generate list items from the headings in the page
  private generateListItems(): HTMLElement[] {
    let listItems: HTMLElement[] = [];
    const headingDepth =
      this.maximumHeadingLevel < 5
        ? ["h2", "h3", "h4", "h5"]
            .slice(0, this.maximumHeadingLevel - 1)
            .join(",")
        : "h2, h3, h4, h5";
    this.el.querySelectorAll(headingDepth).forEach((child, index) => {
      listItems = this.createListItem(child, listItems, index);
      this.referenceElements.push(child as HTMLElement);
    });
    return listItems;
  }

  //container orientation logic
  private contianerPosition(): void {
    if (this.position) {
      const container = this.el.shadowRoot?.querySelector(
        "#section-container"
      ) as HTMLIcSectionContainerElement;
      switch (this.position) {
        case "right":
          container.style.flexDirection = "row";
          break;
        case "top":
          container.style.flexDirection = "column-reverse";
          break;
      }
    }
  }

  //sidebar movement logic
  private sidebarTranslation(newPosition: number): void {
    const sidebar = this.el.shadowRoot?.querySelector(
      ".table-of-contents-sidebar"
    ) as HTMLIcSectionContainerElement;

    const change = newPosition * (this.size === "large" ? 2 : 1.75);
    sidebar.style.transform = `translateY(${change}rem)`;
  }

  // list item clicked logic
  private updateOnSelection = (position: number) => {
    this.supressListener = true;
    this.focusedElement = position;
    this.sidebarTranslation(this.focusedElement);
  };

  // find element heights to be used to determine foused item from scroll position
  private findElementsHeights() {
    const contentBounds: number[] = [];
    this.referenceElements.forEach((element) => {
      contentBounds.push(element.getBoundingClientRect().top);
    });
    this.currentTargetHeights = contentBounds;
  }

  //resize window logic
  private handleResizeBounds() {
    if (window.innerWidth < DEVICE_SIZES.XL && this.position !== "top") {
      this.position = "top";
      this.contianerPosition();
    } else if (
      window.innerWidth > DEVICE_SIZES.XL &&
      this.position === "top" &&
      this.initialPosition === "right"
    ) {
      this.position = "right";
      this.contianerPosition();
    }
    this.findElementsHeights();
  }

  // scroll logic
  private updateSelectedItemFromScroll() {
    const targetHeight =
      window.scrollY + window.innerHeight * (this.setScrollHeight / 100);
    if (window.scrollY === 0) {
      this.focusedElement = 0;
      this.sidebarTranslation(this.focusedElement);
    } else if (targetHeight < this.currentTargetHeights[this.focusedElement]) {
      const previousItems = this.currentTargetHeights.slice(
        0,
        this.focusedElement
      );
      const closestItem = previousItems.reduce((newValue, curr, index) => {
        if (
          Math.abs(curr - targetHeight) <
          Math.abs(previousItems[newValue] - targetHeight)
        )
          return index;
        return newValue;
      }, 0);
      this.focusedElement = closestItem;
      this.sidebarTranslation(this.focusedElement);
    } else if (
      targetHeight > this.currentTargetHeights[this.focusedElement] &&
      this.focusedElement !== this.currentTargetHeights.length
    ) {
      const relevantItems = this.currentTargetHeights.slice(
        this.focusedElement
      );

      const closestItem = relevantItems.reduce((newValue, curr, index) => {
        if (
          Math.abs(curr - targetHeight) <
            Math.abs(relevantItems[newValue] - targetHeight) &&
          curr < targetHeight
        )
          return index;
        return newValue;
      }, 0);
      if (closestItem + this.focusedElement !== this.focusedElement) {
        this.focusedElement += closestItem;
        this.sidebarTranslation(this.focusedElement);
      }
    }
  }

  // find header element height
  private findHeaderElement(): number {
    const element = document.querySelector("ic-page-header");
    if (element) {
      return element.clientHeight;
    }
    const header = document.querySelector("header");
    if (header) {
      return header.clientHeight;
    }
    return 0;
  }

  // add margin to the list based off the header element height
  private addListMargin(): void {
    const content = this.el.shadowRoot?.querySelector(
      ".table-of-contents-content"
    ) as HTMLDivElement;
    content?.style.setProperty("top", `${this.headerHeight}px`);
  }

  // add tooltip to the item if it is too wide
  private addTooltip(item: Element, itemWidth: number, parentWidth: number) {
    if (parentWidth <= itemWidth) {
      const newLabel = document.createElement("ic-tooltip");
      newLabel.setAttribute("target", item.id);
      newLabel.setAttribute(
        "style",
        "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
      );
      newLabel.setAttribute("label", item.innerHTML);
      newLabel.setAttribute(
        "placement",
        this.position === "right" ? "left" : "right"
      );
      item.parentNode?.appendChild(newLabel);
      newLabel.appendChild(item);
    }
  }

  // truncate text if it goes out of bounds of the container
  private truncateText = () => {
    const element = this.el.shadowRoot?.querySelectorAll(
      `#table-of-contents-item-label`
    );
    const contentList = this.el.shadowRoot?.querySelector("#toc-content");
    if (contentList)
      element?.forEach((item) => {
        this.addTooltip(
          item,
          item.clientWidth,
          this.position === "top" ? this.el.clientWidth : 320
        );
      });
  };

  // initialise resize observer
  componentWillLoad() {
    this.resizeObserver = new ResizeObserver(() => this.handleResizeBounds());
    this.resizeObserver.observe(this.el);
  }

  // initialise scroll listener
  componentDidRender() {
    document.addEventListener("scroll", () => {
      if (!this.supressListener) this.updateSelectedItemFromScroll();
      else this.supressListener = false;
    });
  }

  // after component has loaded modify the list based of position, size and surrounding elements
  async componentDidLoad() {
    this.contianerPosition();
    this.focusedElement = 0;
    this.headerHeight = this.findHeaderElement();
    this.addListMargin();
    this.truncateText();
    this.findElementsHeights();
  }

  // Component is a wrapper for page contents, and will build list from heading items
  render() {
    return (
      <Host>
        <ic-section-container
          id={"section-container"}
          alligned={"full-width"}
          style={{ display: "flex" }}
        >
          <slot></slot>
          <div
            class={`table-of-contents-content ${
              this.position === "top" && "table-of-contents-position-top"
            }
            ${this.position === "right" && "table-of-contents-position-side"}`}
          >
            <ic-typography variant="subtitle-large">
              {this.heading}
            </ic-typography>
            <div class={"table-of-contents-list"}>
              <div
                class={`table-of-contents-sidebar ${
                  this.monochrome && `table-of-contents-sidebar-monochrome`
                }`}
                style={{ height: this.size === "large" ? "2rem" : "1.75rem" }}
              />
              <div id={"toc-content"} class={"table-of-contents-list-items"}>
                {this.generateListItems()}
              </div>
            </div>
          </div>
        </ic-section-container>
      </Host>
    );
  }
}
