/*! For license information please see components-ic-tooltip-ic-tooltip-mdx.f85ac23c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2723,582,6199,6763,9173],{"./src/components/ic-tooltip/ic-tooltip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-tooltip\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute       | Description                                                                                                                          | Type                                                                                                                                                                              | Default     |\n| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `disableClick`       | `disable-click` | If `true`, the tooltip will not be displayed on click, it will require hover or using the display method.                            | `boolean \\| undefined`                                                                                                                                                            | `false`     |\n| `disableHover`       | `disable-hover` | If `true`, the tooltip will not be displayed on hover, it will require a click.                                                      | `boolean \\| undefined`                                                                                                                                                            | `false`     |\n| `label` _(required)_ | `label`         | The text to display on the tooltip.                                                                                                  | `string`                                                                                                                                                                          | `undefined` |\n| `maxLines`           | `max-lines`     | The number of lines to display before truncating the text.                                                                           | `number \\| undefined`                                                                                                                                                             | `undefined` |\n| `placement`          | `placement`     | The position of the tooltip in relation to the parent element.                                                                       | `"bottom" \\| "bottom-end" \\| "bottom-start" \\| "left" \\| "left-end" \\| "left-start" \\| "right" \\| "right-end" \\| "right-start" \\| "top" \\| "top-end" \\| "top-start" \\| undefined` | `"bottom"`  |\n| `target`             | `target`        | The ID of the element the tooltip is describing - for when aria-labelledby or aria-describedby is used.                              | `string \\| undefined`                                                                                                                                                             | `undefined` |\n| `theme`              | `theme`         | Sets the tooltip to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light" \\| undefined`                                                                                                                                     | `"inherit"` |\n\n\n## Methods\n\n### `displayTooltip(show: boolean, persistTooltip?: boolean) => Promise<void>`\n\nMethod to programmatically show/hide the tooltip without needing to interact with an anchor element\n\n#### Parameters\n\n| Name             | Type                   | Description                                                                                                                          |\n| ---------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |\n| `show`           | `boolean`              | Whether to show or hide the tooltip                                                                                                  |\n| `persistTooltip` | `boolean \\| undefined` | Whether the tooltip should stay on the screen when actions are performed that would previously dismiss the tooltip, such as on hover |\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                   | Description        |\n| ---------------------- | ------------------ |\n| `--ic-z-index-tooltip` | z-index of tooltip |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-button](../ic-button)\n - [ic-card-vertical](../ic-card-vertical)\n - [ic-chip](../ic-chip)\n - [ic-navigation-item](../ic-navigation-item)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tooltip --\x3e ic-typography\n  ic-button --\x3e ic-tooltip\n  ic-card-vertical --\x3e ic-tooltip\n  ic-chip --\x3e ic-tooltip\n  ic-navigation-item --\x3e ic-tooltip\n  style ic-tooltip fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_tooltip_stories=__webpack_require__("./src/components/ic-tooltip/ic-tooltip.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_tooltip_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-tooltip/ic-tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomPlacements:()=>BottomPlacements,DarkBackground:()=>DarkBackground,Default:()=>Default,DisabledHover:()=>DisabledHover,LeftPlacements:()=>LeftPlacements,Playground:()=>Playground,RightPlacements:()=>RightPlacements,TopPlacements:()=>TopPlacements,Truncation:()=>Truncation,UsingExternalMethod:()=>UsingExternalMethod,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Tooltip",component:"ic-tooltip"},Default={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-tooltip
      label="This is a description of the button"
      target="test-button-default"
      id="ic-tooltip-test-button-default"
      ><button
        id="test-button-default"
        aria-describedby="ic-tooltip-test-button-default"
      >
        Default
      </button></ic-tooltip
    >`,name:"Default",height:"100px"},UsingExternalMethod={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<script>
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
      >`,name:"Using external method",height:"100px"},DisabledHover={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-tooltip
      label="This shows 'Code' has been copied"
      target="test-button-disable-hover"
      id="ic-tooltip-test-button-disable-hover"
      disable-hover="true"
      ><button
        id="test-button-disable-hover"
        aria-labelledby="ic-tooltip-test-button-disable-hover"
        onclick="navigator.clipboard.writeText('Code')"
      >
        Show tooltip
      </button></ic-tooltip
    >`,name:"Disabled Hover",height:"100px"},TopPlacements={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div style="margin: 40px">
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
    </div>`,name:"Top placements"},BottomPlacements={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div style="margin: 40px">
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
    </div>`,name:"Bottom placements"},RightPlacements={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div style="margin: 40px">
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
    </div>`,name:"Right placements"},LeftPlacements={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div style="margin-left: 400px">
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
    </div>`,name:"Left placements"},Truncation={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-tooltip
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
    >`,name:"Truncation",height:"100px"},DarkBackground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="height: 100px;background-color:#333333;">
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
    </div>`,name:"Dark background"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="margin: 250px">
      <ic-tooltip
        label=${args.label}
        placement=${args.placement}
        max-lines=${args.maxLines}
        disable-hover=${args.disableHover}
        id="ic-tooltip-test-button-default"
        target="button-id"
        theme=${args.theme}
      >
        <button
          id="button-id"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Button 1
        </button>
      </ic-tooltip>
    </div> `,args:{disableHover:!1,maxLines:3,placement:"bottom",label:"This is a description of the button",theme:"inherit"},argTypes:{placement:{options:["bottom","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom-start","left-end","left","left-start"],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","UsingExternalMethod","DisabledHover","TopPlacements","BottomPlacements","RightPlacements","LeftPlacements","Truncation","DarkBackground","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-tooltip\n      label="This is a description of the button"\n      target="test-button-default"\n      id="ic-tooltip-test-button-default"\n      ><button\n        id="test-button-default"\n        aria-describedby="ic-tooltip-test-button-default"\n      >\n        Default\n      </button></ic-tooltip\n    >`,\n  name: "Default",\n  height: "100px"\n}',...Default.parameters?.docs?.source}}},UsingExternalMethod.parameters={...UsingExternalMethod.parameters,docs:{...UsingExternalMethod.parameters?.docs,source:{originalSource:'{\n  render: args => html`<script>\n        let display = true;\n        document\n          .querySelector("#clickMe")\n          .addEventListener("click", handleDisplay);\n        const tooltip = document.querySelector("ic-tooltip");\n        function handleDisplay() {\n          tooltip.displayTooltip(display, display);\n          display = !display;\n        }\n      <\/script>\n      <button id="clickMe">Show tooltip</button>\n      <ic-tooltip\n        label="This is a description of the button"\n        target="test-button-default"\n        id="ic-tooltip-test-button-default"\n        ><button\n          id="test-button-default"\n          aria-describedby="ic-tooltip-test-button-default"\n        >\n          Default\n        </button></ic-tooltip\n      >`,\n  name: "Using external method",\n  height: "100px"\n}',...UsingExternalMethod.parameters?.docs?.source}}},DisabledHover.parameters={...DisabledHover.parameters,docs:{...DisabledHover.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-tooltip\n      label="This shows \'Code\' has been copied"\n      target="test-button-disable-hover"\n      id="ic-tooltip-test-button-disable-hover"\n      disable-hover="true"\n      ><button\n        id="test-button-disable-hover"\n        aria-labelledby="ic-tooltip-test-button-disable-hover"\n        onclick="navigator.clipboard.writeText(\'Code\')"\n      >\n        Show tooltip\n      </button></ic-tooltip\n    >`,\n  name: "Disabled Hover",\n  height: "100px"\n}',...DisabledHover.parameters?.docs?.source}}},TopPlacements.parameters={...TopPlacements.parameters,docs:{...TopPlacements.parameters?.docs,source:{originalSource:'{\n  render: args => html` <div style="margin: 40px">\n      <ic-tooltip\n        placement="top-start"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-top-start"\n        target="test-button-top-start"\n      >\n        <button\n          id="test-button-top-start"\n          aria-describedby="ic-tooltip-test-button-top-start"\n        >\n          Top start\n        </button>\n      </ic-tooltip>\n      <ic-tooltip\n        placement="top"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-top"\n        target="test-button-top"\n      >\n        <button\n          id="test-button-top"\n          aria-describedby="ic-tooltip-test-button-top"\n        >\n          Top\n        </button>\n      </ic-tooltip>\n      <ic-tooltip\n        placement="top-end"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-top-end"\n        target="test-button-top-end"\n      >\n        <button\n          id="test-button-top-end"\n          aria-describedby="ic-tooltip-test-button-top-end"\n        >\n          Top end\n        </button></ic-tooltip\n      >\n    </div>`,\n  name: "Top placements"\n}',...TopPlacements.parameters?.docs?.source}}},BottomPlacements.parameters={...BottomPlacements.parameters,docs:{...BottomPlacements.parameters?.docs,source:{originalSource:'{\n  render: args => html` <div style="margin: 40px">\n      <ic-tooltip\n        placement="bottom-start"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-bottom-start"\n        target="test-button-bottom-start"\n      >\n        <button\n          id="test-button-bottom-start"\n          aria-describedby="ic-tooltip-test-button-bottom-start"\n        >\n          Bottom start\n        </button>\n      </ic-tooltip>\n      <ic-tooltip\n        placement="bottom"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-bottom"\n        target="test-button-bottom"\n      >\n        <button\n          id="test-button-bottom"\n          aria-describedby="ic-tooltip-test-button-bottom"\n        >\n          Bottom\n        </button>\n      </ic-tooltip>\n      <ic-tooltip\n        placement="bottom-end"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-bottom-end"\n        target="test-button-bottom-end"\n      >\n        <button\n          id="test-button-bottom-end"\n          aria-describedby="ic-tooltip-test-button-bottom-end"\n        >\n          Bottom end\n        </button></ic-tooltip\n      >\n    </div>`,\n  name: "Bottom placements"\n}',...BottomPlacements.parameters?.docs?.source}}},RightPlacements.parameters={...RightPlacements.parameters,docs:{...RightPlacements.parameters?.docs,source:{originalSource:'{\n  render: args => html` <div style="margin: 40px">\n      <ic-tooltip\n        placement="right-start"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-right-start"\n        target="test-button-right-start"\n      >\n        <button\n          id="test-button-right-start"\n          aria-describedby="ic-tooltip-test-button-right-start"\n        >\n          Right start\n        </button>\n      </ic-tooltip>\n      <ic-tooltip\n        placement="right"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-right"\n        target="test-button-right"\n      >\n        <button\n          id="test-button-right"\n          aria-describedby="ic-tooltip-test-button-right"\n        >\n          Right\n        </button>\n      </ic-tooltip>\n      <ic-tooltip\n        placement="right-end"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-right-end"\n        target="test-button-right-end"\n      >\n        <button\n          id="test-button-right-end"\n          aria-describedby="ic-tooltip-test-button-right-end"\n        >\n          Right end\n        </button></ic-tooltip\n      >\n    </div>`,\n  name: "Right placements"\n}',...RightPlacements.parameters?.docs?.source}}},LeftPlacements.parameters={...LeftPlacements.parameters,docs:{...LeftPlacements.parameters?.docs,source:{originalSource:'{\n  render: args => html` <div style="margin-left: 400px">\n      <ic-tooltip\n        placement="left-start"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-left-start"\n        target="test-button-left-start"\n      >\n        <button\n          id="test-button-left-start"\n          aria-describedby="ic-tooltip-test-button-left-start"\n        >\n          Left start\n        </button>\n      </ic-tooltip>\n      <ic-tooltip\n        placement="left"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-left"\n        target="test-button-left"\n      >\n        <button\n          id="test-button-left"\n          aria-describedby="ic-tooltip-test-button-left"\n        >\n          Left\n        </button>\n      </ic-tooltip>\n      <ic-tooltip\n        placement="left-end"\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-left-end"\n        target="test-button-left-end"\n      >\n        <button\n          id="test-button-left-end"\n          aria-describedby="ic-tooltip-test-button-left-end"\n        >\n          Left end\n        </button></ic-tooltip\n      >\n    </div>`,\n  name: "Left placements"\n}',...LeftPlacements.parameters?.docs?.source}}},Truncation.parameters={...Truncation.parameters,docs:{...Truncation.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-tooltip\n      label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the max-lines property. The number of lines in the text is clamped to the number passed through the max-lines property."\n      target="test-button-truncation"\n      max-lines="3"\n      id="ic-tooltip-test-button-truncation"\n      ><button\n        id="test-button-truncation"\n        aria-describedby="ic-tooltip-test-button-truncation"\n      >\n        Default\n      </button></ic-tooltip\n    >`,\n  name: "Truncation",\n  height: "100px"\n}',...Truncation.parameters?.docs?.source}}},DarkBackground.parameters={...DarkBackground.parameters,docs:{...DarkBackground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="height: 100px;background-color:#333333;">\n      <ic-tooltip\n        label="This is a description of the button"\n        id="ic-tooltip-test-button-dark"\n        target="test-button-dark"\n      >\n        <button\n          id="test-button-dark"\n          aria-describedby="ic-tooltip-test-button-dark"\n        >\n          Default\n        </button>\n      </ic-tooltip>\n    </div>`,\n  name: "Dark background"\n}',...DarkBackground.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="margin: 250px">\n      <ic-tooltip\n        label=${args.label}\n        placement=${args.placement}\n        max-lines=${args.maxLines}\n        disable-hover=${args.disableHover}\n        id="ic-tooltip-test-button-default"\n        target="button-id"\n        theme=${args.theme}\n      >\n        <button\n          id="button-id"\n          aria-describedby="ic-tooltip-test-button-default"\n        >\n          Button 1\n        </button>\n      </ic-tooltip>\n    </div> `,\n  args: defaultArgs,\n  argTypes: {\n    placement: {\n      options: ["bottom", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom-start", "left-end", "left", "left-start"],\n      control: {\n        type: "select"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-tooltip-ic-tooltip-mdx.f85ac23c.iframe.bundle.js.map