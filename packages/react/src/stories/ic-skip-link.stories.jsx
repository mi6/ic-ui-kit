/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from "react";
import {
  IcButton,
  IcSkipLink,
  IcTopNavigation,
  IcNavigationButton,
  IcNavigationItem,
  IcSearchBar,
  IcNavigationGroup,
  IcSectionContainer,
  IcTypography,
  IcCheckboxGroup,
  IcCheckbox,
  IcFooter,
  IcLink,
} from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

export default {
  title: "Skip link",
  component: IcSkipLink,
};

export const Default = {
  render: () => (
    <>
      <IcSkipLink target="page-content" />
      <IcTopNavigation appTitle="Application Name">
        <SlottedSVG
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </SlottedSVG>
      </IcTopNavigation>
      <main id="page-content">Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>
  ),
  name: "Default",
};

export const FullWidth = {
  render: () => (
    <>
      <IcSkipLink target="page-content" fullWidth />
      <IcTopNavigation appTitle="Application Name">
        <SlottedSVG
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </SlottedSVG>
      </IcTopNavigation>
      <main id="page-content">Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>
  ),
  name: "Full width",
};

export const CustomTopPosition = {
  render: () => {
    const cookieBannerRef = useRef();
    const skipLinkRef = useRef();
    const debounce = (func, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    };
    const updateSkipLinkPosition = () => {
      const cookieBanner = cookieBannerRef?.current;
      const skipLink = skipLinkRef?.current;
      if (cookieBanner && skipLink) {
        requestAnimationFrame(() => {
          const bannerHeight = cookieBanner.offsetHeight;
          console.log({bannerHeight})
          skipLink.style.setProperty("--ic-skip-link-position-top", `${bannerHeight + 12}px`);
        });
      }
    };
    const observeHydration = () => {
      const cookieBanner = cookieBannerRef?.current;
      const sectionContainer = cookieBanner?.querySelector("ic-section-container");
      if (sectionContainer) {
        const observer = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
            if (
              mutation.type === "attributes" &&
              mutation.attributeName === "class" &&
              sectionContainer.classList.contains("hydrated")
            ) {
              updateSkipLinkPosition(cookieBannerRef, skipLinkRef);
              observer.disconnect();
            }
          }
        });
        observer.observe(sectionContainer, { attributes: true });
      }
    };
    const useSkipLinkPosition = () => {
      useEffect(() => {
        observeHydration(cookieBannerRef, skipLinkRef);
        const debouncedResize = debounce(() => updateSkipLinkPosition(cookieBannerRef, skipLinkRef), 100);
        window.addEventListener("resize", debouncedResize);
        updateSkipLinkPosition(cookieBannerRef, skipLinkRef);
        return () => {
          window.removeEventListener("resize", debouncedResize);
        };
      }, [cookieBannerRef, skipLinkRef]);
    };
    const closeCookieBanner = () => {
      const cookieBanner = cookieBannerRef?.current;
      console.log(cookieBanner)
      if (cookieBannerRef?.current) {
        cookieBannerRef.current.style.setProperty("display", "none");
        updateSkipLinkPosition(cookieBannerRef, skipLinkRef);
      }
    };
    useSkipLinkPosition();
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div
          id="cookie-banner"
          aria-label="cookies banner"
          role="region"
          ref={cookieBannerRef}
          style={{
            background: "var(--ic-architectural-60)",
            boxShadow: "var(--ic-elevation-modal)",
            zIndex: "var(--ic-z-index-classification-banner)",
            position: "sticky",
            top: "0",
            width: "100%",
            padding: "var(--ic-space-md) 0" }}
        >
          <IcSectionContainer fullHeight aligned="full-width">
            <IcTypography variant="h2">
              Cookies and Storage on this site
            </IcTypography>
            <IcTypography variant="body">
              We’d like to use analytics cookies to understand how you use the
              Design System, so that we can make improvements. Additionally, we
              use local storage to improve your experience by remembering your
              preferences.
            </IcTypography>
            <div
              className="buttons"
              style={{
                display: "grid",
                columnGap: "var(--ic-space-md)",
                gridTemplateColumns: "auto auto auto",
                justifyContent: "start",
                alignItems: "center",
                padding: "var(--ic-space-md) 0 var(--ic-space-xs)"
              }}
            >
              <IcButton onClick={closeCookieBanner}>Accept</IcButton>
              <IcButton variant="secondary" onClick={closeCookieBanner}>
                Decline
              </IcButton>
              <IcLink href="#">Manage preferences</IcLink>
            </div>
          </IcSectionContainer>
        </div>
        <IcSkipLink target="page-content" ref={skipLinkRef}></IcSkipLink>
        <IcTopNavigation
          appTitle="Application Name"
          status="alpha"
          version="v0.0.7"
          contentAligned="center"
        >
          <SlottedSVG
            slot="app-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
            />
          </SlottedSVG>
          <IcSearchBar
            slot="search"
            placeholder="Search"
            label="Search"
          ></IcSearchBar>
          <IcNavigationButton
            label="button1"
            slot="buttons"
          >
            <SlottedSVG
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
              />
            </SlottedSVG>
          </IcNavigationButton>
          <IcNavigationItem
            slot="navigation"
            label="Navigation"
            href="/"
          ></IcNavigationItem>
          <IcNavigationGroup
            slot="navigation"
            label="Navigation group"
            expandable
          >
            <IcNavigationItem
              label="Navigation"
              href="/"
            ></IcNavigationItem>
            <IcNavigationItem
              label="Navigation"
              href="/"
            ></IcNavigationItem>
          </IcNavigationGroup>
        </IcTopNavigation>
        <main style={{ height: "100%" }}>
          <IcSectionContainer aligned="center" id="page-content">
            <IcTypography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus
              ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin
              sit amet augue sit amet dui suscipit lobortis. Nullam at
              consectetur ante. Suspendisse mollis ultricies porttitor. Nunc
              laoreet leo tortor, ut tristique odio finibus a. In rutrum
              convallis purus, vitae tristique tortor sagittis vel. Donec dictum
              nunc a elit tristique, et facilisis est condimentum. Pellentesque
              maximus nulla libero, nec auctor urna consequat nec. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. In maximus velit a erat volutpat, sit amet
              consequat velit rhoncus. Mauris pretium neque eget ante
              consectetur consectetur. Morbi a consequat lectus. Donec venenatis
              ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium
              id, efficitur nec leo.
            </IcTypography>
            <br />
            <IcSkipLink
              label="Skip to options"
              target="options"
              inline
            ></IcSkipLink>
            <br />
            <IcTypography
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus
              ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin
              sit amet augue sit amet dui suscipit lobortis. Nullam at
              consectetur ante. Suspendisse mollis ultricies porttitor. Nunc
              laoreet leo tortor, ut tristique odio finibus a. In rutrum
              convallis purus, vitae tristique tortor sagittis vel. Donec dictum
              nunc a elit tristique, et facilisis est condimentum. Pellentesque
              maximus nulla libero, nec auctor urna consequat nec. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. In maximus velit a erat volutpat, sit amet
              consequat velit rhoncus. Mauris pretium neque eget ante
              consectetur consectetur. Morbi a consequat lectus. Donec venenatis
              ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium
              id, efficitur nec leo.
            </IcTypography>
            <br />
            <IcButton>Button</IcButton>
            <br />
            <br />
            <div id="options">
              <IcCheckboxGroup label="This is a label" required name="group1">
                <IcCheckbox
                  value="valueName1"
                  label="Unselected / Default"
                ></IcCheckbox>
                <IcCheckbox
                  value="valueName2"
                  label="Selected / Default"
                  checked
                ></IcCheckbox>
                <IcCheckbox
                  value="valueName3"
                  label="Unselected / Disabled"
                  disabled
                ></IcCheckbox>
              </IcCheckboxGroup>
            </div>
          </IcSectionContainer>
        </main>
        <IcFooter
          aligned="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
        please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        />
      </div>)},

  name: "Custom top position",
  parameters: {
    layout: "fullscreen",
  },
};

export const Inline = {
  render: () => (
    <>
      <IcSkipLink target="page-content" />
      <div>
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
        <IcTopNavigation appTitle="Application Name">
          <SlottedSVG
            slot="app-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
            />
          </SlottedSVG>
          <IcSearchBar
              slot="search"
              placeholder="Search"
              label="Search"
            ></IcSearchBar>
            <IcNavigationButton
              label="button1"
              slot="buttons"
            >
              <SlottedSVG
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
                />
              </SlottedSVG>
            </IcNavigationButton>
            <IcNavigationItem
              slot="navigation"
              label="Navigation"
              href="/"
            ></IcNavigationItem>
            <IcNavigationGroup
              slot="navigation"
              label="Navigation group"
              expandable
            >
              <IcNavigationItem
                label="Navigation"
                href="/"
              ></IcNavigationItem>
              <IcNavigationItem
                label="Navigation"
                href="/"
              ></IcNavigationItem>
            </IcNavigationGroup>
        </IcTopNavigation>
        <main style={{ height: "100%" }}>
            <IcSectionContainer aligned="center" id="page-content">
              <IcTypography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus
                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin
                sit amet augue sit amet dui suscipit lobortis. Nullam at
                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc
                laoreet leo tortor, ut tristique odio finibus a. In rutrum
                convallis purus, vitae tristique tortor sagittis vel. Donec dictum
                nunc a elit tristique, et facilisis est condimentum. Pellentesque
                maximus nulla libero, nec auctor urna consequat nec. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. In maximus velit a erat volutpat, sit amet
                consequat velit rhoncus. Mauris pretium neque eget ante
                consectetur consectetur. Morbi a consequat lectus. Donec venenatis
                ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium
                id, efficitur nec leo.
              </IcTypography>
              <br />
              <IcSkipLink label="Skip to options" target="options" inline />
              <br />
              <IcTypography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus
                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin
                sit amet augue sit amet dui suscipit lobortis. Nullam at
                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc
                laoreet leo tortor, ut tristique odio finibus a. In rutrum
                convallis purus, vitae tristique tortor sagittis vel. Donec dictum
                nunc a elit tristique, et facilisis est condimentum. Pellentesque
                maximus nulla libero, nec auctor urna consequat nec. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. In maximus velit a erat volutpat, sit amet
                consequat velit rhoncus. Mauris pretium neque eget ante
                consectetur consectetur. Morbi a consequat lectus. Donec venenatis
                ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium
                id, efficitur nec leo.
              </IcTypography>
              <br />
              <IcButton>Button</IcButton>
              <br />
              <br />
              <div id="options">
              <IcCheckboxGroup label="This is a label" required name="group1">
                  <IcCheckbox
                    value="valueName1"
                    label="Unselected / Default"
                  ></IcCheckbox>
                  <IcCheckbox
                    value="valueName2"
                    label="Selected / Default"
                    checked
                  ></IcCheckbox>
                  <IcCheckbox
                    value="valueName3"
                    label="Unselected / Disabled"
                    disabled
                  ></IcCheckbox>
                </IcCheckboxGroup>
              </div>
            </IcSectionContainer>
          </main>
        </div>
        <IcFooter
          aligned="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
            please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        />
      </div>
    </>
  ),
  name: "Inline",
  parameters: {
    layout: "fullscreen",
  },
};

export const HideBackground = {
  render: () => (
    <>
      <IcSkipLink target="page-content" transparentBackground />
      <IcTopNavigation appTitle="Application Name">
        <SlottedSVG
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </SlottedSVG>
      </IcTopNavigation>
      <main id="page-content">Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>
  ),
  name: "Hide background",
};

const defaultArgs = {
  fullWidth: false,
  inline: false,
  label: "Skip to main content",
  monochrome: false,
  target: "",
  theme: "inherit",
  transparentBackground: false,
};

export const Playground = {
  render: (args) => (
    <>
      <IcSkipLink
        fullWidth={args.fullWidth}
        inline={args.inline}
        label={args.label}
        monochrome={args.monochrome}
        target={args.target}
        theme={args.theme}
        transparentBackground={args.transparentBackground}
      />
      <IcTopNavigation appTitle="Application Name">
        <SlottedSVG
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </SlottedSVG>
      </IcTopNavigation>
      <main id={args.target}>Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>
  ),
  args: defaultArgs,
  argTypes: {
    theme: {
      options: ["inherit", "light", "dark"],
      control: { type: "inline-radio" },
    },
  },
  name: "Playground"
};
