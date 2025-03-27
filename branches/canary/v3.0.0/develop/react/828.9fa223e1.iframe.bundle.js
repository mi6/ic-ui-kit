"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[828],{"../web-components/dist/esm/ic-theme.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_theme:()=>Theme});var _index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-a7a720e7.js"),_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-de6293bf.js");const Theme=class{constructor(hostRef){(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.brandChange=(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"brandChange",7),this.themeClass="",this.brandColor=null,this.theme="light",this.darkModeChangeHandler=()=>{"system"===this.theme?this.themeClass=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"ic-theme-dark":"ic-theme-light":this.themeClass=`ic-theme-${this.theme}`},this.checkBrandColorContrast=()=>{(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.M)()<_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.N&&(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.M)()>_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.W&&console.warn("The brand colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.")},this.setBrandColor=()=>{const colorRGBA=this.brandColor?(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.brandColor):null;if(colorRGBA){const{r,g,b,a}=colorRGBA,{style}=document.documentElement;style.setProperty("--ic-brand-color-primary-r",`${r}`),style.setProperty("--ic-brand-color-primary-g",`${g}`),style.setProperty("--ic-brand-color-primary-b",`${b}`),style.setProperty("--ic-brand-color-primary-a",`${a}`),this.checkBrandColorContrast(),this.brandChange.emit({mode:(0,_helpers_de6293bf_js__WEBPACK_IMPORTED_MODULE_1__.g)(),color:colorRGBA})}}}watchBrandColorPropHandler(){this.setBrandColor()}watchThemePropHandler(){this.darkModeChangeHandler()}componentWillLoad(){this.darkModeChangeHandler(),this.setBrandColor(),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.darkModeChangeHandler)}render(){const{themeClass}=this;return(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"150b08cd6c8d10d97155b7f0869ccfdf118e4727",class:themeClass},(0,_index_a7a720e7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"40c1ae3e7ea1119db1df6b41dd16ab3d3800e6e7"}))}static get watchers(){return{brandColor:["watchBrandColorPropHandler"],theme:["watchThemePropHandler"]}}}}}]);