/*! For license information please see components-ic-skip-link-ic-skip-link-stories.0b1e831f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1531,582,6199,6763],{"./src/components/ic-skip-link/ic-skip-link.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomTopPosition:()=>CustomTopPosition,Default:()=>Default,FullWidth:()=>FullWidth,HideBackground:()=>HideBackground,Inline:()=>Inline,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Skip link",component:"ic-skip-link"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-skip-link target="page-content"></ic-skip-link>
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
      <ic-button>Should receive next focus</ic-button>`,name:"Default"},FullWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-skip-link target="page-content" full-width="true"></ic-skip-link>
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
      <ic-button>Should receive next focus</ic-button>`,name:"Full width"},CustomTopPosition={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: flex; flex-direction: column; min-height: 100vh;">
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
      </script>`,name:"Custom top position",parameters:{layout:"fullscreen"}},Inline={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-skip-link target="page-content"></ic-skip-link>
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
      </div>`,name:"Inline",parameters:{layout:"fullscreen"}},HideBackground={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-skip-link
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
      <ic-button>Should receive next focus</ic-button>`,name:"Hide background"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-skip-link
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
      <ic-button>Should receive next focus</ic-button>`,args:{fullWidth:!1,inline:!1,label:"Skip to main content",monochrome:!1,target:"",theme:"inherit",transparentBackground:!1},argTypes:{theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","FullWidth","CustomTopPosition","Inline","HideBackground","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-skip-link target="page-content"></ic-skip-link>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <main id="page-content">Target element</main>\n      <ic-button>Should receive next focus</ic-button>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-skip-link target="page-content" full-width="true"></ic-skip-link>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <main id="page-content">Target element</main>\n      <ic-button>Should receive next focus</ic-button>`,\n  name: "Full width"\n}',...FullWidth.parameters?.docs?.source}}},CustomTopPosition.parameters={...CustomTopPosition.parameters,docs:{...CustomTopPosition.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="display: flex; flex-direction: column; min-height: 100vh;">\n        <div\n          id="cookie-banner"\n          aria-label="cookies banner"\n          role="region"\n          style="background: var(--ic-architectural-60); box-shadow: var(--ic-elevation-modal); z-index: var(--ic-z-index-classification-banner); position: sticky; top: 0; width: 100%; padding: var(--ic-space-md) 0"\n        >\n          <ic-section-container full-height aligned="full-width">\n            <ic-typography variant="h2">\n              Cookies and Storage on this site\n            </ic-typography>\n            <ic-typography variant="body">\n              We’d like to use analytics cookies to understand how you use the\n              Design System, so that we can make improvements. Additionally, we\n              use local storage to improve your experience by remembering your\n              preferences.\n            </ic-typography>\n            <div\n              className="buttons"\n              style="display: grid; column-gap: var(--ic-space-md); grid-template-columns: auto auto auto; justify-content: start; align-items: center; padding: var(--ic-space-md) 0 var(--ic-space-xs);"\n            >\n              <ic-button onclick="closeCookieBanner()"> Accept </ic-button>\n              <ic-button variant="secondary" onclick="closeCookieBanner()">\n                Decline\n              </ic-button>\n              <ic-link href=""> Manage preferences </ic-link>\n            </div>\n          </ic-section-container>\n        </div>\n        <ic-skip-link target="page-content"></ic-skip-link>\n        <ic-top-navigation\n          app-title="Application Name"\n          status="alpha"\n          version="v0.0.7"\n          content-aligned="center"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-search-bar\n            slot="search"\n            placeholder="Search"\n            label="Search"\n          ></ic-search-bar>\n          <ic-navigation-button\n            label="button1"\n            slot="buttons"\n            onclick="alert(\'test\')"\n          >\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n          </ic-navigation-button>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-group\n            slot="navigation"\n            label="Navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item\n              label="Navigation"\n              href="/"\n            ></ic-navigation-item>\n            <ic-navigation-item\n              label="Navigation"\n              href="/"\n            ></ic-navigation-item>\n          </ic-navigation-group>\n        </ic-top-navigation>\n        <main style="height: 100%">\n          <ic-section-container aligned="center" id="page-content">\n            <ic-typography\n              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus\n              ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin\n              sit amet augue sit amet dui suscipit lobortis. Nullam at\n              consectetur ante. Suspendisse mollis ultricies porttitor. Nunc\n              laoreet leo tortor, ut tristique odio finibus a. In rutrum\n              convallis purus, vitae tristique tortor sagittis vel. Donec dictum\n              nunc a elit tristique, et facilisis est condimentum. Pellentesque\n              maximus nulla libero, nec auctor urna consequat nec. Class aptent\n              taciti sociosqu ad litora torquent per conubia nostra, per\n              inceptos himenaeos. In maximus velit a erat volutpat, sit amet\n              consequat velit rhoncus. Mauris pretium neque eget ante\n              consectetur consectetur. Morbi a consequat lectus. Donec venenatis\n              ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium\n              id, efficitur nec leo.</ic-typography\n            >\n            <br />\n            <ic-skip-link\n              label="Skip to options"\n              target="page-content"\n              inline="true"\n            ></ic-skip-link>\n            <br />\n            <ic-typography\n              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus\n              ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin\n              sit amet augue sit amet dui suscipit lobortis. Nullam at\n              consectetur ante. Suspendisse mollis ultricies porttitor. Nunc\n              laoreet leo tortor, ut tristique odio finibus a. In rutrum\n              convallis purus, vitae tristique tortor sagittis vel. Donec dictum\n              nunc a elit tristique, et facilisis est condimentum. Pellentesque\n              maximus nulla libero, nec auctor urna consequat nec. Class aptent\n              taciti sociosqu ad litora torquent per conubia nostra, per\n              inceptos himenaeos. In maximus velit a erat volutpat, sit amet\n              consequat velit rhoncus. Mauris pretium neque eget ante\n              consectetur consectetur. Morbi a consequat lectus. Donec venenatis\n              ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium\n              id, efficitur nec leo.</ic-typography\n            >\n            <div id="options">\n              <ic-checkbox-group label="This is a label" required name="group1">\n                <ic-checkbox\n                  value="valueName1"\n                  label="Unselected / Default"\n                ></ic-checkbox>\n                <ic-checkbox\n                  value="valueName2"\n                  label="Selected / Default"\n                  checked\n                ></ic-checkbox>\n                <ic-checkbox\n                  value="valueName3"\n                  label="Unselected / Disabled"\n                  Disabled\n                ></ic-checkbox>\n              </ic-checkbox-group>\n            </div>\n          </ic-section-container>\n        </main>\n        <ic-footer\n          aligned="full-width"\n          description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n        please get in touch."\n          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        ></ic-footer>\n      </div>\n      <script>\n        const debounce = (func, delay) => {\n          let timeout;\n          return (...args) => {\n            clearTimeout(timeout);\n            timeout = setTimeout(() => func(...args), delay);\n          };\n        };\n        const updateSkipLinkPosition = () => {\n          const cookieBanner = document.getElementById("cookie-banner");\n          const skipLink = document.querySelector("ic-skip-link");\n          if (cookieBanner && skipLink) {\n            requestAnimationFrame(() => {\n              const bannerHeight = cookieBanner.offsetHeight;\n              skipLink.style.setProperty(\n                "--ic-skip-link-position-top",\n                bannerHeight + 12 + "px"\n              );\n            });\n          }\n        };\n        const observeHydration = () => {\n          const cookieBanner = document.getElementById("cookie-banner");\n          const sectionContainer = cookieBanner?.querySelector(\n            "ic-section-container"\n          );\n          if (sectionContainer) {\n            const observer = new MutationObserver((mutationsList) => {\n              for (const mutation of mutationsList) {\n                if (\n                  mutation.type === "attributes" &&\n                  mutation.attributeName === "class" &&\n                  sectionContainer.classList.contains("hydrated")\n                ) {\n                  updateSkipLinkPosition();\n                  observer.disconnect();\n                }\n              }\n            });\n            observer.observe(sectionContainer, { attributes: true });\n          }\n        };\n        document.addEventListener("DOMContentLoaded", () => {\n          observeHydration();\n          const debouncedResize = debounce(updateSkipLinkPosition, 100);\n          window.addEventListener("resize", debouncedResize);\n        });\n        const closeCookieBanner = () => {\n          const cookieBanner = document.getElementById("cookie-banner");\n          cookieBanner.style.setProperty("display", "none");\n          updateSkipLinkPosition();\n        };\n      <\/script>`,\n  name: "Custom top position",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...CustomTopPosition.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-skip-link target="page-content"></ic-skip-link>\n      <div>\n        <div style="display: flex; flex-direction: column; min-height: 100vh;">\n          <ic-top-navigation\n            app-title="Application Name"\n            status="alpha"\n            version="v0.0.7"\n            content-aligned="center"\n          >\n            <svg\n              slot="app-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n            <ic-search-bar\n              slot="search"\n              placeholder="Search"\n              label="Search"\n            ></ic-search-bar>\n            <ic-navigation-button\n              label="button1"\n              slot="buttons"\n              onclick="alert(\'test\')"\n            >\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n                fill="#000000"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n                />\n              </svg>\n            </ic-navigation-button>\n            <ic-navigation-item\n              slot="navigation"\n              label="Navigation"\n              href="/"\n            ></ic-navigation-item>\n            <ic-navigation-group\n              slot="navigation"\n              label="Navigation group"\n              expandable="true"\n            >\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n            </ic-navigation-group>\n          </ic-top-navigation>\n          <main style="height: 100%">\n            <ic-section-container aligned="center" id="page-content">\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus\n                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin\n                sit amet augue sit amet dui suscipit lobortis. Nullam at\n                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc\n                laoreet leo tortor, ut tristique odio finibus a. In rutrum\n                convallis purus, vitae tristique tortor sagittis vel. Donec\n                dictum nunc a elit tristique, et facilisis est condimentum.\n                Pellentesque maximus nulla libero, nec auctor urna consequat\n                nec. Class aptent taciti sociosqu ad litora torquent per conubia\n                nostra, per inceptos himenaeos. In maximus velit a erat\n                volutpat, sit amet consequat velit rhoncus. Mauris pretium neque\n                eget ante consectetur consectetur. Morbi a consequat lectus.\n                Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue,\n                laoreet id pretium id, efficitur nec leo.</ic-typography\n              >\n              <br />\n              <ic-skip-link\n                label="Skip to options"\n                target="page-content"\n                inline="true"\n              ></ic-skip-link>\n              <br />\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus\n                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin\n                sit amet augue sit amet dui suscipit lobortis. Nullam at\n                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc\n                laoreet leo tortor, ut tristique odio finibus a. In rutrum\n                convallis purus, vitae tristique tortor sagittis vel. Donec\n                dictum nunc a elit tristique, et facilisis est condimentum.\n                Pellentesque maximus nulla libero, nec auctor urna consequat\n                nec. Class aptent taciti sociosqu ad litora torquent per conubia\n                nostra, per inceptos himenaeos. In maximus velit a erat\n                volutpat, sit amet consequat velit rhoncus. Mauris pretium neque\n                eget ante consectetur consectetur. Morbi a consequat lectus.\n                Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue,\n                laoreet id pretium id, efficitur nec leo.</ic-typography\n              >\n              <div id="options">\n                <ic-checkbox-group\n                  label="This is a label"\n                  required\n                  name="group1"\n                >\n                  <ic-checkbox\n                    value="valueName1"\n                    label="Unselected / Default"\n                  ></ic-checkbox>\n                  <ic-checkbox\n                    value="valueName2"\n                    label="Selected / Default"\n                    checked\n                  ></ic-checkbox>\n                  <ic-checkbox\n                    value="valueName3"\n                    label="Unselected / Disabled"\n                    Disabled\n                  ></ic-checkbox>\n                </ic-checkbox-group>\n              </div>\n            </ic-section-container>\n          </main>\n        </div>\n        <ic-footer\n          aligned="full-width"\n          description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n          please get in touch."\n          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        ></ic-footer>\n      </div>`,\n  name: "Inline",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...Inline.parameters?.docs?.source}}},HideBackground.parameters={...HideBackground.parameters,docs:{...HideBackground.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-skip-link\n        target="page-content"\n        transparent-background="true"\n      ></ic-skip-link>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <main id="page-content">Target element</main>\n      <ic-button>Should receive next focus</ic-button>`,\n  name: "Hide background"\n}',...HideBackground.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-skip-link\n        full-width=${args.fullWidth}\n        inline=${args.inline}\n        label=${args.label}\n        monochrome=${args.monochrome}\n        target=${args.target}\n        theme=${args.theme}\n        transparent-background=${args.transparentBackground}\n      ></ic-skip-link>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <main id=${args.target}>Target element</main>\n      <ic-button>Should receive next focus</ic-button>`,\n  args: defaultArgs,\n  argTypes: {\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-skip-link-ic-skip-link-stories.0b1e831f.iframe.bundle.js.map