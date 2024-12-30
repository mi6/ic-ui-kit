"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[6112],{"../web-components/dist/esm/ic-divider.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_divider:()=>Divider});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-638db391.js");const Divider=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.foregroundColor=(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.g)(),this.borderStyle="solid",this.label=void 0,this.labelPlacement="center",this.monochrome=!1,this.orientation="horizontal",this.theme="inherit",this.weight="thin"}brandChangeHandler(ev){this.foregroundColor=ev.detail.mode}updateMonochromeState(){const isBottomSideNav=this.el.parentElement.classList.contains("bottom-side-nav"),isBottomWrapper=this.el.parentElement.parentElement.classList.contains("bottom-wrapper");("IC-SIDE-NAVIGATION"===this.el.parentElement.tagName||isBottomSideNav&&isBottomWrapper)&&(this.el.classList.add("ic-side-navigation-keyline"),"light"===this.foregroundColor?this.theme="dark":this.theme="light")}componentWillRender(){this.updateMonochromeState()}render(){const{borderStyle,label,labelPlacement,monochrome,orientation,weight}=this,{theme}=this;var placement;("left"!==labelPlacement&&"right"!==labelPlacement||"vertical"!==orientation)&&("top"!==labelPlacement&&"bottom"!==labelPlacement||"horizontal"!==orientation)||(placement=labelPlacement,console.error(`${placement.charAt(0).toUpperCase()+placement.slice(1)} label placement is not applicable for a ${orientation} ic-divider (web-components) / IcDivider (react)`));const getTypographyVariant=weight=>{switch(weight){case"very-thick":return"h4";case"thick":return"subtitle-large";default:return"label"}},renderLabel=()=>(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.el,"label")?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ic-divider-label-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"})):(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.d)(label)?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"ic-divider-label",variant:getTypographyVariant(weight)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,label)):null;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,Object.assign({class:{[`ic-theme-${theme}`]:"inherit"!==theme,"ic-divider-monochrome":monochrome,[`ic-divider-${orientation}`]:!0,[`ic-divider-${weight}`]:!0,[`ic-divider-${borderStyle}`]:!0}},("vertical"===orientation||!!renderLabel()&&!!(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.d)(labelPlacement))&&{"aria-orientation":orientation,role:"separator"}),"horizontal"===orientation&&(!renderLabel()||!(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.d)(labelPlacement))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("hr",null),!!(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.d)(labelPlacement)&&!!renderLabel()&&renderLabel(),"vertical"===orientation&&(!renderLabel()||!(0,_helpers_638db391_js__WEBPACK_IMPORTED_MODULE_1__.d)(labelPlacement))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"vertical-divider"}))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Divider.style='.ic-divider-horizontal.sc-ic-divider-h{display:flex;width:var(--ic-divider-horizontal-width, 100%);align-items:center;-moz-column-gap:var(--ic-space-xxs);column-gap:var(--ic-space-xxs)}hr.sc-ic-divider{padding:0;margin:0;border:none;border-bottom:solid var(--ic-space-1px) var(--ic-divider-background);width:inherit}.ic-divider-horizontal.sc-ic-divider-h::before,.ic-divider-horizontal.sc-ic-divider-h::after{border-left:none !important}.ic-divider-horizontal[label-placement="right"].sc-ic-divider-h::before,.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::before,.ic-divider-horizontal[label-placement="left"].sc-ic-divider-h::after,.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::after{content:"";border:none;width:100%}.ic-divider-vertical.sc-ic-divider-h{display:flex;flex-direction:column;height:var(--ic-divider-vertical-height, inherit);width:-moz-max-content;width:max-content;align-items:center;-moz-column-gap:var(--ic-space-xxs);column-gap:var(--ic-space-xxs);border:none}.ic-divider-vertical.sc-ic-divider-h div.vertical-divider.sc-ic-divider{display:flex;height:inherit}.ic-divider-vertical[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::before,.ic-divider-vertical[label-placement="top"].sc-ic-divider-h::after,.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::after{content:"";height:100%}hr.sc-ic-divider,.ic-divider-horizontal[label-placement="right"].sc-ic-divider-h::before,.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::before,.ic-divider-horizontal[label-placement="left"].sc-ic-divider-h::after,.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::after{border-bottom:solid var(--ic-space-1px) var(--ic-divider-background)}.ic-divider-monochrome.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-monochrome.ic-divider-horizontal[label-placement="right"].sc-ic-divider-h::before,.ic-divider-monochrome.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::before,.ic-divider-monochrome.ic-divider-horizontal[label-placement="left"].sc-ic-divider-h::after,.ic-divider-monochrome.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::after{border-bottom-color:var(--ic-divider-background-monochrome)}.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-divider-vertical[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::before,.ic-divider-vertical[label-placement="top"].sc-ic-divider-h::after,.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::after{border-left:solid var(--ic-space-1px) var(--ic-divider-background)}.ic-divider-monochrome.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-divider-monochrome.ic-divider-vertical[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-monochrome.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::before,.ic-divider-monochrome.ic-divider-vertical[label-placement="top"].sc-ic-divider-h::after,.ic-divider-monochrome.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::after{border-left-color:var(--ic-divider-background-monochrome)}.ic-side-navigation-keyline.ic-theme-dark.sc-ic-divider-h{--ic-side-navigation-keyline:var(--ic-state-layer-lighten-20)}.ic-side-navigation-keyline.ic-theme-light.sc-ic-divider-h{--ic-side-navigation-keyline:var(--ic-state-layer-darken-20)}.ic-side-navigation-keyline.ic-theme-dark.sc-ic-divider-h hr.sc-ic-divider,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-horizontal[label-placement="right"].sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-horizontal[label-placement="left"].sc-ic-divider-h::after,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::after{border-bottom-color:var(--ic-side-navigation-keyline)}.ic-side-navigation-keyline.ic-theme-dark.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-vertical[label-placement="bottom"].sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-vertical[label-placement="top"].sc-ic-divider-h::after,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::after{border-left-color:var(--ic-side-navigation-keyline)}.ic-side-navigation-keyline.ic-theme-light.sc-ic-divider-h hr.sc-ic-divider,.ic-side-navigation-keyline.ic-theme-light.ic-divider-horizontal[label-placement="right"].sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-light.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-light.ic-divider-horizontal[label-placement="left"].sc-ic-divider-h::after,.ic-side-navigation-keyline.ic-theme-light.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::after{border-bottom-color:var(--ic-side-navigation-keyline)}.ic-side-navigation-keyline.ic-theme-light.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-side-navigation-keyline.ic-theme-light.ic-divider-vertical[label-placement="bottom"].sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-light.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-light.ic-divider-vertical[label-placement="top"].sc-ic-divider-h::after,.ic-side-navigation-keyline.ic-theme-light.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::after{border-left-color:var(--ic-divider-background-monochrome)}.ic-divider-very-thick.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-very-thick[label-placement="right"].sc-ic-divider-h::before,.ic-divider-very-thick[label-placement="center"].sc-ic-divider-h::before,.ic-divider-very-thick[label-placement="left"].sc-ic-divider-h::after,.ic-divider-very-thick[label-placement="center"].sc-ic-divider-h::after{border-bottom-width:var(--ic-space-xs)}.ic-divider-very-thick.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-very-thick[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-very-thick[label-placement="center"].sc-ic-divider-h::before,.ic-divider-very-thick[label-placement="top"].sc-ic-divider-h::after,.ic-divider-very-thick[label-placement="center"].sc-ic-divider-h::after{border-left-width:var(--ic-space-xs)}.ic-divider-thick.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-thick[label-placement="right"].sc-ic-divider-h::before,.ic-divider-thick[label-placement="center"].sc-ic-divider-h::before,.ic-divider-thick[label-placement="left"].sc-ic-divider-h::after,.ic-divider-thick[label-placement="center"].sc-ic-divider-h::after{border-bottom-width:var(--ic-space-xxs)}.ic-divider-thick.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-thick[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-thick[label-placement="center"].sc-ic-divider-h::before,.ic-divider-thick[label-placement="top"].sc-ic-divider-h::after,.ic-divider-thick[label-placement="center"].sc-ic-divider-h::after{border-left-width:var(--ic-space-xxs)}.ic-divider-medium.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-medium[label-placement="right"].sc-ic-divider-h::before,.ic-divider-medium[label-placement="center"].sc-ic-divider-h::before,.ic-divider-medium[label-placement="left"].sc-ic-divider-h::after,.ic-divider-medium[label-placement="center"].sc-ic-divider-h::after{border-bottom-width:var(--ic-space-xxxs)}.ic-divider-medium.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-medium[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-medium[label-placement="center"].sc-ic-divider-h::before,.ic-divider-medium[label-placement="top"].sc-ic-divider-h::after,.ic-divider-medium[label-placement="center"].sc-ic-divider-h::after{border-left-width:var(--ic-space-xxxs)}.ic-divider-thin.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-thin[label-placement="right"].sc-ic-divider-h::before,.ic-divider-thin[label-placement="center"].sc-ic-divider-h::before,.ic-divider-thin[label-placement="left"].sc-ic-divider-h::after,.ic-divider-thin[label-placement="center"].sc-ic-divider-h::after{border-bottom-width:var(--ic-space-1px)}.ic-divider-thin.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-thin[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-thin.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::before,.ic-divider-thin[label-placement="top"].sc-ic-divider-h::after,.ic-divider-thin.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::after{border-left-width:var(--ic-space-1px)}.ic-divider-dashed.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-dashed[label-placement="right"].sc-ic-divider-h::before,.ic-divider-dashed[label-placement="center"].sc-ic-divider-h::before,.ic-divider-dashed[label-placement="left"].sc-ic-divider-h::after,.ic-divider-dashed[label-placement="center"].sc-ic-divider-h::after{border-bottom-style:dashed}.ic-divider-dashed.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-dashed[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-dashed[label-placement="center"].sc-ic-divider-h::before,.ic-divider-dashed[label-placement="top"].sc-ic-divider-h::after,.ic-divider-dashed[label-placement="center"].sc-ic-divider-h::after{border-left-style:dashed}.sc-ic-divider-h .ic-divider-label.sc-ic-divider{text-wrap:wrap;text-align:left;width:-moz-max-content;width:max-content;max-width:var(--ic-divider-label-width, max(20rem, 60%))}.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h .ic-divider-label.sc-ic-divider{text-align:center}.ic-divider-vertical.sc-ic-divider-h .ic-divider-label.sc-ic-divider{text-align:center}.sc-ic-divider-h .ic-divider-label-container.sc-ic-divider{width:-moz-max-content;width:max-content;max-width:var(--ic-divider-label-width, max(20rem, 60%))}.ic-divider-vertical.sc-ic-divider-h .ic-divider-label.sc-ic-divider{max-width:var(--ic-divider-label-width, 20rem)}.ic-divider-vertical.sc-ic-divider-h .ic-divider-label-container.sc-ic-divider{max-width:var(--ic-divider-label-width, 20rem)}.sc-ic-divider-h .ic-divider-label.sc-ic-divider p.sc-ic-divider{width:-moz-max-content;width:max-content;max-width:100%}.sc-ic-divider-h .ic-divider-label.sc-ic-divider,.sc-ic-divider-h.sc-ic-divider-s>*,.sc-ic-divider-h .sc-ic-divider-s>*{color:var(--ic-divider-label)}.ic-divider-monochrome.sc-ic-divider-h .ic-divider-label.sc-ic-divider,.sc-ic-divider-h.ic-divider-monochrome.sc-ic-divider-s>*,.sc-ic-divider-h.ic-divider-monochrome .sc-ic-divider-s>*{color:var(--ic-divider-label-monochrome)}@media (forced-colors: active){hr.sc-ic-divider,.ic-divider-horizontal[label-placement="right"].sc-ic-divider-h::before,.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::before,.ic-divider-horizontal[label-placement="left"].sc-ic-divider-h::after,.ic-divider-horizontal[label-placement="center"].sc-ic-divider-h::after{border-bottom-color:transparent}.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-divider-vertical[label-placement="bottom"].sc-ic-divider-h::before,.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::before,.ic-divider-vertical[label-placement="top"].sc-ic-divider-h::after,.ic-divider-vertical[label-placement="center"].sc-ic-divider-h::after{border-left-color:transparent}}'}}]);