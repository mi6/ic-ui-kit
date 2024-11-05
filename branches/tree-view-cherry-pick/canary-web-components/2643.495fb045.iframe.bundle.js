"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[2643],{"./dist/esm/ic-theme.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_theme:()=>Theme});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-c326255f.js");const Theme=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.themeChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"themeChange",7),this.darkModeChangeHandler=()=>{"system"===this.theme?this.themeClass=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"ic-theme-dark":"ic-theme-light":this.themeClass=`ic-theme-${this.theme}`},this.checkThemeColorContrast=()=>{(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.G)()<_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.H&&(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.G)()>_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.W&&console.warn("The theme colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.")},this.setThemeColor=()=>{const colorRGBA=(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.color);if(colorRGBA){const{r,g,b,a}=colorRGBA,{style}=document.documentElement;style.setProperty("--ic-theme-primary-r",`${r}`),style.setProperty("--ic-theme-primary-g",`${g}`),style.setProperty("--ic-theme-primary-b",`${b}`),style.setProperty("--ic-theme-primary-a",`${a}`),this.checkThemeColorContrast(),this.themeChange.emit({mode:(0,_helpers_c326255f_js__WEBPACK_IMPORTED_MODULE_1__.g)(),color:colorRGBA})}},this.themeClass="",this.color=null,this.theme="light"}watchColorPropHandler(){this.setThemeColor()}watchThemePropHandler(){this.darkModeChangeHandler()}componentWillLoad(){this.darkModeChangeHandler(),this.setThemeColor(),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.darkModeChangeHandler)}render(){const{themeClass}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:themeClass},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}static get watchers(){return{color:["watchColorPropHandler"],theme:["watchThemePropHandler"]}}}}}]);