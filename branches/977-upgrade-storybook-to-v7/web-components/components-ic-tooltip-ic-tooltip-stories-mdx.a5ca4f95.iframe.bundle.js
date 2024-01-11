/*! For license information please see components-ic-tooltip-ic-tooltip-stories-mdx.a5ca4f95.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6912],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-tooltip/ic-tooltip.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,bottomPlacements:()=>bottomPlacements,darkBackground:()=>darkBackground,default:()=>ic_tooltip_stories,defaultStory:()=>defaultStory,disabledHover:()=>disabledHover,leftPlacements:()=>leftPlacements,rightPlacements:()=>rightPlacements,topPlacements:()=>topPlacements,truncation:()=>truncation,usingExternalMethod:()=>usingExternalMethod});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-tooltip\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute       | Description                                                                                             | Type                                                                                                                                                                 | Default     |\n| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `disableHover`       | `disable-hover` | If `true`, the tooltip will not be displayed on hover, it will require a click.                         | `boolean`                                                                                                                                                            | `false`     |\n| `label` _(required)_ | `label`         | The text to display on the tooltip.                                                                     | `string`                                                                                                                                                             | `undefined` |\n| `maxLines`           | `max-lines`     | The number of lines to display before truncating the text.                                              | `number`                                                                                                                                                             | `undefined` |\n| `placement`          | `placement`     | The position of the tooltip in relation to the parent element.                                          | `"bottom" \\| "bottom-end" \\| "bottom-start" \\| "left" \\| "left-end" \\| "left-start" \\| "right" \\| "right-end" \\| "right-start" \\| "top" \\| "top-end" \\| "top-start"` | `"bottom"`  |\n| `target`             | `target`        | The ID of the element the tooltip is describing - for when aria-labelledby or aria-describedby is used. | `string`                                                                                                                                                             | `undefined` |\n\n\n## Methods\n\n### `displayTooltip(show: boolean, persistTooltip?: boolean) => Promise<void>`\n\nMethod to programmatically show/hide the tooltip without needing to interact with an anchor element\n\n#### Parameters\n\n| Name             | Type      | Description                                                                                                                          |\n| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |\n| `show`           | `boolean` | Whether to show or hide the tooltip                                                                                                  |\n| `persistTooltip` | `boolean` | Whether the tooltip should stay on the screen when actions are performed that would previously dismiss the tooltip, such as on hover |\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                   | Description        |\n| ---------------------- | ------------------ |\n| `--ic-z-index-tooltip` | z-index of tooltip |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-button](../ic-button)\n - [ic-chip](../ic-chip)\n - [ic-navigation-item](../ic-navigation-item)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tooltip --\x3e ic-typography\n  ic-button --\x3e ic-tooltip\n  ic-chip --\x3e ic-tooltip\n  ic-navigation-item --\x3e ic-tooltip\n  style ic-tooltip fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Tooltip",component:"ic-tooltip"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",height:"100px",children:args=>lit_html.dy`<ic-tooltip
        label="This is a description of the button"
        target="test-button-default"
        id="ic-tooltip-test-button-default"
        ><button
          id="test-button-default"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Default
        </button></ic-tooltip
      >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"using-external-method",children:"Using external method"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Using external method",height:"100px",children:args=>lit_html.dy`<script>
          let display = true;
          document
            .querySelector("#clickMe")
            .addEventListener("click", handleDisplay);
          const tooltip = document.querySelector("ic-tooltip");
          function handleDisplay() {
            tooltip.displayTooltip(display, true);
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
        >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-hover",children:"Disabled Hover"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled Hover",height:"100px",children:args=>lit_html.dy`<ic-tooltip
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
      >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"top-placements",children:"Top placements"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Top placements",children:args=>lit_html.dy` <div style="margin: 40px">
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
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bottom-placements",children:"Bottom placements"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Bottom placements",children:args=>lit_html.dy` <div style="margin: 40px">
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
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"right-placements",children:"Right placements"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Right placements",children:args=>lit_html.dy` <div style="margin: 40px">
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
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-placements",children:"Left placements"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Left placements",children:args=>lit_html.dy` <div style="margin-left: 400px">
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
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"truncation",children:"Truncation"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Truncation",height:"100px",children:args=>lit_html.dy`<ic-tooltip
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
      >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dark-background",children:"Dark background"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Dark background",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<div style="height: 100px;background-color:#333333;">
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
      </div>`})})]})}const defaultStory=args=>lit_html.dy`<ic-tooltip
        label="This is a description of the button"
        target="test-button-default"
        id="ic-tooltip-test-button-default"
        ><button
          id="test-button-default"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Default
        </button></ic-tooltip
      >`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`<ic-tooltip\n        label="This is a description of the button"\n        target="test-button-default"\n        id="ic-tooltip-test-button-default"\n        ><button\n          id="test-button-default"\n          aria-describedby="ic-tooltip-test-button-default"\n        >\n          Default\n        </button></ic-tooltip\n      >`'}};const usingExternalMethod=args=>lit_html.dy`<script>
          let display = true;
          document
            .querySelector("#clickMe")
            .addEventListener("click", handleDisplay);
          const tooltip = document.querySelector("ic-tooltip");
          function handleDisplay() {
            tooltip.displayTooltip(display, true);
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
        >`;usingExternalMethod.storyName="Using external method",usingExternalMethod.parameters={storySource:{source:'args => html`<script>\n          let display = true;\n          document\n            .querySelector("#clickMe")\n            .addEventListener("click", handleDisplay);\n          const tooltip = document.querySelector("ic-tooltip");\n          function handleDisplay() {\n            tooltip.displayTooltip(display, true);\n            display = !display;\n          }\n        <\/script>\n        <button id="clickMe">Show tooltip</button>\n        <ic-tooltip\n          label="This is a description of the button"\n          target="test-button-default"\n          id="ic-tooltip-test-button-default"\n          ><button\n            id="test-button-default"\n            aria-describedby="ic-tooltip-test-button-default"\n          >\n            Default\n          </button></ic-tooltip\n        >`'}};const disabledHover=args=>lit_html.dy`<ic-tooltip
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
      >`;disabledHover.storyName="Disabled Hover",disabledHover.parameters={storySource:{source:'args => html`<ic-tooltip\n        label="This shows \'Code\' has been copied"\n        target="test-button-disable-hover"\n        id="ic-tooltip-test-button-disable-hover"\n        disable-hover="true"\n        ><button\n          id="test-button-disable-hover"\n          aria-describedby="ic-tooltip-test-button-disable-hover"\n          onclick="navigator.clipboard.writeText(\'Code\')"\n        >\n          Show tooltip\n        </button></ic-tooltip\n      >`'}};const topPlacements=args=>lit_html.dy` <div style="margin: 40px">
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
      </div>`;topPlacements.storyName="Top placements",topPlacements.parameters={storySource:{source:'args => html` <div style="margin: 40px">\n        <ic-tooltip\n          placement="top-start"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-top-start"\n          target="test-button-top-start"\n        >\n          <button\n            id="test-button-top-start"\n            aria-describedby="ic-tooltip-test-button-top-start"\n          >\n            Top start\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="top"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-top"\n          target="test-button-top"\n        >\n          <button\n            id="test-button-top"\n            aria-describedby="ic-tooltip-test-button-top"\n          >\n            Top\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="top-end"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-top-end"\n          target="test-button-top-end"\n        >\n          <button\n            id="test-button-top-end"\n            aria-describedby="ic-tooltip-test-button-top-end"\n          >\n            Top end\n          </button></ic-tooltip\n        >\n      </div>`'}};const bottomPlacements=args=>lit_html.dy` <div style="margin: 40px">
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
      </div>`;bottomPlacements.storyName="Bottom placements",bottomPlacements.parameters={storySource:{source:'args => html` <div style="margin: 40px">\n        <ic-tooltip\n          placement="bottom-start"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-bottom-start"\n          target="test-button-bottom-start"\n        >\n          <button\n            id="test-button-bottom-start"\n            aria-describedby="ic-tooltip-test-button-bottom-start"\n          >\n            Bottom start\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="bottom"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-bottom"\n          target="test-button-bottom"\n        >\n          <button\n            id="test-button-bottom"\n            aria-describedby="ic-tooltip-test-button-bottom"\n          >\n            Bottom\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="bottom-end"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-bottom-end"\n          target="test-button-bottom-end"\n        >\n          <button\n            id="test-button-bottom-end"\n            aria-describedby="ic-tooltip-test-button-bottom-end"\n          >\n            Bottom end\n          </button></ic-tooltip\n        >\n      </div>`'}};const rightPlacements=args=>lit_html.dy` <div style="margin: 40px">
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
      </div>`;rightPlacements.storyName="Right placements",rightPlacements.parameters={storySource:{source:'args => html` <div style="margin: 40px">\n        <ic-tooltip\n          placement="right-start"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-right-start"\n          target="test-button-right-start"\n        >\n          <button\n            id="test-button-right-start"\n            aria-describedby="ic-tooltip-test-button-right-start"\n          >\n            Right start\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="right"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-right"\n          target="test-button-right"\n        >\n          <button\n            id="test-button-right"\n            aria-describedby="ic-tooltip-test-button-right"\n          >\n            Right\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="right-end"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-right-end"\n          target="test-button-right-end"\n        >\n          <button\n            id="test-button-right-end"\n            aria-describedby="ic-tooltip-test-button-right-end"\n          >\n            Right end\n          </button></ic-tooltip\n        >\n      </div>`'}};const leftPlacements=args=>lit_html.dy` <div style="margin-left: 400px">
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
      </div>`;leftPlacements.storyName="Left placements",leftPlacements.parameters={storySource:{source:'args => html` <div style="margin-left: 400px">\n        <ic-tooltip\n          placement="left-start"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-left-start"\n          target="test-button-left-start"\n        >\n          <button\n            id="test-button-left-start"\n            aria-describedby="ic-tooltip-test-button-left-start"\n          >\n            Left start\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="left"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-left"\n          target="test-button-left"\n        >\n          <button\n            id="test-button-left"\n            aria-describedby="ic-tooltip-test-button-left"\n          >\n            Left\n          </button>\n        </ic-tooltip>\n        <ic-tooltip\n          placement="left-end"\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-left-end"\n          target="test-button-left-end"\n        >\n          <button\n            id="test-button-left-end"\n            aria-describedby="ic-tooltip-test-button-left-end"\n          >\n            Left end\n          </button></ic-tooltip\n        >\n      </div>`'}};const truncation=args=>lit_html.dy`<ic-tooltip
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
      >`;truncation.storyName="Truncation",truncation.parameters={storySource:{source:'args => html`<ic-tooltip\n        label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the max-lines property. The number of lines in the text is clamped to the number passed through the max-lines property."\n        target="test-button-truncation"\n        max-lines="3"\n        id="ic-tooltip-test-button-truncation"\n        ><button\n          id="test-button-truncation"\n          aria-describedby="ic-tooltip-test-button-truncation"\n        >\n          Default\n        </button></ic-tooltip\n      >`'}};const darkBackground=args=>lit_html.dy`<div style="height: 100px;background-color:#333333;">
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
      </div>`;darkBackground.storyName="Dark background",darkBackground.parameters={storySource:{source:'args => html`<div style="height: 100px;background-color:#333333;">\n        <ic-tooltip\n          label="This is a description of the button"\n          id="ic-tooltip-test-button-dark"\n          target="test-button-dark"\n        >\n          <button\n            id="test-button-dark"\n            aria-describedby="ic-tooltip-test-button-dark"\n          >\n            Default\n          </button>\n        </ic-tooltip>\n      </div>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Tooltip",tags:["stories-mdx"],includeStories:["defaultStory","usingExternalMethod","disabledHover","topPlacements","bottomPlacements","rightPlacements","leftPlacements","truncation","darkBackground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_tooltip_stories=componentMeta,__namedExportsOrder=["defaultStory","usingExternalMethod","disabledHover","topPlacements","bottomPlacements","rightPlacements","leftPlacements","truncation","darkBackground"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-tooltip-ic-tooltip-stories-mdx.a5ca4f95.iframe.bundle.js.map