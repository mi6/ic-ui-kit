"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[5272],{"../web-components/dist/esm/ic-footer-link-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_footer_link_group:()=>FooterLinkGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-c7b7c2d9.js");__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var FooterLinkGroup=function(){return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function FooterLinkGroup(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,FooterLinkGroup),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.handleKeydown=function(event){" "!==event.key&&"Enter"!==event.key||_this.toggleExpanded()},this.toggleExpanded=function(){_this.expanded=!_this.expanded},this.expanded=!1,this.deviceSize=_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.dropdownIconStyle=(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.d)(),this.small=!1,this.groupTitle=void 0}),[{key:"componentWillLoad",value:function componentWillLoad(){this.small=this.isSmall(this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_c7b7c2d9_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.groupTitle,propName:"group-title"}],"Footer Link Group")}},{key:"footerResizeHandler",value:function footerResizeHandler(){this.small=this.isSmall(this.el)}},{key:"footerThemeChangeHandler",value:function footerThemeChangeHandler(ev){var theme=ev.detail;this.dropdownIconStyle=theme.mode}},{key:"isSmall",value:function isSmall(e){return null!==e.parentElement&&(e.parentElement.classList.contains("footer")?e.parentElement.classList.contains("footer-small"):this.isSmall(e.parentElement))}},{key:"render",value:function render(){var small=this.small,groupTitle=this.groupTitle;return small?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty({},"footer-link-group footer-link-group-small",!0),"footer-link-group-".concat(this.dropdownIconStyle),!0),onClick:this.toggleExpanded,onKeydown:this.handleKeydown,"aria-expanded":this.expanded,role:"listitem"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{tabindex:"0",fullHeight:!0},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-link-group-header"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-link-group-title"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label"},groupTitle)),this.expanded?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"footer-link-group-toggle",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{fill:"currentColor",d:"M600.002 210.605L421.285 389.336L0 810.559l178.721 178.836l421.281-421.341l421.281 421.341L1200 810.559L778.733 389.336L600.002 210.605z"})):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"footer-link-group-toggle",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("g",{transform:"translate(0 1200) scale(1 -1)"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{fill:"currentColor",d:"M600.002 210.605L421.285 389.336L0 810.559l178.721 178.836l421.281-421.341l421.281 421.341L1200 810.559L778.733 389.336L600.002 210.605z"})))),this.expanded&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-link-group-links",role:"list"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty({},"footer-link-group footer-link-group-sparse",!0),"footer-link-group-".concat(this.dropdownIconStyle),!0),role:"listitem"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-link-group-title"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small"},groupTitle)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-link-group-links",role:"list"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}])}();FooterLinkGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.footer-link-group-sparse){--footer-link-group-margin-right:5.938rem;--footer-link-group-border-bottom:0 solid transparent;--footer-link-group-title-margin-top:0;--footer-link-group-title-margin-bottom:var(--ic-space-md)}:host(.footer-link-group-small){--footer-link-group-margin-right:0;--footer-link-group-title-margin-top:var(--ic-space-md);--footer-link-group-title-margin-bottom:var(--ic-space-md);--footer-link-group-links-padding-left:var(--ic-space-md);--footer-link-group-links-padding-bottom:var(--ic-space-md)}:host(.footer-link-group-light.footer-link-group-small){--footer-link-group-border-bottom:var(--ic-keyline-lighten)}:host(.footer-link-group-dark.footer-link-group-small){--footer-link-group-border-bottom:var(--ic-keyline-darken)}:host(.footer-link-group){margin-right:var(--footer-link-group-margin-right);border-bottom:var(--footer-link-group-border-bottom)}:host(.footer-link-group-small.footer-link-group-light:hover){background-color:var(--ic-action-light-bg-hover);cursor:pointer}:host(.footer-link-group-small.footer-link-group-dark:hover){background-color:var(--ic-action-dark-bg-hover);cursor:pointer}:host(.footer-link-group-sparse:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline);z-index:1}:host(.footer-link-group-small:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline);z-index:1}:host(.footer-link-group-small.footer-link-group-light:active){background-color:var(--ic-action-light-bg-active)}:host(.footer-link-group-small.footer-link-group-dark:active){background-color:var(--ic-action-dark-bg-active)}:host ic-section-container{outline:none}.footer-link-group-title{margin-top:var(--footer-link-group-title-margin-top);margin-bottom:var(--footer-link-group-title-margin-bottom);flex-grow:1}.footer-link-group-toggle{fill:white !important}.footer-link-group-links{display:flex;flex-direction:column}.footer-link-group-header{display:flex;align-items:center}'}}]);