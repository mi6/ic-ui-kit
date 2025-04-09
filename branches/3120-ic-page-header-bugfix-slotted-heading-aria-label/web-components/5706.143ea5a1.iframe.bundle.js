"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5706],{"./dist/esm/ic-tab-context.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_context:()=>TabContext});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/types-6f6b41a5.js");const TabContext=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icTabSelect=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icTabSelect",3),this.tabSelect=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"tabSelect",3),this.newTabPanels=[],this.newTabs=[],this.emitEvents=tabIndex=>{const tabLabel=this.el.querySelectorAll("ic-tab")[tabIndex].textContent.trim();this.icTabSelect.emit({tabIndex,tabLabel}),this.tabSelect.emit({tabIndex,tabLabel})},this.linkTabs=()=>{this.tabs.forEach(((tab,index)=>{const tabId=`ic-tab-${index}-context-${this.contextId}`,tabPanelId=`ic-tab-panel-${index}-context-${this.contextId}`;tab.setAttribute("id",tabId),tab.tabId=`ic-tab--${index}-context-${this.contextId}`,tab.tabPosition=index,tab.setAttribute("aria-controls",tabPanelId),tab.setAttribute("context-id",this.contextId),this.tabGroup.setAttribute("context-id",this.contextId),this.tabPanels[index].setAttribute("id",tabPanelId),this.tabPanels[index].setAttribute("aria-labelledby",tabId),this.tabPanels[index].setAttribute("context-id",this.contextId),this.appearance===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.I.Light&&(tab.appearance=this.appearance,this.tabPanels[index].appearance=this.appearance)})),this.appearance===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.I.Light&&(this.tabGroup.appearance=this.appearance)},this.getChildren=()=>{this.tabGroup=this.el.querySelector("ic-tab-group"),this.tabs=Array.from(this.tabGroup.querySelectorAll("ic-tab")),this.tabPanels=Array.from(this.el.children).filter((child=>"IC-TAB-PANEL"===child.tagName)),this.enabledTabs=this.getEnabledTabs()},this.keydownHandler=event=>{const isManual="manual"===this.activationType,enabledTabIndex=this.enabledTabs.findIndex((tab=>tab.tabId===this.tabs[isManual?this.focusedTabIndex:this.selectedTab].tabId)),keyboardFunction=isManual?this.keyboardFocusTab:this.keyboardSelectTab;let preventDefault=!0;switch(event.key){case"Home":keyboardFunction(0);break;case"End":keyboardFunction(this.enabledTabs.length-1);break;case"ArrowRight":keyboardFunction(enabledTabIndex<this.enabledTabs.length-1?enabledTabIndex+1:0);break;case"ArrowLeft":keyboardFunction((enabledTabIndex>0?enabledTabIndex:this.enabledTabs.length)-1);break;default:!isManual||"Enter"!==event.key&&" "!==event.key?preventDefault=!1:this.keyboardSelectTab(this.focusedTabIndex)}preventDefault&&event.preventDefault()},this.setInitialTab=()=>{if(void 0!==this.selectedTabIndex)this.selectedTab=this.selectedTabIndex,this.focusedTabIndex=this.selectedTabIndex;else{const firstEnabledTabIndex=this.tabs.findIndex((tab=>tab.tabId===this.enabledTabs[0].tabId));this.selectedTab=firstEnabledTabIndex,this.focusedTabIndex=firstEnabledTabIndex}},this.configureTabs=()=>{this.enabledTabs.forEach((tab=>{tab.selected=tab.tabPosition===this.selectedTab})),this.tabPanels.forEach(((tabPanel,index)=>{tabPanel.hidden=index!==this.selectedTab}))},this.getEnabledTabs=()=>Array.from(this.tabs).filter((child=>!child.disabled)),this.keyboardSelectTab=enabledTabIndex=>{const newIndex=this.tabs.findIndex((tab=>tab.tabId===this.enabledTabs[enabledTabIndex].tabId));this.enabledTabs[enabledTabIndex].focus(),void 0===this.selectedTabIndex?this.selectedTab=newIndex:this.emitEvents(newIndex)},this.keyboardFocusTab=enabledTabIndex=>{this.enabledTabs[enabledTabIndex].focus(),this.focusedTabIndex=this.tabs.findIndex((tab=>tab.tabId===this.enabledTabs[enabledTabIndex].tabId))},this.selectedTab=void 0,this.activationType="automatic",this.appearance="dark",this.contextId="default",this.selectedTabIndex=void 0}watchAppearanceHandler(){this.tabs.forEach(((tab,index)=>{tab.appearance=this.appearance,this.tabPanels[index].appearance=this.appearance})),this.tabGroup.appearance=this.appearance}updateSelectedTab(newValue){this.selectedTab=newValue}componentDidLoad(){void 0!==this.selectedTabIndex&&(this.selectedTab=this.selectedTabIndex),this.getChildren(),this.linkTabs(),this.tabGroup.addEventListener("keydown",this.keydownHandler),this.setInitialTab(),this.configureTabs()}componentWillUpdate(){this.configureTabs()}disconnectedCallback(){var _a;null===(_a=this.tabGroup)||void 0===_a||_a.removeEventListener("keydown",this.keydownHandler)}tabClickHandler(event){void 0===this.selectedTabIndex&&event.detail.contextId===this.contextId&&(this.selectedTab=event.detail.position),this.emitEvents(event.detail.position),event.stopImmediatePropagation()}tabCreatedHandler(ev){this.tabs&&this.tabPanels&&((ev.detail.setFocus?this.newTabs:this.newTabPanels).push(ev.detail),this.newTabs.length===this.newTabPanels.length&&(this.tabs.push(...this.newTabs),this.tabPanels.push(...this.newTabPanels),this.enabledTabs=this.getEnabledTabs(),this.linkTabs(),this.tabs[this.selectedTab]&&this.tabPanels[this.selectedTab]||this.setInitialTab(),this.configureTabs(),this.newTabs=[],this.newTabPanels=[]))}tabEnabledHandler(){this.enabledTabs=this.getEnabledTabs()}async tabRemovedHandler(hadFocus){this.getChildren(),this.linkTabs(),this.tabs[this.selectedTab]&&this.tabPanels[this.selectedTab]?(this.tabs[this.selectedTab].selected=!0,this.tabPanels[this.selectedTab].hidden=!1):this.setInitialTab(),hadFocus&&this.tabs[this.selectedTab].setFocus()}render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{appearance:["watchAppearanceHandler"],selectedTabIndex:["updateSelectedTab"]}}}},"./dist/esm/types-6f6b41a5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,{I:()=>IcThemeForegroundEnum,a:()=>IcInformationStatus}),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))}}]);