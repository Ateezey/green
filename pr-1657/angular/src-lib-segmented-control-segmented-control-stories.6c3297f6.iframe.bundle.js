"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[3297],{"./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>combineLatest});var _Observable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_from__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),_util_identity__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");function combineLatest(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.lI)(args),resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.ms)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),observables=_a.args,keys=_a.keys;if(0===observables.length)return(0,_from__WEBPACK_IMPORTED_MODULE_2__.H)([],scheduler);var result=new _Observable__WEBPACK_IMPORTED_MODULE_3__.c(function combineLatestInit(observables,scheduler,valueTransform){void 0===valueTransform&&(valueTransform=_util_identity__WEBPACK_IMPORTED_MODULE_5__.D);return function(subscriber){maybeSchedule(scheduler,(function(){for(var length=observables.length,values=new Array(length),active=length,remainingFirstValues=length,_loop_1=function(i){maybeSchedule(scheduler,(function(){var source=(0,_from__WEBPACK_IMPORTED_MODULE_2__.H)(observables[i],scheduler),hasFirstValue=!1;source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__._)(subscriber,(function(value){values[i]=value,hasFirstValue||(hasFirstValue=!0,remainingFirstValues--),remainingFirstValues||subscriber.next(valueTransform(values.slice()))}),(function(){--active||subscriber.complete()})))}),subscriber)},i=0;i<length;i++)_loop_1(i)}),subscriber)}}(observables,scheduler,keys?function(values){return(0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__.e)(keys,values)}:_util_identity__WEBPACK_IMPORTED_MODULE_5__.D));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.I)(resultSelector)):result}function maybeSchedule(scheduler,execute,subscription){scheduler?(0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__.N)(subscription,scheduler,execute):execute()}},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.U)(1)}()((0,from.H)(args,(0,util_args.lI)(args)))}},"./node_modules/rxjs/dist/esm5/internal/operators/catchError.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>catchError});var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function catchError(selector){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){var handledResult,innerSub=null,syncUnsub=!1;innerSub=source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__._)(subscriber,void 0,void 0,(function(err){handledResult=(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.Tg)(selector(err,catchError(selector)(source))),innerSub?(innerSub.unsubscribe(),innerSub=null,handledResult.subscribe(subscriber)):syncUnsub=!0}))),syncUnsub&&(innerSub.unsubscribe(),innerSub=null,handledResult.subscribe(subscriber))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>mapTo});var _map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");function mapTo(value){return(0,_map__WEBPACK_IMPORTED_MODULE_0__.T)((function(){return value}))}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{e:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.T)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)(args))):fn(args)}(fn,args)}))}},"./libs/angular/src/lib/segmented-control/segmented-control.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithRouter:()=>WithRouter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>segmented_control_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NggSegmentedControlComponent=class NggSegmentedControlComponent{static#_=this.propDecorators={$controls:[{type:core.Input}]}};NggSegmentedControlComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-segmented-control",template:'\n    <div class="group">\n      <a\n        *ngFor="let control of $controls | async"\n        [routerLink]="control.url"\n        routerLinkActive="active"\n        class="button"\n        >{{ control.text }}</a\n      >\n    </div>\n  ',changeDetection:core.ChangeDetectionStrategy.OnPush})],NggSegmentedControlComponent);var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");let OptionAComponent=class OptionAComponent{};OptionAComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:' <p class="mt-4">Option A</p> '})],OptionAComponent);let OptionBComponent=class OptionBComponent{};OptionBComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:' <p class="mt-4">Option B</p> '})],OptionBComponent);const segmented_control_stories={title:"Components/Segmented control",component:NggSegmentedControlComponent,parameters:{componentIds:["component-segmented-control"]},decorators:[(0,dist.moduleMetadata)({declarations:[OptionAComponent,OptionBComponent],imports:[common.CommonModule]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(router.iI.forRoot([]))]}),(0,dist.componentWrapperDecorator)((story=>`${story}<router-outlet></router-outlet>`))]},WithRouter=()=>({props:{$controls:(0,of.of)([{text:"Option A",url:"/option-a"},{text:"Option B",url:"/option-b"}])}}),__namedExportsOrder=["WithRouter"];WithRouter.parameters={...WithRouter.parameters,docs:{...WithRouter.parameters?.docs,source:{originalSource:"() => ({\n  props: {\n    $controls: of([{\n      text: 'Option A',\n      url: '/option-a'\n    }, {\n      text: 'Option B',\n      url: '/option-b'\n    }])\n  }\n})",...WithRouter.parameters?.docs?.source}}}}}]);