/*! For license information please see components-ic-drawer-ic-drawer-stories-mdx.0333b423.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[4045],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-drawer/ic-drawer.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,bottomPosition:()=>bottomPosition,default:()=>ic_drawer_stories,defaultArgs:()=>defaultArgs,leftPosition:()=>leftPosition,manualTrigger:()=>manualTrigger,playground:()=>playground,rightPosition:()=>rightPosition,slottedContent:()=>slottedContent,topPosition:()=>topPosition});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const readme_namespaceObject='# ic-drawer\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute                   | Description                                                                                                                                                                                         | Type                                     | Default          |\n| ------------------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------- |\n| `ariaLabel`              | `aria-label`                | The aria label applied to the drawer. This is required when the heading slot is used.                                                                                                               | `string`                                 | `""`             |\n| `chevronButtonAriaLabel` | `chevron-button-aria-label` | The aria label of the chevron button when trigger is set to "arrow". The default aria label is "Open drawer" / "Close drawer".                                                                      | `string`                                 | `""`             |\n| `closeButtonAriaLabel`   | `close-button-aria-label`   | The aria label of the close button when the show-close-button attribute (web-components) / showCloseButton prop (React) is set to `true`. The default aria label is "Open drawer" / "Close drawer". | `string`                                 | `"Close drawer"` |\n| `closeOnBackdropClick`   | `close-on-backdrop-click`   | If set to `false`, the drawer will not close when the backdrop is clicked.                                                                                                                          | `boolean`                                | `true`           |\n| `expanded`               | `expanded`                  | If set to `true`, the drawer will display in an expanded state.                                                                                                                                     | `boolean`                                | `false`          |\n| `heading`                | `heading`                   | The heading to render in the drawer.                                                                                                                                                                | `string`                                 | `undefined`      |\n| `message`                | `message`                   | The main body text in the drawer.                                                                                                                                                                   | `string`                                 | `undefined`      |\n| `position`               | `position`                  | The position of the drawer.                                                                                                                                                                         | `"bottom" \\| "left" \\| "right" \\| "top"` | `"right"`        |\n| `showCloseButton`        | `show-close-button`         | If set to `true`, an X (close) button will be displayed in the drawer.                                                                                                                              | `boolean`                                | `false`          |\n| `size`                   | `size`                      | The size of the expanded drawer.                                                                                                                                                                    | `"large" \\| "medium" \\| "small"`         | `"medium"`       |\n| `trigger`                | `trigger`                   | The method in which the drawer is expanded.                                                                                                                                                         | `"arrow" \\| "controlled"`                | `"arrow"`        |\n| `variant`                | `variant`                   | The variant of the drawer. TODO - figure out how this works                                                                                                                                         | `"persistent" \\| "temporary"`            | `"temporary"`    |\n\n\n## Events\n\n| Event              | Description                                        | Type                                  |\n| ------------------ | -------------------------------------------------- | ------------------------------------- |\n| `icDrawerExpanded` | Emitted when the drawer is collapsed and expanded. | `CustomEvent<IcDrawerExpandedDetail>` |\n\n\n## Slots\n\n| Slot                  | Description                                                              |\n| --------------------- | ------------------------------------------------------------------------ |\n| `"actions"`           | Content will be rendered in the action area, adjacent to the title area. |\n| `"heading"`           | Content will be rendered in the title area, in place of the heading.     |\n| `"heading-adornment"` | Content will be rendered in the title area, to the left of the heading.  |\n| `"message"`           | Content will be rendered below the title area, in place of the message.  |\n\n\n## CSS Custom Properties\n\n| Name                  | Description                                     |\n| --------------------- | ----------------------------------------------- |\n| `--ic-drawer-height`  | the width of the expanded top or bottom drawer. |\n| `--ic-drawer-width`   | the width of the expanded left or right drawer. |\n| `--ic-z-index-drawer` | z-index of drawer.                              |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-button\n- ic-section-container\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-drawer --\x3e ic-button\n  ic-drawer --\x3e ic-section-container\n  ic-drawer --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-drawer fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={actionsSlot:!0,chevronButtonAriaLabel:"",closeButtonAriaLabel:"Close drawer",closeOnBackdropClick:!0,expanded:!1,heading:"Heading",message:"Lorem ipsum odor amet, consectetuer adipiscing elit. Netus condimentum posuere velit egestas senectus viverra. Nascetur diam curabitur semper sodales sapien sit mi. Ultrices potenti eget netus et cras quis; convallis phasellus. Posuere magnis sapien ipsum risus maecenas molestie dictum. Penatibus quis platea vel ipsum habitasse inceptos. Litora leo efficitur duis sociosqu litora ex. Tellus interdum neque sapien finibus felis iaculis euismod. Hendrerit dignissim diam adipiscing nam rutrum nascetur amet.\n\nPlacerat blandit nullam netus mattis vulputate torquent. Adipiscing augue sociosqu nibh parturient conubia cras ridiculus. Quis mi posuere laoreet montes sapien turpis fermentum lobortis. Adipiscing cubilia varius dictum suscipit lobortis. Metus tincidunt quis orci suspendisse scelerisque magna turpis. Pellentesque finibus dis pretium; nisl tincidunt ante et. Nibh curae turpis; duis torquent ornare ante morbi magna gravida? Ut est primis purus tincidunt cubilia interdum; natoque adipiscing. Semper adipiscing cubilia donec velit donec phasellus phasellus vivamus.\n\nVehicula ligula felis libero dui eu pharetra erat aptent sociosqu. Fermentum taciti sed ultrices nisl leo. Mus praesent luctus auctor tristique orci neque rutrum massa volutpat. Ullamcorper fames dignissim aliquet proin sapien feugiat? Vitae facilisis lacinia lacus ut phasellus class netus. Per blandit rhoncus fermentum turpis bibendum class nullam id. Ultricies imperdiet sem est pretium ante fermentum conubia maximus. Per inceptos pretium aliquet mus laoreet blandit ultrices nisl. Odio suspendisse hendrerit luctus lorem dictum lacus phasellus mattis. Lobortis eleifend blandit augue fusce ullamcorper ultricies himenaeos.\n\nVivamus varius vivamus montes morbi enim montes natoque litora. Habitasse porta tincidunt senectus nibh sollicitudin pretium rhoncus quis. Ipsum taciti bibendum natoque tristique vulputate litora. Arcu lectus dignissim risus sed litora; nulla sem iaculis. Vel habitant blandit quis ultricies varius sem nibh ut maximus. Gravida libero donec rutrum neque erat aliquam lacus condimentum laoreet. Porta mi amet penatibus at tempus himenaeos. Tristique himenaeos pulvinar lacus accumsan iaculis facilisis. Hac orci fames quis maximus quis dignissim hendrerit id.\n\nCubilia ipsum scelerisque lacus; mauris efficitur porta ridiculus suscipit? Pharetra nascetur ultrices maximus cursus imperdiet eleifend. Elit sodales tincidunt nisi ligula ac. Tellus lacus convallis viverra ornare nec eleifend maximus inceptos. Non nullam porttitor non sed nulla dolor. Ex ridiculus mattis lacus lobortis fusce? Curae facilisis interdum curae vehicula facilisi ligula. Efficitur sollicitudin tempus viverra porta habitant. Ac ad lorem lobortis erat est sed. Efficitur pellentesque mi ex magna vehicula at.",position:"right",showCloseButton:!0,size:"medium",trigger:"arrow"};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Drawer",component:"ic-drawer",parameters:{componentAPI:{data:readme_namespaceObject},layout:"fullscreen"}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"canary-drawer",children:"[Canary]: Drawer"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use the drawer component..."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Click the 'Component API' tab to view all the available attributes, events and slots for tree view."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the tree view component, import ",(0,jsx_runtime.jsx)(_components.code,{children:"@ukic/canary-web-components"})," into your application."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"right-position",children:"Right position"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A basic example with one level of tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Right position",parameters:{loki:{skip:!0}},children:lit_html.qy` <ic-drawer heading="Menu" message="Lorem ipsum odor amet, consectetuer adipiscing elit. Netus condimentum posuere velit egestas senectus viverra. Nascetur diam curabitur semper sodales sapien sit mi. Ultrices potenti eget netus et cras quis; convallis phasellus. Posuere magnis sapien ipsum risus maecenas molestie dictum. Penatibus quis platea vel ipsum habitasse inceptos. Litora leo efficitur duis sociosqu litora ex. Tellus interdum neque sapien finibus felis iaculis euismod. Hendrerit dignissim diam adipiscing nam rutrum nascetur amet.

Placerat blandit nullam netus mattis vulputate torquent. Adipiscing augue sociosqu nibh parturient conubia cras ridiculus. Quis mi posuere laoreet montes sapien turpis fermentum lobortis. Adipiscing cubilia varius dictum suscipit lobortis. Metus tincidunt quis orci suspendisse scelerisque magna turpis. Pellentesque finibus dis pretium; nisl tincidunt ante et. Nibh curae turpis; duis torquent ornare ante morbi magna gravida? Ut est primis purus tincidunt cubilia interdum; natoque adipiscing. Semper adipiscing cubilia donec velit donec phasellus phasellus vivamus.

Vehicula ligula felis libero dui eu pharetra erat aptent sociosqu. Fermentum taciti sed ultrices nisl leo. Mus praesent luctus auctor tristique orci neque rutrum massa volutpat. Ullamcorper fames dignissim aliquet proin sapien feugiat? Vitae facilisis lacinia lacus ut phasellus class netus. Per blandit rhoncus fermentum turpis bibendum class nullam id. Ultricies imperdiet sem est pretium ante fermentum conubia maximus. Per inceptos pretium aliquet mus laoreet blandit ultrices nisl. Odio suspendisse hendrerit luctus lorem dictum lacus phasellus mattis. Lobortis eleifend blandit augue fusce ullamcorper ultricies himenaeos.

Vivamus varius vivamus montes morbi enim montes natoque litora. Habitasse porta tincidunt senectus nibh sollicitudin pretium rhoncus quis. Ipsum taciti bibendum natoque tristique vulputate litora. Arcu lectus dignissim risus sed litora; nulla sem iaculis. Vel habitant blandit quis ultricies varius sem nibh ut maximus. Gravida libero donec rutrum neque erat aliquam lacus condimentum laoreet. Porta mi amet penatibus at tempus himenaeos. Tristique himenaeos pulvinar lacus accumsan iaculis facilisis. Hac orci fames quis maximus quis dignissim hendrerit id.

Cubilia ipsum scelerisque lacus; mauris efficitur porta ridiculus suscipit? Pharetra nascetur ultrices maximus cursus imperdiet eleifend. Elit sodales tincidunt nisi ligula ac. Tellus lacus convallis viverra ornare nec eleifend maximus inceptos. Non nullam porttitor non sed nulla dolor. Ex ridiculus mattis lacus lobortis fusce? Curae facilisis interdum curae vehicula facilisi ligula. Efficitur sollicitudin tempus viverra porta habitant. Ac ad lorem lobortis erat est sed. Efficitur pellentesque mi ex magna vehicula at."></ic-drawer> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-position",children:"Left position"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A basic example with one level of tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Left position",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-drawer heading="Menu" message="test" position="left"></ic-drawer>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"top-position",children:"Top position"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A basic example with one level of tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Top position",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-drawer heading="Menu" message="test" position="top"></ic-drawer>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bottom-position",children:"Bottom position"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A basic example with one level of tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Bottom position",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-drawer heading="Menu" message="test" position="bottom"></ic-drawer>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-content",children:"Slotted content"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A basic example with one level of tree items."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted content",parameters:{loki:{skip:!0}},children:lit_html.qy`<div>
      <div style="display: flex; flex-direction: column; min-height: 100vh;">
        <ic-top-navigation
          app-title="Déja-brew"
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
          <ic-section-container aligned="center">
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
          </ic-section-container>
        </main>
      </div>
      <ic-drawer
        heading="Roasted coffee"
        message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        position="right"
      >
        <svg
          style="width: var(--ic-space-lg); height: var(--ic-space-lg);"
          slot="heading-adornment"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
          />
        </svg>
        <ic-button slot="actions">Add to order</ic-button>
      </ic-drawer>
      <ic-footer
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      ></ic-footer>
    </div> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"manual-trigger",children:"Manual trigger"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Manual trigger",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
        <div>
          <div
            style="display: flex; flex-direction: column; min-height: 100vh;"
          >
            <ic-top-navigation
              app-title="Déja-brew"
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
              <ic-section-container aligned="center">
                <ic-button id="button-1" onclick="expandDrawer()"
                  >Open drawer</ic-button
                >
                <ic-drawer
                  id="drawer-1"
                  show-close-button="true"
                  trigger="controlled"
                  heading="Roasted coffee"
                  message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
                >
                  <ic-button variant="secondary" slot="actions"
                    >Secondary action</ic-button
                  >
                  <ic-button slot="actions">Primary action</ic-button>
                </ic-drawer>
                <ic-typography
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum pharetra scelerisque arcu, vitae semper nisl
                  rhoncus ut. Vestibulum molestie enim at sollicitudin
                  pellentesque. Proin sit amet augue sit amet dui suscipit
                  lobortis. Nullam at consectetur ante. Suspendisse mollis
                  ultricies porttitor. Nunc laoreet leo tortor, ut tristique
                  odio finibus a. In rutrum convallis purus, vitae tristique
                  tortor sagittis vel. Donec dictum nunc a elit tristique, et
                  facilisis est condimentum. Pellentesque maximus nulla libero,
                  nec auctor urna consequat nec. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos. In
                  maximus velit a erat volutpat, sit amet consequat velit
                  rhoncus. Mauris pretium neque eget ante consectetur
                  consectetur. Morbi a consequat lectus. Donec venenatis
                  ultricies sem nec pulvinar. Fusce lacus augue, laoreet id
                  pretium id, efficitur nec leo.</ic-typography
                >
              </ic-section-container>
            </main>
          </div>
          <ic-footer
            aligned="full-width"
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
          please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          ></ic-footer>
        </div>
        <script>
          let icDrawer = document.querySelector("ic-drawer#drawer-1");
          function expandDrawer() {
            icDrawer.expanded = !icDrawer.expanded;
          }
        </script>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{actionsSlot:{mapping:{true:"actions",false:""}},size:{options:["small","medium","large"],control:{type:"radio"}},position:{options:["top","bottom","left","right"],control:{type:"radio"}},trigger:{options:["arrow","controlled"],control:{type:"inline-radio"}}},name:"Playground",children:args=>lit_html.qy`
        <div style="display:flex;">
          <ic-side-navigation
            app-title="Déja-brew"
            version="v0.0.7"
            status="BETA"
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
            <ic-navigation-item slot="primary-navigation" href="/" label="Home">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item
              slot="primary-navigation"
              href="/"
              label="Search"
              selected="true"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-divider slot="primary-navigation"></ic-divider>
            <ic-navigation-item
              slot="primary-navigation"
              href="/"
              label="Trends"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-group
              slot="primary-navigation"
              label="Second navigation group"
              expandable="true"
            >
              <ic-navigation-item label="Different navigation" href="/">
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                    fill="currentColor"
                  />
                </svg>
              </ic-navigation-item>
              <ic-navigation-item label="Navigation" href="/">
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                    fill="currentColor"
                  />
                </svg>
              </ic-navigation-item>
            </ic-navigation-group>
            <ic-navigation-item
              slot="primary-navigation"
              href="/"
              label="This is a very very very long label for the navigation item"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item
              slot="secondary-navigation"
              href="/"
              label="Settings"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-side-navigation>
          <div
            class="content-wrapper"
            style="display:flex; flex-direction: column; flex-grow: 1;"
          >
            <main id="main">
              <ic-page-header
                heading="Page header"
                subheading="This is a page header component with additional functionality and this is the text."
                aligned="full-width"
                sticky
              >
                <ic-status-tag
                  slot="heading-adornment"
                  label="Beta"
                ></ic-status-tag>
                <ic-search-bar
                  hide-label="true"
                  id="page-header-search-bar"
                  characters-until-suggestion="1"
                  slot="input"
                  label="What is your favourite coffee?"
                ></ic-search-bar>
              </ic-page-header>
              <ic-section-container id="top-target">
                ${"controlled"===args.trigger?lit_html.qy`<ic-card-horizontal
                      heading="Roasted coffee"
                      size="large"
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
                      <svg
                        slot="image"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1600 900"
                      >
                        <rect
                          fill="#ff7700"
                          width="1600"
                          height="1600"
                          y="-350"
                        />
                        <polygon
                          fill="#cc0000"
                          points="957 450 539 900 1396 900"
                        />
                        <polygon
                          fill="#aa0000"
                          points="957 450 872.9 900 1396 900"
                        />
                        <polygon
                          fill="#c50022"
                          points="-60 900 398 662 816 900"
                        />
                        <polygon
                          fill="#a3001b"
                          points="337 900 398 662 816 900"
                        />
                        <polygon
                          fill="#be0044"
                          points="1203 546 1552 900 876 900"
                        />
                        <polygon
                          fill="#9c0036"
                          points="1203 546 1552 900 1162 900"
                        />
                        <polygon
                          fill="#b80066"
                          points="641 695 886 900 367 900"
                        />
                        <polygon
                          fill="#960052"
                          points="587 900 641 695 886 900"
                        />
                        <polygon
                          fill="#b10088"
                          points="1710 900 1401 632 1096 900"
                        />
                        <polygon
                          fill="#8f006d"
                          points="1710 900 1401 632 1365 900"
                        />
                        <polygon
                          fill="#aa00aa"
                          points="1210 900 971 687 725 900"
                        />
                        <polygon
                          fill="#880088"
                          points="943 900 1210 900 971 687"
                        />
                      </svg>
                      <div
                        style="display: flex; gap: var(--ic-space-xs); padding: var(--ic-space-xs)"
                        slot="message"
                      >
                        <ic-button variant="secondary" onclick="expandDrawer()"
                          >Learn more</ic-button
                        ><ic-button>Add to order</ic-button>
                      </div>
                    </ic-card-horizontal>`:""}
                <ic-typography
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                  ante quis, tempor interdum libero. In dictum sodales velit, eu
                  egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                  laoreet orci sagittis ut. Sed tempus, lacus in pretium
                  molestie, lectus magna interdum risus, vel fringilla libero ex
                  eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus
                  congue velit nisl, vitae congue ligula rutrum id. <br /><br />
                  Etiam in suscipit metus. Duis semper, sapien a molestie
                  semper, ex nibh porttitor tellus, vel molestie justo odio vel
                  purus. Curabitur porttitor, tortor sed semper sollicitudin,
                  odio odio congue tortor, eget pulvinar tellus nisl ac lacus.
                  In ultricies commodo lorem, a laoreet diam. Ut a mauris at
                  tellus tincidunt ullamcorper sit amet in metus. Aenean
                  facilisis placerat dictum. Phasellus mattis ante sollicitudin
                  luctus iaculis. Nam porttitor lobortis rhoncus. Nam nec
                  malesuada purus, at pulvinar mauris. Nam non lorem ante.<br /><br />
                  Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                  urna in commodo. Proin mauris augue, viverra id finibus id,
                  vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                  tristique. Donec pellentesque enim arcu, at feugiat mauris
                  venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                  eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse
                  eget interdum lorem. Phasellus pretium urna id elit pharetra
                  hendrerit.</ic-typography
                >
                <ic-typography
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent eget orci condimentum, tempus tortor posuere, lacinia
                  ex. Curabitur bibendum suscipit turpis vitae mollis. Ut
                  laoreet orci a risus facilisis porta. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Curabitur a porttitor neque, ac dignissim velit. Morbi
                  quis malesuada massa, vitae sodales tellus. Aenean laoreet
                  mattis lobortis. In mauris erat, tincidunt in placerat sed,
                  pretium ac tortor. Morbi blandit lacus a leo vehicula
                  aliquet.</ic-typography
                >
                <ic-typography
                  >Pellentesque aliquam risus vel eros maximus, at pellentesque
                  mi pretium. Etiam nec velit at orci varius porttitor. Aliquam
                  facilisis, elit non cursus fringilla, metus metus malesuada
                  lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                  eget sodales ullamcorper, eros turpis euismod nulla, sed
                  sollicitudin diam massa semper purus. Vivamus vel turpis
                  ipsum. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Morbi euismod turpis dapibus quam fermentum
                  condimentum. Mauris ex orci, consequat quis tempor eu, finibus
                  vitae eros. Ut eu erat eu ipsum pulvinar cursus vel at dui.
                  Etiam tincidunt quam porta nulla suscipit vestibulum. Sed
                  iaculis enim leo, et aliquam justo feugiat in. Vivamus in
                  ornare nulla, at tempor massa. Sed et aliquam
                  nisi.</ic-typography
                >
                <ic-typography
                  >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                  orci. Suspendisse molestie posuere leo vitae posuere. Cras
                  lacinia urna non erat gravida sagittis. Quisque dapibus arcu
                  nec sem pharetra convallis. Nullam sed arcu mollis, posuere
                  elit at, condimentum ligula. Nullam maximus nulla quam, ut
                  euismod est feugiat at. Quisque ut venenatis ex, in facilisis
                  sapien. Pellentesque in orci vitae metus iaculis venenatis.
                  Nunc porttitor tellus arcu, in posuere quam vulputate nec.
                  Aenean in venenatis ligula, non mollis quam. Suspendisse nec
                  enim vel massa finibus pretium et a urna. Etiam suscipit
                  semper est, id efficitur diam sollicitudin nec. Nullam nibh
                  sapien, condimentum ut laoreet et, euismod ac mi. Vestibulum
                  tristique odio non risus ullamcorper, et aliquam turpis
                  varius. Nunc metus ex, tempus a augue sit amet, interdum
                  vulputate libero.</ic-typography
                >
                <ic-typography
                  >Aenean convallis libero id magna congue pellentesque. Nulla
                  iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                  molestie. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Integer sollicitudin
                  in felis vitae rhoncus. Sed eu elementum massa. Cras ut
                  accumsan risus. Donec nec augue justo. Aenean sagittis luctus
                  leo egestas consectetur. Sed sit amet nisl quis felis volutpat
                  facilisis ac vitae tellus. Curabitur pharetra commodo
                  consequat. Aliquam consequat ipsum lacus, sed faucibus sapien
                  mollis vel.</ic-typography
                >
              </ic-section-container>
              <ic-drawer
                id="playground-example"
                chevron-button-aria-label=${args.chevronButtonAriaLabel}
                close-button-aria-label=${args.closeButtonAriaLabel}
                close-on-backdrop-click=${args.closeOnBackdropClick}
                expanded=${args.expanded}
                heading=${args.heading}
                message=${args.message}
                position=${args.position}
                size=${args.size}
                show-close-button=${args.showCloseButton}
                trigger=${args.trigger}
              >
                <ic-button variant="secondary" slot=${args.actionsSlot}
                  >Secondary action</ic-button
                >
                <ic-button slot=${args.actionsSlot}>Primary action</ic-button>
              </ic-drawer>
            </main>
            <ic-back-to-top target="main"></ic-back-to-top>
            <ic-footer
              description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
              caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
            >
              <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
              <ic-footer-link slot="link" href="/"
                >Accessibility</ic-footer-link
              >
              <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
              <ic-footer-link slot="link" href="/">Components</ic-footer-link>
              <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
              <ic-footer-link slot="link" href="/"
                >Design toolkit</ic-footer-link
              >
              <div
                slot="logo"
                style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
              >
                Logo
              </div>
            </ic-footer>
          </div>
        </div>
        <ic-classification-banner
          classification="official"
        ></ic-classification-banner>
        <script>
          const options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Ameno", value: "ameno" },
            { label: "Aicano", value: "acano" },
            { label: "Mocha", value: "mocha" },
          ];
          document.querySelector("#page-header-search-bar").options = options;
          let drawer = document.querySelector("ic-drawer#playground-example");
          function expandDrawer() {
            drawer.expanded = true;
          }
        </script>
      `})})]})}const rightPosition=()=>lit_html.qy` <ic-drawer heading="Menu" message="Lorem ipsum odor amet, consectetuer adipiscing elit. Netus condimentum posuere velit egestas senectus viverra. Nascetur diam curabitur semper sodales sapien sit mi. Ultrices potenti eget netus et cras quis; convallis phasellus. Posuere magnis sapien ipsum risus maecenas molestie dictum. Penatibus quis platea vel ipsum habitasse inceptos. Litora leo efficitur duis sociosqu litora ex. Tellus interdum neque sapien finibus felis iaculis euismod. Hendrerit dignissim diam adipiscing nam rutrum nascetur amet.

Placerat blandit nullam netus mattis vulputate torquent. Adipiscing augue sociosqu nibh parturient conubia cras ridiculus. Quis mi posuere laoreet montes sapien turpis fermentum lobortis. Adipiscing cubilia varius dictum suscipit lobortis. Metus tincidunt quis orci suspendisse scelerisque magna turpis. Pellentesque finibus dis pretium; nisl tincidunt ante et. Nibh curae turpis; duis torquent ornare ante morbi magna gravida? Ut est primis purus tincidunt cubilia interdum; natoque adipiscing. Semper adipiscing cubilia donec velit donec phasellus phasellus vivamus.

Vehicula ligula felis libero dui eu pharetra erat aptent sociosqu. Fermentum taciti sed ultrices nisl leo. Mus praesent luctus auctor tristique orci neque rutrum massa volutpat. Ullamcorper fames dignissim aliquet proin sapien feugiat? Vitae facilisis lacinia lacus ut phasellus class netus. Per blandit rhoncus fermentum turpis bibendum class nullam id. Ultricies imperdiet sem est pretium ante fermentum conubia maximus. Per inceptos pretium aliquet mus laoreet blandit ultrices nisl. Odio suspendisse hendrerit luctus lorem dictum lacus phasellus mattis. Lobortis eleifend blandit augue fusce ullamcorper ultricies himenaeos.

Vivamus varius vivamus montes morbi enim montes natoque litora. Habitasse porta tincidunt senectus nibh sollicitudin pretium rhoncus quis. Ipsum taciti bibendum natoque tristique vulputate litora. Arcu lectus dignissim risus sed litora; nulla sem iaculis. Vel habitant blandit quis ultricies varius sem nibh ut maximus. Gravida libero donec rutrum neque erat aliquam lacus condimentum laoreet. Porta mi amet penatibus at tempus himenaeos. Tristique himenaeos pulvinar lacus accumsan iaculis facilisis. Hac orci fames quis maximus quis dignissim hendrerit id.

Cubilia ipsum scelerisque lacus; mauris efficitur porta ridiculus suscipit? Pharetra nascetur ultrices maximus cursus imperdiet eleifend. Elit sodales tincidunt nisi ligula ac. Tellus lacus convallis viverra ornare nec eleifend maximus inceptos. Non nullam porttitor non sed nulla dolor. Ex ridiculus mattis lacus lobortis fusce? Curae facilisis interdum curae vehicula facilisi ligula. Efficitur sollicitudin tempus viverra porta habitant. Ac ad lorem lobortis erat est sed. Efficitur pellentesque mi ex magna vehicula at."></ic-drawer> `;rightPosition.storyName="Right position",rightPosition.parameters={storySource:{source:'html` <ic-drawer heading="Menu" message="Lorem ipsum odor amet, consectetuer adipiscing elit. Netus condimentum posuere velit egestas senectus viverra. Nascetur diam curabitur semper sodales sapien sit mi. Ultrices potenti eget netus et cras quis; convallis phasellus. Posuere magnis sapien ipsum risus maecenas molestie dictum. Penatibus quis platea vel ipsum habitasse inceptos. Litora leo efficitur duis sociosqu litora ex. Tellus interdum neque sapien finibus felis iaculis euismod. Hendrerit dignissim diam adipiscing nam rutrum nascetur amet.\n\nPlacerat blandit nullam netus mattis vulputate torquent. Adipiscing augue sociosqu nibh parturient conubia cras ridiculus. Quis mi posuere laoreet montes sapien turpis fermentum lobortis. Adipiscing cubilia varius dictum suscipit lobortis. Metus tincidunt quis orci suspendisse scelerisque magna turpis. Pellentesque finibus dis pretium; nisl tincidunt ante et. Nibh curae turpis; duis torquent ornare ante morbi magna gravida? Ut est primis purus tincidunt cubilia interdum; natoque adipiscing. Semper adipiscing cubilia donec velit donec phasellus phasellus vivamus.\n\nVehicula ligula felis libero dui eu pharetra erat aptent sociosqu. Fermentum taciti sed ultrices nisl leo. Mus praesent luctus auctor tristique orci neque rutrum massa volutpat. Ullamcorper fames dignissim aliquet proin sapien feugiat? Vitae facilisis lacinia lacus ut phasellus class netus. Per blandit rhoncus fermentum turpis bibendum class nullam id. Ultricies imperdiet sem est pretium ante fermentum conubia maximus. Per inceptos pretium aliquet mus laoreet blandit ultrices nisl. Odio suspendisse hendrerit luctus lorem dictum lacus phasellus mattis. Lobortis eleifend blandit augue fusce ullamcorper ultricies himenaeos.\n\nVivamus varius vivamus montes morbi enim montes natoque litora. Habitasse porta tincidunt senectus nibh sollicitudin pretium rhoncus quis. Ipsum taciti bibendum natoque tristique vulputate litora. Arcu lectus dignissim risus sed litora; nulla sem iaculis. Vel habitant blandit quis ultricies varius sem nibh ut maximus. Gravida libero donec rutrum neque erat aliquam lacus condimentum laoreet. Porta mi amet penatibus at tempus himenaeos. Tristique himenaeos pulvinar lacus accumsan iaculis facilisis. Hac orci fames quis maximus quis dignissim hendrerit id.\n\nCubilia ipsum scelerisque lacus; mauris efficitur porta ridiculus suscipit? Pharetra nascetur ultrices maximus cursus imperdiet eleifend. Elit sodales tincidunt nisi ligula ac. Tellus lacus convallis viverra ornare nec eleifend maximus inceptos. Non nullam porttitor non sed nulla dolor. Ex ridiculus mattis lacus lobortis fusce? Curae facilisis interdum curae vehicula facilisi ligula. Efficitur sollicitudin tempus viverra porta habitant. Ac ad lorem lobortis erat est sed. Efficitur pellentesque mi ex magna vehicula at."></ic-drawer> `'},loki:{skip:!0}};const leftPosition=()=>lit_html.qy`
      <ic-drawer heading="Menu" message="test" position="left"></ic-drawer>
    `;leftPosition.storyName="Left position",leftPosition.parameters={storySource:{source:'html`\n      <ic-drawer heading="Menu" message="test" position="left"></ic-drawer>\n    `'},loki:{skip:!0}};const topPosition=()=>lit_html.qy`
      <ic-drawer heading="Menu" message="test" position="top"></ic-drawer>
    `;topPosition.storyName="Top position",topPosition.parameters={storySource:{source:'html`\n      <ic-drawer heading="Menu" message="test" position="top"></ic-drawer>\n    `'},loki:{skip:!0}};const bottomPosition=()=>lit_html.qy`
      <ic-drawer heading="Menu" message="test" position="bottom"></ic-drawer>
    `;bottomPosition.storyName="Bottom position",bottomPosition.parameters={storySource:{source:'html`\n      <ic-drawer heading="Menu" message="test" position="bottom"></ic-drawer>\n    `'},loki:{skip:!0}};const slottedContent=()=>lit_html.qy`<div>
      <div style="display: flex; flex-direction: column; min-height: 100vh;">
        <ic-top-navigation
          app-title="Déja-brew"
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
          <ic-section-container aligned="center">
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
          </ic-section-container>
        </main>
      </div>
      <ic-drawer
        heading="Roasted coffee"
        message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        position="right"
      >
        <svg
          style="width: var(--ic-space-lg); height: var(--ic-space-lg);"
          slot="heading-adornment"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
          />
        </svg>
        <ic-button slot="actions">Add to order</ic-button>
      </ic-drawer>
      <ic-footer
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      ></ic-footer>
    </div> `;slottedContent.storyName="Slotted content",slottedContent.parameters={storySource:{source:'html`<div>\n      <div style="display: flex; flex-direction: column; min-height: 100vh;">\n        <ic-top-navigation\n          app-title="Déja-brew"\n          status="alpha"\n          version="v0.0.7"\n          content-aligned="center"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-search-bar\n            slot="search"\n            placeholder="Search"\n            label="Search"\n          ></ic-search-bar>\n          <ic-navigation-button\n            label="button1"\n            slot="buttons"\n            onclick="alert(\'test\')"\n          >\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n          </ic-navigation-button>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-group\n            slot="navigation"\n            label="Navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item\n              label="Navigation"\n              href="/"\n            ></ic-navigation-item>\n            <ic-navigation-item\n              label="Navigation"\n              href="/"\n            ></ic-navigation-item>\n          </ic-navigation-group>\n        </ic-top-navigation>\n        <main style="height: 100%">\n          <ic-section-container aligned="center">\n            <ic-typography\n              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus\n              ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin\n              sit amet augue sit amet dui suscipit lobortis. Nullam at\n              consectetur ante. Suspendisse mollis ultricies porttitor. Nunc\n              laoreet leo tortor, ut tristique odio finibus a. In rutrum\n              convallis purus, vitae tristique tortor sagittis vel. Donec dictum\n              nunc a elit tristique, et facilisis est condimentum. Pellentesque\n              maximus nulla libero, nec auctor urna consequat nec. Class aptent\n              taciti sociosqu ad litora torquent per conubia nostra, per\n              inceptos himenaeos. In maximus velit a erat volutpat, sit amet\n              consequat velit rhoncus. Mauris pretium neque eget ante\n              consectetur consectetur. Morbi a consequat lectus. Donec venenatis\n              ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium\n              id, efficitur nec leo.</ic-typography\n            >\n          </ic-section-container>\n        </main>\n      </div>\n      <ic-drawer\n        heading="Roasted coffee"\n        message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."\n        position="right"\n      >\n        <svg\n          style="width: var(--ic-space-lg); height: var(--ic-space-lg);"\n          slot="heading-adornment"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 24 24"\n        >\n          <path\n            d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"\n          />\n        </svg>\n        <ic-button slot="actions">Add to order</ic-button>\n      </ic-drawer>\n      <ic-footer\n        aligned="full-width"\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n          please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      ></ic-footer>\n    </div> `'},loki:{skip:!0}};const manualTrigger=args=>lit_html.qy`
        <div>
          <div
            style="display: flex; flex-direction: column; min-height: 100vh;"
          >
            <ic-top-navigation
              app-title="Déja-brew"
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
              <ic-section-container aligned="center">
                <ic-button id="button-1" onclick="expandDrawer()"
                  >Open drawer</ic-button
                >
                <ic-drawer
                  id="drawer-1"
                  show-close-button="true"
                  trigger="controlled"
                  heading="Roasted coffee"
                  message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
                >
                  <ic-button variant="secondary" slot="actions"
                    >Secondary action</ic-button
                  >
                  <ic-button slot="actions">Primary action</ic-button>
                </ic-drawer>
                <ic-typography
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum pharetra scelerisque arcu, vitae semper nisl
                  rhoncus ut. Vestibulum molestie enim at sollicitudin
                  pellentesque. Proin sit amet augue sit amet dui suscipit
                  lobortis. Nullam at consectetur ante. Suspendisse mollis
                  ultricies porttitor. Nunc laoreet leo tortor, ut tristique
                  odio finibus a. In rutrum convallis purus, vitae tristique
                  tortor sagittis vel. Donec dictum nunc a elit tristique, et
                  facilisis est condimentum. Pellentesque maximus nulla libero,
                  nec auctor urna consequat nec. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos. In
                  maximus velit a erat volutpat, sit amet consequat velit
                  rhoncus. Mauris pretium neque eget ante consectetur
                  consectetur. Morbi a consequat lectus. Donec venenatis
                  ultricies sem nec pulvinar. Fusce lacus augue, laoreet id
                  pretium id, efficitur nec leo.</ic-typography
                >
              </ic-section-container>
            </main>
          </div>
          <ic-footer
            aligned="full-width"
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
          please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          ></ic-footer>
        </div>
        <script>
          let icDrawer = document.querySelector("ic-drawer#drawer-1");
          function expandDrawer() {
            icDrawer.expanded = !icDrawer.expanded;
          }
        </script>
      `;manualTrigger.storyName="Manual trigger",manualTrigger.parameters={storySource:{source:'args => html`\n        <div>\n          <div\n            style="display: flex; flex-direction: column; min-height: 100vh;"\n          >\n            <ic-top-navigation\n              app-title="Déja-brew"\n              status="alpha"\n              version="v0.0.7"\n              content-aligned="center"\n            >\n              <svg\n                slot="app-icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n                fill="#000000"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n                />\n              </svg>\n              <ic-search-bar\n                slot="search"\n                placeholder="Search"\n                label="Search"\n              ></ic-search-bar>\n              <ic-navigation-button\n                label="button1"\n                slot="buttons"\n                onclick="alert(\'test\')"\n              >\n                <svg\n                  slot="icon"\n                  xmlns="http://www.w3.org/2000/svg"\n                  height="24px"\n                  viewBox="0 0 24 24"\n                  width="24px"\n                  fill="#000000"\n                >\n                  <path d="M0 0h24v24H0V0z" fill="none" />\n                  <path\n                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n                  />\n                </svg>\n              </ic-navigation-button>\n              <ic-navigation-item\n                slot="navigation"\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-group\n                slot="navigation"\n                label="Navigation group"\n                expandable="true"\n              >\n                <ic-navigation-item\n                  label="Navigation"\n                  href="/"\n                ></ic-navigation-item>\n                <ic-navigation-item\n                  label="Navigation"\n                  href="/"\n                ></ic-navigation-item>\n              </ic-navigation-group>\n            </ic-top-navigation>\n            <main style="height: 100%">\n              <ic-section-container aligned="center">\n                <ic-button id="button-1" onclick="expandDrawer()"\n                  >Open drawer</ic-button\n                >\n                <ic-drawer\n                  id="drawer-1"\n                  show-close-button="true"\n                  trigger="controlled"\n                  heading="Roasted coffee"\n                  message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."\n                >\n                  <ic-button variant="secondary" slot="actions"\n                    >Secondary action</ic-button\n                  >\n                  <ic-button slot="actions">Primary action</ic-button>\n                </ic-drawer>\n                <ic-typography\n                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                  Vestibulum pharetra scelerisque arcu, vitae semper nisl\n                  rhoncus ut. Vestibulum molestie enim at sollicitudin\n                  pellentesque. Proin sit amet augue sit amet dui suscipit\n                  lobortis. Nullam at consectetur ante. Suspendisse mollis\n                  ultricies porttitor. Nunc laoreet leo tortor, ut tristique\n                  odio finibus a. In rutrum convallis purus, vitae tristique\n                  tortor sagittis vel. Donec dictum nunc a elit tristique, et\n                  facilisis est condimentum. Pellentesque maximus nulla libero,\n                  nec auctor urna consequat nec. Class aptent taciti sociosqu ad\n                  litora torquent per conubia nostra, per inceptos himenaeos. In\n                  maximus velit a erat volutpat, sit amet consequat velit\n                  rhoncus. Mauris pretium neque eget ante consectetur\n                  consectetur. Morbi a consequat lectus. Donec venenatis\n                  ultricies sem nec pulvinar. Fusce lacus augue, laoreet id\n                  pretium id, efficitur nec leo.</ic-typography\n                >\n              </ic-section-container>\n            </main>\n          </div>\n          <ic-footer\n            aligned="full-width"\n            description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n          please get in touch."\n            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n          ></ic-footer>\n        </div>\n        <script>\n          let icDrawer = document.querySelector("ic-drawer#drawer-1");\n          function expandDrawer() {\n            icDrawer.expanded = !icDrawer.expanded;\n          }\n        <\/script>\n      `'},loki:{skip:!0}};const playground=args=>lit_html.qy`
        <div style="display:flex;">
          <ic-side-navigation
            app-title="Déja-brew"
            version="v0.0.7"
            status="BETA"
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
            <ic-navigation-item slot="primary-navigation" href="/" label="Home">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item
              slot="primary-navigation"
              href="/"
              label="Search"
              selected="true"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-divider slot="primary-navigation"></ic-divider>
            <ic-navigation-item
              slot="primary-navigation"
              href="/"
              label="Trends"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-group
              slot="primary-navigation"
              label="Second navigation group"
              expandable="true"
            >
              <ic-navigation-item label="Different navigation" href="/">
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                    fill="currentColor"
                  />
                </svg>
              </ic-navigation-item>
              <ic-navigation-item label="Navigation" href="/">
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                    fill="currentColor"
                  />
                </svg>
              </ic-navigation-item>
            </ic-navigation-group>
            <ic-navigation-item
              slot="primary-navigation"
              href="/"
              label="This is a very very very long label for the navigation item"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item
              slot="secondary-navigation"
              href="/"
              label="Settings"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-side-navigation>
          <div
            class="content-wrapper"
            style="display:flex; flex-direction: column; flex-grow: 1;"
          >
            <main id="main">
              <ic-page-header
                heading="Page header"
                subheading="This is a page header component with additional functionality and this is the text."
                aligned="full-width"
                sticky
              >
                <ic-status-tag
                  slot="heading-adornment"
                  label="Beta"
                ></ic-status-tag>
                <ic-search-bar
                  hide-label="true"
                  id="page-header-search-bar"
                  characters-until-suggestion="1"
                  slot="input"
                  label="What is your favourite coffee?"
                ></ic-search-bar>
              </ic-page-header>
              <ic-section-container id="top-target">
                ${"controlled"===args.trigger?lit_html.qy`<ic-card-horizontal
                      heading="Roasted coffee"
                      size="large"
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
                      <svg
                        slot="image"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1600 900"
                      >
                        <rect
                          fill="#ff7700"
                          width="1600"
                          height="1600"
                          y="-350"
                        />
                        <polygon
                          fill="#cc0000"
                          points="957 450 539 900 1396 900"
                        />
                        <polygon
                          fill="#aa0000"
                          points="957 450 872.9 900 1396 900"
                        />
                        <polygon
                          fill="#c50022"
                          points="-60 900 398 662 816 900"
                        />
                        <polygon
                          fill="#a3001b"
                          points="337 900 398 662 816 900"
                        />
                        <polygon
                          fill="#be0044"
                          points="1203 546 1552 900 876 900"
                        />
                        <polygon
                          fill="#9c0036"
                          points="1203 546 1552 900 1162 900"
                        />
                        <polygon
                          fill="#b80066"
                          points="641 695 886 900 367 900"
                        />
                        <polygon
                          fill="#960052"
                          points="587 900 641 695 886 900"
                        />
                        <polygon
                          fill="#b10088"
                          points="1710 900 1401 632 1096 900"
                        />
                        <polygon
                          fill="#8f006d"
                          points="1710 900 1401 632 1365 900"
                        />
                        <polygon
                          fill="#aa00aa"
                          points="1210 900 971 687 725 900"
                        />
                        <polygon
                          fill="#880088"
                          points="943 900 1210 900 971 687"
                        />
                      </svg>
                      <div
                        style="display: flex; gap: var(--ic-space-xs); padding: var(--ic-space-xs)"
                        slot="message"
                      >
                        <ic-button variant="secondary" onclick="expandDrawer()"
                          >Learn more</ic-button
                        ><ic-button>Add to order</ic-button>
                      </div>
                    </ic-card-horizontal>`:""}
                <ic-typography
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                  ante quis, tempor interdum libero. In dictum sodales velit, eu
                  egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                  laoreet orci sagittis ut. Sed tempus, lacus in pretium
                  molestie, lectus magna interdum risus, vel fringilla libero ex
                  eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus
                  congue velit nisl, vitae congue ligula rutrum id. <br /><br />
                  Etiam in suscipit metus. Duis semper, sapien a molestie
                  semper, ex nibh porttitor tellus, vel molestie justo odio vel
                  purus. Curabitur porttitor, tortor sed semper sollicitudin,
                  odio odio congue tortor, eget pulvinar tellus nisl ac lacus.
                  In ultricies commodo lorem, a laoreet diam. Ut a mauris at
                  tellus tincidunt ullamcorper sit amet in metus. Aenean
                  facilisis placerat dictum. Phasellus mattis ante sollicitudin
                  luctus iaculis. Nam porttitor lobortis rhoncus. Nam nec
                  malesuada purus, at pulvinar mauris. Nam non lorem ante.<br /><br />
                  Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                  urna in commodo. Proin mauris augue, viverra id finibus id,
                  vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                  tristique. Donec pellentesque enim arcu, at feugiat mauris
                  venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                  eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse
                  eget interdum lorem. Phasellus pretium urna id elit pharetra
                  hendrerit.</ic-typography
                >
                <ic-typography
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent eget orci condimentum, tempus tortor posuere, lacinia
                  ex. Curabitur bibendum suscipit turpis vitae mollis. Ut
                  laoreet orci a risus facilisis porta. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Curabitur a porttitor neque, ac dignissim velit. Morbi
                  quis malesuada massa, vitae sodales tellus. Aenean laoreet
                  mattis lobortis. In mauris erat, tincidunt in placerat sed,
                  pretium ac tortor. Morbi blandit lacus a leo vehicula
                  aliquet.</ic-typography
                >
                <ic-typography
                  >Pellentesque aliquam risus vel eros maximus, at pellentesque
                  mi pretium. Etiam nec velit at orci varius porttitor. Aliquam
                  facilisis, elit non cursus fringilla, metus metus malesuada
                  lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                  eget sodales ullamcorper, eros turpis euismod nulla, sed
                  sollicitudin diam massa semper purus. Vivamus vel turpis
                  ipsum. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Morbi euismod turpis dapibus quam fermentum
                  condimentum. Mauris ex orci, consequat quis tempor eu, finibus
                  vitae eros. Ut eu erat eu ipsum pulvinar cursus vel at dui.
                  Etiam tincidunt quam porta nulla suscipit vestibulum. Sed
                  iaculis enim leo, et aliquam justo feugiat in. Vivamus in
                  ornare nulla, at tempor massa. Sed et aliquam
                  nisi.</ic-typography
                >
                <ic-typography
                  >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                  orci. Suspendisse molestie posuere leo vitae posuere. Cras
                  lacinia urna non erat gravida sagittis. Quisque dapibus arcu
                  nec sem pharetra convallis. Nullam sed arcu mollis, posuere
                  elit at, condimentum ligula. Nullam maximus nulla quam, ut
                  euismod est feugiat at. Quisque ut venenatis ex, in facilisis
                  sapien. Pellentesque in orci vitae metus iaculis venenatis.
                  Nunc porttitor tellus arcu, in posuere quam vulputate nec.
                  Aenean in venenatis ligula, non mollis quam. Suspendisse nec
                  enim vel massa finibus pretium et a urna. Etiam suscipit
                  semper est, id efficitur diam sollicitudin nec. Nullam nibh
                  sapien, condimentum ut laoreet et, euismod ac mi. Vestibulum
                  tristique odio non risus ullamcorper, et aliquam turpis
                  varius. Nunc metus ex, tempus a augue sit amet, interdum
                  vulputate libero.</ic-typography
                >
                <ic-typography
                  >Aenean convallis libero id magna congue pellentesque. Nulla
                  iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                  molestie. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Integer sollicitudin
                  in felis vitae rhoncus. Sed eu elementum massa. Cras ut
                  accumsan risus. Donec nec augue justo. Aenean sagittis luctus
                  leo egestas consectetur. Sed sit amet nisl quis felis volutpat
                  facilisis ac vitae tellus. Curabitur pharetra commodo
                  consequat. Aliquam consequat ipsum lacus, sed faucibus sapien
                  mollis vel.</ic-typography
                >
              </ic-section-container>
              <ic-drawer
                id="playground-example"
                chevron-button-aria-label=${args.chevronButtonAriaLabel}
                close-button-aria-label=${args.closeButtonAriaLabel}
                close-on-backdrop-click=${args.closeOnBackdropClick}
                expanded=${args.expanded}
                heading=${args.heading}
                message=${args.message}
                position=${args.position}
                size=${args.size}
                show-close-button=${args.showCloseButton}
                trigger=${args.trigger}
              >
                <ic-button variant="secondary" slot=${args.actionsSlot}
                  >Secondary action</ic-button
                >
                <ic-button slot=${args.actionsSlot}>Primary action</ic-button>
              </ic-drawer>
            </main>
            <ic-back-to-top target="main"></ic-back-to-top>
            <ic-footer
              description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
              caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
            >
              <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
              <ic-footer-link slot="link" href="/"
                >Accessibility</ic-footer-link
              >
              <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
              <ic-footer-link slot="link" href="/">Components</ic-footer-link>
              <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
              <ic-footer-link slot="link" href="/"
                >Design toolkit</ic-footer-link
              >
              <div
                slot="logo"
                style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
              >
                Logo
              </div>
            </ic-footer>
          </div>
        </div>
        <ic-classification-banner
          classification="official"
        ></ic-classification-banner>
        <script>
          const options = [
            { label: "Espresso", value: "espresso" },
            { label: "Double Espresso", value: "doubleespresso" },
            { label: "Flat White", value: "flatwhite" },
            { label: "Cappuccino", value: "cappuccino" },
            { label: "Americano", value: "americano" },
            { label: "Ameno", value: "ameno" },
            { label: "Aicano", value: "acano" },
            { label: "Mocha", value: "mocha" },
          ];
          document.querySelector("#page-header-search-bar").options = options;
          let drawer = document.querySelector("ic-drawer#playground-example");
          function expandDrawer() {
            drawer.expanded = true;
          }
        </script>
      `;playground.storyName="Playground",playground.argTypes={actionsSlot:{mapping:{true:"actions",false:""}},size:{options:["small","medium","large"],control:{type:"radio"}},position:{options:["top","bottom","left","right"],control:{type:"radio"}},trigger:{options:["arrow","controlled"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`\n        <div style="display:flex;">\n          <ic-side-navigation\n            app-title="Déja-brew"\n            version="v0.0.7"\n            status="BETA"\n          >\n            <svg\n              slot="app-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n            <ic-navigation-item slot="primary-navigation" href="/" label="Home">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n            <ic-navigation-item\n              slot="primary-navigation"\n              href="/"\n              label="Search"\n              selected="true"\n            >\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n            <ic-divider slot="primary-navigation"></ic-divider>\n            <ic-navigation-item\n              slot="primary-navigation"\n              href="/"\n              label="Trends"\n            >\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n            <ic-navigation-group\n              slot="primary-navigation"\n              label="Second navigation group"\n              expandable="true"\n            >\n              <ic-navigation-item label="Different navigation" href="/">\n                <svg\n                  slot="icon"\n                  width="24"\n                  height="24"\n                  viewBox="0 0 24 24"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                    fill="currentColor"\n                  />\n                </svg>\n              </ic-navigation-item>\n              <ic-navigation-item label="Navigation" href="/">\n                <svg\n                  slot="icon"\n                  width="24"\n                  height="24"\n                  viewBox="0 0 24 24"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                    fill="currentColor"\n                  />\n                </svg>\n              </ic-navigation-item>\n            </ic-navigation-group>\n            <ic-navigation-item\n              slot="primary-navigation"\n              href="/"\n              label="This is a very very very long label for the navigation item"\n            >\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n            <ic-navigation-item\n              slot="secondary-navigation"\n              href="/"\n              label="Settings"\n            >\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n          </ic-side-navigation>\n          <div\n            class="content-wrapper"\n            style="display:flex; flex-direction: column; flex-grow: 1;"\n          >\n            <main id="main">\n              <ic-page-header\n                heading="Page header"\n                subheading="This is a page header component with additional functionality and this is the text."\n                aligned="full-width"\n                sticky\n              >\n                <ic-status-tag\n                  slot="heading-adornment"\n                  label="Beta"\n                ></ic-status-tag>\n                <ic-search-bar\n                  hide-label="true"\n                  id="page-header-search-bar"\n                  characters-until-suggestion="1"\n                  slot="input"\n                  label="What is your favourite coffee?"\n                ></ic-search-bar>\n              </ic-page-header>\n              <ic-section-container id="top-target">\n                ${args.trigger === "controlled" ? html`<ic-card-horizontal\n                      heading="Roasted coffee"\n                      size="large"\n                    >\n                      <svg\n                        slot="icon"\n                        xmlns="http://www.w3.org/2000/svg"\n                        height="24px"\n                        viewBox="0 0 24 24"\n                        width="24px"\n                        fill="#000000"\n                      >\n                        <path d="M0 0h24v24H0V0z" fill="none" />\n                        <path\n                          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                        />\n                      </svg>\n                      <svg\n                        slot="image"\n                        xmlns="http://www.w3.org/2000/svg"\n                        viewBox="0 0 1600 900"\n                      >\n                        <rect\n                          fill="#ff7700"\n                          width="1600"\n                          height="1600"\n                          y="-350"\n                        />\n                        <polygon\n                          fill="#cc0000"\n                          points="957 450 539 900 1396 900"\n                        />\n                        <polygon\n                          fill="#aa0000"\n                          points="957 450 872.9 900 1396 900"\n                        />\n                        <polygon\n                          fill="#c50022"\n                          points="-60 900 398 662 816 900"\n                        />\n                        <polygon\n                          fill="#a3001b"\n                          points="337 900 398 662 816 900"\n                        />\n                        <polygon\n                          fill="#be0044"\n                          points="1203 546 1552 900 876 900"\n                        />\n                        <polygon\n                          fill="#9c0036"\n                          points="1203 546 1552 900 1162 900"\n                        />\n                        <polygon\n                          fill="#b80066"\n                          points="641 695 886 900 367 900"\n                        />\n                        <polygon\n                          fill="#960052"\n                          points="587 900 641 695 886 900"\n                        />\n                        <polygon\n                          fill="#b10088"\n                          points="1710 900 1401 632 1096 900"\n                        />\n                        <polygon\n                          fill="#8f006d"\n                          points="1710 900 1401 632 1365 900"\n                        />\n                        <polygon\n                          fill="#aa00aa"\n                          points="1210 900 971 687 725 900"\n                        />\n                        <polygon\n                          fill="#880088"\n                          points="943 900 1210 900 971 687"\n                        />\n                      </svg>\n                      <div\n                        style="display: flex; gap: var(--ic-space-xs); padding: var(--ic-space-xs)"\n                        slot="message"\n                      >\n                        <ic-button variant="secondary" onclick="expandDrawer()"\n                          >Learn more</ic-button\n                        ><ic-button>Add to order</ic-button>\n                      </div>\n                    </ic-card-horizontal>` : ""}\n                <ic-typography\n                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n                  vestibulum venenatis facilisis. Nam tortor felis, auctor vel\n                  ante quis, tempor interdum libero. In dictum sodales velit, eu\n                  egestas arcu dignissim ac. Aliquam facilisis eros dolor, id\n                  laoreet orci sagittis ut. Sed tempus, lacus in pretium\n                  molestie, lectus magna interdum risus, vel fringilla libero ex\n                  eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus\n                  congue velit nisl, vitae congue ligula rutrum id. <br /><br />\n                  Etiam in suscipit metus. Duis semper, sapien a molestie\n                  semper, ex nibh porttitor tellus, vel molestie justo odio vel\n                  purus. Curabitur porttitor, tortor sed semper sollicitudin,\n                  odio odio congue tortor, eget pulvinar tellus nisl ac lacus.\n                  In ultricies commodo lorem, a laoreet diam. Ut a mauris at\n                  tellus tincidunt ullamcorper sit amet in metus. Aenean\n                  facilisis placerat dictum. Phasellus mattis ante sollicitudin\n                  luctus iaculis. Nam porttitor lobortis rhoncus. Nam nec\n                  malesuada purus, at pulvinar mauris. Nam non lorem ante.<br /><br />\n                  Donec aliquam eget mauris condimentum cursus. Nullam tempus a\n                  urna in commodo. Proin mauris augue, viverra id finibus id,\n                  vulputate in ante. Aliquam volutpat hendrerit tellus vitae\n                  tristique. Donec pellentesque enim arcu, at feugiat mauris\n                  venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam\n                  eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse\n                  eget interdum lorem. Phasellus pretium urna id elit pharetra\n                  hendrerit.</ic-typography\n                >\n                <ic-typography\n                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                  Praesent eget orci condimentum, tempus tortor posuere, lacinia\n                  ex. Curabitur bibendum suscipit turpis vitae mollis. Ut\n                  laoreet orci a risus facilisis porta. Orci varius natoque\n                  penatibus et magnis dis parturient montes, nascetur ridiculus\n                  mus. Curabitur a porttitor neque, ac dignissim velit. Morbi\n                  quis malesuada massa, vitae sodales tellus. Aenean laoreet\n                  mattis lobortis. In mauris erat, tincidunt in placerat sed,\n                  pretium ac tortor. Morbi blandit lacus a leo vehicula\n                  aliquet.</ic-typography\n                >\n                <ic-typography\n                  >Pellentesque aliquam risus vel eros maximus, at pellentesque\n                  mi pretium. Etiam nec velit at orci varius porttitor. Aliquam\n                  facilisis, elit non cursus fringilla, metus metus malesuada\n                  lacus, at blandit nibh augue aliquet orci. Duis aliquam, est\n                  eget sodales ullamcorper, eros turpis euismod nulla, sed\n                  sollicitudin diam massa semper purus. Vivamus vel turpis\n                  ipsum. Interdum et malesuada fames ac ante ipsum primis in\n                  faucibus. Morbi euismod turpis dapibus quam fermentum\n                  condimentum. Mauris ex orci, consequat quis tempor eu, finibus\n                  vitae eros. Ut eu erat eu ipsum pulvinar cursus vel at dui.\n                  Etiam tincidunt quam porta nulla suscipit vestibulum. Sed\n                  iaculis enim leo, et aliquam justo feugiat in. Vivamus in\n                  ornare nulla, at tempor massa. Sed et aliquam\n                  nisi.</ic-typography\n                >\n                <ic-typography\n                  >Mauris tempus accumsan libero non tincidunt. Curabitur et leo\n                  orci. Suspendisse molestie posuere leo vitae posuere. Cras\n                  lacinia urna non erat gravida sagittis. Quisque dapibus arcu\n                  nec sem pharetra convallis. Nullam sed arcu mollis, posuere\n                  elit at, condimentum ligula. Nullam maximus nulla quam, ut\n                  euismod est feugiat at. Quisque ut venenatis ex, in facilisis\n                  sapien. Pellentesque in orci vitae metus iaculis venenatis.\n                  Nunc porttitor tellus arcu, in posuere quam vulputate nec.\n                  Aenean in venenatis ligula, non mollis quam. Suspendisse nec\n                  enim vel massa finibus pretium et a urna. Etiam suscipit\n                  semper est, id efficitur diam sollicitudin nec. Nullam nibh\n                  sapien, condimentum ut laoreet et, euismod ac mi. Vestibulum\n                  tristique odio non risus ullamcorper, et aliquam turpis\n                  varius. Nunc metus ex, tempus a augue sit amet, interdum\n                  vulputate libero.</ic-typography\n                >\n                <ic-typography\n                  >Aenean convallis libero id magna congue pellentesque. Nulla\n                  iaculis interdum porta. Aenean laoreet scelerisque nulla vel\n                  molestie. Class aptent taciti sociosqu ad litora torquent per\n                  conubia nostra, per inceptos himenaeos. Integer sollicitudin\n                  in felis vitae rhoncus. Sed eu elementum massa. Cras ut\n                  accumsan risus. Donec nec augue justo. Aenean sagittis luctus\n                  leo egestas consectetur. Sed sit amet nisl quis felis volutpat\n                  facilisis ac vitae tellus. Curabitur pharetra commodo\n                  consequat. Aliquam consequat ipsum lacus, sed faucibus sapien\n                  mollis vel.</ic-typography\n                >\n              </ic-section-container>\n              <ic-drawer\n                id="playground-example"\n                chevron-button-aria-label=${args.chevronButtonAriaLabel}\n                close-button-aria-label=${args.closeButtonAriaLabel}\n                close-on-backdrop-click=${args.closeOnBackdropClick}\n                expanded=${args.expanded}\n                heading=${args.heading}\n                message=${args.message}\n                position=${args.position}\n                size=${args.size}\n                show-close-button=${args.showCloseButton}\n                trigger=${args.trigger}\n              >\n                <ic-button variant="secondary" slot=${args.actionsSlot}\n                  >Secondary action</ic-button\n                >\n                <ic-button slot=${args.actionsSlot}>Primary action</ic-button>\n              </ic-drawer>\n            </main>\n            <ic-back-to-top target="main"></ic-back-to-top>\n            <ic-footer\n              description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n              please get in touch."\n              caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n            >\n              <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n              <ic-footer-link slot="link" href="/"\n                >Accessibility</ic-footer-link\n              >\n              <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n              <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n              <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n              <ic-footer-link slot="link" href="/"\n                >Design toolkit</ic-footer-link\n              >\n              <div\n                slot="logo"\n                style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n              >\n                Logo\n              </div>\n            </ic-footer>\n          </div>\n        </div>\n        <ic-classification-banner\n          classification="official"\n        ></ic-classification-banner>\n        <script>\n          const options = [\n            { label: "Espresso", value: "espresso" },\n            { label: "Double Espresso", value: "doubleespresso" },\n            { label: "Flat White", value: "flatwhite" },\n            { label: "Cappuccino", value: "cappuccino" },\n            { label: "Americano", value: "americano" },\n            { label: "Ameno", value: "ameno" },\n            { label: "Aicano", value: "acano" },\n            { label: "Mocha", value: "mocha" },\n          ];\n          document.querySelector("#page-header-search-bar").options = options;\n          let drawer = document.querySelector("ic-drawer#playground-example");\n          function expandDrawer() {\n            drawer.expanded = true;\n          }\n        <\/script>\n      `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Drawer",parameters:{componentAPI:{data:readme_namespaceObject},layout:"fullscreen"},tags:["stories-mdx"],includeStories:["rightPosition","leftPosition","topPosition","bottomPosition","slottedContent","manualTrigger","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_drawer_stories=componentMeta,__namedExportsOrder=["defaultArgs","rightPosition","leftPosition","topPosition","bottomPosition","slottedContent","manualTrigger","playground"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-drawer-ic-drawer-stories-mdx.0333b423.iframe.bundle.js.map