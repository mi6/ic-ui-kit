"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4181],{"./dist/esm/ic-typography.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_typography:()=>Typography});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_78f627e1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-78f627e1.js");const Typography=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.typographyTruncationExpandToggle=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"typographyTruncationExpandToggle",7),this.focusBtnFromKeyboard=!0,this.inAGGrid=!1,this.lastMarkerTop=0,this.lastWidth=0,this.resizeObserver=null,this.truncatedHeight=0,this.toggleExpanded=ev=>{ev.stopPropagation(),this.expanded=!this.expanded,this.typographyTruncationExpandToggle.emit({expanded:this.expanded,typographyEl:this.el})},this.checkMarkerPosition=(elTop,markerTop)=>{markerTop-elTop<this.truncatedHeight?(this.truncated=!1,this.expanded=!1):this.truncated=!0},this.getElementTop=el=>el.getClientRects&&el.getClientRects()[0]?el.getClientRects()[0].top:0,this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{clearTimeout(this.resizeInterval),this.resizeInterval=window.setTimeout(this.resizeObserverCallback,50)})),this.resizeObserver.observe(this.truncWrapperEl)},this.resizeObserverCallback=()=>{if(this.lastWidth===this.el.clientWidth)return;if(0===this.truncatedHeight)return void this.checkMaxLines(this.el.clientHeight);const markerTop=this.getElementTop(this.marker);markerTop!==this.lastMarkerTop&&(this.checkMarkerPosition(this.getElementTop(this.el),markerTop),this.lastMarkerTop=markerTop,this.lastWidth=this.el.clientWidth)},this.truncButtonFocus=()=>{this.focusBtnFromKeyboard&&(this.truncButtonFocussed=!0)},this.truncButtonBlur=()=>{this.focusBtnFromKeyboard=!0,this.truncButtonFocussed=!1},this.truncButtonFocusFromMouse=()=>{this.focusBtnFromKeyboard=!1},this.truncated=!1,this.truncButtonFocussed=!1,this.applyVerticalMargins=!1,this.bold=!1,this.italic=!1,this.maxLines=void 0,this.strikethrough=!1,this.theme="inherit",this.underline=!1,this.variant="body",this.expanded=!1}watchExpandedHandler(){this.el.setAttribute("style",`--truncation-max-lines: ${this.expanded?"initial":this.maxLines}`)}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}async resetTruncation(){this.truncated&&(this.truncated=!1,this.maxLines=0,this.el.removeAttribute("max-lines"),this.expanded=!1,this.el.removeAttribute("style"))}componentDidLoad(){var _a,_b;if(("body"===this.variant||"IC-TOOLTIP"===(null===(_b=null===(_a=this.el.getRootNode())||void 0===_a?void 0:_a.host)||void 0===_b?void 0:_b.tagName))&&this.maxLines>0){const marker=document.createElement("span");marker.style.visibility="hidden",this.el.appendChild(marker),this.marker=marker,this.lastWidth=this.el.clientWidth,this.checkMaxLines(this.el.clientHeight),(0,_helpers_78f627e1_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver)}}componentWillRender(){(0,_helpers_78f627e1_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.el)&&(this.inAGGrid=!0)}async checkMaxLines(height){Math.floor(height/24)>this.maxLines&&(this.el.setAttribute("style",`--truncation-max-lines: ${this.maxLines}`),this.truncatedHeight=this.el.clientHeight,this.truncated=!0)}async setShowHideExpanded(expanded){this.expanded=expanded}render(){var _a,_b;const{variant,applyVerticalMargins,maxLines,truncated,expanded,strikethrough,underline,italic,bold,theme}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-typography-${variant}`]:!0,[`ic-typography-vertical-margins-${variant}`]:applyVerticalMargins,"ic-typography-bold":bold,"ic-typography-italic":italic,"ic-typography-strikethrough":strikethrough,"ic-typography-underline":underline,"in-ag-grid":this.inAGGrid,[`ic-theme-${theme}`]:"inherit"!==theme}},("body"===variant||"IC-TOOLTIP"===(null===(_b=null===(_a=this.el.getRootNode())||void 0===_a?void 0:_a.host)||void 0===_b?void 0:_b.tagName))&&maxLines>0?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"trunc-wrapper",ref:el=>this.truncWrapperEl=el},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),"body"===variant&&maxLines>0&&truncated&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:{"trunc-btn":!0,focus:this.truncButtonFocussed},onFocus:this.truncButtonFocus,onBlur:this.truncButtonBlur,onMouseDown:this.truncButtonFocusFromMouse,onClick:this.toggleExpanded},expanded?"See less":"See more"))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{expanded:["watchExpandedHandler"]}}};Typography.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:relative;color:var(--ic-typography-color, var(--ic-color-text-primary))}:host(.ic-typography-vertical-margins-h1){margin:0 0 var(--ic-space-xl)}:host(.ic-typography-vertical-margins-h2){margin:var(--ic-space-xxl) 0 var(--ic-space-lg)}:host(.ic-typography-vertical-margins-h3){margin:var(--ic-space-xl) 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-h4){margin:var(--ic-space-lg) 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-subtitle-large),:host(.ic-typography-vertical-margins-subtitle-small),:host(.ic-typography-vertical-margins-body),:host(.ic-typography-vertical-margins-code-large),:host(.ic-typography-vertical-margins-code-small),:host(.ic-typography-vertical-margins-code-extra-small){margin:0 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-caption),:host(.ic-typography-vertical-margins-caption-uppercase){margin:0 0 var(--ic-space-xs)}:host(.ic-typography-vertical-margins-h2:first-child),:host(.ic-typography-vertical-margins-h3:first-child),:host(.ic-typography-vertical-margins-h4:first-child){margin-top:0}:host(.ic-typography-h1){font:var(--ic-font-h1) !important}:host(.ic-typography-h2){font:var(--ic-font-h2);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-h3){font:var(--ic-font-h3)}:host(.ic-typography-h4){font:var(--ic-font-h4);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-subtitle-large){font:var(--ic-font-subtitle-large);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-subtitle-small){font:var(--ic-font-subtitle-small);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-body){font:var(--ic-font-body);letter-spacing:var(--ic-font-letter-spacing-0pt005)}:host(.ic-typography-caption){font:var(--ic-font-caption);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-caption-uppercase){font:var(--ic-font-caption);letter-spacing:var(--ic-font-letter-spacing-0pt0025);text-transform:uppercase}:host(.ic-typography-label){font:var(--ic-font-label);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-label-uppercase){font:var(--ic-font-label);letter-spacing:var(--ic-font-letter-spacing-0pt025);text-transform:uppercase}:host(.ic-typography-code-large){font:var(--ic-font-code-large);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-code-small){font:var(--ic-font-code-small);letter-spacing:var(--ic-font-letter-spacing-0pt005)}:host(.ic-typography-code-extra-small){font:var(--ic-font-code-extra-small);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-badge){font:var(--ic-font-badge);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-badge-small){font:var(--ic-font-badge-small);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-no-wrap){white-space:nowrap}:host ::slotted(h1),:host ::slotted(h2),:host ::slotted(h3),:host ::slotted(h4),:host ::slotted(h5),:host ::slotted(h6),:host ::slotted(p),:host ::slotted(label){font:inherit;letter-spacing:inherit}.trunc-wrapper{display:-webkit-box;-webkit-box-orient:vertical;line-clamp:var(--truncation-max-lines, initial);-webkit-line-clamp:var(--truncation-max-lines, initial);overflow:hidden;padding-right:var(--ellipsis-padding-right, 0)}.trunc-btn{border:none;background:none;padding:0;color:var(--ic-color-text-primary);text-decoration:underline;font-weight:var(--ic-font-weight-bold);transition:var(--ic-easing-transition-fast)}.trunc-btn:hover,.trunc-btn.focus{outline:none;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none;cursor:pointer}:host(.ic-typography-strikethrough){text-decoration:line-through}:host(.ic-typography-underline){text-decoration:underline}:host(.ic-typography-underline.ic-typography-strikethrough){text-decoration:line-through underline}:host(.ic-typography-italic){font-style:italic !important}:host(.ic-typography-bold){font-weight:var(--ic-font-weight-bold)}:host(.ic-theme-dark),:host(.ic-theme-light){--ic-typography-color:var(--ic-color-text-primary)}:host(.in-ag-grid),:host(.in-ag-grid) ::slotted(*){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports (text-underline-offset: 25%){.trunc-btn:hover,.trunc-btn.focus{text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}@media (prefers-color-scheme: dark) and (not (forced-colors: active)){:host,.trunc-btn::not(ic-tooltip){color:var(--ic-typography-color)}}'}}]);