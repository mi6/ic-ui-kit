"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7719],{"./src/stories/ic-classification-banner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalSelectors:()=>AdditionalSelectors,BottomOfPage:()=>BottomOfPage,Classifications:()=>Classifications,Country:()=>Country,Playground:()=>Playground,UpTo:()=>UpTo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Classification banner",component:_components__WEBPACK_IMPORTED_MODULE_1__.tb};var Classifications={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{inline:"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official",inline:"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official-sensitive",inline:"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"secret",inline:"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"top-secret",inline:"true"}))},name:"Classifications"},UpTo={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{inline:"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official",inline:"true","up-to":"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official-sensitive",inline:"true","up-to":"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"secret",inline:"true","up-to":"true"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"top-secret",inline:"true","up-to":"true"}))},name:"Up to"},BottomOfPage={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official"})},name:"Bottom of page"},Country={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official",inline:"true",country:"us"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official",inline:"true",country:""}))},name:"Country"},AdditionalSelectors={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official",inline:"true","additional-selectors":"UKIC"})},name:"Additional selectors"},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:args.classification,inline:args.inline,"up-to":args.upTo,country:args.country,"additional-selectors":args.additionalSelectors})},args:{additionalSelectors:"",classification:"official",country:"uk",inline:!0,upTo:!1},argTypes:{classification:{options:["default","official","secret","official-sensitive","top-secret"],control:{type:"select"}}},name:"Playground"};const __namedExportsOrder=["Classifications","UpTo","BottomOfPage","Country","AdditionalSelectors","Playground"];Classifications.parameters={...Classifications.parameters,docs:{...Classifications.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n          <IcClassificationBanner inline="true" />\n    <IcClassificationBanner classification="official" inline="true" />\n    <IcClassificationBanner classification="official-sensitive" inline="true" />\n    <IcClassificationBanner classification="secret" inline="true" />\n    <IcClassificationBanner classification="top-secret" inline="true" />\n    </>,\n  name: "Classifications"\n}',...Classifications.parameters?.docs?.source}}},UpTo.parameters={...UpTo.parameters,docs:{...UpTo.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcClassificationBanner inline="true" />\n    <IcClassificationBanner classification="official" inline="true" up-to="true" />\n    <IcClassificationBanner classification="official-sensitive" inline="true" up-to="true" />\n    <IcClassificationBanner classification="secret" inline="true" up-to="true" />\n    <IcClassificationBanner classification="top-secret" inline="true" up-to="true" />\n    </>,\n  name: "Up to"\n}',...UpTo.parameters?.docs?.source}}},BottomOfPage.parameters={...BottomOfPage.parameters,docs:{...BottomOfPage.parameters?.docs,source:{originalSource:'{\n  render: () => <IcClassificationBanner classification="official" />,\n  name: "Bottom of page"\n}',...BottomOfPage.parameters?.docs?.source}}},Country.parameters={...Country.parameters,docs:{...Country.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcClassificationBanner classification="official" inline="true" country="us" />\n    <IcClassificationBanner classification="official" inline="true" country="" />\n    </>,\n  name: "Country"\n}',...Country.parameters?.docs?.source}}},AdditionalSelectors.parameters={...AdditionalSelectors.parameters,docs:{...AdditionalSelectors.parameters?.docs,source:{originalSource:'{\n  render: () => <IcClassificationBanner classification="official" inline="true" additional-selectors="UKIC" />,\n  name: "Additional selectors"\n}',...AdditionalSelectors.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <IcClassificationBanner classification={args.classification} inline={args.inline} up-to={args.upTo} country={args.country} additional-selectors={args.additionalSelectors}></IcClassificationBanner>,\n  args: defaultArgs,\n  argTypes: {\n    classification: {\n      options: ["default", "official", "secret", "official-sensitive", "top-secret"],\n      control: {\n        type: "select"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);