/*! For license information please see components-ic-tooltip-ic-tooltip-stories-mdx.26ab4415.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2375],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-tooltip/ic-tooltip.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,bottomPlacements:()=>bottomPlacements,darkBackground:()=>darkBackground,default:()=>ic_tooltip_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,disabledHover:()=>disabledHover,leftPlacements:()=>leftPlacements,playground:()=>playground,rightPlacements:()=>rightPlacements,topPlacements:()=>topPlacements,truncation:()=>truncation,usingExternalMethod:()=>usingExternalMethod});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-tooltip\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute       | Description                                                                                             | Type                                                                                                                                                                 | Default     |\n| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `disableHover`       | `disable-hover` | If `true`, the tooltip will not be displayed on hover, it will require a click.                         | `boolean`                                                                                                                                                            | `false`     |\n| `label` _(required)_ | `label`         | The text to display on the tooltip.                                                                     | `string`                                                                                                                                                             | `undefined` |\n| `maxLines`           | `max-lines`     | The number of lines to display before truncating the text.                                              | `number`                                                                                                                                                             | `undefined` |\n| `placement`          | `placement`     | The position of the tooltip in relation to the parent element.                                          | `"bottom" \\| "bottom-end" \\| "bottom-start" \\| "left" \\| "left-end" \\| "left-start" \\| "right" \\| "right-end" \\| "right-start" \\| "top" \\| "top-end" \\| "top-start"` | `"bottom"`  |\n| `target`             | `target`        | The ID of the element the tooltip is describing - for when aria-labelledby or aria-describedby is used. | `string`                                                                                                                                                             | `undefined` |\n\n\n## Methods\n\n### `displayTooltip(show: boolean, persistTooltip?: boolean) => Promise<void>`\n\nMethod to programmatically show/hide the tooltip without needing to interact with an anchor element\n\n#### Parameters\n\n| Name             | Type      | Description                                                                                                                          |\n| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |\n| `show`           | `boolean` | Whether to show or hide the tooltip                                                                                                  |\n| `persistTooltip` | `boolean` | Whether the tooltip should stay on the screen when actions are performed that would previously dismiss the tooltip, such as on hover |\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                   | Description        |\n| ---------------------- | ------------------ |\n| `--ic-z-index-tooltip` | z-index of tooltip |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-back-to-top](../ic-back-to-top)\n - [ic-button](../ic-button)\n - [ic-card](../ic-card)\n - [ic-chip](../ic-chip)\n - [ic-navigation-item](../ic-navigation-item)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tooltip --\x3e ic-typography\n  ic-back-to-top --\x3e ic-tooltip\n  ic-button --\x3e ic-tooltip\n  ic-card --\x3e ic-tooltip\n  ic-chip --\x3e ic-tooltip\n  ic-navigation-item --\x3e ic-tooltip\n  style ic-tooltip fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={disableHover:!1,maxLines:3,placement:"bottom",label:"This is a description of the button"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Tooltip",component:"ic-tooltip"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",height:"100px",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<ic-tooltip
        label="This is a description of the button"
        target="test-button-default"
        id="ic-tooltip-test-button-default"
        ><button
          id="test-button-default"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Default
        </button></ic-tooltip
      >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"using-external-method",children:"Using external method"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Using external method",height:"100px",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<script>
          let display = true;
          document
            .querySelector("#clickMe")
            .addEventListener("click", handleDisplay);
          const tooltip = document.querySelector("ic-tooltip");
          function handleDisplay() {
            tooltip.displayTooltip(display, display);
            display = !display;
          }
        </script>
        <button id="clickMe">Show tooltip</button>
        <ic-tooltip
          label="This is a description of the button"
          target="test-button-default"
          id="ic-tooltip-test-button-default"
          ><button
            id="test-button-default"
            aria-describedby="ic-tooltip-test-button-default"
          >
            Default
          </button></ic-tooltip
        >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-hover",children:"Disabled Hover"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled Hover",height:"100px",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<ic-tooltip
        label="This shows 'Code' has been copied"
        target="test-button-disable-hover"
        id="ic-tooltip-test-button-disable-hover"
        disable-hover="true"
        ><button
          id="test-button-disable-hover"
          aria-describedby="ic-tooltip-test-button-disable-hover"
          onclick="navigator.clipboard.writeText('Code')"
        >
          Show tooltip
        </button></ic-tooltip
      >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"top-placements",children:"Top placements"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Top placements",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <div style="margin: 40px">
        <ic-tooltip
          placement="top-start"
          label="This is a description of the button"
          id="ic-tooltip-test-button-top-start"
          target="test-button-top-start"
        >
          <button
            id="test-button-top-start"
            aria-describedby="ic-tooltip-test-button-top-start"
          >
            Top start
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="top"
          label="This is a description of the button"
          id="ic-tooltip-test-button-top"
          target="test-button-top"
        >
          <button
            id="test-button-top"
            aria-describedby="ic-tooltip-test-button-top"
          >
            Top
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="top-end"
          label="This is a description of the button"
          id="ic-tooltip-test-button-top-end"
          target="test-button-top-end"
        >
          <button
            id="test-button-top-end"
            aria-describedby="ic-tooltip-test-button-top-end"
          >
            Top end
          </button></ic-tooltip
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bottom-placements",children:"Bottom placements"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Bottom placements",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <div style="margin: 40px">
        <ic-tooltip
          placement="bottom-start"
          label="This is a description of the button"
          id="ic-tooltip-test-button-bottom-start"
          target="test-button-bottom-start"
        >
          <button
            id="test-button-bottom-start"
            aria-describedby="ic-tooltip-test-button-bottom-start"
          >
            Bottom start
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="bottom"
          label="This is a description of the button"
          id="ic-tooltip-test-button-bottom"
          target="test-button-bottom"
        >
          <button
            id="test-button-bottom"
            aria-describedby="ic-tooltip-test-button-bottom"
          >
            Bottom
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="bottom-end"
          label="This is a description of the button"
          id="ic-tooltip-test-button-bottom-end"
          target="test-button-bottom-end"
        >
          <button
            id="test-button-bottom-end"
            aria-describedby="ic-tooltip-test-button-bottom-end"
          >
            Bottom end
          </button></ic-tooltip
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"right-placements",children:"Right placements"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Right placements",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <div style="margin: 40px">
        <ic-tooltip
          placement="right-start"
          label="This is a description of the button"
          id="ic-tooltip-test-button-right-start"
          target="test-button-right-start"
        >
          <button
            id="test-button-right-start"
            aria-describedby="ic-tooltip-test-button-right-start"
          >
            Right start
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="right"
          label="This is a description of the button"
          id="ic-tooltip-test-button-right"
          target="test-button-right"
        >
          <button
            id="test-button-right"
            aria-describedby="ic-tooltip-test-button-right"
          >
            Right
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="right-end"
          label="This is a description of the button"
          id="ic-tooltip-test-button-right-end"
          target="test-button-right-end"
        >
          <button
            id="test-button-right-end"
            aria-describedby="ic-tooltip-test-button-right-end"
          >
            Right end
          </button></ic-tooltip
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-placements",children:"Left placements"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Left placements",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <div style="margin-left: 400px">
        <ic-tooltip
          placement="left-start"
          label="This is a description of the button"
          id="ic-tooltip-test-button-left-start"
          target="test-button-left-start"
        >
          <button
            id="test-button-left-start"
            aria-describedby="ic-tooltip-test-button-left-start"
          >
            Left start
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="left"
          label="This is a description of the button"
          id="ic-tooltip-test-button-left"
          target="test-button-left"
        >
          <button
            id="test-button-left"
            aria-describedby="ic-tooltip-test-button-left"
          >
            Left
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="left-end"
          label="This is a description of the button"
          id="ic-tooltip-test-button-left-end"
          target="test-button-left-end"
        >
          <button
            id="test-button-left-end"
            aria-describedby="ic-tooltip-test-button-left-end"
          >
            Left end
          </button></ic-tooltip
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"truncation",children:"Truncation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Truncation",height:"100px",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<ic-tooltip
        label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the max-lines property. The number of lines in the text is clamped to the number passed through the max-lines property."
        target="test-button-truncation"
        max-lines="3"
        id="ic-tooltip-test-button-truncation"
        ><button
          id="test-button-truncation"
          aria-describedby="ic-tooltip-test-button-truncation"
        >
          Default
        </button></ic-tooltip
      >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dark-background",children:"Dark background"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Dark background",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<div style="height: 100px;background-color:#333333;">
        <ic-tooltip
          label="This is a description of the button"
          id="ic-tooltip-test-button-dark"
          target="test-button-dark"
        >
          <button
            id="test-button-dark"
            aria-describedby="ic-tooltip-test-button-dark"
          >
            Default
          </button>
        </ic-tooltip>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,argTypes:{placement:{options:["bottom","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom-start","left-end","left","left-start"],control:{type:"select"}}},name:"Playground",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<div style="margin: 250px">
        <ic-tooltip
          label=${args.label}
          placement=${args.placement}
          max-lines=${args.maxLines}
          disable-hover=${args.disableHover}
          id="ic-tooltip-test-button-default"
          target="button-id"
        >
          <button
            id="button-id"
            aria-describedby="ic-tooltip-test-button-default"
          >
            Button 1
          </button>
        </ic-tooltip>
      </div> `})})]})}const defaultStory=args=>lit_html.qy`<ic-tooltip
        label="This is a description of the button"
        target="test-button-default"
        id="ic-tooltip-test-button-default"
        ><button
          id="test-button-default"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Default
        </button></ic-tooltip
      >`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`<ic-tooltip\n        label="This is a description of the button"\n        target="test-button-default"\n        id="ic-tooltip-test-button-default"\n        ><button\n          id="test-button-default"\n          aria-describedby="ic-tooltip-test-button-default"\n        >\n          Default\n        </button></ic-tooltip\n      >`'},loki:{skip:!0}};const usingExternalMethod=args=>lit_html.qy`<script>
          let display = true;
          document
            .querySelector("#clickMe")
            .addEventListener("click", handleDisplay);
          const tooltip = document.querySelector("ic-tooltip");
          function handleDisplay() {
            tooltip.displayTooltip(display, display);
            display = !display;
          }
        </script>
        <button id="clickMe">Show tooltip</button>
        <ic-tooltip
          label="This is a description of the button"
          target="test-button-default"
          id="ic-tooltip-test-button-default"
          ><button
            id="test-button-default"
            aria-describedby="ic-tooltip-test-button-default"
          >
            Default
          </button></ic-tooltip
        >`;usingExternalMethod.storyName="Using external method",usingExternalMethod.parameters={storySource:{source:'args => html`<script>\n          let display = true;\n          document\n            .querySelector("#clickMe")\n            .addEventListener("click", handleDisplay);\n          const tooltip = document.querySelector("ic-tooltip");\n          function handleDisplay() {\n            tooltip.displayTooltip(display, display);\n            display = !display;\n          }\n        <\/script>\n        <button id="clickMe">Show tooltip</button>\n        <ic-tooltip\n          label="This is a description of the button"\n          target="test-button-default"\n          id="ic-tooltip-test-button-default"\n          ><button\n            id="test-button-default"\n            aria-describedby="ic-tooltip-test-button-default"\n          >\n            Default\n          </button></ic-tooltip\n        >`'},loki:{skip:!0}};const disabledHover=args=>lit_html.qy`<ic-tooltip
        label="This shows 'Code' has been copied"
        target="test-button-disable-hover"
        id="ic-tooltip-test-button-disable-hover"
        disable-hover="true"
        ><button
          id="test-button-disable-hover"
          aria-describedby="ic-tooltip-test-button-disable-hover"
          onclick="navigator.clipboard.writeText('Code')"
        >
          Show tooltip
        </button></ic-tooltip
      >`;disabledHover.storyName="Disabled Hover",disabledHover.parameters={storySource:{source:'args => html`<ic-tooltip\n        label="This shows \'Code\' has been copied"\n        target="test-button-disable-hover"\n        id="ic-tooltip-test-button-disable-hover"\n        disable-hover="true"\n        ><button\n          id="test-button-disable-hover"\n          aria-describedby="ic-tooltip-test-button-disable-hover"\n          onclick="navigator.clipboard.writeText(\'Code\')"\n        >\n          Show tooltip\n        </button></ic-tooltip\n      >`'},loki:{skip:!0}};const topPlacements=args=>lit_html.qy` <div style="margin: 40px">
        <ic-tooltip
          placement="top-start"
          label="This is a description of the button"
          id="ic-tooltip-test-button-top-start"
          target="test-button-top-start"
        >
          <button
            id="test-button-top-start"
            aria-describedby="ic-tooltip-test-button-top-start"
          >
            Top start
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="top"
          label="This is a description of the button"
          id="ic-tooltip-test-button-top"
          target="test-button-top"
        >
          <button
            id="test-button-top"
            aria-describedby="ic-tooltip-test-button-top"
          >
            Top
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="top-end"
          label="This is a description of the button"
          id="ic-tooltip-test-button-top-end"
          target="test-button-top-end"
        >
          <button
            id="test-button-top-end"
            aria-describedby="ic-tooltip-test-button-top-end"
          >
            Top end
          </button></ic-tooltip
        >
      </div>`;topPlacements.storyName="Top placements",topPlacements.parameters={storySource:{source:'args => html` <div style="margin: 40px">\n        <ic-tooltip\n          placement="top-start"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-top-start"\n          target="test-button-top-start"\n        >\n          <button\n            id="test-button-top-start"\n            aria-describedby="ic-tooltip-test-button-top-start"\n          >\n            Top start\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="top"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-top"\n          target="test-button-top"\n        >\n          <button\n            id="test-button-top"\n            aria-describedby="ic-tooltip-test-button-top"\n          >\n            Top\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="top-end"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-top-end"\n          target="test-button-top-end"\n        >\n          <button\n            id="test-button-top-end"\n            aria-describedby="ic-tooltip-test-button-top-end"\n          >\n            Top end\n          </button></ic-tooltip\n        >\n      </div>`'},loki:{skip:!0}};const bottomPlacements=args=>lit_html.qy` <div style="margin: 40px">
        <ic-tooltip
          placement="bottom-start"
          label="This is a description of the button"
          id="ic-tooltip-test-button-bottom-start"
          target="test-button-bottom-start"
        >
          <button
            id="test-button-bottom-start"
            aria-describedby="ic-tooltip-test-button-bottom-start"
          >
            Bottom start
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="bottom"
          label="This is a description of the button"
          id="ic-tooltip-test-button-bottom"
          target="test-button-bottom"
        >
          <button
            id="test-button-bottom"
            aria-describedby="ic-tooltip-test-button-bottom"
          >
            Bottom
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="bottom-end"
          label="This is a description of the button"
          id="ic-tooltip-test-button-bottom-end"
          target="test-button-bottom-end"
        >
          <button
            id="test-button-bottom-end"
            aria-describedby="ic-tooltip-test-button-bottom-end"
          >
            Bottom end
          </button></ic-tooltip
        >
      </div>`;bottomPlacements.storyName="Bottom placements",bottomPlacements.parameters={storySource:{source:'args => html` <div style="margin: 40px">\n        <ic-tooltip\n          placement="bottom-start"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-bottom-start"\n          target="test-button-bottom-start"\n        >\n          <button\n            id="test-button-bottom-start"\n            aria-describedby="ic-tooltip-test-button-bottom-start"\n          >\n            Bottom start\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="bottom"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-bottom"\n          target="test-button-bottom"\n        >\n          <button\n            id="test-button-bottom"\n            aria-describedby="ic-tooltip-test-button-bottom"\n          >\n            Bottom\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="bottom-end"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-bottom-end"\n          target="test-button-bottom-end"\n        >\n          <button\n            id="test-button-bottom-end"\n            aria-describedby="ic-tooltip-test-button-bottom-end"\n          >\n            Bottom end\n          </button></ic-tooltip\n        >\n      </div>`'},loki:{skip:!0}};const rightPlacements=args=>lit_html.qy` <div style="margin: 40px">
        <ic-tooltip
          placement="right-start"
          label="This is a description of the button"
          id="ic-tooltip-test-button-right-start"
          target="test-button-right-start"
        >
          <button
            id="test-button-right-start"
            aria-describedby="ic-tooltip-test-button-right-start"
          >
            Right start
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="right"
          label="This is a description of the button"
          id="ic-tooltip-test-button-right"
          target="test-button-right"
        >
          <button
            id="test-button-right"
            aria-describedby="ic-tooltip-test-button-right"
          >
            Right
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="right-end"
          label="This is a description of the button"
          id="ic-tooltip-test-button-right-end"
          target="test-button-right-end"
        >
          <button
            id="test-button-right-end"
            aria-describedby="ic-tooltip-test-button-right-end"
          >
            Right end
          </button></ic-tooltip
        >
      </div>`;rightPlacements.storyName="Right placements",rightPlacements.parameters={storySource:{source:'args => html` <div style="margin: 40px">\n        <ic-tooltip\n          placement="right-start"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-right-start"\n          target="test-button-right-start"\n        >\n          <button\n            id="test-button-right-start"\n            aria-describedby="ic-tooltip-test-button-right-start"\n          >\n            Right start\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="right"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-right"\n          target="test-button-right"\n        >\n          <button\n            id="test-button-right"\n            aria-describedby="ic-tooltip-test-button-right"\n          >\n            Right\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="right-end"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-right-end"\n          target="test-button-right-end"\n        >\n          <button\n            id="test-button-right-end"\n            aria-describedby="ic-tooltip-test-button-right-end"\n          >\n            Right end\n          </button></ic-tooltip\n        >\n      </div>`'},loki:{skip:!0}};const leftPlacements=args=>lit_html.qy` <div style="margin-left: 400px">
        <ic-tooltip
          placement="left-start"
          label="This is a description of the button"
          id="ic-tooltip-test-button-left-start"
          target="test-button-left-start"
        >
          <button
            id="test-button-left-start"
            aria-describedby="ic-tooltip-test-button-left-start"
          >
            Left start
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="left"
          label="This is a description of the button"
          id="ic-tooltip-test-button-left"
          target="test-button-left"
        >
          <button
            id="test-button-left"
            aria-describedby="ic-tooltip-test-button-left"
          >
            Left
          </button>
        </ic-tooltip>
        <ic-tooltip
          placement="left-end"
          label="This is a description of the button"
          id="ic-tooltip-test-button-left-end"
          target="test-button-left-end"
        >
          <button
            id="test-button-left-end"
            aria-describedby="ic-tooltip-test-button-left-end"
          >
            Left end
          </button></ic-tooltip
        >
      </div>`;leftPlacements.storyName="Left placements",leftPlacements.parameters={storySource:{source:'args => html` <div style="margin-left: 400px">\n        <ic-tooltip\n          placement="left-start"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-left-start"\n          target="test-button-left-start"\n        >\n          <button\n            id="test-button-left-start"\n            aria-describedby="ic-tooltip-test-button-left-start"\n          >\n            Left start\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="left"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-left"\n          target="test-button-left"\n        >\n          <button\n            id="test-button-left"\n            aria-describedby="ic-tooltip-test-button-left"\n          >\n            Left\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="left-end"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-left-end"\n          target="test-button-left-end"\n        >\n          <button\n            id="test-button-left-end"\n            aria-describedby="ic-tooltip-test-button-left-end"\n          >\n            Left end\n          </button></ic-tooltip\n        >\n      </div>`'},loki:{skip:!0}};const truncation=args=>lit_html.qy`<ic-tooltip
        label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the max-lines property. The number of lines in the text is clamped to the number passed through the max-lines property."
        target="test-button-truncation"
        max-lines="3"
        id="ic-tooltip-test-button-truncation"
        ><button
          id="test-button-truncation"
          aria-describedby="ic-tooltip-test-button-truncation"
        >
          Default
        </button></ic-tooltip
      >`;truncation.storyName="Truncation",truncation.parameters={storySource:{source:'args => html`<ic-tooltip\n        label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the max-lines property. The number of lines in the text is clamped to the number passed through the max-lines property."\n        target="test-button-truncation"\n        max-lines="3"\n        id="ic-tooltip-test-button-truncation"\n        ><button\n          id="test-button-truncation"\n          aria-describedby="ic-tooltip-test-button-truncation"\n        >\n          Default\n        </button></ic-tooltip\n      >`'},loki:{skip:!0}};const darkBackground=args=>lit_html.qy`<div style="height: 100px;background-color:#333333;">
        <ic-tooltip
          label="This is a description of the button"
          id="ic-tooltip-test-button-dark"
          target="test-button-dark"
        >
          <button
            id="test-button-dark"
            aria-describedby="ic-tooltip-test-button-dark"
          >
            Default
          </button>
        </ic-tooltip>
      </div>`;darkBackground.storyName="Dark background",darkBackground.parameters={storySource:{source:'args => html`<div style="height: 100px;background-color:#333333;">\n        <ic-tooltip\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-dark"\n          target="test-button-dark"\n        >\n          <button\n            id="test-button-dark"\n            aria-describedby="ic-tooltip-test-button-dark"\n          >\n            Default\n          </button>\n        </ic-tooltip>\n      </div>`'},loki:{skip:!0}};const playground=args=>lit_html.qy`<div style="margin: 250px">
        <ic-tooltip
          label=${args.label}
          placement=${args.placement}
          max-lines=${args.maxLines}
          disable-hover=${args.disableHover}
          id="ic-tooltip-test-button-default"
          target="button-id"
        >
          <button
            id="button-id"
            aria-describedby="ic-tooltip-test-button-default"
          >
            Button 1
          </button>
        </ic-tooltip>
      </div> `;playground.storyName="Playground",playground.argTypes={placement:{options:["bottom","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom-start","left-end","left","left-start"],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`<div style="margin: 250px">\n        <ic-tooltip\n          label=${args.label}\n          placement=${args.placement}\n          max-lines=${args.maxLines}\n          disable-hover=${args.disableHover}\n          id="ic-tooltip-test-button-default"\n          target="button-id"\n        >\n          <button\n            id="button-id"\n            aria-describedby="ic-tooltip-test-button-default"\n          >\n            Button 1\n          </button>\n        </ic-tooltip>\n      </div> `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Tooltip",tags:["stories-mdx"],includeStories:["defaultStory","usingExternalMethod","disabledHover","topPlacements","bottomPlacements","rightPlacements","leftPlacements","truncation","darkBackground","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_tooltip_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","usingExternalMethod","disabledHover","topPlacements","bottomPlacements","rightPlacements","leftPlacements","truncation","darkBackground","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-tooltip-ic-tooltip-stories-mdx.26ab4415.iframe.bundle.js.map