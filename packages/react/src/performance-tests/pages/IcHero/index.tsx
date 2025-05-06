import React from "react";
import {
  IcHero,
  IcButton,
  IcTextField,
  IcLink,
  IcCardVertical,
  IcSearchBar,
  IcTheme,
  IcTypography,
} from "../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcHeroPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography variant="subtitle-small">
        <h1>Hero Page</h1>
      </IcTypography>
      <IcHero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        secondaryHeading="Secondary Heading"
        secondarySubheading="This is a secondary description."
        aligned="center"
      >
        <div slot="interaction" style={{ display: "flex" }}>
          <IcTextField
            placeholder="Filter display"
            label="Filter display"
            hide-label
          />
          <IcButton
            variant="primary"
            style={{ marginLeft: "var(--ic-space-md)" }}
          >
            Filter
          </IcButton>
        </div>
        <IcButton variant="secondary" slot="interaction">
          See all
        </IcButton>
        <IcSearchBar slot="interaction" label="Label" hideLabel />
        <IcLink
          href="https://google.com"
          slot="interaction"
          style={{ marginTop: "var(--ic-space-sm)" }}
        >
          Help
        </IcLink>
        <IcCardVertical
          heading="Latest announcement"
          message="This is some example text that can be included in the card copy."
          slot="secondary"
        />
      </IcHero>
    </IcTheme>
  );
};

export default IcHeroPage;
