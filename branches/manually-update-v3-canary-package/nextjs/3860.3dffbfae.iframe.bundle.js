"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[3860],{"../web-components/dist/esm/ic-data-row.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_data_row:()=>DataRow});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-35ac5e03.js"),DataRow=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),function(){function DataRow(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__.A)(this,DataRow),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.hasEndComponent=!1,this.resizeObserver=null,this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.checkLabelAbove()})),_this.resizeObserver.observe(_this.el)},this.renderCellContent=function(cell){var isValue="value"===cell;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:cell},(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.i)(_this.el,cell)?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:cell}):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:isValue?"body":"xs"===_this.listSize?"label":"subtitle-large"},isValue?_this.value:_this.label))},this.deviceSize=_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.listSize=void 0,this.label=void 0,this.size="medium",this.value=void 0}return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__.A)(DataRow,[{key:"disconnectedCallback",value:function disconnectedCallback(){var _a;null===(_a=this.resizeObserver)||void 0===_a||_a.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){this.deviceSize=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.f)(),this.hasEndComponent=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el,"end-component"),this.checkLabelAbove()}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.runResizeObserver),this.hasEndComponent&&this.labelEndComponent()}},{key:"checkLabelAbove",value:function checkLabelAbove(){var _a,rowSize=(null===(_a=this.el.shadowRoot.querySelector(".data"))||void 0===_a?void 0:_a.clientWidth)+46;rowSize&&(this.listSize=rowSize<_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.D.S?"xs":rowSize<_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.D.M?"m":"xl")}},{key:"labelEndComponent",value:function labelEndComponent(){var _this2=this;this.el.shadowRoot.querySelectorAll("slot[name=end-component]").forEach((function(child){return child.setAttribute("aria-label","for ".concat(_this2.label," row"))}))}},{key:"render",value:function render(){var el=this.el,listSize=this.listSize,hasEndComponent=this.hasEndComponent,label=this.label,renderCellContent=this.renderCellContent,size=this.size,value=this.value;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"ic-data-row-small","small"===size),"breakpoint-medium","m"===listSize),"breakpoint-xs","xs"===listSize),role:"listitem"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"data"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"text-cells"},((0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"label")||label)&&renderCellContent("label"),((0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"value")||value)&&renderCellContent("value")),hasEndComponent&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"end-component"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"end-component"}))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"divider"}))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}]),DataRow}());DataRow.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:relative;display:block}.data{display:flex;align-items:center}.text-cells{display:flex;flex-grow:1;min-width:0}.label{width:12.5rem;min-width:12.5rem;margin-right:var(--ic-space-md);--ic-typography-color:var(--ic-color-tertiary-text)}.value{flex-grow:1}slot[name="value"]::slotted(ic-text-field[readonly][hide-label]){margin-top:calc(var(--ic-space-xs) * -1)}slot[name="value"]::slotted(ic-text-field[small][readonly][hide-label]){margin-top:calc(var(--ic-space-xxs) * -1)}slot[name="value"]::slotted(ic-text-field[readonly][hide-label][rows]){margin-top:calc(var(--ic-space-xxs) * -1 - var(--ic-space-xxxs))}.end-component{width:-moz-fit-content;width:fit-content;margin-left:3.5rem}.divider{margin-top:var(--ic-space-md);height:var(--ic-border-width);background-color:var(--ic-architectural-300)}:host(.ic-data-row-small) .divider{margin-top:var(--ic-space-xs)}:host(.breakpoint-medium) .label{width:10rem;min-width:10rem}:host(.breakpoint-xs) .text-cells{flex-direction:column}:host(.breakpoint-xs) .label{width:8rem;margin-bottom:var(--ic-space-xs)}:host(.breakpoint-xs) .value{max-width:95%}:host(.breakpoint-xs) .end-component{margin-left:0}@media (forced-colors: active){.divider{background-color:canvastext}}'}}]);