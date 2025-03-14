"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[396],{"./src/stories/ic-switch.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AriaLabel:()=>AriaLabel,Checked:()=>Checked,CheckedUpdated:()=>CheckedUpdated,Default:()=>Default,DeprecatedSmall:()=>DeprecatedSmall,Disabled:()=>Disabled,DisabledNameAndState:()=>DisabledNameAndState,DisabledNameStateAndChecked:()=>DisabledNameStateAndChecked,HelperText:()=>HelperText,Name:()=>Name,Playground:()=>Playground,RightAdornment:()=>RightAdornment,SizeSmall:()=>SizeSmall,State:()=>State,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Controlled=function Controlled(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),2),checked=_useState2[0],setChecked=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{checked,label:"Label"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{variant:"primary",onClick:function defaultButtonClickHandler(){setChecked(!1)}},"Unchecked"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{variant:"primary",onClick:function differentButtonClickHandler(){setChecked(!0)}},"Checked"))};const __WEBPACK_DEFAULT_EXPORT__={title:"Switch",component:_components__WEBPACK_IMPORTED_MODULE_1__.jp};var Default={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{label:"Label"})},name:"Default"},Name={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{label:"Label"})},name:"Name"},State={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{showState:!0,label:"Label"})},name:"State"},Checked={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{checked:!0,showState:!0,label:"Label"})},name:"Checked"},CheckedUpdated={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Controlled,null)},name:"Checked updated"},SizeSmall={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{size:"small",showState:!0,label:"Label"})},name:"Size small"},DeprecatedSmall={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{small:!0,showState:!0,label:"Label"})},name:"Deprecated - small"},Disabled={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{disabled:!0,label:"Label"})},name:"Disabled"},DisabledNameAndState={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{disabled:!0,showState:!0,label:"Label"})},name:"Disabled, name and state"},DisabledNameStateAndChecked={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{disabled:!0,showState:!0,label:"Label",checked:!0})},name:"Disabled, name, state and checked"},AriaLabel={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{label:"Custom label"})},name:"ARIA label"},RightAdornment={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{label:"Right adornment"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"right-adornment",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z",fill:"black"})))},name:"Right adornment"},HelperText={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{label:"Helper text",helperText:"This is some helper text"})},name:"Helper text"},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.jp,{disabled:args.disabled,"show-state":args.showState,label:args.label,checked:args.checked,"hide-label":args.hideLabel,"helper-text":args.helperText,size:args.size})},args:{label:"Custom Switch",helperText:"Custom helper text",disabled:!1,checked:!1,hideLabel:!1,showState:!1,size:"default"},argTypes:{size:{options:["default","small"],control:{type:"inline-radio"}}},name:"Playground"};const __namedExportsOrder=["Default","Name","State","Checked","CheckedUpdated","SizeSmall","DeprecatedSmall","Disabled","DisabledNameAndState","DisabledNameStateAndChecked","AriaLabel","RightAdornment","HelperText","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch label="Label" />,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Name.parameters={...Name.parameters,docs:{...Name.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch label="Label" />,\n  name: "Name"\n}',...Name.parameters?.docs?.source}}},State.parameters={...State.parameters,docs:{...State.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch showState label="Label" />,\n  name: "State"\n}',...State.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch checked showState label="Label" />,\n  name: "Checked"\n}',...Checked.parameters?.docs?.source}}},CheckedUpdated.parameters={...CheckedUpdated.parameters,docs:{...CheckedUpdated.parameters?.docs,source:{originalSource:'{\n  render: () => <Controlled />,\n  name: "Checked updated"\n}',...CheckedUpdated.parameters?.docs?.source}}},SizeSmall.parameters={...SizeSmall.parameters,docs:{...SizeSmall.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch size="small" showState label="Label" />,\n  name: "Size small"\n}',...SizeSmall.parameters?.docs?.source}}},DeprecatedSmall.parameters={...DeprecatedSmall.parameters,docs:{...DeprecatedSmall.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch small showState label="Label" />,\n  name: "Deprecated - small"\n}',...DeprecatedSmall.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch disabled label="Label" />,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},DisabledNameAndState.parameters={...DisabledNameAndState.parameters,docs:{...DisabledNameAndState.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch disabled showState label="Label" />,\n  name: "Disabled, name and state"\n}',...DisabledNameAndState.parameters?.docs?.source}}},DisabledNameStateAndChecked.parameters={...DisabledNameStateAndChecked.parameters,docs:{...DisabledNameStateAndChecked.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch disabled showState label="Label" checked />,\n  name: "Disabled, name, state and checked"\n}',...DisabledNameStateAndChecked.parameters?.docs?.source}}},AriaLabel.parameters={...AriaLabel.parameters,docs:{...AriaLabel.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch label="Custom label" />,\n  name: "ARIA label"\n}',...AriaLabel.parameters?.docs?.source}}},RightAdornment.parameters={...RightAdornment.parameters,docs:{...RightAdornment.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch label="Right adornment">\n      <svg slot="right-adornment" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="black" />\n      </svg>\n    </IcSwitch>,\n  name: "Right adornment"\n}',...RightAdornment.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'{\n  render: () => <IcSwitch label="Helper text" helperText="This is some helper text" />,\n  name: "Helper text"\n}',...HelperText.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <IcSwitch disabled={args.disabled} show-state={args.showState} label={args.label} checked={args.checked} hide-label={args.hideLabel} helper-text={args.helperText} size={args.size}></IcSwitch>,\n  args: defaultArgs,\n  argTypes: {\n    size: {\n      options: ["default", "small"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);