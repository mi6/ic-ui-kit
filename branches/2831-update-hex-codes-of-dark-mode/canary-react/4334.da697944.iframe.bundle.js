"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[4334],{"../canary-web-components/dist/esm/ic-toast-region.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toast_region:()=>ToastRegion});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js");const ToastRegion=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.pendingVisibility=[],this.showToast=toast=>{const visibleToasts=Array.from(document.querySelectorAll("ic-toast")).filter((el=>"none"!==window.getComputedStyle(el).display));-1===visibleToasts.indexOf(toast)&&visibleToasts.length<=0&&toast.setVisible().then((res=>this.previouslyFocused=res)),visibleToasts.length>0&&this.pendingVisibility.push(toast)},this.openToast=void 0}watchOpenToastHandler(newValue){void 0!==this.openToast&&(this.showToast(newValue),this.openToast=void 0)}componentDidLoad(){this.openToast&&(this.showToast(this.openToast),this.openToast=void 0)}handleDismissedToast(){var _a;this.pendingVisibility.length>0?(this.pendingVisibility[0].setVisible().then((res=>this.previouslyFocused=res)),this.pendingVisibility.shift()):this.previouslyFocused&&"setFocus"in this.previouslyFocused?this.previouslyFocused.setFocus():null===(_a=this.previouslyFocused)||void 0===_a||_a.focus()}render(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{openToast:["watchOpenToastHandler"]}}}}}]);