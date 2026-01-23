/*! For license information please see components-ic-divider-ic-divider-mdx.257b519e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9367,3889,582,6199,6763],{"./src/components/ic-divider/ic-divider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-divider\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute         | Description                                                                                                                                                                                                                                                                              | Type                                                              | Default        |\n| ---------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | -------------- |\n| `borderStyle`    | `border-style`    | The line style of the divider.                                                                                                                                                                                                                                                           | `"dashed" \\| "solid" \\| undefined`                                | `"solid"`      |\n| `label`          | `label`           | The label for the divider. The label placement will need to be set for the label to be displayed correctly.                                                                                                                                                                              | `string \\| undefined`                                             | `undefined`    |\n| `labelPlacement` | `label-placement` | The position the label is placed on the divider. `Left` and `right` placement is only applicable when orientation is set to `horizontal`. `Top` and `bottom` placement is only applicable when orientation is set to `vertical`. `Center` placement is applicable for both orientations. | `"bottom" \\| "center" \\| "left" \\| "right" \\| "top" \\| undefined` | `"center"`     |\n| `monochrome`     | `monochrome`      | If `true`, the divider will be displayed in a grey colour.                                                                                                                                                                                                                               | `boolean \\| undefined`                                            | `false`        |\n| `orientation`    | `orientation`     | The orientation of the divider.                                                                                                                                                                                                                                                          | `"horizontal" \\| "vertical" \\| undefined`                         | `"horizontal"` |\n| `theme`          | `theme`           | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                                                                                                                                  | `"dark" \\| "default" \\| "inherit" \\| "light" \\| undefined`        | `"inherit"`    |\n| `weight`         | `weight`          | The thickness of the divider.                                                                                                                                                                                                                                                            | `"medium" \\| "thick" \\| "thin" \\| "very-thick" \\| undefined`      | `"thin"`       |\n\n\n## CSS Custom Properties\n\n| Name                                 | Description                                                                                                                                                                                |\n| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\n| `--ic-divider-background`            |                                                                                                                                                                                            |\n| `--ic-divider-background-monochrome` |                                                                                                                                                                                            |\n| `--ic-divider-horizontal-width`      | The width of a horizontal divider. The default value is `inherit`.                                                                                                                         |\n| `--ic-divider-label`                 |                                                                                                                                                                                            |\n| `--ic-divider-label-monochrome`      |                                                                                                                                                                                            |\n| `--ic-divider-label-width`           | The max-width of the divider label. When orientation is set to `horizontal`, the default value is `max(20rem, 60%)`. When orientation is set to `vertical`, the default value is `20 rem`. |\n| `--ic-divider-vertical-height`       | The height of a vertical divider. The default value is `inherit`.                                                                                                                          |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-side-navigation](../ic-side-navigation)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-divider --\x3e ic-typography\n  ic-side-navigation --\x3e ic-divider\n  style ic-divider fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_divider_stories=__webpack_require__("./src/components/ic-divider/ic-divider.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_divider_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-divider/ic-divider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BorderStyle:()=>BorderStyle,LabelPlacement:()=>LabelPlacement,MaxContent:()=>MaxContent,Playground:()=>Playground,Theme:()=>Theme,Vertical:()=>Vertical,Weight:()=>Weight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Divider",component:"ic-divider"},Theme={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider
        theme="inherit"
        weight="medium"
        label="theme='inherit'"
        label-placement="left"
      ></ic-divider>
      <ic-divider
        theme="inherit"
        monochrome="true"
        weight="medium"
        label="theme='inherit', monochrome='true'"
        label-placement="left"
      ></ic-divider>
      <div
        style="display:flex; flex-direction: column; align-items: center; background-color: var(--ic-color-page-background-light); width: 100%; padding: var(--ic-space-xs) 0; gap: var(--ic-space-md)"
      >
        <ic-divider
          theme="light"
          weight="medium"
          label="theme='light'"
          label-placement="left"
        ></ic-divider>
        <ic-divider
          theme="light"
          monochrome="true"
          weight="medium"
          label="theme='light', monochrome='true'"
          label-placement="left"
        ></ic-divider>
      </div>
      <div
        style="display:flex; flex-direction: column; align-items: center; background-color: var(--ic-color-page-background-dark); width: 100%; padding: var(--ic-space-xs) 0; gap: var(--ic-space-md)"
      >
        <ic-divider
          theme="dark"
          weight="medium"
          label="theme='dark'"
          label-placement="left"
        ></ic-divider>
        <ic-divider
          theme="dark"
          monochrome="true"
          weight="medium"
          label="theme='dark', monochrome='true'"
          label-placement="left"
        ></ic-divider>
      </div>
    </div>`,name:"Theme"},Weight={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider weight="thin"></ic-divider>
      <ic-divider weight="thin" border-style="dashed"></ic-divider>
      <ic-divider
        weight="thin"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="medium"></ic-divider>
      <ic-divider weight="medium" border-style="dashed"></ic-divider>
      <ic-divider
        weight="medium"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="thick"></ic-divider>
      <ic-divider weight="thick" border-style="dashed"></ic-divider>
      <ic-divider
        weight="thick"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="very-thick"></ic-divider>
      <ic-divider weight="very-thick" border-style="dashed"></ic-divider>
      <ic-divider
        weight="very-thick"
        label="End of section"
        label-placement="center"
      ></ic-divider>
    </div>`,name:"Weight"},BorderStyle={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider border-style="solid"></ic-divider>
      <ic-divider border-style="dashed"></ic-divider>
    </div>`,name:"Border style"},Vertical={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; gap: var(--ic-space-lg); height: 400px">
      <ic-divider label-placement="top" orientation="vertical" weight="thin">
        <ic-typography variant="label" slot="label">
          <p style="width: max-content;">Slotted label top</p>
        </ic-typography></ic-divider
      >
      <ic-divider
        orientation="vertical"
        weight="thin"
        border-style="dashed"
      ></ic-divider>
      <ic-divider orientation="vertical" weight="medium"></ic-divider>
      <ic-divider
        label="Label center"
        label-placement="center"
        orientation="vertical"
        border-style="dashed"
        weight="medium"
      ></ic-divider>
      <ic-divider orientation="vertical" weight="thick"></ic-divider>
      <ic-divider
        orientation="vertical"
        weight="thick"
        border-style="dashed"
      ></ic-divider>
      <ic-divider orientation="vertical" weight="very-thick"></ic-divider>
      <ic-divider
        orientation="vertical"
        weight="very-thick"
        border-style="dashed"
      ></ic-divider>
    </div>
  `,name:"Vertical"},MaxContent={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div
        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"
      >
        <ic-divider 
          label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
          🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
          label-placement="left"></ic-divider
        >
        <ic-divider 
          label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
          🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
          label-placement="center"></ic-divider
        >
      </div>
      <ic-divider label-placement="right">
          <ic-typography variant="label" slot="label" style="width: max-content;max-width: 100%;">
            <p style="width: inherit;">A slotted label: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶</p>
          </ic-typography></ic-divider
        >
      </div>
      <div
        style="display: flex; gap: var(--ic-space-lg); height: 600px; margin-top: var(--ic-space-lg)"
      >
        <ic-divider
          label="A vertical divider: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
          label-placement="top"
          orientation="vertical"
        ></ic-divider>
      </div>`,name:"Max content"},LabelPlacement={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div
        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"
      >
        <ic-divider label="Label left" label-placement="left"></ic-divider>
        <ic-divider label="Label center" label-placement="center"></ic-divider>
        <ic-divider label="Label right" label-placement="right"></ic-divider>
        <ic-divider label-placement="left">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label left</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="center">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label center</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="right">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label right</p>
          </ic-typography></ic-divider
        >
      </div>
      <div
        style="display: flex; gap: var(--ic-space-lg); height: 200px; margin-top: var(--ic-space-lg)"
      >
        <ic-divider
          label="Label top"
          label-placement="top"
          orientation="vertical"
        ></ic-divider>
        <ic-divider
          label="Label center"
          label-placement="center"
          orientation="vertical"
        ></ic-divider>
        <ic-divider
          label="Label bottom"
          label-placement="bottom"
          orientation="vertical"
        ></ic-divider>
        <ic-divider label-placement="top" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label top</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="center" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label center</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="bottom" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label bottom</p>
          </ic-typography></ic-divider
        >
      </div>`,name:"Label placement"},Playground={render:args=>{const backgroundColor="dark"===args.theme?"var(--ic-color-page-background-dark)":"light"===args.theme?"var(--ic-color-background-primary-light)":"transparent";return lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div
      style="display: flex; width: 100%; height: 100%; padding: var(--ic-space-md); background-color: ${backgroundColor}; box-sizing: border-box;"
    >
      <ic-divider
        monochrome=${args.monochrome}
        orientation=${args.orientation}
        theme=${args.theme}
        border-style=${args["border-style"]}
        weight=${args.weight}
        label=${args.label}
        label-placement=${args["label-placement"]}
        style="
            --ic-divider-horizontal-width: ${args["--ic-divider-horizontal-width"]};
            --ic-divider-vertical-height: ${args["--ic-divider-vertical-height"]};
            ${""!==args["--ic-divider-background"]?`--ic-divider-background: ${args["--ic-divider-background"]};`:""}
            ${""!==args["--ic-divider-background-monochrome"]?`--ic-divider-background-monochrome: ${args["--ic-divider-background-monochrome"]};`:""}
            ${""!==args["--ic-divider-label"]?`--ic-divider-label: ${args["--ic-divider-label"]};`:""}
            ${""!==args["--ic-divider-label-monochrome"]?`--ic-divider-label-monochrome: ${args["--ic-divider-label-monochrome"]};`:""}
            ${""!==args["--ic-divider-label-width"]?`--ic-divider-label-width: ${args["--ic-divider-label-width"]};`:""}"
      ></ic-divider>
    </div>`},args:{"border-style":"solid",label:"","label-placement":"none",monochrome:!1,orientation:"horizontal",theme:"inherit",weight:"thin","--ic-divider-horizontal-width":"100%","--ic-divider-vertical-height":"400px","--ic-divider-background":"","--ic-divider-background-monochrome":"","--ic-divider-label":"","--ic-divider-label-monochrome":"","--ic-divider-label-width":""},argTypes:{"border-style":{options:["solid","dashed"],control:{type:"inline-radio"}},label:{mapping:{none:""}},"label-placement":{options:["none","left","center","right","top","bottom"],mapping:{none:""},control:{type:"radio"}},orientation:{options:["horizontal","vertical"],control:{type:"inline-radio"}},theme:{options:["inherit","dark","light"],control:{type:"radio"}},weight:{options:["thin","medium","thick","very-thick"],control:{type:"radio"}},"--ic-divider-background":{control:{type:"color"}},"--ic-divider-background-monochrome":{control:{type:"color"}},"--ic-divider-label":{control:{type:"color"}},"--ic-divider-label-monochrome":{control:{type:"color"}}},name:"Playground"},__namedExportsOrder=["Theme","Weight","BorderStyle","Vertical","MaxContent","LabelPlacement","Playground"];Theme.parameters={...Theme.parameters,docs:{...Theme.parameters?.docs,source:{originalSource:'{\n  render: () => html` <div\n      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"\n    >\n      <ic-divider\n        theme="inherit"\n        weight="medium"\n        label="theme=\'inherit\'"\n        label-placement="left"\n      ></ic-divider>\n      <ic-divider\n        theme="inherit"\n        monochrome="true"\n        weight="medium"\n        label="theme=\'inherit\', monochrome=\'true\'"\n        label-placement="left"\n      ></ic-divider>\n      <div\n        style="display:flex; flex-direction: column; align-items: center; background-color: var(--ic-color-page-background-light); width: 100%; padding: var(--ic-space-xs) 0; gap: var(--ic-space-md)"\n      >\n        <ic-divider\n          theme="light"\n          weight="medium"\n          label="theme=\'light\'"\n          label-placement="left"\n        ></ic-divider>\n        <ic-divider\n          theme="light"\n          monochrome="true"\n          weight="medium"\n          label="theme=\'light\', monochrome=\'true\'"\n          label-placement="left"\n        ></ic-divider>\n      </div>\n      <div\n        style="display:flex; flex-direction: column; align-items: center; background-color: var(--ic-color-page-background-dark); width: 100%; padding: var(--ic-space-xs) 0; gap: var(--ic-space-md)"\n      >\n        <ic-divider\n          theme="dark"\n          weight="medium"\n          label="theme=\'dark\'"\n          label-placement="left"\n        ></ic-divider>\n        <ic-divider\n          theme="dark"\n          monochrome="true"\n          weight="medium"\n          label="theme=\'dark\', monochrome=\'true\'"\n          label-placement="left"\n        ></ic-divider>\n      </div>\n    </div>`,\n  name: "Theme"\n}',...Theme.parameters?.docs?.source}}},Weight.parameters={...Weight.parameters,docs:{...Weight.parameters?.docs,source:{originalSource:'{\n  render: () => html` <div\n      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"\n    >\n      <ic-divider weight="thin"></ic-divider>\n      <ic-divider weight="thin" border-style="dashed"></ic-divider>\n      <ic-divider\n        weight="thin"\n        label="End of section"\n        label-placement="center"\n      ></ic-divider>\n      <ic-divider weight="medium"></ic-divider>\n      <ic-divider weight="medium" border-style="dashed"></ic-divider>\n      <ic-divider\n        weight="medium"\n        label="End of section"\n        label-placement="center"\n      ></ic-divider>\n      <ic-divider weight="thick"></ic-divider>\n      <ic-divider weight="thick" border-style="dashed"></ic-divider>\n      <ic-divider\n        weight="thick"\n        label="End of section"\n        label-placement="center"\n      ></ic-divider>\n      <ic-divider weight="very-thick"></ic-divider>\n      <ic-divider weight="very-thick" border-style="dashed"></ic-divider>\n      <ic-divider\n        weight="very-thick"\n        label="End of section"\n        label-placement="center"\n      ></ic-divider>\n    </div>`,\n  name: "Weight"\n}',...Weight.parameters?.docs?.source}}},BorderStyle.parameters={...BorderStyle.parameters,docs:{...BorderStyle.parameters?.docs,source:{originalSource:'{\n  render: () => html` <div\n      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"\n    >\n      <ic-divider border-style="solid"></ic-divider>\n      <ic-divider border-style="dashed"></ic-divider>\n    </div>`,\n  name: "Border style"\n}',...BorderStyle.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; gap: var(--ic-space-lg); height: 400px">\n      <ic-divider label-placement="top" orientation="vertical" weight="thin">\n        <ic-typography variant="label" slot="label">\n          <p style="width: max-content;">Slotted label top</p>\n        </ic-typography></ic-divider\n      >\n      <ic-divider\n        orientation="vertical"\n        weight="thin"\n        border-style="dashed"\n      ></ic-divider>\n      <ic-divider orientation="vertical" weight="medium"></ic-divider>\n      <ic-divider\n        label="Label center"\n        label-placement="center"\n        orientation="vertical"\n        border-style="dashed"\n        weight="medium"\n      ></ic-divider>\n      <ic-divider orientation="vertical" weight="thick"></ic-divider>\n      <ic-divider\n        orientation="vertical"\n        weight="thick"\n        border-style="dashed"\n      ></ic-divider>\n      <ic-divider orientation="vertical" weight="very-thick"></ic-divider>\n      <ic-divider\n        orientation="vertical"\n        weight="very-thick"\n        border-style="dashed"\n      ></ic-divider>\n    </div>\n  `,\n  name: "Vertical"\n}',...Vertical.parameters?.docs?.source}}},MaxContent.parameters={...MaxContent.parameters,docs:{...MaxContent.parameters?.docs,source:{originalSource:'{\n  render: () => html` <div\n        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"\n      >\n        <ic-divider \n          label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶\n          🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"\n          label-placement="left"></ic-divider\n        >\n        <ic-divider \n          label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶\n          🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"\n          label-placement="center"></ic-divider\n        >\n      </div>\n      <ic-divider label-placement="right">\n          <ic-typography variant="label" slot="label" style="width: max-content;max-width: 100%;">\n            <p style="width: inherit;">A slotted label: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶\n        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶</p>\n          </ic-typography></ic-divider\n        >\n      </div>\n      <div\n        style="display: flex; gap: var(--ic-space-lg); height: 600px; margin-top: var(--ic-space-lg)"\n      >\n        <ic-divider\n          label="A vertical divider: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶\n        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"\n          label-placement="top"\n          orientation="vertical"\n        ></ic-divider>\n      </div>`,\n  name: "Max content"\n}',...MaxContent.parameters?.docs?.source}}},LabelPlacement.parameters={...LabelPlacement.parameters,docs:{...LabelPlacement.parameters?.docs,source:{originalSource:'{\n  render: () => html` <div\n        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"\n      >\n        <ic-divider label="Label left" label-placement="left"></ic-divider>\n        <ic-divider label="Label center" label-placement="center"></ic-divider>\n        <ic-divider label="Label right" label-placement="right"></ic-divider>\n        <ic-divider label-placement="left">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label left</p>\n          </ic-typography></ic-divider\n        >\n        <ic-divider label-placement="center">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label center</p>\n          </ic-typography></ic-divider\n        >\n        <ic-divider label-placement="right">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label right</p>\n          </ic-typography></ic-divider\n        >\n      </div>\n      <div\n        style="display: flex; gap: var(--ic-space-lg); height: 200px; margin-top: var(--ic-space-lg)"\n      >\n        <ic-divider\n          label="Label top"\n          label-placement="top"\n          orientation="vertical"\n        ></ic-divider>\n        <ic-divider\n          label="Label center"\n          label-placement="center"\n          orientation="vertical"\n        ></ic-divider>\n        <ic-divider\n          label="Label bottom"\n          label-placement="bottom"\n          orientation="vertical"\n        ></ic-divider>\n        <ic-divider label-placement="top" orientation="vertical">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label top</p>\n          </ic-typography></ic-divider\n        >\n        <ic-divider label-placement="center" orientation="vertical">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label center</p>\n          </ic-typography></ic-divider\n        >\n        <ic-divider label-placement="bottom" orientation="vertical">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label bottom</p>\n          </ic-typography></ic-divider\n        >\n      </div>`,\n  name: "Label placement"\n}',...LabelPlacement.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const backgroundColor = args.theme === "dark" ? "var(--ic-color-page-background-dark)" : args.theme === "light" ? "var(--ic-color-background-primary-light)" : "transparent";\n    return html`<div\n      style="display: flex; width: 100%; height: 100%; padding: var(--ic-space-md); background-color: ${backgroundColor}; box-sizing: border-box;"\n    >\n      <ic-divider\n        monochrome=${args.monochrome}\n        orientation=${args.orientation}\n        theme=${args.theme}\n        border-style=${args["border-style"]}\n        weight=${args.weight}\n        label=${args.label}\n        label-placement=${args["label-placement"]}\n        style="\n            --ic-divider-horizontal-width: ${args["--ic-divider-horizontal-width"]};\n            --ic-divider-vertical-height: ${args["--ic-divider-vertical-height"]};\n            ${args["--ic-divider-background"] !== "" ? `--ic-divider-background: ${args["--ic-divider-background"]};` : ""}\n            ${args["--ic-divider-background-monochrome"] !== "" ? `--ic-divider-background-monochrome: ${args["--ic-divider-background-monochrome"]};` : ""}\n            ${args["--ic-divider-label"] !== "" ? `--ic-divider-label: ${args["--ic-divider-label"]};` : ""}\n            ${args["--ic-divider-label-monochrome"] !== "" ? `--ic-divider-label-monochrome: ${args["--ic-divider-label-monochrome"]};` : ""}\n            ${args["--ic-divider-label-width"] !== "" ? `--ic-divider-label-width: ${args["--ic-divider-label-width"]};` : ""}"\n      ></ic-divider>\n    </div>`;\n  },\n  args: defaultArgs,\n  argTypes: {\n    "border-style": {\n      options: ["solid", "dashed"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    label: {\n      mapping: {\n        none: ""\n      }\n    },\n    "label-placement": {\n      options: ["none", "left", "center", "right", "top", "bottom"],\n      mapping: {\n        none: ""\n      },\n      control: {\n        type: "radio"\n      }\n    },\n    orientation: {\n      options: ["horizontal", "vertical"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    theme: {\n      options: ["inherit", "dark", "light"],\n      control: {\n        type: "radio"\n      }\n    },\n    weight: {\n      options: ["thin", "medium", "thick", "very-thick"],\n      control: {\n        type: "radio"\n      }\n    },\n    "--ic-divider-background": {\n      control: {\n        type: "color"\n      }\n    },\n    "--ic-divider-background-monochrome": {\n      control: {\n        type: "color"\n      }\n    },\n    "--ic-divider-label": {\n      control: {\n        type: "color"\n      }\n    },\n    "--ic-divider-label-monochrome": {\n      control: {\n        type: "color"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-divider-ic-divider-mdx.257b519e.iframe.bundle.js.map