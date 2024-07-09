import { Component, Prop, h, Host } from "@stencil/core";
import { IcProtectiveMarkings } from "./ic-classification-banner.types";

const classificationText = {
  default: "protective marking not set",
  official: "official",
  "official-sensitive": "official sensitive",
  secret: "secret",
  "top-secret": "top secret",
};

@Component({
  tag: "ic-classification-banner",
  styleUrl: "ic-classification-banner.css",
  shadow: true,
})
export class ClassificationBanner {
  /**
   * The additional information that will be displayed after the classification.
   */
  @Prop() additionalSelectors?: string = "";
  /**
   * The classification level to be displayed - also determines the banner and text colour.
   */
  @Prop() classification?: IcProtectiveMarkings = "default";
  /**
   * The optional text that will be displayed before classification to specify relevant country/countries.
   */
  @Prop() country?: string = "uk";
  /**
   * If `true`, the banner will appear inline with the page, instead of sticking to the bottom of the page.
   */
  @Prop() inline?: boolean = false;
  /**
   * If `true`, "Up to" will be displayed before the classification and country.
   */
  @Prop() upTo?: boolean = false;

  render() {
    const { inline, upTo } = this;

    // In case of unrecognized props, fallback to default
    let { country, additionalSelectors, classification } = this;
    if (!country) country = "";
    if (!additionalSelectors) additionalSelectors = "";
    if (
      !classification ||
      (classification && !classificationText[classification])
    )
      classification = "default";

    return (
      <Host class={{ ["ic-classification-banner-inline"]: inline }}>
        <banner
          aria-label="Protective marking"
          class={{
            ["classification-banner"]: true,
            [`${classification}`]: classification,
          }}
        >
          {classification !== "default" ? (
            <span class="offscreen">
              The protective marking of this page is:{" "}
            </span>
          ) : null}
          <ic-typography variant="caption-uppercase">
            {classification === "default"
              ? classificationText[classification]
              : `${upTo ? "up to" : ""} 
               ${country} 
               ${classificationText[classification]} 
               ${additionalSelectors}`}
          </ic-typography>
        </banner>
      </Host>
    );
  }
}
