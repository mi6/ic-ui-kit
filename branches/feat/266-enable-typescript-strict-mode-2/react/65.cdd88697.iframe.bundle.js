"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[65],{"../web-components/dist/esm/ic-footer.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_footer:()=>Footer});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-fbdb1310.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var Footer=function(){function Footer(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Footer),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.footerResized=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"footerResized",7),this.resizeObserver=null,this.hostMutationObserver=null,this.resizeObserverCallback=function(currSize){currSize!==_this.deviceSize&&(_this.deviceSize=currSize),_this.footerResized.emit()},this.runResizeObserver=function(){_this.footerEl&&(_this.resizeObserver=new ResizeObserver((function(){var currSize=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.e)();_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(_this.footerEl))},this.deviceSize=_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.u.XL,this.foregroundColor=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.g)(),this.aligned="left",this.breakpoint="medium",this.caption=void 0,this.copyright=!0,this.description=void 0,this.groupLinks=!1}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(Footer,[{key:"disconnectedCallback",value:function disconnectedCallback(){var _a;null!==this.resizeObserver&&this.resizeObserver.disconnect(),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){this.deviceSize=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.e)()}},{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this;(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),this.hostMutationObserver=new MutationObserver((function(mutationList){return(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.a)(mutationList,"link",_this2)})),this.hostMutationObserver.observe(this.el,{childList:!0})}},{key:"brandChangeHandler",value:function brandChangeHandler(ev){this.foregroundColor=ev.detail.mode}},{key:"isSmall",value:function isSmall(){var bp=this.breakpoint;return"extra small"===bp?this.deviceSize<_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.u.XS:"small"===bp?this.deviceSize<_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.u.S:"medium"===bp?this.deviceSize<_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.u.M:"large"===bp?this.deviceSize<_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.u.L:"extra large"===bp&&this.deviceSize<_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.u.XL}},{key:"render",value:function render(){var _this3=this,aligned=this.aligned,caption=this.caption,copyright=this.copyright,description=this.description,deviceSize=this.deviceSize,el=this.el,foregroundColor=this.foregroundColor,groupLinks=this.groupLinks,small=this.isSmall(),showComplianceSection=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"logo")||(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"caption")||caption||copyright;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"ic-footer",!0),"ic-footer-".concat(small?"small":"sparse"),!0),"ic-footer-".concat(groupLinks?"grouped":"ungrouped"),!0),"ic-footer-foreground-".concat(foregroundColor),!0),"ic-footer-".concat(_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark),foregroundColor===_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark),"ic-footer-".concat(_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.I.Light),foregroundColor===_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.I.Light)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer",{ref:function ref(el){return _this3.footerEl=el}},((0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"description")||description)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-description"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{aligned,fullHeight:!0},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-description-inner"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"description"},description))))),(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"link")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-links"},groupLinks&&small?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-links-inner",role:"list"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"link"})):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{fullHeight:!0,aligned},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-links-inner",role:"list"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"link"})))),showComplianceSection&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-compliance"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{aligned,fullHeight:!0},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-compliance-inner"},(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"logo")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-logo"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"logo"})),((0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"caption")||caption)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-caption"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:deviceSize<=_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.u.M?"caption":"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"caption"},caption))),copyright&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty(_defineProperty({},"footer-copyright",!0),"classification-spacing",(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.v)())},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:deviceSize<=_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.u.M?"caption-uppercase":"label-uppercase"},"© Crown Copyright")))))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}]),Footer}();Footer.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--footer-compliance-padding:1rem 0}:host(.ic-footer-sparse){--footer-links-padding:1.5rem 0;--footer-logo-margin-bottom:calc(var(--ic-space-md) + var(--ic-space-xxs));--footer-link-inner-flex-direction:row}:host(.ic-footer-small){--footer-links-padding:0 0;--footer-logo-margin-bottom:var(--ic-space-md);--footer-link-inner-flex-direction:column}:host(.ic-footer-foreground-dark){--ic-footer-background:var(--ic-brand-color-secondary-light);--ic-footer-bottom-background:var(--ic-brand-color-tertiary-light);--ic-footer-keyline:var(--ic-state-layer-darken-20);--ic-footer-text:var(--ic-color-text-primary-light);--ic-footer-link:var(--ic-color-text-primary-light);--ic-footer-icon:var(--ic-color-icon-neutral);--ic-footer-chevron-icon:var(--ic-color-icon-neutral);--ic-footer-logo:var(--ic-color-icon-neutral);--ic-footer-hover:var(--ic-architectural-700-state-layer-10);--ic-footer-pressed:var(--ic-architectural-700-state-layer-20)}:host(.ic-footer-small.ic-footer-ungrouped){--footer-links-padding:var(--ic-space-md) 0 0 0}footer{display:flex;flex-direction:column;width:100%}.footer-description{background-color:var(--ic-footer-background);color:var(--ic-footer-text);--ic-typography-color:var(--ic-footer-text);border-bottom:var(--ic-space-1px) solid var(--ic-footer-keyline)}.footer-description-inner{padding:1rem 0}.footer-links{padding:var(--footer-links-padding);background-color:var(--ic-footer-background);color:var(--ic-footer-link);--ic-typography-color:var(--ic-footer-link)}.footer-links-inner{display:flex;flex-direction:var(--footer-link-inner-flex-direction)}.footer-compliance{background-color:var(--ic-footer-bottom-background);color:var(--ic-footer-text);--ic-typography-color:var(--ic-footer-text)}.footer-compliance-inner{padding:var(--footer-compliance-padding)}.footer-logo{margin-bottom:var(--footer-logo-margin-bottom);display:flex;gap:var(--ic-space-xxl)}.footer-logo>::slotted(){margin-right:var(--ic-space-md)}.footer-caption{margin-bottom:var(--ic-space-md)}.classification-spacing{margin-bottom:var(--ic-space-lg)}@media (forced-colors: active){footer{border-top:var(--ic-border-hc)}}'}}]);