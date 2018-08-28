/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))(function(n,i){function s(t){try{a(o.next(t))}catch(t){i(t)}}function l(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(s,l)}a((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var r,o,n,i,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){s.label=i[1];break}if(6===i[0]&&s.label<n[1]){s.label=n[1],n=i;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(i);break}n[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};Ionic.loadBundle("hbw3vxe8",["require","exports","./chunk-25b8aac7.js","./chunk-db50cf96.js"],function(t,e,r,o){window.Ionic.h;var n=function(){function e(){this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.activated=!1,this.disabled=!0}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var e,r;return __generator(this,function(o){switch(o.label){case 0:return(e=this.el.closest("ion-content"))?[4,e.componentOnReady()]:[3,2];case 1:o.sent(),this.scrollEl=e.getScrollElement(),o.label=2;case 2:return r=this,[4,new Promise(function(e,r){t(["./gesture.js"],e,r)})];case 3:return r.gesture=o.sent().createGesture({el:this.doc.body,queue:this.queue,gestureName:"reorder",gesturePriority:90,disableScroll:!0,threshold:0,direction:"y",passive:!1,canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this)}),this.disabledChanged(),[2]}})})},e.prototype.componentDidUnload=function(){this.onDragEnd()},e.prototype.canStart=function(t){if(this.selectedItemEl)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=function(t,e){for(var r,o=0;t&&o<6;){if((r=t.parentNode)===e)return t;t=r,o++}return null}(e,this.el);return r?(t.data=r,!0):(console.error("reorder node not found"),!1)},e.prototype.onDragStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,o=this.cachedHeights;o.length=0;var n=this.el.children;if(n&&0!==n.length){for(var l=0,c=0;c<n.length;c++){var h=n[c];l+=h.offsetHeight,o.push(l),h.$ionIndex=c}var u=this.el.getBoundingClientRect();if(this.containerTop=u.top,this.containerBottom=u.bottom,this.scrollEl){var d=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=d.top+s,this.scrollElBottom=d.bottom-s}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=i(e),this.selectedItemHeight=e.offsetHeight,this.activated=!0,e.classList.add(a),r.hapticSelectionStart()}},e.prototype.onDragMove=function(t){var e=this.selectedItemEl;if(e){var o=this.autoscroll(t.currentY),n=this.containerTop-o,s=this.containerBottom-o,l=Math.max(n,Math.min(t.currentY,s)),a=o+l-t.startY,c=l-n,h=this.itemIndexForTop(c);if(void 0!==h&&h!==this.lastToIndex){var u=i(e);this.lastToIndex=h,r.hapticSelectionChanged(),this.reorderMove(u,h)}e.style.transform="translateY("+a+"px)"}},e.prototype.onDragEnd=function(){var t=this;this.activated=!1;var e=this.selectedItemEl;if(e){var o=this.el.children,n=this.lastToIndex,s=i(e),l=s<n?o[n+1]:o[n];this.el.insertBefore(e,l);for(var c=o.length,h=0;h<c;h++)o[h].style.transform="";var u=function(){t.selectedItemEl&&(t.selectedItemEl.style.transition="",t.selectedItemEl.classList.remove(a),t.selectedItemEl=void 0)};n===s?(e.style.transition="transform 200ms ease-in-out",setTimeout(u,200)):u(),r.hapticSelectionEnd()}},e.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r},e.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,o=this.el.children,n=0;n<o.length;n++){var i="";n>t&&n<=e?i="translateY("+-r+"px)":n<t&&n>=e&&(i="translateY("+r+"px)"),o[n].style.transform=i}},e.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-l:t>this.scrollElBottom&&(e=l),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},e.prototype.hostData=function(){return{class:Object.assign({},o.createThemedClasses(this.mode,"reorder-group"),{"reorder-enabled":!this.disabled,"reorder-list-active":this.activated})}},Object.defineProperty(e,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}"},enumerable:!0,configurable:!0}),e}();function i(t){return t.$ionIndex}var s=60,l=10,a="reorder-selected";e.IonReorderGroup=n,Object.defineProperty(e,"__esModule",{value:!0})});