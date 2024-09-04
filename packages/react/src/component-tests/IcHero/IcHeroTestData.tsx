import React, { useState } from "react";
import {
  IcHero,
  IcButton,
  IcTypography,
  IcSearchBar,
  IcCard,
  IcLink,
  IcTheme,
  IcTextField,
} from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

export const Default = () => {
  return (
    <IcHero
      heading="Everything I brew, I brew it for you"
      subheading="This news is hot off the French press."
    >
      <IcButton variant="primary" slot="interaction">
        Explore
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Check out our new drinks
      </IcButton>
    </IcHero>
  );
};

export const SlottedHeadings = () => {
  return (
    <IcHero>
      <IcTypography slot="heading" variant="h1">
        Slotted heading
      </IcTypography>
      <IcTypography slot="subheading">Slotted subheading</IcTypography>
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>
  );
};

export const CenterAlignment = () => {
  return (
    <IcHero
      aligned="center"
      heading="Everything I brew, I brew it for you"
      subheading="This news is hot off the French press."
    >
      <IcButton variant="primary" slot="interaction">
        Explore
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Check out our new drinks
      </IcButton>
    </IcHero>
  );
};

export const CenteredContent = () => {
  return (
    <IcHero
      contentAligned={"center"}
      heading="Everything I brew, I brew it for you"
      subheading="This news is hot off the French press."
    >
      <IcButton variant="primary" slot="interaction">
        Explore
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Check out our new drinks
      </IcButton>
    </IcHero>
  );
};

export const Small = () => {
  return (
    <IcHero
      heading="New coffee launches 14 September 2022"
      subheading="Brand new flavours now available! Irresistible. Caramel. Decadence. Sugary."
      size="small"
    >
      <IcButton variant="primary" slot="interaction" size="small">
        Order now
      </IcButton>
      <IcButton variant="secondary" slot="interaction" size="small">
        Submit new flavour
      </IcButton>
    </IcHero>
  );
};

export const SecondaryHeadingSearchbar = () => {
  return (
    <IcHero
      heading="Everything I brew, I brew it for you"
      subheading="This news is hot off the French press."
      secondaryHeading="The classics"
      secondarySubheading="Try our original flavours."
    >
      <IcSearchBar slot="interaction" label="Search for coffee" hideLabel />
    </IcHero>
  );
};

export const WithCard = () => {
  return (
    <IcHero
      heading="Everything I brew, I brew it for you"
      subheading="This news is hot off the French press."
      aligned="full-width"
    >
      <IcButton variant="primary" slot="interaction">
        Explore
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Check out our new drinks
      </IcButton>
      <IcCard
        heading="Out now"
        message="Try our new strawberry infused tea."
        slot="secondary"
        class="hero-card"
        style={{
          color: "var(--ic-theme-text)",
          width: "300px",
        }}
      />
    </IcHero>
  );
};

export const WithImageRight = () => {
  return (
    <IcHero
      heading="Everything I brew, I brew it for you"
      subheading="This news is hot off the French press."
      aligned="full-width"
    >
      <IcButton variant="primary" slot="interaction">
        Explore
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Check out our new drinks
      </IcButton>
      <SlottedSVG
        slot="secondary"
        style={{
          width: "300px",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="900" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </SlottedSVG>
    </IcHero>
  );
};

export const BackgroundImage = () => {
  return (
    <IcHero
      background-image="https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg"
      heading="Everything I brew, I brew it for you"
      subheading="This news is hot off the French press."
    >
      <IcButton variant="primary" slot="interaction">
        Explore
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Check out our new drinks
      </IcButton>
    </IcHero>
  );
};

export const LongHeading = () => {
  return (
    <IcHero
      heading="Hero heading. This is a Hero component, it should be used as a page heading."
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <IcButton variant="primary" appearance="light" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" appearance="light" slot="interaction">
        Button
      </IcButton>
      <IcLink
        href="https://google.com"
        slot="interaction"
        style={{ marginTop: "var(--ic-space-sm)" }}
      >
        Help
      </IcLink>
      <IcCard
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></IcCard>
    </IcHero>
  );
};

export const FullWidth = () => {
  return (
    <IcHero
      aligned="full-width"
      heading="Everything I brew, I brew it for you"
      subheading="This news is hot off the French press."
    >
      <IcButton variant="primary" slot="interaction">
        Explore
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Check out our new drinks
      </IcButton>
    </IcHero>
  );
};

export const Controlled = () => {
  const [color, setColour] = useState("rgb(255, 201, 60)");
  const defaultButtonClickHandler = () => {
    setColour("rgb(27, 60, 121)");
  };
  const differentButtonClickHandler = () => {
    setColour("rgb(255, 201, 60)");
  };
  return (
    <>
      <IcTheme color={color} />
      <IcButton variant="primary" onClick={defaultButtonClickHandler}>
        Default theme
      </IcButton>
      <IcButton variant="primary" onClick={differentButtonClickHandler}>
        Sunrise theme
      </IcButton>
    </>
  );
};

export const Theme = () => {
  return (
    <>
      <Controlled />
      <IcHero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
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
        <IcLink
          href="https://google.com"
          slot="interaction"
          style={{ marginTop: "var(--ic-space-sm)" }}
        >
          Help
        </IcLink>
        <IcCard
          heading="Latest announcement"
          message="This is some example text that can be included in the card copy."
          slot="secondary"
        />
      </IcHero>
    </>
  );
};
