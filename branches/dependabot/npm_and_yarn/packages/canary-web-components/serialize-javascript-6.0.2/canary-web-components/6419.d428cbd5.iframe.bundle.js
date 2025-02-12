"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[6419],{"./dist/esm/ic-footer.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_footer:()=>Footer});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-031e266e.js"),_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/types-f605c21c.js");const Footer=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.footerResized=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"footerResized",7),this.resizeObserver=null,this.hostMutationObserver=null,this.resizeObserverCallback=currSize=>{currSize!==this.deviceSize&&(this.deviceSize=currSize),this.footerResized.emit()},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const currSize=(0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.f)();this.resizeObserverCallback(currSize)})),this.resizeObserver.observe(this.footerEl)},this.deviceSize=_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.I.XL,this.foregroundColor=(0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.d)(),this.aligned="left",this.breakpoint="medium",this.caption=void 0,this.copyright=!0,this.description=void 0,this.groupLinks=!1}disconnectedCallback(){var _a;null!==this.resizeObserver&&this.resizeObserver.disconnect(),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentWillLoad(){this.deviceSize=(0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.f)()}componentDidLoad(){(0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.runResizeObserver),this.hostMutationObserver=new MutationObserver((mutationList=>(0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.k)(mutationList,"link",this))),this.hostMutationObserver.observe(this.el,{childList:!0})}themeChangeHandler(ev){const theme=ev.detail;this.foregroundColor=theme.mode}isSmall(){const bp=this.breakpoint;return"extra small"===bp?this.deviceSize<_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.I.XS:"small"===bp?this.deviceSize<_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.I.S:"medium"===bp?this.deviceSize<_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.I.M:"large"===bp?this.deviceSize<_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.I.L:"extra large"===bp&&this.deviceSize<_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.I.XL}render(){const{aligned,caption,copyright,description,deviceSize,el,foregroundColor,groupLinks}=this,small=this.isSmall(),showComplianceSection=(0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"logo")||(0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"caption")||caption||copyright;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{footer:!0,["footer-"+(small?"small":"sparse")]:!0,["footer-"+(groupLinks?"grouped":"ungrouped")]:!0,[`footer-${foregroundColor}`]:!0,[_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark]:foregroundColor===_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark,[_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_2__.I.Light]:foregroundColor===_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_2__.I.Light}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer",{ref:footerEl=>this.footerEl=footerEl},((0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"description")||description)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-description"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{aligned,fullHeight:!0},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-description-inner"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"description"},description))))),(0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"link")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-links"},groupLinks&&small?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-links-inner",role:"list"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"link"})):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{fullHeight:!0,aligned},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-links-inner",role:"list"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"link"})))),showComplianceSection&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-compliance"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{aligned,fullHeight:!0},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-compliance-inner"},(0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"logo")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-logo"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"logo"})),((0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"caption")||caption)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-caption"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:deviceSize<=_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.I.M?"caption":"body"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"caption"},caption))),copyright&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"footer-copyright":!0,"classification-spacing":(0,_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.w)()}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:deviceSize<=_helpers_031e266e_js__WEBPACK_IMPORTED_MODULE_1__.I.M?"caption-uppercase":"label-uppercase"},"© Crown Copyright")))))))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Footer.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--footer-compliance-padding:1rem 0}:host(.footer-sparse){--footer-links-padding:1.5rem 0;--footer-logo-margin-bottom:var(--ic-space-lg);--footer-link-inner-flex-direction:row}:host(.footer-small){--footer-links-padding:0 0;--footer-logo-margin-bottom:var(--ic-space-md);--footer-link-inner-flex-direction:column}:host(.footer-light){--footer-theme-secondary:var(--ic-theme-secondary);--footer-theme-tertiary:var(--ic-theme-tertiary);--footer-keyline:var(--ic-keyline-lighten)}:host(.footer-dark){--footer-theme-secondary:var(--ic-theme-secondary-light);--footer-theme-tertiary:var(--ic-theme-tertiary-light);--footer-keyline:var(--ic-keyline-darken)}:host(.footer-small.footer-ungrouped){--footer-links-padding:var(--ic-space-md) 0 0 0}footer{display:flex;flex-direction:column;width:100%}.footer-description{background-color:var(--footer-theme-secondary);color:var(--ic-theme-text);border-bottom:var(--footer-keyline)}.footer-description-inner{padding:1rem 0}.footer-links{padding:var(--footer-links-padding);background-color:var(--footer-theme-secondary);color:var(--ic-theme-text)}.footer-links-inner{display:flex;flex-direction:var(--footer-link-inner-flex-direction)}.footer-compliance{background-color:var(--footer-theme-tertiary);color:var(--ic-theme-text)}.footer-compliance-inner{padding:var(--footer-compliance-padding)}.footer-logo{margin-bottom:var(--footer-logo-margin-bottom);display:flex;gap:var(--ic-space-xxl)}.footer-logo>::slotted(){margin-right:var(--ic-space-md)}.footer-caption{margin-bottom:var(--ic-space-md)}.classification-spacing{margin-bottom:var(--ic-space-lg)}@media (forced-colors: active){footer{border-top:var(--ic-hc-border)}}'}}]);