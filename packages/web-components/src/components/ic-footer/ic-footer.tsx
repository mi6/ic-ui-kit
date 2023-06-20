import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  State,
  h,
  Host,
  Listen,
} from "@stencil/core";
import { IC_DEVICE_SIZES } from "../../utils/constants";
import {
  getCurrentDeviceSize,
  getThemeForegroundColor,
  checkResizeObserver,
  hasClassificationBanner,
  isSlotUsed,
} from "../../utils/helpers";
import {
  IcAlignment,
  IcTheme,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../../utils/types";
import { IcFooterBreakpoints } from "./ic-footer.types";

/**
 * @slot description - Content will be rendered at the top of the footer.
 * @slot link - Content will be rendered between description and logos.
 * @slot logo - Content will be rendered underneath footer links.
 * @slot caption - Content will be rendered above Crown Copyright.
 */

@Component({
  tag: "ic-footer",
  styleUrl: "ic-footer.css",
  shadow: true,
})
export class Footer {
  private footerEl: HTMLElement;
  private resizeObserver: ResizeObserver;

  @Element() el: HTMLIcFooterElement;

  @State() deviceSize: number = IC_DEVICE_SIZES.XL;
  @State() foregroundColor: IcThemeForeground = getThemeForegroundColor();

  /**
   * The alignment of the section containers used within the footer.
   */
  @Prop() aligned?: IcAlignment = "left";

  /**
   * The screen size breakpoint at which to switch to the small layout.
   */
  @Prop() breakpoint?: IcFooterBreakpoints = "medium";

  /**
   * The caption displayed at the bottom of the footer.
   */
  @Prop() caption: string;

  /**
   * If `true`, the footer will display the crown copyright at the bottom.
   */
  @Prop() copyright: boolean = true;

  /**
   * The description displayed at the top of the footer.
   */
  @Prop() description: string;

  /**
   * If `true`, the footer will be set up to handle link groups instead of standalone links.
   */
  @Prop() groupLinks?: boolean = false;

  /**
   *  @internal Triggers on page resize and triggers style changes in footer links and link groups
   */
  @Event() footerResized: EventEmitter<void>;

  disconnectedCallback(): void {
    this.resizeObserver.disconnect();
  }

  componentWillLoad(): void {
    this.deviceSize = getCurrentDeviceSize();
  }

  componentDidLoad(): void {
    checkResizeObserver(this.runResizeObserver);
  }

  @Listen("themeChange", { target: "document" })
  themeChangeHandler(ev: CustomEvent): void {
    const theme: IcTheme = ev.detail;
    this.foregroundColor = theme.mode;
  }

  private isSmall() {
    const bp = this.breakpoint;

    return bp === "extra small"
      ? this.deviceSize < IC_DEVICE_SIZES.XS
      : bp === "small"
      ? this.deviceSize < IC_DEVICE_SIZES.S
      : bp === "medium"
      ? this.deviceSize < IC_DEVICE_SIZES.M
      : bp === "large"
      ? this.deviceSize < IC_DEVICE_SIZES.L
      : bp === "extra large"
      ? this.deviceSize < IC_DEVICE_SIZES.XL
      : false;
  }

  private resizeObserverCallback = (currSize: number) => {
    if (currSize !== this.deviceSize) {
      this.deviceSize = currSize;
    }
    this.footerResized.emit();
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      const currSize = getCurrentDeviceSize();
      this.resizeObserverCallback(currSize);
    });

    this.resizeObserver.observe(this.footerEl);
  };

  render() {
    const {
      aligned,
      caption,
      copyright,
      description,
      groupLinks,
      foregroundColor,
    } = this;
    const small = this.isSmall();

    return (
      <Host
        class={{
          footer: true,
          [`footer-${small ? "small" : "sparse"}`]: true,
          [`footer-${groupLinks ? "grouped" : "ungrouped"}`]: true,
          [`footer-${foregroundColor}`]: true,
          // Slots will be able to infer their own color
          [IcThemeForegroundEnum.Dark]:
            foregroundColor === IcThemeForegroundEnum.Dark,
          [IcThemeForegroundEnum.Light]:
            foregroundColor === IcThemeForegroundEnum.Light,
        }}
      >
        <footer ref={(footerEl) => (this.footerEl = footerEl)}>
          {/* Description */}
          <div class="footer-description">
            <ic-section-container aligned={aligned} fullHeight={true}>
              <div class="footer-description-inner">
                <ic-typography variant="body">
                  <slot name="description">{description}</slot>
                </ic-typography>
              </div>
            </ic-section-container>
          </div>

          {/* Links */}
          {isSlotUsed(this.el, "link") && (
            <div class="footer-links">
              {groupLinks && small ? (
                <div class="footer-links-inner">
                  <slot name="link" />
                </div>
              ) : (
                <ic-section-container fullHeight aligned={aligned}>
                  <div class="footer-links-inner">
                    <slot name="link" />
                  </div>
                </ic-section-container>
              )}
            </div>
          )}

          {/* Compliance (logo, caption, copyright) */}
          <div class="footer-compliance">
            <ic-section-container aligned={aligned} fullHeight={true}>
              <div class="footer-compliance-inner">
                {isSlotUsed(this.el, "logo") && (
                  <div class="footer-logo">
                    {/* Logo */}
                    <slot name="logo" />
                  </div>
                )}
                {(isSlotUsed(this.el, "caption") || caption) && (
                  <div class="footer-caption">
                    <ic-typography
                      variant={
                        this.deviceSize <= IC_DEVICE_SIZES.M
                          ? "caption"
                          : "body"
                      }
                    >
                      <slot name="caption">{caption}</slot>
                    </ic-typography>
                  </div>
                )}
                {copyright && (
                  <div
                    class={{
                      ["footer-copyright"]: true,
                      ["classification-spacing"]: hasClassificationBanner(),
                    }}
                  >
                    <ic-typography
                      variant={
                        this.deviceSize <= IC_DEVICE_SIZES.M
                          ? "caption-uppercase"
                          : "label-uppercase"
                      }
                    >
                      &copy; Crown Copyright
                    </ic-typography>
                  </div>
                )}
              </div>
            </ic-section-container>
          </div>
        </footer>
      </Host>
    );
  }
}
