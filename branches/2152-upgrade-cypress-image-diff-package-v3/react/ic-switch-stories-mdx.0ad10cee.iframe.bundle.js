(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4618],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-switch.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,__namedExportsOrder:()=>__namedExportsOrder,ariaLabel:()=>ariaLabel,checked:()=>checked,checkedUpdated:()=>checkedUpdated,default:()=>ic_switch_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,disabled:()=>disabled,disabledNameAndState:()=>disabledNameAndState,disabledNameStateAndChecked:()=>disabledNameStateAndChecked,helperText:()=>helperText,name:()=>ic_switch_stories_name,playground:()=>playground,rightAdornment:()=>rightAdornment,sizeSmall:()=>sizeSmall,state:()=>state});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-switch\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute     | Description                                                                                                                                                                                                                                           | Type                             | Default        |\n| -------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------- |\n| `checked`            | `checked`     | If `true`, the switch will display as checked.                                                                                                                                                                                                        | `boolean`                        | `false`        |\n| `disabled`           | `disabled`    | If `true`, the disabled state will be set.                                                                                                                                                                                                            | `boolean`                        | `false`        |\n| `helperText`         | `helper-text` | The helper text that will be displayed for additional field guidance.                                                                                                                                                                                 | `string`                         | `""`           |\n| `hideLabel`          | `hide-label`  | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                                                                                    | `boolean`                        | `false`        |\n| `label` _(required)_ | `label`       | The aria-label applied to the switch when no visual \'name\' is provided.                                                                                                                                                                               | `string`                         | `undefined`    |\n| `name`               | `name`        | The name of the control, which is submitted with the form data.                                                                                                                                                                                       | `string`                         | `this.inputId` |\n| `showState`          | `show-state`  | If `true`, the switch will render the On/Off state text.                                                                                                                                                                                              | `boolean`                        | `false`        |\n| `size`               | `size`        | The size of the switch component.                                                                                                                                                                                                                     | `"medium" \\| "small"`            | `"medium"`     |\n| `theme`              | `theme`       | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                                                                                               | `"dark" \\| "inherit" \\| "light"` | `"inherit"`    |\n| `value`              | `value`       | The value of the toggle does not mean if it\'s checked or not, use the `checked` property for that.  The value of a toggle is analogous to the value of a `<input type="checkbox">`, it\'s only used when the toggle participates in a native `<form>`. | `string`                         | `"on"`         |\n\n\n## Events\n\n| Event      | Description                                  | Type                                     |\n| ---------- | -------------------------------------------- | ---------------------------------------- |\n| `icBlur`   | Emitted when the toggle loses focus.         | `CustomEvent<void>`                      |\n| `icChange` | Emitted when the value property has changed. | `CustomEvent<IcSwitchChangeEventDetail>` |\n| `icFocus`  | Emitted when the toggle has focus.           | `CustomEvent<void>`                      |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the switch.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot                | Description                                                  |\n| ------------------- | ------------------------------------------------------------ |\n| `"right-adornment"` | Content is placed to the right of switch before state label. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-label](../ic-input-label)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-switch --\x3e ic-input-label\n  ic-switch --\x3e ic-typography\n  ic-input-label --\x3e ic-typography\n  style ic-switch fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={label:"Custom Switch",helperText:"Custom helper text",disabled:!1,checked:!1,hideLabel:!1,showState:!1,size:"medium",theme:"inherit"},Controlled=()=>{const[checked,setChecked]=(0,react.useState)(!0);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.jp,{checked,label:"Label"}),(0,jsx_runtime.jsx)(components.nP,{variant:"primary",onClick:()=>{setChecked(!1)},children:"Unchecked"}),(0,jsx_runtime.jsx)(components.nP,{variant:"primary",onClick:()=>{setChecked(!0)},children:"Checked"})]})};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Switch",component:components.jp}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",children:(0,jsx_runtime.jsx)(components.jp,{label:"Label"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"name",children:"Name"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Name",children:(0,jsx_runtime.jsx)(components.jp,{label:"Label"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"state",children:"State"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"State",children:(0,jsx_runtime.jsx)(components.jp,{showState:!0,label:"Label"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"checked",children:"Checked"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Checked",children:(0,jsx_runtime.jsx)(components.jp,{checked:!0,showState:!0,label:"Label"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"checked-updated",children:"Checked updated"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Checked updated",children:(0,jsx_runtime.jsx)(Controlled,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size-small",children:"Size small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Size small",children:(0,jsx_runtime.jsx)(components.jp,{size:"small",showState:!0,label:"Label"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",children:(0,jsx_runtime.jsx)(components.jp,{disabled:!0,label:"Label"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-label-and-state",children:"Disabled, label and state"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled, name and state",children:(0,jsx_runtime.jsx)(components.jp,{disabled:!0,showState:!0,label:"Label"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-label-state-and-checked",children:"Disabled, label, state and checked"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled, name, state and checked",children:(0,jsx_runtime.jsx)(components.jp,{disabled:!0,showState:!0,label:"Label",checked:!0})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"aria-label",children:"ARIA label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"ARIA label",children:(0,jsx_runtime.jsx)(components.jp,{label:"Custom label"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"right-adornment",children:"Right adornment"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Right adornment",children:(0,jsx_runtime.jsx)(components.jp,{label:"Right adornment",children:(0,jsx_runtime.jsx)("svg",{slot:"right-adornment",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z",fill:"black"})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Helper text",children:(0,jsx_runtime.jsx)(components.jp,{label:"Helper text",helperText:"This is some helper text"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,argTypes:{size:{options:["medium","small"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground",children:args=>(0,jsx_runtime.jsx)(components.jp,{disabled:args.disabled,"show-state":args.showState,label:args.label,checked:args.checked,"hide-label":args.hideLabel,"helper-text":args.helperText,size:args.size,theme:args.theme})})})]})}const defaultStory=()=>(0,jsx_runtime.jsx)(components.jp,{label:"Label"});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<IcSwitch label="Label" />'}};const ic_switch_stories_name=()=>(0,jsx_runtime.jsx)(components.jp,{label:"Label"});ic_switch_stories_name.storyName="Name",ic_switch_stories_name.parameters={storySource:{source:'<IcSwitch label="Label" />'}};const state=()=>(0,jsx_runtime.jsx)(components.jp,{showState:!0,label:"Label"});state.storyName="State",state.parameters={storySource:{source:'<IcSwitch showState label="Label" />'}};const checked=()=>(0,jsx_runtime.jsx)(components.jp,{checked:!0,showState:!0,label:"Label"});checked.storyName="Checked",checked.parameters={storySource:{source:'<IcSwitch checked showState label="Label" />'}};const checkedUpdated=()=>(0,jsx_runtime.jsx)(Controlled,{});checkedUpdated.storyName="Checked updated",checkedUpdated.parameters={storySource:{source:"<Controlled />"}};const sizeSmall=()=>(0,jsx_runtime.jsx)(components.jp,{size:"small",showState:!0,label:"Label"});sizeSmall.storyName="Size small",sizeSmall.parameters={storySource:{source:'<IcSwitch size="small" showState label="Label" />'}};const disabled=()=>(0,jsx_runtime.jsx)(components.jp,{disabled:!0,label:"Label"});disabled.storyName="Disabled",disabled.parameters={storySource:{source:'<IcSwitch disabled label="Label" />'}};const disabledNameAndState=()=>(0,jsx_runtime.jsx)(components.jp,{disabled:!0,showState:!0,label:"Label"});disabledNameAndState.storyName="Disabled, name and state",disabledNameAndState.parameters={storySource:{source:'<IcSwitch disabled showState label="Label" />'}};const disabledNameStateAndChecked=()=>(0,jsx_runtime.jsx)(components.jp,{disabled:!0,showState:!0,label:"Label",checked:!0});disabledNameStateAndChecked.storyName="Disabled, name, state and checked",disabledNameStateAndChecked.parameters={storySource:{source:'<IcSwitch disabled showState label="Label" checked />'}};const ariaLabel=()=>(0,jsx_runtime.jsx)(components.jp,{label:"Custom label"});ariaLabel.storyName="ARIA label",ariaLabel.parameters={storySource:{source:'<IcSwitch label="Custom label" />'}};const rightAdornment=()=>(0,jsx_runtime.jsx)(components.jp,{label:"Right adornment",children:(0,jsx_runtime.jsx)("svg",{slot:"right-adornment",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z",fill:"black"})})});rightAdornment.storyName="Right adornment",rightAdornment.parameters={storySource:{source:'<IcSwitch label="Right adornment"><svg slot="right-adornment" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="black" /></svg></IcSwitch>'}};const helperText=()=>(0,jsx_runtime.jsx)(components.jp,{label:"Helper text",helperText:"This is some helper text"});helperText.storyName="Helper text",helperText.parameters={storySource:{source:'<IcSwitch label="Helper text" helperText="This is some helper text" />'}};const playground=args=>(0,jsx_runtime.jsx)(components.jp,{disabled:args.disabled,"show-state":args.showState,label:args.label,checked:args.checked,"hide-label":args.hideLabel,"helper-text":args.helperText,size:args.size,theme:args.theme});playground.storyName="Playground",playground.argTypes={size:{options:["medium","small"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:"args => <IcSwitch disabled={args.disabled} show-state={args.showState} label={args.label} checked={args.checked} hide-label={args.hideLabel} helper-text={args.helperText} size={args.size} theme={args.theme}></IcSwitch>"}};const componentMeta={title:"Switch",component:components.jp,tags:["stories-mdx"],includeStories:["defaultStory","name","state","checked","checkedUpdated","sizeSmall","disabled","disabledNameAndState","disabledNameStateAndChecked","ariaLabel","rightAdornment","helperText","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_switch_stories=componentMeta,__namedExportsOrder=["defaultArgs","Controlled","defaultStory","name","state","checked","checkedUpdated","sizeSmall","disabled","disabledNameAndState","disabledNameStateAndChecked","ariaLabel","rightAdornment","helperText","playground"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);