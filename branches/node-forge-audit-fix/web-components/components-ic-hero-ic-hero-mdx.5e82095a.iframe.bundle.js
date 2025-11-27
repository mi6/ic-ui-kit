/*! For license information please see components-ic-hero-ic-hero-mdx.5e82095a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8493,279,582,6199,6763],{"./src/components/ic-hero/ic-hero.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-hero\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                    | Attribute                     | Description                                                                                                                             | Type                                              | Default     |\n| --------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |\n| `aligned`                   | `aligned`                     | The alignment of the hero.                                                                                                              | `"center" \\| "full-width" \\| "left" \\| undefined` | `"left"`    |\n| `backgroundImage`           | `background-image`            | The optional background image.                                                                                                          | `string \\| undefined`                             | `undefined` |\n| `contentAligned`            | `content-aligned`             | The alignment of the hero content.                                                                                                      | `"center" \\| "left" \\| undefined`                 | `"left"`    |\n| `disableBackgroundParallax` | `disable-background-parallax` | If `true`, the background image (if set) will not scroll using a parallax effect.                                                       | `boolean \\| undefined`                            | `false`     |\n| `heading`                   | `heading`                     | The heading of the hero. An <h2> level heading.                                                                                         | `string \\| undefined`                             | `undefined` |\n| `secondaryHeading`          | `secondary-heading`           | The optional secondary heading, an <h3> level heading. Replaced by slotted right content.                                               | `string \\| undefined`                             | `undefined` |\n| `secondarySubheading`       | `secondary-subheading`        | The optional secondary subheading, replaced by slotted right content.                                                                   | `string \\| undefined`                             | `undefined` |\n| `size`                      | `size`                        | The size of the hero component.                                                                                                         | `"medium" \\| "small" \\| undefined`                | `"medium"`  |\n| `subheading`                | `subheading`                  | The description for the hero.                                                                                                           | `string \\| undefined`                             | `undefined` |\n| `theme`                     | `theme`                       | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"`                  | `"inherit"` |\n\n\n## Slots\n\n| Slot            | Description                                                                   |\n| --------------- | ----------------------------------------------------------------------------- |\n| `"heading"`     | Content will be rendered in the title area, in place of the heading.          |\n| `"interaction"` | Content will be rendered in the interaction area, adjacent to the title area. |\n| `"secondary"`   | Content will be rendered in the secondary content area.                       |\n| `"subheading"`  | Content will be rendered in the title area, in place of the subheading.       |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-section-container](../ic-section-container)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-hero --\x3e ic-section-container\n  ic-hero --\x3e ic-typography\n  style ic-hero fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_hero_stories=__webpack_require__("./src/components/ic-hero/ic-hero.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_hero_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-hero/ic-hero.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Brand:()=>Brand,CardRightContent:()=>CardRightContent,CenterAligned:()=>CenterAligned,ContentCenterAligned:()=>ContentCenterAligned,FullWidth:()=>FullWidth,ImageRightContent:()=>ImageRightContent,LeftAligned:()=>LeftAligned,LongHeading:()=>LongHeading,Playground:()=>Playground,SearchBarInteraction:()=>SearchBarInteraction,SecondaryHeading:()=>SecondaryHeading,SlottedHeadingAndSubheading:()=>SlottedHeadingAndSubheading,Small:()=>Small,WithBackgroundImageNoParallaxEffect:()=>WithBackgroundImageNoParallaxEffect,WithBackgroundImageParallaxEffect:()=>WithBackgroundImageParallaxEffect,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_hero_stories});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const example_background_namespaceObject=__webpack_require__.p+"static/media/example-background.3bf84892.png",ic_hero_stories={title:"Web Components/Hero",component:"ic-hero"},Playground={render:args=>lit_html.qy` <ic-hero
    aligned=${args.aligned}
    background-image=${args.backgroundImage}
    content-aligned=${args.contentAligned}
    disable-background-parallax=${args.disableBackgroundParallax}
    heading=${args.heading}
    secondary-heading=${args.secondaryHeading}
    secondary-subheading=${args.secondarySubheading}
    size=${args.size}
    subheading=${args.subheading}
    theme=${args.theme}
  >
    <ic-button variant="primary" slot="interaction"> Button </ic-button>
    <ic-button variant="secondary" slot="interaction"> Button </ic-button>
    ${args.showSecondary&&lit_html.qy`
      <ic-card-vertical
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      />
    `}
    <ic-text-field
      slot="interaction"
      label="Input"
      helper-text="This is an input"
      placeholder="Please enter…"
    />
  </ic-hero>`,args:{aligned:"left",backgroundImage:example_background_namespaceObject,contentAligned:"left",disableBackgroundParallax:!1,heading:"Hero heading",secondaryHeading:"Secondary Heading",secondarySubheading:"This is a secondary description.",size:"medium",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",showSecondary:!1,theme:"inherit"},name:"Playground",parameters:{layout:"fullscreen"},argTypes:{aligned:{options:["center","full-width","left"],control:{type:"select"}},contentAligned:{options:["center","left"],control:{type:"select"}},size:{options:["medium","small"],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}},LeftAligned={render:()=>lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
    </ic-hero>`,name:"Left aligned",parameters:{layout:"fullscreen"}},CenterAligned={render:()=>lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
    </ic-hero>`,name:"Center aligned",parameters:{layout:"fullscreen"}},SlottedHeadingAndSubheading={render:()=>lit_html.qy`<ic-hero>
      <ic-typography slot="heading" variant="h1">Slotted heading</ic-typography>
      <ic-typography slot="subheading">Slotted subheading</ic-typography>
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
    </ic-hero>`,name:"Slotted heading and subheading",parameters:{layout:"fullscreen"}},LongHeading={render:()=>lit_html.qy`<ic-hero
      heading="Hero heading. This is a Hero component, it should be used as a page heading."
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <ic-link
        href="https://google.com"
        slot="interaction"
        style="margin-top: var(--ic-space-sm)"
        >Help</ic-link
      >
      <ic-card-vertical
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></ic-card-vertical>
    </ic-hero>`,name:"Long heading",parameters:{layout:"fullscreen"}},FullWidth={render:()=>lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="full-width"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
    </ic-hero>`,name:"Full width",parameters:{layout:"fullscreen"}},ContentCenterAligned={render:()=>lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      content-aligned="center"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
    </ic-hero>`,name:"Content center aligned",parameters:{layout:"fullscreen"}},Small={render:()=>lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
      size="small"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
    </ic-hero>`,name:"Small",parameters:{layout:"fullscreen"}},SecondaryHeading={render:()=>lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      secondary-heading="Secondary Heading"
      secondary-subheading="This is a secondary description."
      aligned="center"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
    </ic-hero>`,name:"Secondary heading",parameters:{layout:"fullscreen"}},SearchBarInteraction={render:()=>lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-search-bar
        slot="interaction"
        full-width
        style="max-width: 322px;"
      ></ic-search-bar>
    </ic-hero>`,name:"Search bar interaction",parameters:{layout:"fullscreen"}},CardRightContent={render:()=>lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="full-width"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <ic-card-vertical
        heading="Latest announcement"
        message="This is some example text that can be included in the card copy."
        slot="secondary"
      ></ic-card-vertical>
    </ic-hero>`,name:"Card right content",parameters:{layout:"fullscreen"}},ImageRightContent={render:()=>lit_html.qy`<ic-hero
      heading="Hero heading"
      subheading="Hero description. This is a Hero component, it should be used as a page heading."
      aligned="center"
    >
      <ic-button variant="primary" slot="interaction">Button</ic-button>
      <ic-button variant="secondary" slot="interaction">Button</ic-button>
      <svg
        slot="secondary"
        style="width:300px;"
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
      </svg>
    </ic-hero>`,name:"Image right content",parameters:{layout:"fullscreen"}},Brand={render:()=>lit_html.qy`<ic-theme
        brand-color="rgb(255, 201, 60)"
        id="brand-story-ic-theme"
      ></ic-theme>
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        aligned="center"
      >
        <div slot="interaction" style="display: flex">
          <ic-text-field
            placeholder="Filter display"
            label="Filter display"
            hide-label
            full-width="true"
          ></ic-text-field>
          <ic-button variant="primary" style="margin-left: var(--ic-space-md)"
            >Filter</ic-button
          >
        </div>
        <ic-card-vertical
          heading="Latest announcement"
          message="This is some example text that can be included in the card copy."
          slot="secondary"
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
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-card-vertical>
      </ic-hero>
      <br />
      <ic-button variant="primary" id="default-btn" onClick="changeBrand()">
        Default brand
      </ic-button>
      <ic-button
        variant="primary"
        id="custom-btn"
        onClick="changeSunriseBrand()"
      >
        Sunrise brand
      </ic-button>
      <script>
        var theme = document.querySelector("#brand-story-ic-theme");
        function changeBrand() {
          theme.brandColor = "rgb(27, 60, 121)";
        }
        function changeSunriseBrand() {
          theme.brandColor = "rgb(255, 201, 60)";
        }
      </script>`,name:"Brand",parameters:{layout:"fullscreen"}},WithBackgroundImageParallaxEffect={render:()=>lit_html.qy`<ic-theme brand-color="rgb(27, 60, 121)"></ic-theme>
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
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        background-image="${example_background_namespaceObject}"
      >
        <div slot="interaction">
          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-button
            variant="secondary"
            style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-link
            href="https://google.com"
            style="margin-top: var(--ic-space-sm)"
            >Help</ic-link
          >
        </div>
      </ic-hero>
      <br />
      <ic-typography>You can scroll.</ic-typography>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').brandColor='rgb(27, 60, 121)'"
        style="margin-bottom:1300px"
      >
        Reset theme
      </ic-button>`,name:"With background image (parallax effect)",parameters:{layout:"fullscreen"}},WithBackgroundImageNoParallaxEffect={render:()=>lit_html.qy`<ic-theme brand-color="rgb(27, 60, 121)"></ic-theme>
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
      <ic-hero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        background-image="${example_background_namespaceObject}"
        disable-background-parallax
      >
        <div slot="interaction">
          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-button
            variant="secondary"
            style="margin-right: var(--ic-space-md)"
            >Button</ic-button
          >
          <ic-link
            href="https://google.com"
            style="margin-top: var(--ic-space-sm)"
            >Help</ic-link
          >
        </div>
      </ic-hero>
      <br />
      <ic-typography>You can scroll.</ic-typography>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').brandColor='rgb(27, 60, 121)'"
        style="margin-bottom:1300px"
      >
        Reset theme
      </ic-button>`,name:"With background image (no parallax effect)",parameters:{layout:"fullscreen"}},__namedExportsOrder=["Playground","LeftAligned","CenterAligned","SlottedHeadingAndSubheading","LongHeading","FullWidth","ContentCenterAligned","Small","SecondaryHeading","SearchBarInteraction","CardRightContent","ImageRightContent","Brand","WithBackgroundImageParallaxEffect","WithBackgroundImageNoParallaxEffect"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html` <ic-hero\n    aligned=${args.aligned}\n    background-image=${args.backgroundImage}\n    content-aligned=${args.contentAligned}\n    disable-background-parallax=${args.disableBackgroundParallax}\n    heading=${args.heading}\n    secondary-heading=${args.secondaryHeading}\n    secondary-subheading=${args.secondarySubheading}\n    size=${args.size}\n    subheading=${args.subheading}\n    theme=${args.theme}\n  >\n    <ic-button variant="primary" slot="interaction"> Button </ic-button>\n    <ic-button variant="secondary" slot="interaction"> Button </ic-button>\n    ${args.showSecondary && html`\n      <ic-card-vertical\n        heading="Latest announcement"\n        message="This is some example text that can be included in the card copy."\n        slot="secondary"\n      />\n    `}\n    <ic-text-field\n      slot="interaction"\n      label="Input"\n      helper-text="This is an input"\n      placeholder="Please enter…"\n    />\n  </ic-hero>`,\n  args: defaultArgs,\n  name: "Playground",\n  parameters: {\n    layout: "fullscreen"\n  },\n  argTypes: {\n    aligned: {\n      options: ["center", "full-width", "left"],\n      control: {\n        type: "select"\n      }\n    },\n    contentAligned: {\n      options: ["center", "left"],\n      control: {\n        type: "select"\n      }\n    },\n    size: {\n      options: ["medium", "small"],\n      control: {\n        type: "select"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}},LeftAligned.parameters={...LeftAligned.parameters,docs:{...LeftAligned.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n    >\n      <ic-button variant="primary" slot="interaction">Button</ic-button>\n      <ic-button variant="secondary" slot="interaction">Button</ic-button>\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n    </ic-hero>`,\n  name: "Left aligned",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...LeftAligned.parameters?.docs?.source}}},CenterAligned.parameters={...CenterAligned.parameters,docs:{...CenterAligned.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-button variant="primary" slot="interaction">Button</ic-button>\n      <ic-button variant="secondary" slot="interaction">Button</ic-button>\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n    </ic-hero>`,\n  name: "Center aligned",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...CenterAligned.parameters?.docs?.source}}},SlottedHeadingAndSubheading.parameters={...SlottedHeadingAndSubheading.parameters,docs:{...SlottedHeadingAndSubheading.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero>\n      <ic-typography slot="heading" variant="h1">Slotted heading</ic-typography>\n      <ic-typography slot="subheading">Slotted subheading</ic-typography>\n      <ic-button variant="primary" slot="interaction">Button</ic-button>\n      <ic-button variant="secondary" slot="interaction">Button</ic-button>\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n    </ic-hero>`,\n  name: "Slotted heading and subheading",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...SlottedHeadingAndSubheading.parameters?.docs?.source}}},LongHeading.parameters={...LongHeading.parameters,docs:{...LongHeading.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero\n      heading="Hero heading. This is a Hero component, it should be used as a page heading."\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-button variant="primary" slot="interaction">Button</ic-button>\n      <ic-button variant="secondary" slot="interaction">Button</ic-button>\n      <ic-link\n        href="https://google.com"\n        slot="interaction"\n        style="margin-top: var(--ic-space-sm)"\n        >Help</ic-link\n      >\n      <ic-card-vertical\n        heading="Latest announcement"\n        message="This is some example text that can be included in the card copy."\n        slot="secondary"\n      ></ic-card-vertical>\n    </ic-hero>`,\n  name: "Long heading",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...LongHeading.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="full-width"\n    >\n      <ic-button variant="primary" slot="interaction">Button</ic-button>\n      <ic-button variant="secondary" slot="interaction">Button</ic-button>\n    </ic-hero>`,\n  name: "Full width",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...FullWidth.parameters?.docs?.source}}},ContentCenterAligned.parameters={...ContentCenterAligned.parameters,docs:{...ContentCenterAligned.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n      content-aligned="center"\n    >\n      <ic-button variant="primary" slot="interaction">Button</ic-button>\n      <ic-button variant="secondary" slot="interaction">Button</ic-button>\n    </ic-hero>`,\n  name: "Content center aligned",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...ContentCenterAligned.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n      size="small"\n    >\n      <ic-button variant="primary" slot="interaction">Button</ic-button>\n      <ic-button variant="secondary" slot="interaction">Button</ic-button>\n    </ic-hero>`,\n  name: "Small",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...Small.parameters?.docs?.source}}},SecondaryHeading.parameters={...SecondaryHeading.parameters,docs:{...SecondaryHeading.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      secondary-heading="Secondary Heading"\n      secondary-subheading="This is a secondary description."\n      aligned="center"\n    >\n      <ic-button variant="primary" slot="interaction">Button</ic-button>\n      <ic-button variant="secondary" slot="interaction">Button</ic-button>\n    </ic-hero>`,\n  name: "Secondary heading",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...SecondaryHeading.parameters?.docs?.source}}},SearchBarInteraction.parameters={...SearchBarInteraction.parameters,docs:{...SearchBarInteraction.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-search-bar\n        slot="interaction"\n        full-width\n        style="max-width: 322px;"\n      ></ic-search-bar>\n    </ic-hero>`,\n  name: "Search bar interaction",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...SearchBarInteraction.parameters?.docs?.source}}},CardRightContent.parameters={...CardRightContent.parameters,docs:{...CardRightContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="full-width"\n    >\n      <ic-button variant="primary" slot="interaction">Button</ic-button>\n      <ic-button variant="secondary" slot="interaction">Button</ic-button>\n      <ic-card-vertical\n        heading="Latest announcement"\n        message="This is some example text that can be included in the card copy."\n        slot="secondary"\n      ></ic-card-vertical>\n    </ic-hero>`,\n  name: "Card right content",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...CardRightContent.parameters?.docs?.source}}},ImageRightContent.parameters={...ImageRightContent.parameters,docs:{...ImageRightContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-hero\n      heading="Hero heading"\n      subheading="Hero description. This is a Hero component, it should be used as a page heading."\n      aligned="center"\n    >\n      <ic-button variant="primary" slot="interaction">Button</ic-button>\n      <ic-button variant="secondary" slot="interaction">Button</ic-button>\n      <svg\n        slot="secondary"\n        style="width:300px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="900" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n    </ic-hero>`,\n  name: "Image right content",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...ImageRightContent.parameters?.docs?.source}}},Brand.parameters={...Brand.parameters,docs:{...Brand.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-theme\n        brand-color="rgb(255, 201, 60)"\n        id="brand-story-ic-theme"\n      ></ic-theme>\n      <ic-hero\n        heading="Hero heading"\n        subheading="Hero description. This is a Hero component, it should be used as a page heading."\n        aligned="center"\n      >\n        <div slot="interaction" style="display: flex">\n          <ic-text-field\n            placeholder="Filter display"\n            label="Filter display"\n            hide-label\n            full-width="true"\n          ></ic-text-field>\n          <ic-button variant="primary" style="margin-left: var(--ic-space-md)"\n            >Filter</ic-button\n          >\n        </div>\n        <ic-card-vertical\n          heading="Latest announcement"\n          message="This is some example text that can be included in the card copy."\n          slot="secondary"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-card-vertical>\n      </ic-hero>\n      <br />\n      <ic-button variant="primary" id="default-btn" onClick="changeBrand()">\n        Default brand\n      </ic-button>\n      <ic-button\n        variant="primary"\n        id="custom-btn"\n        onClick="changeSunriseBrand()"\n      >\n        Sunrise brand\n      </ic-button>\n      <script>\n        var theme = document.querySelector("#brand-story-ic-theme");\n        function changeBrand() {\n          theme.brandColor = "rgb(27, 60, 121)";\n        }\n        function changeSunriseBrand() {\n          theme.brandColor = "rgb(255, 201, 60)";\n        }\n      <\/script>`,\n  name: "Brand",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...Brand.parameters?.docs?.source}}},WithBackgroundImageParallaxEffect.parameters={...WithBackgroundImageParallaxEffect.parameters,docs:{...WithBackgroundImageParallaxEffect.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-theme brand-color="rgb(27, 60, 121)"></ic-theme>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <ic-hero\n        heading="Hero heading"\n        subheading="Hero description. This is a Hero component, it should be used as a page heading."\n        background-image="${image}"\n      >\n        <div slot="interaction">\n          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-button\n            variant="secondary"\n            style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-link\n            href="https://google.com"\n            style="margin-top: var(--ic-space-sm)"\n            >Help</ic-link\n          >\n        </div>\n      </ic-hero>\n      <br />\n      <ic-typography>You can scroll.</ic-typography>\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'ic-theme\').brandColor=\'rgb(27, 60, 121)\'"\n        style="margin-bottom:1300px"\n      >\n        Reset theme\n      </ic-button>`,\n  name: "With background image (parallax effect)",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...WithBackgroundImageParallaxEffect.parameters?.docs?.source}}},WithBackgroundImageNoParallaxEffect.parameters={...WithBackgroundImageNoParallaxEffect.parameters,docs:{...WithBackgroundImageNoParallaxEffect.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-theme brand-color="rgb(27, 60, 121)"></ic-theme>\n      <ic-top-navigation app-title="Application Name">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n      </ic-top-navigation>\n      <ic-hero\n        heading="Hero heading"\n        subheading="Hero description. This is a Hero component, it should be used as a page heading."\n        background-image="${image}"\n        disable-background-parallax\n      >\n        <div slot="interaction">\n          <ic-button variant="primary" style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-button\n            variant="secondary"\n            style="margin-right: var(--ic-space-md)"\n            >Button</ic-button\n          >\n          <ic-link\n            href="https://google.com"\n            style="margin-top: var(--ic-space-sm)"\n            >Help</ic-link\n          >\n        </div>\n      </ic-hero>\n      <br />\n      <ic-typography>You can scroll.</ic-typography>\n      <ic-button\n        variant="primary"\n        id="default-btn"\n        onClick="document.querySelector(\'ic-theme\').brandColor=\'rgb(27, 60, 121)\'"\n        style="margin-bottom:1300px"\n      >\n        Reset theme\n      </ic-button>`,\n  name: "With background image (no parallax effect)",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...WithBackgroundImageNoParallaxEffect.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-hero-ic-hero-mdx.5e82095a.iframe.bundle.js.map