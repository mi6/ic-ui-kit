import { Component, Element, h, Host, Prop, State, Watch } from "@stencil/core";
import { IcPosition, IcSizes, IcThemeMode } from "../../utils/types";
import { TableOfContentsItem } from "../ic-table-of-contents-item/ic-table-of-contents-item";
import { DEVICE_SIZES } from "../../utils/helpers";

const TOC_CONTENT_CLASS = "table-of-contents-content";
const TOC_LIST_ITEMS = "table-of-contents-list-items";

@Component({
  tag: "ic-table-of-contents",
  styleUrl: "ic-table-of-contents.css",
  shadow: true,
})
export class TableOfContents {
  @Element() el: HTMLIcTableOfContentsElement;

  /**
   * If `true`, the table of contents will display as black in the light theme, and white in dark theme.
   */
  @Prop() monochrome?: boolean = false;

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * If `true`, the table of contents item label will be truncated.
   */
  @Prop() truncate: boolean = true;

  /**
   * The size of the table of contents items.
   */
  @Prop() size: IcSizes = "medium";

  /**
   * Whether the table of contents will appear on the right of or above child content on large viewport widths.
   */
  @Prop() position: IcPosition = "right";

  /**
   * Heading text of the table of contents.
   */
  @Prop() heading: string = "Table of Contents";

  /**
   * Vertical offset to page scroll (in percent) when table of contents item is selected, to account for other page components like headers.
   */
  @Prop() setScrollHeight: number = 50;

  /**
   * Maximum heading level of child content that will generate an item in the table of contents. E.g. when set to '3', headings of <h4> and <h5> will not appear.
   */
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

  // suppress scroll listener to allow for click selection without scroll listener firing
  @State() suppressListener: boolean = false;

  @Watch("suppressListener")
  suppressListenerHandler() {
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
            .slice(
              0,
              (this.maximumHeadingLevel < 2 ? 2 : this.maximumHeadingLevel) - 1
            )
            .join(",")
        : "h2, h3, h4, h5";
    this.el.querySelectorAll(headingDepth).forEach((child, index) => {
      listItems = this.createListItem(child, listItems, index);
      this.referenceElements.push(child as HTMLElement);
    });
    return listItems;
  }

  //container orientation logic
  private containerPosition(): void {
    if (this.position) {
      const container = this.el.shadowRoot?.querySelector(
        "#table-of-contents-section-container"
      ) as HTMLIcSectionContainerElement;
      switch (this.position) {
        case "right":
          container.style.flexDirection = "row-reverse";
          break;
        case "top":
          container.style.flexDirection = "column";
          break;
      }
    }
  }

  //sidebar movement logic
  private sidebarTranslation(newPosition: number): void {
    const sidebar = this.el.shadowRoot?.querySelector(
      ".table-of-contents-sidebar"
    ) as HTMLIcSectionContainerElement;

    const itemHeights: number[] = [];
    let previousItemsHeight = 0;
    this.el.shadowRoot
      ?.querySelectorAll(".table-of-contents-item")
      ?.forEach((item: any) => {
        if (item !== null) itemHeights.push(item.offsetHeight);
      });
    itemHeights
      .slice(0, newPosition)
      .forEach((i) => (previousItemsHeight += i));

    sidebar.style.transform = `translateY(${previousItemsHeight}px)`;
  }

  // list item clicked logic
  private updateOnSelection = (position: number) => {
    this.suppressListener = true;
    this.focusedElement = position;
    this.sidebarTranslation(this.focusedElement);
  };

  // find element heights to be used to determine focused item from scroll position
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
      this.containerPosition();
    } else if (
      window.innerWidth > DEVICE_SIZES.XL &&
      this.position === "top" &&
      this.initialPosition === "right"
    ) {
      this.position = "right";
      this.containerPosition();
    }
    this.findElementsHeights();
    this.truncateText();
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
      `.${TOC_CONTENT_CLASS}`
    ) as HTMLDivElement;
    content?.style.setProperty("top", `${this.headerHeight}px`);
  }

  // add tooltip to the item if it is too wide
  private addTooltip(item: any, widthBreakpoint: number) {
    if (item?.offsetWidth < item?.scrollWidth) {
      const tooltipPosition =
        window.innerWidth < widthBreakpoint
          ? "bottom"
          : this.position === "right"
          ? "left"
          : "right";
      if (item.parentNode.tagName == "IC-TOOLTIP") {
        //If there is already a tooltip, modify it
        const tooltip = item.parentNode;
        tooltip.setAttribute("label", item.innerHTML);
        tooltip.setAttribute("placement", tooltipPosition);
      } else {
        const newLabel = document.createElement("ic-tooltip");
        newLabel.setAttribute("target", item.id);
        newLabel.setAttribute("style", "overflow:hidden");
        newLabel.setAttribute("label", item.innerHTML);
        newLabel.setAttribute("placement", tooltipPosition);
        item.parentNode?.appendChild(newLabel);
        newLabel.appendChild(item);
      }
    }
  }

  // truncate text if it goes out of bounds of the container
  private truncateText = () => {
    const element = this.el.shadowRoot?.querySelectorAll(
      `.table-of-contents-item-label`
    );
    const contentList = this.el.shadowRoot?.querySelector(`.${TOC_LIST_ITEMS}`);
    if (contentList)
      element?.forEach((item) => {
        this.addTooltip(item, DEVICE_SIZES.S);
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
      if (!this.suppressListener) this.updateSelectedItemFromScroll();
      else this.suppressListener = false;
    });
    this.containerPosition();
  }

  // after component has loaded modify the list based of position, size and surrounding elements
  async componentDidLoad() {
    this.focusedElement = 0;
    this.headerHeight = this.findHeaderElement();
    this.addListMargin();
    this.truncateText();
    this.findElementsHeights();
  }

  // Component is a wrapper for page contents, and will build list from heading items
  render() {
    const { heading, monochrome, position, size, theme } = this;
    return (
      <Host class={{ [`ic-theme-${theme}`]: theme !== "inherit" }}>
        <ic-section-container
          id={"table-of-contents-section-container"}
          aligned={"full-width"}
          style={{ display: "flex" }}
        >
          <div
            role="navigation"
            aria-label="Table of contents"
            class={`${TOC_CONTENT_CLASS} ${
              position === "top" && "table-of-contents-position-top"
            }
            ${position === "right" && "table-of-contents-position-side"}`}
          >
            <ic-typography variant="subtitle-large">{heading}</ic-typography>
            <div class={"table-of-contents-list"}>
              <div
                class={`table-of-contents-sidebar ${
                  monochrome && `table-of-contents-sidebar-monochrome`
                }`}
                style={{ height: size === "large" ? "2rem" : "1.75rem" }}
              />
              <ol class={TOC_LIST_ITEMS}>{this.generateListItems()}</ol>
            </div>
          </div>
          <slot></slot>
        </ic-section-container>
      </Host>
    );
  }
}
