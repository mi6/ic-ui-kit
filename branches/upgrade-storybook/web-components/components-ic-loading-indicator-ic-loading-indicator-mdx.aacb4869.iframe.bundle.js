/*! For license information please see components-ic-loading-indicator-ic-loading-indicator-mdx.aacb4869.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5861,3707,6895,6591,4479],{"./src/components/ic-loading-indicator/ic-loading-indicator.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent,defaultArgTypes:()=>defaultArgTypes,defaultArgs:()=>defaultArgs});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-loading\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property        | Attribute        | Description                                                                                                                             | Type                                        | Default      |\n| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------ |\n| `appearance`    | `appearance`     | The appearance of the loading indicator, e.g. dark or light.                                                                            | `"dark" \\| "light"`                         | `"dark"`     |\n| `description`   | `description`    | The description that will be set as the aria-label of the loading indicator when not using a visible label.                             | `string`                                    | `"Loading"`  |\n| `fullWidth`     | `full-width`     | If `true`, when linear, the full-width variant (i.e. without a border radius) will be displayed.                                        | `boolean`                                   | `false`      |\n| `label`         | `label`          | The label to be displayed beneath the loading indicator. Display a changing label by separating multiple messages with forward slashes. | `string`                                    | `undefined`  |\n| `labelDuration` | `label-duration` | The time in milliseconds before the label changes.                                                                                      | `number`                                    | `8000`       |\n| `max`           | `max`            | The maximum value that the progress value can take. Used to calculate the proportional width of the progress bar.                       | `number`                                    | `100`        |\n| `min`           | `min`            | The minimum value that the progress value can take. Used to calculate the proportional width of the progress bar.                       | `number`                                    | `0`          |\n| `progress`      | `progress`       | The current amount of progress made. If not provided, component acts as an indeterminate loading indicator.                             | `number`                                    | `undefined`  |\n| `size`          | `size`           | The size of the loading indicator.                                                                                                      | `"default" \\| "icon" \\| "large" \\| "small"` | `"default"`  |\n| `type`          | `type`           | The type of indicator, either linear or circular.                                                                                       | `"circular" \\| "linear"`                    | `"circular"` |\n\n\n## Shadow Parts\n\n| Part                     | Description |\n| ------------------------ | ----------- |\n| `"ic-loading-container"` |             |\n\n\n## CSS Custom Properties\n\n| Name                  | Description                        |\n| --------------------- | ---------------------------------- |\n| `--circular-diameter` | Diameter of the circular-indicator |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-button](../ic-button)\n - [ic-menu](../ic-menu)\n - [ic-step](../ic-step)\n - [ic-toast](../ic-toast)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-loading-indicator --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-loading-indicator\n  ic-step --\x3e ic-loading-indicator\n  ic-toast --\x3e ic-loading-indicator\n  style ic-loading-indicator fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_loading_indicator_stories=__webpack_require__("./src/components/ic-loading-indicator/ic-loading-indicator.stories.js");const defaultArgs={appearance:"dark",description:"Loading",fullWidth:!1,labelDuration:8e3,size:"default",type:"circular",label:null},defaultArgTypes={appearance:{options:["dark","light"],control:{type:"radio"}},label:{control:{type:"text"}},size:{options:["small","default","large","icon"],control:{type:"radio"}},type:{options:["circular","linear"],control:{type:"radio"}}};function _createMdxContent(props){const _components={h3:"h3",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_loading_indicator_stories}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-indeterminate",children:"Circular (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.CircularIndeterminate})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-determinate",children:"Circular (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.CircularDeterminate})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-long-label",children:"Circular long label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.CircularLongLabel})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-variants-indeterminate",children:"Circular variants (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.CircularVariantsIndeterminate})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-variants-determinate",children:"Circular variants (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.CircularVariantsDeterminate})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.Icon})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-indeterminate",children:"Linear (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.LinearIndeterminate})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-determinate",children:"Linear (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.LinearDeterminate})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-long-label",children:"Linear long label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.LinearLongLabel})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-variants-indeterminate",children:"Linear variants (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.LinearVariantsIndeterminate})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-variants-determinate",children:"Linear variants (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.LinearVariantsDeterminate})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-light",children:"Circular light"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.CircularLight})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-light",children:"Icon light"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.IconLight})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-light",children:"Linear light"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.LinearLight})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"no-label",children:"No label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.NoLabel})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"changing-label",children:"Changing label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.ChangingLabel})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"progress-indicator-for-compact-step",children:"Progress indicator for compact step"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.ProgressIndicatorForCompactStep})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground---indeterminate",children:"Playground - indeterminate"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.PlaygroundIndeterminate})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground---determinate",children:"Playground - determinate"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_loading_indicator_stories.PlaygroundDeterminate})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-loading-indicator/ic-loading-indicator.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangingLabel:()=>ChangingLabel,CircularDeterminate:()=>CircularDeterminate,CircularIndeterminate:()=>CircularIndeterminate,CircularLight:()=>CircularLight,CircularLongLabel:()=>CircularLongLabel,CircularVariantsDeterminate:()=>CircularVariantsDeterminate,CircularVariantsIndeterminate:()=>CircularVariantsIndeterminate,Icon:()=>Icon,IconLight:()=>IconLight,LinearDeterminate:()=>LinearDeterminate,LinearIndeterminate:()=>LinearIndeterminate,LinearLight:()=>LinearLight,LinearLongLabel:()=>LinearLongLabel,LinearVariantsDeterminate:()=>LinearVariantsDeterminate,LinearVariantsIndeterminate:()=>LinearVariantsIndeterminate,NoLabel:()=>NoLabel,PlaygroundDeterminate:()=>PlaygroundDeterminate,PlaygroundIndeterminate:()=>PlaygroundIndeterminate,ProgressIndicatorForCompactStep:()=>ProgressIndicatorForCompactStep,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const defaultArgs={appearance:"dark",description:"Loading",fullWidth:!1,labelDuration:8e3,size:"default",type:"circular",label:null},defaultArgTypes={appearance:{options:["dark","light"],control:{type:"radio"}},label:{control:{type:"text"}},size:{options:["small","default","large","icon"],control:{type:"radio"}},type:{options:["circular","linear"],control:{type:"radio"}}},__WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Loading",component:"ic-loading-indicator"},CircularIndeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`,name:"Circular (indeterminate)"},CircularDeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Loading..."
    ></ic-loading-indicator>`,name:"Circular (determinate)"},CircularLongLabel={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-loading-indicator
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>`,name:"Circular long label"},CircularVariantsIndeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>
      <ic-loading-indicator label="Default"></ic-loading-indicator>
      <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>
    </div>`,name:"Circular variants (indeterminate)"},CircularVariantsDeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Small"
        size="small"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
      ></ic-loading-indicator>
    </div>`,name:"Circular variants (determinate)"},Icon={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-loading-indicator size="icon"></ic-loading-indicator>`,name:"Icon"},LinearIndeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-loading-indicator
      label="Loading..."
      type="linear"
    ></ic-loading-indicator>`,name:"Linear (indeterminate)"},LinearDeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-loading-indicator
      progress="30"
      min="0"
      max="100"
      label="Progress"
      type="linear"
    ></ic-loading-indicator>`,name:"Linear (determinate)"},LinearLongLabel={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-loading-indicator
      type="linear"
      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"
    ></ic-loading-indicator>`,name:"Linear long label"},LinearVariantsIndeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Small"
        size="small"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Default"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Full-width"
        size="default"
        type="linear"
        full-width="true"
      ></ic-loading-indicator>
    </div>`,name:"Linear variants (indeterminate)"},LinearVariantsDeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Small"
        size="small"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
        type="linear"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Full-width"
        size="default"
        type="linear"
        full-width="true"
      ></ic-loading-indicator>
    </div>`,name:"Linear variants (determinate)"},CircularLight={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Small"
        size="small"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Default"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        appearance="light"
      ></ic-loading-indicator>
    </div>`,name:"Circular light",parameters:{backgrounds:{default:"dark"}}},IconLight={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-loading-indicator
      size="icon"
      appearance="light"
    ></ic-loading-indicator>`,name:"Icon light",parameters:{backgrounds:{default:"dark"}}},LinearLight={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator
        label="Default"
        type="linear"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Large"
        size="large"
        type="linear"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        label="Full-width"
        type="linear"
        full-width="true"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Default"
        type="linear"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Large"
        size="large"
        type="linear"
        appearance="light"
      ></ic-loading-indicator>
      <ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        label="Full-width"
        type="linear"
        full-width="true"
        appearance="light"
      ></ic-loading-indicator>
    </div>`,name:"Linear light",parameters:{backgrounds:{default:"dark"}}},NoLabel={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: grid; gap: 50px;">
      <ic-loading-indicator description="Loading"></ic-loading-indicator
      ><ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        description="Loading"
      ></ic-loading-indicator
      ><ic-loading-indicator
        description="Loading"
        type="linear"
      ></ic-loading-indicator
      ><ic-loading-indicator
        progress="30"
        min="0"
        max="100"
        description="Loading"
        type="linear"
      ></ic-loading-indicator>
    </div>`,name:"No label"},ChangingLabel={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-loading-indicator
      label="Loading.../Still loading..."
      label-duration="4000"
    ></ic-loading-indicator>`,name:"Changing label"},ProgressIndicatorForCompactStep={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-loading-indicator
      size="small"
      inner-label="3"
      progress="30"
      min="0"
      max="100"
    ></ic-loading-indicator>`,name:"Progress indicator for compact step",args:defaultArgs,argTypes:defaultArgTypes},PlaygroundIndeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div
      style="background-color: ${"light"===args.appearance?"#393939":"#FFFFFF"}; padding: 16px;"
    >
      <ic-loading-indicator
        appearance=${args.appearance}
        description=${args.description}
        full-width=${args.fullWidth}
        label-duration=${args.labelDuration}
        size=${args.size}
        type=${args.type}
        label=${args.label}
      >
      </ic-loading-indicator>
    </div>`,args:defaultArgs,argTypes:defaultArgTypes,name:"Playground - indeterminate"},PlaygroundDeterminate={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div
      style="background-color: ${"light"===args.appearance?"#393939":"#FFFFFF"}; padding: 16px;"
    >
      <ic-loading-indicator
        appearance=${args.appearance}
        description=${args.description}
        full-width=${args.fullWidth}
        label-duration=${args.labelDuration}
        size=${args.size}
        type=${args.type}
        label=${args.label}
        progress=${args.progress}
        min=${args.min}
        max=${args.max}
      >
      </ic-loading-indicator>
    </div>`,args:{...defaultArgs,max:100,min:0,progress:30},argTypes:defaultArgTypes,name:"Playground - determinate"},__namedExportsOrder=["CircularIndeterminate","CircularDeterminate","CircularLongLabel","CircularVariantsIndeterminate","CircularVariantsDeterminate","Icon","LinearIndeterminate","LinearDeterminate","LinearLongLabel","LinearVariantsIndeterminate","LinearVariantsDeterminate","CircularLight","IconLight","LinearLight","NoLabel","ChangingLabel","ProgressIndicatorForCompactStep","PlaygroundIndeterminate","PlaygroundDeterminate"];CircularIndeterminate.parameters={...CircularIndeterminate.parameters,docs:{...CircularIndeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`,\n  name: "Circular (indeterminate)"\n}',...CircularIndeterminate.parameters?.docs?.source}}},CircularDeterminate.parameters={...CircularDeterminate.parameters,docs:{...CircularDeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-loading-indicator\n      progress="30"\n      min="0"\n      max="100"\n      label="Loading..."\n    ></ic-loading-indicator>`,\n  name: "Circular (determinate)"\n}',...CircularDeterminate.parameters?.docs?.source}}},CircularLongLabel.parameters={...CircularLongLabel.parameters,docs:{...CircularLongLabel.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-loading-indicator\n      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"\n    ></ic-loading-indicator>`,\n  name: "Circular long label"\n}',...CircularLongLabel.parameters?.docs?.source}}},CircularVariantsIndeterminate.parameters={...CircularVariantsIndeterminate.parameters,docs:{...CircularVariantsIndeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="display: grid; gap: 50px;">\n      <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>\n      <ic-loading-indicator label="Default"></ic-loading-indicator>\n      <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>\n    </div>`,\n  name: "Circular variants (indeterminate)"\n}',...CircularVariantsIndeterminate.parameters?.docs?.source}}},CircularVariantsDeterminate.parameters={...CircularVariantsDeterminate.parameters,docs:{...CircularVariantsDeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="display: grid; gap: 50px;">\n      <ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        label="Small"\n        size="small"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        label="Default"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        label="Large"\n        size="large"\n      ></ic-loading-indicator>\n    </div>`,\n  name: "Circular variants (determinate)"\n}',...CircularVariantsDeterminate.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-loading-indicator size="icon"></ic-loading-indicator>`,\n  name: "Icon"\n}',...Icon.parameters?.docs?.source}}},LinearIndeterminate.parameters={...LinearIndeterminate.parameters,docs:{...LinearIndeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-loading-indicator\n      label="Loading..."\n      type="linear"\n    ></ic-loading-indicator>`,\n  name: "Linear (indeterminate)"\n}',...LinearIndeterminate.parameters?.docs?.source}}},LinearDeterminate.parameters={...LinearDeterminate.parameters,docs:{...LinearDeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-loading-indicator\n      progress="30"\n      min="0"\n      max="100"\n      label="Progress"\n      type="linear"\n    ></ic-loading-indicator>`,\n  name: "Linear (determinate)"\n}',...LinearDeterminate.parameters?.docs?.source}}},LinearLongLabel.parameters={...LinearLongLabel.parameters,docs:{...LinearLongLabel.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-loading-indicator\n      type="linear"\n      label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"\n    ></ic-loading-indicator>`,\n  name: "Linear long label"\n}',...LinearLongLabel.parameters?.docs?.source}}},LinearVariantsIndeterminate.parameters={...LinearVariantsIndeterminate.parameters,docs:{...LinearVariantsIndeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="display: grid; gap: 50px;">\n      <ic-loading-indicator\n        label="Small"\n        size="small"\n        type="linear"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        label="Default"\n        type="linear"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        label="Large"\n        size="large"\n        type="linear"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        label="Full-width"\n        size="default"\n        type="linear"\n        full-width="true"\n      ></ic-loading-indicator>\n    </div>`,\n  name: "Linear variants (indeterminate)"\n}',...LinearVariantsIndeterminate.parameters?.docs?.source}}},LinearVariantsDeterminate.parameters={...LinearVariantsDeterminate.parameters,docs:{...LinearVariantsDeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="display: grid; gap: 50px;">\n      <ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        label="Small"\n        size="small"\n        type="linear"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        label="Default"\n        type="linear"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        label="Large"\n        size="large"\n        type="linear"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        label="Full-width"\n        size="default"\n        type="linear"\n        full-width="true"\n      ></ic-loading-indicator>\n    </div>`,\n  name: "Linear variants (determinate)"\n}',...LinearVariantsDeterminate.parameters?.docs?.source}}},CircularLight.parameters={...CircularLight.parameters,docs:{...CircularLight.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="display: grid; gap: 50px;">\n      <ic-loading-indicator\n        label="Small"\n        size="small"\n        appearance="light"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        label="Default"\n        appearance="light"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        label="Large"\n        size="large"\n        appearance="light"\n      ></ic-loading-indicator>\n    </div>`,\n  name: "Circular light",\n  parameters: {\n    backgrounds: {\n      default: "dark"\n    }\n  }\n}',...CircularLight.parameters?.docs?.source}}},IconLight.parameters={...IconLight.parameters,docs:{...IconLight.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-loading-indicator\n      size="icon"\n      appearance="light"\n    ></ic-loading-indicator>`,\n  name: "Icon light",\n  parameters: {\n    backgrounds: {\n      default: "dark"\n    }\n  }\n}',...IconLight.parameters?.docs?.source}}},LinearLight.parameters={...LinearLight.parameters,docs:{...LinearLight.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="display: grid; gap: 50px;">\n      <ic-loading-indicator\n        label="Default"\n        type="linear"\n        appearance="light"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        label="Large"\n        size="large"\n        type="linear"\n        appearance="light"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        label="Full-width"\n        type="linear"\n        full-width="true"\n        appearance="light"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        label="Default"\n        type="linear"\n        appearance="light"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        label="Large"\n        size="large"\n        type="linear"\n        appearance="light"\n      ></ic-loading-indicator>\n      <ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        label="Full-width"\n        type="linear"\n        full-width="true"\n        appearance="light"\n      ></ic-loading-indicator>\n    </div>`,\n  name: "Linear light",\n  parameters: {\n    backgrounds: {\n      default: "dark"\n    }\n  }\n}',...LinearLight.parameters?.docs?.source}}},NoLabel.parameters={...NoLabel.parameters,docs:{...NoLabel.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="display: grid; gap: 50px;">\n      <ic-loading-indicator description="Loading"></ic-loading-indicator\n      ><ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        description="Loading"\n      ></ic-loading-indicator\n      ><ic-loading-indicator\n        description="Loading"\n        type="linear"\n      ></ic-loading-indicator\n      ><ic-loading-indicator\n        progress="30"\n        min="0"\n        max="100"\n        description="Loading"\n        type="linear"\n      ></ic-loading-indicator>\n    </div>`,\n  name: "No label"\n}',...NoLabel.parameters?.docs?.source}}},ChangingLabel.parameters={...ChangingLabel.parameters,docs:{...ChangingLabel.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-loading-indicator\n      label="Loading.../Still loading..."\n      label-duration="4000"\n    ></ic-loading-indicator>`,\n  name: "Changing label"\n}',...ChangingLabel.parameters?.docs?.source}}},ProgressIndicatorForCompactStep.parameters={...ProgressIndicatorForCompactStep.parameters,docs:{...ProgressIndicatorForCompactStep.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-loading-indicator\n      size="small"\n      inner-label="3"\n      progress="30"\n      min="0"\n      max="100"\n    ></ic-loading-indicator>`,\n  name: "Progress indicator for compact step",\n  args: defaultArgs,\n  argTypes: defaultArgTypes\n}',...ProgressIndicatorForCompactStep.parameters?.docs?.source}}},PlaygroundIndeterminate.parameters={...PlaygroundIndeterminate.parameters,docs:{...PlaygroundIndeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div\n      style="background-color: ${args.appearance === "light" ? "#393939" : "#FFFFFF"}; padding: 16px;"\n    >\n      <ic-loading-indicator\n        appearance=${args.appearance}\n        description=${args.description}\n        full-width=${args.fullWidth}\n        label-duration=${args.labelDuration}\n        size=${args.size}\n        type=${args.type}\n        label=${args.label}\n      >\n      </ic-loading-indicator>\n    </div>`,\n  args: defaultArgs,\n  argTypes: defaultArgTypes,\n  name: "Playground - indeterminate"\n}',...PlaygroundIndeterminate.parameters?.docs?.source}}},PlaygroundDeterminate.parameters={...PlaygroundDeterminate.parameters,docs:{...PlaygroundDeterminate.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div\n      style="background-color: ${args.appearance === "light" ? "#393939" : "#FFFFFF"}; padding: 16px;"\n    >\n      <ic-loading-indicator\n        appearance=${args.appearance}\n        description=${args.description}\n        full-width=${args.fullWidth}\n        label-duration=${args.labelDuration}\n        size=${args.size}\n        type=${args.type}\n        label=${args.label}\n        progress=${args.progress}\n        min=${args.min}\n        max=${args.max}\n      >\n      </ic-loading-indicator>\n    </div>`,\n  args: {\n    ...defaultArgs,\n    max: 100,\n    min: 0,\n    progress: 30\n  },\n  argTypes: defaultArgTypes,\n  name: "Playground - determinate"\n}',...PlaygroundDeterminate.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-loading-indicator-ic-loading-indicator-mdx.aacb4869.iframe.bundle.js.map