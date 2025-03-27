"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[6612],{"../web-components/dist/esm/check-icon-4a9f8371.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Check});var Check='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/ic-step.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_step:()=>Step});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js"),_check_icon_4a9f8371_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/check-icon-4a9f8371.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-de6293bf.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var Step=function(){function Step(hostRef){!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Step),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.current=!1,this.theme="inherit",this.type="active"}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(Step,[{key:"typeChangeHandler",value:function typeChangeHandler(){"compact"===this.variant&&"current"===this.type?this.current=!0:this.current=!1}},{key:"render",value:function render(){var _a,_b,stepStatus,stepType,statusIcon,ariaLabel="";"completed"===this.type?ariaLabel=". Completed step":"disabled"===this.type?ariaLabel=". Non-required step":"required"===this.status?ariaLabel=". Required step":"optional"===this.status&&(ariaLabel=". Optional step"),this.status&&(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.status)&&(stepStatus=this.status[0].toUpperCase()+this.status.slice(1)),"disabled"===this.type||"disabled"===this.compactStepStyling?stepType="Not required":"completed"===this.compactStepStyling&&(stepType="Completed"),"completed"===this.type||"completed"===this.compactStepStyling?statusIcon=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"d194d450b8be634e0305a9d69148b8e01c0ad921",class:"check-icon step-icon","aria-hidden":"true",innerHTML:_check_icon_4a9f8371_js__WEBPACK_IMPORTED_MODULE_2__.C}):"disabled"!==this.type&&"disabled"!==this.compactStepStyling||(statusIcon=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"37abea1127139c235751e0e5fa159c0123e26045",class:"warning-icon step-icon","aria-hidden":"true",innerHTML:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.99935 4.32666L13.0193 13H2.97935L7.99935 4.32666ZM7.99935 1.66666L0.666016 14.3333H15.3327L7.99935 1.66666ZM8.66602 11H7.33268V12.3333H8.66602V11ZM8.66602 6.99999H7.33268V9.66666H8.66602V6.99999Z" fill="currentColor"/>\n</svg>'}));var icon,compactStep=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0a05a9b7ae4878fb3b9be55a8f4f948fe4a27536",class:_defineProperty(_defineProperty(_defineProperty({},"step",!0),"current",!!this.current),"compact-step-".concat(this.compactStepStyling),!!this.compactStepStyling)},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-loading-indicator",{key:"87ae2770c142889bf7565ead6cf7322df9d2d76d",class:{"compact-step-progress-indicator":!0,"not-required":"disabled"===this.type||"disabled"===this.compactStepStyling},"aria-hidden":"true",size:"small","inner-label":this.stepNum,progress:this.progress}),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"84896f3f22cb2ea8fe8794be14b70341d8e23367",class:"heading-area"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"d62bf42956fcf9ed02747d0a9cf34c0461a26b62",variant:"h4",class:"heading"},this.heading),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b8e96361666f06ac48635cc88cdaf0b127059ed2",class:"info-line"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"bebffda119401ad7441f247c915b7d535a7be967",variant:"caption",class:"step-num"},"".concat(this.stepNum," of ").concat(this.lastStepNum),(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"d06f2369b86d90f4e8f97a6487235a084289705c",class:"visually-hidden"}," steps")),(this.subheading||"completed"===this.type||"disabled"===this.type||"compact"===this.variant&&!!this.compactStepStyling&&"active"!==this.compactStepStyling||!!this.status)&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"767ada3bd54f2ace302dc35bade3820b303beaeb",class:"step-status"},void 0!==statusIcon&&statusIcon,(this.subheading||stepType)&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"d32d553cbc9ed7626bd31f66376f40fc3bd5cafc",variant:"caption"},null!==this.subheading&&(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.subheading)?this.subheading:"disabled"===this.type||"compact"===this.variant&&"disabled"===this.compactStepStyling||"completed"===this.type||"compact"===this.variant&&"completed"===this.compactStepStyling?stepType:this.status&&stepStatus))),this.lastStep?(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small",class:"next-step"},"Last step"):(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.nextStepHeading)&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small",class:"next-step"},"Next",(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"visually-hidden"}," step is"),":"," ",this.nextStepHeading)));icon="completed"!==this.type?(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"460d428fc84a424c2deb2bd19673bac9838fc83c",variant:"subtitle-small"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"2f9976552109cb2369374d045da5695d0cca48a9",class:"step-icon-inner","aria-hidden":"true"},this.stepNum)):(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6e6d3994d3b43e7aa1b516ffb8fada92af8df313",class:"step-icon-inner","aria-hidden":"true"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"b45fb9429fcdf1158944f8e3f0912b5d586f879f",class:"check-icon",innerHTML:_check_icon_4a9f8371_js__WEBPACK_IMPORTED_MODULE_2__.C}));var partialBar="current"===this.type&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"df1360298cadc4fe9fcc0b2962505ca31f77fdd2",class:"step-connect-inner"}),finalStep=!this.lastStep&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"946927672f4115daf7ef35bb577f12ae1e8de66f",class:_defineProperty(_defineProperty({},"step-connect",!0),"aligned-full-width",!(!(null===(_a=this.el.parentElement)||void 0===_a?void 0:_a.classList.contains("ic-stepper-default"))||this.el.parentElement.classList.contains("ic-stepper-aligned-left")))},partialBar),defaultStep=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"637edc67a54d7edab0bbf31c7e86e623f78f9966",class:_defineProperty(_defineProperty({},"step",!0),"".concat(this.type),!0)},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"961519160c7998023c7646cb0c52036951aa6316",class:"step-top"},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2764963722ae57aad38766d26a5fd13e179aac61",class:"step-icon"},icon),finalStep),(this.heading||this.subheading||this.status)&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6ebf91f7c29e29593d9fbaf78c0aa7db7dbb142e",class:"heading-area"},this.heading&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"d299782ac1b0ae99f4f3a95dc478a49f27327b75",variant:"subtitle-large",class:"heading"},this.heading),this.heading&&(this.subheading||this.status)&&(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"9c20efcfae784881552c48f9a4cd779c24126ae6",variant:"caption",class:"subheading"},null!==this.subheading&&(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.subheading)?this.subheading:stepStatus)));return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"c12621f9fa0f127a55e2c72b6f9ff34a6a6be5a9",role:"listitem","aria-label":"Step ".concat(this.stepNum).concat(ariaLabel),"aria-current":(this.current||"current"===this.type)&&"step",class:_defineProperty(_defineProperty(_defineProperty({},"aligned-full-width",!(!(null===(_b=this.el.parentElement)||void 0===_b?void 0:_b.classList.contains("ic-stepper-default"))||this.el.parentElement.classList.contains("ic-stepper-aligned-left"))),"ic-step-".concat(this.variant),!0),"ic-theme-".concat(this.theme),"inherit"!==this.theme)},"compact"===this.variant?compactStep:defaultStep)}},{key:"el",get:function get(){return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{type:["typeChangeHandler"]}}}]),Step}();Step.style=":host{display:flex;flex:auto;--ic-typography-color:currentcolor}.step{display:flex;flex:1 1 0}.step-icon{display:flex;justify-content:center}.heading,.subheading,.step-status,.next-step{white-space:pre-line}.next-step{color:var(--ic-stepper-compact-step-next-text)}.visually-hidden{position:absolute;left:-625rem;top:auto;width:1px;height:1px;overflow:hidden}:host(.ic-step-compact){-moz-column-gap:var(--ic-space-sm);column-gap:var(--ic-space-sm);--compact-step-inner-color:var(--ic-step-indicator-status-current);--compact-step-outer-color:var(--ic-step-indicator-status-remaining);--compact-step-circular-line-width:var(--ic-space-xxs)}:host(.ic-step-compact) .step{-moz-column-gap:var(--ic-space-sm);column-gap:var(--ic-space-sm)}:host(.ic-step-compact) .step:not(.current){display:none;opacity:0;visibility:hidden}.compact-step-progress-indicator{margin:var(--ic-space-xs) 0 0}:host ic-loading-indicator::part(ic-loading-container){border-radius:50%}:host() ic-loading-indicator::part(ic-loading-container){background-color:var(--ic-step-indicator-background)}:host(.ic-step-compact) .heading-area{display:flex;flex-direction:column;width:14.25rem}:host(.ic-step-compact) .heading{color:var(--ic-stepper-compact-step-title)}:host(.ic-step-compact) .disabled .heading{color:var(--ic-stepper-compact-step-title)}.info-line{display:flex;-moz-column-gap:var(--ic-space-xs);column-gap:var(--ic-space-xs)}.step-status{display:flex;color:var(--ic-stepper-compact-step-requirement-text);-moz-column-gap:var(--ic-space-xxxs);column-gap:var(--ic-space-xxxs)}.compact-step-completed .step-status{color:var(--ic-stepper-compact-step-completed-text)}.compact-step-disabled :is(.heading,.step-status){color:var(--ic-stepper-compact-step-requirement-text-disabled)}.step-num{color:var(--ic-stepper-compact-step-stage-text);white-space:nowrap}:host(.ic-step-compact) .step-icon{margin:var(--ic-space-xxxs)}:host(.ic-step-compact) .step-icon svg{width:var(--ic-space-md);height:var(--ic-space-md)}:host(.ic-step-default) .step{flex-direction:column}:host(.ic-step-default.last-step){flex-grow:initial}.step-top{display:flex;width:100%;align-items:center;align-self:flex-start;height:2.5rem}:host(.ic-step-default) .step-icon{border-radius:50%}:host(.ic-step-default) .step-icon{background-color:var(--ic-step-number-inactive)}.step-icon-inner{width:var(--ic-space-xl);height:var(--ic-space-xl);display:flex;justify-content:center;align-items:center;border-radius:50%;color:var(--ic-step-number-text-inactive)}:host(.ic-step-default) .current{color:var(--ic-status-info-default)}:host(.ic-step-default.ic-step-light) .current,:host(.ic-step-default.ic-step-light) .current .heading-area{color:var(--ic-status-info-contrast)}:host(.ic-step-default) .heading-area{margin:var(--ic-space-xs) 0;padding-right:var(--ic-space-xs);width:100%}:host(.ic-step-light) .heading-area{color:var(--ic-architectural-200)}:host(.ic-step-compact.ic-step-light) .heading-area{color:var(--ic-architectural-white)}:host(.ic-step-default) .heading,.subheading{width:-moz-fit-content;width:fit-content}.heading{color:var(--ic-step-title)}.current .heading{color:var(--ic-step-title-current)}.completed .heading{color:var(--ic-step-title-success)}.disabled .heading{color:var(--ic-step-title-disabled)}.subheading{color:var(--ic-step-title-status-text-inactive)}.current .subheading{color:var(--ic-step-title-status-text-current)}.disabled .subheading{color:var(--ic-step-title-status-text-disabled)}:host(.ic-step-default) .completed{color:var(--ic-status-success-default)}:host(.ic-step-default.ic-step-light) .completed,:host(.ic-step-default.ic-step-light) .completed .heading-area{color:var(--ic-status-success-contrast)}.active .step-icon-inner{box-shadow:inset var(--ic-step-number-inactive-outline) 0 0 0 0.125rem}:host(.ic-step-light) .active .step-icon-inner{color:var(--ic-architectural-white)}.current .step-icon-inner{background-color:var(--ic-step-number-background-active);color:var(--ic-step-number-text)}.disabled{color:var(--ic-architectural-200)}:host(.ic-step-default.ic-step-light) .disabled,:host(.ic-step-default.ic-step-light) .disabled .heading-area{color:var(--ic-architectural-400)}.disabled .step-icon-inner{border:var(--ic-border-width) dashed var(--ic-step-number-disabled);width:calc(var(--ic-space-xl) - var(--ic-space-xxxs));height:calc(var(--ic-space-xl) - var(--ic-space-xxxs));color:var(--ic-step-number-text-disabled)}.disabled .step-icon{background-color:transparent !important}.completed .step-icon-inner{background:var(--ic-step-number-background-success);box-shadow:inset var(--ic-step-number-background-success) 0 0 0\n    var(--ic-space-xxxs);border-radius:100%}:host(.ic-step-default) .current .step-icon{border:var(--ic-space-xxxs) solid var(--ic-step-number-current-outline);padding:var(--ic-space-xxxs);margin:0 calc(-1 * var(--ic-space-xxxs));background-color:var(--ic-step-number-current-outer-fill);}.step-connect{height:var(--ic-space-xxxs);background-color:var(--ic-stepper-connector-remaining-status);margin:0 var(--ic-space-xs);border-radius:var(--ic-space-xxs);width:100%}.aligned-full-width.step-connect{min-width:6.25rem;width:100%}.disabled .step-connect{height:0;background-color:rgb(0 0 0 / 0%);border-top:0.125rem dashed var(--ic-stepper-connector-disabled);border-radius:0}.completed .step-connect{background-color:var(--ic-stepper-connector-success)}.step-connect-inner{width:70%;display:flex;flex:auto;height:var(--ic-space-xxxs);border-radius:var(--ic-space-xxs);background-color:var(--ic-stepper-connector-current-status)}.step-icon-inner .check-icon{padding-top:var(--ic-space-xxs)}.step-icon-inner .check-icon svg{width:var(--ic-space-md);height:auto}.step-icon-inner .check-icon>svg>path{fill:var(--ic-step-number-icon-success)}@media (forced-colors: active){.compact-step-disabled :is(.heading,.step-status){color:GrayText}.step-connect:not(.disabled .step-connect){border:var(--ic-border-hc)}.active .step-icon-inner,.completed .step-icon-inner,.current .step-icon-inner{forced-color-adjust:none;box-shadow:inset canvastext 0 0 0 0.125rem;background-color:transparent;color:canvastext}:host(.ic-step-default) .current .step-icon{padding:0;border:none}.disabled,.disabled .heading-area,.disabled .step-icon-inner,.disabled .heading{color:GrayText}.step-connect-inner,.completed .step-connect{background-color:canvastext}.step-icon-inner .check-icon>svg>path{fill:canvastext}}"}}]);