"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4758],{"./src/stories/ic-select_(searchable).stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Default:()=>Default,DefaultValue:()=>DefaultValue,Disabled:()=>Disabled,DisabledOptions:()=>DisabledOptions,EmittingIcOptionSelectOnEnter:()=>EmittingIcOptionSelectOnEnter,ExternalFiltering_:()=>ExternalFiltering_,FilterByStartOfOptions:()=>FilterByStartOfOptions,Groups:()=>Groups,GroupsGroupTitlesIncludedInSearch:()=>GroupsGroupTitlesIncludedInSearch,HelperText:()=>HelperText,HiddenLabel:()=>HiddenLabel,ManyOptions:()=>ManyOptions,Playground:()=>Playground,Recommended:()=>Recommended,Required:()=>Required,SearchableFormResetDefaultValue:()=>SearchableFormResetDefaultValue,Sizes:()=>Sizes,Uncontrolled_:()=>Uncontrolled_,Validation:()=>Validation,WithDescriptions:()=>WithDescriptions,WithDescriptionsIncludedInSearch:()=>WithDescriptionsIncludedInSearch,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts"),_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react-component-lib/slottedSVG.tsx");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var options=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame"},{label:"Filter",value:"Fil"},{label:"Flat white",value:"Fla"},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac"}],groupedOptions=[{label:"Fancy",children:[{label:"Cappuccino",value:"Cap"},{label:"Flat white",value:"Fla"}]},{label:"Boring",children:[{label:"Filter",value:"Fil"},{label:"Latte",value:"Lat"}]}],manyOptions=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame"},{label:"Filter",value:"Fil"},{label:"Flat white",value:"Fla"},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac"},{label:"Café au lait",value:"Caf"},{label:"Espresso",value:"Esp"},{label:"Cortado",value:"Cor"},{label:"Ristretto",value:"Ris"},{label:"Latte macchiato",value:"Lam"}],optionsWithDescriptions=[{label:"Cappuccino",value:"Cap",description:"Coffee frothed up with pressurised steam"},{label:"Latte",value:"Lat",description:"A milkier coffee than a cappuccino"},{label:"Americano",value:"Ame",description:"Espresso coffee diluted with hot water"},{label:"Filter",value:"Fil",description:"Coffee filtered using paper or a mesh"},{label:"Flat white",value:"Fla",description:"Coffee without froth made with espresso and hot steamed milk"},{label:"Mocha",value:"Moc",description:"A mixture of coffee and chocolate"},{label:"Macchiato",value:"Mac",description:"Espresso coffee with a dash of frothy steamed milk"}],optionsWithDisabled=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame",disabled:!0},{label:"Filter",value:"Fil",disabled:!0},{label:"Flat white",value:"Fla"},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac",disabled:!0}],optionsWithRecommended=[{label:"Cappuccino",value:"Cappuccino"},{label:"Flat white",value:"Flat white",recommended:!0},{label:"Latte",value:"Latte"},{label:"Americano",value:"Americano",recommended:!0},{label:"Filter",value:"Fil"},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac"}],playgroundOptions=[{label:"Cappuccino",value:"Cap",description:"Coffee frothed up with pressurised steam"},{label:"Boring",children:[{label:"Latte",value:"Lat",description:"A milkier coffee than a cappuccino"},{label:"Filter",value:"Fil",description:"Coffee filtered using paper or a mesh"}]},{label:"Fancy",children:[{label:"Flat white",value:"Fla",description:"Coffee without froth made with espresso and hot steamed milk"},{label:"Macchiato",value:"Mac",description:"Espresso coffee with a dash of frothy steamed milk"}]},{label:"Americano",value:"Ame",description:"Espresso coffee diluted with hot water"},{label:"Mocha",value:"Moc",description:"A mixture of coffee and chocolate"}],InForm=function InForm(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",required:!0,value:"Cap",options,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))},searchable:!0,showClearButton:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{type:"reset"},"Reset"))},ExternalFiltering=function ExternalFiltering(){var mockData=[{label:"Espresso",value:"Esp"},{label:"Double Espresso",value:"Dou"},{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame"},{label:"Filter",value:"Fil"},{label:"Flat white",value:"Fla"},{label:"Mocha",value:"Moc"},{label:"Macchiato",value:"Mac"}],_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),2),event=_useState2[0],setEvent=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),selectedValue=_useState4[0],setSelectedValue=_useState4[1],_useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),2),results=_useState6[0],setResults=_useState6[1],_useState8=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),loading=_useState8[0],setLoading=_useState8[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var searchTerm=null==event?void 0:event.detail.value;if(searchTerm!==selectedValue)if(searchTerm){setLoading(!0);(function mockAPI(query){var filteredResults=mockData.filter((function(m){return m.label.toLowerCase().includes(query.toLowerCase())}));return new Promise((function(resolve){return setTimeout((function(){return resolve(filteredResults)}),"icInput"===event.type?2e3:500)}))})(searchTerm).then((function(results){return setResults(results)}))}else setResults([])}),[event]);var handleInput=function handleInput(event){console.log(event.detail.value),setEvent(event)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{loading,timeout:1e3,debounce:300,label:"What is your favourite coffee?",searchable:!0,disableAutoFiltering:!0,options:results,onIcOptionSelect:function handleOptionSelect(event){setSelectedValue(event.detail.value)},onIcInput:handleInput,onIcRetryLoad:handleInput,onIcClear:function handleClear(){setResults([])}})},ControlledExample=function ControlledExample(){var _useState10=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Cap"),2),value=_useState10[0],setValue=_useState10[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{searchable:!0,placeholder:"Controlled",label:"Controlled",options,value,onIcChange:function handleChange(event){console.log(event.detail.value),setValue(event.detail.value)}})},Uncontrolled=function Uncontrolled(){var selectEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{ref:selectEl,searchable:!0,placeholder:"Uncontrolled",label:"Uncontrolled",options,onIcChange:function handleChange(){console.log(selectEl.current.value)}}))};const __WEBPACK_DEFAULT_EXPORT__={title:"Select/Searchable",component:_components__WEBPACK_IMPORTED_MODULE_1__.xO};var Default={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options,searchable:!0,onIcInput:function onIcInput(event){return console.log("icInput: ".concat(event.detail.value))},onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))},onIcOptionSelect:function onIcOptionSelect(event){return console.log("icOptionSelect: ".concat(event.detail.value))},onIcOpen:function onIcOpen(){return console.log("select dropdown opened")},onIcClose:function onIcClose(){return console.log("select dropdown closed")}})},name:"Default"},DefaultValue={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",required:!0,value:"Lat",options,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))},searchable:!0,showClearButton:!0})},name:"Default value"},FilterByStartOfOptions={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options,searchable:!0,filterMatchPosition:"start",onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"Filter by start of options"},WithDescriptions={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options:optionsWithDescriptions,searchable:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"With descriptions"},WithDescriptionsIncludedInSearch={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options:optionsWithDescriptions,searchable:!0,includeDescriptionsInSearch:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"With descriptions (included in search)"},HelperText={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options,searchable:!0,helperText:"Select one option from the list",onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"Helper text"},Sizes={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options,searchable:!0,size:"small",onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options,searchable:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options,searchable:!0,size:"large",onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}}))},name:"Sizes"},Disabled={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options,searchable:!0,disabled:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"Disabled"},DisabledOptions={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options:optionsWithDisabled,searchable:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"Disabled options"},HiddenLabel={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options,searchable:!0,hideLabel:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"Hidden label"},Required={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options,searchable:!0,required:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"Required"},Groups={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options:groupedOptions,searchable:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"Groups"},GroupsGroupTitlesIncludedInSearch={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options:groupedOptions,searchable:!0,includeGroupTitlesInSearch:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"Groups (group titles included in search)"},Recommended={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options:optionsWithRecommended,searchable:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"Recommended"},Validation={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",validationStatus:"success",validationText:"Coffee available",options,searchable:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",validationStatus:"warning",validationText:"Only a few left",options,searchable:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",validationStatus:"error",validationText:"Coffee unavailable",options,searchable:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}}))},name:"Validation"},SearchableFormResetDefaultValue={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(InForm,null)},name:"Searchable form reset default value"},ManyOptions={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options:manyOptions,searchable:!0,onIcChange:function onIcChange(event){return console.log("icChange: ".concat(event.detail.value))}})},name:"Many options"},ExternalFiltering_={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExternalFiltering,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,null,"Suggested search options: Espresso, Double Espresso, Flat White, Filter, Cappuccino, Americano, Mocha, Macchiato."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,null,"The IcChange event will trigger 300ms after you finish typing. 1 second later, the options in the select menu will be updated."))},name:"External filtering"},EmittingIcOptionSelectOnEnter={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{label:"What is your favourite coffee?",options,selectOnEnter:!0,searchable:!0,onIcOptionSelect:function onIcOptionSelect(event){return console.log("icOptionSelect: ".concat(event.detail.value))}})},name:"Emitting icOptionSelect on enter"},Controlled={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ControlledExample,null)},name:"Controlled"},Uncontrolled_={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Uncontrolled,null)},name:"Uncontrolled"},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xO,{options:playgroundOptions,disabled:args.disabled,fullWidth:args.fullWidth,helperText:args.helperText,hideLabel:args.hideLabel,includeDescriptionsInSearch:args.includeDescriptionsInSearch,includeGroupTitlesInSearch:args.includeGroupTitlesInSearch,loading:args.loading,loadingLabel:args.loadingLabel,label:args.label,placeholder:args.placeholder,readonly:args.readonly,required:args.required,searchMatchPosition:args.searchMatchPosition,searchable:!0,size:args.size,validationStatus:args.validationStatus,validationText:args.validationText,theme:args.theme},args.showIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__.k,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"})))},name:"Playground",args:{disabled:!1,fullWidth:!1,helperText:"Select one option from the list",hideLabel:!1,loading:!1,loadingLabel:"Loading...",label:"What is your favourite coffee?",placeholder:"Select an option",readonly:!1,required:!1,size:"default",validationStatus:"",validationText:"",includeDescriptionsInSearch:!1,includeGroupTitlesInSearch:!1,searchMatchPosition:"anywhere",theme:"inherit"},argTypes:{searchMatchPosition:{defaultValue:"anywhere",options:["anywhere","start"],control:{type:"inline-radio"}},size:{options:["medium","large","small"],control:{type:"inline-radio"}},validationStatus:{defaultValue:"",options:["","error","success","warning"],control:{type:"select"}},showIcon:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}};const __namedExportsOrder=["Default","DefaultValue","FilterByStartOfOptions","WithDescriptions","WithDescriptionsIncludedInSearch","HelperText","Sizes","Disabled","DisabledOptions","HiddenLabel","Required","Groups","GroupsGroupTitlesIncludedInSearch","Recommended","Validation","SearchableFormResetDefaultValue","ManyOptions","ExternalFiltering_","EmittingIcOptionSelectOnEnter","Controlled","Uncontrolled_","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={options} searchable onIcInput={event => console.log(`icInput: ${event.detail.value}`)} onIcChange={event => console.log(`icChange: ${event.detail.value}`)} onIcOptionSelect={event => console.log(`icOptionSelect: ${event.detail.value}`)} onIcOpen={() => console.log("select dropdown opened")} onIcClose={() => console.log("select dropdown closed")} />;\n  },\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" required value="Lat" options={options} onIcChange={event => console.log(`icChange: ${event.detail.value}`)} searchable showClearButton />;\n  },\n  name: "Default value"\n}',...DefaultValue.parameters?.docs?.source}}},FilterByStartOfOptions.parameters={...FilterByStartOfOptions.parameters,docs:{...FilterByStartOfOptions.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={options} searchable filterMatchPosition="start" onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "Filter by start of options"\n}',...FilterByStartOfOptions.parameters?.docs?.source}}},WithDescriptions.parameters={...WithDescriptions.parameters,docs:{...WithDescriptions.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={optionsWithDescriptions} searchable onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "With descriptions"\n}',...WithDescriptions.parameters?.docs?.source}}},WithDescriptionsIncludedInSearch.parameters={...WithDescriptionsIncludedInSearch.parameters,docs:{...WithDescriptionsIncludedInSearch.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={optionsWithDescriptions} searchable includeDescriptionsInSearch onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "With descriptions (included in search)"\n}',...WithDescriptionsIncludedInSearch.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={options} searchable helperText="Select one option from the list" onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "Helper text"\n}',...HelperText.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <>\n        <IcSelect label="What is your favourite coffee?" options={options} searchable size="small" onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n        <IcSelect label="What is your favourite coffee?" options={options} searchable onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n        <IcSelect label="What is your favourite coffee?" options={options} searchable size="large" onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n      </>;\n  },\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={options} searchable disabled onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},DisabledOptions.parameters={...DisabledOptions.parameters,docs:{...DisabledOptions.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={optionsWithDisabled} searchable onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "Disabled options"\n}',...DisabledOptions.parameters?.docs?.source}}},HiddenLabel.parameters={...HiddenLabel.parameters,docs:{...HiddenLabel.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={options} searchable hideLabel onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "Hidden label"\n}',...HiddenLabel.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={options} searchable required onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "Required"\n}',...Required.parameters?.docs?.source}}},Groups.parameters={...Groups.parameters,docs:{...Groups.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={groupedOptions} searchable onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "Groups"\n}',...Groups.parameters?.docs?.source}}},GroupsGroupTitlesIncludedInSearch.parameters={...GroupsGroupTitlesIncludedInSearch.parameters,docs:{...GroupsGroupTitlesIncludedInSearch.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={groupedOptions} searchable includeGroupTitlesInSearch onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "Groups (group titles included in search)"\n}',...GroupsGroupTitlesIncludedInSearch.parameters?.docs?.source}}},Recommended.parameters={...Recommended.parameters,docs:{...Recommended.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={optionsWithRecommended} searchable onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "Recommended"\n}',...Recommended.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <div>\n        <IcSelect label="What is your favourite coffee?" validationStatus="success" validationText="Coffee available" options={options} searchable onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n        <IcSelect label="What is your favourite coffee?" validationStatus="warning" validationText="Only a few left" options={options} searchable onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n        <IcSelect label="What is your favourite coffee?" validationStatus="error" validationText="Coffee unavailable" options={options} searchable onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />\n      </div>;\n  },\n  name: "Validation"\n}',...Validation.parameters?.docs?.source}}},SearchableFormResetDefaultValue.parameters={...SearchableFormResetDefaultValue.parameters,docs:{...SearchableFormResetDefaultValue.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <InForm />;\n  },\n  name: "Searchable form reset default value"\n}',...SearchableFormResetDefaultValue.parameters?.docs?.source}}},ManyOptions.parameters={...ManyOptions.parameters,docs:{...ManyOptions.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={manyOptions} searchable onIcChange={event => console.log(`icChange: ${event.detail.value}`)} />;\n  },\n  name: "Many options"\n}',...ManyOptions.parameters?.docs?.source}}},ExternalFiltering_.parameters={...ExternalFiltering_.parameters,docs:{...ExternalFiltering_.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <ExternalFiltering />\n    <br />\n    <IcTypography>\n      Suggested search options: Espresso, Double Espresso, Flat White, Filter,\n      Cappuccino, Americano, Mocha, Macchiato.\n    </IcTypography>\n    <br />\n    <IcTypography>\n      The IcChange event will trigger 300ms after you finish typing. 1 second\n      later, the options in the select menu will be updated.\n    </IcTypography>\n    </>,\n  name: "External filtering"\n}',...ExternalFiltering_.parameters?.docs?.source}}},EmittingIcOptionSelectOnEnter.parameters={...EmittingIcOptionSelectOnEnter.parameters,docs:{...EmittingIcOptionSelectOnEnter.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <IcSelect label="What is your favourite coffee?" options={options} selectOnEnter searchable onIcOptionSelect={event => console.log(`icOptionSelect: ${event.detail.value}`)} />;\n  },\n  name: "Emitting icOptionSelect on enter"\n}',...EmittingIcOptionSelectOnEnter.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'{\n  render: () => <ControlledExample />,\n  name: "Controlled"\n}',...Controlled.parameters?.docs?.source}}},Uncontrolled_.parameters={...Uncontrolled_.parameters,docs:{...Uncontrolled_.parameters?.docs,source:{originalSource:'{\n  render: () => <Uncontrolled />,\n  name: "Uncontrolled"\n}',...Uncontrolled_.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <IcSelect options={playgroundOptions} disabled={args.disabled} fullWidth={args.fullWidth} helperText={args.helperText} hideLabel={args.hideLabel} includeDescriptionsInSearch={args.includeDescriptionsInSearch} includeGroupTitlesInSearch={args.includeGroupTitlesInSearch} loading={args.loading} loadingLabel={args.loadingLabel} label={args.label} placeholder={args.placeholder} readonly={args.readonly} required={args.required} searchMatchPosition={args.searchMatchPosition} searchable size={args.size} validationStatus={args.validationStatus} validationText={args.validationText} theme={args.theme}>\n      {args.showIcon && <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />\n        </SlottedSVG>}\n    </IcSelect>,\n  name: "Playground",\n  args: defaultArgs,\n  argTypes: {\n    searchMatchPosition: {\n      defaultValue: "anywhere",\n      options: ["anywhere", "start"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    size: {\n      options: ["medium", "large", "small"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    validationStatus: {\n      defaultValue: "",\n      options: ["", "error", "success", "warning"],\n      control: {\n        type: "select"\n      }\n    },\n    showIcon: {\n      control: {\n        type: "boolean"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}}}}]);