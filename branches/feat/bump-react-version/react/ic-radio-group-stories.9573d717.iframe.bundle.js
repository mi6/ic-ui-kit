"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7875],{"./src/stories/ic-radio-group.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalFieldRendering:()=>AdditionalFieldRendering,ConditionalDynamic:()=>ConditionalDynamic,ConditionalStatic:()=>ConditionalStatic,Controlled_:()=>Controlled_,Default:()=>Default,DeprecatedSmall:()=>DeprecatedSmall,Disabled:()=>Disabled,DynamicLoading:()=>DynamicLoading,Form_:()=>Form_,HelperText:()=>HelperText,Horizontal:()=>Horizontal,Playground:()=>Playground,Required:()=>Required,SizeSmall:()=>SizeSmall,Uncontrolled_:()=>Uncontrolled_,UpdatingOptions:()=>UpdatingOptions,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Form=function Form(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{onSubmit:function onSubmit(ev){return function handleSubmit(ev){ev.preventDefault(),console.log("Form value: ",document.querySelector("input[name='1']").value)}(ev)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"This is a label",name:"1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName1",label:"Unselected / Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Selected / Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"submit",value:"Submit"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"reset",value:"Reset"}))},RadioOptionsDynamic=function RadioOptionsDynamic(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),2),radioOptions=_useState2[0],setRadioOptions=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setTimeout((function(){setRadioOptions([{label:"Item 1",value:"Item 1"},{label:"Item 2",value:"Item 2"},{label:"Item 3",value:"Item 3"},{label:"Item 4",value:"Item 4"}])}),3e3)}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"What is your favourite coffee?",name:"radio-group-1"},radioOptions.map((function(option,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{key:index+option.value,value:option.value,label:option.label})})))},RadioOptionsUpdate=function RadioOptionsUpdate(){var _useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{label:"Item 1",value:"Item 1"},{label:"Item 2",value:"Item 2"},{label:"Item 3",value:"Item 3"},{label:"Item 4",value:"Item 4"}]),2),radioOptions=_useState4[0],setRadioOptions=_useState4[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"What is your favourite coffee?",name:"radio-group-1"},radioOptions.map((function(option,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{key:index+option.value,value:option.value,label:option.label})}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{onClick:function updateRadios(){setRadioOptions([{label:"Item 5",value:"Item 5"},{label:"Item 6",value:"Item 6"}])}},"Update"))},Controlled=function Controlled(){var _useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),2),selected=_useState6[0],setSelected=_useState6[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{selected,label:"Label",value:"valueName1"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{variant:"primary",onClick:function defaultButtonClickHandler(){setSelected(!1)}},"Unselected"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{variant:"primary",onClick:function differentButtonClickHandler(){setSelected(!0)}},"Selected"))},Uncontrolled=function Uncontrolled(){var radioEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"This is a label",name:"1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{ref:radioEl,value:"valueName1",label:"Unselected / Default",onIcSelectedChange:function handleCheck(){console.log(radioEl.current.selected)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}))},RadioOptionsAdditional=function RadioOptionsAdditional(){var _useState8=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),showAdditional=_useState8[0],setShowAdditional=_useState8[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"What is your favourite coffee?",name:"radio-group-1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"Item 1",label:"Item 1"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"Item 2",label:"Item 2 - has conditional field",additionalFieldDisplay:showAdditional?"dynamic":"static"},showAdditional&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.k2,{slot:"additional-field",placeholder:"Placeholder",label:"What is your favourite coffee?"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"Item 3",label:"Item 3"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"Item 4",label:"Item 4"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{onClick:function changeDisplay(){setShowAdditional(!showAdditional)}},"Toggle additional"))};const __WEBPACK_DEFAULT_EXPORT__={title:"Radio button",component:_components__WEBPACK_IMPORTED_MODULE_1__.RV};var Default={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"This is a label",name:"1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName1",label:"Unselected / Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0}))},name:"Default"},Horizontal={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{orientation:"horizontal",label:"This should be horizontal",name:"1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName1",label:"Selected / Default",selected:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Unselected / Default"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Horizontal orientation is overridden with 2 radio options"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{orientation:"horizontal",label:"This should be vertical",name:"2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueNameA",label:"First",selected:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueNameB",label:"Second"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueNameC",label:"Third"})))},name:"Horizontal"},Required={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"This is a label",required:!0,name:"1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName1",label:"Unselected / Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0}))},name:"Required"},Disabled={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"This is a label",name:"1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName1",label:"Unselected / Disabled 1",disabled:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Unselected / Disabled 2",disabled:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName3",label:"Unselected / Disabled 3",disabled:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName4",label:"Selected / Disabled",disabled:!0,selected:!0}))},name:"Disabled"},ConditionalDynamic={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"Conditional dynamic",name:"1",onIcChange:function onIcChange(ev){return console.log(ev.detail.selectedOption)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{additionalFieldDisplay:"dynamic",value:"valueName1",label:"Option with Radio as conditional slotted additional field"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{slot:"additional-field",helperText:"Child Group Helper Text",label:"Children",name:"radio-group-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{key:"child-option-1",label:"child-option-1",value:"child-option-1"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{key:"child-option-2",label:"child-option-2",value:"child-option-2"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{additionalFieldDisplay:"dynamic",value:"valueName2",label:"Option with Text-field as conditional slotted additional field"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.k2,{validationStatus:"error",validationText:"Now it has really gone to (coffee) pot",slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee? "})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{additionalFieldDisplay:"dynamic",value:"valueName3",label:"Option with Button as conditional slotted additional field"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{slot:"additional-field"},"Hello world")))},name:"Conditional dynamic"},ConditionalStatic={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"Conditional dynamic",name:"1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName1",label:"option1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.k2,{slot:"additional-field",label:"What's your favourite type of coffee?"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"option2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{slot:"additional-field",helperText:"Child Group Helper Text",label:"Children",name:"radio-group-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{key:"child-option-1",label:"child-option-1",value:"child-option-1"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{key:"child-option-2",label:"child-option-2",value:"child-option-2"}))))},name:"Conditional static"},HelperText={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"This is a label",name:"1",helperText:"Helper text"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName1",label:"Unselected / Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0}))},name:"Helper text"},SizeSmall={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"This is a label",name:"1",size:"small"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName1",label:"Unselected / Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0}))},name:"Size small"},DeprecatedSmall={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"This is a label",name:"1",small:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName1",label:"Unselected / Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0}))},name:"Deprecated - small"},Validation={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:"This is a label",name:"1",validationStatus:"error",validationText:"Error message"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName1",label:"Unselected / Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Selected / Default",selected:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName3",label:"Unselected / Disabled",disabled:!0}))},name:"Validation"},Form_={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form,null)},name:"Form"},DynamicLoading={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioOptionsDynamic,null)},name:"Dynamic loading"},UpdatingOptions={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioOptionsUpdate,null)},name:"Updating options"},Controlled_={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Controlled,null)},name:"Controlled"},Uncontrolled_={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Uncontrolled,null)},name:"Uncontrolled"},AdditionalFieldRendering={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioOptionsAdditional,null)},name:"Additional field rendering"},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.RV,{label:args.label,name:args.name,orientation:args.orientation,required:args.required,size:args.size,validationStatus:args.validationStatus,validationText:args.validationText,helperText:args.helperText,disabled:args.disabled,hideLabel:args.hideLabel},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{additionalFieldDisplay:args.additionalFieldDisplay,value:args.value,label:args.radioLabel,name:args.radioName,selected:args.selected,disabled:args.radioDisabled,dynamicText:args.dynamicText},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.k2,{slot:args.additionalFieldSlot,placeholder:"Placeholder",label:"What's your favourite type of coffee?"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Dh,{value:"valueName2",label:"Radio 2"}))},args:{disabled:!1,helperText:"Some helper text",hideLabel:!1,label:"This is a label",name:"1",orientation:"vertical",required:!1,size:"default",validationStatus:"",validationText:"",additionalFieldDisplay:"static",radioDisabled:!1,dynamicText:"This selection requires additional answers",radioLabel:"Radio 1",radioName:"radio1",value:"valueName1",selected:!1,additionalFieldSlot:!0},argTypes:{orientation:{options:["vertical","horizontal"],control:{type:"inline-radio"}},size:{options:["default","small"],control:{type:"inline-radio"}},validationStatus:{options:["error","warning","success",""],control:{type:"radio"}},additionalFieldDisplay:{options:["static","dynamic"],control:{type:"inline-radio"}},additionalFieldSlot:{mapping:{true:"additional-field",false:""}}},name:"Playground"};const __namedExportsOrder=["Default","Horizontal","Required","Disabled","ConditionalDynamic","ConditionalStatic","HelperText","SizeSmall","DeprecatedSmall","Validation","Form_","DynamicLoading","UpdatingOptions","Controlled_","Uncontrolled_","AdditionalFieldRendering","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <IcRadioGroup label="This is a label" name="1">\n      <IcRadioOption value="valueName1" label="Unselected / Default" />\n      <IcRadioOption value="valueName2" label="Selected / Default" selected />\n      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />\n    </IcRadioGroup>,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcRadioGroup orientation="horizontal" label="This should be horizontal" name="1">\n      <IcRadioOption value="valueName1" label="Selected / Default" selected />\n      <IcRadioOption value="valueName2" label="Unselected / Default" />\n    </IcRadioGroup>\n    <br />\n    <p>Horizontal orientation is overridden with 2 radio options</p>\n    <br />\n    <IcRadioGroup orientation="horizontal" label="This should be vertical" name="2">\n      <IcRadioOption value="valueNameA" label="First" selected />\n      <IcRadioOption value="valueNameB" label="Second" />\n      <IcRadioOption value="valueNameC" label="Third" />\n    </IcRadioGroup>\n    </>,\n  name: "Horizontal"\n}',...Horizontal.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  render: () => <IcRadioGroup label="This is a label" required name="1">\n      <IcRadioOption value="valueName1" label="Unselected / Default" />\n      <IcRadioOption value="valueName2" label="Selected / Default" selected />\n      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />\n    </IcRadioGroup>,\n  name: "Required"\n}',...Required.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <IcRadioGroup label="This is a label" name="1">\n      <IcRadioOption value="valueName1" label="Unselected / Disabled 1" disabled />\n      <IcRadioOption value="valueName2" label="Unselected / Disabled 2" disabled />\n      <IcRadioOption value="valueName3" label="Unselected / Disabled 3" disabled />\n      <IcRadioOption value="valueName4" label="Selected / Disabled" disabled selected />\n    </IcRadioGroup>,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},ConditionalDynamic.parameters={...ConditionalDynamic.parameters,docs:{...ConditionalDynamic.parameters?.docs,source:{originalSource:'{\n  render: () => <IcRadioGroup label="Conditional dynamic" name="1" onIcChange={ev => console.log(ev.detail.selectedOption)}>\n      <IcRadioOption additionalFieldDisplay="dynamic" value="valueName1" label="Option with Radio as conditional slotted additional field">\n        <IcRadioGroup slot="additional-field" helperText="Child Group Helper Text" label="Children" name="radio-group-2">\n          <IcRadioOption key="child-option-1" label="child-option-1" value="child-option-1"></IcRadioOption>\n          <IcRadioOption key="child-option-2" label="child-option-2" value="child-option-2"></IcRadioOption>\n        </IcRadioGroup>\n      </IcRadioOption>\n      <IcRadioOption additionalFieldDisplay="dynamic" value="valueName2" label="Option with Text-field as conditional slotted additional field">\n        <IcTextField validationStatus="error" validationText="Now it has really gone to (coffee) pot" slot="additional-field" placeholder="Placeholder" label="What\'s your favourite type of coffee? " />\n      </IcRadioOption>\n      <IcRadioOption additionalFieldDisplay="dynamic" value="valueName3" label="Option with Button as conditional slotted additional field">\n        <IcButton slot="additional-field">Hello world</IcButton>\n      </IcRadioOption>\n    </IcRadioGroup>,\n  name: "Conditional dynamic"\n}',...ConditionalDynamic.parameters?.docs?.source}}},ConditionalStatic.parameters={...ConditionalStatic.parameters,docs:{...ConditionalStatic.parameters?.docs,source:{originalSource:'{\n  render: () => <IcRadioGroup label="Conditional dynamic" name="1">\n      <IcRadioOption value="valueName1" label="option1">\n        <IcTextField slot="additional-field" label="What\'s your favourite type of coffee?" />\n      </IcRadioOption>\n      <IcRadioOption value="valueName2" label="option2">\n        <IcRadioGroup slot="additional-field" helperText="Child Group Helper Text" label="Children" name="radio-group-2">\n          <IcRadioOption key="child-option-1" label="child-option-1" value="child-option-1"></IcRadioOption>\n          <IcRadioOption key="child-option-2" label="child-option-2" value="child-option-2"></IcRadioOption>\n        </IcRadioGroup>\n      </IcRadioOption>\n    </IcRadioGroup>,\n  name: "Conditional static"\n}',...ConditionalStatic.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'{\n  render: () => <IcRadioGroup label="This is a label" name="1" helperText="Helper text">\n      <IcRadioOption value="valueName1" label="Unselected / Default" />\n      <IcRadioOption value="valueName2" label="Selected / Default" selected />\n      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />\n    </IcRadioGroup>,\n  name: "Helper text"\n}',...HelperText.parameters?.docs?.source}}},SizeSmall.parameters={...SizeSmall.parameters,docs:{...SizeSmall.parameters?.docs,source:{originalSource:'{\n  render: () => <IcRadioGroup label="This is a label" name="1" size="small">\n      <IcRadioOption value="valueName1" label="Unselected / Default" />\n      <IcRadioOption value="valueName2" label="Selected / Default" selected />\n      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />\n    </IcRadioGroup>,\n  name: "Size small"\n}',...SizeSmall.parameters?.docs?.source}}},DeprecatedSmall.parameters={...DeprecatedSmall.parameters,docs:{...DeprecatedSmall.parameters?.docs,source:{originalSource:'{\n  render: () => <IcRadioGroup label="This is a label" name="1" small>\n      <IcRadioOption value="valueName1" label="Unselected / Default" />\n      <IcRadioOption value="valueName2" label="Selected / Default" selected />\n      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />\n    </IcRadioGroup>,\n  name: "Deprecated - small"\n}',...DeprecatedSmall.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: () => <IcRadioGroup label="This is a label" name="1" validationStatus="error" validationText="Error message">\n      <IcRadioOption value="valueName1" label="Unselected / Default" />\n      <IcRadioOption value="valueName2" label="Selected / Default" selected />\n      <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled />\n    </IcRadioGroup>,\n  name: "Validation"\n}',...Validation.parameters?.docs?.source}}},Form_.parameters={...Form_.parameters,docs:{...Form_.parameters?.docs,source:{originalSource:'{\n  render: () => <Form />,\n  name: "Form"\n}',...Form_.parameters?.docs?.source}}},DynamicLoading.parameters={...DynamicLoading.parameters,docs:{...DynamicLoading.parameters?.docs,source:{originalSource:'{\n  render: () => <RadioOptionsDynamic />,\n  name: "Dynamic loading"\n}',...DynamicLoading.parameters?.docs?.source}}},UpdatingOptions.parameters={...UpdatingOptions.parameters,docs:{...UpdatingOptions.parameters?.docs,source:{originalSource:'{\n  render: () => <RadioOptionsUpdate />,\n  name: "Updating options"\n}',...UpdatingOptions.parameters?.docs?.source}}},Controlled_.parameters={...Controlled_.parameters,docs:{...Controlled_.parameters?.docs,source:{originalSource:'{\n  render: () => <Controlled />,\n  name: "Controlled"\n}',...Controlled_.parameters?.docs?.source}}},Uncontrolled_.parameters={...Uncontrolled_.parameters,docs:{...Uncontrolled_.parameters?.docs,source:{originalSource:'{\n  render: () => <Uncontrolled />,\n  name: "Uncontrolled"\n}',...Uncontrolled_.parameters?.docs?.source}}},AdditionalFieldRendering.parameters={...AdditionalFieldRendering.parameters,docs:{...AdditionalFieldRendering.parameters?.docs,source:{originalSource:'{\n  render: () => <RadioOptionsAdditional />,\n  name: "Additional field rendering"\n}',...AdditionalFieldRendering.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <IcRadioGroup label={args.label} name={args.name} orientation={args.orientation} required={args.required} size={args.size} validationStatus={args.validationStatus} validationText={args.validationText} helperText={args.helperText} disabled={args.disabled} hideLabel={args.hideLabel}>\n      <IcRadioOption additionalFieldDisplay={args.additionalFieldDisplay} value={args.value} label={args.radioLabel} name={args.radioName} selected={args.selected} disabled={args.radioDisabled} dynamicText={args.dynamicText}>\n        <IcTextField slot={args.additionalFieldSlot} placeholder="Placeholder" label="What\'s your favourite type of coffee?" />\n      </IcRadioOption>\n      <IcRadioOption value="valueName2" label="Radio 2" />\n    </IcRadioGroup>,\n  args: defaultArgs,\n  argTypes: {\n    orientation: {\n      options: ["vertical", "horizontal"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    size: {\n      options: ["default", "small"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    validationStatus: {\n      options: ["error", "warning", "success", ""],\n      control: {\n        type: "radio"\n      }\n    },\n    additionalFieldDisplay: {\n      options: ["static", "dynamic"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    additionalFieldSlot: {\n      mapping: {\n        true: "additional-field",\n        false: ""\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);