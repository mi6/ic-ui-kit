"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4761],{"./dist/esm/ic-empty-state.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_empty_state:()=>EmptyState});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-2624c32c.js");const EmptyState=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.hostMutationObserver=null,this.aligned="left",this.body=void 0,this.maxLines=void 0,this.heading=void 0,this.imageSize="medium",this.subheading=void 0,this.theme="inherit"}disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentDidLoad(){!(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")&&(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.heading,propName:"heading"}],"Empty State"),this.hostMutationObserver=new MutationObserver((mutationList=>(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.a)(mutationList,["image","actions"],this))),this.hostMutationObserver.observe(this.el,{childList:!0})}render(){const{aligned,body,maxLines,heading,imageSize,subheading,theme}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-empty-state-${aligned}`]:!0,[`image-${imageSize}`]:(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image"),[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"image"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"h4",class:"empty-state-heading"},heading)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"subheading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small",class:"empty-state-subheading"},subheading)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{maxLines,class:"empty-state-body"},body))),(0,_helpers_2624c32c_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"actions")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"action-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"actions"})))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};EmptyState.style=':host{gap:var(--ic-space-xs);padding:var(--ic-space-xs)}:host,.action-area{display:flex;flex-direction:column}.action-area{gap:var(--ic-space-md)}:host ::slotted(svg),:host ::slotted(img){border-radius:var(--ic-space-xxs)}:host(.ic-empty-state-right),:host(.ic-empty-state-right) .action-area{align-items:flex-end;text-align:right}:host(.ic-empty-state-center),:host(.ic-empty-state-center) .action-area{align-items:center;text-align:center}:host(.image-medium) ::slotted(svg),:host(.image-medium) ::slotted(img){height:calc(3 * var(--ic-space-lg)) !important;width:calc(3 * var(--ic-space-lg)) !important}:host(.image-small) ::slotted(svg),:host(.image-small) ::slotted(img){height:var(--ic-space-xxl) !important;width:var(--ic-space-xxl) !important}:host(.image-large) ::slotted(svg),:host(.image-large) ::slotted(img){height:calc(4 * var(--ic-space-xl)) !important;width:calc(4 * var(--ic-space-xl)) !important}::slotted([slot="heading"]),.empty-state-heading{--ic-typography-color:var(--ic-empty-state-title)}::slotted([slot="subheading"]),.empty-state-subheading{--ic-typography-color:var(--ic-empty-state-subtitle)}::slotted([slot="body"]),.empty-state-body{--ic-typography-color:var(--ic-empty-state-body)}'}}]);