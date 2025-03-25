"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[4492],{"../canary-web-components/dist/esm/ic-tab-context.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_context:()=>TabContext});var _index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-163fe708.js");const TabContext=class{constructor(hostRef){(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icTabSelect=(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icTabSelect",3),this.newTabPanels=[],this.newTabs=[],this.activationType="automatic",this.contextId="default",this.monochrome=!1,this.theme="inherit",this.linkTabs=()=>{this.tabs.forEach(((tab,index)=>{const tabId=`ic-tab-${index}-context-${this.contextId}`,tabPanelId=`ic-tab-panel-${index}-context-${this.contextId}`;tab.setAttribute("id",tabId),tab.tabId=`ic-tab--${index}-context-${this.contextId}`,tab.tabPosition=index,tab.setAttribute("aria-controls",tabPanelId),tab.setAttribute("context-id",this.contextId),this.tabGroup.setAttribute("context-id",this.contextId),this.tabPanels[index].setAttribute("id",tabPanelId),this.tabPanels[index].setAttribute("aria-labelledby",tabId),this.tabPanels[index].setAttribute("context-id",this.contextId),tab.theme=this.theme,this.tabPanels[index].theme=this.theme,this.tabGroup.theme=this.theme}))},this.getChildren=()=>{this.tabGroup=this.el.querySelector("ic-tab-group"),this.tabs=Array.from(this.tabGroup.querySelectorAll("ic-tab")),this.tabPanels=Array.from(this.el.children).filter((child=>"IC-TAB-PANEL"===child.tagName)),this.enabledTabs=this.getEnabledTabs()},this.keydownHandler=event=>{const isManual="manual"===this.activationType,enabledTabIndex=this.enabledTabs.findIndex((tab=>tab.tabId===this.tabs[isManual?this.focusedTabIndex:this.selectedTab].tabId)),keyboardFunction=isManual?this.keyboardFocusTab:this.keyboardSelectTab;let preventDefault=!0;switch(event.key){case"Home":keyboardFunction(0);break;case"End":keyboardFunction(this.enabledTabs.length-1);break;case"ArrowRight":keyboardFunction(enabledTabIndex<this.enabledTabs.length-1?enabledTabIndex+1:0);break;case"ArrowLeft":keyboardFunction((enabledTabIndex>0?enabledTabIndex:this.enabledTabs.length)-1);break;default:!isManual||"Enter"!==event.key&&" "!==event.key?preventDefault=!1:this.keyboardSelectTab(this.focusedTabIndex)}preventDefault&&event.preventDefault()},this.setInitialTab=()=>{if(void 0!==this.selectedTabIndex)this.selectedTab=this.selectedTabIndex,this.focusedTabIndex=this.selectedTabIndex;else{const firstEnabledTabIndex=this.tabs.findIndex((tab=>tab.tabId===this.enabledTabs[0].tabId));this.selectedTab=firstEnabledTabIndex,this.focusedTabIndex=firstEnabledTabIndex}},this.configureTabs=()=>{this.enabledTabs.forEach((tab=>{tab.selected=tab.tabPosition===this.selectedTab})),this.tabPanels.forEach(((tabPanel,index)=>{tabPanel.active=index===this.selectedTab}))},this.getEnabledTabs=()=>Array.from(this.tabs).filter((child=>!child.disabled)),this.keyboardSelectTab=enabledTabIndex=>{const newIndex=this.tabs.findIndex((tab=>tab.tabId===this.enabledTabs[enabledTabIndex].tabId));this.enabledTabs[enabledTabIndex].focus(),void 0===this.selectedTabIndex?this.selectedTab=newIndex:this.icTabSelect.emit({tabIndex:newIndex,tabLabel:this.el.querySelectorAll("ic-tab")[newIndex].textContent.trim()})},this.keyboardFocusTab=enabledTabIndex=>{this.enabledTabs[enabledTabIndex].focus(),this.focusedTabIndex=this.tabs.findIndex((tab=>tab.tabId===this.enabledTabs[enabledTabIndex].tabId))}}updateSelectedTab(newValue){this.selectedTab=newValue}watchMonochromeHandler(){this.tabs.forEach(((tab,index)=>{tab.monochrome=this.monochrome,this.tabPanels[index].monochrome=this.monochrome})),this.tabGroup.monochrome=this.monochrome}watchThemeHandler(){this.tabs.forEach(((tab,index)=>{tab.theme=this.theme,this.tabPanels[index].theme=this.theme})),this.tabGroup.theme=this.theme}componentDidLoad(){void 0!==this.selectedTabIndex&&(this.selectedTab=this.selectedTabIndex),this.getChildren(),this.linkTabs(),this.tabGroup.addEventListener("keydown",this.keydownHandler),this.setInitialTab(),this.configureTabs()}componentWillUpdate(){this.configureTabs()}disconnectedCallback(){var _a;null===(_a=this.tabGroup)||void 0===_a||_a.removeEventListener("keydown",this.keydownHandler)}tabClickHandler(event){void 0===this.selectedTabIndex&&event.detail.contextId===this.contextId&&(this.selectedTab=event.detail.position),this.icTabSelect.emit({tabIndex:event.detail.position,tabLabel:this.el.querySelectorAll("ic-tab")[event.detail.position].textContent.trim()}),event.stopImmediatePropagation()}tabCreatedHandler(ev){this.tabs&&this.tabPanels&&((ev.detail.setFocus?this.newTabs:this.newTabPanels).push(ev.detail),this.newTabs.length===this.newTabPanels.length&&(this.tabs.push(...this.newTabs),this.tabPanels.push(...this.newTabPanels),this.enabledTabs=this.getEnabledTabs(),this.linkTabs(),this.tabs[this.selectedTab]&&this.tabPanels[this.selectedTab]||this.setInitialTab(),this.configureTabs(),this.newTabs=[],this.newTabPanels=[]))}tabEnabledHandler(){this.enabledTabs=this.getEnabledTabs()}async tabRemovedHandler(hadFocus){this.getChildren(),this.linkTabs(),this.tabs[this.selectedTab]&&this.tabPanels[this.selectedTab]?this.tabs[this.selectedTab].selected=!0:this.setInitialTab(),hadFocus&&this.tabs[this.selectedTab].setFocus()}render(){return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"9ef38f3b3b51ea8808e0caf4786e5af4242f3479"})}get el(){return(0,_index_163fe708_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{selectedTabIndex:["updateSelectedTab"],monochrome:["watchMonochromeHandler"],theme:["watchThemeHandler"]}}}}}]);