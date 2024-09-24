(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[429],{"./libs/angular/src/v-angular/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/**\n* @deprecated\n* Use `add-focus` instead\n*/\n/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */\n:host button,\n:host a {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  font-family: inherit;\n  padding: 0;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 0.75rem;\n  padding-top: 0.75rem;\n  border-radius: var(--sg-border-radius);\n  border: solid var(--sg-border-width) var(--sg-border-color);\n  font-weight: 500;\n  min-height: 2.75rem;\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n}\n:host button:focus:not(:focus-visible),\n:host a:focus:not(:focus-visible) {\n  box-shadow: none;\n  outline: 0;\n}\n:host button:focus, :host button:focus-visible,\n:host a:focus,\n:host a:focus-visible {\n  outline-color: var(--gds-sys-color-focus-outline);\n  outline-style: solid;\n  outline-width: 0.125rem;\n  outline-offset: 0.125rem;\n}\n@media (max-width: 35.98em) {\n  :host button,\n  :host a {\n    min-width: 100%;\n  }\n}\n@media screen and (-ms-high-contrast: active) {\n  :host button,\n  :host a {\n    border: 2px solid currentcolor;\n  }\n}\n:host button.small,\n:host a.small {\n  min-height: 2rem;\n  padding: 0.4375rem 0.75rem;\n  line-height: 1rem;\n}\n:host button.large,\n:host a.large {\n  min-height: 4rem;\n  padding: 1rem 1.5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n:host .primary {\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n  background: rgb(0, 122, 199);\n  border-color: rgb(0, 122, 199);\n  color: #fff;\n  --color: #fff;\n}\n:host .primary:not(:disabled, .disabled, [aria-disabled]):hover {\n  background-color: #199be3;\n  color: rgb(255, 255, 255);\n  --background: #199be3;\n  --color: rgb(255, 255, 255);\n  border-color: #199be3;\n}\n:host .primary[aria-selected=true], :host .primary:active, :host .primary.active, :host .primary.active:hover, :host .primary:active:hover {\n  background-color: rgb(0, 122, 199);\n  color: rgb(255, 255, 255);\n  --background: rgb(0, 122, 199);\n  --color: rgb(255, 255, 255);\n  border-color: rgb(0, 122, 199);\n}\n:host .primary:focus-visible {\n  background-color: #199be3;\n  color: rgb(255, 255, 255);\n  --background: #199be3;\n  --color: rgb(255, 255, 255);\n  border-color: #199be3 !important;\n}\n:host .primary:disabled, :host .primary.disabled, :host .primary[aria-disabled=true] {\n  background: var(--form-control-primary-bg-disabled) !important;\n  color: var(--text-primary-disabled-color) !important;\n  border-color: var(--border-primary-disabled-color) !important;\n  cursor: not-allowed;\n}\n:host .primary:disabled::placeholder, :host .primary.disabled::placeholder, :host .primary[aria-disabled=true]::placeholder {\n  color: var(--text-disabled-color);\n}\n:host .secondary {\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n  background: transparent;\n  border-color: rgb(0, 122, 199);\n  color: rgb(0, 122, 199);\n  --color: rgb(0, 122, 199);\n}\n:host .secondary:focus:not(:focus-visible) {\n  box-shadow: none;\n  outline: 0;\n}\n:host .secondary:focus, :host .secondary:focus-visible {\n  outline-color: var(--gds-sys-color-focus-outline);\n  outline-style: solid;\n  outline-width: 0.125rem;\n  outline-offset: 0.125rem;\n}\n:host .secondary:not(:disabled, .disabled, [aria-disabled]):hover {\n  background-color: #199be3;\n  color: rgb(255, 255, 255);\n  --background: #199be3;\n  --color: rgb(255, 255, 255);\n  border-color: #199be3;\n}\n:host .secondary[aria-selected=true], :host .secondary:active, :host .secondary.active, :host .secondary.active:hover, :host .secondary:active:hover {\n  background-color: rgb(0, 122, 199);\n  color: rgb(255, 255, 255);\n  --background: rgb(0, 122, 199);\n  --color: rgb(255, 255, 255);\n  border-color: rgb(0, 122, 199);\n}\n:host .secondary:disabled, :host .secondary.disabled, :host .secondary[aria-disabled=true] {\n  background: var(--sg-form-control-bg-disabled) !important;\n  color: var(--text-disabled-color) !important;\n  border-color: var(--border-disabled-color) !important;\n  cursor: not-allowed;\n}\n:host .secondary:disabled::placeholder, :host .secondary.disabled::placeholder, :host .secondary[aria-disabled=true]::placeholder {\n  color: var(--text-disabled-color);\n}\n:host .tertiary {\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n  background: transparent;\n  border-color: transparent;\n  color: rgb(0, 122, 199);\n  --color: rgb(0, 122, 199);\n}\n:host .tertiary:focus:not(:focus-visible) {\n  box-shadow: none;\n  outline: 0;\n}\n:host .tertiary:focus, :host .tertiary:focus-visible {\n  outline-color: var(--gds-sys-color-focus-outline);\n  outline-style: solid;\n  outline-width: 0.125rem;\n  outline-offset: 0.125rem;\n}\n:host .tertiary:not(:disabled, .disabled, [aria-disabled]):hover {\n  background-color: #199be3;\n  color: rgb(255, 255, 255);\n  --background: #199be3;\n  --color: rgb(255, 255, 255);\n  border-color: #199be3;\n}\n:host .tertiary[aria-selected=true], :host .tertiary:active, :host .tertiary.active, :host .tertiary.active:hover, :host .tertiary:active:hover {\n  background-color: rgb(0, 122, 199);\n  color: rgb(255, 255, 255);\n  --background: rgb(0, 122, 199);\n  --color: rgb(255, 255, 255);\n  border-color: rgb(0, 122, 199);\n}\n:host .tertiary:disabled, :host .tertiary.disabled, :host .tertiary[aria-disabled=true] {\n  background: var(--sg-form-control-bg-disabled) !important;\n  color: var(--text-disabled-color) !important;\n  border-color: var(--border-disabled-color) !important;\n  cursor: not-allowed;\n}\n:host .tertiary:disabled::placeholder, :host .tertiary.disabled::placeholder, :host .tertiary[aria-disabled=true]::placeholder {\n  color: var(--text-disabled-color);\n}\n:host .ghost-light {\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n  border-color: rgb(255, 255, 255);\n  color: rgb(255, 255, 255);\n  --color: rgb(255, 255, 255);\n}\n:host .ghost-light:not(:disabled, .disabled, [aria-disabled]):hover {\n  background-color: rgb(255, 255, 255);\n  color: black;\n  --background: rgb(255, 255, 255);\n  --color: black;\n  border-color: rgb(255, 255, 255);\n}\n:host .ghost-light[aria-selected=true], :host .ghost-light:active, :host .ghost-light.active, :host .ghost-light.active:hover, :host .ghost-light:active:hover {\n  background-color: rgb(255, 255, 255);\n  color: black;\n  --background: rgb(255, 255, 255);\n  --color: black;\n  border-color: rgb(255, 255, 255);\n}\n:host .ghost-light[aria-selected]:hover, :host .ghost-light.active:hover, :host .ghost-light:active:hover {\n  opacity: 0.9;\n}\n:host .ghost-light:focus-visible {\n  background-color: rgb(255, 255, 255);\n  color: black;\n  --background: rgb(255, 255, 255);\n  --color: black;\n  border-color: rgb(255, 255, 255) !important;\n}\n:host .ghost-light:disabled, :host .ghost-light.disabled, :host .ghost-light[aria-disabled=true] {\n  color: var(--text-disabled-color) !important;\n  border-color: var(--border-disabled-color) !important;\n  cursor: not-allowed;\n}\n:host .ghost-light:disabled::placeholder, :host .ghost-light.disabled::placeholder, :host .ghost-light[aria-disabled=true]::placeholder {\n  color: var(--text-disabled-color);\n}\n:host .ghost {\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n  border-color: rgb(51, 51, 51);\n  color: rgb(51, 51, 51);\n  --color: rgb(51, 51, 51);\n}\n:host .ghost:not(:disabled, .disabled, [aria-disabled]):hover {\n  background-color: rgb(51, 51, 51);\n  color: rgb(255, 255, 255);\n  --background: rgb(51, 51, 51);\n  --color: rgb(255, 255, 255);\n  border-color: rgb(51, 51, 51);\n}\n:host .ghost[aria-selected=true], :host .ghost:active, :host .ghost.active, :host .ghost.active:hover, :host .ghost:active:hover {\n  background-color: rgb(51, 51, 51);\n  color: rgb(255, 255, 255);\n  --background: rgb(51, 51, 51);\n  --color: rgb(255, 255, 255);\n  border-color: rgb(51, 51, 51);\n}\n:host .ghost[aria-selected]:hover, :host .ghost.active:hover, :host .ghost:active:hover {\n  opacity: 0.9;\n}\n:host .ghost:focus-visible {\n  background-color: rgb(51, 51, 51);\n  color: rgb(255, 255, 255);\n  --background: rgb(51, 51, 51);\n  --color: rgb(255, 255, 255);\n  border-color: rgb(51, 51, 51) !important;\n}\n:host .ghost:disabled, :host .ghost.disabled, :host .ghost[aria-disabled=true] {\n  color: var(--text-disabled-color) !important;\n  border-color: var(--border-disabled-color) !important;\n  cursor: not-allowed;\n}\n:host .ghost:disabled::placeholder, :host .ghost.disabled::placeholder, :host .ghost[aria-disabled=true]::placeholder {\n  color: var(--text-disabled-color);\n}\n:host .danger.primary {\n  background: rgb(187, 0, 12);\n  border-color: rgb(187, 0, 12);\n  color: #fff;\n  --color: #fff;\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n}\n:host .danger.primary:not(:disabled, .disabled, [aria-disabled]):hover {\n  background-color: rgb(216, 26, 26);\n  color: rgb(255, 255, 255);\n  --background: rgb(216, 26, 26);\n  --color: rgb(255, 255, 255);\n  border-color: rgb(216, 26, 26);\n}\n:host .danger.primary[aria-selected=true], :host .danger.primary:active, :host .danger.primary.active, :host .danger.primary.active:hover, :host .danger.primary:active:hover {\n  background-color: rgb(187, 0, 12);\n  color: rgb(255, 255, 255);\n  --background: rgb(187, 0, 12);\n  --color: rgb(255, 255, 255);\n  border-color: rgb(187, 0, 12);\n}\n:host .danger.primary[aria-selected]:hover, :host .danger.primary.active:hover, :host .danger.primary:active:hover {\n  opacity: 0.9;\n}\n:host .danger.primary:focus:not(:focus-visible) {\n  box-shadow: none;\n  outline: 0;\n}\n:host .danger.primary:focus, :host .danger.primary:focus-visible {\n  outline-color: var(--gds-sys-color-focus-outline);\n  outline-style: solid;\n  outline-width: 0.125rem;\n  outline-offset: 0.125rem;\n}\n:host .danger.primary:disabled, :host .danger.primary.disabled, :host .danger.primary[aria-disabled=true] {\n  background: var(--form-control-primary-bg-disabled) !important;\n  color: var(--text-primary-disabled-color) !important;\n  border-color: var(--border-primary-disabled-color) !important;\n  cursor: not-allowed;\n}\n:host .danger.primary:disabled::placeholder, :host .danger.primary.disabled::placeholder, :host .danger.primary[aria-disabled=true]::placeholder {\n  color: var(--text-disabled-color);\n}\n:host .danger:not(.primary) {\n  color: rgb(187, 0, 12);\n  --color: rgb(187, 0, 12);\n  border-color: transparent;\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n}\n:host .danger:not(.primary):not(:disabled, .disabled, [aria-disabled]):hover {\n  background-color: rgb(216, 26, 26);\n  color: rgb(255, 255, 255);\n  --background: rgb(216, 26, 26);\n  --color: rgb(255, 255, 255);\n  border-color: rgb(216, 26, 26);\n}\n:host .danger:not(.primary)[aria-selected=true], :host .danger:not(.primary):active, :host .danger:not(.primary).active, :host .danger:not(.primary).active:hover, :host .danger:not(.primary):active:hover {\n  background-color: rgb(187, 0, 12);\n  color: rgb(255, 255, 255);\n  --background: rgb(187, 0, 12);\n  --color: rgb(255, 255, 255);\n  border-color: rgb(187, 0, 12);\n}\n:host .danger:not(.primary)[aria-selected]:hover, :host .danger:not(.primary).active:hover, :host .danger:not(.primary):active:hover {\n  opacity: 0.9;\n}\n:host .danger:not(.primary):focus:not(:focus-visible) {\n  box-shadow: none;\n  outline: 0;\n}\n:host .danger:not(.primary):focus, :host .danger:not(.primary):focus-visible {\n  outline-color: var(--gds-sys-color-focus-outline);\n  outline-style: solid;\n  outline-width: 0.125rem;\n  outline-offset: 0.125rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/angular/src/v-angular/base-control-value-accessor/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>NgvBaseControlValueAccessorComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),ngneat_transloco=__webpack_require__("./node_modules/@ngneat/transloco/fesm2022/ngneat-transloco.mjs");let NgvBaseControlValueAccessorComponent=class NgvBaseControlValueAccessorComponent{set locked(value){this._locked=value,this.cdr.detectChanges()}get locked(){return this._locked}set required(value){this._required=value}get required(){if(void 0!==this._required)return this._required;if(this.ngControl?.control?.validator){const validator=this.ngControl?.control?.validator({});return Object.keys(validator??{}).some((key=>key.startsWith("required")))}}set invalid(value){this._invalid=value}get invalid(){return!0===this._invalid||!1===this._invalid?this._invalid:!!this.ngControl?.control?.invalid&&this.ngControl?.control?.touched}set valid(value){this._valid=value}get valid(){return!0===this._valid||!1===this._valid?this._valid:!!this.ngControl?.control?.valid&&this.ngControl?.control?.touched}set disabled(value){this._disabled=value}get disabled(){return!0===this._disabled||!1===this._disabled?this._disabled:!!this.ngControl?.control?.disabled}constructor(ngControl,translocoScope,cdr){this.ngControl=ngControl,this.translocoScope=translocoScope,this.cdr=cdr,this.id=window.ngv?.nextId(),this.autofocus=!1,this._locked=void 0,this._required=void 0,this._invalid=void 0,this._valid=void 0,this.focused=!1,this._disabled=void 0,this.ngvFocus=new core.EventEmitter,this.ngvBlur=new core.EventEmitter,this._state=null,this.onChange=_=>{},this.onTouched=()=>{},this.onValidatorChange=()=>null,this._onDestroy$=new Subject.B,this.ngControl&&(this.ngControl.valueAccessor=this),this.translocoScope&&(this.scope=this.translocoScope.toString())}ngOnInit(){this.ngControl&&this.ngControl.control&&this.ngControl.control.setValidators(fesm2022_forms.k0.compose([this.ngControl.control.validator,this.validate])),this.reset?.pipe((0,takeUntil.Q)(this._onDestroy$)).subscribe({next:()=>{this.state=this.defaultValue,this.onChange(this.state),this.cdr.detectChanges()}})}ngAfterViewInit(){this.defaultValue=this.defaultValue??this.ngControl?.value}ngOnDestroy(){this._onDestroy$.next(!0),this._onDestroy$.complete()}detectChanges(){this.cdr.detectChanges()}onFocus(event){event.stopPropagation?event.stopPropagation():event.cancelBubble=!0,this.focused=!0,this.ngvFocus.emit(event)}onBlur(event){event.stopPropagation?event.stopPropagation():event.cancelBubble=!0,this.onTouched(),this.focused=!1,this.ngvBlur.emit(event)}setFocus(){this.inputRef&&this.inputRef.nativeElement.focus()}get state(){return this._state}set state(value){void 0===value&&(value=null),this._state=value}writeValue(value){this.state=value}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouched=fn}setDisabledState(isDisabled){this.disabled=isDisabled,this.displayDisabledAsLocked&&(this.locked=isDisabled)}validate(_control){return null}registerOnValidatorChange(fn){this.onValidatorChange=fn}get firstError(){const errors=this.ngControl.errors;if(!errors)return null;const code=Object.keys(errors)[0];return{code,params:errors[code]}}static#_=this.ctorParameters=()=>[{type:fesm2022_forms.vO,decorators:[{type:core.Self},{type:core.Optional}]},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[ngneat_transloco.Lt]}]},{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={labelContentTpl:[{type:core.ContentChild,args:["labelTpl",{read:core.TemplateRef}]}],inputRef:[{type:core.ViewChild,args:["input",{read:core.ElementRef}]}],id:[{type:core.HostBinding,args:["attr.id"]},{type:core.Input}],name:[{type:core.Input}],label:[{type:core.Input}],role:[{type:core.Input}],value:[{type:core.Input}],error:[{type:core.Input}],description:[{type:core.Input}],autofocus:[{type:core.Input}],defaultValue:[{type:core.Input}],reset:[{type:core.Input}],optional:[{type:core.Input}],locked:[{type:core.Input}],displayDisabledAsLocked:[{type:core.Input}],required:[{type:core.Input}],invalid:[{type:core.Input}],valid:[{type:core.Input}],focused:[{type:core.Input}],disabled:[{type:core.Input}],ngvFocus:[{type:core.Output}],ngvBlur:[{type:core.Output}]}};NgvBaseControlValueAccessorComponent=(0,tslib_es6.Cg)([(0,core.Injectable)(),(0,core.Component)({template:""}),(0,tslib_es6.Sn)("design:paramtypes",[fesm2022_forms.vO,Object,core.ChangeDetectorRef])],NgvBaseControlValueAccessorComponent);let NgvBaseControlValueAccessorModule=class NgvBaseControlValueAccessorModule{};NgvBaseControlValueAccessorModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[NgvBaseControlValueAccessorComponent],imports:[],exports:[NgvBaseControlValueAccessorComponent]})],NgvBaseControlValueAccessorModule)},"./libs/angular/src/v-angular/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>ButtonStyle,x:()=>NgvButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var NgvButtonComponent_1,ButtonStyle,button_componentngResource=__webpack_require__("./libs/angular/src/v-angular/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),ngneat_transloco=__webpack_require__("./node_modules/@ngneat/transloco/fesm2022/ngneat-transloco.mjs"),base_control_value_accessor=__webpack_require__("./libs/angular/src/v-angular/base-control-value-accessor/index.ts");!function(ButtonStyle){ButtonStyle[ButtonStyle.Primary=0]="Primary",ButtonStyle[ButtonStyle.Secondary=1]="Secondary",ButtonStyle[ButtonStyle.Alternative=2]="Alternative",ButtonStyle[ButtonStyle.Delete=3]="Delete",ButtonStyle[ButtonStyle.DeleteConfirm=4]="DeleteConfirm",ButtonStyle[ButtonStyle.Ghost=5]="Ghost",ButtonStyle[ButtonStyle.GhostDark=6]="GhostDark",ButtonStyle[ButtonStyle.Link=7]="Link"}(ButtonStyle||(ButtonStyle={}));let NgvButtonComponent=class NgvButtonComponent extends base_control_value_accessor.n{static#_=NgvButtonComponent_1=this;constructor(ngControl,translocoScope,cdr){super(ngControl,translocoScope,cdr),this.ngControl=ngControl,this.translocoScope=translocoScope,this.cdr=cdr,this.thook="button",this.type="button",this.buttonStyle="link"===this.type?ButtonStyle.Link:ButtonStyle.Primary,this.small=!1,this.external=!1,this.buttonClasses={},this.ngvClick=new core.EventEmitter}static buttonStyleClasses(type,small){return{small,primary:type===ButtonStyle.Primary||type===ButtonStyle.Delete,secondary:type===ButtonStyle.Secondary,tertiary:type===ButtonStyle.Alternative||type===ButtonStyle.Link,danger:type===ButtonStyle.Delete||type===ButtonStyle.DeleteConfirm,ghost:type===ButtonStyle.GhostDark,"ghost-light":type===ButtonStyle.Ghost}}ngOnInit(){super.ngOnInit(),this.href&&(this.external=/^\w+:\/\/.+$/.test(this.href)),this.buttonClasses=NgvButtonComponent_1.buttonStyleClasses(this.buttonStyle,this.small)}ngOnChanges(changes){(changes.buttonStyle||changes.small)&&(this.buttonClasses=NgvButtonComponent_1.buttonStyleClasses(this.buttonStyle,this.small))}onClick(event){this.disabled||this.ngvClick.emit(event)}static#_2=this.ctorParameters=()=>[{type:fesm2022_forms.vO,decorators:[{type:core.Self},{type:core.Optional}]},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[ngneat_transloco.Lt]}]},{type:core.ChangeDetectorRef}];static#_3=this.propDecorators={thook:[{type:core.HostBinding,args:["attr.data-thook"]},{type:core.Input}],type:[{type:core.Input}],buttonStyle:[{type:core.Input}],small:[{type:core.Input}],href:[{type:core.Input}],ngvClick:[{type:core.Output}]}};NgvButtonComponent=NgvButtonComponent_1=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngv-button",template:'<button\n  #input\n  [ngClass]="buttonClasses"\n  [id]="id + \'-button\'"\n  [attr.name]="name"\n  [attr.value]="value"\n  [type]="type"\n  [autofocus]="autofocus"\n  [disabled]="disabled"\n  [attr.aria-label]="description"\n  (click)="onClick($event)"\n  (focus)="onFocus($event)"\n  (blur)="onBlur($event)"\n  *ngIf="type !== \'link\'"\n>\n  <ng-container *ngTemplateOutlet="contentRef"></ng-container>\n</button>\n\n<a\n  #input\n  [ngClass]="buttonClasses"\n  role="button"\n  [id]="id + \'-link\'"\n  [routerLink]="href"\n  [external]="external"\n  [attr.aria-label]="description"\n  (click)="onClick($event)"\n  (focus)="onFocus($event)"\n  (blur)="onBlur($event)"\n  *ngIf="type === \'link\'"\n>\n  <ng-container *ngTemplateOutlet="contentRef"></ng-container>\n</a>\n\n<ng-template #contentRef>\n  <ng-content></ng-content>\n</ng-template>\n',styles:[button_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[fesm2022_forms.vO,Object,core.ChangeDetectorRef])],NgvButtonComponent)},"./libs/angular/src/v-angular/external-link/external-link.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>NgvExternalLinkDirective});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_router__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs");let NgvExternalLinkDirective=class NgvExternalLinkDirective{constructor(link){this.link=link,this.external=!1}ngOnInit(){this.external&&(this.link.onClick=()=>(window.location.href=this.link.commands[0],!1))}static#_=this.ctorParameters=()=>[{type:_angular_router__WEBPACK_IMPORTED_MODULE_0__.Wk}];static#_2=this.propDecorators={external:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]}};NgvExternalLinkDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({selector:"a[routerLink]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Sn)("design:paramtypes",[_angular_router__WEBPACK_IMPORTED_MODULE_0__.Wk])],NgvExternalLinkDirective)},"./libs/angular/src/v-angular/button/button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alternative:()=>Alternative,Delete:()=>Delete,DeleteConfirm:()=>DeleteConfirm,Ghost:()=>Ghost,GhostDark:()=>GhostDark,Link:()=>Link,Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),external_link_directive=__webpack_require__("./libs/angular/src/v-angular/external-link/external-link.directive.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NgvExternalLinkDirectiveModule=class NgvExternalLinkDirectiveModule{};NgvExternalLinkDirectiveModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[external_link_directive.K],imports:[common.CommonModule],exports:[external_link_directive.K]})],NgvExternalLinkDirectiveModule);var button_component=__webpack_require__("./libs/angular/src/v-angular/button/button.component.ts");const getButtonText=type=>`${button_component.i[type]} button`,button_stories={title:"V-Angular/Button",component:button_component.x,decorators:[(0,dist.applicationConfig)({providers:[{provide:common.APP_BASE_HREF,useValue:"/"}]}),(0,dist.moduleMetadata)({imports:[common.CommonModule,testing.c1],declarations:[external_link_directive.K]})],argTypes:{type:{control:{type:"select",options:["button","submit","reset","link"]}},buttonStyle:{table:{disable:!0}},clickAction:{table:{disable:!0}}}},Template=args=>({template:'\n    <div class="button-wrapper button-wrapper--{{ text }}">\n      <ngv-button\n        [small]="small"\n        [type]="type || \'button\'"\n        [href]="href"\n        [disabled]="disabled"\n        [buttonStyle]="buttonStyle"\n        (ngvClick)="clickAction(text + \' clicked!\')">\n        {{ text }}\n      </ngv-button>\n    </div>',styles:["\n    .button-wrapper {\n      display: flex;\n      justify-content: center;\n      padding: 2rem 0;\n    }\n    .button-wrapper--Ghost {\n      background-color: #673ab6;\n    }\n    .button-wrapper--GhostDark {\n      background-color: #ffc500;\n    }"],props:args}),Primary=Template.bind({});Primary.args={buttonStyle:button_component.i.Primary,text:getButtonText(button_component.i.Primary),clickAction:console.log};const Secondary=Template.bind({});Secondary.args={...Primary.args,buttonStyle:button_component.i.Secondary,text:getButtonText(button_component.i.Secondary)};const Alternative=Template.bind({});Alternative.args={...Primary.args,buttonStyle:button_component.i.Alternative,text:getButtonText(button_component.i.Alternative)};const Delete=Template.bind({});Delete.args={...Primary.args,buttonStyle:button_component.i.Delete,text:getButtonText(button_component.i.Delete)};const DeleteConfirm=Template.bind({});DeleteConfirm.args={...Primary.args,buttonStyle:button_component.i.DeleteConfirm,text:getButtonText(button_component.i.DeleteConfirm)};const Ghost=Template.bind({});Ghost.args={...Primary.args,buttonStyle:button_component.i.Ghost,text:getButtonText(button_component.i.Ghost)};const GhostDark=Template.bind({});GhostDark.args={...Primary.args,buttonStyle:button_component.i.GhostDark,text:getButtonText(button_component.i.GhostDark)};const Link=Template.bind({});Link.args={...Primary.args,type:"link",href:"https://seb.se",buttonStyle:button_component.i.Link,text:getButtonText(button_component.i.Link)};const __namedExportsOrder=["Primary","Secondary","Alternative","Delete","DeleteConfirm","Ghost","GhostDark","Link"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'(args: any) => ({\n  template: /*html*/`\n    <div class="button-wrapper button-wrapper--{{ text }}">\n      <ngv-button\n        [small]="small"\n        [type]="type || \'button\'"\n        [href]="href"\n        [disabled]="disabled"\n        [buttonStyle]="buttonStyle"\n        (ngvClick)="clickAction(text + \' clicked!\')">\n        {{ text }}\n      </ngv-button>\n    </div>`,\n  styles: [`\n    .button-wrapper {\n      display: flex;\n      justify-content: center;\n      padding: 2rem 0;\n    }\n    .button-wrapper--Ghost {\n      background-color: #673ab6;\n    }\n    .button-wrapper--GhostDark {\n      background-color: #ffc500;\n    }`],\n  props: args\n})',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'(args: any) => ({\n  template: /*html*/`\n    <div class="button-wrapper button-wrapper--{{ text }}">\n      <ngv-button\n        [small]="small"\n        [type]="type || \'button\'"\n        [href]="href"\n        [disabled]="disabled"\n        [buttonStyle]="buttonStyle"\n        (ngvClick)="clickAction(text + \' clicked!\')">\n        {{ text }}\n      </ngv-button>\n    </div>`,\n  styles: [`\n    .button-wrapper {\n      display: flex;\n      justify-content: center;\n      padding: 2rem 0;\n    }\n    .button-wrapper--Ghost {\n      background-color: #673ab6;\n    }\n    .button-wrapper--GhostDark {\n      background-color: #ffc500;\n    }`],\n  props: args\n})',...Secondary.parameters?.docs?.source}}},Alternative.parameters={...Alternative.parameters,docs:{...Alternative.parameters?.docs,source:{originalSource:'(args: any) => ({\n  template: /*html*/`\n    <div class="button-wrapper button-wrapper--{{ text }}">\n      <ngv-button\n        [small]="small"\n        [type]="type || \'button\'"\n        [href]="href"\n        [disabled]="disabled"\n        [buttonStyle]="buttonStyle"\n        (ngvClick)="clickAction(text + \' clicked!\')">\n        {{ text }}\n      </ngv-button>\n    </div>`,\n  styles: [`\n    .button-wrapper {\n      display: flex;\n      justify-content: center;\n      padding: 2rem 0;\n    }\n    .button-wrapper--Ghost {\n      background-color: #673ab6;\n    }\n    .button-wrapper--GhostDark {\n      background-color: #ffc500;\n    }`],\n  props: args\n})',...Alternative.parameters?.docs?.source}}},Delete.parameters={...Delete.parameters,docs:{...Delete.parameters?.docs,source:{originalSource:'(args: any) => ({\n  template: /*html*/`\n    <div class="button-wrapper button-wrapper--{{ text }}">\n      <ngv-button\n        [small]="small"\n        [type]="type || \'button\'"\n        [href]="href"\n        [disabled]="disabled"\n        [buttonStyle]="buttonStyle"\n        (ngvClick)="clickAction(text + \' clicked!\')">\n        {{ text }}\n      </ngv-button>\n    </div>`,\n  styles: [`\n    .button-wrapper {\n      display: flex;\n      justify-content: center;\n      padding: 2rem 0;\n    }\n    .button-wrapper--Ghost {\n      background-color: #673ab6;\n    }\n    .button-wrapper--GhostDark {\n      background-color: #ffc500;\n    }`],\n  props: args\n})',...Delete.parameters?.docs?.source}}},DeleteConfirm.parameters={...DeleteConfirm.parameters,docs:{...DeleteConfirm.parameters?.docs,source:{originalSource:'(args: any) => ({\n  template: /*html*/`\n    <div class="button-wrapper button-wrapper--{{ text }}">\n      <ngv-button\n        [small]="small"\n        [type]="type || \'button\'"\n        [href]="href"\n        [disabled]="disabled"\n        [buttonStyle]="buttonStyle"\n        (ngvClick)="clickAction(text + \' clicked!\')">\n        {{ text }}\n      </ngv-button>\n    </div>`,\n  styles: [`\n    .button-wrapper {\n      display: flex;\n      justify-content: center;\n      padding: 2rem 0;\n    }\n    .button-wrapper--Ghost {\n      background-color: #673ab6;\n    }\n    .button-wrapper--GhostDark {\n      background-color: #ffc500;\n    }`],\n  props: args\n})',...DeleteConfirm.parameters?.docs?.source}}},Ghost.parameters={...Ghost.parameters,docs:{...Ghost.parameters?.docs,source:{originalSource:'(args: any) => ({\n  template: /*html*/`\n    <div class="button-wrapper button-wrapper--{{ text }}">\n      <ngv-button\n        [small]="small"\n        [type]="type || \'button\'"\n        [href]="href"\n        [disabled]="disabled"\n        [buttonStyle]="buttonStyle"\n        (ngvClick)="clickAction(text + \' clicked!\')">\n        {{ text }}\n      </ngv-button>\n    </div>`,\n  styles: [`\n    .button-wrapper {\n      display: flex;\n      justify-content: center;\n      padding: 2rem 0;\n    }\n    .button-wrapper--Ghost {\n      background-color: #673ab6;\n    }\n    .button-wrapper--GhostDark {\n      background-color: #ffc500;\n    }`],\n  props: args\n})',...Ghost.parameters?.docs?.source}}},GhostDark.parameters={...GhostDark.parameters,docs:{...GhostDark.parameters?.docs,source:{originalSource:'(args: any) => ({\n  template: /*html*/`\n    <div class="button-wrapper button-wrapper--{{ text }}">\n      <ngv-button\n        [small]="small"\n        [type]="type || \'button\'"\n        [href]="href"\n        [disabled]="disabled"\n        [buttonStyle]="buttonStyle"\n        (ngvClick)="clickAction(text + \' clicked!\')">\n        {{ text }}\n      </ngv-button>\n    </div>`,\n  styles: [`\n    .button-wrapper {\n      display: flex;\n      justify-content: center;\n      padding: 2rem 0;\n    }\n    .button-wrapper--Ghost {\n      background-color: #673ab6;\n    }\n    .button-wrapper--GhostDark {\n      background-color: #ffc500;\n    }`],\n  props: args\n})',...GhostDark.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:'(args: any) => ({\n  template: /*html*/`\n    <div class="button-wrapper button-wrapper--{{ text }}">\n      <ngv-button\n        [small]="small"\n        [type]="type || \'button\'"\n        [href]="href"\n        [disabled]="disabled"\n        [buttonStyle]="buttonStyle"\n        (ngvClick)="clickAction(text + \' clicked!\')">\n        {{ text }}\n      </ngv-button>\n    </div>`,\n  styles: [`\n    .button-wrapper {\n      display: flex;\n      justify-content: center;\n      padding: 2rem 0;\n    }\n    .button-wrapper--Ghost {\n      background-color: #673ab6;\n    }\n    .button-wrapper--GhostDark {\n      background-color: #ffc500;\n    }`],\n  props: args\n})',...Link.parameters?.docs?.source}}}}}]);