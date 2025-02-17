"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[9598],{"../web-components/dist/esm/ic-footer-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_footer_link:()=>FooterLink});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-2624c32c.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var FooterLink=function(){return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function FooterLink(hostRef){!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,FooterLink),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.deviceSize=_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.footerConfig={small:!1,grouped:!1},this.foregroundColor=(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.g)(),this.download=!1,this.href=null,this.hreflang=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0}),[{key:"componentWillLoad",value:function componentWillLoad(){this.footerConfig=this.inferConfig(this.el)}},{key:"footerResizeHandler",value:function footerResizeHandler(){this.footerConfig=this.inferConfig(this.el)}},{key:"footerBrandChangeHandler",value:function footerBrandChangeHandler(ev){this.foregroundColor=ev.detail.mode}},{key:"inferConfig",value:function inferConfig(e){return null!==e.parentElement?e.parentElement.classList.contains("ic-footer")?{small:e.parentElement.classList.contains("ic-footer-small"),grouped:e.parentElement.classList.contains("ic-footer-grouped")}:this.inferConfig(e.parentElement):{small:!1,grouped:!1}}},{key:"render",value:function render(){var footerConfig=this.footerConfig,href=this.href,hreflang=this.hreflang,referrerpolicy=this.referrerpolicy,rel=this.rel,target=this.target,download=this.download,small=footerConfig.small,grouped=footerConfig.grouped,isLogoLink=!!this.el.closest("div[slot='logo']");return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty(_defineProperty({"footer-link":!0},"footer-link-".concat(grouped?"grouped":"ungrouped","-").concat(small?"small":"sparse"),!0),"footer-link-".concat(this.foregroundColor),!0),"footer-logo-link",isLogoLink),role:"listitem"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-link",{href,hreflang,referrerpolicy,rel,download:!1!==download?download:null,target},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}])}();FooterLink.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.footer-link-ungrouped-sparse){--footer-link-margin-left:0;--footer-link-margin-right:2.5rem;--footer-link-margin-bottom:0}:host(.footer-link-ungrouped-small){--footer-link-margin-left:0;--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link-grouped-sparse){--footer-link-margin-left:0;--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link-grouped-small){--footer-link-margin-left:var(--ic-space-md);--footer-link-margin-right:0;--footer-link-margin-bottom:var(--ic-space-md)}:host(.footer-link){margin-left:var(--footer-link-margin-left);margin-right:var(--footer-link-margin-right);margin-bottom:var(--footer-link-margin-bottom)}.ic-link-open-in-new-icon{vertical-align:middle;margin-left:var(--ic-space-xxs)}.ic-link>.ic-link-open-in-new-icon{fill:var(--ic-color-hyperlink-default)}.ic-link-open-in-new-icon>svg{width:var(--ic-space-md);height:var(--ic-space-md);fill:currentcolor}.ic-link:visited>.ic-link-open-in-new-icon{fill:var(--ic-color-hyperlink-visited)}.ic-link.light:visited>.ic-link-open-in-new-icon{fill:var(--ic-color-hyperlink-contrast-visited)}:host(.breadcrumb-link) .ic-link{display:var(--breadcrumb-link-display);align-items:var(--breadcrumb-link-align-items);gap:var(--breadcrumb-link-gap)}:host(.breadcrumb-link) .ic-link ::slotted(.back-icon){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.breadcrumb-link.current-page) a,:host(.breadcrumb-link.current-page) ::slotted(a){font-weight:normal;color:inherit;text-decoration:none;display:flex;align-items:center}:host(.breadcrumb-link.current-page) .ic-link,:host(.breadcrumb-link.current-page) ::slotted(a:focus){outline:var(--ic-hc-focus-outline);text-decoration:none}:host(.breadcrumb-link.current-page) .ic-link:visited{color:var(--ic-color-text-primary)}:host(.footer-link-light) ::part(link),:host(.footer-link-dark) ::part(link){color:var(--ic-footer-link)}:host(.footer-link-light) ::slotted(svg),:host(.footer-link-dark) ::slotted(svg){fill:var(--ic-footer-icon)}:host(.footer-logo-link){transition:var(--ic-easing-transition-fast)}:host(.footer-logo-link:hover){background-color:var(--ic-footer-hover)}:host(.footer-logo-link:active){background-color:var(--ic-footer-pressed)}:host(.footer-logo-link:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline)}@media (forced-colors: active){:host(.footer-link-light) ::slotted(svg),:host(.footer-link-dark) ::slotted(svg){fill:currentcolor}}'}}]);