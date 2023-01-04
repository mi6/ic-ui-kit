import {
  Component,
  Element,
  Host,
  Prop,
  h,
  State,
  Listen,
} from "@stencil/core";
import {
  IcAlignment,
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../../utils/types";
import {
  slotHasContent,
  getThemeForegroundColor,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import { IcHeroContentAlignments } from "./ic-hero.types";

/**
 * @slot heading - Content will be rendered in the title area, in place of the heading.
 * @slot subheading - Content will be rendered in the title area, in place of the subheading.
 * @slot interaction - Content will be rendered in the interaction area, adjacent to the title area.
 * @slot secondary - Content will be rendered in the secondary content area.
 */

@Component({
  tag: "ic-hero",
  styleUrl: "ic-hero.css",
  shadow: true,
})
export class Hero {
  @Element() el: HTMLIcHeroElement;

  /**
   * The heading of the hero.
   */
  @Prop() heading!: string;

  /**
   * The description for the hero.
   */
  @Prop() subheading?: string;

  /**
   * The optional secondary heading, replaced by slotted right content.
   */
  @Prop() secondaryHeading?: string;

  /**
   * The optional secondary subheading, replaced by slotted right content.
   */
  @Prop() secondarySubheading?: string;

  /**
   * The optional background image.
   */
  @Prop() backgroundImage?: string;

  /**
   * If `true`, the background image (if set) will not scroll using a parallax effect.
   */
  @Prop() disableBackgroundParallax?: boolean = false;

  /**
   * The alignment of the hero.
   */
  @Prop() aligned: IcAlignment = "left";

  /**
   * The alignment of the hero content.
   */
  @Prop() contentAligned: IcHeroContentAlignments = "left";

  /**
   * If `true`, the small styling will be applied to the hero.
   */
  @Prop() small: boolean = false;

  @State() rightContent: boolean = false;

  @State() scrollFactor: string = "right -100px";

  @State() leftContentFullWidth: boolean =
    !this.rightContent && this.secondaryHeading === undefined;

  @State() foregroundColor: IcThemeForeground = getThemeForegroundColor();

  @Listen("icThemeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.foregroundColor = theme.mode;
  }

  @Listen("scroll", { target: "document" })
  doScroll(): void {
    if (this.disableBackgroundParallax) {
      return;
    }

    const scrolltotop = document.scrollingElement.scrollTop;
    const factor = 0.4;
    const y = -100 + scrolltotop * factor;
    this.scrollFactor = "right " + y + "px";
  }

  componentWillLoad(): void {
    this.rightContent = slotHasContent(this.el, "secondary");
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.heading, propName: "heading" }],
      "Hero"
    );
  }

  componentWillRender(): void {
    this.rightContent = slotHasContent(this.el, "secondary");
  }

  render() {
    const {
      aligned,
      small,
      heading,
      subheading,
      secondaryHeading,
      secondarySubheading,
      foregroundColor,
      backgroundImage,
      scrollFactor,
    } = this;

    let style = {};

    if (backgroundImage !== undefined) {
      style = {
        "background-image": "url(" + backgroundImage + ")",
        "background-position": scrollFactor,
      };
    }

    return (
      <Host
        class={{
          [IcThemeForegroundEnum.Dark]:
            foregroundColor === IcThemeForegroundEnum.Dark,
          ["has-background-image"]: backgroundImage !== undefined,
        }}
        style={style}
      >
        <ic-section-container
          aligned={aligned}
          fullHeight
          class="section-container"
        >
          <div
            class={{
              ["left-container"]: true,
              ["left-container-full-width"]: this.leftContentFullWidth,
            }}
          >
            <div class="heading">
              <slot name="heading">
                <ic-typography
                  variant={small ? "h2" : "h1"}
                  class={{ ["heading-bottom-spacing"]: !small }}
                >
                  {heading}
                </ic-typography>
              </slot>
            </div>
            <div class="subheading">
              <slot name="subheading">
                <ic-typography variant="body">{subheading}</ic-typography>
              </slot>
            </div>
            <div class="interaction-container">
              <slot name="interaction"></slot>
            </div>
          </div>
          {(secondaryHeading !== undefined || this.rightContent) && (
            <div class="right-container">
              <slot name="secondary">
                {secondaryHeading && (
                  <div class="secondary-container">
                    <div class="secondary-heading">
                      <ic-typography variant="h4">
                        {secondaryHeading}
                      </ic-typography>
                    </div>
                    <div class="secondary-subheading">
                      <ic-typography variant="subtitle-small">
                        {secondarySubheading}
                      </ic-typography>
                    </div>
                  </div>
                )}
              </slot>
            </div>
          )}
        </ic-section-container>
      </Host>
    );
  }
}
