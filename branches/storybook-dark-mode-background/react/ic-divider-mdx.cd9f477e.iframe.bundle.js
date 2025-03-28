(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[8693,9407],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/ic-divider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-divider\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute         | Description                                                                                                                                                                                                                                                                              | Type                                                 | Default        |\n| ---------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------- |\n| `borderStyle`    | `border-style`    | The line style of the divider.                                                                                                                                                                                                                                                           | `"dashed" \\| "solid"`                                | `"solid"`      |\n| `label`          | `label`           | The label for the divider. The label placement will need to be set for the label to be displayed correctly.                                                                                                                                                                              | `string`                                             | `undefined`    |\n| `labelPlacement` | `label-placement` | The position the label is placed on the divider. `Left` and `right` placement is only applicable when orientation is set to `horizontal`. `Top` and `bottom` placement is only applicable when orientation is set to `vertical`. `Center` placement is applicable for both orientations. | `"bottom" \\| "center" \\| "left" \\| "right" \\| "top"` | `"center"`     |\n| `monochrome`     | `monochrome`      | If `true`, the divider will be displayed in a grey colour.                                                                                                                                                                                                                               | `boolean`                                            | `false`        |\n| `orientation`    | `orientation`     | The orientation of the divider.                                                                                                                                                                                                                                                          | `"horizontal" \\| "vertical"`                         | `"horizontal"` |\n| `theme`          | `theme`           | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                                                                                                                                  | `"dark" \\| "default" \\| "inherit" \\| "light"`        | `"inherit"`    |\n| `weight`         | `weight`          | The thickness of the divider.                                                                                                                                                                                                                                                            | `"medium" \\| "thick" \\| "thin" \\| "very-thick"`      | `"thin"`       |\n\n\n## CSS Custom Properties\n\n| Name                                 | Description                                                                                                                                                                                |\n| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\n| `--ic-divider-background`            |                                                                                                                                                                                            |\n| `--ic-divider-background-monochrome` |                                                                                                                                                                                            |\n| `--ic-divider-horizontal-width`      | The width of a horizontal divider. The default value is `inherit`.                                                                                                                         |\n| `--ic-divider-label`                 |                                                                                                                                                                                            |\n| `--ic-divider-label-monochrome`      |                                                                                                                                                                                            |\n| `--ic-divider-label-width`           | The max-width of the divider label. When orientation is set to `horizontal`, the default value is `max(20rem, 60%)`. When orientation is set to `vertical`, the default value is `20 rem`. |\n| `--ic-divider-vertical-height`       | The height of a vertical divider. The default value is `inherit`.                                                                                                                          |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-side-navigation](../ic-side-navigation)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-divider --\x3e ic-typography\n  ic-side-navigation --\x3e ic-divider\n  style ic-divider fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_divider_stories=__webpack_require__("./src/stories/ic-divider.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_divider_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/ic-divider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BorderStyle:()=>BorderStyle,LabelPlacement:()=>LabelPlacement,MaxContent:()=>MaxContent,Playground:()=>Playground,Theme:()=>Theme,Vertical:()=>Vertical,Weight:()=>Weight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const __WEBPACK_DEFAULT_EXPORT__={title:"Divider",component:_components__WEBPACK_IMPORTED_MODULE_1__.mH};var Theme={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ic-space-md)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{theme:"inherit",weight:"medium",label:"theme='inherit'",labelPlacement:"left"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{theme:"inherit",monochrome:!0,weight:"medium",label:"theme='inherit', monochrome='true'",labelPlacement:"left"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"var(--ic-color-background-primary-light)",width:"100%",padding:"var(--ic-space-xs) 0",gap:"var(--ic-space-md)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{theme:"light",weight:"medium",label:"theme='light'",labelPlacement:"left"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{theme:"light",monochrome:!0,weight:"medium",label:"theme='light', monochrome='true'",labelPlacement:"left"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#17191c",width:"100%",padding:"var(--ic-space-xs) 0",gap:"var(--ic-space-md)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{theme:"dark",weight:"medium",label:"theme='dark'",labelPlacement:"left"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{theme:"dark",monochrome:!0,weight:"medium",label:"theme='dark', monochrome='true'",labelPlacement:"left"})))},name:"Theme"},Weight={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ic-space-md)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"thin"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"thin",borderStyle:"dashed"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"thin",label:"End of section",labelPlacement:"center"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"medium"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"medium",borderStyle:"dashed"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"medium",label:"End of section",labelPlacement:"center"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"thick"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"thick",borderStyle:"dashed"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"thick",label:"End of section",labelPlacement:"center"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"very-thick"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"very-thick",borderStyle:"dashed"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{weight:"very-thick",label:"End of section",labelPlacement:"center"}))},name:"Weight"},BorderStyle={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ic-space-md)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{borderStyle:"solid"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{borderStyle:"dashed"}))},name:"Border style"},Vertical={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",gap:"var(--ic-space-lg)",height:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{labelPlacement:"top",orientation:"vertical",weight:"thin"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"label",slot:"label"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{width:"max-content"}},"Slotted label top"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{orientation:"vertical",weight:"thin",borderStyle:"dashed"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{orientation:"vertical",weight:"medium"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{label:"Label center",labelPlacement:"center",orientation:"vertical",borderStyle:"dashed",weight:"medium"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{orientation:"vertical",weight:"thick"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{orientation:"vertical",weight:"thick",borderStyle:"dashed"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{orientation:"vertical",weight:"very-thick"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{orientation:"vertical",weight:"very-thick",borderStyle:"dashed"}))},name:"Vertical"},MaxContent={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ic-space-lg)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{label:"🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶 🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶",labelPlacement:"left"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{label:"🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶 🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶",labelPlacement:"center"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{labelPlacement:"right"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"label",slot:"label",style:{width:"max-content",maxWidth:"100%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{width:"inherit"}},"A slotted label: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),"🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",gap:"var(--ic-space-lg)",height:"600px",marginTop:"var(--ic-space-lg)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{label:"A vertical divider: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶 🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶",labelPlacement:"top",orientation:"vertical"})))},name:"Max content"},LabelPlacement={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ic-space-lg)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{label:"Label left",labelPlacement:"left"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{label:"Label center",labelPlacement:"center"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{label:"Label right",labelPlacement:"right"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{labelPlacement:"left"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"label",slot:"label"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{width:"max-content"}},"Slotted label left"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{labelPlacement:"center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"label",slot:"label"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{width:"max-content"}},"Slotted label center"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{labelPlacement:"right"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"label",slot:"label"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{width:"max-content"}},"Slotted label right")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",gap:"var(--ic-space-lg)",height:"200px",marginTop:"var(--ic-space-lg)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{label:"Label top",labelPlacement:"top",orientation:"vertical"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{label:"Label center",labelPlacement:"center",orientation:"vertical"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{label:"Label bottom",labelPlacement:"bottom",orientation:"vertical"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{labelPlacement:"top",orientation:"vertical"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"label",slot:"label"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{width:"max-content"}},"Slotted label top"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{labelPlacement:"center",orientation:"vertical"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"label",slot:"label"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{width:"max-content"}},"Slotted label center"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{labelPlacement:"bottom",orientation:"vertical"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"label",slot:"label"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{width:"max-content"}},"Slotted label bottom")))))},name:"Label placement"},Playground={render:function render(args){var backgroundColor="dark"===args.theme?"#17191c":"light"===args.theme?"var(--ic-color-background-primary-light)":"transparent";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",width:"100%",height:"100%",padding:"var(--ic-space-md)",backgroundColor:"".concat(backgroundColor),boxSizing:"border-box"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mH,{monochrome:args.monochrome,orientation:args.orientation,theme:args.theme,borderStyle:args.borderStyle,weight:args.weight,label:args.label,labelPlacement:args.labelPlacement,style:_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({"--ic-divider-horizontal-width":"".concat(args["--ic-divider-horizontal-width"]),"--ic-divider-vertical-height":"".concat(args["--ic-divider-vertical-height"])},"--ic-divider-background","".concat(args["--ic-divider-background"])),"--ic-divider-background-monochrome","".concat(args["--ic-divider-background-monochrome"])),"--ic-divider-label","".concat(args["--ic-divider-label"])),"--ic-divider-label-monochrome","".concat(args["--ic-divider-label-monochrome"])),"--ic-divider-label-width","".concat(args["--ic-divider-label-width"]))}))},args:{borderStyle:"solid",label:"",labelPlacement:"none",monochrome:!1,orientation:"horizontal",theme:"inherit",weight:"thin","--ic-divider-horizontal-width":"100%","--ic-divider-vertical-height":"400px","--ic-divider-background":"","--ic-divider-background-monochrome":"","--ic-divider-label":"","--ic-divider-label-monochrome":"","--ic-divider-label-width":""},argTypes:{borderStyle:{options:["solid","dashed"],control:{type:"inline-radio"}},label:{mapping:{none:""}},labelPlacement:{options:["none","left","center","right","top","bottom"],mapping:{none:""},control:{type:"radio"}},orientation:{options:["horizontal","vertical"],control:{type:"inline-radio"}},theme:{options:["inherit","dark","light"],control:{type:"radio"}},weight:{options:["thin","medium","thick","very-thick"],control:{type:"radio"}},"--ic-divider-background":{control:{type:"color"}},"--ic-divider-background-monochrome":{control:{type:"color"}},"--ic-divider-label":{control:{type:"color"}},"--ic-divider-label-monochrome":{control:{type:"color"}}},name:"Playground"};const __namedExportsOrder=["Theme","Weight","BorderStyle","Vertical","MaxContent","LabelPlacement","Playground"];Theme.parameters={...Theme.parameters,docs:{...Theme.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "var(--ic-space-md)"\n  }}>\n      <IcDivider theme="inherit" weight="medium" label="theme=\'inherit\'" labelPlacement="left" />\n      <IcDivider theme="inherit" monochrome weight="medium" label="theme=\'inherit\', monochrome=\'true\'" labelPlacement="left" />\n      <div style={{\n      display: "flex",\n      flexDirection: "column",\n      alignItems: "center",\n      backgroundColor: "var(--ic-color-background-primary-light)",\n      width: "100%",\n      padding: "var(--ic-space-xs) 0",\n      gap: "var(--ic-space-md)"\n    }}>\n        <IcDivider theme="light" weight="medium" label="theme=\'light\'" labelPlacement="left" />\n        <IcDivider theme="light" monochrome weight="medium" label="theme=\'light\', monochrome=\'true\'" labelPlacement="left" />\n      </div>\n      <div style={{\n      display: "flex",\n      flexDirection: "column",\n      alignItems: "center",\n      backgroundColor: "#17191c",\n      width: "100%",\n      padding: "var(--ic-space-xs) 0",\n      gap: "var(--ic-space-md)"\n    }}>\n        <IcDivider theme="dark" weight="medium" label="theme=\'dark\'" labelPlacement="left" />\n        <IcDivider theme="dark" monochrome weight="medium" label="theme=\'dark\', monochrome=\'true\'" labelPlacement="left" />\n      </div>\n    </div>,\n  name: "Theme"\n}',...Theme.parameters?.docs?.source}}},Weight.parameters={...Weight.parameters,docs:{...Weight.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "var(--ic-space-md)"\n  }}>\n      <IcDivider weight="thin" />\n      <IcDivider weight="thin" borderStyle="dashed" />\n      <IcDivider weight="thin" label="End of section" labelPlacement="center" />\n      <IcDivider weight="medium" />\n      <IcDivider weight="medium" borderStyle="dashed" />\n      <IcDivider weight="medium" label="End of section" labelPlacement="center" />\n      <IcDivider weight="thick" />\n      <IcDivider weight="thick" borderStyle="dashed" />\n      <IcDivider weight="thick" label="End of section" labelPlacement="center" />\n      <IcDivider weight="very-thick" />\n      <IcDivider weight="very-thick" borderStyle="dashed" />\n      <IcDivider weight="very-thick" label="End of section" labelPlacement="center" />\n    </div>,\n  name: "Weight"\n}',...Weight.parameters?.docs?.source}}},BorderStyle.parameters={...BorderStyle.parameters,docs:{...BorderStyle.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "var(--ic-space-md)"\n  }}>\n      <IcDivider borderStyle="solid" />\n      <IcDivider borderStyle="dashed" />\n    </div>,\n  name: "Border style"\n}',...BorderStyle.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: "flex",\n    gap: "var(--ic-space-lg)",\n    height: "400px"\n  }}>\n      <IcDivider labelPlacement="top" orientation="vertical" weight="thin">\n        <IcTypography variant="label" slot="label">\n          <p style={{\n          width: "max-content"\n        }}>\n            Slotted label top\n          </p>\n        </IcTypography>\n      </IcDivider>\n      <IcDivider orientation="vertical" weight="thin" borderStyle="dashed" />\n      <IcDivider orientation="vertical" weight="medium" />\n      <IcDivider label="Label center" labelPlacement="center" orientation="vertical" borderStyle="dashed" weight="medium" />\n      <IcDivider orientation="vertical" weight="thick" />\n      <IcDivider orientation="vertical" weight="thick" borderStyle="dashed" />\n      <IcDivider orientation="vertical" weight="very-thick" />\n      <IcDivider orientation="vertical" weight="very-thick" borderStyle="dashed" />\n    </div>,\n  name: "Vertical"\n}',...Vertical.parameters?.docs?.source}}},MaxContent.parameters={...MaxContent.parameters,docs:{...MaxContent.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div style={{\n      display: \'flex\',\n      flexDirection: \'column\',\n      gap: \'var(--ic-space-lg)\'\n    }}>\n      <IcDivider label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶\n        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶" labelPlacement="left"></IcDivider>\n      <IcDivider label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶\n        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶" labelPlacement="center"></IcDivider>\n      <IcDivider labelPlacement="right">\n        <IcTypography variant="label" slot="label" style={{\n          width: \'max-content\',\n          maxWidth: \'100%\'\n        }}>\n          <p style={{\n            width: \'inherit\'\n          }}>\n            A slotted label: 🎶 Now this is a story all about how my life got\n            brewed up and turned around. And I’d like to take a minute, just\n            sit right there; I’ll tell you how I became the prince of a café\n            called Bel-Air 🎶\n            <br />\n            🎶 In west Philadelphia, born and raised; in the coffee shop was\n            where I spent most of my days. Chillin’ out, maxin’, relaxin’ all\n            cool, sippin’ on some cappuccinos outside of the school 🎶\n          </p>\n        </IcTypography>\n      </IcDivider>\n    </div>\n    <div style={{\n      display: \'flex\',\n      gap: \'var(--ic-space-lg)\',\n      height: \'600px\',\n      marginTop: \'var(--ic-space-lg)\'\n    }}>\n      <IcDivider label="A vertical divider: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶\n      🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶" labelPlacement="top" orientation="vertical"></IcDivider>\n    </div>\n    </>,\n  name: "Max content"\n}',...MaxContent.parameters?.docs?.source}}},LabelPlacement.parameters={...LabelPlacement.parameters,docs:{...LabelPlacement.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div style={{\n      display: \'flex\',\n      flexDirection: \'column\',\n      gap: \'var(--ic-space-lg)\'\n    }}>\n      <IcDivider label="Label left" labelPlacement="left" />\n      <IcDivider label="Label center" labelPlacement="center" />\n      <IcDivider label="Label right" labelPlacement="right" />\n      <IcDivider labelPlacement="left">\n        <IcTypography variant="label" slot="label">\n          <p style={{\n            width: \'max-content\'\n          }}>Slotted label left</p>\n        </IcTypography>\n      </IcDivider>\n      <IcDivider labelPlacement="center">\n        <IcTypography variant="label" slot="label">\n          <p style={{\n            width: \'max-content\'\n          }}>Slotted label center</p>\n        </IcTypography>\n      </IcDivider>\n      <IcDivider labelPlacement="right">\n        <IcTypography variant="label" slot="label">\n          <p style={{\n            width: \'max-content\'\n          }}>Slotted label right</p>\n        </IcTypography>\n      </IcDivider>\n    </div>\n    <div style={{\n      display: \'flex\',\n      gap: \'var(--ic-space-lg)\',\n      height: \'200px\',\n      marginTop: \'var(--ic-space-lg)\'\n    }}>\n      <IcDivider label="Label top" labelPlacement="top" orientation="vertical" />\n      <IcDivider label="Label center" labelPlacement="center" orientation="vertical" />\n      <IcDivider label="Label bottom" labelPlacement="bottom" orientation="vertical" />\n      <IcDivider labelPlacement="top" orientation="vertical">\n        <IcTypography variant="label" slot="label">\n          <p style={{\n            width: \'max-content\'\n          }}>Slotted label top</p>\n        </IcTypography>\n      </IcDivider>\n      <IcDivider labelPlacement="center" orientation="vertical">\n        <IcTypography variant="label" slot="label">\n          <p style={{\n            width: \'max-content\'\n          }}>Slotted label center</p>\n        </IcTypography>\n      </IcDivider>\n      <IcDivider labelPlacement="bottom" orientation="vertical">\n        <IcTypography variant="label" slot="label">\n          <p style={{\n            width: \'max-content\'\n          }}>Slotted label bottom</p>\n        </IcTypography>\n      </IcDivider>\n    </div>\n    </>,\n  name: "Label placement"\n}',...LabelPlacement.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const backgroundColor = args.theme === "dark" ? "#17191c" : args.theme === "light" ? "var(--ic-color-background-primary-light)" : "transparent";\n    return <div style={{\n      display: "flex",\n      width: "100%",\n      height: "100%",\n      padding: "var(--ic-space-md)",\n      backgroundColor: `${backgroundColor}`,\n      boxSizing: "border-box"\n    }}>\n        <IcDivider monochrome={args.monochrome} orientation={args.orientation} theme={args.theme} borderStyle={args["borderStyle"]} weight={args.weight} label={args.label} labelPlacement={args.labelPlacement} style={{\n        "--ic-divider-horizontal-width": `${args["--ic-divider-horizontal-width"]}`,\n        "--ic-divider-vertical-height": `${args["--ic-divider-vertical-height"]}`,\n        ["--ic-divider-background"]: `${args["--ic-divider-background"]}`,\n        ["--ic-divider-background-monochrome"]: `${args["--ic-divider-background-monochrome"]}`,\n        ["--ic-divider-label"]: `${args["--ic-divider-label"]}`,\n        ["--ic-divider-label-monochrome"]: `${args["--ic-divider-label-monochrome"]}`,\n        ["--ic-divider-label-width"]: `${args["--ic-divider-label-width"]}`\n      }} />\n      </div>;\n  },\n  args: defaultArgs,\n  argTypes: {\n    borderStyle: {\n      options: ["solid", "dashed"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    label: {\n      mapping: {\n        none: ""\n      }\n    },\n    labelPlacement: {\n      options: ["none", "left", "center", "right", "top", "bottom"],\n      mapping: {\n        none: ""\n      },\n      control: {\n        type: "radio"\n      }\n    },\n    orientation: {\n      options: ["horizontal", "vertical"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    theme: {\n      options: ["inherit", "dark", "light"],\n      control: {\n        type: "radio"\n      }\n    },\n    weight: {\n      options: ["thin", "medium", "thick", "very-thick"],\n      control: {\n        type: "radio"\n      }\n    },\n    "--ic-divider-background": {\n      control: {\n        type: "color"\n      }\n    },\n    "--ic-divider-background-monochrome": {\n      control: {\n        type: "color"\n      }\n    },\n    "--ic-divider-label": {\n      control: {\n        type: "color"\n      }\n    },\n    "--ic-divider-label-monochrome": {\n      control: {\n        type: "color"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);