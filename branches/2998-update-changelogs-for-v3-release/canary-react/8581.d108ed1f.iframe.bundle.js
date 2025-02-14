"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[8581],{"../web-components/dist/esm/ic-pagination-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_pagination_item:()=>PaginationItem});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-2624c32c.js");const PaginationItem=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.paginationItemClick=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"paginationItemClick",7),this.handleClick=()=>{this.paginationItemClick.emit({page:this.page})},this.capitalizedLabel=void 0,this.disabled=!1,this.label="Page",this.monochrome=!1,this.page=void 0,this.selected=!1,this.theme="inherit",this.type=void 0}watchDisabledHandler(){(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}watchLabelHandler(){this.capitalizedLabel=(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.R)(this.label)}componentWillLoad(){this.watchLabelHandler(),(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}render(){const{page,selected,type,disabled,label,capitalizedLabel,monochrome}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{class:{monochrome}},"ellipsis"===type?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"item-container":!0,ellipsis:!0,disabled}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label"},"...")):"page"===type?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{disabled,onClick:this.handleClick,tabindex:selected?"-1":"0",role:"button","aria-current":selected&&"page","aria-label":selected?`${label}: ${page}`:`Go to ${label} ${page}`,class:{selected:!disabled&&selected,disabled,"item-container":!0,page:"page"===type}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label",class:{"page-selected":selected,disabled}},page)):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{"aria-live":"polite",class:{"simple-current":!0,disabled},variant:"label"},capitalizedLabel," ",page))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"],label:["watchLabelHandler"]}}};PaginationItem.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}a{text-align:center}.item-container{display:flex;justify-content:center;align-items:center;width:calc(var(--ic-space-xl) + var(--ic-space-sm));height:var(--ic-space-xl);margin:var(--ic-space-xxs) var(--ic-space-xxxs);cursor:pointer;text-decoration:none}button{background:none;border:none;outline:inherit;position:relative}.ellipsis{pointer-events:none;--ic-typography-color:var(--ic-pagination-ellipsis)}.monochrome .ellipsis{--ic-typography-color:var(--ic-pagination-ellipsis-monochrome)}.item-container:focus{box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast)}.page{--ic-typography-color:var(--ic-pagination-page-number)}.monochrome .page{--ic-typography-color:var(--ic-pagination-page-number-monochrome)}.simple-current{min-width:calc(var(--ic-space-xxl) + var(--ic-space-md));height:var(--ic-space-lg);cursor:default}.item-container.page:hover:not(.selected):not(:focus){border-radius:var(--ic-border-radius);background-color:var(--ic-pagination-hover)}.item-container.page:active:not(.selected):not(:focus){background-color:var(--ic-pagination-pressed)}.monochrome .item-container.page:hover:not(.selected):not(:focus){background-color:var(--ic-pagination-hover-monochrome)}.monochrome .item-container.page:active:not(.selected):not(:focus){background-color:var(--ic-pagination-pressed-monochrome)}.selected{pointer-events:none;outline:none}.selected::after{content:"";height:var(--ic-space-xxs);width:100%;position:absolute;bottom:0;background-color:var(--ic-pagination-selected-banner)}.monochrome .selected::after{background-color:var(--ic-pagination-selected-banner-monochrome)}.page-selected{--ic-typography-color:var(--ic-pagination-text)}.item-container.page.light:hover:not(.selected):not(:focus){background-color:var(--ic-action-light-bg-hover)}.item-container.page.light:active:not(.selected):not(:focus){background-color:var(--ic-action-light-bg-pressed)}ic-typography.light,ic-typography.page-selected.light{--ic-typography-color:var(--ic-architectural-white)}.selected.light::after{content:"";height:var(--ic-space-xxs);width:100%;position:absolute;bottom:0;background-color:var(--ic-action-light)}.item-container.page.dark:hover:not(.selected):not(:focus){background-color:var(--ic-action-dark-bg-hover)}.item-container.page.dark:active:not(.selected):not(:focus){background-color:var(--ic-action-dark-bg-pressed)}ic-typography.dark{--ic-typography-color:var(--ic-color-text-primary)}.selected.dark::after{content:"";height:var(--ic-space-xxs);width:100%;position:absolute;bottom:0;background-color:var(--ic-action-dark)}.disabled{--ic-typography-color:var(--ic-architectural-200);pointer-events:none;cursor:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (forced-colors: active){.selected::after{background-color:Highlight}.selected.light::after{background-color:Highlight}.selected.dark::after{background-color:Highlight}.disabled{--ic-typography-color:GrayText}}'}}]);