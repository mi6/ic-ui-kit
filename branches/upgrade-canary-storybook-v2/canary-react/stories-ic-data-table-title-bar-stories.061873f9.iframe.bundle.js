"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[4542],{"../react/dist/react-component-lib/slottedSVG.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>SlottedSVG});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},defaultProps={xmlns:"http://www.w3.org/2000/svg"};var SlottedSVG=function(_a){var path=_a.path,slotName=_a.slot,children=_a.children,props=__rest(_a,["path","slot","children"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",__assign({},function slot(name){return void 0===name&&(name=""),{ref:function(e){return e?e.setAttribute("slot",name):null}}}(slotName),props,defaultProps),!!path&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:path}),children)};SlottedSVG.__docgenInfo={description:"",methods:[],displayName:"SlottedSVG"}},"./src/stories/ic-data-table-title-bar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomActions:()=>CustomActions,HideDensitySelector:()=>HideDensitySelector,Slots:()=>Slots,WithMetadataAndDescription:()=>WithMetadataAndDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ukic_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/dist/components.js"),_ukic_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../react/dist/react-component-lib/slottedSVG.js"),_canary_web_components_src_components_ic_data_table_title_bar_readme_md__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/src/components/ic-data-table-title-bar/readme.md"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components.ts"),_mdi_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdi/js/mdi.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"React Components/Data Table Title Bar",component:_components__WEBPACK_IMPORTED_MODULE_2__.gd,parameters:{componentAPI:{data:_canary_web_components_src_components_ic_data_table_title_bar_readme_md__WEBPACK_IMPORTED_MODULE_0__}}},Basic={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.gd,{heading:"Title Bar"}),name:"Basic"},Slots={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.gd,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.Cu,{slot:"heading",variant:"h1"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3",null,"Title Bar")),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{slot:"description"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.XQ,{label:"Chip"}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.XQ,{label:"Chip"}))),name:"Slots"},WithMetadataAndDescription={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.gd,{heading:"Title Bar",metadata:"128 items | 32gb | Updated: 01/02/03",description:"Data table description that describes the purpose of the table."}),name:"With metadata and description"},HideDensitySelector={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.gd,{hideDensitySelect:!0,heading:"Title Bar",metadata:"128 items | 32gb | Updated: 01/02/03",description:"Data table description that describes the purpose of the table."}),name:"Hide density selector"},CustomActions={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.gd,{heading:"Title Bar",metadata:"128 items | 32gb | Updated: 01/02/03",description:"Data table description that describes the purpose of the table."},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.nP,{slot:"primary-action",size:"small"},"Primary"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_3__.nP,{slot:"custom-actions",variant:"icon","aria-label":"Icon Button"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ukic_react__WEBPACK_IMPORTED_MODULE_4__.k,{path:_mdi_js__WEBPACK_IMPORTED_MODULE_5__.mKX,viewBox:"0 0 24 24"}))),name:"Custom actions"},__namedExportsOrder=["Basic","Slots","WithMetadataAndDescription","HideDensitySelector","CustomActions"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDataTableTitleBar heading="Title Bar" />,\n  name: "Basic"\n}',...Basic.parameters?.docs?.source}}},Slots.parameters={...Slots.parameters,docs:{...Slots.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDataTableTitleBar>\n      <IcTypography slot="heading" variant="h1">\n        <h3>Title Bar</h3>\n      </IcTypography>\n      <div slot="description">\n        <IcChip label="Chip" />\n        <IcChip label="Chip" />\n      </div>\n    </IcDataTableTitleBar>,\n  name: "Slots"\n}',...Slots.parameters?.docs?.source}}},WithMetadataAndDescription.parameters={...WithMetadataAndDescription.parameters,docs:{...WithMetadataAndDescription.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDataTableTitleBar heading="Title Bar" metadata="128 items | 32gb | Updated: 01/02/03" description="Data table description that describes the purpose of the table." />,\n  name: "With metadata and description"\n}',...WithMetadataAndDescription.parameters?.docs?.source}}},HideDensitySelector.parameters={...HideDensitySelector.parameters,docs:{...HideDensitySelector.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDataTableTitleBar hideDensitySelect heading="Title Bar" metadata="128 items | 32gb | Updated: 01/02/03" description="Data table description that describes the purpose of the table." />,\n  name: "Hide density selector"\n}',...HideDensitySelector.parameters?.docs?.source}}},CustomActions.parameters={...CustomActions.parameters,docs:{...CustomActions.parameters?.docs,source:{originalSource:'{\n  render: () => <IcDataTableTitleBar heading="Title Bar" metadata="128 items | 32gb | Updated: 01/02/03" description="Data table description that describes the purpose of the table.">\n      <IcButton slot="primary-action" size="small">\n        Primary\n      </IcButton>\n      <IcButton slot="custom-actions" variant="icon" aria-label="Icon Button">\n        <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />\n      </IcButton>\n    </IcDataTableTitleBar>,\n  name: "Custom actions"\n}',...CustomActions.parameters?.docs?.source}}}},"../canary-web-components/src/components/ic-data-table-title-bar/readme.md":module=>{module.exports='# ic-data-table-title-bar\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property            | Attribute             | Description                                                                                                                                                          | Type      | Default                     |\n| ------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------------------------- |\n| `description`       | `description`         | The description that is displayed below the `heading` and `metadata`. Can be overridden with the `description` slot.                                                 | `string`  | `undefined`                 |\n| `heading`           | `heading`             | The heading of the title bar. Can be overridden with the `heading` slot. If used with an `ic-data-table` it will default to the table\'s `caption` unless overridden. | `string`  | `DEFAULT_TITLE_BAR_HEADING` |\n| `hideDensitySelect` | `hide-density-select` | When `true`, the density select will not be rendered.                                                                                                                | `boolean` | `false`                     |\n| `metadata`          | `metadata`            | The metadata displayed next to the `heading`.                                                                                                                        | `string`  | `undefined`                 |\n\n\n## Events\n\n| Event                  | Description                                             | Type                                      |\n| ---------------------- | ------------------------------------------------------- | ----------------------------------------- |\n| `icTableDensityUpdate` | Emitted when the table density select value is changed. | `CustomEvent<IcDensityUpdateEventDetail>` |\n\n\n## Slots\n\n| Slot               | Description                                                                                                   |\n| ------------------ | ------------------------------------------------------------------------------------------------------------- |\n| `"custom-actions"` | Render additional custom actions to the left of the density select.                                           |\n| `"description"`    | Render an alternative description in the description section.                                                 |\n| `"heading"`        | The heading to render on the data table title bar.                                                            |\n| `"primary-action"` | Render an interactive element that will perform a primary action. Renders to the right of the density select. |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-typography\n- ic-select\n\n### Graph\n```mermaid\ngraph TD;\n  ic-data-table-title-bar --\x3e ic-typography\n  ic-data-table-title-bar --\x3e ic-select\n  ic-select --\x3e ic-input-container\n  ic-select --\x3e ic-input-label\n  ic-select --\x3e ic-input-component-container\n  ic-select --\x3e ic-typography\n  ic-select --\x3e ic-button\n  ic-select --\x3e ic-menu\n  ic-select --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-menu --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-typography\n  ic-menu --\x3e ic-button\n  ic-input-validation --\x3e ic-typography\n  style ic-data-table-title-bar fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}]);