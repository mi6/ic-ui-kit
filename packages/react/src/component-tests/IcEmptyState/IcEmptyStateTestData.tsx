import { IcEmptyStateAlignment, IcSizes } from "@ukic/web-components";
import {
  IcEmptyState,
  IcButton,
  IcLink,
  SlottedSVG,
  IcTypography,
} from "../..";
import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const BasicEmptyState = () => {
  return (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
    >
      <SlottedSVG slot="image" viewBox="0 0 1600 1600">
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
      <IcButton slot="actions">Action</IcButton>
      <IcLink href="/" slot="actions">
        Standalone link
      </IcLink>
    </IcEmptyState>
  );
};

export const EmptyStateTitle = () => {
  return (
    <IcEmptyState heading="Empty state title">
      <SlottedSVG
        slot="image"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <title>close icon</title>
      </SlottedSVG>
    </IcEmptyState>
  );
};

export const ButtonEmptyState = () => {
  return (
    <IcEmptyState heading="Empty state title">
      <IcButton slot="actions">Action</IcButton>
    </IcEmptyState>
  );
};

export const EmptyStateAligned = (alignment: IcEmptyStateAlignment) => {
  return (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      aligned={alignment}
    />
  );
};

export const EmptyStateImage = (size: IcSizes) => {
  return (
    <IcEmptyState
      imageSize={size}
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
    >
      <SlottedSVG
        slot="image"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <title>close icon</title>
      </SlottedSVG>
    </IcEmptyState>
  );
};

export const TruncatedText = () => {
  return (
    <IcEmptyState
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body of text that is truncated to two lines. Click the 'See more' link to expand the text, then click 'See less' to truncate the text once more!
Dripper caramelization java saucer grounds galão, mocha, and robusta kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait. Con panna, cup, cream, body americano affogato cup espresso, rich milk seasonal saucer grinder spoon that cultivar strong redeye frappuccino barista extraction redeye mazagran. Grounds, french press dripper organic and foam id saucer, crema, black rich dark, grounds breve coffee steamed caramelization percolator."
      maxLines={2}
    ></IcEmptyState>
  );
};

export const SlottedContent = () => {
  return (
    <IcEmptyState>
      <IcTypography slot="heading" variant="h4">
        Empty state title
      </IcTypography>
      <IcTypography slot="subheading" variant="subtitle-small">
        Empty state subtitle
      </IcTypography>
      <IcTypography slot="body"> Body text for empty state.</IcTypography>
      <SlottedSVG
        slot="image"
        style={{ height: "326px", width: "326px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
      <IcButton slot="actions">Action</IcButton>
      <IcLink href="/" slot="actions">
        Standalone link
      </IcLink>
    </IcEmptyState>
  );
};

export const EmptyStateTheme = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <IcEmptyState
        heading="Theme inherit"
        subheading="Empty state subtitle"
        body="Empty state body"
      ></IcEmptyState>
      <IcEmptyState
        heading="Theme light"
        subheading="Empty state subtitle"
        body="Empty state body"
        theme="light"
      ></IcEmptyState>
      <div style={{ backgroundColor: "black" }}>
        <IcEmptyState
          heading="Theme dark"
          subheading="Empty state subtitle"
          body="Empty state body"
          theme="dark"
        ></IcEmptyState>
      </div>
    </div>
  );
};
