"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[9993],{"../web-components/dist/esm/ic-stepper.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_stepper:()=>Stepper});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-003f27c9.js");__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var Stepper=function(){return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function Stepper(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Stepper),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.resizeObserver=null,this.visuallyHidden="visually-hidden",this.getChildren=function(){_this.steps=Array.from(_this.el.querySelectorAll("ic-step")),_this.stepsWithStepTitles=Array.from(_this.el.querySelectorAll("ic-step[step-title]"))},this.checkStepTitles=function(){_this.stepsWithStepTitles.length<_this.steps.length&&_this.variantOverride&&"compact"===_this.variant&&(_this.noOfResizes=_this.noOfResizes+1,1===_this.noOfResizes&&console.error("The prop 'step-title' (web components) / 'stepTitle' (react) is required for all steps of the Stepper component (compact variant)"))},this.setStepTypes=function(){_this.getChildren(),_this.stepTypes=[];for(var i=0;i<_this.steps.length;i++)_this.stepTypes.push("active")},this.setStepperWidth=function(){_this.alignedFullWidth="default"===_this.variant&&"full-width"===_this.aligned;var lastStep=_this.steps[_this.steps.length-1];lastStep.style.maxWidth="none",_this.alignedFullWidth&&(_this.stepperWidth=_this.el.offsetWidth,lastStep.style.maxWidth=(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.J)("".concat(_this.stepperWidth/_this.steps.length,"px")),_this.lastStepWidth=lastStep.offsetWidth)},this.initialiseStepStates=function(){_this.steps.forEach((function(step,index){step.variant=_this.variant,step.stepNum=index+1,step.lastStep=index===_this.steps.length-1,step.lastStepNum=_this.steps.length,"current"!==step.stepType?(step.current=!1,_this.stepTypes[index]=step.stepType):step.current=!0;var stepTitleArea=step.shadowRoot&&step.shadowRoot.querySelector(".step > .step-title-area");if(0==_this.stepsWithStepTitles.length&&_this.variantOverride&&("compact"===_this.variant&&(_this.autoSetStepTitles=!0,_this.autoSetStepTitles&&(step.stepTitle="Step "+step.stepNum,stepTitleArea&&stepTitleArea.querySelector(".step-title").setAttribute("aria-hidden","true"))),"default"===_this.variant&&(_this.autoSetStepTitles=!1,_this.autoSetStepTitles||(step.stepTitle=void 0,stepTitleArea&&stepTitleArea.querySelector(".step-title").removeAttribute("aria-hidden")))),"compact"===_this.variant&&(!0===step.current||"current"===step.stepType?(step.classList.remove("hide"),step.classList.add("show")):step.classList.contains("show")&&(step.classList.remove("show"),step.classList.add("hide")),step.lastStep?step.lastStep&&"completed"!==_this.stepTypes[index]?step.progress=95:step.progress=100:(step.nextStepTitle=_this.steps[index+1].stepTitle,step.progress=step.stepNum/_this.steps.length*100),_this.hideStepInfo&&null!==stepTitleArea&&stepTitleArea.classList.remove(_this.visuallyHidden),step.compactStepStyling=_this.stepTypes[index]),"default"===_this.variant){if(step.lastStep?step.lastStep&&(step.classList.add("last-step"),_this.alignedFullWidth?step.style.maxWidth="".concat(_this.lastStepWidth,"px"):step.style.maxWidth=_this.connectorWidth>100?(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.J)("".concat(_this.connectorWidth+48,"px")):(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.J)("148px")):_this.alignedFullWidth&&(step.style.width=(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.J)("".concat((_this.stepperWidth-_this.lastStepWidth)/(_this.steps.length-1),"px")),step.style.minWidth=(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.J)("148px")),"left"===_this.aligned){step.style.width=_this.connectorWidth>100?(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.J)("".concat(_this.connectorWidth+48,"px")):(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.J)("148px");var stepConnect=step.shadowRoot.querySelector(".step > .step-top > .step-connect");stepConnect&&(stepConnect.style.width=_this.connectorWidth>100?(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.J)("".concat(_this.connectorWidth,"px")):(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.J)("100px"))}_this.hideStepInfo&&null!==stepTitleArea&&stepTitleArea.classList.add(_this.visuallyHidden)}}))},this.setHideStepInfo=function(){_this.steps.forEach((function(step){var _a,_b,stepTitleArea=step.shadowRoot.querySelector(".step > .step-title-area");null!==stepTitleArea&&(_this.hideStepInfo?null===(_a=stepTitleArea.classList)||void 0===_a||_a.add(_this.visuallyHidden):null===(_b=stepTitleArea.classList)||void 0===_b||_b.remove(_this.visuallyHidden))}))},this.overrideVariant=function(){if(_this.variantOverride){var minDefaultStepperWidth=148*_this.steps.length;"left"===_this.aligned&&_this.connectorWidth>100&&(minDefaultStepperWidth=(_this.connectorWidth+48)*_this.steps.length),_this.el.clientWidth<minDefaultStepperWidth?_this.variant="compact":_this.variant="default"}},this.resizeObserverCallback=function(){_this.getChildren(),_this.checkStepTitles(),_this.overrideVariant(),_this.setStepperWidth(),_this.initialiseStepStates()},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.resizeObserverCallback()})),_this.resizeObserver.observe(_this.el)},this.alignedFullWidth=!0,this.autoSetStepTitles=!0,this.lastStepWidth=0,this.noOfResizes=0,this.stepperWidth=document.querySelector("ic-stepper").getBoundingClientRect().width,this.stepTypes=[],this.variantOverride="compact"!==this.variant,this.aligned="full-width",this.appearance="default",this.connectorWidth=100,this.hideStepInfo=!1,this.variant="default"}),[{key:"handlePropChange",value:function handlePropChange(){this.setHideStepInfo(),this.getChildren()}},{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){this.setStepTypes(),"compact"===this.variant&&(this.variantOverride=!1)}},{key:"componentWillRender",value:function componentWillRender(){this.initialiseStepStates()}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.runResizeObserver)}},{key:"render",value:function render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty({},"".concat(this.variant),!0),"aligned-left","default"===this.variant&&"left"===this.aligned)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"step-item-list"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{hideStepInfo:["handlePropChange"],variant:["handlePropChange"]}}}])}();Stepper.style=":host{display:flex;width:100%}.step-item-list{display:flex;margin:0;padding:0}:host(.default:not(.aligned-left)) .step-item-list{flex:auto}:host(.compact) ul ::slotted(ic-step){display:none}:host(.compact) ul ::slotted(ic-step.show){display:flex}:host(.compact) ul ::slotted(ic-step.hide){display:none;opacity:0;visibility:hidden}"}}]);