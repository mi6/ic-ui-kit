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
   * Additional information to display after the classification
   */
  @Prop() additionalSelectors?: string = "";
  /**
   * The classification level to be displayed also determines the banner and text colour
   */
  @Prop() classification?: IcProtectiveMarkings = "default";
  /**
   * Optional text displayed before classification to specify relevant country/countries
   */
  @Prop() country?: string = "uk";
  /**
   * Determines whether the banner appears inline with the page or sticks to the bottom of the page
   */
  @Prop() inline?: boolean = false;
  /**
   * Optionally display "Up to" before classification and country if set
   */
  @Prop() upTo?: boolean = false;

  render() {
    const { classification, inline, country, upTo, additionalSelectors } = this;

    return (
      <Host class={{ ["inline"]: inline }}>
        <banner
          aria-label="Protective marking"
          class={{
            ["classification-banner"]: true,
            [`${classification}`]: classification,
          }}
          role="contentinfo"
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
               ${country !== "" ? country : ""} 
               ${classificationText[classification]} 
               ${additionalSelectors !== "" ? additionalSelectors : ""}`}
          </ic-typography>
        </banner>
      </Host>
    );
  }
}
