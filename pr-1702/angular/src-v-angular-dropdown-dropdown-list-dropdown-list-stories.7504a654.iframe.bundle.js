"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[1499],{"./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>lastValueFrom});var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js");function lastValueFrom(source,config){var hasConfig="object"==typeof config;return new Promise((function(resolve,reject){var _value,_hasValue=!1;source.subscribe({next:function(value){_value=value,_hasValue=!0},error:reject,complete:function(){_hasValue?resolve(_value):hasConfig?resolve(config.defaultValue):reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.G)}})}))}},"./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>debounceTime});var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function debounceTime(dueTime,scheduler){return void 0===scheduler&&(scheduler=_scheduler_async__WEBPACK_IMPORTED_MODULE_0__.E),(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.N)((function(source,subscriber){var activeTask=null,lastValue=null,lastTime=null,emit=function(){if(activeTask){activeTask.unsubscribe(),activeTask=null;var value=lastValue;lastValue=null,subscriber.next(value)}};function emitWhenIdle(){var targetTime=lastTime+dueTime,now=scheduler.now();if(now<targetTime)return activeTask=this.schedule(void 0,targetTime-now),void subscriber.add(activeTask);emit()}source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,(function(value){lastValue=value,lastTime=scheduler.now(),activeTask||(activeTask=scheduler.schedule(emitWhenIdle,dueTime),subscriber.add(activeTask))}),(function(){emit(),subscriber.complete()}),void 0,(function(){lastValue=activeTask=null})))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/delay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>delay});var scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),concat=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),take=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),noop=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");var mapTo=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js"),mergeMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");function delayWhen(delayDurationSelector,subscriptionDelay){return subscriptionDelay?function(source){return(0,concat.x)(subscriptionDelay.pipe((0,take.s)(1),function ignoreElements(){return(0,lift.N)((function(source,subscriber){source.subscribe((0,OperatorSubscriber._)(subscriber,noop.l))}))}()),source.pipe(delayWhen(delayDurationSelector)))}:(0,mergeMap.Z)((function(value,index){return(0,innerFrom.Tg)(delayDurationSelector(value,index)).pipe((0,take.s)(1),(0,mapTo.u)(value))}))}var timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function delay(due,scheduler){void 0===scheduler&&(scheduler=scheduler_async.E);var duration=(0,timer.O)(due,scheduler);return delayWhen((function(){return duration}))}},"./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>takeUntil});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_noop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");function takeUntil(notifier){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,(function(){return subscriber.complete()}),_util_noop__WEBPACK_IMPORTED_MODULE_3__.l)),!subscriber.closed&&source.subscribe(subscriber)}))}},"./node_modules/scroll-into-view-if-needed/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>dist_e});const t=t=>"object"==typeof t&&null!=t&&1===t.nodeType,e=(t,e)=>(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t,n=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e(o.overflowY,n)||e(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return!1},o=(t,e,n,o,l,r,i,s)=>r<t&&i>e||r>t&&i<e?0:r<=t&&s<=n||i>=e&&s>=n?r-t-o:i>e&&s<n||r<t&&s>n?i-e+l:0,l=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},dist_r=(e,r)=>{var i,s,d,h;if("undefined"==typeof document)return[];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=r,p="function"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&p(W);){if(W=l(W),W===m){w.push(W);break}null!=W&&W===document.body&&n(W)&&!n(document.documentElement)||null!=W&&n(W,g)&&w.push(W)}const b=null!=(s=null==(i=window.visualViewport)?void 0:i.width)?s:innerWidth,H=null!=(h=null==(d=window.visualViewport)?void 0:d.height)?h:innerHeight,{scrollX:y,scrollY:M}=window,{height:v,width:E,top:x,right:C,bottom:I,left:R}=e.getBoundingClientRect(),{top:T,right:B,bottom:F,left:V}=(t=>{const e=window.getComputedStyle(t);return{top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}})(e);let k="start"===f||"nearest"===f?x-T:"end"===f?I+F:x+v/2-T+F,D="center"===u?R+E/2-V+B:"end"===u?C+B:R-V;const L=[];for(let t=0;t<w.length;t++){const e=w[t],{height:n,width:l,top:r,right:i,bottom:s,left:d}=e.getBoundingClientRect();if("if-needed"===c&&x>=0&&R>=0&&I<=H&&C<=b&&x>=r&&I<=s&&R>=d&&C<=i)return L;const h=getComputedStyle(e),a=parseInt(h.borderLeftWidth,10),g=parseInt(h.borderTopWidth,10),p=parseInt(h.borderRightWidth,10),W=parseInt(h.borderBottomWidth,10);let T=0,B=0;const F="offsetWidth"in e?e.offsetWidth-e.clientWidth-a-p:0,V="offsetHeight"in e?e.offsetHeight-e.clientHeight-g-W:0,S="offsetWidth"in e?0===e.offsetWidth?0:l/e.offsetWidth:0,X="offsetHeight"in e?0===e.offsetHeight?0:n/e.offsetHeight:0;if(m===e)T="start"===f?k:"end"===f?k-H:"nearest"===f?o(M,M+H,H,g,W,M+k,M+k+v,v):k-H/2,B="start"===u?D:"center"===u?D-b/2:"end"===u?D-b:o(y,y+b,b,a,p,y+D,y+D+E,E),T=Math.max(0,T+M),B=Math.max(0,B+y);else{T="start"===f?k-r-g:"end"===f?k-s+W+V:"nearest"===f?o(r,s,n,g,W+V,k,k+v,v):k-(r+n/2)+V/2,B="start"===u?D-d-a:"center"===u?D-(d+l/2)+F/2:"end"===u?D-i+p+F:o(d,i,l,a,p+F,D,D+E,E);const{scrollLeft:t,scrollTop:h}=e;T=0===X?0:Math.max(0,Math.min(h+T/X,e.scrollHeight-n/X+V)),B=0===S?0:Math.max(0,Math.min(t+B/S,e.scrollWidth-l/S+F)),k+=h-T,D+=t-B}L.push({el:e,top:T,left:B})}return L},dist_o=t=>!1===t?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&0!==Object.keys(t).length)(t)?t:{block:"start",inline:"nearest"};function dist_e(e,r){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(e))return;const n=(t=>{const o=window.getComputedStyle(t);return{top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(e);if((t=>"object"==typeof t&&"function"==typeof t.behavior)(r))return r.behavior(dist_r(e,r));const l="boolean"==typeof r||null==r?void 0:r.behavior;for(const{el:a,top:i,left:s}of dist_r(e,dist_o(r))){const t=i-n.top+n.bottom,o=s-n.left+n.right;a.scroll({top:t,left:o,behavior:l})}}},"./libs/angular/src/v-angular/dropdown/dropdown-list/dropdown-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/angular/src/v-angular/i18n/i18n.module.ts"),_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/angular/src/v-angular/tooltip/tooltip.directive.ts"),_storybook_angular__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_input_input_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/angular/src/v-angular/input/input.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"V-Angular/DropdownList",component:__webpack_require__("./libs/angular/src/v-angular/dropdown/dropdown-list/dropdown-list.component.ts").w,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_2__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.g)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_2__.moduleMetadata)({declarations:[_input_input_component__WEBPACK_IMPORTED_MODULE_3__.N,_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.M],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_7__.YN,_angular_forms__WEBPACK_IMPORTED_MODULE_7__.X1,_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.g]})]},options=[{key:JSON.stringify({accountNo:"123456",type:"pg"}),accountNo:"12345-6",type:"pg",proxyId:"string",name:"Radiohjälpen",bicfi:"bicno",label:"Radiohjälpen: pg"},{key:JSON.stringify({accountNo:"123456",type:"bg"}),accountNo:"123-456",type:"bg",proxyId:"string",name:"Radiohjälpen",bicfi:"bicno",label:"Radiohjälpen: bg"}],Primary=(args=>{let expanded=!1;const formControl=new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.hs;formControl.valueChanges.subscribe();return{template:'\n      <div style="width: 264px;position: relative;">\n\n        <nggv-input\n          name="test"\n          [formControl]="formControl"\n          (click)="$event.stopPropagation();expanded = !expanded">\n        </nggv-input>\n\n        <nggv-dropdown-list\n        style="width: 264px"\n        [expanded]=expanded\n        [options]=options\n        (selectedValueChanged)="onSelectedValueChanged($event)">\n        </nggv-dropdown-list>\n      </div>',props:{...args,formControl,onSelectedValueChanged:val=>{expanded=!1,formControl.setValue(val?.accountNo)},expanded}}}).bind({},{options,keyUp:{}}),__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"Template.bind({}, primaryArgs as any)",...Primary.parameters?.docs?.source}}}}}]);