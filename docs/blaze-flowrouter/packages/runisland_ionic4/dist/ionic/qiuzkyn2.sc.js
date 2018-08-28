/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{a as e}from"./chunk-d3dac993.js";import{b as a}from"./chunk-f7b6af08.js";class i{constructor(){this.loaded=!1,this.active=!1,this.disabled=!1,this.selected=!1,this.show=!0,this.tabsHideOnSubPages=!1}selectedChanged(t){t&&this.ionSelect.emit()}componentWillLoad(){}onPropChanged(){this.ionTabMutated.emit()}getTabId(){return this.name?this.name:"string"==typeof this.component?this.component:null}async setActive(){await this.prepareLazyLoaded(),this.active=!0}prepareLazyLoaded(){return!this.loaded&&this.component?(this.loaded=!0,e(this.delegate,this.el,this.component,["ion-page"])):Promise.resolve()}hostData(){const{btnId:t,active:e,component:a}=this;return{"aria-labelledby":t,"aria-hidden":e?null:"true",role:"tabpanel",class:{"ion-page":!a,"tab-hidden":!e}}}render(){return t("slot",null)}static get is(){return"ion-tab"}static get encapsulation(){return"shadow"}static get properties(){return{active:{type:Boolean,attr:"active",mutable:!0},badge:{type:String,attr:"badge",watchCallbacks:["onPropChanged"]},badgeColor:{type:String,attr:"badge-color",watchCallbacks:["onPropChanged"]},btnId:{type:String,attr:"btn-id"},component:{type:String,attr:"component"},delegate:{type:"Any",attr:"delegate"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["onPropChanged"]},el:{elementRef:!0},getTabId:{method:!0},href:{type:String,attr:"href",watchCallbacks:["onPropChanged"]},icon:{type:String,attr:"icon",watchCallbacks:["onPropChanged"]},label:{type:String,attr:"label",watchCallbacks:["onPropChanged"]},name:{type:String,attr:"name"},selected:{type:Boolean,attr:"selected",watchCallbacks:["selectedChanged"]},setActive:{method:!0},show:{type:Boolean,attr:"show",watchCallbacks:["onPropChanged"]},tabsHideOnSubPages:{type:Boolean,attr:"tabs-hide-on-sub-pages"}}}static get events(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabMutated",method:"ionTabMutated",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".tab-hidden.sc-ion-tab-h{display:none!important}"}}class s{constructor(){this.canScrollLeft=!1,this.canScrollRight=!1,this.keyboardVisible=!1,this.layout="icon-top",this.placement="bottom",this.tabs=[],this.highlight=!1,this.translucent=!1}onKeyboardWillHide(){setTimeout(()=>this.keyboardVisible=!1,50)}onKeyboardWillShow(){"bottom"===this.placement&&(this.keyboardVisible=!0)}componentDidLoad(){this.updateHighlight()}getSelectedButton(){return this.el.shadowRoot.querySelector(".tab-btn-selected")}updateHighlight(){this.highlight&&this.queue.read(()=>{const t=this.getSelectedButton(),e=this.el.shadowRoot.querySelector(".tabbar-highlight");t&&e&&(e.style.transform=`translate3d(${t.offsetLeft}px,0,0) scaleX(${t.offsetWidth})`)})}hostData(){const{color:t,translucent:e,layout:i,placement:s,keyboardVisible:n}=this;return{role:"tablist","aria-hidden":n?"true":null,class:Object.assign({},a(t),{"tabbar-translucent":e,[`layout-${i}`]:!0,[`placement-${s}`]:!0,"tabbar-hidden":n})}}renderTabButton(e){const{icon:a,label:i,disabled:s,badge:n,badgeColor:o,href:l}=e,r=e===this.selectedTab,c=!!i,h=!!a;return t("a",{role:"tab","ion-activable":!0,"aria-selected":r?"true":null,href:l||"#",class:{"tab-btn":!0,"tab-btn-selected":r,"tab-btn-has-label":c,"tab-btn-has-icon":h,"tab-btn-has-label-only":c&&!h,"tab-btn-has-icon-only":h&&!c,"tab-btn-has-badge":!!n,"tab-btn-disabled":s,"tab-btn-hidden":!e.show},onClick:t=>{e.disabled||this.ionTabbarClick.emit(e),t.stopPropagation(),t.preventDefault()}},a&&t("ion-icon",{class:"tab-btn-icon",icon:a,lazy:!1}),i&&t("span",{class:"tab-btn-text"},i),n&&t("ion-badge",{class:"tab-btn-badge",color:o},n),"md"===this.mode&&t("ion-ripple-effect",{tapClick:!0}))}render(){return[this.tabs.map(t=>this.renderTabButton(t)),this.highlight&&t("div",{class:"animated tabbar-highlight"})]}static get is(){return"ion-tabbar"}static get encapsulation(){return"shadow"}static get properties(){return{canScrollLeft:{state:!0},canScrollRight:{state:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},highlight:{type:Boolean,attr:"highlight"},keyboardVisible:{state:!0},layout:{type:String,attr:"layout"},mode:{type:String,attr:"mode"},placement:{type:String,attr:"placement"},queue:{context:"queue"},selectedTab:{type:"Any",attr:"selected-tab",watchCallbacks:["updateHighlight"]},tabs:{type:"Any",attr:"tabs"},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionTabbarClick",method:"ionTabbarClick",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:keyboardWillHide",method:"onKeyboardWillHide"},{name:"body:keyboardWillShow",method:"onKeyboardWillShow"},{name:"window:resize",method:"updateHighlight",passive:!0}]}static get style(){return".sc-ion-tabbar-md-h{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:100%;background:var(--background);color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.ion-color.sc-ion-tabbar-md-h{--background:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb), 0.7);--color-selected:var(--ion-color-contrast)}.tabbar-hidden.sc-ion-tabbar-md-h{display:none!important}.placement-top.sc-ion-tabbar-md-h{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.placement-bottom.sc-ion-tabbar-md-h{padding-bottom:var(--ion-safe-area-bottom)}.tabbar-highlight.sc-ion-tabbar-md{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;display:block;position:absolute;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0);background:currentColor}.tabbar-highlight.animated.sc-ion-tabbar-md{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}.placement-top.sc-ion-tabbar-md-h   .tabbar-highlight.sc-ion-tabbar-md{bottom:0}.placement-bottom.sc-ion-tabbar-md-h   .tabbar-highlight.sc-ion-tabbar-md{top:0}.layout-icon-start.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--flex-direction:row;--icon-transform-selected:translate3d(-6px, 0, 0)}.layout-icon-end.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--flex-direction:row-reverse;--icon-transform-selected:translate3d(6px, 0, 0)}.layout-icon-bottom.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--flex-direction:column-reverse;--label-margin-top:-2px;--label-transform:transform-origin(center, top);--icon-transform-selected:translate3d(0, 2px, 0)}.layout-icon-end.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-start.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-label-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--justify-content:center}.layout-icon-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--icon-display:none}.layout-label-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--label-display:none}.layout-icon-bottom.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-top.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--badge-end:calc(50% - 30px)}.layout-icon-end.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-start.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--badge-end:calc(50% - 50px)}.tab-btn.sc-ion-tabbar-md{font-family:inherit;font-size:inherit;letter-spacing:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:var(--flex-direction,column);flex-direction:var(--flex-direction,column);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:var(--justify-content,flex-start);-ms-flex-pack:var(--justify-content,flex-start);justify-content:var(--justify-content,flex-start);width:100%;height:100%;border:0;outline:0;background:0 0;text-decoration:none;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.tab-btn.sc-ion-tabbar-md:focus-visible{background:var(--background-focused)}.tab-btn-selected.sc-ion-tabbar-md, .tab-btn.sc-ion-tabbar-md:hover{color:var(--color-selected)}.tab-btn-hidden.sc-ion-tabbar-md{display:none!important}.tab-btn-disabled.sc-ion-tabbar-md{pointer-events:none;opacity:.4}.tab-btn-text.sc-ion-tabbar-md{margin-top:var(--label-margin-top);margin-bottom:var(--label-margin-bottom);display:var(--label-display,block);font-size:var(--label-font-size);line-height:var(--label-line-height)}.tab-btn-icon.sc-ion-tabbar-md{margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:var(--icon-display,block);min-width:var(--icon-min-width);height:var(--icon-height,1em);font-size:var(--icon-font-size)}.tab-btn-icon.sc-ion-tabbar-md, .tab-btn-text.sc-ion-tabbar-md{-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.tab-btn-has-label-only.sc-ion-tabbar-md   .tab-btn-text.sc-ion-tabbar-md{white-space:normal}.tab-btn-has-icon-only.sc-ion-tabbar-md, .tab-btn-has-label-only.sc-ion-tabbar-md{--justify-content:center}.tab-btn-badge.sc-ion-tabbar-md{right:4%;top:6%;right:var(--badge-end,calc(50% - 30px));padding:1px 6px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:auto;font-size:12px;line-height:16px}.tab-btn-has-label-only.sc-ion-tabbar-md   .tab-btn-badge.sc-ion-tabbar-md{--badge-end:calc(50% - 50px)}.tab-btn-has-icon-only.sc-ion-tabbar-md   .tab-btn-badge.sc-ion-tabbar-md{--badge-end:calc(50% - 30px)}.tab-btn-selected.sc-ion-tabbar-md   .tab-btn-icon.sc-ion-tabbar-md{-webkit-transform:var(--icon-transform-selected);transform:var(--icon-transform-selected)}.tab-btn.sc-ion-tabbar-md{padding:8px 12px 10px;max-width:168px;font-weight:400}.tab-btn-text.sc-ion-tabbar-md{margin:0;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transform:var(--label-transform);transform:var(--label-transform);-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out;font-size:12px;text-transform:none}.tab-btn-selected.sc-ion-tabbar-md   .tab-btn-text.sc-ion-tabbar-md{--label-transform:scale3d(1.16667, 1.16667, 1);-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out}.tab-btn-icon.sc-ion-tabbar-md{-webkit-transform-origin:center center;transform-origin:center center;width:22px;height:22px;-webkit-transform:var(--icon-transform);transform:var(--icon-transform);-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out;font-size:22px}.sc-ion-tabbar-md-h{--color:var(--ion-tabbar-text-color, var(--ion-text-color-step-400, #666666));--color-selected:var(--ion-tabbar-text-color-active, #488aff);--background:var(--ion-tabbar-background-color, #f8f8f8);--background-focused:var(--ion-tabbar-background-color-focused, #dadada);--icon-transform-selected:translate3d(0, -2px, 0);height:56px;border-top:1px solid rgba(var(--ion-tabbar-border-color-rgb,0,0,0),.07);contain:strict}.layout-icon-top.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--label-margin-bottom:-2px}"}static get styleMode(){return"md"}}class n{constructor(){this.ids=-1,this.transitioning=!1,this.tabsId=++o,this.tabs=[],this.tabbarHidden=!1,this.translucent=!1,this.useRouter=!1}componentWillLoad(){this.useRouter||(this.useRouter=!!this.doc.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.loadConfig("tabbarPlacement","bottom"),this.loadConfig("tabbarLayout","icon-top"),this.loadConfig("tabbarHighlight",!1),this.initTabs(),this.ionNavWillLoad.emit()}async componentDidLoad(){await this.initSelect()}componentDidUnload(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0}onTabMutated(){this.el.forceUpdate()}onTabClicked(t){const e=t.detail;if(this.useRouter&&null!=e.href){const t=this.doc.querySelector("ion-router");t&&t.push(e.href)}else this.select(e)}async select(t){const e=this.getTab(t);return!!this.shouldSwitch(e)&&(await this.setActive(e),await this.notifyRouter(),this.tabSwitch(),!0)}async setRouteId(t){const e=this.getTab(t);return this.shouldSwitch(e)?(await this.setActive(e),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}getRouteId(){const t=this.selectedTab&&this.selectedTab.getTabId();return t?{id:t,element:this.selectedTab}:void 0}getTab(t){return"string"==typeof t?this.tabs.find(e=>e.getTabId()===t):"number"==typeof t?this.tabs[t]:t}getSelected(){return this.selectedTab}initTabs(){(this.tabs=Array.from(this.el.querySelectorAll("ion-tab"))).forEach(t=>{const e=`t-${this.tabsId}-${++this.ids}`;t.btnId="tab-"+e,t.id="tabpanel-"+e})}async initSelect(){const t=this.tabs;if(this.useRouter)return;const e=t.find(t=>t.selected)||t.find(t=>t.show&&!t.disabled);for(const a of t)a!==e&&(a.selected=!1);e&&await e.setActive(),this.selectedTab=e,e&&(e.selected=!0,e.active=!0)}loadConfig(t,e){void 0===this[t]&&(this[t]=this.config.get(t,e))}setActive(t){if(this.transitioning)return Promise.reject("transitioning already happening");if(!t)return Promise.reject("no tab is selected");for(const e of this.tabs)t!==e&&(e.selected=!1);return this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionNavWillChange.emit(),t.setActive()}tabSwitch(){const t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&(t.selected=!0,e!==t&&(e&&(e.active=!1),this.ionChange.emit({tab:t}),this.ionNavDidChange.emit()))}notifyRouter(){if(this.useRouter){const t=this.doc.querySelector("ion-router");if(t)return t.navChanged(1)}return Promise.resolve(!1)}shouldSwitch(t){const e=this.selectedTab;return!(!t||t===e||this.transitioning)}hostData(){return{class:a(this.color)}}render(){return[t("div",{class:"tabs-inner"},t("slot",null)),!this.tabbarHidden&&t("ion-tabbar",{tabs:this.tabs.slice(),color:this.color,selectedTab:this.selectedTab,highlight:this.tabbarHighlight,placement:this.tabbarPlacement,layout:this.tabbarLayout,translucent:this.translucent})]}static get is(){return"ion-tabs"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},doc:{context:"document"},el:{elementRef:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},name:{type:String,attr:"name"},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabbarHidden:{type:Boolean,attr:"tabbar-hidden"},tabbarHighlight:{type:Boolean,attr:"tabbar-highlight",mutable:!0},tabbarLayout:{type:String,attr:"tabbar-layout",mutable:!0},tabbarPlacement:{type:String,attr:"tabbar-placement",mutable:!0},tabs:{state:!0},translucent:{type:Boolean,attr:"translucent"},useRouter:{type:Boolean,attr:"use-router",mutable:!0}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionTabMutated",method:"onTabMutated"},{name:"ionTabbarClick",method:"onTabClicked"}]}static get style(){return".sc-ion-tabs-h{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner.sc-ion-tabs{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;contain:layout size style}"}}let o=-1;export{i as IonTab,s as IonTabbar,n as IonTabs};