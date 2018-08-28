/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}u((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}};Ionic.loadBundle("0sz8vurj",["require","exports","./chunk-5b27ab2d.js"],function(t,e,n){var i=window.Ionic.h,o=function(){function e(){this._isOpen=!1,this.lastOnEnd=0,this.isAnimating=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}return e.prototype.typeChanged=function(t,e){var n=this.contentEl;n&&e&&(n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},e.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},e.prototype.sideChanged=function(){this.isEndSide=n.isEndSide(this.win,this.side)},e.prototype.swipeGestureChanged=function(){this.updateState()},e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return null==this.type&&(this.type=this.config.get("menuType","ios"===this.mode?"reveal":"overlay")),this.isServer?(this.disabled=!0,[3,3]):[3,1];case 1:return t=this,[4,this.lazyMenuCtrl.componentOnReady()];case 2:t.menuCtrl=e.sent(),e.label=3;case 3:return[2]}})})},e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var e,n,i,o,r,s,a=this;return __generator(this,function(u){switch(u.label){case 0:return this.isServer?[2]:(e=this.el,n=e.parentNode,(i=this.contentId?document.getElementById(this.contentId):n&&n.querySelector&&n.querySelector("[main]"))&&i.tagName?(this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,null),this.sideChanged(),!0!=(o=!this.disabled)&&void 0!==o||(r=this.menuCtrl.getMenus(),o=!r.some(function(t){return t.side===a.side&&!t.disabled})),this.menuCtrl._register(this),this.ionMenuChange.emit({disabled:!o,open:this._isOpen}),s=this,[4,new Promise(function(e,n){t(["./gesture.js"],e,n)})]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]));case 1:return s.gesture=u.sent().createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:40,threshold:10,canStart:this.canStart.bind(this),onWillStart:this.onWillStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this)}),this.disabled=!o,this.updateState(),[2]}})})},e.prototype.componentDidUnload=function(){this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},e.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.target.isPane(this.el),this.updateState()},e.prototype.onBackdropClick=function(t){this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())},e.prototype.isOpen=function(){return this._isOpen},e.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},e.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},e.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},e.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),this.menuCtrl._setOpen(this,t,e)},e.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),__awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return!this.isActive()||this.isAnimating||t===this._isOpen?[2,this._isOpen]:(this.beforeAnimation(),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(t,e)];case 2:return n.sent(),this.afterAnimation(t),[2,t]}})})},e.prototype.isActive=function(){return!this.disabled&&!this.isPaneVisible},e.prototype.getWidth=function(){return this.width},e.prototype.loadAnimation=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return(t=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,this.menuCtrl.createAnimation(this.type,this)]);case 1:return e.animation=n.sent(),[2]}})})},e.prototype.startAnimation=function(t,e){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!t),e?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},e.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this.isActive()},e.prototype.canStart=function(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpen()&&(e=this.win,n=t.currentX,i=this.isEndSide,o=this.maxEdgeStart,i?n>=e.innerWidth-o:n<=o));var e,n,i,o},e.prototype.onWillStart=function(){return this.beforeAnimation(),this.loadAnimation()},e.prototype.onDragStart=function(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():n.assert(!1,"isAnimating has to be true")},e.prototype.onDragMove=function(t){if(this.isAnimating&&this.animation){var e=r(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(e)}else n.assert(!1,"isAnimating has to be true")},e.prototype.onDragEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var i=this._isOpen,o=this.isEndSide,s=r(t.deltaX,i,o),a=this.width,u=s/a,l=t.velocityX,c=a/2,h=l>=0&&(l>.2||t.deltaX>c),d=l<=0&&(l<-.2||t.deltaX<-c),p=i?o?h:d:o?d:h,m=!i&&p;i&&!p&&(m=!0);var b=(p?1-u:u)*a,f=0;if(b>5){var g=b/Math.abs(l);f=Math.min(g,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(function(){return e.afterAnimation(m)},{clearExistingCallacks:!0}).progressEnd(p,u,f)}else n.assert(!1,"isAnimating has to be true")},e.prototype.beforeAnimation=function(){n.assert(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(s),this.backdropEl&&this.backdropEl.classList.add(a),this.isAnimating=!0},e.prototype.afterAnimation=function(t){n.assert(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this.enableListener(this,"body:click",t),t?(this.contentEl&&this.contentEl.classList.add(u),this.ionOpen.emit()):(this.el.classList.remove(s),this.contentEl&&this.contentEl.classList.remove(u),this.backdropEl&&this.backdropEl.classList.remove(a),this.ionClose.emit())},e.prototype.updateState=function(){var t=this.isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),n.assert(!this.isAnimating,"can not be animating")},e.prototype.forceClosing=function(){n.assert(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.startAnimation(!1,!1),this.afterAnimation(!1)},e.prototype.hostData=function(){var t,e=this.isEndSide,n=this.type,i=this.disabled,o=this.isPaneVisible;return{role:"complementary",class:(t={},t["menu-type-"+n]=!0,t["menu-enabled"]=!i,t["menu-side-end"]=e,t["menu-side-start"]=!e,t["menu-pane-visible"]=o,t)}},e.prototype.render=function(){var t=this;return[i("div",{class:"menu-inner",ref:function(e){return t.menuInnerEl=e}},i("slot",null)),i("ion-backdrop",{ref:function(e){return t.backdropEl=e},class:"menu-backdrop",tappable:!1,stopPropagation:!1})]},Object.defineProperty(e,"is",{get:function(){return"ion-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},getWidth:{method:!0},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionOpen",method:"ionOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClose",method:"ionClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"body:click",method:"onBackdropClick",capture:!0,disabled:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--width:304px;--width-small:264px;left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);height:100%;contain:strict;background:var(--ion-background-color,#fff)}:host(.menu-side-start) .menu-inner{right:auto;left:0}:host(.menu-side-end) .menu-inner{right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}.menu-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}\@media (max-width:340px){.menu-inner{width:var(--width-small)}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function r(t,e,n){return Math.max(0,e!==n?-t:t)}var s="show-menu",a="show-backdrop",u="menu-content-open",l=function(){function t(){this.autoHide=!0}return t.prototype.hostData=function(){return{class:{button:!0}}},t.prototype.render=function(){var t=this.config.get("menuIcon","menu");return i("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},i("button",{type:"button"},i("slot",null,i("ion-icon",{icon:t,mode:this.mode,color:this.color,lazy:!1}))))},Object.defineProperty(t,"is",{get:function(){return"ion-menu-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{pointer-events:all;color:var(--ion-color-base);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;--ion-color-base:currentColor}button{font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:0;background:0 0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 8px}ion-icon{margin:0;padding:0;pointer-events:none;font-size:26px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.visible=!1,this.autoHide=!0}return t.prototype.componentDidLoad=function(){this.updateVisibility()},t.prototype.onClick=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return[4,h(this.doc)];case 1:return(t=n.sent())&&(e=t.get(this.menu))&&e.isActive()?[2,t.toggle(this.menu)]:[2,!1]}})})},t.prototype.updateVisibility=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return[4,h(this.doc)];case 1:return(t=n.sent())&&(e=t.get(this.menu))&&e.isActive()?(this.visible=!0,[2]):(this.visible=!1,[2])}})})},t.prototype.hostData=function(){var t=this.autoHide&&!this.visible;return{"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}}},t.prototype.render=function(){return i("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-menu-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:!0,configurable:!0}),t}();function h(t){var e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}e.IonMenu=o,e.IonMenuButton=l,e.IonMenuToggle=c,Object.defineProperty(e,"__esModule",{value:!0})});