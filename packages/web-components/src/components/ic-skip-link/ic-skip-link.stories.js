import { html } from "lit-html";

export default {
  title: "Web Components/Skip link",
  component: "ic-skip-link",
};

export const Default = {
  render: () =>
    html`<ic-skip-link target="page-content"></ic-skip-link>
      <ic-top-navigation app-title="Application Name">
        <svg
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
        </svg>
      </ic-top-navigation>
      <main id="page-content">Target element</main>
      <ic-button>Should receive next focus</ic-button>`,
  name: "Default",
};

export const FullWidth = {
  render: () =>
    html`<ic-skip-link target="page-content" full-width="true"></ic-skip-link>
      <ic-top-navigation app-title="Application Name">
        <svg
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
        </svg>
      </ic-top-navigation>
      <main id="page-content">Target element</main>
      <ic-button>Should receive next focus</ic-button>`,
  name: "Full width",
};

export const CustomTopPosition = {
  render: () =>
    html`<div style="display: flex; flex-direction: column; min-height: 100vh;">
        <div
          id="cookie-banner"
          aria-label="cookies banner"
          role="region"
          style="background: var(--ic-architectural-60); box-shadow: var(--ic-elevation-modal); z-index: var(--ic-z-index-classification-banner); position: sticky; top: 0; width: 100%; padding: var(--ic-space-md) 0"
        >
          <ic-section-container full-height aligned="full-width">
            <ic-typography variant="h2">
              Cookies and Storage on this site
            </ic-typography>
            <ic-typography variant="body">
              We’d like to use analytics cookies to understand how you use the
              Design System, so that we can make improvements. Additionally, we
              use local storage to improve your experience by remembering your
              preferences.
            </ic-typography>
            <div
              className="buttons"
              style="display: grid; column-gap: var(--ic-space-md); grid-template-columns: auto auto auto; justify-content: start; align-items: center; padding: var(--ic-space-md) 0 var(--ic-space-xs);"
            >
              <ic-button onclick="closeCookieBanner()"> Accept </ic-button>
              <ic-button variant="secondary" onclick="closeCookieBanner()">
                Decline
              </ic-button>
              <ic-link href=""> Manage preferences </ic-link>
            </div>
          </ic-section-container>
        </div>
        <ic-skip-link target="page-content"></ic-skip-link>
        <ic-top-navigation
          app-title="Application Name"
          status="alpha"
          version="v0.0.7"
          content-aligned="center"
        >
          <svg
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
          </svg>
          <ic-search-bar
            slot="search"
            placeholder="Search"
            label="Search"
          ></ic-search-bar>
          <ic-navigation-button
            label="button1"
            slot="buttons"
            onclick="alert('test')"
          >
            <svg
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
            </svg>
          </ic-navigation-button>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-group
            slot="navigation"
            label="Navigation group"
            expandable="true"
          >
            <ic-navigation-item
              label="Navigation"
              href="/"
            ></ic-navigation-item>
            <ic-navigation-item
              label="Navigation"
              href="/"
            ></ic-navigation-item>
          </ic-navigation-group>
        </ic-top-navigation>
        <main style="height: 100%">
          <ic-section-container aligned="center" id="page-content">
            <ic-typography
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
              id, efficitur nec leo.</ic-typography
            >
            <br />
            <ic-skip-link
              label="Skip to options"
              target="page-content"
              inline="true"
            ></ic-skip-link>
            <br />
            <ic-typography
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
              id, efficitur nec leo.</ic-typography
            >
            <div id="options">
              <ic-checkbox-group label="This is a label" required name="group1">
                <ic-checkbox
                  value="valueName1"
                  label="Unselected / Default"
                ></ic-checkbox>
                <ic-checkbox
                  value="valueName2"
                  label="Selected / Default"
                  checked
                ></ic-checkbox>
                <ic-checkbox
                  value="valueName3"
                  label="Unselected / Disabled"
                  Disabled
                ></ic-checkbox>
              </ic-checkbox-group>
            </div>
          </ic-section-container>
        </main>
        <ic-footer
          aligned="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
        please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        ></ic-footer>
      </div>
      <script>
        const debounce = (func, delay) => {
          let timeout;
          return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
          };
        };
        const updateSkipLinkPosition = () => {
          const cookieBanner = document.getElementById("cookie-banner");
          const skipLink = document.querySelector("ic-skip-link");
          if (cookieBanner && skipLink) {
            requestAnimationFrame(() => {
              const bannerHeight = cookieBanner.offsetHeight;
              skipLink.style.setProperty(
                "--ic-skip-link-position-top",
                bannerHeight + 12 + "px"
              );
            });
          }
        };
        const observeHydration = () => {
          const cookieBanner = document.getElementById("cookie-banner");
          const sectionContainer = cookieBanner?.querySelector(
            "ic-section-container"
          );
          if (sectionContainer) {
            const observer = new MutationObserver((mutationsList) => {
              for (const mutation of mutationsList) {
                if (
                  mutation.type === "attributes" &&
                  mutation.attributeName === "class" &&
                  sectionContainer.classList.contains("hydrated")
                ) {
                  updateSkipLinkPosition();
                  observer.disconnect();
                }
              }
            });
            observer.observe(sectionContainer, { attributes: true });
          }
        };
        document.addEventListener("DOMContentLoaded", () => {
          observeHydration();
          const debouncedResize = debounce(updateSkipLinkPosition, 100);
          window.addEventListener("resize", debouncedResize);
        });
        const closeCookieBanner = () => {
          const cookieBanner = document.getElementById("cookie-banner");
          cookieBanner.style.setProperty("display", "none");
          updateSkipLinkPosition();
        };
      </script>`,

  name: "Custom top position",
  parameters: {
    layout: "fullscreen",
  },
};

export const Inline = {
  render: () =>
    html`<ic-skip-link target="page-content"></ic-skip-link>
      <div>
        <div style="display: flex; flex-direction: column; min-height: 100vh;">
          <ic-top-navigation
            app-title="Application Name"
            status="alpha"
            version="v0.0.7"
            content-aligned="center"
          >
            <svg
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
            </svg>
            <ic-search-bar
              slot="search"
              placeholder="Search"
              label="Search"
            ></ic-search-bar>
            <ic-navigation-button
              label="button1"
              slot="buttons"
              onclick="alert('test')"
            >
              <svg
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
              </svg>
            </ic-navigation-button>
            <ic-navigation-item
              slot="navigation"
              label="Navigation"
              href="/"
            ></ic-navigation-item>
            <ic-navigation-group
              slot="navigation"
              label="Navigation group"
              expandable="true"
            >
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
            </ic-navigation-group>
          </ic-top-navigation>
          <main style="height: 100%">
            <ic-section-container aligned="center" id="page-content">
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus
                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin
                sit amet augue sit amet dui suscipit lobortis. Nullam at
                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc
                laoreet leo tortor, ut tristique odio finibus a. In rutrum
                convallis purus, vitae tristique tortor sagittis vel. Donec
                dictum nunc a elit tristique, et facilisis est condimentum.
                Pellentesque maximus nulla libero, nec auctor urna consequat
                nec. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. In maximus velit a erat
                volutpat, sit amet consequat velit rhoncus. Mauris pretium neque
                eget ante consectetur consectetur. Morbi a consequat lectus.
                Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue,
                laoreet id pretium id, efficitur nec leo.</ic-typography
              >
              <br />
              <ic-skip-link
                label="Skip to options"
                target="page-content"
                inline="true"
              ></ic-skip-link>
              <br />
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus
                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin
                sit amet augue sit amet dui suscipit lobortis. Nullam at
                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc
                laoreet leo tortor, ut tristique odio finibus a. In rutrum
                convallis purus, vitae tristique tortor sagittis vel. Donec
                dictum nunc a elit tristique, et facilisis est condimentum.
                Pellentesque maximus nulla libero, nec auctor urna consequat
                nec. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. In maximus velit a erat
                volutpat, sit amet consequat velit rhoncus. Mauris pretium neque
                eget ante consectetur consectetur. Morbi a consequat lectus.
                Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue,
                laoreet id pretium id, efficitur nec leo.</ic-typography
              >
              <div id="options">
                <ic-checkbox-group
                  label="This is a label"
                  required
                  name="group1"
                >
                  <ic-checkbox
                    value="valueName1"
                    label="Unselected / Default"
                  ></ic-checkbox>
                  <ic-checkbox
                    value="valueName2"
                    label="Selected / Default"
                    checked
                  ></ic-checkbox>
                  <ic-checkbox
                    value="valueName3"
                    label="Unselected / Disabled"
                    Disabled
                  ></ic-checkbox>
                </ic-checkbox-group>
              </div>
            </ic-section-container>
          </main>
        </div>
        <ic-footer
          aligned="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
          please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        ></ic-footer>
      </div>`,

  name: "Inline",
  parameters: {
    layout: "fullscreen",
  },
};

export const HideBackground = {
  render: () =>
    html`<ic-skip-link
        target="page-content"
        transparent-background="true"
      ></ic-skip-link>
      <ic-top-navigation app-title="Application Name">
        <svg
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
        </svg>
      </ic-top-navigation>
      <main id="page-content">Target element</main>
      <ic-button>Should receive next focus</ic-button>`,
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
  render: (args) =>
    html`<ic-skip-link
        full-width=${args.fullWidth}
        inline=${args.inline}
        label=${args.label}
        monochrome=${args.monochrome}
        target=${args.target}
        theme=${args.theme}
        transparent-background=${args.transparentBackground}
      ></ic-skip-link>
      <ic-top-navigation app-title="Application Name">
        <svg
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
        </svg>
      </ic-top-navigation>
      <main id=${args.target}>Target element</main>
      <ic-button>Should receive next focus</ic-button>`,

  args: defaultArgs,

  argTypes: {
    theme: {
      options: ["inherit", "light", "dark"],
      control: { type: "inline-radio" },
    },
  },

  name: "Playground",
};
