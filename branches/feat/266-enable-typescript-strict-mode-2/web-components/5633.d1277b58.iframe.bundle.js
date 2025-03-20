"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5633],{"./dist/esm/ic-stepper.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_stepper:()=>Stepper});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-fbdb1310.js");const Stepper=class{constructor(hostRef){var _a;(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.resizeObserver=null,this.visuallyHidden="visually-hidden",this.getChildren=()=>{this.steps=Array.from(this.el.querySelectorAll("ic-step")),this.stepsWithStepTitles=Array.from(this.el.querySelectorAll("ic-step[heading]"))},this.checkStepTitles=()=>{this.stepsWithStepTitles.length<this.steps.length&&this.variantOverride&&"compact"===this.variant&&(this.noOfResizes=this.noOfResizes+1,1===this.noOfResizes&&console.error("The prop 'heading' is required for all steps of the Stepper component (compact variant)"))},this.setStepTypes=()=>{this.getChildren(),this.stepTypes=[];for(let i=0;i<this.steps.length;i++)this.stepTypes.push("active")},this.setStepperWidth=()=>{this.alignedFullWidth="default"===this.variant&&"full-width"===this.aligned;const lastStep=this.steps[this.steps.length-1];lastStep.style.maxWidth="none",this.alignedFullWidth&&(this.stepperWidth=this.el.offsetWidth,lastStep.style.maxWidth=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.L)(this.stepperWidth/this.steps.length+"px"),this.lastStepWidth=lastStep.offsetWidth)},this.initialiseStepStates=()=>{this.steps.forEach(((step,index)=>{var _a,_b,_c;step.variant=this.variant,step.stepNum=index+1,step.lastStep=index===this.steps.length-1,step.lastStepNum=this.steps.length,"current"!==step.type?(step.current=!1,this.stepTypes[index]=step.type):step.current=!0;const stepTitleArea=step.shadowRoot&&step.shadowRoot.querySelector(".step > .heading-area");if(0==this.stepsWithStepTitles.length&&this.variantOverride&&("compact"===this.variant&&(this.autoSetStepTitles=!0,this.autoSetStepTitles&&(step.heading="Step "+step.stepNum,stepTitleArea&&(null===(_a=null==stepTitleArea?void 0:stepTitleArea.querySelector(".heading"))||void 0===_a||_a.setAttribute("aria-hidden","true")))),"default"===this.variant&&(this.autoSetStepTitles=!1,this.autoSetStepTitles||(step.heading=void 0,stepTitleArea&&(null===(_b=null==stepTitleArea?void 0:stepTitleArea.querySelector(".heading"))||void 0===_b||_b.removeAttribute("aria-hidden"))))),"compact"===this.variant&&(!0===step.current||"current"===step.type?(step.classList.remove("hide"),step.classList.add("show")):step.classList.contains("show")&&(step.classList.remove("show"),step.classList.add("hide")),step.lastStep?step.lastStep&&"completed"!==this.stepTypes[index]?step.progress=95:step.progress=100:(step.nextStepHeading=this.steps[index+1].heading,step.progress=step.stepNum/this.steps.length*100),this.hideStepInfo&&null!==stepTitleArea&&stepTitleArea.classList.remove(this.visuallyHidden),step.compactStepStyling=this.stepTypes[index]),"default"===this.variant){if(step.lastStep?step.lastStep&&(step.classList.add("last-step"),this.alignedFullWidth?step.style.maxWidth=`${this.lastStepWidth}px`:this.connectorWidth&&(step.style.maxWidth=this.connectorWidth>100?(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.L)(`${this.connectorWidth+48}px`):(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.L)("148px"))):this.alignedFullWidth&&void 0!==this.stepperWidth&&(step.style.width=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.L)((this.stepperWidth-this.lastStepWidth)/(this.steps.length-1)+"px"),step.style.minWidth=(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.L)("148px")),"left"===this.aligned&&this.connectorWidth){step.style.width=this.connectorWidth>100?(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.L)(`${this.connectorWidth+48}px`):(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.L)("148px");const stepConnect=null===(_c=step.shadowRoot)||void 0===_c?void 0:_c.querySelector(".step > .step-top > .step-connect");stepConnect&&(stepConnect.style.width=this.connectorWidth>100?(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.L)(`${this.connectorWidth}px`):(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.L)("100px"))}this.hideStepInfo&&null!==stepTitleArea&&stepTitleArea.classList.add(this.visuallyHidden)}}))},this.setHideStepInfo=()=>{this.steps.forEach((step=>{var _a,_b,_c;const stepTitleArea=null===(_a=step.shadowRoot)||void 0===_a?void 0:_a.querySelector(".step > .heading-area");stepTitleArea&&(this.hideStepInfo?null===(_b=stepTitleArea.classList)||void 0===_b||_b.add(this.visuallyHidden):null===(_c=stepTitleArea.classList)||void 0===_c||_c.remove(this.visuallyHidden))}))},this.overrideVariant=()=>{if(this.variantOverride){let minDefaultStepperWidth=148*this.steps.length;"left"===this.aligned&&this.connectorWidth&&this.connectorWidth>100&&(minDefaultStepperWidth=(this.connectorWidth+48)*this.steps.length),this.el.clientWidth<minDefaultStepperWidth?this.variant="compact":this.variant="default"}},this.resizeObserverCallback=()=>{this.getChildren(),this.checkStepTitles(),this.overrideVariant(),this.setStepperWidth(),this.initialiseStepStates(),this.handleThemeChange()},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.resizeObserverCallback()})),this.resizeObserver.observe(this.el)},this.alignedFullWidth=!0,this.autoSetStepTitles=!0,this.lastStepWidth=0,this.noOfResizes=0,this.stepperWidth=null===(_a=document.querySelector("ic-stepper"))||void 0===_a?void 0:_a.getBoundingClientRect().width,this.stepTypes=[],this.variantOverride="compact"!==this.variant,this.aligned="full-width",this.connectorWidth=100,this.hideStepInfo=!1,this.theme="inherit",this.variant="default"}handleThemeChange(){this.getChildren(),this.steps.forEach((step=>{step.theme=this.theme}))}handlePropChange(){this.setHideStepInfo(),this.getChildren()}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}componentWillLoad(){this.setStepTypes(),this.handleThemeChange(),"compact"===this.variant&&(this.variantOverride=!1)}componentWillRender(){this.initialiseStepStates()}componentDidLoad(){(0,_helpers_fbdb1310_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver)}render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-stepper-${this.variant}`]:!0,"ic-stepper-aligned-left":"default"===this.variant&&"left"===this.aligned,[`ic-theme-${this.theme}`]:"inherit"!==this.theme}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"step-item-list"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{theme:["handleThemeChange"],hideStepInfo:["handlePropChange"],variant:["handlePropChange"]}}};Stepper.style=":host{display:flex;width:100%}.step-item-list{display:flex;margin:0;padding:0}:host(.ic-stepper-default:not(.ic-stepper-aligned-left)) .step-item-list{flex:auto}:host(.ic-stepper-compact) ul ::slotted(ic-step){display:none}:host(.ic-stepper-compact) ul ::slotted(ic-step.show){display:flex}:host(.ic-stepper-compact) ul ::slotted(ic-step.hide){display:none;opacity:0;visibility:hidden}"}}]);