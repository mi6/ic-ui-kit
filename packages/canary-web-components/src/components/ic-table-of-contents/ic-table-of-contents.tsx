import { Component, Element, h, Host, Prop, State, Watch } from "@stencil/core";
import { IcPositionTopOrRight, IcSizes, IcThemeMode } from "../../utils/types";
import { TableOfContentsItem } from "./ic-table-of-contents-item";
import { DEVICE_SIZES } from "../../utils/helpers";

const TOC_CONTENT_CLASS = "table-of-contents-content";
const TOC_LIST_ITEMS_CLASS = "table-of-contents-list-items";
const TOC_ITEM_CLASS = "table-of-contents-item-content";
const TOC_CONTAINER_CLASS = "table-of-contents-section-container";

interface RankedElement extends Element {
  rank: string;
  textLabel: string;
  treeChildren: RankedElement[];
  trueIndex: number;
}

@Component({
  tag: "ic-table-of-contents",
  styleUrl: "ic-table-of-contents.css",
  shadow: true,
})
export class TableOfContents {
  @Element() el: HTMLIcTableOfContentsElement;

  /**
   * Heading text of the table of contents.
   */
  @Prop() heading: string = "Contents";

  /**
   * Maximum heading level of child content that will generate an item in the table of contents. E.g. when set to '3', headings of <h4> and <h5> will not appear.
   */
  @Prop() maximumHeadingLevel: number = 3;

  /**
   * If `true`, the table of contents will display as black in the light theme, and white in dark theme.
   */
  @Prop() monochrome?: boolean = false;

  /**
   * Whether the table of contents will appear on the right of or above child content on large viewport widths.
   */
  @Prop({ mutable: true }) position: IcPositionTopOrRight = "right";

  /**
   * Vertical offset to page scroll (in percent) when table of contents item is selected, to account for other page components like headers.
   */
  @Prop() setScrollHeight: number = 50;

  /**
   * The size of the table of contents items.
   */
  @Prop() size: IcSizes = "medium";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * If `true`, the table of contents item label will be truncated.
   */
  @Prop() truncate: boolean = true;

  @State() focusedElement: number = 0;

  // heading items
  private referenceElements: HTMLElement[] = [];

  // heights of heading items
  private currentTargetHeights: number[] = [];

  private resizeObserver: ResizeObserver;
  // header height if present
  private headerHeight: number = 0;
  // holds initial position to allow for responsive changes
  private initialPosition: IcPositionTopOrRight = this.position;

  // suppress scroll listener to allow for click selection without scroll listener firing
  @State() suppressListener: boolean = false;

  @Watch("suppressListener")
  suppressListenerHandler(): void {
    window.scrollTo(0, window.scrollY - this.headerHeight - 50);
  }

  /**
   * Generate a TOC Item.
   * These items are wrapped in empty tooltips that will be populated by addTooltip()
   * @param tocHeading heading element to refer item information from
   * @param children
   * @returns TocItem ready to be rendered, with nested children if applicable
   */
  private createTocItem = (
    tocHeading: RankedElement,
    children?: HTMLElement[]
  ): HTMLElement => {
    const tocId = `toc_${tocHeading.id}`;

    const tocItem = (
      <TableOfContentsItem
        id={tocId}
        className={TOC_ITEM_CLASS}
        variant={tocHeading.tagName.toLowerCase()}
        label={tocHeading.textLabel}
        target={tocHeading.id}
        truncate={this.truncate}
        selected={this.focusedElement}
        updateSelected={this.updateOnSelection}
        position={tocHeading.trueIndex}
        size={this.size}
      />
    );

    const wrappedToc = this.truncate ? (
      <ic-tooltip target={tocId} label={tocHeading.innerHTML}>
        {tocItem}
      </ic-tooltip>
    ) : (
      tocItem
    );
    return (
      <li
        class={`table-of-contents-item  ${
          this.monochrome && "table-of-contents-item-monochrome"
        }`}
      >
        {wrappedToc}
        {children ? <ol>{children}</ol> : null}
      </li>
    );
  };

  /**
   * Render TocItems and recursively render children items if they exist
   * @param listItem
   * @returns HTML Element array to be rendered
   */
  private renderTocTree = (listItem: RankedElement): HTMLElement => {
    let results;
    if (listItem.treeChildren.length > 0) {
      const children = listItem.treeChildren.map((i) => this.renderTocTree(i));
      results = this.createTocItem(listItem, children);
    } else {
      results = this.createTocItem(listItem);
    }
    return results;
  };

  /**
   * Scrape for heading elements on the page content within TOC, down to the maximumHeadingLevel.
   * From this, generate an array of Elements with lower rank headings inserted as treeChildren on top level headings.
   * @returns RankedElement[] array of HTML elements with additional props for rank, trueIndex and treeChildren array
   */
  private generateHeadingTree(): RankedElement[] {
    const resultArray: RankedElement[] = [];

    const headingDepth =
      this.maximumHeadingLevel < 5
        ? ["h2", "h3", "h4", "h5"]
            .slice(
              0,
              (this.maximumHeadingLevel < 2 ? 2 : this.maximumHeadingLevel) - 1
            )
            .join(",")
        : "h2, h3, h4, h5";
    const headingList = this.el.querySelectorAll(headingDepth);

    if (headingList) {
      const headingArray = Array.from(headingList) as RankedElement[];
      headingArray.forEach((item, index) => {
        this.referenceElements.push(item as unknown as HTMLElement);
        item.trueIndex = index;
        item.rank = item.tagName.toLowerCase().slice(1, 2);
        item.textLabel = item.textContent
          ? item.textContent.trimStart().split("\n")[0]
          : `${item.rank}-${index}`;
        item.treeChildren = [];
      });

      let currentRank = headingArray[0]?.rank || 2;

      headingArray.reverse().forEach((h, i) => {
        if (!h.id) {
          h.setAttribute("id", h.textLabel.replace(/\s+/g, "-").toLowerCase());
        }
        if (h.rank > currentRank && h.trueIndex > 0) {
          if (headingArray[i] && headingArray[i].rank < h.rank) {
            headingArray[i].treeChildren.unshift(h);
          } else {
            resultArray.push(h);
          }
        } else {
          currentRank = h.rank;
          resultArray.push(h);
        }
      });
    }
    return resultArray.reverse();
  }

  //container orientation logic
  private containerPosition(): void {
    if (this.position) {
      const container = this.el.shadowRoot?.querySelector(
        `.${TOC_CONTAINER_CLASS}`
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

  /**
   * Move the sidebar to the provided position on the page.
   * Also, resize the sidebar to stretch the height of the selected heading.
   * @param newPosition
   */
  private sidebarTranslation(newPosition: number): void {
    const sidebar = this.el.shadowRoot?.querySelector(
      ".table-of-contents-sidebar"
    ) as HTMLIcSectionContainerElement;

    const itemHeights: number[] = [];
    let previousItemsHeight = 0;
    this.el.shadowRoot
      ?.querySelectorAll(`.${TOC_ITEM_CLASS}`)
      ?.forEach((item: any) => {
        if (item !== null) itemHeights.push(item.offsetHeight);
      });
    itemHeights
      .slice(0, newPosition)
      .forEach((i) => (previousItemsHeight += i));

    sidebar.style.transform = `translateY(${previousItemsHeight}px)`;
    sidebar.style.height = `${itemHeights[newPosition]}px`;
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
    if (window.innerWidth < DEVICE_SIZES.XL && this.initialPosition !== "top") {
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
    const itemLabel = item.querySelector(".table-of-contents-item-label");
    if (item.parentNode?.tagName == "IC-TOOLTIP") {
      const tooltip = item.parentNode;
      if (itemLabel?.offsetWidth < itemLabel?.scrollWidth) {
        const tooltipPosition =
          window.innerWidth < widthBreakpoint
            ? "bottom"
            : this.position === "right"
            ? "left"
            : "right";
        //Modify the ic-tooltip wrapped around the list item
        tooltip.setAttribute("disable-click", false);
        tooltip.setAttribute("disable-hover", false);
        tooltip.setAttribute("placement", tooltipPosition);
        tooltip.setAttribute("target", item.id);
        tooltip.setAttribute("style", "overflow:hidden");
      } else {
        //disable the tooltip if the item does not need to truncate
        tooltip.setAttribute("disable-click", true);
        tooltip.setAttribute("disable-hover", true);
      }
    }
  }

  // truncate text if it goes out of bounds of the container
  private truncateText = () => {
    const links = this.el.shadowRoot?.querySelectorAll(`.${TOC_ITEM_CLASS}`);
    const contentList = this.el.shadowRoot?.querySelector(
      `.${TOC_LIST_ITEMS_CLASS}`
    );
    if (contentList)
      links?.forEach((item) => {
        this.addTooltip(item, DEVICE_SIZES.S);
      });
  };

  // initialise resize observer
  componentWillLoad(): void {
    this.resizeObserver = new ResizeObserver(() => this.handleResizeBounds());
    this.resizeObserver.observe(this.el);
  }

  // initialise scroll listener
  componentDidRender(): void {
    document.addEventListener("scroll", () => {
      if (!this.suppressListener) this.updateSelectedItemFromScroll();
      else this.suppressListener = false;
    });
    this.containerPosition();
    this.findElementsHeights();
    this.sidebarTranslation(this.focusedElement);
  }

  // after component has loaded modify the list based of position, size and surrounding elements
  async componentDidLoad(): Promise<void> {
    this.focusedElement = 0;
    this.headerHeight = this.findHeaderElement();
    this.addListMargin();
    this.truncateText();
    this.findElementsHeights();
    this.sidebarTranslation(this.focusedElement);
  }

  // Component is a wrapper for page contents, and will build list from heading items
  render() {
    const { heading, monochrome, position, size, theme } = this;
    return (
      <Host class={{ [`ic-theme-${theme}`]: theme !== "inherit" }}>
        <ic-section-container class={TOC_CONTAINER_CLASS} aligned="full-width">
          <div
            role="navigation"
            class={`${TOC_CONTENT_CLASS} ${
              position === "top" && "table-of-contents-position-top"
            }
            ${position === "right" && "table-of-contents-position-side"}`}
          >
            <ic-typography
              class={`table-of-contents-heading ${size}`}
              variant="subtitle-large"
            >
              {heading}
            </ic-typography>
            <div class="table-of-contents-list">
              <div
                class={`table-of-contents-sidebar ${
                  monochrome && `table-of-contents-sidebar-monochrome`
                }
                ${size}
                `}
              />
              <ol class={TOC_LIST_ITEMS_CLASS}>
                {this.generateHeadingTree().map((item) =>
                  this.renderTocTree(item)
                )}
              </ol>
            </div>
          </div>
          <slot></slot>
        </ic-section-container>
      </Host>
    );
  }
}
