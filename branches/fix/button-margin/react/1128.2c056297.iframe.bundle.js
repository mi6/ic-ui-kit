"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[1128],{"../web-components/dist/esm/ic-toast-region.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toast_region:()=>ToastRegion});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var ToastRegion=function(){function ToastRegion(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ToastRegion),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.pendingVisibility=[],this.showToast=function(toast){var visibleToasts=Array.from(document.querySelectorAll("ic-toast")).filter((function(el){return"none"!==window.getComputedStyle(el).display}));-1===visibleToasts.indexOf(toast)&&visibleToasts.length<=0&&toast.setVisible().then((function(res){return _this.previouslyFocused=res})),visibleToasts.length>0&&_this.pendingVisibility.push(toast)}}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(ToastRegion,[{key:"watchOpenToastHandler",value:function watchOpenToastHandler(newValue){void 0!==this.openToast&&(this.showToast(newValue),this.openToast=void 0)}},{key:"componentDidLoad",value:function componentDidLoad(){this.openToast&&(this.showToast(this.openToast),this.openToast=void 0)}},{key:"handleDismissedToast",value:function handleDismissedToast(){var _a,_this2=this;this.pendingVisibility.length>0?(this.pendingVisibility[0].setVisible().then((function(res){return _this2.previouslyFocused=res})),this.pendingVisibility.shift()):this.previouslyFocused&&"setFocus"in this.previouslyFocused?this.previouslyFocused.setFocus():null===(_a=this.previouslyFocused)||void 0===_a||_a.focus()}},{key:"render",value:function render(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"6cdae3f2c5a45be56bbeb8bc03dc3b033aa65786"})}},{key:"el",get:function get(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{openToast:["watchOpenToastHandler"]}}}]),ToastRegion}()}}]);