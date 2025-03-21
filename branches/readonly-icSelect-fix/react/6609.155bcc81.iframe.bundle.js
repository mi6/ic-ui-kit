"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[6609],{"../web-components/dist/esm/ic-empty-state.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_empty_state:()=>EmptyState});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-fbdb1310.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var EmptyState=function(){function EmptyState(hostRef){!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,EmptyState),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.hostMutationObserver=null,this.aligned="left",this.body=void 0,this.maxLines=void 0,this.heading=void 0,this.imageSize="medium",this.subheading=void 0,this.theme="inherit"}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(EmptyState,[{key:"disconnectedCallback",value:function disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}},{key:"componentDidLoad",value:function componentDidLoad(){var _this=this;!(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")&&(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.heading,propName:"heading"}],"Empty State"),this.hostMutationObserver=new MutationObserver((function(mutationList){return(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.a)(mutationList,["image","actions"],_this)})),this.hostMutationObserver.observe(this.el,{childList:!0})}},{key:"render",value:function render(){var aligned=this.aligned,body=this.body,maxLines=this.maxLines,heading=this.heading,imageSize=this.imageSize,subheading=this.subheading,theme=this.theme;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty(_defineProperty({},"ic-empty-state-".concat(aligned),!0),"image-".concat(imageSize),(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image")),"ic-theme-".concat(theme),"inherit"!==theme)},(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"image"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"h4",class:"empty-state-heading"},heading)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"subheading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small",class:"empty-state-subheading"},subheading)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{maxLines,class:"empty-state-body"},body))),(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"actions")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"action-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"actions"})))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}]),EmptyState}();EmptyState.style=':host{gap:var(--ic-space-xs);padding:var(--ic-space-xs)}:host,.action-area{display:flex;flex-direction:column}.action-area{gap:var(--ic-space-md)}:host ::slotted(svg),:host ::slotted(img){border-radius:var(--ic-space-xxs)}:host(.ic-empty-state-right),:host(.ic-empty-state-right) .action-area{align-items:flex-end;text-align:right}:host(.ic-empty-state-center),:host(.ic-empty-state-center) .action-area{align-items:center;text-align:center}:host(.image-medium) ::slotted(svg),:host(.image-medium) ::slotted(img){height:calc(3 * var(--ic-space-lg)) !important;width:calc(3 * var(--ic-space-lg)) !important}:host(.image-small) ::slotted(svg),:host(.image-small) ::slotted(img){height:var(--ic-space-xxl) !important;width:var(--ic-space-xxl) !important}:host(.image-large) ::slotted(svg),:host(.image-large) ::slotted(img){height:calc(4 * var(--ic-space-xl)) !important;width:calc(4 * var(--ic-space-xl)) !important}::slotted([slot="heading"]),.empty-state-heading{--ic-typography-color:var(--ic-empty-state-title)}::slotted([slot="subheading"]),.empty-state-subheading{--ic-typography-color:var(--ic-empty-state-subtitle)}::slotted([slot="body"]),.empty-state-body{--ic-typography-color:var(--ic-empty-state-body)}'}}]);