(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2047],{"./libs/angular/src/v-angular/breadcrumbs/breadcrumbs.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/**\n* @deprecated\n* Use `add-focus` instead\n*/\n/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */\n/** \n  * @deprecated in favor of Grouped list component\n  */\n/** \n  * @deprecated in favor of Grouped list component\n  */\n/*\n\nMixin for link variants\nBase on background color of parent element eg. white links on dark backgrounds etc.\n\n*/\n:host ol {\n  padding-left: 0;\n  margin-bottom: 0;\n  margin-top: 0;\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  flex-direction: row !important;\n  align-items: center;\n  gap: 4px;\n}\n:host ol > li {\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n  border: 0;\n  display: block;\n  position: relative;\n}\n:host ol > li::before {\n  font-weight: 500;\n  display: inline-block;\n  left: 0;\n  position: absolute;\n  text-align: center;\n}\n:host ol > li {\n  padding: 0 !important;\n  font-weight: 500;\n}\n:host ol > li::before {\n  display: none !important;\n}\n:host ol > li.icon {\n  display: flex;\n}\n:host ol > li.icon > svg {\n  height: 1rem;\n  width: 1rem;\n}\n:host ol a {\n  text-decoration: underline;\n  text-underline-offset: 3px;\n  color: rgb(0, 98, 188);\n  font-weight: 500;\n  border: none;\n  border-radius: 0.125rem;\n}\n:host ol a:hover {\n  text-underline-offset: 2px;\n  text-decoration-thickness: 2px;\n}\n:host ol a:active {\n  text-underline-offset: 1px;\n}\n:host ol a:focus:not(:focus-visible) {\n  box-shadow: none;\n  outline: 0;\n}\n:host ol a:focus, :host ol a:focus-within {\n  outline-color: var(--gds-sys-color-focus-outline);\n  outline-style: solid;\n  outline-width: 0.125rem;\n  outline-offset: 0.125rem;\n}\n:host ol a:focus:not([aria-disabled]) {\n  color: rgb(0, 146, 225);\n}\n:host ol a.link-history:visited {\n  color: rgb(103, 58, 182);\n}\n:host ol a.link-history:visited {\n  color: rgb(103, 58, 182);\n}\n:host ol svg {\n  width: 1rem;\n  height: 1rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/angular/src/v-angular/external-link/external-link.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>NgvExternalLinkDirective});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_router__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs");let NgvExternalLinkDirective=class NgvExternalLinkDirective{constructor(link){this.link=link,this.external=!1}ngOnInit(){this.external&&(this.link.onClick=()=>(window.location.href=this.link.commands[0],!1))}static#_=this.ctorParameters=()=>[{type:_angular_router__WEBPACK_IMPORTED_MODULE_0__.Wk}];static#_2=this.propDecorators={external:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]}};NgvExternalLinkDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({selector:"a[routerLink]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Sn)("design:paramtypes",[_angular_router__WEBPACK_IMPORTED_MODULE_0__.Wk])],NgvExternalLinkDirective)},"./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>combineLatest});var _Observable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_from__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),_util_identity__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");function combineLatest(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.lI)(args),resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.ms)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),observables=_a.args,keys=_a.keys;if(0===observables.length)return(0,_from__WEBPACK_IMPORTED_MODULE_2__.H)([],scheduler);var result=new _Observable__WEBPACK_IMPORTED_MODULE_3__.c(function combineLatestInit(observables,scheduler,valueTransform){void 0===valueTransform&&(valueTransform=_util_identity__WEBPACK_IMPORTED_MODULE_5__.D);return function(subscriber){maybeSchedule(scheduler,(function(){for(var length=observables.length,values=new Array(length),active=length,remainingFirstValues=length,_loop_1=function(i){maybeSchedule(scheduler,(function(){var source=(0,_from__WEBPACK_IMPORTED_MODULE_2__.H)(observables[i],scheduler),hasFirstValue=!1;source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__._)(subscriber,(function(value){values[i]=value,hasFirstValue||(hasFirstValue=!0,remainingFirstValues--),remainingFirstValues||subscriber.next(valueTransform(values.slice()))}),(function(){--active||subscriber.complete()})))}),subscriber)},i=0;i<length;i++)_loop_1(i)}),subscriber)}}(observables,scheduler,keys?function(values){return(0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__.e)(keys,values)}:_util_identity__WEBPACK_IMPORTED_MODULE_5__.D));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.I)(resultSelector)):result}function maybeSchedule(scheduler,execute,subscription){scheduler?(0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__.N)(subscription,scheduler,execute):execute()}},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.U)(1)}()((0,from.H)(args,(0,util_args.lI)(args)))}},"./node_modules/rxjs/dist/esm5/internal/operators/catchError.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>catchError});var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function catchError(selector){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){var handledResult,innerSub=null,syncUnsub=!1;innerSub=source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__._)(subscriber,void 0,void 0,(function(err){handledResult=(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.Tg)(selector(err,catchError(selector)(source))),innerSub?(innerSub.unsubscribe(),innerSub=null,handledResult.subscribe(subscriber)):syncUnsub=!0}))),syncUnsub&&(innerSub.unsubscribe(),innerSub=null,handledResult.subscribe(subscriber))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>mapTo});var _map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");function mapTo(value){return(0,_map__WEBPACK_IMPORTED_MODULE_0__.T)((function(){return value}))}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{e:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.T)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)(args))):fn(args)}(fn,args)}))}},"./libs/angular/src/v-angular/breadcrumbs/breadcrumbs.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>breadcrumbs_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),external_link_directive=__webpack_require__("./libs/angular/src/v-angular/external-link/external-link.directive.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var breadcrumbs_componentngResource=__webpack_require__("./libs/angular/src/v-angular/breadcrumbs/breadcrumbs.component.scss?ngResource"),breadcrumbs_componentngResource_default=__webpack_require__.n(breadcrumbs_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NgvBreadcrumbsComponent=class NgvBreadcrumbsComponent{constructor(){this.thook="breadcrumbs"}static#_=this.propDecorators={thook:[{type:core.HostBinding,args:["attr.data-thook"]},{type:core.Input}],breadcrumbs:[{type:core.Input}]}};NgvBreadcrumbsComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"nggv-breadcrumbs",template:'<nav aria-label="Breadcrumbs">\n  <ol class="gds-breadcrumbs">\n    <ng-container *ngFor="let breadcrumb of breadcrumbs; let i = index">\n      <li [attr.aria-current]="i === breadcrumbs.length - 1">\n        <a\n          [routerLink]="breadcrumb.href"\n          [external]="!!breadcrumb.external"\n          *ngIf="i < breadcrumbs.length - 1; else currentPageRef"\n          >{{ breadcrumb.title }}</a\n        >\n        <ng-template #currentPageRef>\n          <span>{{ breadcrumb.title }}</span>\n        </ng-template>\n      </li>\n      <li class="icon" *ngIf="i < breadcrumbs.length - 1">\n        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path\n            d="M9.22817 5.19072L8.60942 5.80947C8.46255 5.95635 8.46255 6.19385 8.60942 6.34072L14.2563 12.0001L8.60942 17.6595C8.46255 17.8063 8.46255 18.0438 8.60942 18.1907L9.22817 18.8095C9.37505 18.9563 9.61255 18.9563 9.75942 18.8095L16.3032 12.2657C16.45 12.1188 16.45 11.8813 16.3032 11.7345L9.75942 5.19072C9.61255 5.04385 9.37505 5.04385 9.22817 5.19072Z"\n            fill="#000"\n          />\n        </svg>\n      </li>\n    </ng-container>\n  </ol>\n</nav>\n',styles:[breadcrumbs_componentngResource_default()]})],NgvBreadcrumbsComponent);const breadcrumbs_stories={title:"V-Angular/Breadcrumbs",component:NgvBreadcrumbsComponent,decorators:[(0,dist.applicationConfig)({providers:[{provide:common.APP_BASE_HREF,useValue:"/"}]}),(0,dist.moduleMetadata)({imports:[common.CommonModule,testing.c1],declarations:[external_link_directive.K]})]},Primary=(args=>({template:'<nggv-breadcrumbs [breadcrumbs]="breadcrumbs"></nggv-breadcrumbs>',props:args})).bind({});Primary.args={breadcrumbs:[{title:"Home",href:"#"},{title:"Liquidity",href:"#"},{title:"Accounts",href:"#"},{title:"Payments",href:"#"},{title:"Initiate",href:"#"}]};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'(args: NgvBreadcrumbsComponent) => ({\n  template: /*html*/`<nggv-breadcrumbs [breadcrumbs]="breadcrumbs"></nggv-breadcrumbs>`,\n  props: args\n})',...Primary.parameters?.docs?.source}}}}}]);