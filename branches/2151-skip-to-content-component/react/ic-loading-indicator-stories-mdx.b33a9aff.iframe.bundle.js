(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[8950],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-loading-indicator.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,changingLabel:()=>changingLabel,circularDark:()=>circularDark,circularDeterminate:()=>circularDeterminate,circularIndeterminate:()=>circularIndeterminate,circularLongLabel:()=>circularLongLabel,circularVariantsDeterminate:()=>circularVariantsDeterminate,circularVariantsIndeterminate:()=>circularVariantsIndeterminate,default:()=>ic_loading_indicator_stories,defaultArgTypes:()=>defaultArgTypes,defaultArgs:()=>defaultArgs,iconCircular:()=>iconCircular,iconDarkCircular:()=>iconDarkCircular,linearDark:()=>linearDark,linearDeterminate:()=>linearDeterminate,linearIndeterminate:()=>linearIndeterminate,linearLongLabel:()=>linearLongLabel,linearVariantsDeterminate:()=>linearVariantsDeterminate,linearVariantsIndeterminate:()=>linearVariantsIndeterminate,monochrome:()=>monochrome,noLabel:()=>noLabel,playgroundDeterminate:()=>playgroundDeterminate,playgroundIndeterminate:()=>playgroundIndeterminate,progressIndicatorForCompactStep:()=>progressIndicatorForCompactStep});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-loading\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property        | Attribute        | Description                                                                                                                             | Type                                       | Default      |\n| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------ |\n| `description`   | `description`    | The description that will be set as the aria-label of the loading indicator when not using a visible label.                             | `string`                                   | `"Loading"`  |\n| `fullWidth`     | `full-width`     | If `true`, when linear, the full-width variant (i.e. without a border radius) will be displayed.                                        | `boolean`                                  | `false`      |\n| `label`         | `label`          | The label to be displayed beneath the loading indicator. Display a changing label by supplying an array of messages.                    | `string \\| string[]`                       | `undefined`  |\n| `labelDuration` | `label-duration` | The time in milliseconds before the label changes.                                                                                      | `number`                                   | `8000`       |\n| `max`           | `max`            | The maximum value that the progress value can take. Used to calculate the proportional width of the progress bar.                       | `number`                                   | `100`        |\n| `min`           | `min`            | The minimum value that the progress value can take. Used to calculate the proportional width of the progress bar.                       | `number`                                   | `0`          |\n| `monochrome`    | `monochrome`     | If `true`, the element will display as black and white.                                                                                 | `boolean`                                  | `false`      |\n| `progress`      | `progress`       | The current amount of progress made. If not provided, component acts as an indeterminate loading indicator.                             | `number`                                   | `undefined`  |\n| `size`          | `size`           | The size of the loading indicator.                                                                                                      | `"icon" \\| "large" \\| "medium" \\| "small"` | `"medium"`   |\n| `theme`         | `theme`          | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"`           | `"inherit"`  |\n| `type`          | `type`           | The type of indicator, either linear or circular.                                                                                       | `"circular" \\| "linear"`                   | `"circular"` |\n\n\n## Shadow Parts\n\n| Part                     | Description |\n| ------------------------ | ----------- |\n| `"ic-loading-container"` |             |\n\n\n## CSS Custom Properties\n\n| Name                  | Description                        |\n| --------------------- | ---------------------------------- |\n| `--circular-diameter` | Diameter of the circular-indicator |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-button](../ic-button)\n - [ic-menu](../ic-menu)\n - [ic-step](../ic-step)\n - [ic-toast](../ic-toast)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-loading-indicator --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-loading-indicator\n  ic-step --\x3e ic-loading-indicator\n  ic-toast --\x3e ic-loading-indicator\n  style ic-loading-indicator fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={description:"Loading",fullWidth:!1,labelDuration:8e3,size:"medium",type:"circular",label:[],theme:"inherit",monochrome:!1},defaultArgTypes={label:{control:{type:"text"}},size:{options:["small","medium","large","icon"],control:{type:"radio"}},type:{options:["circular","linear"],control:{type:"radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},label:{control:{type:"array"}}};function _createMdxContent(props){const _components=Object.assign({h3:"h3",div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Loading",component:components.aY}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-determinate",children:"Circular (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Circular (indeterminate)",children:(0,jsx_runtime.jsx)(components.aY,{label:"Loading..."})})}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Circular (determinate)",children:(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Loading..."})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-long-label",children:"Circular long label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Circular long label",children:(0,jsx_runtime.jsx)(components.aY,{label:"This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-variants-indeterminate",children:"Circular variants (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Circular variants (indeterminate)",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.aY,{label:"Default"}),(0,jsx_runtime.jsx)(components.aY,{label:"Large",size:"large"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-variants-determinate",children:"Circular variants (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Circular variants (determinate)",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Default"}),(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Large",size:"large"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Icon (circular)",children:(0,jsx_runtime.jsx)(components.aY,{size:"icon"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-indeterminate",children:"Linear (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Linear (indeterminate)",children:(0,jsx_runtime.jsx)(components.aY,{label:"Loading...",type:"linear"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-determinate",children:"Linear (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Linear (determinate)",children:(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Loading...",type:"linear"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-long-label",children:"Linear long label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Linear long label",children:(0,jsx_runtime.jsx)(components.aY,{type:"linear",label:"This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-variants-indeterminate",children:"Linear variants (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Linear variants (indeterminate)",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{label:"Small",size:"small",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{label:"Default",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{label:"Large",size:"large",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{label:"Full-width",size:"medium",type:"linear",fullWidth:!0})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-variants-determinate",children:"Linear variants (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Linear variants (determinate)",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Small",size:"small",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Default",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Large",size:"large",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Full-width",size:"medium",type:"linear",fullWidth:!0})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-dark",children:"Circular dark"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Circular dark",parameters:{backgrounds:{default:"dark"}},children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{label:"Small",size:"small",theme:"dark"}),(0,jsx_runtime.jsx)(components.aY,{label:"Default",theme:"dark"}),(0,jsx_runtime.jsx)(components.aY,{label:"Large",size:"large",theme:"dark"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-dark-circular",children:"Icon dark (circular)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Icon dark (circular)",parameters:{backgrounds:{default:"dark"}},children:(0,jsx_runtime.jsx)(components.aY,{size:"icon",theme:"dark"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-dark",children:"Linear dark"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Linear dark",parameters:{backgrounds:{default:"dark"}},children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{label:"Default",type:"linear",theme:"dark"}),(0,jsx_runtime.jsx)(components.aY,{label:"Large",size:"large",type:"linear",theme:"dark"}),(0,jsx_runtime.jsx)(components.aY,{label:"Full-width",type:"linear",fullWidth:!0,theme:"dark"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"monochrome",children:"Monochrome"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Monochrome",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{label:"Light",monochrome:!0}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black"},children:(0,jsx_runtime.jsx)(components.aY,{label:"Dark",theme:"dark",monochrome:!0})}),(0,jsx_runtime.jsx)(components.aY,{size:"icon",monochrome:!0}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black",display:"flex",justifyContent:"center"},children:(0,jsx_runtime.jsx)(components.aY,{size:"icon",theme:"dark",monochrome:!0})}),(0,jsx_runtime.jsx)(components.aY,{label:"Light",type:"linear",monochrome:!0}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black",padding:"var(--ic-space-xs)"},children:(0,jsx_runtime.jsx)(components.aY,{label:"Dark",type:"linear",theme:"dark",monochrome:!0})})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"no-label",children:"No label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"No label",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{description:"Loading"}),(0,jsx_runtime.jsx)(components.aY,{description:"Loading",type:"linear"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"changing-label",children:"Changing label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Changing label",children:(0,jsx_runtime.jsx)(components.aY,{label:["Loading...","Still loading..."],labelDuration:"4000"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"progress-indicator-for-compact-step",children:"Progress indicator for compact step"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Progress indicator for compact step",children:(0,jsx_runtime.jsx)(components.aY,{size:"small","inner-label":"3",progress:"30",min:"0",max:"100"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground---indeterminate",children:"Playground - indeterminate"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Playground - indeterminate",args:defaultArgs,argTypes:defaultArgTypes,children:args=>(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"dark"===args.theme?"#393939":"#FFFFFF",padding:"16px"},children:(0,jsx_runtime.jsx)(components.aY,{monochrome:args.monochrome,theme:args.theme,description:args.description,fullWidth:args.fullWidth,labelDuration:args.labelDuration,size:args.size,type:args.type,label:args.label})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground---determinate",children:"Playground - determinate"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Playground - determinate",args:{...defaultArgs,max:100,min:0,progress:30},argTypes:defaultArgTypes,children:args=>(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"dark"===args.theme?"#393939":"#FFFFFF",padding:"16px"},children:(0,jsx_runtime.jsx)(components.aY,{monochrome:args.monochrome,theme:args.theme,description:args.description,fullWidth:args.fullWidth,labelDuration:args.labelDuration,size:args.size,type:args.type,label:args.label,progress:args.progress,min:args.min,max:args.max})})})})]})}const circularIndeterminate=()=>(0,jsx_runtime.jsx)(components.aY,{label:"Loading..."});circularIndeterminate.storyName="Circular (indeterminate)",circularIndeterminate.parameters={storySource:{source:'<IcLoadingIndicator label="Loading..." />'}};const circularDeterminate=()=>(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Loading..."});circularDeterminate.storyName="Circular (determinate)",circularDeterminate.parameters={storySource:{source:'<IcLoadingIndicator progress="30" min="0" max="100" label="Loading..." />'}};const circularLongLabel=()=>(0,jsx_runtime.jsx)(components.aY,{label:"This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"});circularLongLabel.storyName="Circular long label",circularLongLabel.parameters={storySource:{source:'<IcLoadingIndicator label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long" />'}};const circularVariantsIndeterminate=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.aY,{label:"Default"}),(0,jsx_runtime.jsx)(components.aY,{label:"Large",size:"large"})]});circularVariantsIndeterminate.storyName="Circular variants (indeterminate)",circularVariantsIndeterminate.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator label="Small" size="small" /><IcLoadingIndicator label="Default" /><IcLoadingIndicator label="Large" size="large" /></div>'}};const circularVariantsDeterminate=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Default"}),(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Large",size:"large"})]});circularVariantsDeterminate.storyName="Circular variants (determinate)",circularVariantsDeterminate.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator progress="30" min="0" max="100" label="Small" size="small" /><IcLoadingIndicator progress="30" min="0" max="100" label="Default" /><IcLoadingIndicator progress="30" min="0" max="100" label="Large" size="large" /></div>'}};const iconCircular=()=>(0,jsx_runtime.jsx)(components.aY,{size:"icon"});iconCircular.storyName="Icon (circular)",iconCircular.parameters={storySource:{source:'<IcLoadingIndicator size="icon" />'}};const linearIndeterminate=()=>(0,jsx_runtime.jsx)(components.aY,{label:"Loading...",type:"linear"});linearIndeterminate.storyName="Linear (indeterminate)",linearIndeterminate.parameters={storySource:{source:'<IcLoadingIndicator label="Loading..." type="linear" />'}};const linearDeterminate=()=>(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Loading...",type:"linear"});linearDeterminate.storyName="Linear (determinate)",linearDeterminate.parameters={storySource:{source:'<IcLoadingIndicator progress="30" min="0" max="100" label="Loading..." type="linear" />'}};const linearLongLabel=()=>(0,jsx_runtime.jsx)(components.aY,{type:"linear",label:"This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long"});linearLongLabel.storyName="Linear long label",linearLongLabel.parameters={storySource:{source:'<IcLoadingIndicator type="linear" label="This is a label for a loading indicator that is indeterminate and should wrap onto more than one line when it gets too long" />'}};const linearVariantsIndeterminate=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{label:"Small",size:"small",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{label:"Default",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{label:"Large",size:"large",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{label:"Full-width",size:"medium",type:"linear",fullWidth:!0})]});linearVariantsIndeterminate.storyName="Linear variants (indeterminate)",linearVariantsIndeterminate.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator label="Small" size="small" type="linear" /><IcLoadingIndicator label="Default" type="linear" /><IcLoadingIndicator label="Large" size="large" type="linear" /><IcLoadingIndicator label="Full-width" size="medium" type="linear" fullWidth={true} /></div>'}};const linearVariantsDeterminate=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Small",size:"small",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Default",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Large",size:"large",type:"linear"}),(0,jsx_runtime.jsx)(components.aY,{progress:"30",min:"0",max:"100",label:"Full-width",size:"medium",type:"linear",fullWidth:!0})]});linearVariantsDeterminate.storyName="Linear variants (determinate)",linearVariantsDeterminate.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator progress="30" min="0" max="100" label="Small" size="small" type="linear" /><IcLoadingIndicator progress="30" min="0" max="100" label="Default" type="linear" /><IcLoadingIndicator progress="30" min="0" max="100" label="Large" size="large" type="linear" /><IcLoadingIndicator progress="30" min="0" max="100" label="Full-width" size="medium" type="linear" fullWidth={true} /></div>'}};const circularDark=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{label:"Small",size:"small",theme:"dark"}),(0,jsx_runtime.jsx)(components.aY,{label:"Default",theme:"dark"}),(0,jsx_runtime.jsx)(components.aY,{label:"Large",size:"large",theme:"dark"})]});circularDark.storyName="Circular dark",circularDark.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator label="Small" size="small" theme="dark" /><IcLoadingIndicator label="Default" theme="dark" /><IcLoadingIndicator label="Large" size="large" theme="dark" /></div>'},backgrounds:{default:"dark"}};const iconDarkCircular=()=>(0,jsx_runtime.jsx)(components.aY,{size:"icon",theme:"dark"});iconDarkCircular.storyName="Icon dark (circular)",iconDarkCircular.parameters={storySource:{source:'<IcLoadingIndicator size="icon" theme="dark" />'},backgrounds:{default:"dark"}};const linearDark=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{label:"Default",type:"linear",theme:"dark"}),(0,jsx_runtime.jsx)(components.aY,{label:"Large",size:"large",type:"linear",theme:"dark"}),(0,jsx_runtime.jsx)(components.aY,{label:"Full-width",type:"linear",fullWidth:!0,theme:"dark"})]});linearDark.storyName="Linear dark",linearDark.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator label="Default" type="linear" theme="dark" /><IcLoadingIndicator label="Large" size="large" type="linear" theme="dark" /><IcLoadingIndicator label="Full-width" type="linear" fullWidth={true} theme="dark" /></div>'},backgrounds:{default:"dark"}};const monochrome=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{label:"Light",monochrome:!0}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black"},children:(0,jsx_runtime.jsx)(components.aY,{label:"Dark",theme:"dark",monochrome:!0})}),(0,jsx_runtime.jsx)(components.aY,{size:"icon",monochrome:!0}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black",display:"flex",justifyContent:"center"},children:(0,jsx_runtime.jsx)(components.aY,{size:"icon",theme:"dark",monochrome:!0})}),(0,jsx_runtime.jsx)(components.aY,{label:"Light",type:"linear",monochrome:!0}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black",padding:"var(--ic-space-xs)"},children:(0,jsx_runtime.jsx)(components.aY,{label:"Dark",type:"linear",theme:"dark",monochrome:!0})})]});monochrome.storyName="Monochrome",monochrome.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator label="Light" monochrome /><div style={{\n    backgroundColor: "black"\n  }}><IcLoadingIndicator label="Dark" theme="dark" monochrome /></div><IcLoadingIndicator size="icon" monochrome /><div style={{\n    backgroundColor: "black",\n    display: "flex",\n    justifyContent: "center"\n  }}><IcLoadingIndicator size="icon" theme="dark" monochrome /></div><IcLoadingIndicator label="Light" type="linear" monochrome /><div style={{\n    backgroundColor: "black",\n    padding: "var(--ic-space-xs)"\n  }}><IcLoadingIndicator label="Dark" type="linear" theme="dark" monochrome /></div></div>'}};const noLabel=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.aY,{description:"Loading"}),(0,jsx_runtime.jsx)(components.aY,{description:"Loading",type:"linear"})]});noLabel.storyName="No label",noLabel.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator description="Loading" /><IcLoadingIndicator description="Loading" type="linear" /></div>'}};const changingLabel=()=>(0,jsx_runtime.jsx)(components.aY,{label:["Loading...","Still loading..."],labelDuration:"4000"});changingLabel.storyName="Changing label",changingLabel.parameters={storySource:{source:'<IcLoadingIndicator label={["Loading...", "Still loading..."]} labelDuration="4000" />'}};const progressIndicatorForCompactStep=()=>(0,jsx_runtime.jsx)(components.aY,{size:"small","inner-label":"3",progress:"30",min:"0",max:"100"});progressIndicatorForCompactStep.storyName="Progress indicator for compact step",progressIndicatorForCompactStep.parameters={storySource:{source:'<IcLoadingIndicator size="small" inner-label="3" progress="30" min="0" max="100" />'}};const playgroundIndeterminate=args=>(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"dark"===args.theme?"#393939":"#FFFFFF",padding:"16px"},children:(0,jsx_runtime.jsx)(components.aY,{monochrome:args.monochrome,theme:args.theme,description:args.description,fullWidth:args.fullWidth,labelDuration:args.labelDuration,size:args.size,type:args.type,label:args.label})});playgroundIndeterminate.storyName="Playground - indeterminate",playgroundIndeterminate.argTypes=defaultArgTypes,playgroundIndeterminate.args=defaultArgs,playgroundIndeterminate.parameters={storySource:{source:'args => <div style={{\n  backgroundColor: args.theme === "dark" ? "#393939" : "#FFFFFF",\n  padding: "16px"\n}}>\n          <IcLoadingIndicator monochrome={args.monochrome} theme={args.theme} description={args.description} fullWidth={args.fullWidth} labelDuration={args.labelDuration} size={args.size} type={args.type} label={args.label} />\n        </div>'}};const playgroundDeterminate=args=>(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"dark"===args.theme?"#393939":"#FFFFFF",padding:"16px"},children:(0,jsx_runtime.jsx)(components.aY,{monochrome:args.monochrome,theme:args.theme,description:args.description,fullWidth:args.fullWidth,labelDuration:args.labelDuration,size:args.size,type:args.type,label:args.label,progress:args.progress,min:args.min,max:args.max})});playgroundDeterminate.storyName="Playground - determinate",playgroundDeterminate.argTypes=defaultArgTypes,playgroundDeterminate.args={...defaultArgs,max:100,min:0,progress:30},playgroundDeterminate.parameters={storySource:{source:'args => <div style={{\n  backgroundColor: args.theme === "dark" ? "#393939" : "#FFFFFF",\n  padding: "16px"\n}}>\n          <IcLoadingIndicator monochrome={args.monochrome} theme={args.theme} description={args.description} fullWidth={args.fullWidth} labelDuration={args.labelDuration} size={args.size} type={args.type} label={args.label} progress={args.progress} min={args.min} max={args.max} />\n        </div>'}};const componentMeta={title:"Loading",component:components.aY,tags:["stories-mdx"],includeStories:["circularIndeterminate","circularDeterminate","circularLongLabel","circularVariantsIndeterminate","circularVariantsDeterminate","iconCircular","linearIndeterminate","linearDeterminate","linearLongLabel","linearVariantsIndeterminate","linearVariantsDeterminate","circularDark","iconDarkCircular","linearDark","monochrome","noLabel","changingLabel","progressIndicatorForCompactStep","playgroundIndeterminate","playgroundDeterminate"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_loading_indicator_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultArgTypes","circularIndeterminate","circularDeterminate","circularLongLabel","circularVariantsIndeterminate","circularVariantsDeterminate","iconCircular","linearIndeterminate","linearDeterminate","linearLongLabel","linearVariantsIndeterminate","linearVariantsDeterminate","circularDark","iconDarkCircular","linearDark","monochrome","noLabel","changingLabel","progressIndicatorForCompactStep","playgroundIndeterminate","playgroundDeterminate"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);