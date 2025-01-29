"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[8648],{"./dist/esm/ic-top-navigation.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_top_navigation:()=>TopNavigation});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-56c75bf4.js");const TopNavigation=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icNavigationMenuClosed=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icNavigationMenuClosed",7),this.icNavigationMenuOpened=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icNavigationMenuOpened",7),this.icTopNavResized=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icTopNavResized",7),this.hasAppIcon=!1,this.hasIconButtons=!1,this.hasNavigation=!1,this.hasSearchSlotContent=!1,this.resizeObserver=null,this.searchBar=null,this.checkSlots=()=>{this.hasAppIcon=(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"app-icon"),this.hasNavigation=(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"navigation"),this.hasIconButtons=(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"buttons"),this.hasSearchSlotContent=(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"search")},this.initialiseSearchBar=()=>{if(this.hasSearchSlotContent){const slot=(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.K)(this.el,"search");"IC-SEARCH-BAR"===(null==slot?void 0:slot.tagName)?this.searchBar=slot:"FORM"===(null==slot?void 0:slot.tagName)&&(this.searchBar=slot.querySelector("ic-search-bar")),null!==this.searchBar&&(this.searchBar.hideLabel=!0)}},this.menuButtonClick=()=>{this.showNavMenu(!0)},this.searchButtonMouseDownHandler=()=>{this.searchButtonClick=!0},this.searchButtonClickHandler=()=>{this.toggleSearchBar(),this.searchButtonClick=!1},this.resizeObserverCallback=currSize=>{currSize!==this.deviceSize&&(this.deviceSize=currSize,currSize>this.customMobileBreakpoint&&(this.showNavMenu(!1),this.mobileSearchBarVisible&&this.toggleSearchBar()),this.icTopNavResized.emit({size:currSize}),this.searchBar&&document.activeElement===this.searchBar&&(this.searchBar.setAttribute("hidden","true"),this.searchBar.removeAttribute("hidden"),setTimeout((()=>{this.searchBar.focus()}),100)))},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.resizeObserverCallback((0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.e)())})),this.resizeObserver.observe(this.el)},this.deviceSize=_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.foregroundColor=(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.g)(),this.hasFullWidthSearchBar=!1,this.mobileSearchBarVisible=!1,this.mobileSearchHiddenOnBlur=!1,this.navMenuVisible=!1,this.searchButtonClick=!1,this.searchValue="",this.contentAligned="full-width",this.customMobileBreakpoint=_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.D.L,this.href="/",this.inline=!1,this.shortAppTitle="",this.status="",this.theme="inherit",this.version="",this.appTitle=void 0}watchPropHandler(newValue,oldValue){(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.o)(oldValue,newValue,this.initialiseSearchBar)}disconnectedCallback(){var _a;null===(_a=this.resizeObserver)||void 0===_a||_a.disconnect()}componentWillLoad(){this.checkSlots(),this.deviceSize=(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.e)(),this.initialiseSearchBar()}componentDidLoad(){(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),!(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"app-title")&&(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.appTitle,propName:"app-title"}],"Top Navigation")}componentWillRender(){this.checkSlots()}navBarMenuCloseHandler(){this.showNavMenu(!1),this.el.shadowRoot.querySelector("#menu-button").focus()}searchInputBlurHandler({detail}){null!==detail&&(this.mobileSearchBarVisible&&!this.searchButtonClick&&this.toggleSearchBar(),this.searchValue=detail.value)}searchValueChangeHandler({detail}){this.searchValue=detail.value}brandChangeHandler({detail}){this.foregroundColor=detail.mode}toggleSearchBar(){this.mobileSearchBarVisible=!this.mobileSearchBarVisible,null!==this.searchBar&&(this.mobileSearchButtonEl.setAttribute("aria-label",(this.mobileSearchBarVisible?"Hide":"Show")+" search"),this.hasFullWidthSearchBar=this.mobileSearchBarVisible,this.searchBar.fullWidth=this.mobileSearchBarVisible,this.mobileSearchBarVisible&&setTimeout((()=>{this.searchBar.focus()}),100))}showNavMenu(show){this.navMenuVisible=show,(show?this.icNavigationMenuOpened:this.icNavigationMenuClosed).emit(),document.body.style.height=show?"100%":"auto",document.body.style.overflow=show?"hidden":"auto"}render(){const{appTitle,contentAligned,customMobileBreakpoint,deviceSize,el,foregroundColor,hasAppIcon,hasFullWidthSearchBar,hasIconButtons,hasNavigation,hasSearchSlotContent,href,inline,menuButtonClick,mobileSearchBarVisible,navMenuVisible,searchButtonClickHandler,searchButtonMouseDownHandler,shortAppTitle,status,version,theme}=this,hasStatus=""!==status,hasVersion=""!==version,hasMenuContent=hasNavigation||hasIconButtons||hasStatus||hasVersion,searchButtonSize=deviceSize<=_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.D.S?"medium":"large",hasTitle=""!==appTitle&&(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.d)(appTitle),overMobileBreakpoint=deviceSize<=customMobileBreakpoint,appTitleVariant=overMobileBreakpoint?deviceSize<=_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.D.S?"subtitle-small":"h4":"h3",mobileSearchButtonTitle=(mobileSearchBarVisible?"Hide":"Show")+" search",menuSize=deviceSize<=_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.D.S?"small":"medium",shortAppTitleSlot=(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"short-app-title"),hasAppTitleSlot=(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.i)(el,"app-title"),Component=hasAppTitleSlot?"div":"a",attrs="a"==Component&&{href};return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"fullwidth-searchbar":hasFullWidthSearchBar,"mobile-mode":overMobileBreakpoint,[_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark]:foregroundColor===_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark,[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"top-navigation"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{aligned:contentAligned,"full-height":!0},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("header",{role:"banner"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"top-panel-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-details-container"},(hasTitle||hasAppTitleSlot)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(Component,Object.assign({class:"title-link"},attrs),hasAppIcon&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-icon-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"app-icon"})),deviceSize<=_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.D.S&&(!(0,_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.F)(shortAppTitle)||shortAppTitleSlot)?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small","aria-label":(!hasAppTitleSlot||!shortAppTitleSlot)&&`${appTitle} (${shortAppTitle})`},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",null,shortAppTitleSlot?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"short-app-title"}):shortAppTitle)):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:appTitleVariant},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",{class:"title-wrap"},hasAppTitleSlot?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"app-title"}):appTitle))),hasStatus&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-status"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{"aria-label":"app tag",variant:"label-uppercase",class:"app-status-text"},status)),hasVersion&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-version"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label",class:"app-version-text","aria-label":"app version"},version))),(hasSearchSlotContent||hasMenuContent)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-menu-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-actions-container"},!overMobileBreakpoint&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"search"}),hasSearchSlotContent&&overMobileBreakpoint&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"search-toggle-button",ref:el=>this.mobileSearchButtonEl=el,onMouseDown:searchButtonMouseDownHandler,variant:"icon-tertiary",monochrome:!0,size:searchButtonSize,"aria-label":mobileSearchButtonTitle,theme:foregroundColor==_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.I.Light?_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark:_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.I.Light,onClick:searchButtonClickHandler},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"toggle-icon"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#ffffff"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))),hasIconButtons&&!overMobileBreakpoint&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-buttons-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"buttons"})),hasMenuContent&&overMobileBreakpoint&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"menu-button-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"navigation-landmark-button-text",class:"navigation-landmark-button-text","aria-hidden":"true"},"Main navigation button"),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-labelledby":"navigation-landmark-button-text","aria-hidden":`${navMenuVisible}`},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"menu-button",theme:foregroundColor==_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.I.Light?_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark:_helpers_56c75bf4_js__WEBPACK_IMPORTED_MODULE_1__.I.Light,variant:"secondary",monochrome:!0,"aria-expanded":"false","aria-haspopup":"true","aria-label":`Open ${hasNavigation?"navigation":"app"} menu`,size:menuSize,onClick:menuButtonClick},"Menu",(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",slot:"left-icon"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))))))),mobileSearchBarVisible&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-bar-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"search"})),hasNavigation&&!overMobileBreakpoint&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"navigation-tabs"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"navigation-landmark-text",class:"navigation-landmark-text","aria-hidden":"true"},"Main pages"),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-labelledby":"navigation-landmark-text",class:"nav-panel-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-horizontal-scroll",{monochrome:!0,appearance:foregroundColor},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"navigation-item-list",tabindex:"-1"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"navigation"})))))))),navMenuVisible&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-navigation-menu",{version,status,class:{inline}},hasIconButtons&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"menu-buttons-slot",slot:"buttons"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"buttons"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{slot:"navigation"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"navigation"}))))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{appTitle:["watchPropHandler"]}}};TopNavigation.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;color:var(--ic-top-navigation-text);width:100%;position:relative;--ic-typography-color:var(--ic-top-navigation-text);--ic-button-secondary-text-monochrome:var(--ic-brand-text-color);--ic-button-secondary-border-monochrome:var(--ic-brand-text-color)}:host(.dark){color:var(--ic-color-text-primary-light);--ic-typography-color:var(--ic-color-text-primary-light);--ic-top-navigation-logo:var(--ic-color-icon-neutral);--ic-top-navigation-icon:var(--ic-color-icon-neutral);--ic-top-navigation-theme:var(--ic-color-icon-neutral);--ic-top-navigation-status-tag:var(--ic-color-background-primary-dark);--ic-top-navigation-status-tag-text:var(--ic-color-brand-text);--ic-top-navigation-status-tag-secondary:var(--ic-state-layer-darken-10);--navigation-link-colour:var(--ic-color-text-primary-light)}:host ::slotted(ic-navigation-item){--navigation-link-colour:var(--ic-top-navigation-text)}:host(.dark) ::slotted(ic-navigation-button){--ic-button-icon-monochrome:var(--ic-color-text-primary-light)}::slotted(ic-navigation-button){--ic-button-icon-monochrome:white}:host .top-navigation{background-color:var(--ic-top-navigation-background);height:-moz-max-content;height:max-content}:host(.fullwidth-searchbar) slot[name="search"]::slotted(form){width:100%}:host .title-link{display:inline-flex;align-items:center;text-decoration:none;padding:var(--ic-space-xxs);transition:var(--ic-easing-transition-fast)}:host .title-link,:host .title-link:visited,:host .title-link:active,:host .title-link ::slotted(a),:host .title-link:visited ::slotted(a),:host .title-link:active ::slotted(a){color:var(--ic-top-navigation-icon-and-label);text-decoration:none;outline:none}:host .title-link:hover:not(:focus){background-color:var(--ic-top-navigation-title-hover)}:host .title-link:active:not(:focus){background-color:var(--ic-top-navigation-title-pressed)}:host .title-link:hover{border-radius:var(--ic-border-radius)}:host .title-link:focus,:host .title-link:focus-within{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline)}:host .title-link ic-typography{font-weight:600}:host .nav-panel-container{border-top:var(--ic-space-1px) solid var(--ic-top-navigation-keyline);padding:0 var(--ic-space-lg);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin));display:flex}:host(.dark) .nav-panel-container{border-top:var(--ic-border-keyline-darken)}.top-panel-container{display:flex;padding-top:0.5rem;padding-bottom:0.5rem}.navigation-tabs{margin-top:calc(-1 * var(--ic-space-1px))}.app-details-container{display:flex;align-items:center;flex:1 1 auto;margin-right:var(--ic-space-md)}.app-icon-container{display:flex;padding-right:var(--ic-space-xs)}.icon-buttons-container{display:flex;margin-left:var(--ic-space-md)}.icon-buttons-container ::slotted(nav){display:flex}.title-wrap{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}:host .app-status{border-radius:var(--ic-space-md);background-color:var(--ic-top-navigation-status-tag);color:var(--ic-top-navigation-status-tag-text);--ic-typography-color:var(--ic-top-navigation-status-tag-text);padding:var(--ic-space-xxs) var(--ic-space-lg);margin-left:var(--ic-space-md);flex:1 1 0;max-width:-moz-fit-content;max-width:fit-content}:host .app-version{border-radius:var(--ic-space-md);background-color:var(--ic-top-navigation-status-tag-secondary);color:var(--ic-top-navigation-status-tag);padding:var(--ic-space-xxs) var(--ic-space-sm);margin-left:var(--ic-space-xs);flex:1 1 0;max-width:-moz-fit-content;max-width:fit-content}slot[name="app-icon"]::slotted(*){fill:var(--ic-top-navigation-logo);width:2em;height:2em}slot[name="toggle-icon"] svg{fill:var(--ic-top-navigation-icon)}.search-menu-container{justify-content:right;display:flex;align-items:center}.menu-button-container{margin-left:var(--ic-space-md)}.menu-button-container .navigation-landmark-button-text{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}.search-actions-container{display:flex}.menu-buttons-slot{display:flex;flex-direction:column}.navigation-landmark-text{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}.navigation-item-list{display:flex;list-style:none;height:2.75rem}.navigation-item-list::-webkit-scrollbar{display:none}:host ic-section-container{padding-bottom:0 !important;padding-top:0 !important}@media screen and (min-width: 993px){.app-details-container{margin-right:var(--ic-space-lg)}}@media screen and (max-width: 1200px){:host .nav-panel-container{padding:0 var(--ic-space-md)}}:host(.mobile-mode) .app-status,:host(.mobile-mode) .app-version{display:none}:host(.mobile-mode) .title-link{margin-right:var(--ic-space-xs)}:host(.mobile-mode) .search-menu-container{max-width:10rem}:host(.mobile-mode) .search-bar-container{display:flex;justify-content:center;align-items:center;border-top:var(--ic-border-keyline-darken);height:4rem;padding-left:var(--ic-space-md);padding-right:var(--ic-space-md);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin))}@media screen and (max-width: 576px){:host .title-link{margin-right:var(--ic-space-xxxs);word-break:break-word;-webkit-hyphens:none;hyphens:none}.top-panel-container{min-height:2.5rem}.search-bar-container{margin-top:0;height:3.5rem;padding-left:var(--ic-space-xs);padding-right:var(--ic-space-xs)}.menu-button-container{margin-left:var(--ic-space-sm)}slot[name="app-icon"]::slotted(*){width:1.5em;height:1.5em}slot[name="toggle-icon"] svg{width:1.5em;height:1.5em}}@media (forced-colors: active){:host .top-navigation{border-bottom:var(--ic-border-hc)}.app-status,.app-version{border:var(--ic-border-hc)}slot[name="app-icon"]::slotted(*){fill:currentcolor}slot[name="toggle-icon"] svg{fill:currentcolor}}'}}]);