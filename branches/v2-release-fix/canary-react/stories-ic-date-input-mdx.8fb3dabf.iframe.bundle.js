(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[3685,9503],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/ic-date-input.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_canary_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ic_date_input_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/ic-date-input.stories.js");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_ic_date_input_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_canary_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/ic-date-input.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomHelperText:()=>CustomHelperText,CustomValidation:()=>CustomValidation,DateObject:()=>DateObject,Disabled:()=>Disabled,DisabledFutureDates:()=>DisabledFutureDates,DisabledPastDates:()=>DisabledPastDates,EpochTime:()=>EpochTime,Form_:()=>Form_,HideHelperText:()=>HideHelperText,HideLabel:()=>HideLabel,MinAndMax:()=>MinAndMax,OnIcChangeEvent:()=>OnIcChangeEvent,PlaygroundExample:()=>PlaygroundExample,Required:()=>Required,Sizes:()=>Sizes,WithClearingValue:()=>WithClearingValue,WithHyphens:()=>WithHyphens,WithValue:()=>WithValue,ZuluDatetime:()=>ZuluDatetime,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("storybook/internal/preview-api"),_ukic_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/dist/components.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components.ts");const UpdatingHelperText=()=>{const[helpText,setHelpText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("We will have your order ready for you on this date");return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",helperText:helpText}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{display:"flex",gap:"8px"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.nP,{onClick:()=>{setHelpText("this is the new helper text")}},"Set helper text"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.nP,{onClick:()=>{setHelpText("")}},"Clear helper text")))},Form=()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("form",{onSubmit:e=>{console.log(e)}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",value:new Date("13 March 1951")}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.nP,{type:"submit"},"Submit"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.nP,{type:"reset"},"Reset")),ClearDateInput=()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("21/01/2001"),handleClearValue=value=>{setValue(value)};return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",value}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{display:"flex",gap:"8px"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.nP,{onClick:()=>{setValue(new Date("05 May 2005"))}},"Update date"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.nP,{onClick:()=>handleClearValue(null)},"Set null"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.nP,{onClick:()=>handleClearValue("")},"Set Empty String"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.nP,{onClick:()=>handleClearValue(void 0)},"Set undefined")))},__WEBPACK_DEFAULT_EXPORT__={title:"React Components/Date Input",component:_components__WEBPACK_IMPORTED_MODULE_2__.z2},Basic={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",onIcChange:ev=>console.log(ev.detail.value)}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",dateFormat:"MM/DD/YYYY"}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",dateFormat:"YYYY/MM/DD"})),name:"Basic"},OnIcChangeEvent={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",onIcChange:ev=>console.log(ev.detail.value)}),name:"onIcChange event"},WithValue={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{id:"date-input-default-date-with-value",label:"When would you like to collect your coffee?",value:"21/01/2001"}),name:"With value"},DateObject={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",value:new Date("28 November 2021")}),name:"Date object"},ZuluDatetime={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",value:new Date("28 November 2021").toISOString()}),name:"Zulu datetime"},WithHyphens={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",value:"25-05-2005"}),name:"With hyphens"},EpochTime={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",value:Date.now()}),name:"Epoch time"},HideLabel={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",hideLabel:!0}),name:"Hide label"},Required={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",required:!0}),name:"Required"},Disabled={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",disabled:!0}),name:"Disabled"},Sizes={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",size:"small"}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?"}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",size:"large"})),name:"Sizes"},CustomHelperText={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(UpdatingHelperText,null),name:"Custom Helper Text"},HideHelperText={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",helperText:"You cannot see me, but you can hear me",hideHelperText:"true"}),name:"Hide Helper Text"},CustomValidation={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",validationStatus:"error",validationText:"There is a coffee shortage forecast for that day. Please choose a different date."}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",validationStatus:"warning",validationText:"Please be aware that there may be a coffee shortage on that day."}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",validationStatus:"success",validationText:"Your coffee will be available for you to collect on this day."})),name:"Custom validation"},DisabledPastDates={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",disablePast:!0}),name:"Disabled past dates"},DisabledFutureDates={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",disableFuture:!0}),name:"Disabled future dates"},MinAndMax={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{label:"When would you like to collect your coffee?",min:"02-01-2023",max:"20/07/2023"}),name:"Min and max"},Form_={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(Form,null),name:"Form"},WithClearingValue={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(ClearDateInput,null),name:"With clearing value"},PlaygroundExample={render:args=>{const[{value},updateArgs]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useArgs)();return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.z2,{dateFormat:args.dateFormat,disabled:args.disabled,disableDays:args.disableDays,disableDaysMessage:args.disableDaysMessage,disableFuture:args.disableFuture,disableFutureMessage:args.disableFutureMessage,disablePast:args.disablePast,disablePastMessage:args.disablePastMessage,helperText:args.helperText,hideHelperText:args.hideHelperText,hideLabel:args.hideLabel,invalidDateMessage:args.invalidDateMessage,label:args.label,max:args.max,min:args.min,openAtDate:args.openAtDate,required:args.required,showDaysOutsideMonth:args.showDaysOutsideMonth,showPickerClearButton:args.showPickerClearButton,showPickerTodayButton:args.showPickerTodayButton,size:args.size,startOfWeek:args.startOfWeek,validationStatus:args.validationStatus,validationText:args.validationText,value,onIcChange:ev=>{const date=ev.detail.value;let formattedDate;formattedDate=null===date?"":`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,updateArgs({value:formattedDate})}})},args:{dateFormat:"DD/MM/YYYY",disabled:!1,disableDays:[],disableDaysMessage:"This day is not available",disableFuture:!1,disableFutureMessage:"This date is in the future",disablePast:!1,disablePastMessage:"This date is in the past",helperText:"Choose a date",hideHelperText:!1,hideLabel:!1,invalidDateMessage:"Invalid date",label:"When would you like to collect your coffee?",max:"",min:"",required:!1,showClearButton:!0,size:"default",validationStatus:"",validationText:"",value:""},argTypes:{dateFormat:{options:["DD/MM/YYYY","MM/DD/YYYY","YYYY/MM/DD"],control:{type:"radio"}},validationStatus:{options:["","error","success","warning"],control:{type:"radio"}},size:{options:["small","default","large"],control:{type:"radio"}}},name:"Playground example"},__namedExportsOrder=["Basic","OnIcChangeEvent","WithValue","DateObject","ZuluDatetime","WithHyphens","EpochTime","HideLabel","Required","Disabled","Sizes","CustomHelperText","HideHelperText","CustomValidation","DisabledPastDates","DisabledFutureDates","MinAndMax","Form_","WithClearingValue","PlaygroundExample"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcDateInput label="When would you like to collect your coffee?" onIcChange={ev => console.log(ev.detail.value)} />\n    <br />\n    <IcDateInput label="When would you like to collect your coffee?" dateFormat="MM/DD/YYYY" />\n    <br />\n    <IcDateInput label="When would you like to collect your coffee?" dateFormat="YYYY/MM/DD" />\n    </>,\n  name: "Basic"\n}',...Basic.parameters?.docs?.source},description:{story:"Use the date input component to manually type in a date in different formats.\n\nThe input `label` is the only required prop for date input.\n\nClick the 'Component API' tab to view all the available props, events and slots for date input.\n\nTo use the date input component, import `@ukic/canary-react` into your application.\n\nEach example below demonstrates the date input in three different date formats:\n- DD/MM/YYYY (Default date format)\n- MM/DD/YYYY\n- YYYY/MM/DD\n\nBy default, the helper text displays the date format.\n\nDates can be added by manually typing into the input or using the up and down arrow keys.\n\nTo move between day, month and year using the keyboard, provide the required values based on the placeholders or use `/` or `-`.",...Basic.parameters?.docs?.description}}},OnIcChangeEvent.parameters={...OnIcChangeEvent.parameters,docs:{...OnIcChangeEvent.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" onIcChange={ev => console.log(ev.detail.value)} />,\n  name: "onIcChange event"\n}',...OnIcChangeEvent.parameters?.docs?.source},description:{story:"Retrieving the date input value via `onIcChange` returns the date as a Date object.\n\nThe event returns the Date object when day, month and year have been entered.",...OnIcChangeEvent.parameters?.docs?.description}}},WithValue.parameters={...WithValue.parameters,docs:{...WithValue.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput id="date-input-default-date-with-value" label="When would you like to collect your coffee?" value="21/01/2001" />,\n  name: "With value"\n}',...WithValue.parameters?.docs?.source},description:{story:"To set a value to the date input, pass the date value in the relevant date format.",...WithValue.parameters?.docs?.description}}},DateObject.parameters={...DateObject.parameters,docs:{...DateObject.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" value={new Date("28 November 2021")} />,\n  name: "Date object"\n}',...DateObject.parameters?.docs?.source},description:{story:"The date input also accepts a number of different date formats within the value prop:\n- [Date object](#date-object)\n- [Zulu datetime](#zulu-datetime)\n- [With hyphens (DD-MM-YYYY)](#with-hyphens)\n- [Epoch time](#epoch-time)",...DateObject.parameters?.docs?.description}}},ZuluDatetime.parameters={...ZuluDatetime.parameters,docs:{...ZuluDatetime.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" value={new Date("28 November 2021").toISOString()} />,\n  name: "Zulu datetime"\n}',...ZuluDatetime.parameters?.docs?.source}}},WithHyphens.parameters={...WithHyphens.parameters,docs:{...WithHyphens.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" value="25-05-2005" />,\n  name: "With hyphens"\n}',...WithHyphens.parameters?.docs?.source}}},EpochTime.parameters={...EpochTime.parameters,docs:{...EpochTime.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" value={Date.now()} />,\n  name: "Epoch time"\n}',...EpochTime.parameters?.docs?.source}}},HideLabel.parameters={...HideLabel.parameters,docs:{...HideLabel.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" hideLabel />,\n  name: "Hide label"\n}',...HideLabel.parameters?.docs?.source},description:{story:"To hide the label, set the `hideLabel` prop to `true`. The required `label` will still be read out by screen readers.",...HideLabel.parameters?.docs?.description}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" required />,\n  name: "Required"\n}',...Required.parameters?.docs?.source},description:{story:"To set the date input as a required field, add the `required` prop. This will add an asterisk at the end of the date input label.",...Required.parameters?.docs?.description}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" disabled />,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source},description:{story:"Set the `disabled`, to prevent interaction with the date input.",...Disabled.parameters?.docs?.description}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcDateInput label="When would you like to collect your coffee?" size="small" />\n    <br />\n    <IcDateInput label="When would you like to collect your coffee?" />\n    <br />\n    <IcDateInput label="When would you like to collect your coffee?" size="large" />\n    </>,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source},description:{story:"The date input is available in three different sizes:\n- `small`\n- `default`\n- `large`",...Sizes.parameters?.docs?.description}}},CustomHelperText.parameters={...CustomHelperText.parameters,docs:{...CustomHelperText.parameters?.docs,source:{originalSource:'{\n  render: () => <UpdatingHelperText />,\n  name: "Custom Helper Text"\n}',...CustomHelperText.parameters?.docs?.source},description:{story:"Use the helper text to add additional detail for the date input.",...CustomHelperText.parameters?.docs?.description}}},HideHelperText.parameters={...HideHelperText.parameters,docs:{...HideHelperText.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" helperText="You cannot see me, but you can hear me" hideHelperText="true" />,\n  name: "Hide Helper Text"\n}',...HideHelperText.parameters?.docs?.source},description:{story:"Hide visible helper text using the `hideHelperText` prop.",...HideHelperText.parameters?.docs?.description}}},CustomValidation.parameters={...CustomValidation.parameters,docs:{...CustomValidation.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcDateInput label="When would you like to collect your coffee?" validationStatus="error" validationText="There is a coffee shortage forecast for that day. Please choose a different date." />\n    <br />\n    <IcDateInput label="When would you like to collect your coffee?" validationStatus="warning" validationText="Please be aware that there may be a coffee shortage on that day." />\n    <br />\n    <IcDateInput label="When would you like to collect your coffee?" validationStatus="success" validationText="Your coffee will be available for you to collect on this day." />\n    </>,\n  name: "Custom validation"\n}',...CustomValidation.parameters?.docs?.source},description:{story:"Validation on date input is set via `validationStatus` and `validationText`.\n\n`validationStatus` will set the style of the validation message. `validationStatus` accepts:\n- `error`\n- `warning`\n- `success`\n\n`validationStatus` is required for the `validationText` to appear.",...CustomValidation.parameters?.docs?.description}}},DisabledPastDates.parameters={...DisabledPastDates.parameters,docs:{...DisabledPastDates.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" disablePast />,\n  name: "Disabled past dates"\n}',...DisabledPastDates.parameters?.docs?.source},description:{story:"Validation can be set on the date input if a date in the past has been set by setting the `disablePast` prop.\n\nEnter a date in the past to view the validation message.",...DisabledPastDates.parameters?.docs?.description}}},DisabledFutureDates.parameters={...DisabledFutureDates.parameters,docs:{...DisabledFutureDates.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" disableFuture />,\n  name: "Disabled future dates"\n}',...DisabledFutureDates.parameters?.docs?.source},description:{story:"Validation can be set on the date input if a date in the future has been set by setting the `disableFuture` prop.\n\nEnter a date in the future to view the validation message.",...DisabledFutureDates.parameters?.docs?.description}}},MinAndMax.parameters={...MinAndMax.parameters,docs:{...MinAndMax.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDateInput label="When would you like to collect your coffee?" min="02-01-2023" max="20/07/2023" />,\n  name: "Min and max"\n}',...MinAndMax.parameters?.docs?.source},description:{story:"It is possible to set a min and max date range. If a date is set and it is before the min or after the max date, a validation error will appear.\n\nThe min or max dates accept the following date formats:\n- [Date string](#with-value) (with slashes i.e. DD/MM/YYYY)\n- [Date string](#with-hyphens) (with hyphens i.e. DD-MM-YYYY)\n- [Date object](#date-object)\n- [Zulu datetime](#zulu-datetime)\n\n`min` and `max` can be set to different date formats if desired.\n\nEnter a date after 2nd Jan 2023 and before 20th July to view the validation message.",...MinAndMax.parameters?.docs?.description}}},Form_.parameters={...Form_.parameters,docs:{...Form_.parameters?.docs,source:{originalSource:'{\n  render: () => <Form />,\n  name: "Form"\n}',...Form_.parameters?.docs?.source},description:{story:"When the date input component is used within a form, the date value is returned as an ISO string.\n\nThe value is console logged to the browser dev tools.",...Form_.parameters?.docs?.description}}},WithClearingValue.parameters={...WithClearingValue.parameters,docs:{...WithClearingValue.parameters?.docs,source:{originalSource:'{\n  render: () => <ClearDateInput />,\n  name: "With clearing value"\n}',...WithClearingValue.parameters?.docs?.source},description:{story:"The date input can be cleared by setting the the value attribute to one of the following:\n- empty string\n- `null`\n- `undefined`",...WithClearingValue.parameters?.docs?.description}}},PlaygroundExample.parameters={...PlaygroundExample.parameters,docs:{...PlaygroundExample.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [{\n      value\n    }, updateArgs] = useArgs();\n    const updateDate = ev => {\n      const date = ev.detail.value;\n      let formattedDate;\n      date === null ? formattedDate = "" : formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;\n      updateArgs({\n        value: formattedDate\n      });\n    };\n    return <IcDateInput dateFormat={args.dateFormat} disabled={args.disabled} disableDays={args.disableDays} disableDaysMessage={args.disableDaysMessage} disableFuture={args.disableFuture} disableFutureMessage={args.disableFutureMessage} disablePast={args.disablePast} disablePastMessage={args.disablePastMessage} helperText={args.helperText} hideHelperText={args.hideHelperText} hideLabel={args.hideLabel} invalidDateMessage={args.invalidDateMessage} label={args.label} max={args.max} min={args.min} openAtDate={args.openAtDate} required={args.required} showDaysOutsideMonth={args.showDaysOutsideMonth} showPickerClearButton={args.showPickerClearButton} showPickerTodayButton={args.showPickerTodayButton} size={args.size} startOfWeek={args.startOfWeek} validationStatus={args.validationStatus} validationText={args.validationText} value={value} onIcChange={updateDate} />;\n  },\n  args: defaultArgs,\n  argTypes: {\n    dateFormat: {\n      options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD"],\n      control: {\n        type: "radio"\n      }\n    },\n    validationStatus: {\n      options: ["", "error", "success", "warning"],\n      control: {\n        type: "radio"\n      }\n    },\n    size: {\n      options: ["small", "default", "large"],\n      control: {\n        type: "radio"\n      }\n    }\n  },\n  name: "Playground example"\n}',...PlaygroundExample.parameters?.docs?.source},description:{story:'Go to the <ic-link href="/?path=/story/react-components-date-input--playground-example">separate page for the playground example</ic-link> to view the prop controls.',...PlaygroundExample.parameters?.docs?.description}}}}}]);