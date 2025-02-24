"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[2788],{"./src/react-component-lib/slottedSVG.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>SlottedSVG});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const defaultProps={xmlns:"http://www.w3.org/2000/svg"};const SlottedSVG=_ref=>{let{path,slot:slotName,children,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({},function slot(){let name=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{ref:e=>e?e.setAttribute("slot",name):null}}(slotName),props,defaultProps),!!path&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:path}),children)};try{SlottedSVG.displayName="SlottedSVG",SlottedSVG.__docgenInfo={description:"",displayName:"SlottedSVG",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-component-lib/slottedSVG.tsx#SlottedSVG"]={docgenInfo:SlottedSVG.__docgenInfo,name:"SlottedSVG",path:"src/react-component-lib/slottedSVG.tsx#SlottedSVG"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/ic-tabs.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Default:()=>Default,Disabled:()=>Disabled,DynamicRendering:()=>DynamicRendering,Inline:()=>Inline,LightText:()=>LightText,ManualActivation:()=>ManualActivation,Playground:()=>Playground,Responsive:()=>Responsive,ResponsiveLightText:()=>ResponsiveLightText,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts"),_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react-component-lib/slottedSVG.tsx");function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||_unsupportedIterableToArray(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||_unsupportedIterableToArray(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var ControlledTabsExample=function ControlledTabsExample(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),selectedTab=_useState2[0],setSelectedTab=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,{selectedTabIndex:selectedTab,onTabSelect:function onTabSelect(event){return setSelectedTab(event.detail.tabIndex)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:"Example tab group"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Three")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Three")))},DynamicRender=function DynamicRender(){var _useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),2),data=_useState4[0],setData=_useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setTimeout((function(){setData([{label:"Ingredients"},{label:"Method"},{label:"History"}])}),3e3)}),[]);var createRandomLabel=function createRandomLabel(){for(var chars="abcdefghijklmnopqrstuvwxyz",result="",i=0;i<3;i++)result+=chars.charAt(Math.floor(26*Math.random()));return result};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{onClick:function addTab(){setData([].concat(_toConsumableArray(data),[{label:createRandomLabel()}]))}},"Add Tab"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{onClick:function removeTab(){data.pop(),setData(_toConsumableArray(data))}},"Remove Tab"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,{onIcTabSelect:function onIcTabSelect(ev){return console.log({tabIndex:ev.detail.tabIndex,tabLabel:ev.detail.tabLabel})}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:"Example tab group"},data.map((function(item,i){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,{key:"".concat(item.label,"-").concat(i)},2===i&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__.k,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9,21V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9M7,4V9H17V4H7M7,19H17V11H7V19M8,12H10V15H8V12M8,6H10V8H8V6Z"})),item.label)}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null),data.map((function(item,i){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,{key:"".concat(item.label,"-").concat(i)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Tab ",i," - ",item.label))}))))};const __WEBPACK_DEFAULT_EXPORT__={title:"Tabs",component:_components__WEBPACK_IMPORTED_MODULE_1__.Pw};var Default={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,{onIcTabSelect:function onIcTabSelect(ev){return console.log(ev.detail)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:"Example tab group"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Three")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Three"))},name:"Default"},WithIcons={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:"Example tab group"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"One",react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Two",react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Three",react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Three"))},name:"With icons"},Disabled={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:"Example tab group"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,{disabled:!0},"Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Three")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Three"))},name:"Disabled"},Inline={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:"Example tab group",inline:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Three")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Three"))},name:"Inline"},Controlled={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ControlledTabsExample,null)},name:"Controlled"},ManualActivation={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,{activationType:"manual"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:"Example tab group"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Three")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Three"))},name:"Manual activation"},LightText={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,{appearance:"light"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:"Example tab group"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Three",react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Three"))},name:"Light text",parameters:{backgrounds:{default:"dark"}}},Responsive={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:"Example tab group"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Three"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Four"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Five"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Six"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Seven"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Eight"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Nine"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Ten"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Eleven"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Twelve")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Three"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Four"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Five"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Six"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Seven"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Eight"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Nine"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Ten"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Eleven"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Twelve"))},name:"Responsive"},ResponsiveLightText={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,{appearance:"light"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:"Example tab group"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Three"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Four"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Five"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Six"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Seven"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Eight"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Nine")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Three"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Four"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Five"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Six"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Seven"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Eight"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Nine"))},name:"Responsive (Light text)",parameters:{backgrounds:{default:"dark"}}},DynamicRendering={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DynamicRender,null)},name:"Dynamic rendering"},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{backgroundColor:"light"==args.appearance?"black":""}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Pw,{activationType:args.activationType,appearance:args.appearance},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dq,{label:args.groupLabel,inline:args.inline},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,{disabled:args.disabled},"One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Two",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.E3,{textLabel:"1",slot:"badge",position:"inline",accessibleLabel:"1 notification found"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.I7,null,"Three",react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab One"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.eF,null,"Tab Three")))},args:{activationType:"automatic",appearance:"dark",disabled:!1,inline:!1,groupLabel:"Example tab group"},argTypes:{activationType:{options:["automatic","manual"],control:{type:"inline-radio"}},appearance:{options:["dark","light"],control:{type:"inline-radio"}}},name:"Playground"};const __namedExportsOrder=["Default","WithIcons","Disabled","Inline","Controlled","ManualActivation","LightText","Responsive","ResponsiveLightText","DynamicRendering","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTabContext onIcTabSelect={ev => console.log(ev.detail)}>\n      <IcTabGroup label="Example tab group">\n        <IcTab>One</IcTab>\n        <IcTab>Two</IcTab>\n        <IcTab>Three</IcTab>\n      </IcTabGroup>\n      <IcTabPanel>Tab One</IcTabPanel>\n      <IcTabPanel>Tab Two</IcTabPanel>\n      <IcTabPanel>Tab Three</IcTabPanel>\n    </IcTabContext>,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTabContext>\n      <IcTabGroup label="Example tab group">\n        <IcTab>\n          One\n          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />\n          </svg>\n        </IcTab>\n        <IcTab>\n          Two\n          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />\n          </svg>\n        </IcTab>\n        <IcTab>\n          Three\n          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />\n          </svg>\n        </IcTab>\n      </IcTabGroup>\n      <IcTabPanel>Tab One</IcTabPanel>\n      <IcTabPanel>Tab Two</IcTabPanel>\n      <IcTabPanel>Tab Three</IcTabPanel>\n    </IcTabContext>,\n  name: "With icons"\n}',...WithIcons.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTabContext>\n      <IcTabGroup label="Example tab group">\n        <IcTab>One</IcTab>\n        <IcTab disabled>Two</IcTab>\n        <IcTab>Three</IcTab>\n      </IcTabGroup>\n      <IcTabPanel>Tab One</IcTabPanel>\n      <IcTabPanel>Tab Two</IcTabPanel>\n      <IcTabPanel>Tab Three</IcTabPanel>\n    </IcTabContext>,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTabContext>\n      <IcTabGroup label="Example tab group" inline>\n        <IcTab>One</IcTab>\n        <IcTab>Two</IcTab>\n        <IcTab>Three</IcTab>\n      </IcTabGroup>\n      <IcTabPanel>Tab One</IcTabPanel>\n      <IcTabPanel>Tab Two</IcTabPanel>\n      <IcTabPanel>Tab Three</IcTabPanel>\n    </IcTabContext>,\n  name: "Inline"\n}',...Inline.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'{\n  render: () => <ControlledTabsExample />,\n  name: "Controlled"\n}',...Controlled.parameters?.docs?.source}}},ManualActivation.parameters={...ManualActivation.parameters,docs:{...ManualActivation.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTabContext activationType="manual">\n      <IcTabGroup label="Example tab group">\n        <IcTab>One</IcTab>\n        <IcTab>Two</IcTab>\n        <IcTab>Three</IcTab>\n      </IcTabGroup>\n      <IcTabPanel>Tab One</IcTabPanel>\n      <IcTabPanel>Tab Two</IcTabPanel>\n      <IcTabPanel>Tab Three</IcTabPanel>\n    </IcTabContext>,\n  name: "Manual activation"\n}',...ManualActivation.parameters?.docs?.source}}},LightText.parameters={...LightText.parameters,docs:{...LightText.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTabContext appearance="light">\n      <IcTabGroup label="Example tab group">\n        <IcTab>One</IcTab>\n        <IcTab>Two</IcTab>\n        <IcTab>\n          Three\n          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />\n          </svg>\n        </IcTab>\n      </IcTabGroup>\n      <IcTabPanel>Tab One</IcTabPanel>\n      <IcTabPanel>Tab Two</IcTabPanel>\n      <IcTabPanel>Tab Three</IcTabPanel>\n    </IcTabContext>,\n  name: "Light text",\n  parameters: {\n    backgrounds: {\n      default: "dark"\n    }\n  }\n}',...LightText.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTabContext>\n      <IcTabGroup label="Example tab group">\n        <IcTab>One</IcTab>\n        <IcTab>Two</IcTab>\n        <IcTab>Three</IcTab>\n        <IcTab>Four</IcTab>\n        <IcTab>Five</IcTab>\n        <IcTab>Six</IcTab>\n        <IcTab>Seven</IcTab>\n        <IcTab>Eight</IcTab>\n        <IcTab>Nine</IcTab>\n        <IcTab>Ten</IcTab>\n        <IcTab>Eleven</IcTab>\n        <IcTab>Twelve</IcTab>\n      </IcTabGroup>\n      <IcTabPanel>Tab One</IcTabPanel>\n      <IcTabPanel>Tab Two</IcTabPanel>\n      <IcTabPanel>Tab Three</IcTabPanel>\n      <IcTabPanel>Tab Four</IcTabPanel>\n      <IcTabPanel>Tab Five</IcTabPanel>\n      <IcTabPanel>Tab Six</IcTabPanel>\n      <IcTabPanel>Tab Seven</IcTabPanel>\n      <IcTabPanel>Tab Eight</IcTabPanel>\n      <IcTabPanel>Tab Nine</IcTabPanel>\n      <IcTabPanel>Tab Ten</IcTabPanel>\n      <IcTabPanel>Tab Eleven</IcTabPanel>\n      <IcTabPanel>Tab Twelve</IcTabPanel>\n    </IcTabContext>,\n  name: "Responsive"\n}',...Responsive.parameters?.docs?.source}}},ResponsiveLightText.parameters={...ResponsiveLightText.parameters,docs:{...ResponsiveLightText.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTabContext appearance="light">\n      <IcTabGroup label="Example tab group">\n        <IcTab>One</IcTab>\n        <IcTab>Two</IcTab>\n        <IcTab>Three</IcTab>\n        <IcTab>Four</IcTab>\n        <IcTab>Five</IcTab>\n        <IcTab>Six</IcTab>\n        <IcTab>Seven</IcTab>\n        <IcTab>Eight</IcTab>\n        <IcTab>Nine</IcTab>\n      </IcTabGroup>\n      <IcTabPanel>Tab One</IcTabPanel>\n      <IcTabPanel>Tab Two</IcTabPanel>\n      <IcTabPanel>Tab Three</IcTabPanel>\n      <IcTabPanel>Tab Four</IcTabPanel>\n      <IcTabPanel>Tab Five</IcTabPanel>\n      <IcTabPanel>Tab Six</IcTabPanel>\n      <IcTabPanel>Tab Seven</IcTabPanel>\n      <IcTabPanel>Tab Eight</IcTabPanel>\n      <IcTabPanel>Tab Nine</IcTabPanel>\n    </IcTabContext>,\n  name: "Responsive (Light text)",\n  parameters: {\n    backgrounds: {\n      default: "dark"\n    }\n  }\n}',...ResponsiveLightText.parameters?.docs?.source}}},DynamicRendering.parameters={...DynamicRendering.parameters,docs:{...DynamicRendering.parameters?.docs,source:{originalSource:'{\n  render: () => <DynamicRender />,\n  name: "Dynamic rendering"\n}',...DynamicRendering.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <div style={{\n    backgroundColor: args.appearance == "light" ? "black" : ""\n  }}>\n      <IcTabContext activationType={args.activationType} appearance={args.appearance}>\n        <IcTabGroup label={args.groupLabel} inline={args.inline}>\n          <IcTab disabled={args.disabled}>One</IcTab>\n          <IcTab>\n            Two\n            <IcBadge textLabel="1" slot="badge" position="inline" accessibleLabel="1 notification found" />\n          </IcTab>\n          <IcTab>\n            Three\n            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />\n            </svg>\n          </IcTab>\n        </IcTabGroup>\n        <IcTabPanel>Tab One</IcTabPanel>\n        <IcTabPanel>Tab Two</IcTabPanel>\n        <IcTabPanel>Tab Three</IcTabPanel>\n      </IcTabContext>\n    </div>,\n  args: defaultArgs,\n  argTypes: {\n    activationType: {\n      options: ["automatic", "manual"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    appearance: {\n      options: ["dark", "light"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);