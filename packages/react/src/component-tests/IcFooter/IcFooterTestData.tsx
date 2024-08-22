import React, { useState } from "react";
import {
  IcFooter,
  IcFooterLink,
  IcFooterLinkGroup,
  IcTopNavigation,
  IcSectionContainer,
  IcTypography,
  IcClassificationBanner,
  IcTheme,
  IcButton,
} from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

export const Default = () => {
  return (
    <IcFooter
      description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
    </IcFooter>
  );
};

export const GroupedLinks = () => {
  return (
    <IcFooter
      groupLinks
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
            please get in touch."
    >
      <IcFooterLinkGroup slot="link" groupTitle="Grouped heading">
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
        <IcFooterLink href="/">Components</IcFooterLink>
        <IcFooterLink href="/">Patterns</IcFooterLink>
      </IcFooterLinkGroup>
      <IcFooterLinkGroup slot="link" groupTitle="Grouped heading">
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
        <IcFooterLink href="/">Components</IcFooterLink>
        <IcFooterLink href="/">Patterns</IcFooterLink>
      </IcFooterLinkGroup>
      <IcFooterLinkGroup slot="link" groupTitle="Grouped heading">
        <IcFooterLink href="/">Accessibility</IcFooterLink>
        <IcFooterLink href="/">Styles</IcFooterLink>
        <IcFooterLink href="/">Components</IcFooterLink>
        <IcFooterLink href="/">Patterns</IcFooterLink>
      </IcFooterLinkGroup>
    </IcFooter>
  );
};

export const ToggleGroupLinks = () => {
  return (
    <IcFooter description="Description" groupLinks>
      <IcFooterLinkGroup slot="link" groupTitle="Link group 1">
        <IcFooterLink href="/">Link 1</IcFooterLink>
        <IcFooterLink href="/">Link 2</IcFooterLink>
      </IcFooterLinkGroup>
      <IcFooterLinkGroup slot="link" groupTitle="Link group 2">
        <IcFooterLink href="/">Link 1</IcFooterLink>
        <IcFooterLink href="/">Link 2</IcFooterLink>
      </IcFooterLinkGroup>
    </IcFooter>
  );
};

export const CenterAlignment = () => {
  return (
    <IcFooter
      aligned="center"
      description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
    </IcFooter>
  );
};

export const FullWidth = () => {
  return (
    <IcFooter
      aligned="full-width"
      description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
    </IcFooter>
  );
};

export const ExtraSmall = () => {
  return (
    <IcFooter
      breakpoint="extra small"
      description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
    </IcFooter>
  );
};

export const ExtraLarge = () => {
  return (
    <IcFooter
      breakpoint="extra large"
      description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
    </IcFooter>
  );
};

export const LogoLinks = () => {
  return (
    <IcFooter description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, please get in touch.">
      {" "}
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
      <div slot="logo" style={{ display: "flex" }}>
        <IcFooterLink href="/">
          <SlottedSVG
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            />
          </SlottedSVG>
        </IcFooterLink>
        <IcFooterLink href="/">
          <SlottedSVG
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            />
          </SlottedSVG>
        </IcFooterLink>
      </div>
    </IcFooter>
  );
};

export const Layout = () => {
  return (
    <div className="footer-layout-root">
      <div style={{ minHeight: "100vh" }}>
        <IcTopNavigation appTitle="ICDS" status="alpha" version="v0.0.7">
          <SlottedSVG
            slot="app-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
          </SlottedSVG>
        </IcTopNavigation>
        <main>
          <IcSectionContainer>
            <IcTypography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum venenatis facilisis. Nam tortor felis, auctor vel ante
              quis, tempor interdum libero. In dictum sodales velit, eu egestas
              arcu dignissim ac. Aliquam facilisis eros dolor, id laoreet orci
              sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna
              interdum risus, vel fringilla libero ex eu dui. Suspendisse
              ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae
              congue ligula rutrum id.
            </IcTypography>
          </IcSectionContainer>
        </main>
      </div>
      <IcFooter
        description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <IcFooterLink slot="link" href="/">
          Accessibility
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Styles
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Components
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Patterns
        </IcFooterLink>
      </IcFooter>
    </div>
  );
};

export const NoCaptionCopyright = () => {
  return (
    <div style={{ padding: "5rem" }}>
      <IcFooter
        copyright={false}
        description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <IcFooterLink slot="link" href="/">
          Accessibility
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Styles
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Components
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Patterns
        </IcFooterLink>
      </IcFooter>
    </div>
  );
};

export const NoDescription = () => {
  return (
    <IcFooter caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence.">
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
    </IcFooter>
  );
};

export const NoCaption = () => {
  return (
    <IcFooter
      description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
      copyright={false}
    >
      <IcFooterLink slot="link" href="/">
        Accessibility
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Styles
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Components
      </IcFooterLink>
      <IcFooterLink slot="link" href="/">
        Patterns
      </IcFooterLink>
    </IcFooter>
  );
};

export const NoLinks = () => {
  return (
    <IcFooter
      description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    ></IcFooter>
  );
};

export const SlottedContent = () => {
  return (
    <IcFooter>
      <IcTypography slot="description">
        The UK Intelligence Community Design System (ICDS) is a joint project by
        MI6, GCHQ, MI5, and partners.
      </IcTypography>
      <IcTypography slot="caption">
        All content is available under the Open Government Licence v3.0, except
        source code and code examples which are available under the MIT Licence.
      </IcTypography>
    </IcFooter>
  );
};

export const WithClassificationBanner = () => {
  return (
    <>
      <IcClassificationBanner classification="official" />
      <IcFooter
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style={{ position: "fixed", bottom: "0", left: "0", right: "0" }}
      >
        <IcFooterLink slot="link" href="/">
          Get Started
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Accessibility
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Styles
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Components
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Patterns
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Design toolkit
        </IcFooterLink>
        <div
          slot="logo"
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--ic-theme-primary)",
            color: "var(--ic-theme-text)",
          }}
        >
          Logo
        </div>
        <div
          slot="logo"
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--ic-theme-primary)",
            color: "var(--ic-theme-text)",
          }}
        >
          Logo
        </div>
        <div
          slot="logo"
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--ic-theme-primary)",
            color: "var(--ic-theme-text)",
          }}
        >
          Logo
        </div>
      </IcFooter>
    </>
  );
};

export const Controlled = () => {
  const [color, setColour] = useState("rgb(255, 201, 60)");
  const defaultButtonClickHandler = () => {
    setColour("rgb(35, 81, 142)");
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
      <IcFooter
        aligned="full-width"
        group-links
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
        please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style={{ position: "fixed", bottom: "0", left: "0", right: "0" }}
      >
        <IcFooterLinkGroup slot="link" groupTitle="Links 1">
          <IcFooterLink href="/">Get Started</IcFooterLink>
          <IcFooterLink href="/">Accessibility</IcFooterLink>
          <IcFooterLink href="/">Styles</IcFooterLink>
          <IcFooterLink href="/">Components</IcFooterLink>
          <IcFooterLink href="/">Patterns</IcFooterLink>
          <IcFooterLink href="/">Design toolkit</IcFooterLink>
        </IcFooterLinkGroup>
        <IcFooterLinkGroup slot="link" groupTitle="Links 2">
          <IcFooterLink href="/">Get Started</IcFooterLink>
          <IcFooterLink href="/">Accessibility</IcFooterLink>
          <IcFooterLink href="/">Styles</IcFooterLink>
          <IcFooterLink href="/">Components</IcFooterLink>
          <IcFooterLink href="/">Patterns</IcFooterLink>
          <IcFooterLink href="/">Design toolkit</IcFooterLink>
        </IcFooterLinkGroup>
        <IcFooterLinkGroup slot="link" groupTitle="Links 3">
          <IcFooterLink href="/">Get Started</IcFooterLink>
          <IcFooterLink href="/">Accessibility</IcFooterLink>
          <IcFooterLink href="/">Styles</IcFooterLink>
          <IcFooterLink href="/">Components</IcFooterLink>
          <IcFooterLink href="/">Patterns</IcFooterLink>
          <IcFooterLink href="/">Design toolkit</IcFooterLink>
        </IcFooterLinkGroup>
        <div
          slot="logo"
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--ic-theme-primary)",
            color: "var(--ic-theme-text)",
          }}
        >
          Logo
        </div>
        <div
          slot="logo"
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--ic-theme-primary)",
            color: "var(--ic-theme-text)",
          }}
        >
          Logo
        </div>
        <div
          slot="logo"
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--ic-theme-primary)",
            color: "var(--ic-theme-text)",
          }}
        >
          Logo
        </div>
      </IcFooter>
    </>
  );
};
