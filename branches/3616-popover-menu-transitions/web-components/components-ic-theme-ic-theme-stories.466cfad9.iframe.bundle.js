/*! For license information please see components-ic-theme-ic-theme-stories.466cfad9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6441,582,6199,6763],{"./src/components/ic-theme/ic-theme.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,SwitchBrand:()=>SwitchBrand,ThemeVisualisationPlayground:()=>ThemeVisualisationPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Theme",component:"ic-theme"},SwitchBrand={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-theme brand-color="rgba(27, 60, 121, 1)">
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').brandColor='rgb(27, 60, 121)'"
      >
        Default brand
      </ic-button>
      <ic-button
        variant="primary"
        id="custom-btn"
        onClick="document.querySelector('ic-theme').brandColor='rgba(255, 201, 60, 1)'"
      >
        Sunrise brand
      </ic-button>
      <div style="padding-top:10px">
        <ic-top-navigation
          app-title="ApplicationName"
          status="alpha"
          version="v0.0.7"
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
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
            selected="true"
          ></ic-navigation-item>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
        </ic-top-navigation>
        <ic-hero
          heading="Hero heading"
          subheading="Hero description. This is a Hero component, it should be used as a page heading."
          secondary-heading="Secondary Heading"
          secondary-subheading="This is a secondary description."
          full-width
        >
          <div slot="interaction" style="display: flex">
            <ic-text-field
              placeholder="Filter display"
              label="Filter display"
              hide-label
            ></ic-text-field>
            <ic-button variant="primary" style="margin-left:16px"
              >Filter</ic-button
            >
          </div>
          <ic-button variant="secondary" slot="interaction">See all</ic-button>
          <ic-link
            href="https://google.com"
            slot="interaction"
            style="margin-top:10px"
            >Help</ic-link
          >
        </ic-hero>
        <ic-alert
          heading="This alert uses a custom message slot"
          dismissible="true"
          ><ic-button slot="action" variant="secondary">Button</ic-button>
          <ic-typography variant="body" slot="message">
            <p>
              This is some text and
              <ic-link href="/" inline> this is an inline link</ic-link> within
              the text.
            </p>
          </ic-typography>
        </ic-alert>
        <ic-footer
          align="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
          <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
          <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
          <ic-footer-link slot="link" href="/">Components</ic-footer-link>
          <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
          <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
          <div
            slot="logo"
            style="display:flex; align-items:center; gap:var(--ic-space-sm);"
          >
            <ic-button>Slotted Button</ic-button>
            <ic-footer-link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
                />
              </svg>
            </ic-footer-link>
          </div>
        </ic-footer>
      </div>
    </ic-theme>`,name:"Switch brand"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-theme brand-color=${args.brandColor} theme=${args.theme}>
      <div style="padding-top:10px">
        <ic-top-navigation
          app-title="ApplicationName"
          status="alpha"
          version="v0.0.7"
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
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
            selected="true"
          ></ic-navigation-item>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
        </ic-top-navigation>
        <ic-hero
          heading="Hero heading"
          subheading="Hero description. This is a Hero component, it should be used as a page heading."
          secondary-heading="Secondary Heading"
          secondary-subheading="This is a secondary description."
          full-width
        >
          <div slot="interaction" style="display: flex">
            <ic-text-field
              placeholder="Filter display"
              label="Filter display"
              hide-label
            ></ic-text-field>
            <ic-button variant="primary" style="margin-left:16px"
              >Filter</ic-button
            >
          </div>
          <ic-button variant="secondary" slot="interaction">See all</ic-button>
          <ic-link
            href="https://google.com"
            slot="interaction"
            style="margin-top:10px"
            >Help</ic-link
          >
        </ic-hero>
        <ic-section-container
          style="display:flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-checkbox
            value="valueName1"
            label="Unselected / Default"
          ></ic-checkbox>
          <ic-text-field
            label="What is your favourite coffee?"
            required
            placeholder="Placeholder"
            helper-text="Such as Arabica, Robusta or Liberica"
          >
          </ic-text-field>
          <ic-alert
            heading="This alert uses a custom message slot"
            dismissible="true"
            ><ic-button slot="action" variant="secondary">Button</ic-button>
            <ic-typography variant="body" slot="message">
              <p>
                This is some text and
                <ic-link href="/" inline> this is an inline link</ic-link>
                within the text.
              </p>
            </ic-typography>
          </ic-alert>
          <ic-card-vertical
            heading="This is the card heading"
          ></ic-card-vertical>
          <ic-text-field
            label="What is your favourite coffee?"
            required
            placeholder="Placeholder"
            helper-text="Such as Arabica, Robusta or Liberica"
          >
          </ic-text-field>
          <div style="background-color:#000000; border: 1px solid #ffffff;">
            <span style="color:#ffffff"
              >This content is in an ic-theme component with dark mode set</span
            >
            <ic-theme theme="dark">
              <ic-card-vertical
                heading="This is the card heading"
              ></ic-card-vertical>
              <ic-text-field
                label="What is your favourite coffee?"
                required
                placeholder="Placeholder"
                helper-text="Such as Arabica, Robusta or Liberica"
              >
              </ic-text-field>
            </ic-theme>
          </div>
        </ic-section-container>
        <ic-footer
          align="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
          <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
          <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
          <ic-footer-link slot="link" href="/">Components</ic-footer-link>
          <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
          <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
          <div
            slot="logo"
            style="display:flex; align-items:center; gap:var(--ic-space-sm);"
          >
            <ic-button>Slotted Button</ic-button>
            <ic-footer-link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
                />
              </svg>
            </ic-footer-link>
          </div>
        </ic-footer>
        <ic-back-to-top target="topEl"></ic-back-to-top>
      </div>
    </ic-theme>`,name:"Playground",args:{brandColor:"rgba(27, 60, 121, 1)",theme:"light"},parameters:{layout:"fullscreen"},argTypes:{theme:{options:["system","light","dark"],control:{type:"inline-radio"}}}},ThemeVisualisationPlayground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div
      style="background-color: ${"dark"==args.theme?"black":"light"==args.theme?"white":null};width:450px;height:150px"
    >
      <ic-theme theme=${args.theme}>
        <div
          style="background-color: ${"dark"==args.componentTheme?"black":"light"==args.componentTheme?"white":null};width:250px"
        >
          <ic-typography theme=${args.componentTheme}>Theme test</ic-typography>
        </div>
      </ic-theme>
    </div>`,name:"Theme visualisation playground",args:{theme:"light",componentTheme:"light"},parameters:{layout:"fullscreen"},argTypes:{theme:{options:["system","light","dark"],control:{type:"inline-radio"}},componentTheme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}},__namedExportsOrder=["SwitchBrand","Playground","ThemeVisualisationPlayground"];SwitchBrand.parameters={...SwitchBrand.parameters,docs:{...SwitchBrand.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-theme brand-color="rgba(27, 60, 121, 1)">\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'ic-theme\').brandColor=\'rgb(27, 60, 121)\'"\n      >\n        Default brand\n      </ic-button>\n      <ic-button\n        variant="primary"\n        id="custom-btn"\n        onClick="document.querySelector(\'ic-theme\').brandColor=\'rgba(255, 201, 60, 1)\'"\n      >\n        Sunrise brand\n      </ic-button>\n      <div style="padding-top:10px">\n        <ic-top-navigation\n          app-title="ApplicationName"\n          status="alpha"\n          version="v0.0.7"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-search-bar\n            slot="search"\n            placeholder="Search"\n            label="Search"\n          ></ic-search-bar>\n          <ic-navigation-button\n            label="button1"\n            slot="buttons"\n            onclick="alert(\'test\')"\n          >\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n          </ic-navigation-button>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n            selected="true"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n        </ic-top-navigation>\n        <ic-hero\n          heading="Hero heading"\n          subheading="Hero description. This is a Hero component, it should be used as a page heading."\n          secondary-heading="Secondary Heading"\n          secondary-subheading="This is a secondary description."\n          full-width\n        >\n          <div slot="interaction" style="display: flex">\n            <ic-text-field\n              placeholder="Filter display"\n              label="Filter display"\n              hide-label\n            ></ic-text-field>\n            <ic-button variant="primary" style="margin-left:16px"\n              >Filter</ic-button\n            >\n          </div>\n          <ic-button variant="secondary" slot="interaction">See all</ic-button>\n          <ic-link\n            href="https://google.com"\n            slot="interaction"\n            style="margin-top:10px"\n            >Help</ic-link\n          >\n        </ic-hero>\n        <ic-alert\n          heading="This alert uses a custom message slot"\n          dismissible="true"\n          ><ic-button slot="action" variant="secondary">Button</ic-button>\n          <ic-typography variant="body" slot="message">\n            <p>\n              This is some text and\n              <ic-link href="/" inline> this is an inline link</ic-link> within\n              the text.\n            </p>\n          </ic-typography>\n        </ic-alert>\n        <ic-footer\n          align="full-width"\n          description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        >\n          <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n          <div\n            slot="logo"\n            style="display:flex; align-items:center; gap:var(--ic-space-sm);"\n          >\n            <ic-button>Slotted Button</ic-button>\n            <ic-footer-link href="/">\n              <svg\n                xmlns="http://www.w3.org/2000/svg"\n                height="48px"\n                viewBox="0 0 24 24"\n                width="48px"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n                />\n              </svg>\n            </ic-footer-link>\n          </div>\n        </ic-footer>\n      </div>\n    </ic-theme>`,\n  name: "Switch brand"\n}',...SwitchBrand.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html` <ic-theme brand-color=${args.brandColor} theme=${args.theme}>\n      <div style="padding-top:10px">\n        <ic-top-navigation\n          app-title="ApplicationName"\n          status="alpha"\n          version="v0.0.7"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-search-bar\n            slot="search"\n            placeholder="Search"\n            label="Search"\n          ></ic-search-bar>\n          <ic-navigation-button\n            label="button1"\n            slot="buttons"\n            onclick="alert(\'test\')"\n          >\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n          </ic-navigation-button>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n            selected="true"\n          ></ic-navigation-item>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n        </ic-top-navigation>\n        <ic-hero\n          heading="Hero heading"\n          subheading="Hero description. This is a Hero component, it should be used as a page heading."\n          secondary-heading="Secondary Heading"\n          secondary-subheading="This is a secondary description."\n          full-width\n        >\n          <div slot="interaction" style="display: flex">\n            <ic-text-field\n              placeholder="Filter display"\n              label="Filter display"\n              hide-label\n            ></ic-text-field>\n            <ic-button variant="primary" style="margin-left:16px"\n              >Filter</ic-button\n            >\n          </div>\n          <ic-button variant="secondary" slot="interaction">See all</ic-button>\n          <ic-link\n            href="https://google.com"\n            slot="interaction"\n            style="margin-top:10px"\n            >Help</ic-link\n          >\n        </ic-hero>\n        <ic-section-container\n          style="display:flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-checkbox\n            value="valueName1"\n            label="Unselected / Default"\n          ></ic-checkbox>\n          <ic-text-field\n            label="What is your favourite coffee?"\n            required\n            placeholder="Placeholder"\n            helper-text="Such as Arabica, Robusta or Liberica"\n          >\n          </ic-text-field>\n          <ic-alert\n            heading="This alert uses a custom message slot"\n            dismissible="true"\n            ><ic-button slot="action" variant="secondary">Button</ic-button>\n            <ic-typography variant="body" slot="message">\n              <p>\n                This is some text and\n                <ic-link href="/" inline> this is an inline link</ic-link>\n                within the text.\n              </p>\n            </ic-typography>\n          </ic-alert>\n          <ic-card-vertical\n            heading="This is the card heading"\n          ></ic-card-vertical>\n          <ic-text-field\n            label="What is your favourite coffee?"\n            required\n            placeholder="Placeholder"\n            helper-text="Such as Arabica, Robusta or Liberica"\n          >\n          </ic-text-field>\n          <div style="background-color:#000000; border: 1px solid #ffffff;">\n            <span style="color:#ffffff"\n              >This content is in an ic-theme component with dark mode set</span\n            >\n            <ic-theme theme="dark">\n              <ic-card-vertical\n                heading="This is the card heading"\n              ></ic-card-vertical>\n              <ic-text-field\n                label="What is your favourite coffee?"\n                required\n                placeholder="Placeholder"\n                helper-text="Such as Arabica, Robusta or Liberica"\n              >\n              </ic-text-field>\n            </ic-theme>\n          </div>\n        </ic-section-container>\n        <ic-footer\n          align="full-width"\n          description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        >\n          <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n          <div\n            slot="logo"\n            style="display:flex; align-items:center; gap:var(--ic-space-sm);"\n          >\n            <ic-button>Slotted Button</ic-button>\n            <ic-footer-link href="/">\n              <svg\n                xmlns="http://www.w3.org/2000/svg"\n                height="48px"\n                viewBox="0 0 24 24"\n                width="48px"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n                />\n              </svg>\n            </ic-footer-link>\n          </div>\n        </ic-footer>\n        <ic-back-to-top target="topEl"></ic-back-to-top>\n      </div>\n    </ic-theme>`,\n  name: "Playground",\n  args: defaultArgs,\n  parameters: {\n    layout: "fullscreen"\n  },\n  argTypes: {\n    theme: {\n      options: ["system", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}},ThemeVisualisationPlayground.parameters={...ThemeVisualisationPlayground.parameters,docs:{...ThemeVisualisationPlayground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div\n      style="background-color: ${args.theme == "dark" ? "black" : args.theme == "light" ? "white" : null};width:450px;height:150px"\n    >\n      <ic-theme theme=${args.theme}>\n        <div\n          style="background-color: ${args.componentTheme == "dark" ? "black" : args.componentTheme == "light" ? "white" : null};width:250px"\n        >\n          <ic-typography theme=${args.componentTheme}>Theme test</ic-typography>\n        </div>\n      </ic-theme>\n    </div>`,\n  name: "Theme visualisation playground",\n  args: defaultThemeArgs,\n  parameters: {\n    layout: "fullscreen"\n  },\n  argTypes: {\n    theme: {\n      options: ["system", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    componentTheme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  }\n}',...ThemeVisualisationPlayground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-theme-ic-theme-stories.466cfad9.iframe.bundle.js.map