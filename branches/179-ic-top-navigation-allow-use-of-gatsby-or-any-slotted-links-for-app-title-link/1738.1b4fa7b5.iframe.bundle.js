"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1738],{"./dist/esm/ic-top-navigation.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_top_navigation:()=>TopNavigation});__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/index-1500de1f.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/types-dd515332.js"),_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/helpers-46e5291b.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var TopNavigation=function(){function TopNavigation(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TopNavigation),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.icNavigationMenuOpened=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"icNavigationMenuOpened",7),this.icNavigationMenuClosed=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"icNavigationMenuClosed",7),this.hasAppIcon=!1,this.hasNavigation=!1,this.hasIconButtons=!1,this.hasSearchSlotContent=!1,this.searchBar=null,this.initialiseSearchBar=function(){if(_this.hasSearchSlotContent){var slot=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.F)(_this.el,"search");slot&&"IC-SEARCH-BAR"===slot.tagName?_this.searchBar=slot:slot&&"FORM"===slot.tagName&&(_this.searchBar=slot.querySelector("ic-search-bar")),null!==_this.searchBar&&(_this.searchBar.hideLabel=!0)}},this.emitTopNavResized=function(size){var event=new CustomEvent("topNavResized",{detail:{size}});_this.el.dispatchEvent(event)},this.menuButtonClick=function(){_this.showNavMenu(!0)},this.searchButtonMouseDownHandler=function(){_this.searchButtonClick=!0},this.searchButtonClickHandler=function(){_this.toggleSearchBar(),_this.searchButtonClick=!1},this.resizeObserver=null,this.resizeObserverCallback=function(currSize){currSize!==_this.deviceSize&&(_this.deviceSize=currSize,currSize>_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.L&&(_this.showNavMenu(!1),_this.mobileSearchBarVisible&&_this.toggleSearchBar()),_this.emitTopNavResized(currSize),null!==document.activeElement&&void 0!==document.activeElement&&"IC-SEARCH-BAR"===document.activeElement.tagName&&(_this.searchBar.setAttribute("hidden","true"),_this.searchBar.removeAttribute("hidden"),setTimeout((function(){_this.searchBar.setFocus()}),100)))},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){var currSize=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.g)();_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(_this.el)},this.appTitle=void 0,this.href="/",this.version="",this.status="",this.contentAligned="full-width",this.inline=!1,this.menuOpen=!1,this.deviceSize=_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.XL,this.mobileSearchBarVisible=!1,this.navMenuVisible=!1,this.searchValue="",this.mobileSearchHiddenOnBlur=!1,this.searchButtonClick=!1,this.foregroundColor=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.k)(),this.hasFullWidthSearchBar=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TopNavigation,[{key:"watchPropHandler",value:function watchPropHandler(newValue,oldValue){(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.o)(oldValue,newValue,this.initialiseSearchBar)}},{key:"navBarMenuCloseHandler",value:function navBarMenuCloseHandler(){this.showNavMenu(!1),this.el.shadowRoot.querySelector("#menu-button").setFocus()}},{key:"searchInputBlurHandler",value:function searchInputBlurHandler(ev){null!==ev.detail&&(this.mobileSearchBarVisible&&!this.searchButtonClick&&this.toggleSearchBar(),this.searchValue=ev.detail.value)}},{key:"searchValueChangeHandler",value:function searchValueChangeHandler(ev){this.searchValue=ev.detail.value}},{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.foregroundColor=theme.mode}},{key:"toggleSearchBar",value:function toggleSearchBar(){var _this2=this;this.mobileSearchBarVisible=!this.mobileSearchBarVisible,null!==this.searchBar&&(this.mobileSearchBarVisible?(this.mobileSearchButtonEl.updateAriaLabel("Hide search"),this.hasFullWidthSearchBar=!0,this.searchBar.fullWidth=!0,setTimeout((function(){_this2.searchBar.setFocus()}),100)):(this.mobileSearchButtonEl.updateAriaLabel("Show search"),this.hasFullWidthSearchBar=!1,this.searchBar.fullWidth=!1))}},{key:"showNavMenu",value:function showNavMenu(show){this.navMenuVisible=show,show?this.icNavigationMenuOpened.emit():this.icNavigationMenuClosed.emit()}},{key:"componentWillLoad",value:function componentWillLoad(){this.hasAppIcon=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"app-icon"),this.hasNavigation=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"navigation"),this.hasIconButtons=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"buttons"),this.hasSearchSlotContent=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"search"),this.deviceSize=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.g)(),this.initialiseSearchBar()}},{key:"componentWillRender",value:function componentWillRender(){this.hasNavigation=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"navigation"),this.hasSearchSlotContent=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"search"),this.hasIconButtons=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"buttons"),this.hasAppIcon=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"app-icon")}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.c)(this.runResizeObserver),!(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"router-app-title")&&(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.a)([{prop:this.appTitle,propName:"app-title"}],"Top Navigation")}},{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"render",value:function render(){var _class,_class2,_this3=this,hasMenuContent=this.hasNavigation||this.hasIconButtons||""!==this.status||""!==this.version,searchButtonSize=this.deviceSize<=_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.S?"default":"large",appTitleVariant="h3",hasTitle=""!==this.appTitle&&void 0!==this.appTitle;this.deviceSize<=_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.L&&(appTitleVariant="h4",this.deviceSize<=_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.S&&(appTitleVariant="subtitle-small"));var mobileSearchButtonTitle=this.mobileSearchBarVisible?"Hide search":"Show search",menuSize=this.deviceSize<=_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.S?"small":"default";return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class={},_class["fullwidth-searchbar"]=this.hasFullWidthSearchBar,_class[_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.I.Dark]=this.foregroundColor===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.I.Dark,_class)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"top-navigation"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-section-container",{aligned:"full-width","full-height":!0},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("header",{role:"banner"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"top-panel-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"app-details-container"},(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"router-app-title")?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"title-link"},this.hasAppIcon&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"app-icon-container","aria-hidden":"true"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"app-icon"})),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:appTitleVariant},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"router-app-title"}))):hasTitle&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("a",{class:"title-link",href:this.href},this.hasAppIcon&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"app-icon-container","aria-hidden":"true"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"app-icon"})),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:appTitleVariant},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("h1",{class:"title-wrap"},this.appTitle))),""!==this.status&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"app-status"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{"aria-label":"app tag",variant:"label-uppercase",class:"app-status-text"},this.status)),""!==this.version&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"app-version"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"label",class:"app-version-text","aria-label":"app version"},this.version))),(this.hasSearchSlotContent||hasMenuContent)&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"search-menu-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"search-actions-container"},this.deviceSize>_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.L&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"search"}),this.hasSearchSlotContent&&this.deviceSize<=_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.L&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-button",{id:"search-toggle-button",ref:function ref(el){return _this3.mobileSearchButtonEl=el},onMouseDown:this.searchButtonMouseDownHandler,variant:"icon",size:searchButtonSize,"aria-label":mobileSearchButtonTitle,appearance:this.foregroundColor,onClick:this.searchButtonClickHandler},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"toggle-icon",slot:"icon"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))),this.hasIconButtons&&this.deviceSize>_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.L&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"icon-buttons-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"buttons"})),hasMenuContent&&this.deviceSize<=_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.L&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"menu-button-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("nav",{"aria-labelledby":"navigation-landmark-text","aria-hidden":!this.hasNavigation||this.navMenuVisible?"true":"false"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-button",{id:"menu-button",appearance:this.foregroundColor,variant:"secondary","aria-expanded":this.menuOpen?"true":"false","aria-haspopup":"true","aria-label":"Open "+(this.hasNavigation?"navigation":"app")+" menu",size:menuSize,onClick:this.menuButtonClick},"Menu",(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",slot:"icon"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))))))),this.mobileSearchBarVisible&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"search-bar-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"search"})),this.hasNavigation&&this.deviceSize>_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_10__.D.L&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"navigation-tabs"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{id:"navigation-landmark-text",class:"navigation-landmark-text","aria-hidden":"true"},"Main navigation"),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("nav",{"aria-labelledby":"navigation-landmark-text",class:"nav-panel-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ul",{class:"navigation-item-list"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"navigation"}))))))),this.navMenuVisible&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-navigation-menu",{version:this.version,status:this.status,class:(_class2={},_class2.inline=this.inline,_class2)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"menu-buttons-slot",slot:"buttons"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"buttons"})),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ul",{slot:"navigation"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"navigation"}))))}},{key:"el",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}],[{key:"watchers",get:function get(){return{appTitle:["watchPropHandler"]}}}]),TopNavigation}();TopNavigation.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;color:var(--ic-theme-text);width:100%;position:relative}:host .top-navigation{background-color:var(--ic-theme-primary);height:-moz-max-content;height:max-content}:host(.fullwidth-searchbar) slot[name="search"]::slotted(form){width:100%}:host .title-link{display:inline-flex;align-items:center;text-decoration:none;padding:var(--ic-space-xxs);margin-left:calc(-1 * var(--ic-space-xxs));transition:var(--ic-easing-transition-fast)}:host .title-link,:host .title-link:visited,:host .title-link:active,:host .title-link ::slotted(a),:host .title-link:visited ::slotted(a),:host .title-link:active ::slotted(a){color:var(--ic-theme-text)}:host .title-link:hover:not(:focus){background-color:var(--ic-theme-hover)}:host .title-link:active:not(:focus){background-color:var(--ic-theme-active)}:host .title-link:hover{border-radius:var(--ic-border-radius)}:host .title-link:focus,:host .title-link:focus-within{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline)}.title-link ::slotted(a){text-decoration:none;outline:none}:host .title-link ic-typography{font-weight:600}:host .nav-panel-container{border-top:var(--ic-keyline-lighten);padding-left:var(--ic-space-lg);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin));display:flex}:host(.dark) .nav-panel-container{border-top:var(--ic-keyline-darken)}.top-panel-container{display:flex;padding-top:8px;padding-bottom:8px}.navigation-tabs{margin-top:-1px}.app-details-container{display:flex;align-items:center;flex:1 1 auto;margin-right:var(--ic-space-md)}.app-icon-container{display:flex;padding-right:var(--ic-space-xs)}.icon-buttons-container{display:flex;margin-left:var(--ic-space-md)}.icon-buttons-container ::slotted(nav){display:flex}.title-wrap{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}:host .app-status{border-radius:80px;background-color:var(--ic-architectural-white);color:var(--ic-color-primary-text);padding:var(--ic-space-xxs) var(--ic-space-lg);margin-left:var(--ic-space-md)}:host(.dark) .app-status{background-color:var(--ic-theme-text);color:var(--ic-color-white-text)}:host .app-version{border-radius:16px;background-color:var(--ic-theme-active);padding:var(--ic-space-xxs) var(--ic-space-sm);margin-left:var(--ic-space-xs)}.app-status-text,.app-version-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:96px}slot[name="app-icon"]::slotted(svg){fill:var(--ic-theme-text);width:2em;height:2em}slot[name="toggle-icon"] svg{fill:var(--ic-theme-text)}.search-menu-container{justify-content:right;display:flex;align-items:center;flex:1 auto}.menu-button-container{margin-left:var(--ic-space-md)}.search-actions-container{display:flex}.menu-buttons-slot{display:flex;flex-direction:column}.navigation-landmark-text{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden}.navigation-item-list{display:flex;list-style:none;height:44px}:host([content-aligned="left"]) .app-details-container{flex-basis:1}:host([content-aligned="left"]) .app-details-container,:host([content-aligned="left"]) .nav-panel-container,:host([content-aligned="center"]) .nav-panel-container,:host([content-aligned="left"]) .search-menu-container,:host([content-aligned="center"]) .search-menu-container{justify-content:flex-start}:host([content-aligned="center"]) .app-details-container{justify-content:flex-end}:host ic-section-container{padding-bottom:0 !important;padding-top:0 !important}@media screen and (min-width: 993px){.app-details-container{margin-right:var(--ic-space-lg)}:host([content-aligned="center"]) .top-navigation{display:flex;justify-content:center}:host([content-aligned="left"]) .top-navigation{display:flex}}@media screen and (max-width: 1200px){:host .nav-panel-container{padding-left:var(--ic-space-md)}}@media screen and (max-width: 992px){:host .nav-panel-container,:host .app-status,:host .app-version{display:none}:host .title-link{margin-right:var(--ic-space-xs)}.search-menu-container{max-width:160px}.search-bar-container{display:flex;justify-content:center;align-items:center;border-top:var(--ic-keyline-darken);height:64px;padding-left:var(--ic-space-md);padding-right:var(--ic-space-md);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin))}:host([content-aligned="left"]) .app-details-container,:host([content-aligned="left"]) .search-menu-container,:host([content-aligned="center"]) .search-menu-container,:host([content-aligned="center"]) .app-details-container{justify-content:flex-start}}@media screen and (max-width: 576px){:host .title-link{margin-right:var(--ic-space-xxxs);word-break:break-word;-webkit-hyphens:none;hyphens:none}.top-panel-container{min-height:40px}.searchbox-inline{display:none}.search-bar-container{margin-top:0;height:56px;padding-left:var(--ic-space-xs);padding-right:var(--ic-space-xs)}.menu-button-container{margin-left:var(--ic-space-sm)}slot[name="app-icon"]::slotted(svg){width:1.5em;height:1.5em}slot[name="toggle-icon"] svg{width:1.5em;height:1.5em}}@media (forced-colors: active){:host .top-navigation{border-bottom:var(--ic-hc-border)}.app-status,.app-version{border:var(--ic-hc-border)}slot[name="app-icon"]::slotted(svg){fill:currentcolor}}'}}]);