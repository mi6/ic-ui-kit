"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[5577],{"../canary-web-components/dist/esm/chevron-icon-875b7af2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});const Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../canary-web-components/dist/esm/close-icon-c9e09475.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});const closeIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"../canary-web-components/dist/esm/ic-side-navigation.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_side_navigation:()=>SideNavigation});var _index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-163fe708.js"),_close_icon_c9e09475_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../canary-web-components/dist/esm/close-icon-c9e09475.js"),_chevron_icon_875b7af2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../canary-web-components/dist/esm/chevron-icon-875b7af2.js"),_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-bbab69a2.js");const SideNavigation=class{constructor(hostRef){(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icSideNavExpanded=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icSideNavExpanded",7),this.ANIMATION_DURATION=parseInt((0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.z)("--ic-transition-duration-slow"))||0,this.IC_NAVIGATION_ITEM="ic-navigation-item",this.resizeObserver=null,this.COLLAPSED_ICON_LABELS_END="collapsed-icon-labels-end",this.COLLAPSED_ICON_LABELS_START="collapsed-icon-labels-start",this.deviceSize=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.e)(),this.deviceSizeAppTitle=_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.S,this.foregroundColor=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.g)(),this.hasSecondaryNavigation=!1,this.menuExpanded=!1,this.menuOpen=!1,this.collapsedIconLabels=!1,this.disableAutoParentStyling=!1,this.disableTopBarBehaviour=!1,this.expanded=!1,this.href="/",this.inline=!1,this.shortAppTitle="",this.static=!1,this.emitSideNavigationExpanded=objDetails=>{this.icSideNavExpanded.emit({sideNavExpanded:objDetails.sideNavExpanded,sideNavMobile:!!objDetails.sideNavMobile})},this.toggleMenu=()=>{this.menuOpen=!this.menuOpen,this.setMobileMenuAriaAttributes(this.menuOpen),this.arrangeSlottedNavigationItem(this.menuOpen),this.setToggleMenuFlyoutMenuVisibility(this.menuOpen),this.emitSideNavigationExpanded({sideNavExpanded:this.menuOpen,sideNavMobile:!0})},this.setToggleMenuFlyoutMenuVisibility=menuOpen=>{var _a;const sideNav=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector("#side-navigation"),sideNavInner=sideNav.querySelector(".side-navigation-inner"),bottomWrapper=sideNav.querySelector(".bottom-wrapper");menuOpen?(bottomWrapper.classList.add("menu-visibility-visible"),sideNavInner.classList.add("menu-visibility-visible")):setTimeout((()=>{sideNavInner.classList.remove("menu-visibility-visible"),bottomWrapper.classList.remove("menu-visibility-visible")}),this.ANIMATION_DURATION)},this.setMobileMenuAriaAttributes=menuOpen=>{this.menuButton&&(this.menuButton.setAttribute("aria-expanded",`${menuOpen}`),this.menuButton.setAttribute("aria-label",(menuOpen?"Close":"Open")+" navigation menu"))},this.setAndRemoveNoWrapAfterMenuExpanded=()=>{var _a;const appTitle=(null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(".title-link ic-typography"))||this.el.querySelector("[slot='app-title']");null==appTitle||appTitle.classList.add("ic-typography-no-wrap"),setTimeout((()=>{null==appTitle||appTitle.classList.remove("ic-typography-no-wrap")}),this.ANIMATION_DURATION)},this.toggleMenuExpanded=expanded=>{var _a,_b,_c,_d;this.deviceSize>_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.S&&(this.menuExpanded=expanded),this.menuExpanded?(this.setAndRemoveNoWrapAfterMenuExpanded(),null===(_b=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(".app-title-inner-wrapper"))||void 0===_b||_b.classList.add("app-title-show")):(this.el.style.setProperty("--navigation-item-width","320px"),null===(_d=null===(_c=this.el.shadowRoot)||void 0===_c?void 0:_c.querySelector(".app-title-inner-wrapper"))||void 0===_d||_d.classList.remove("app-title-show"),this.el.addEventListener("transitionend",(e=>{"width"===e.propertyName&&this.el.style.setProperty("--navigation-item-width",null)}))),this.arrangeSlottedNavigationItem(this.menuExpanded),this.displayTooltipWithExpandedLongLabel(this.menuExpanded),this.collapsedIconLabels&&this.animateCollapsedIconLabels(),this.setExpandedButtonHeight(),this.emitSideNavigationExpanded({sideNavExpanded:this.menuExpanded})},this.arrangeSlottedNavigationItem=menuExpanded=>{this.el.querySelectorAll("ic-navigation-item").forEach((navItem=>{var _a;const isNamedSlot=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(navItem,"navigation-item"),isUnnamedSlot=navItem.children[0]&&!navItem.children[0].getAttribute("slot");if(isNamedSlot||isUnnamedSlot){let navItemSlot;navItemSlot=isNamedSlot?navItem.querySelector("[slot='navigation-item']"):navItem.children[0];const iconWrapper=document.createElement("div"),icon=null==navItemSlot?void 0:navItemSlot.querySelector("svg"),badge=null==navItemSlot?void 0:navItemSlot.querySelector("ic-badge"),label=null===(_a=navItem.textContent)||void 0===_a?void 0:_a.trim(),icTypography=document.createElement("ic-typography");icTypography.classList.add("ic-typography-label","hydrated","navigation-item-side-nav-slotted-text"),iconWrapper.style.position="relative",iconWrapper.style.height="var(--ic-space-lg)",icon&&iconWrapper.append(icon),badge&&iconWrapper.append(badge),label&&(icTypography.textContent=label),navItemSlot&&(navItemSlot.textContent="",navItemSlot.append(iconWrapper),navItemSlot.append(icTypography)),this.collapsedIconLabels?this.styleSlottedCollapsedIconLabels(!!menuExpanded,icTypography):this.styleSlottedIconLabels(!!menuExpanded,icTypography)}}))},this.styleSlottedCollapsedIconLabels=(menuExpanded,icTypography)=>{menuExpanded?(icTypography.style.marginTop="0",icTypography.style.whiteSpace="nowrap",icTypography.style.overflow="hidden",icTypography.style.textOverflow="ellipsis"):(icTypography.style.marginTop="10px",icTypography.style.whiteSpace="nowrap",icTypography.style.overflow="hidden",icTypography.style.textOverflow="ellipsis")},this.setExpandedButtonHeight=()=>{var _a;const appStatusWrapper=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector("#side-navigation > .bottom-wrapper > .bottom-side-nav > .app-status-wrapper");0!==appStatusWrapper.offsetHeight&&this.el.style.setProperty("--sm-side-navigation-bottom-bar-height",`${appStatusWrapper.offsetHeight}px`)},this.styleSlottedIconLabels=(menuExpanded,icTypography)=>{menuExpanded?(icTypography.style.opacity="1",icTypography.style.visibility="visible",icTypography.style.transition="visibility 0s, opacity var(--ic-easing-transition-slow)"):(icTypography.style.opacity="0",icTypography.style.visibility="hidden",icTypography.style.transition="visibility 0s, opacity var(--ic-easing-transition-slow)")},this.transitionHandler=type=>{var _a,_b;const primaryNavigationWrapper=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(".primary-navigation"),secondaryNavigationWrapper=null===(_b=this.el.shadowRoot)||void 0===_b?void 0:_b.querySelector(".bottom-wrapper > .secondary-navigation"),classToRemove="start"===type?this.COLLAPSED_ICON_LABELS_END:this.COLLAPSED_ICON_LABELS_START,classToAdd="start"===type?this.COLLAPSED_ICON_LABELS_START:this.COLLAPSED_ICON_LABELS_END;primaryNavigationWrapper&&(primaryNavigationWrapper.classList.remove(classToRemove),primaryNavigationWrapper.classList.add(classToAdd)),secondaryNavigationWrapper&&(secondaryNavigationWrapper.classList.remove(classToRemove),secondaryNavigationWrapper.classList.add(classToAdd))},this.transitionEndHandler=()=>{this.transitionHandler("end")},this.animateCollapsedIconLabels=()=>{this.transitionHandler("start"),this.transitionEndHandler(),this.el.addEventListener("transitionend",this.transitionEndHandler)},this.paddingIconWidth=navItems=>{const navItemLink=navItems[0].shadowRoot&&(navItems[0].shadowRoot.querySelector("ic-tooltip a")||navItems[0].shadowRoot.querySelector("ic-tooltip div"))||navItems[0].querySelector("a")||navItems[0].querySelector("div"),navItemSVG=navItems[0].querySelector("svg");if(navItemLink&&navItemSVG){const navStyles={gap:window.getComputedStyle(navItemLink).gap,iconWidth:window.getComputedStyle(navItemSVG).width,paddingLeft:window.getComputedStyle(navItemLink).paddingLeft};return Object.values(navStyles).reduce(((prev,curr)=>prev+parseInt(curr)),0)}return 0},this.displayTooltipWithExpandedLongLabel=menuExpanded=>{let timer;if(menuExpanded)timer=setTimeout((()=>{const sideNavWidth=this.el.clientWidth,navigationItems=Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)),paddingIconDelta=navigationItems.length?this.paddingIconWidth(navigationItems):0;navigationItems.forEach((navigationItem=>{var _a,_b;const icTypographyScrollWidth=(null===(_a=navigationItem.shadowRoot&&navigationItem.shadowRoot.querySelector("ic-tooltip .link ic-typography.ic-typography-label"))||void 0===_a?void 0:_a.scrollWidth)||(null===(_b=navigationItem.querySelector("ic-typography.ic-typography-label"))||void 0===_b?void 0:_b.scrollWidth);icTypographyScrollWidth&&icTypographyScrollWidth>sideNavWidth-paddingIconDelta&&navigationItem.setAttribute("display-navigation-tooltip","true")}))}),this.ANIMATION_DURATION);else{clearTimeout(timer);Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)).forEach((navigationItem=>{navigationItem.setAttribute("display-navigation-tooltip","false")}))}},this.setMenuExpanded=expanded=>{this.menuExpanded=expanded},this.setParentPaddingTop=value=>{var _a;null===(_a=this.el.parentElement)||void 0===_a||_a.style.setProperty("padding-top",value)},this.setParentPaddingLeft=value=>{var _a;null===(_a=this.el.parentElement)||void 0===_a||_a.style.setProperty("padding-left",value)},this.renderAppTitle=isAppNameSubtitleVariant=>{const displayShortAppTitle=this.deviceSize<=_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.S&&!(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.F)(this.shortAppTitle);return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:displayShortAppTitle||isAppNameSubtitleVariant?"subtitle-small":"h3","aria-label":displayShortAppTitle?`${this.appTitle} (${this.shortAppTitle})`:void 0},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",null,displayShortAppTitle?this.shortAppTitle:this.appTitle))},this.resizeObserverCallback=currSize=>{var _a,_b,_c,_d;this.deviceSize=currSize;const isSmallAndDisableTopBar=currSize===_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.S&&!this.disableTopBarBehaviour;if(!this.disableAutoParentStyling){const topBarHeight=null===(_b=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(".top-bar"))||void 0===_b?void 0:_b.scrollHeight;this.setParentPaddingTop(isSmallAndDisableTopBar?`${topBarHeight}px`:"0"),isSmallAndDisableTopBar&&this.setParentPaddingLeft("0"),isSmallAndDisableTopBar&&this.inline?null===(_c=this.el.parentElement)||void 0===_c||_c.style.setProperty("height",`calc(100% - ${topBarHeight}px)`):isSmallAndDisableTopBar||null===(_d=this.el.parentElement)||void 0===_d||_d.style.setProperty("height","100%")}if(!this.disableAutoParentStyling){const paddingLeft=`calc(var(--ic-space-xxl) ${this.collapsedIconLabels?"* 2":"+ var(--ic-space-xs)"})`;currSize>_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.L?(this.setParentPaddingTop("0"),this.setParentPaddingLeft("0")):(currSize>_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.S||this.disableTopBarBehaviour)&&currSize<=_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.M&&this.static?this.setParentPaddingLeft(paddingLeft):(currSize>_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.S||this.disableTopBarBehaviour)&&currSize<=_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.L&&this.setParentPaddingLeft(this.static&&this.menuExpanded?"calc(var(--ic-space-xl) * 10)":paddingLeft)}},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const currSize=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.e)();this.deviceSizeAppTitle=currSize,this.resizeObserverCallback(currSize)})),this.resizeObserver.observe(document.body,{box:"content-box"})},this.setCollapsedIconLabels=()=>{Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM)).forEach((navigationItem=>{navigationItem.setAttribute("collapsed-icon-label","true")}))},this.styleSlottedCollapsedIconLabel=()=>{Array.from(this.el.querySelectorAll(".navigation-item-side-nav-slotted-text")).forEach((icTypography=>{var _a,_b;(null===(_b=null===(_a=icTypography.parentElement)||void 0===_a?void 0:_a.parentElement)||void 0===_b?void 0:_b.classList.contains("navigation-item-side-nav-collapsed-with-label"))&&(icTypography.style.whiteSpace="nowrap",icTypography.style.overflow="hidden",icTypography.style.textOverflow="ellipsis",icTypography.style.marginTop="10px")}))},this.renderTopBar=({isSDevice,foregroundColor,menuOpen,href,isAppNameSubtitleVariant})=>{const hasTitle=""!==this.appTitle&&(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.appTitle),Component=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"app-title")?"div":"a",attrs="a"==Component&&{href};return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"top-bar":!0,[this.foregroundColor]:!0}},isSDevice&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-labelledby":"menu-navigation-toggle-button-landmark","aria-hidden":"false"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{"aria-label":"Open navigation menu",class:"menu-button",id:"menu-button",variant:"secondary",size:"small","full-width":"true",theme:"default"==foregroundColor||"light"==foregroundColor?"light":"dark",monochrome:!0,onClick:this.toggleMenu,ariaOwnsId:"side-navigation","aria-haspopup":"true","aria-expanded":"false",ref:el=>this.menuButton=el},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"mobile-top-bar-menu-icon",slot:"left-icon",innerHTML:menuOpen?_close_icon_c9e09475_js__WEBPACK_IMPORTED_MODULE_2__.c:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n  <path d="M0 0h24v24H0V0z" fill="none" />\n  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />\n  <title>menu icon</title>\n</svg>\n'}),menuOpen?"Close":"Menu"),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"menu-navigation-toggle-button-landmark",class:"navigation-landmark-title","aria-hidden":"true"},"Navigation menu toggle button")),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-title-wrapper"},(hasTitle||(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"app-title"))&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)(Component,Object.assign({},attrs,{class:"title-link"}),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-icon-container","aria-hidden":"true"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"app-icon"})),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-title-inner-wrapper"},(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"app-title")?(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"app-title"}):this.renderAppTitle(isAppNameSubtitleVariant)))))}}watchExpandedHandler(){this.toggleMenuExpanded(this.expanded)}componentWillLoad(){this.setMenuExpanded(this.expanded),this.collapsedIconLabels&&this.setCollapsedIconLabels(),this.hasSecondaryNavigation=(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"secondary-navigation")}componentDidLoad(){this.emitSideNavigationExpanded({sideNavExpanded:this.menuExpanded,sideNavMobile:this.deviceSize===_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.S&&!this.disableTopBarBehaviour}),(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),this.styleSlottedCollapsedIconLabel(),this.arrangeSlottedNavigationItem(this.menuExpanded),this.displayTooltipWithExpandedLongLabel(this.menuExpanded),this.setExpandedButtonHeight(),!(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"app-title")&&(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.b)([{prop:this.appTitle,propName:"app-title"}],"Side Navigation")}disconnectedCallback(){var _a;null!==this.resizeObserver&&this.resizeObserver.disconnect(),null===(_a=this.el)||void 0===_a||_a.removeEventListener("transitionend",this.transitionEndHandler)}brandChangeHandler({detail}){this.foregroundColor=detail.mode}render(){const{appTitle,menuOpen,foregroundColor,menuExpanded,href,status,version,collapsedIconLabels,inline}=this,isSDevice=!this.disableTopBarBehaviour&&this.deviceSize===_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.S,isMdDevice=this.deviceSize===_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.M,isLgDevice=this.deviceSize>=_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.L,isAppNameSubtitleVariant=this.deviceSizeAppTitle===_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.S,displayExpandBtn=isMdDevice||this.disableTopBarBehaviour||isLgDevice&&!this.static,topBarProps={isSDevice,foregroundColor,menuOpen,href,isAppNameSubtitleVariant,appTitle:appTitle||""};return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"da621f79cc6d0e721b46d89689623ab603869c5c",class:{"xs-menu-open":menuOpen&&isSDevice,"xs-menu-close":!menuOpen&&isSDevice,"sm-collapsed":!isSDevice&&!menuExpanded,"sm-expanded":!isSDevice&&menuExpanded,"side-display":this.deviceSize>_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.D.S||!!this.disableTopBarBehaviour,[`ic-side-navigation-${_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark}`]:foregroundColor===_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark,"collapsed-labels":!isSDevice&&!menuExpanded&&!!collapsedIconLabels,"ic-side-navigation-inline":!!inline}},isSDevice&&this.renderTopBar(Object.assign({},topBarProps)),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e1a1746cf0b72f95df40c4de8c5b24142e42958c",class:"side-navigation",id:"side-navigation"},!isSDevice&&this.renderTopBar(Object.assign({},topBarProps)),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fb4d44f6de1f637c1f913c7bc1979d261b138961",class:"side-navigation-inner"},(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"primary-navigation")&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"d242bf8b7266a913ddf15cd6d3c710b67998478b",class:"primary-navigation","aria-labelledby":"primary-navigation-landmark"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"5496dfe55e4ea5b5a86ff9cbf49d3a1948580c38","aria-hidden":"true",class:"navigation-landmark-title",id:"primary-navigation-landmark"},"Primary"),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{key:"5c963c5a63930a85c8d56a8acf9f402b11cb5717",class:"navigation-list"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"6e9893f2302d72b8a8dd8c91efc69324e28b7845",name:"primary-navigation"})))),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3a5a9c6510d4e70389ff271e089d46732b7ff35a",class:{"bottom-wrapper":!0,"classification-spacing":(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.v)()}},(0,_helpers_bbab69a2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"secondary-navigation")&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"a325206b9aaab5d2c68e0854b6d88f6c0754a2f7",class:"secondary-navigation","aria-labelledby":"secondary-navigation-landmark"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"cce653a875b1768a5c5960d2c86a55e42e104456","aria-hidden":"true",class:"navigation-landmark-title",id:"secondary-navigation-landmark"},"Secondary"),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{key:"d61e1b6969d597bdb48ba59be75e50f95c3327e9",class:"navigation-list"},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"75d0ddba3f9b6663f0888e579d60dfdf77455944",name:"secondary-navigation"}))),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a5e646f3027491a5e3288bafb03a49699ad7fe16",class:"bottom-side-nav"},this.hasSecondaryNavigation&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-divider",{key:"709a1cd78355adb93d7d5e0636252ba8b53cc3dc"}),displayExpandBtn&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"2f61bbc7a06cbd5f1d90a126507a6fce4d329545",class:"menu-expand-button",innerHTML:_chevron_icon_875b7af2_js__WEBPACK_IMPORTED_MODULE_3__.C,onClick:()=>this.toggleMenuExpanded(!this.menuExpanded),"aria-label":(menuExpanded?"Collapse":"Expand")+" side navigation"}),(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8c21e3ecb652850205f4fbe785be95acd7d8120b",class:"app-status-wrapper"},""!==status&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"96b2fe13baecbb436c6f90d69bc1eba2447ef37d",class:{"app-status":!0}},(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"017292fb3f29859ee96b6af1f12e787a95300a3d","aria-label":"app tag",variant:"label-uppercase",class:"app-status-text"},status)),""!==version&&(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{key:"ded1fc5cf16022ec9c2eea424910cbc0c88132a8",variant:"label",class:"app-version","aria-label":"app version"},version))))))}get el(){return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{expanded:["watchExpandedHandler"]}}};SideNavigation.style=':host{display:block;--ic-typography-color:currentcolor;--side-navigation-position:fixed;--side-navigation-position-left:0;--side-navigation-position-top:var(--ic-space-xxl);--side-navigation-height:var(--ic-space-xxl);--sm-side-navigation-top-bar-height:3.5rem;--sm-side-navigation-collapsed-labels-width:6rem;--sm-side-navigation-expand-transition-duration:var(\n    --ic-transition-duration-slow\n  );--side-navigation-width:20rem;--sm-side-navigation-bottom-bar-height:3.5rem;--keyline-lighten:var(--ic-space-1px) solid var(--ic-side-navigation-keyline);--keyline-darken:var(--ic-space-1px) solid var(--ic-state-layer-darken-20);--ic-button-secondary-text-monochrome:var(--ic-brand-text-color);--ic-button-secondary-border-monochrome:var(--ic-brand-text-color);z-index:var(--ic-z-index-side-navigation)}:host>*{box-sizing:border-box}.side-navigation{display:flex;flex-direction:column;width:var(--side-navigation-width);color:var(--ic-side-navigation-text);position:var(--side-navigation-position);top:var(--side-navigation-position-top);left:calc(var(--side-navigation-width) * -1);bottom:0;background-color:var(--ic-side-navigation-background);z-index:var(--ic-z-index-side-navigation)}:host(.ic-side-navigation-inline) .side-navigation{position:absolute;height:100%}:host(.anchor-right) .side-navigation{right:calc(var(--side-navigation-width) * -1)}.classification-spacing{margin-bottom:var(--ic-space-lg)}.navigation-list{padding:0;margin:0;list-style:none}.side-navigation-inner{background-color:var(--ic-side-navigation-background);display:flex;flex-direction:column;flex:1 1 0;overflow:auto}:host(.ic-side-navigation-inline) .side-navigation-inner{flex:1}:host(.xs-menu-open) .side-navigation{transition:left var(--ic-easing-transition-slow);left:0}:host(:has(.xs-menu-open,.xs-menu-close)) ::slotted(ic-navigation-item){--navigation-item-side-nav-right:var(--ic-space-xl)}:host(.xs-menu-close) .side-navigation{left:calc(var(--side-navigation-width) * -1);transition:left var(--ic-easing-transition-slow)}:host(.xs-menu-close) .side-navigation>*{visibility:hidden}:host(.anchor-right.xs-menu-open) .side-navigation{right:0;left:auto}:host(.anchor-right.xs-menu-close) .side-navigation{right:calc(var(--side-navigation-width) * -1);left:auto;transition:right var(--ic-easing-transition-slow)}.bottom-wrapper{border-top:var(--keyline-lighten);bottom:0;left:0;z-index:2;background-color:var(--ic-side-navigation-background);display:flex;flex-direction:column}:host(.ic-side-navigation-inline) .bottom-wrapper{position:sticky}:host(.ic-side-navigation-dark) .bottom-wrapper{border-top:var(--keyline-darken)}.top-bar{display:flex;flex-direction:row;align-items:center;min-height:var(--side-navigation-height);padding:var(--ic-space-xs);box-sizing:border-box;background-color:var(--ic-side-navigation-background);position:fixed;top:0;left:0;right:0;border-bottom:var(--keyline-lighten);box-shadow:var(--ic-elevation-overlay);z-index:2;overflow:hidden;visibility:visible}:host(.ic-side-navigation-inline) .top-bar{position:absolute}:host(.ic-side-navigation-dark) .top-bar{border-bottom:var(--keyline-darken)}.top-bar.dark a:focus{box-shadow:var(--ic-border-focus)}.app-title-wrapper{display:flex;margin-left:var(--ic-space-xs);border-left:var(--keyline-lighten);padding-left:var(--ic-space-xxs);color:var(--ic-side-navigation-text);align-items:center}:host(.ic-side-navigation-dark) .app-title-wrapper{border-left:var(--keyline-darken)}.app-title-wrapper ic-typography h1{margin:0}@media screen and (min-width: 340px){.app-title-wrapper ic-typography{margin-left:var(--ic-space-xs)}}:host .title-link{display:flex;align-items:center;transition:box-shadow var(--ic-easing-transition-fast),\n    background-color var(--ic-easing-transition-fast);text-decoration:none;padding:var(--ic-space-xxs);color:var(--ic-side-navigation-text)}:host .title-link:visited,:host .title-link:active{color:var(--ic-side-navigation-text)}slot[name="app-title"]::slotted(a),slot[name="app-icon"]::slotted(a){color:var(--ic-side-navigation-text);outline:none;text-decoration:none;display:flex}slot[name="app-title"]::slotted(ic-typography),slot[name="app-title"]::slotted(a){margin-left:var(--ic-space-xs) !important}slot[name="app-title"]::slotted(a){font:var(--ic-font-subtitle-small)}@media screen and (min-width: 577px){:host(.sm-collapsed) slot[name="app-title"]::slotted(ic-typography),:host(.sm-collapsed) slot[name="app-title"]::slotted(a){position:absolute;left:-9999px;opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.sm-expanded) slot[name="app-title"]::slotted(a){font:var(--ic-font-h3) !important;font-weight:var(--ic-font-weight-semibold) !important;margin-left:var(--ic-space-xs) !important}}:host .title-link:hover{border-radius:var(--ic-border-radius);background-color:var(--ic-side-navigation-hover)}:host .title-link:active{background-color:var(--ic-side-navigation-pressed)}:host .title-link:focus,:host .title-link:focus-within{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);background-color:transparent}:host .title-link ic-typography{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.app-title-wrapper ::slotted(svg){fill:var(--ic-side-navigation-text)}.app-icon-container{display:none}.button-label{display:flex;align-items:center}.mobile-top-bar-menu-icon{display:flex}.menu-button{width:6.5rem}.app-status-wrapper{inset:0 var(--ic-space-sm) 0 3.5rem;width:auto;display:flex;gap:var(--ic-space-xs);padding:var(--ic-space-sm) 0;justify-content:flex-end;align-items:flex-end;pointer-events:none;height:-moz-fit-content;height:fit-content;margin:0 var(--ic-space-xs)}.app-status-wrapper .app-version{display:flex;overflow-wrap:break-word;padding-bottom:var(--ic-space-xxs)}.app-status-wrapper .app-status{display:flex;border-radius:1rem;background-color:var(--ic-side-navigation-text);color:var(--ic-side-navigation-status-tag-text);padding:var(--ic-space-xxs) var(--ic-space-lg);min-width:1rem}.app-status-wrapper .app-status-text{overflow-wrap:break-word}:host(.ic-side-navigation-dark) .app-status-wrapper .app-status{--ic-typography-color:var(--ic-architectural-white)}.navigation-landmark-title{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}::slotted(ic-navigation-group){--navigation-group-height:2.75rem;--navigation-group-width:100%;--navigation-group-justify-content:space-between;--navigation-group-hover:var(--ic-side-navigation-hover);--navigation-group-text-hover:var(--ic-side-navigation-text);--navigation-item-child-height:3.5rem;--navigation-item-child-active:var(--ic-action-dark-bg-pressed);--navigation-item-child-color:var(--ic-side-navigation-text);--navigation-group-expand-toggle-padding:0.25rem}::slotted(ic-navigation-item),::slotted(ic-navigation-group){--navigation-item-justify-content:flex-start;--navigation-item-min-height:56px;--navigation-item-height:auto}.bottom-side-nav{position:relative;align-content:flex-end;min-height:var(--sm-side-navigation-top-bar-height)}.bottom-side-nav ic-divider{position:absolute;top:0}.primary-navigation{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none}.primary-navigation::-webkit-scrollbar{display:none}.primary-navigation,.secondary-navigation{overflow-x:hidden}.bottom-side-nav .menu-expand-button{position:absolute;display:none}.menu-visibility-visible{visibility:visible;width:100%}.app-title-show{min-width:15.5rem}:host(.side-display){display:flex;flex-direction:column;height:100vh;position:var(--side-navigation-position);left:0;top:0;bottom:0}:host(.side-display) .app-icon-container{height:40px;display:flex;align-items:center}:host(.side-display) .top-bar{--side-navigation-height:var(--sm-side-navigation-top-bar-height);position:relative;padding:0;box-shadow:none}:host(.ic-side-navigation-inline.side-display) .top-bar{position:sticky}:host(.anchor-right.side-display) .top-bar{box-shadow:0.188rem 0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.anchor-right.side-display) .bottom-wrapper{box-shadow:0.188rem -0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.side-display) .side-navigation,:host(.side-display) .top-bar{width:var(--sm-side-navigation-top-bar-height)}:host(.sm-collapsed.side-display){width:var(--sm-side-navigation-top-bar-height);transition:width var(--ic-easing-transition-slow)}:host(.sm-collapsed.collapsed-labels.side-display){width:var(--sm-side-navigation-collapsed-labels-width)}:host(.sm-expanded.side-display){width:var(--side-navigation-width);transition:width var(--ic-easing-transition-slow);box-shadow:var(--ic-elevation-overlay)}:host(.side-display) .side-navigation{--side-navigation-position-top:0;flex:1;position:relative;top:auto;left:auto;bottom:auto}:host(.ic-side-navigation-inline.side-display) .side-navigation{position:relative}:host(.anchor-right.side-display) .side-navigation{left:auto;right:0}:host(.side-display) .app-title-wrapper{margin-left:0;border-left:none;padding:var(--ic-space-xs) var(--ic-space-sm)}:host(.side-display) .app-title-wrapper ::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.side-display) .app-title-wrapper ic-typography{font-weight:var(--ic-font-weight-semibold)}:host(.sm-collapsed.side-display) .app-title-wrapper ic-typography{position:absolute;left:-9999px;opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.sm-expanded.side-display) ic-typography{position:relative;left:0}:host(.sm-expanded.side-display) :is(.side-navigation,.top-bar){width:var(--side-navigation-width);transition:width var(--ic-easing-transition-slow)}:host(.sm-collapsed.side-display) :is(.side-navigation,.top-bar){width:var(--sm-side-navigation-top-bar-height);transition:width var(--ic-easing-transition-slow)}:host(.anchor-right.sm-expanded.side-display) :is(.side-navigation,.top-bar){left:auto;right:0}:host(.side-display) .app-status-wrapper,:host(.sm-collapsed.side-display) .app-status-wrapper{display:none;margin-left:0}:host(.sm-expanded.side-display) .app-status-wrapper{display:flex;max-width:16rem;margin-right:calc(var(--ic-space-xxxs) + var(--ic-space-xs))}:host(.side-display) .bottom-side-nav{justify-items:flex-end;align-items:flex-end;justify-content:flex-end;display:flex;outline:none}:host(.side-display) .bottom-side-nav .menu-expand-button{padding-left:var(--ic-space-md);height:var(--sm-side-navigation-top-bar-height);width:100%;color:var(--ic-side-navigation-text);background-color:transparent;outline:var(--ic-hc-focus-outline);border:none;cursor:pointer;display:flex;transition:var(--ic-easing-transition-fast)}:host(.sm-expanded.side-display) .bottom-side-nav .menu-expand-button{height:100%}:host(.side-display) .bottom-side-nav .menu-expand-button svg{justify-items:flex-start;align-self:center;display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.side-display) .bottom-side-nav .menu-expand-button:hover{background-color:var(--ic-side-navigation-hover)}:host(.side-display) .bottom-side-nav .menu-expand-button:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background-color:transparent}:host(.sm-collapsed.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(1);transition:transform var(--ic-easing-transition-slow)}:host(.sm-expanded.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(-1);transition:transform var(--ic-easing-transition-slow);align-self:flex-end;margin-bottom:0.875rem}:host(.anchor-right.sm-collapsed.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(-1)}:host(.anchor-right.sm-expanded.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(1)}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-item){--navigation-item-label-opacity:1}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-item),:host(.sm-collapsed.side-display) ::slotted(ic-navigation-group){--navigation-item-label-opacity:0;--navigation-item-min-height:3.5rem;--navigation-item-height:3.5rem}:host(.sm-expanded.side-display) ::slotted(ic-navigation-item),:host(.sm-expanded.side-display) ::slotted(ic-navigation-group){--navigation-item-label-opacity:1;--navigation-item-height:auto;--navigation-item-min-height:3.5rem;--navigation-item-width:20rem;--navigation-item-side-nav-right:var(--ic-space-xl)}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-group){--navigation-group-title-position:absolute;--navigation-group-title-position-left:-9999px;--navigation-group-title-opacity:none}:host(.sm-expanded.side-display) ::slotted(ic-navigation-group){--navigation-group-title-position:relative;--navigation-group-title-position-left:0;--navigation-group-expand-toggle-padding:0.25rem;--navigation-group-title-opacity:flex}:host(.sm-collapsed.collapsed-labels.side-display) .side-navigation,:host(.sm-collapsed.collapsed-labels.side-display) .top-bar{width:var(--sm-side-navigation-collapsed-labels-width)}:host(.sm-collapsed.collapsed-labels.side-display) .menu-expand-button{padding:0}:host(.sm-collapsed.collapsed-labels.side-display) .app-title-wrapper{width:100%;justify-content:center}:host(.sm-collapsed.collapsed-labels.side-display) ::slotted(ic-navigation-group){--navigation-group-justify-content:center;--navigation-item-label-opacity:1;--navigation-group-item-min-width:100%;--navigation-group-expand-toggle-padding:1rem}:host(.collapsed-labels.side-display) .bottom-side-nav .menu-expand-button{justify-content:center}:host(.side-display) .collapsed-icon-labels-start{visibility:hidden;opacity:0}:host(.side-display) .collapsed-icon-labels-end{visibility:visible;opacity:1;transition:visibility 0s, opacity var(--ic-easing-transition-slow)}@media screen and (max-width: 419px){.top-bar{height:var(--side-navigation-height)}.side-navigation{width:100%}}@media screen and (min-width: 340px){.app-icon-container{display:flex}}@media screen and (min-width: 993px){:host(.side-display){position:sticky;left:auto;top:0;bottom:0}:host(.sm-expanded.side-display){box-shadow:none}}@media (forced-colors: active){.side-navigation,.top-bar{border-right:var(--ic-border-hc)}.menu-expand-button{color:Highlight !important}slot[name="app-icon"]::slotted(svg){fill:currentcolor}}'}}]);