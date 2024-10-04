import React, { ReactElement } from "react";
import {
  IcCardVertical,
  IcButton,
  IcTypography,
  IcStatusTag,
  IcBadge,
} from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";
import { IcThemeMode } from "@ukic/web-components";

const ReusableCoffeeIcon = (): ReactElement => (
  <SlottedSVG
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
  </SlottedSVG>
);

const ReusableArrowIcon = (): ReactElement => (
  <SlottedSVG
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
  </SlottedSVG>
);

const ReusableVerticalDotsIcon = (): ReactElement => (
  <SlottedSVG
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-three-dots-vertical"
    viewBox="0 0 16 16"
  >
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
  </SlottedSVG>
);

const ReusableMidImage = (): ReactElement => (
  <SlottedSVG
    slot="image-mid"
    style={{
      height: "100%",
      width: "100%",
      maxHeight: "20.375rem",
      maxWidth: "20.375rem",
    }}
    viewBox="0 0 1600 1250"
    xmlns="http://www.w3.org/2000/svg"
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
);

export const StaticCard = (): ReactElement => {
  return (
    <div style={{ margin: "16px" }}>
      <IcCardVertical
        heading="Card"
        message="This is a static card"
      ></IcCardVertical>
    </div>
  );
};

export const WrappedByLink = (): ReactElement => {
  return (
    <div style={{ padding: "5rem" }}>
      <a href="/">
        <IcCardVertical
          heading="Card"
          message="This is a card wrapped by link"
        ></IcCardVertical>
      </a>
    </div>
  );
};

export const WrappedClickable = (): ReactElement => {
  return (
    <div style={{ padding: "5rem" }}>
      <a href="/">
        <IcCardVertical
          heading="Americano order"
          subheading="Name: Michael"
          message="This is card with parent link"
          href="/"
          clickable
        ></IcCardVertical>
      </a>
    </div>
  );
};

export const ThreeVariants = (): ReactElement => {
  return (
    <IcCardVertical
      heading="Americano order"
      subheading="Name: Michael"
      message="Extras: Double espresso shot and oat milk."
      style={{ width: "360px" }}
    >
      <ReusableCoffeeIcon />
      <IcStatusTag slot="adornment" label="In Progress" size="small" />
      <ReusableMidImage />
      <div slot="interaction-controls" style={{ display: "flex", gap: "16px" }}>
        <IcButton variant="primary">Accept</IcButton>
        <IcButton variant="secondary">Cancel</IcButton>
      </div>
    </IcCardVertical>
  );
};

export const WithIcon = (): ReactElement => {
  return (
    <IcCardVertical heading="Americano order">
      <ReusableCoffeeIcon />
    </IcCardVertical>
  );
};

export const WithMessage = (): ReactElement => {
  return (
    <IcCardVertical
      heading="Americano order"
      message="Extras: Double espresso shot and oat milk."
    >
      <ReusableCoffeeIcon />
    </IcCardVertical>
  );
};

export const WithSubheading = (): ReactElement => {
  return (
    <IcCardVertical
      heading="Americano order"
      subheading="Name: Michael"
      message="Extras: Double espresso shot and oat milk."
    >
      <ReusableCoffeeIcon />
    </IcCardVertical>
  );
};

export const WithSlottedContent = (): ReactElement => {
  return (
    <div style={{ margin: "16px" }}>
      <IcCardVertical>
        <IcTypography variant="h4" slot="heading">
          This is the slotted card heading
        </IcTypography>
        <IcTypography slot="message">
          This is an example of a new card component with slotted text included.
        </IcTypography>
        <IcTypography variant="subtitle-small" slot="subheading">
          This is the slotted subheading
        </IcTypography>
        <ReusableArrowIcon />
      </IcCardVertical>
    </div>
  );
};

export const WithInteractionButton = (): ReactElement => {
  return (
    <IcCardVertical
      heading="Americano order"
      subheading="Name: Michael"
      message="Extras: Double espresso shot and oat milk."
    >
      <ReusableCoffeeIcon />
      <IcButton
        variant="icon"
        aria-label="More information"
        title="More information"
        slot="interaction-button"
      >
        <ReusableVerticalDotsIcon />
      </IcButton>
    </IcCardVertical>
  );
};

export const WithAdornment = (): ReactElement => {
  return (
    <IcCardVertical
      heading="Americano order"
      subheading="Name: Michael"
      message="Extras: Double espresso shot and oat milk."
    >
      <ReusableCoffeeIcon />
      <IcStatusTag
        slot="adornment"
        status="warning"
        label="In Progress"
        size="small"
      />
    </IcCardVertical>
  );
};

export const WithTopImage = (): ReactElement => {
  return (
    <IcCardVertical
      heading="Americano order"
      subheading="Name: Michael"
      message="Extras: Double espresso shot and oat milk."
      style={{ width: "360px" }}
    >
      <SlottedSVG
        slot="image-top"
        style={{
          height: "100%",
          width: "100%",
          maxHeight: "20.375rem",
          maxWidth: "20.375rem",
        }}
        viewBox="0 0 1600 1250"
        xmlns="http://www.w3.org/2000/svg"
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
      <IcButton
        variant="icon"
        aria-label="More information"
        title="More information"
        slot="interaction-button"
      >
        <ReusableVerticalDotsIcon />
      </IcButton>
      <IcStatusTag
        slot="adornment"
        status="warning"
        label="In Progress"
        size="small"
      />
    </IcCardVertical>
  );
};

export const WithMiddleImage = (): ReactElement => {
  return (
    <IcCardVertical
      heading="Americano order"
      subheading="Name: Michael"
      message="Extras: Double espresso shot and oat milk."
      style={{ width: "360px" }}
    >
      <ReusableCoffeeIcon />
      <IcButton
        variant="icon"
        aria-label="More information"
        title="More information"
        slot="interaction-button"
      >
        <ReusableVerticalDotsIcon />
      </IcButton>
      <IcStatusTag
        slot="adornment"
        status="warning"
        label="In Progress"
        size="small"
      />
      <ReusableMidImage />
    </IcCardVertical>
  );
};

export const WithInteractionControls = (): ReactElement => {
  return (
    <IcCardVertical
      heading="Americano order"
      subheading="Name: Michael"
      message="Extras: Double espresso shot and oat milk."
    >
      <ReusableArrowIcon />
      <div slot="interaction-controls" style={{ display: "flex", gap: "16px" }}>
        <IcButton variant="primary">Accept</IcButton>
        <IcButton variant="secondary">Cancel</IcButton>
      </div>
    </IcCardVertical>
  );
};

export const ClickableLink = (): ReactElement => {
  return (
    <div style={{ margin: "16px" }}>
      <IcCardVertical
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        clickable
        href="#"
      >
        <ReusableCoffeeIcon />
      </IcCardVertical>
    </div>
  );
};

export const ClickableButton = (): ReactElement => {
  return (
    <div style={{ margin: "16px" }}>
      <IcCardVertical
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        clickable
        // eslint-disable-next-line react/jsx-no-bind
        onClick={(ev) => console.log(ev)}
      >
        <ReusableCoffeeIcon />
      </IcCardVertical>
    </div>
  );
};

export const WithBadge = (): ReactElement => {
  return (
    <div style={{ margin: "16px" }}>
      <IcCardVertical
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        clickable
        href="#"
      >
        <IcBadge size="large" label="New" slot="badge" variant="info" />
        <ReusableCoffeeIcon />
      </IcCardVertical>
    </div>
  );
};

export const Disabled = (): ReactElement => {
  return (
    <div style={{ margin: "16px" }}>
      <IcCardVertical
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        clickable
        disabled
      >
        <ReusableCoffeeIcon />
      </IcCardVertical>
    </div>
  );
};

export const FullWidth = (): ReactElement => {
  return (
    <IcCardVertical
      heading="Americano order"
      subheading="Name: Michael"
      message="This is a full width card"
      clickable
      fullWidth
    >
      <ReusableCoffeeIcon />
    </IcCardVertical>
  );
};

export const Expandable = (): ReactElement => {
  return (
    <IcCardVertical
      heading="Americano order"
      subheading="Name: Michael"
      message="Extras: Double espresso shot and oat milk."
      expandable
    >
      <ReusableCoffeeIcon />
      <div slot="interaction-controls" style={{ display: "flex", gap: "16px" }}>
        <IcButton variant="primary">Accept</IcButton>
        <IcButton variant="secondary">Cancel</IcButton>
      </div>
      <IcTypography slot="expanded-content">Expanded</IcTypography>
    </IcCardVertical>
  );
};

export const ReducedWidth = (): ReactElement => {
  return (
    <div style={{ margin: "16px" }}>
      <IcCardVertical
        heading="This is the card heading"
        subheading="This is the subheading"
        message="This is an example of a reduced width card component."
        style={{ width: "300px" }}
        expandable
      >
        <IcStatusTag slot="adornment" label="Neutral" size="small" />
        <IcButton
          variant="icon"
          aria-label="More information"
          title="More information"
          slot="interaction-button"
        >
          <ReusableVerticalDotsIcon />
        </IcButton>
        <SlottedSVG
          slot="image-mid"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
          style={{ height: "326px", width: "326px" }}
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
        <ReusableArrowIcon />
        <IcButton slot="interaction-controls" variant="primary">
          Learn more
        </IcButton>
        <IcButton slot="interaction-controls" variant="secondary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>heart-outline</title>
            <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
          </svg>
          Add to favourites
        </IcButton>
        <IcButton slot="interaction-controls" variant="secondary">
          Hide
        </IcButton>
      </IcCardVertical>
    </div>
  );
};

export const IncreasedWidth = (): ReactElement => {
  return (
    <div style={{ margin: "16px" }}>
      <IcCardVertical
        heading="This is the card heading"
        subheading="This is the subheading"
        message="This is an example of an increased width card component."
        style={{ width: "500px" }}
        expandable
      >
        <IcStatusTag slot="adornment" label="Neutral" size="small" />
        <IcButton
          variant="icon"
          title="More information"
          aria-label="More information"
          slot="interaction-button"
        >
          <ReusableVerticalDotsIcon />
        </IcButton>
        <SlottedSVG
          slot="image-mid"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
          style={{ height: "526px", width: "526px" }}
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
        <ReusableArrowIcon />
        <IcButton slot="interaction-controls" variant="primary">
          Learn more
        </IcButton>
        <IcButton slot="interaction-controls" variant="secondary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>heart-outline</title>
            <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
          </svg>
          Add to favourites
        </IcButton>
        <IcButton slot="interaction-controls" variant="secondary">
          Hide
        </IcButton>
      </IcCardVertical>
    </div>
  );
};

export const AdditionalHeight = (): ReactElement => {
  return (
    <div style={{ margin: "16px" }}>
      <IcCardVertical
        heading="This is the card heading"
        subheading="This is the subheading"
        message="This is an example of a new card component with text included."
        style={{ width: "360px", height: "700px" }}
      >
        <IcStatusTag slot="adornment" label="Neutral" size="small" />
        <IcButton
          variant="icon"
          aria-label="More information"
          title="More information"
          slot="interaction-button"
        >
          <ReusableVerticalDotsIcon />
        </IcButton>
        <SlottedSVG
          slot="image-mid"
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
        <ReusableArrowIcon />
        <IcButton slot="interaction-controls" variant="primary">
          Learn more
        </IcButton>
        <IcButton slot="interaction-controls" variant="secondary">
          Hide
        </IcButton>
      </IcCardVertical>
    </div>
  );
};

export const Theme = (clickable?: boolean): ReactElement => {
  const ThemeCard = (theme: IcThemeMode = "inherit") => {
    return (
      <IcCardVertical
        heading="Americano order"
        subheading="Name: Michael"
        message="Extras: Double espresso shot and oat milk."
        clickable={clickable}
        theme={theme}
        expandable={!clickable}
      >
        <ReusableCoffeeIcon />
      </IcCardVertical>
    );
  };
  return (
    <div style={{ padding: "16px" }}>
      <div style={{ margin: "16px" }}>
        <IcTypography style={{ marginBottom: "8px" }}>Inherit</IcTypography>
        {ThemeCard()}
      </div>
      <div style={{ margin: "16px" }}>
        <IcTypography style={{ marginBottom: "8px" }}>Light</IcTypography>
        {ThemeCard("light")}
      </div>
      <div style={{ backgroundColor: "#121212", margin: "16px" }}>
        <IcTypography style={{ color: "white", marginBottom: "8px" }}>
          Dark
        </IcTypography>
        {ThemeCard("dark")}
      </div>
    </div>
  );
};
