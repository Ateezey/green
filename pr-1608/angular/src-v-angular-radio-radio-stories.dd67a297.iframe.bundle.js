(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[4327],{"./libs/angular/src/v-angular/radio/radio.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/**\n* @deprecated\n* Use `add-focus` instead\n*/\n/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */\n/* base style for forms */\n/* horizontal layout for forms */\n/* label for checkboxes and radio buttons */\n/* form group */\n/* form text */\n:host {\n  /* Hide the browser\'s default radio */\n  /* Style for custom radio */\n  /* Hover state */\n  /* Checked state */\n  /* Checked Hover state */\n  /* Valid state */\n  /* Invalid state */\n  /* Disabled state */\n}\n:host .ngv-field--locked {\n  display: inline-block;\n  border-radius: 0.25em;\n  position: relative;\n  min-height: 2em;\n  padding: 0.5em 0.75em 0.5em 0em;\n}\n:host .form-control {\n  padding-bottom: 0.75rem;\n  padding-top: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border: 1px solid transparent;\n  border-radius: var(--gds-sys-shape-corner-medium);\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row-reverse;\n  font: inherit;\n  justify-content: flex-end;\n  position: relative;\n  user-select: none;\n  -webkit-user-select: none;\n}\n:host .form-control:has(input:disabled) {\n  cursor: not-allowed;\n}\n:host label.form-control input[type=radio] {\n  cursor: pointer;\n  height: 0;\n  opacity: 0;\n  position: absolute;\n  width: 0;\n  z-index: -1;\n}\n:host label.form-control:has(input[type=radio]:focus-visible):focus:not(:focus-visible) {\n  box-shadow: none;\n  outline: 0;\n}\n:host label.form-control:has(input[type=radio]:focus-visible):focus, :host label.form-control:has(input[type=radio]:focus-visible):focus-within {\n  outline-color: var(--gds-sys-color-focus-outline);\n  outline-style: solid;\n  outline-width: 0.125rem;\n  outline-offset: 0.125rem;\n}\n:host label.form-control input[type=radio] ~ i {\n  margin-right: 0.75rem;\n  margin-top: 0.0625rem;\n  flex-shrink: 0;\n  position: relative;\n  border-radius: var(--gds-comp-radio-border-radius);\n  display: flex;\n  height: var(--gds-comp-radio-container-height);\n  width: var(--gds-comp-radio-container-width);\n  box-shadow: inset 0px 0px 0px 0.05rem var(--gds-comp-radio-border);\n}\n:host label.form-control input[type=radio] ~ i::after {\n  content: "";\n  width: 100%;\n  height: 100%;\n  border-radius: var(--gds-comp-radio-border-radius);\n  background-color: var(--gds-comp-radio-dot);\n  transform: scale(0.5);\n}\n:host label.form-control:hover input[type=radio]:not(.disabled, :disabled) ~ i {\n  box-shadow: inset 0px 0px 0px 0.05rem var(--gds-comp-radio-border-hover);\n}\n:host label.form-control:hover input[type=radio]:not(.disabled, :disabled) ~ i::after {\n  background-color: var(--gds-comp-radio-dot-hover);\n}\n:host label.form-control input[type=radio]:checked:not(.disabled, :disabled) ~ i {\n  box-shadow: inset 0px 0px 0px 0.05rem var(--gds-comp-radio-border-checked);\n}\n:host label.form-control input[type=radio]:checked:not(.disabled, :disabled) ~ i::after {\n  background-color: var(--gds-comp-radio-dot-checked);\n}\n:host label.form-control:hover input[type=radio]:checked:not(.disabled, :disabled) ~ i {\n  box-shadow: inset 0px 0px 0px 0.05rem var(--gds-comp-radio-border-checked-hover);\n}\n:host label.form-control:hover input[type=radio]:checked:not(.disabled, :disabled) ~ i::after {\n  background-color: var(--gds-comp-radio-dot-checked-hover);\n}\n:host .was-validated label.form-control input[type=radio]:not(.is-invalid):valid ~ i,\n:host label.form-control input[type=radio].is-valid ~ i {\n  --border-color: var(--intent-success-background);\n  --sg-border-color: var(--intent-success-background);\n}\n:host .was-validated label.form-control input[type=radio]:not(.is-valid):invalid ~ i,\n:host label.form-control input[type=radio].is-invalid ~ i {\n  --border-color: var(--intent-danger-background);\n  --sg-border-color: var(--intent-danger-background);\n}\n:host label.form-control input[type=radio]:disabled ~ i,\n:host label.form-control input[type=radio].disabled ~ i {\n  background-color: var(--gds-comp-radio-container-background-disabled);\n  box-shadow: inset 0px 0px 0px 0.05rem var(--gds-comp-radio-border-disabled);\n}\n:host label.form-control input[type=radio]:disabled ~ span,\n:host label.form-control input[type=radio].disabled ~ span {\n  color: var(--text-disabled-color) !important;\n  cursor: not-allowed;\n}\n:host label.form-control input[type=radio]:disabled ~ span::placeholder,\n:host label.form-control input[type=radio].disabled ~ span::placeholder {\n  color: var(--text-disabled-color);\n}\n:host label.form-control input[type=radio]:disabled:checked ~ i::after,\n:host label.form-control input[type=radio]:checked.disabled ~ i::after {\n  background-color: var(--gds-comp-radio-dot-disabled);\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/angular/src/v-angular/base-control-value-accessor/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>NgvBaseControlValueAccessorComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),ngneat_transloco=__webpack_require__("./node_modules/@ngneat/transloco/fesm2022/ngneat-transloco.mjs");let NgvBaseControlValueAccessorComponent=class NgvBaseControlValueAccessorComponent{set locked(value){this._locked=value,this.cdr.detectChanges()}get locked(){return this._locked}set required(value){this._required=value}get required(){if(void 0!==this._required)return this._required;if(this.ngControl?.control?.validator){const validator=this.ngControl?.control?.validator({});return Object.keys(validator??{}).some((key=>key.startsWith("required")))}}set invalid(value){this._invalid=value}get invalid(){return!0===this._invalid||!1===this._invalid?this._invalid:!!this.ngControl?.control?.invalid&&this.ngControl?.control?.touched}set valid(value){this._valid=value}get valid(){return!0===this._valid||!1===this._valid?this._valid:!!this.ngControl?.control?.valid&&this.ngControl?.control?.touched}set disabled(value){this._disabled=value}get disabled(){return!0===this._disabled||!1===this._disabled?this._disabled:!!this.ngControl?.control?.disabled}constructor(ngControl,translocoScope,cdr){this.ngControl=ngControl,this.translocoScope=translocoScope,this.cdr=cdr,this.id=window.ngv?.nextId(),this.autofocus=!1,this._locked=void 0,this._required=void 0,this._invalid=void 0,this._valid=void 0,this.focused=!1,this._disabled=void 0,this.ngvFocus=new core.EventEmitter,this.ngvBlur=new core.EventEmitter,this._state=null,this.onChange=_=>{},this.onTouched=()=>{},this.onValidatorChange=()=>null,this._onDestroy$=new Subject.B,this.ngControl&&(this.ngControl.valueAccessor=this),this.translocoScope&&(this.scope=this.translocoScope.toString())}ngOnInit(){this.ngControl&&this.ngControl.control&&this.ngControl.control.setValidators(fesm2022_forms.k0.compose([this.ngControl.control.validator,this.validate])),this.reset?.pipe((0,takeUntil.Q)(this._onDestroy$)).subscribe({next:()=>{this.state=this.defaultValue,this.onChange(this.state),this.cdr.detectChanges()}})}ngAfterViewInit(){this.defaultValue=this.defaultValue??this.ngControl?.value}ngOnDestroy(){this._onDestroy$.next(!0),this._onDestroy$.complete()}detectChanges(){this.cdr.detectChanges()}onFocus(event){event.stopPropagation?event.stopPropagation():event.cancelBubble=!0,this.focused=!0,this.ngvFocus.emit(event)}onBlur(event){event.stopPropagation?event.stopPropagation():event.cancelBubble=!0,this.onTouched(),this.focused=!1,this.ngvBlur.emit(event)}setFocus(){this.inputRef&&this.inputRef.nativeElement.focus()}get state(){return this._state}set state(value){void 0===value&&(value=null),this._state=value}writeValue(value){this.state=value}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouched=fn}setDisabledState(isDisabled){this.disabled=isDisabled,this.displayDisabledAsLocked&&(this.locked=isDisabled)}validate(_control){return null}registerOnValidatorChange(fn){this.onValidatorChange=fn}get firstError(){const errors=this.ngControl.errors;if(!errors)return null;const code=Object.keys(errors)[0];return{code,params:errors[code]}}static#_=this.ctorParameters=()=>[{type:fesm2022_forms.vO,decorators:[{type:core.Self},{type:core.Optional}]},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[ngneat_transloco.Lt]}]},{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={labelContentTpl:[{type:core.ContentChild,args:["labelTpl",{read:core.TemplateRef}]}],inputRef:[{type:core.ViewChild,args:["input",{read:core.ElementRef}]}],id:[{type:core.HostBinding,args:["attr.id"]},{type:core.Input}],name:[{type:core.Input}],label:[{type:core.Input}],role:[{type:core.Input}],value:[{type:core.Input}],error:[{type:core.Input}],description:[{type:core.Input}],autofocus:[{type:core.Input}],defaultValue:[{type:core.Input}],reset:[{type:core.Input}],optional:[{type:core.Input}],locked:[{type:core.Input}],displayDisabledAsLocked:[{type:core.Input}],required:[{type:core.Input}],invalid:[{type:core.Input}],valid:[{type:core.Input}],focused:[{type:core.Input}],disabled:[{type:core.Input}],ngvFocus:[{type:core.Output}],ngvBlur:[{type:core.Output}]}};NgvBaseControlValueAccessorComponent=(0,tslib_es6.Cg)([(0,core.Injectable)(),(0,core.Component)({template:""}),(0,tslib_es6.Sn)("design:paramtypes",[fesm2022_forms.vO,Object,core.ChangeDetectorRef])],NgvBaseControlValueAccessorComponent);let NgvBaseControlValueAccessorModule=class NgvBaseControlValueAccessorModule{};NgvBaseControlValueAccessorModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[NgvBaseControlValueAccessorComponent],imports:[],exports:[NgvBaseControlValueAccessorComponent]})],NgvBaseControlValueAccessorModule)},"./libs/angular/src/v-angular/i18n/i18n.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>NgvI18nModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),lastValueFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),delay=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/delay.js"),ngneat_transloco=__webpack_require__("./node_modules/@ngneat/transloco/fesm2022/ngneat-transloco.mjs");const i18n_namespaceObject=JSON.parse('{"error.fieldinputmask":"Invalid value pattern","error.fieldrequired":"Field must have content","error.fieldmaxlength":"Field content should not be longer than {{requiredLength}} characters","label.defaultlabel":"Label","label.maxlength":"characters left","label.optional":"Optional","button_cancel":"Cancel","button_apply":"Apply","button_save":"Save","text_dialogue":"You can supply the content seen here either through the <code>[content]=\\"string\\"</code> property or</br>by passing children between the opening and closing tags <code>&lt;c-dialog&gt; ...children &lt;/c-dialog&gt;</code>"}');let NgvMissingHandler=class NgvMissingHandler{constructor(transpiler){this.transpiler=transpiler}handle(key,_,params){const keyWithoutLocale="."===key.charAt(2)?key.substring(3):key,withoutScope=keyWithoutLocale.replace(/^((?:\w+)(?<!label|heading|button|alt|link|title|href|fieldhelp|error|text|image|list)(?:\.))/,"");return this.transpiler.transpile(i18n_namespaceObject[keyWithoutLocale],params,{},keyWithoutLocale)||withoutScope}static#_=this.ctorParameters=()=>[{type:void 0,decorators:[{type:core.Inject,args:[ngneat_transloco.Rv]}]}]};NgvMissingHandler=(0,tslib_es6.Cg)([(0,core.Injectable)(),(0,tslib_es6.Sn)("design:paramtypes",[Object])],NgvMissingHandler);const en={"error.fieldinputmask":"Invalid value pattern","error.fieldrequired":"Field must have content","error.fieldmaxlength":"Field content should not be longer than {{requiredLength}} characters","label.defaultlabel":"Label","label.maxlength":"characters left","label.optional":"Optional"},sv={"error.fieldinputmask":"Icke giltigt tecken mönster","error.fieldrequired":"Fältet får inte lämnas tomt","error.fieldmaxlength":"Fältinnehållet måste vara längre än {{requiredLength}} tecken","label.maxlength":"tecken kvar"};let NgvI18nModule=class NgvI18nModule{};NgvI18nModule=(0,tslib_es6.Cg)([(0,core.NgModule)({providers:[(0,ngneat_transloco.$o)({config:{availableLangs:["en","sv"],defaultLang:"en",reRenderOnLangChange:!0,prodMode:!(0,core.isDevMode)()},loader:class TranslocoInlineLoader{getTranslation(lang){return"sv"===lang?(0,lastValueFrom.s)((0,of.of)(sv).pipe((0,delay.c)(1500))):(0,lastValueFrom.s)((0,of.of)(en).pipe((0,delay.c)(500)))}}}),(0,ngneat_transloco.Li)(NgvMissingHandler)],exports:[ngneat_transloco.Q8]})],NgvI18nModule)},"./libs/angular/src/v-angular/i18n/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g3:()=>i18n_module.g});var i18n_module=__webpack_require__("./libs/angular/src/v-angular/i18n/i18n.module.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ngneat_transloco=__webpack_require__("./node_modules/@ngneat/transloco/fesm2022/ngneat-transloco.mjs");let TranslocoMockPipe=class TranslocoMockPipe{constructor(){this.transform=value=>value}};TranslocoMockPipe=(0,tslib_es6.Cg)([(0,core.Pipe)({name:"transloco"})],TranslocoMockPipe);let NgvI18nTestModule=class NgvI18nTestModule{};NgvI18nTestModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[TranslocoMockPipe],exports:[TranslocoMockPipe],providers:[{provide:ngneat_transloco.Rv,useClass:class TranslocoMockTranspiler{constructor(){this.transpile=(..._args)=>""}}},{provide:ngneat_transloco.mr,useClass:class TranslocoMockInterceptor{preSaveTranslation(translation,_lang){return translation}preSaveTranslationKey(_key,value,_lang){return value}}},{provide:ngneat_transloco.zo,useClass:class TranslocoMockStrategy{constructor(){this.getNextLangs=_failedLang=>""}}},{provide:ngneat_transloco.WZ,useClass:class TranslocoMockMissingHandler{constructor(){this.handle=(key,_,_params)=>key}},deps:[ngneat_transloco.Rv]}]})],NgvI18nTestModule)},"./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>lastValueFrom});var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js");function lastValueFrom(source,config){var hasConfig="object"==typeof config;return new Promise((function(resolve,reject){var _value,_hasValue=!1;source.subscribe({next:function(value){_value=value,_hasValue=!0},error:reject,complete:function(){_hasValue?resolve(_value):hasConfig?resolve(config.defaultValue):reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.G)}})}))}},"./node_modules/rxjs/dist/esm5/internal/operators/delay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>delay});var scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),concat=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),take=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),noop=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");var mapTo=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js"),mergeMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");function delayWhen(delayDurationSelector,subscriptionDelay){return subscriptionDelay?function(source){return(0,concat.x)(subscriptionDelay.pipe((0,take.s)(1),function ignoreElements(){return(0,lift.N)((function(source,subscriber){source.subscribe((0,OperatorSubscriber._)(subscriber,noop.l))}))}()),source.pipe(delayWhen(delayDurationSelector)))}:(0,mergeMap.Z)((function(value,index){return(0,innerFrom.Tg)(delayDurationSelector(value,index)).pipe((0,take.s)(1),(0,mapTo.u)(value))}))}var timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function delay(due,scheduler){void 0===scheduler&&(scheduler=scheduler_async.E);var duration=(0,timer.O)(due,scheduler);return delayWhen((function(){return duration}))}},"./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>takeUntil});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_noop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");function takeUntil(notifier){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,(function(){return subscriber.complete()}),_util_noop__WEBPACK_IMPORTED_MODULE_3__.l)),!subscriber.closed&&source.subscribe(subscriber)}))}},"./libs/angular/src/v-angular/radio/radio.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,WithDisplayDisabledAsLocked:()=>WithDisplayDisabledAsLocked,WithLockedInput:()=>WithLockedInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>radio_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),i18n=__webpack_require__("./libs/angular/src/v-angular/i18n/index.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var radio_componentngResource=__webpack_require__("./libs/angular/src/v-angular/radio/radio.component.scss?ngResource"),radio_componentngResource_default=__webpack_require__.n(radio_componentngResource),ngneat_transloco=__webpack_require__("./node_modules/@ngneat/transloco/fesm2022/ngneat-transloco.mjs"),base_control_value_accessor=__webpack_require__("./libs/angular/src/v-angular/base-control-value-accessor/index.ts");let NgvRadioControlRegistry=class NgvRadioControlRegistry{constructor(){this._radios=[]}add(control,radio){this._radios.push([control,radio])}remove(radio){for(let i=this._radios.length-1;i>=0;--i)if(this._radios[i][1]===radio)return void this._radios.splice(i,1)}select(radio){this._radios.forEach((controlPair=>{this._isSameGroup(controlPair,radio)&&controlPair[1]!==radio&&controlPair[1].writeValue(radio.value)}))}_isSameGroup(controlPair,radio){return!!controlPair[0].control&&(controlPair[0]._parent===radio.ngControl._parent&&controlPair[1].name===radio.name)}};NgvRadioControlRegistry=(0,tslib_es6.Cg)([(0,core.Injectable)()],NgvRadioControlRegistry);let NgvRadioComponent=class NgvRadioComponent extends base_control_value_accessor.n{constructor(ngControl,translocoScope,registry,cdr){super(ngControl,translocoScope,cdr),this.ngControl=ngControl,this.translocoScope=translocoScope,this.registry=registry,this.cdr=cdr,this.thook="radio"}ngOnInit(){super.ngOnInit(),this._checkName(),this.registry.add(this.ngControl,this)}ngOnDestroy(){this.registry.remove(this)}onInputChange(event){event.stopPropagation(),this.disabled||this.onChange(this.state)}writeValue(value){super.writeValue(value===this.value)}registerOnChange(fn){this.onChange=()=>{fn(this.value),this.registry.select(this)}}_checkName(){if(this.name&&this.formControlName&&this.name!==this.formControlName)throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ');!this.name&&this.formControlName&&(this.name=this.formControlName)}static#_=this.ctorParameters=()=>[{type:fesm2022_forms.vO,decorators:[{type:core.Self},{type:core.Optional}]},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[ngneat_transloco.Lt]}]},{type:NgvRadioControlRegistry},{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={thook:[{type:core.HostBinding,args:["attr.data-thook"]},{type:core.Input}],formControlName:[{type:core.Input}]}};NgvRadioComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngv-radio",template:'\x3c!-- LOCKED INPUT --\x3e\n<div *ngIf="locked && state" class="sdv-field-radio-wrap">\n  <div\n    [id]="id + \'-radio\'"\n    class="ngv-field--locked"\n    [attr.name]="name"\n    [attr.value]="value"\n  >\n    {{ label }}\n    <ng-template\n      *ngTemplateOutlet="labelContentTpl ?? null; context: { $implicit: value }"\n    ></ng-template>\n  </div>\n</div>\n\n\x3c!-- INPUT WRAPPER --\x3e\n<ng-container *ngIf="!locked">\n  <div class="sdv-field-radio-wrap">\n    \x3c!-- RADIO BUTTON FIELD --\x3e\n    <label [attr.for]="id + \'-radio\'" class="form-control">\n      <input\n        #input\n        type="radio"\n        [attr.id]="id + \'-radio\'"\n        [attr.name]="name"\n        [attr.value]="value"\n        [attr.required]="required"\n        [disabled]="disabled"\n        [autofocus]="autofocus"\n        [attr.aria-label]="description"\n        [checked]="state"\n        (click)="$event.stopPropagation()"\n        (change)="onInputChange($event)"\n        (focus)="onFocus($event)"\n        (blur)="onBlur($event)"\n      />\n\n      \x3c!-- LABEL --\x3e\n      {{ label }}\n      <ng-template\n        *ngTemplateOutlet="\n          labelContentTpl ?? null;\n          context: { $implicit: value }\n        "\n      ></ng-template>\n      <i></i>\n    </label>\n  </div>\n\n  \x3c!-- ERRORS --\x3e\n  <ng-container *transloco="let t; read: scope">\n    <label\n      class="sdv-field-notice sdv-field-notice--error"\n      [attr.for]="id + \'-radio\'"\n      *ngIf="invalid && (error || ngControl?.invalid)"\n    >\n      <span *ngIf="error; else errorsRef">{{ error }}</span>\n      <ng-template #errorsRef>\n        <span *ngIf="firstError as error">\n          {{ t(\'error.field\' + error?.code, error?.params) }}\n        </span>\n      </ng-template>\n    </label>\n  </ng-container>\n\n  \x3c!-- CHILDREN --\x3e\n  <ng-content></ng-content>\n</ng-container>\n',providers:[NgvRadioControlRegistry],styles:[radio_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[fesm2022_forms.vO,Object,NgvRadioControlRegistry,core.ChangeDetectorRef])],NgvRadioComponent);const radio_stories={title:"V-Angular/Radio",component:NgvRadioComponent,decorators:[(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(i18n.g3)]}),(0,dist.moduleMetadata)({imports:[common.CommonModule,fesm2022_forms.YN,fesm2022_forms.X1,i18n.g3]})]},TemplateWithFormControl=args=>{const ctrl=new fesm2022_forms.MJ(args.selected);ctrl.valueChanges.subscribe(console.log);return{template:'\n    <label class="sdv-field-label" style="margin-bottom: 0.25em">Field that displays disabled as locked</label>\n    <ngv-radio\n      [name]="name"\n      [value]="name + \'1\'"\n      [formControl]="formControl"\n      [locked]="locked"\n      [displayDisabledAsLocked]="displayDisabledAsLocked">\n      <ng-template #labelTpl>{{label}} 1</ng-template>\n    </ngv-radio>\n    <ngv-radio\n      [name]="name"\n      [value]="name + \'2\'"\n      [formControl]="formControl"\n      [locked]="locked"\n      [displayDisabledAsLocked]="displayDisabledAsLocked">\n      <ng-template #labelTpl>{{label}} 2</ng-template>\n    </ngv-radio>\n    <ngv-radio\n      [name]="name"\n      [value]="name + \'3\'"\n      [formControl]="formControl"\n      [locked]="locked"\n      [displayDisabledAsLocked]="displayDisabledAsLocked">\n      <ng-template #labelTpl>{{label}} 3</ng-template>\n    </ngv-radio>\n    <div style="margin-top: 1rem">\n      <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>\n    </div>\n  ',props:{...args,formControl:ctrl,disableFn:()=>{if(ctrl.disabled)return ctrl.enable();ctrl.disable()}}}},Primary=(args=>({template:'\n    <ngv-radio\n      [label]="label"\n      [name]="name"\n      [value]="name + \'1\'"\n      [ngModel]="selected"\n      (ngModelChange)="action($event)">\n    </ngv-radio>\n    <ngv-radio\n      [label]="label"\n      [name]="name"\n      [value]="name + \'2\'"\n      [ngModel]="selected"\n      (ngModelChange)="action($event)">\n    </ngv-radio>\n    <ngv-radio\n      [label]="label"\n      [name]="name"\n      [value]="name + \'3\'"\n      [ngModel]="selected"\n      (ngModelChange)="action($event)">\n    </ngv-radio>\n  ',props:{...args}})).bind({});Primary.args={label:"Radio label",name:"radio",selected:"radio2"};const WithLockedInput=TemplateWithFormControl.bind({});WithLockedInput.args={...Primary.args,locked:!1};const WithDisplayDisabledAsLocked=TemplateWithFormControl.bind({});WithDisplayDisabledAsLocked.args={...Primary.args,locked:!1,displayDisabledAsLocked:!0};const __namedExportsOrder=["Primary","WithLockedInput","WithDisplayDisabledAsLocked"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'(args: any) => ({\n  template: /*html*/`\n    <ngv-radio\n      [label]="label"\n      [name]="name"\n      [value]="name + \'1\'"\n      [ngModel]="selected"\n      (ngModelChange)="action($event)">\n    </ngv-radio>\n    <ngv-radio\n      [label]="label"\n      [name]="name"\n      [value]="name + \'2\'"\n      [ngModel]="selected"\n      (ngModelChange)="action($event)">\n    </ngv-radio>\n    <ngv-radio\n      [label]="label"\n      [name]="name"\n      [value]="name + \'3\'"\n      [ngModel]="selected"\n      (ngModelChange)="action($event)">\n    </ngv-radio>\n  `,\n  props: {\n    ...args\n  }\n})',...Primary.parameters?.docs?.source}}},WithLockedInput.parameters={...WithLockedInput.parameters,docs:{...WithLockedInput.parameters?.docs,source:{originalSource:'(args: NgvRadioComponent & any) => {\n  const ctrl = new FormControl(args.selected);\n  ctrl.valueChanges.subscribe(console.log);\n  const toggleDisableField = () => {\n    if (ctrl.disabled) return ctrl.enable();\n    ctrl.disable();\n  };\n  return {\n    template: /*html*/`\n    <label class="sdv-field-label" style="margin-bottom: 0.25em">Field that displays disabled as locked</label>\n    <ngv-radio\n      [name]="name"\n      [value]="name + \'1\'"\n      [formControl]="formControl"\n      [locked]="locked"\n      [displayDisabledAsLocked]="displayDisabledAsLocked">\n      <ng-template #labelTpl>{{label}} 1</ng-template>\n    </ngv-radio>\n    <ngv-radio\n      [name]="name"\n      [value]="name + \'2\'"\n      [formControl]="formControl"\n      [locked]="locked"\n      [displayDisabledAsLocked]="displayDisabledAsLocked">\n      <ng-template #labelTpl>{{label}} 2</ng-template>\n    </ngv-radio>\n    <ngv-radio\n      [name]="name"\n      [value]="name + \'3\'"\n      [formControl]="formControl"\n      [locked]="locked"\n      [displayDisabledAsLocked]="displayDisabledAsLocked">\n      <ng-template #labelTpl>{{label}} 3</ng-template>\n    </ngv-radio>\n    <div style="margin-top: 1rem">\n      <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>\n    </div>\n  `,\n    props: {\n      ...args,\n      formControl: ctrl,\n      disableFn: toggleDisableField\n    }\n  };\n}',...WithLockedInput.parameters?.docs?.source}}},WithDisplayDisabledAsLocked.parameters={...WithDisplayDisabledAsLocked.parameters,docs:{...WithDisplayDisabledAsLocked.parameters?.docs,source:{originalSource:'(args: NgvRadioComponent & any) => {\n  const ctrl = new FormControl(args.selected);\n  ctrl.valueChanges.subscribe(console.log);\n  const toggleDisableField = () => {\n    if (ctrl.disabled) return ctrl.enable();\n    ctrl.disable();\n  };\n  return {\n    template: /*html*/`\n    <label class="sdv-field-label" style="margin-bottom: 0.25em">Field that displays disabled as locked</label>\n    <ngv-radio\n      [name]="name"\n      [value]="name + \'1\'"\n      [formControl]="formControl"\n      [locked]="locked"\n      [displayDisabledAsLocked]="displayDisabledAsLocked">\n      <ng-template #labelTpl>{{label}} 1</ng-template>\n    </ngv-radio>\n    <ngv-radio\n      [name]="name"\n      [value]="name + \'2\'"\n      [formControl]="formControl"\n      [locked]="locked"\n      [displayDisabledAsLocked]="displayDisabledAsLocked">\n      <ng-template #labelTpl>{{label}} 2</ng-template>\n    </ngv-radio>\n    <ngv-radio\n      [name]="name"\n      [value]="name + \'3\'"\n      [formControl]="formControl"\n      [locked]="locked"\n      [displayDisabledAsLocked]="displayDisabledAsLocked">\n      <ng-template #labelTpl>{{label}} 3</ng-template>\n    </ngv-radio>\n    <div style="margin-top: 1rem">\n      <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>\n    </div>\n  `,\n    props: {\n      ...args,\n      formControl: ctrl,\n      disableFn: toggleDisableField\n    }\n  };\n}',...WithDisplayDisabledAsLocked.parameters?.docs?.source}}}}}]);