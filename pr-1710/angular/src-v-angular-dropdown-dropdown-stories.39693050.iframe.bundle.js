(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[3635],{"./libs/angular/src/v-angular/dropdown/typeahead/typeahead-highlight/typeahead-highlight.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host .match {\n  font-weight: 500;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>takeUntil});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_noop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");function takeUntil(notifier){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,(function(){return subscriber.complete()}),_util_noop__WEBPACK_IMPORTED_MODULE_3__.l)),!subscriber.closed&&source.subscribe(subscriber)}))}},"./libs/angular/src/v-angular/dropdown/dropdown.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComboWithInput:()=>ComboWithInput,Disabled:()=>Disabled,Primary:()=>Primary,WithCustomSelectedTemplate:()=>WithCustomSelectedTemplate,WithCustomSelectedTemplateTypeahead:()=>WithCustomSelectedTemplateTypeahead,WithDisplayDisabledAsLocked:()=>WithDisplayDisabledAsLocked,WithError:()=>WithError,WithLockedInput:()=>WithLockedInput,WithOptionToggle:()=>WithOptionToggle,WithTypeAhead:()=>WithTypeAhead,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dropdown_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),debounceTime=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),character_countdown_directive=__webpack_require__("./libs/angular/src/v-angular/character-countdown/character-countdown.directive.ts"),core_utils=__webpack_require__("./libs/angular/src/v-angular/core/core.utils.ts"),i18n_module=__webpack_require__("./libs/angular/src/v-angular/i18n/i18n.module.ts"),input_component=__webpack_require__("./libs/angular/src/v-angular/input/input.component.ts"),tooltip_directive=__webpack_require__("./libs/angular/src/v-angular/tooltip/tooltip.directive.ts"),dropdown_list_component=__webpack_require__("./libs/angular/src/v-angular/dropdown/dropdown-list/dropdown-list.component.ts"),dropdown_component=__webpack_require__("./libs/angular/src/v-angular/dropdown/dropdown.component.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var typeahead_highlight_componentngResource=__webpack_require__("./libs/angular/src/v-angular/dropdown/typeahead/typeahead-highlight/typeahead-highlight.component.scss?ngResource"),typeahead_highlight_componentngResource_default=__webpack_require__.n(typeahead_highlight_componentngResource);let NgvTypeaheadHighlightComponent=class NgvTypeaheadHighlightComponent{constructor(){this.text="",this.input="",this.allowedNonMatchingChars=new RegExp(/\s/)}ngOnChanges(changes){const{textContent,textToHighlight}=changes;null!=textContent?.currentValue&&(this.text=`${textContent.currentValue}`),null!=textToHighlight?.currentValue&&(this.input=`${textToHighlight.currentValue}`),this.updateValues()}updateValues(){const splittedText=this.text.toLocaleLowerCase().split(""),splittedInput=this.input.toLocaleLowerCase().split(""),{start,end}=this.getHighlightedPart(splittedText,splittedInput);-1!==start&&-1!==end?(this.prefix=this.text.substring(0,start),this.match=this.text.substring(start,end),this.suffix=this.text.substring(end)):this.prefix=this.match=this.suffix=""}getHighlightedPart(splittedText,splittedInput){let start=-1,end=-1;for(let i=0;i<splittedText.length&&!(start>-1||end>-1);i++)if(splittedText[i]===splittedInput[0]){let matches=1;for(let t=1;t<=splittedText.length;t++){if(matches===splittedInput.length){start=i,end=start+t;break}if(splittedText[t+i]!==splittedInput[matches]){if(this.allowedNonMatchingChars.test(splittedText[t+i]))continue;break}matches++}}return{start,end}}static{this.propDecorators={textContent:[{type:core.Input}],textToHighlight:[{type:core.Input}]}}};NgvTypeaheadHighlightComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"nggv-typeahead-highlight",template:'<ng-container *ngIf="!this.match">{{ textContent }}</ng-container>\n\x3c!-- Note that this is sensitive to line breaks producing extra spacing between the different parts --\x3e\n<ng-container *ngIf="!!this.match">\n  {{ prefix || \'\' }}<span class="match">{{ match }}</span\n  >{{ suffix || \'\' }}\n</ng-container>\n',styles:[typeahead_highlight_componentngResource_default()]})],NgvTypeaheadHighlightComponent);var typeahead_input_component=__webpack_require__("./libs/angular/src/v-angular/dropdown/typeahead/typeahead-input/typeahead-input.component.ts"),typeahead_directive=__webpack_require__("./libs/angular/src/v-angular/dropdown/typeahead/typeahead.directive.ts");const dropdown_stories={title:"V-Angular/Dropdown",component:dropdown_component.G,decorators:[(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(i18n_module.g),core_utils.z]}),(0,dist.moduleMetadata)({declarations:[dropdown_list_component.w,input_component.N,typeahead_input_component.A,NgvTypeaheadHighlightComponent,tooltip_directive.M,character_countdown_directive.q],imports:[common.CommonModule,fesm2022_forms.YN,fesm2022_forms.X1,i18n_module.g,typeahead_directive.G]})]},options=[{key:"opt1",label:"label.defaultlabel",accountNumber:"345345"},{key:"opt6",label:"HÖR LUR TJO HEJ KOTLETT"},{key:"opt2",label:"Option 2"},{key:"opt3",label:"Option 3",disabled:!0},{key:"opt4",label:"Option 4"},{key:"opt5",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{label:"Group",options:[{key:"group-opt1",label:null,accountNumber:"3453245"},{key:"group-opt2",label:"Option 2"},{key:"group-opt3",label:"Option 3"},{key:"group-opt4",label:"Option 4"}]}],Template=args=>{const ctrl=new fesm2022_forms.hs(args.ngModel);ctrl.valueChanges.subscribe(console.log);return{template:'\n      <div style="width: 264px">\n        <nggv-dropdown\n          [label]="label"\n          [placeholder]="placeholder"\n          [description]="description | transloco"\n          [options]="options"\n          [required]="required"\n          [invalid]="invalid"\n          [error]="error"\n          style="width: 264px"\n          [formControl]="formControl"\n          [locked]="locked"\n          [displayDisabledAsLocked]="displayDisabledAsLocked">\n\n          <ng-template #labelTpl>Custom Label</ng-template>\n\n          <ng-template let-option #optionTpl>{{option.label | transloco}} {{option.accountNumber}}</ng-template>\n\n        </nggv-dropdown>\n\n        <div style="margin-top: 1rem">\n          <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>\n        </div>\n      </div>',props:{...args,formControl:ctrl,disableFn:()=>{if(ctrl.disabled)return ctrl.enable();ctrl.disable()}}}},defaultArgs={required:!1,invalid:!1,label:"Field label",placeholder:"Placeholder text",description:"This. Is. A. Description.",ngModel:"opt2",options},Primary=Template.bind({});Primary.args={...defaultArgs};const Disabled=(args=>({template:'\n  <div style="width: 264px">\n    <nggv-dropdown\n      [label]="label"\n      [placeholder]="placeholder"\n      [options]="options"\n      [required]="required"\n      [invalid]="invalid"\n      [disabled]="disabled"\n      [error]="error"\n      style="width: 264px"\n      [formControl]="formControl">\n\n      <ng-template #labelTpl>Custom Label</ng-template>\n\n      <ng-template let-option #optionTpl>{{option.label | transloco}} {{option.accountNumber}}</ng-template>\n\n    </nggv-dropdown>\n  </div>',props:{...args,formControl:new fesm2022_forms.hs({value:""})}})).bind({});Disabled.args={...defaultArgs,disabled:!0};const WithError=Template.bind({});WithError.args={...defaultArgs,invalid:!0,error:"Error message"};const ComboWithInput=(args=>{const ctrl=new fesm2022_forms.hs(args.ngModel);return ctrl.valueChanges.subscribe(console.log),{template:'\n      <div style="display: flex">\n        <nggv-dropdown\n          label="Dropdown"\n          [placeholder]="placeholder"\n          [options]="options"\n          [required]="true"\n          [invalid]="true"\n          error="This is a permanent error"\n          style="width: 264px"\n          [formControl]="formControl">\n        </nggv-dropdown>\n        <nggv-input\n          label="Input"\n          [placeholder]="placeholder"\n          [required]="true"\n          style="margin-left: 0.25rem; width: 264px"\n          [formControl]="formControl">\n        </nggv-input>\n      </div>',props:{...args,formControl:ctrl}}}).bind({});ComboWithInput.args={...defaultArgs};const WithOptionToggle=(args=>{const dropdownFc=new fesm2022_forms.hs;dropdownFc.valueChanges.subscribe((value=>{console.log({value})}));args.options=options;return{template:'\n      <div style="width: 264px">\n        <div style="display: flex">\n          <button class="sdv-button" (click)="showAlt = !showAlt">Change options</button>\n          <button class="sdv-button sdv-button-alternative" (click)="resetFunc()">Reset to default</button>\n        </div>\n        <div>Value: {{ formControl.value }}</div>\n        <nggv-dropdown\n          [label]="label"\n          [placeholder]="placeholder"\n          [options]="options"\n          [required]="required"\n          style="width: 264px"\n          [formControl]="formControl">\n\n          <ng-template #labelTpl>Custom Label</ng-template>\n\n          <ng-template let-option #optionTpl>{{option.label | transloco}} {{option.accountNumber}}</ng-template>\n\n        </nggv-dropdown>\n      </div>',props:{...args,showAlt:false,formControl:dropdownFc,resetFunc:()=>{dropdownFc.reset("opt4")}}}}).bind({});WithOptionToggle.args={...defaultArgs,ngModel:"opt2",options};const WithCustomSelectedTemplate=(args=>{const fc=new fesm2022_forms.hs;return{template:'\n      <nggv-dropdown\n        [label]="label"\n        [placeholder]="placeholder"\n        [options]="options"\n        [required]="true"\n        [formControl]="formControl"\n        [locked]="locked"\n        [displayDisabledAsLocked]="displayDisabledAsLocked">\n        <ng-template let-selected #selectedTpl>\n          <div *ngIf="selected?.key" class="account-option">\n            <div class="account-option--label" style="font-weight: 500;">\n              <div>{{ selected?.accountName }}</div>\n              <div>{{ selected?.balance | number: \'1.2-2\':locale }} {{ selected?.currency }}</div>\n            </div>\n            <div class="account-option--number">\n              <div>{{ selected?.accountNumber }}</div>\n              <div>Available amount</div>\n            </div>\n          </div>\n          <div *ngIf="!selected?.key" class="account-option" style="color: gray;">Select one</div>\n        </ng-template>\n        <ng-template let-option #optionTpl>\n          <div class="account-option">\n            <div class="account-option--label">\n              <div>{{ option?.accountName }}</div>\n              <div>{{ option?.balance | number: \'1.2-2\':locale }} {{ option?.currency }}</div>\n            </div>\n            <div class="account-option--number">\n              <div>{{ option?.accountNumber }}</div>\n              <div></div>\n            </div>\n          </div>\n        </ng-template>\n\n      </nggv-dropdown>\n      <div style="margin-top: 1rem">\n        <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>\n      </div>\n      ',styles:["\n      ::ng-deep.nggv-field-dropdown__label::before {\n        margin: 0.5rem 0;\n      }\n      .account-option {\n        margin: 0.5rem 0;\n        padding-right: 0.5rem;\n        width: 350px;\n      }\n      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='false']:hover .account-option--number,\n      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='true']:hover .account-option--number,\n      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='true'] .account-option--number {\n        color: white;\n      }\n      .account-option--number,\n      .account-option--label {\n        padding-bottom: 0.25em;\n      }\n      .account-option--label {\n        display: flex;\n      }\n      .account-option--number {\n        line-height: 1;\n        font-size: 0.875em;\n        display: flex;\n        color: gray;\n      }\n      .account-option--label > * {\n        line-height: 1.5rem;\n      }\n      .account-option--number > *:first-child,\n      .account-option--label > *:first-child {\n        flex-grow: 2;\n        // flex-basis: 40%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .account-option--number > *:last-child,\n      .account-option--label > *:last-child {\n        flex-grow: 3;\n        display: flex;\n        justify-content: flex-end;\n      }"],props:{...args,formControl:fc,options:[{key:"se50000000001",label:null,accountNumber:"5000 00 000 01",accountName:"Savings account",balance:1e3,currency:"SEK"},{key:"se50000000002",label:null,accountNumber:"5000 00 000 02",accountName:"Foreign account",balance:100.5,currency:"USD"},{key:"se50000000003",label:null,accountNumber:"5000 00 000 03",accountName:"Account with a really long name",balance:2e3,currency:"SEK"},{key:"se50000000004",label:null,accountNumber:"5000 00 000 04",accountName:"Euro account with €€€",balance:100000000000.5,currency:"EUR"}],disableFn:()=>{if(fc.disabled)return fc.enable();fc.disable()}}}}).bind({});WithCustomSelectedTemplate.args={...defaultArgs,label:"Account selector",locked:!1,displayDisabledAsLocked:!0};const WithCustomSelectedTemplateTypeahead=(args=>{let filterPhrase="";const accounts=[{key:"se50000000001",label:null,accountNumber:"5000 00 000 01",accountName:"Savings account 2",balance:1e3,currency:"SEK"},{key:"se50000000002",label:null,accountNumber:"5000 00 000 02",accountName:"Foreign account 03",balance:100.5,currency:"USD"},{key:"se50000000003",label:null,accountNumber:"5000 00 000 03",accountName:"Account with a really long name",balance:2e3,currency:"SEK"},{key:"se50000000004",label:null,accountNumber:"5000 00 000 04",accountName:"Euro account with €€€",balance:100000000000.5,currency:"EUR"}],fc=new fesm2022_forms.hs;return{template:'\n    Value: {{ formControl.value }}\n    Filter: {{ getFilterPhrase() }}\n      <nggv-dropdown\n        [label]="label"\n        [placeholder]="placeholder"\n        [options]="options"\n        [required]="true"\n        [formControl]="formControl"\n        [locked]="locked"\n        [displayDisabledAsLocked]="displayDisabledAsLocked"\n        [nggvTypeahead]="searchFunction"\n        [selectedFormatter]="selectedFormatter"\n        [resultFormatter]="resultFormatter"\n        [allowUnselect]="true"\n        [unselectLabel]="unselectLabel"\n        (filterPhraseChange)="handlefilterPhraseChange($event)">\n\n        <ng-template let-selected #selectedTpl>\n          <div *ngIf="!!selected?.key" class="account-option">\n            <div class="account-option--label" style="font-weight: 500;">\n              <div>{{ selected?.accountName }}</div>\n              <div>{{ selected?.balance | number: \'1.2-2\':locale }} {{ selected?.currency }}</div>\n            </div>\n            <div class="account-option--number">\n              <div>{{ selected?.accountNumber }}</div>\n              <div>Available amount</div>\n            </div>\n          </div>\n          <div *ngIf="!selected?.key" class="account-option" style="color: gray;">Select one</div>\n        </ng-template>\n\n        <ng-template let-option #optionTpl>\n          <div *ngIf="!option.key">\n            {{ (option?.label | transloco) || \'None\' }}\n          </div>\n          <div class="account-option" *ngIf="!!option.key">\n            <div class="account-option--label">\n              <div>\n                <nggv-typeahead-highlight [textContent]="option?.accountName" [textToHighlight]="getFilterPhrase()">\n                </nggv-typeahead-highlight>\n              </div>\n\n              <div>{{ option?.balance | number: \'1.2-2\':locale }} {{ option?.currency }}</div>\n            </div>\n            <div class="account-option--number">\n              <div>\n                <nggv-typeahead-highlight [textContent]="option?.accountNumber" [textToHighlight]="getFilterPhrase()">\n                </nggv-typeahead-highlight></div>\n              <div></div>\n            </div>\n          </div>\n        </ng-template>\n\n      </nggv-dropdown>\n      <div style="margin-top: 1rem">\n        <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>\n      </div>\n      ',styles:["\n      ::ng-deep.nggv-field-dropdown__label::before {\n        margin: 0.5rem 0;\n      }\n      .account-option {\n        margin: 0.5rem 0;\n        padding-right: 0.5rem;\n        width: 350px;\n      }\n      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='false']:hover .account-option--number,\n      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='true']:hover .account-option--number,\n      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='true'] .account-option--number {\n        color: white;\n      }\n      .account-option--number,\n      .account-option--label {\n        padding-bottom: 0.25em;\n      }\n      .account-option--label {\n        display: flex;\n      }\n      .account-option--number {\n        line-height: 1;\n        font-size: 0.875em;\n        display: flex;\n        color: gray;\n      }\n      .account-option--label > * {\n        line-height: 1.5rem;\n      }\n      .account-option--number > *:first-child,\n      .account-option--label > *:first-child {\n        flex-grow: 2;\n        // flex-basis: 40%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .account-option--number > *:last-child,\n      .account-option--label > *:last-child {\n        flex-grow: 3;\n        display: flex;\n        justify-content: flex-end;\n      }"],props:{...args,formControl:fc,options:accounts,unselectLabel:"Unselect",disableFn:()=>{if(fc.disabled)return fc.enable();fc.disable()},searchFunction:value$=>value$.pipe((0,debounceTime.B)(150),(0,map.T)((inputValue=>accounts.filter((option=>option.accountName?.toUpperCase().includes(inputValue?.toUpperCase())||option.accountNumber?.replace(/\s/,"").includes(inputValue)))))),getFilterPhrase:function getFilterPhrase(){return filterPhrase},handlefilterPhraseChange:event=>{filterPhrase=event},selectedFormatter:account=>account?.accountName}}}).bind({});WithCustomSelectedTemplateTypeahead.args={...defaultArgs,label:"Account selector",locked:!1,displayDisabledAsLocked:!0};const WithLockedInput=Template.bind({});WithLockedInput.args={...Primary.args,ngModel:"opt2",locked:!0,description:void 0};const WithDisplayDisabledAsLocked=Template.bind({});WithDisplayDisabledAsLocked.args={...Primary.args,locked:!1,description:void 0,displayDisabledAsLocked:!0};const WithTypeAhead=(args=>{const ctrl=new fesm2022_forms.hs;return ctrl.valueChanges.subscribe(console.log),{template:'\n    Value: {{ formControl.value }}\n    <div style="width: 264px; display:">\n        <nggv-dropdown\n          [label]="label"\n          [formControl]="formControl"\n          [placeholder]="placeholder"\n          [description]="description | transloco"\n          [required]="required"\n          [invalid]="invalid"\n          [error]="error"\n          style="width: 264px"\n          #dropdownElement\n          [options]="options"\n          [allowUnselect]="allowUnselect"\n          [unselectLabel]="unselectLabel"\n          [nggvTypeahead]="searchFunction"\n          [resultFormatter]="resultFormatter"\n          [selectedFormatter]="selectedFormatter">\n\n          <ng-template #labelTpl>Custom Label</ng-template>\n\n        </nggv-dropdown>\n      </div>',styles:[""],props:{...args,formControl:ctrl,placeholder:"Choose",allowUnselect:!0,unselectLabel:"Unselect",searchFunction:value$=>value$.pipe((0,debounceTime.B)(300),(0,map.T)((inputValue=>options.filter((option=>option.label?.replace(/\s/gm,"").toLocaleLowerCase().includes(inputValue?.replace(/\s/gm,"").toLocaleLowerCase()))))))}}}).bind({});WithTypeAhead.args={...defaultArgs};const __namedExportsOrder=["Primary","Disabled","WithError","ComboWithInput","WithOptionToggle","WithCustomSelectedTemplate","WithCustomSelectedTemplateTypeahead","WithLockedInput","WithDisplayDisabledAsLocked","WithTypeAhead"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"Template.bind({}) as any",...Primary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"DisabledTemplate.bind({}) as any",...Disabled.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"Template.bind({}) as any",...WithError.parameters?.docs?.source}}},ComboWithInput.parameters={...ComboWithInput.parameters,docs:{...ComboWithInput.parameters?.docs,source:{originalSource:"ComboTemplate.bind({}) as any",...ComboWithInput.parameters?.docs?.source}}},WithOptionToggle.parameters={...WithOptionToggle.parameters,docs:{...WithOptionToggle.parameters?.docs,source:{originalSource:"AltTemplate.bind({}) as any",...WithOptionToggle.parameters?.docs?.source}}},WithCustomSelectedTemplate.parameters={...WithCustomSelectedTemplate.parameters,docs:{...WithCustomSelectedTemplate.parameters?.docs,source:{originalSource:"CustomSelectedTemplate.bind({}) as any",...WithCustomSelectedTemplate.parameters?.docs?.source}}},WithCustomSelectedTemplateTypeahead.parameters={...WithCustomSelectedTemplateTypeahead.parameters,docs:{...WithCustomSelectedTemplateTypeahead.parameters?.docs,source:{originalSource:"CustomSelectedTemplateTypeahead.bind({}) as any",...WithCustomSelectedTemplateTypeahead.parameters?.docs?.source}}},WithLockedInput.parameters={...WithLockedInput.parameters,docs:{...WithLockedInput.parameters?.docs,source:{originalSource:'(args: any) => {\n  const ctrl = new UntypedFormControl(args.ngModel);\n  ctrl.valueChanges.subscribe(console.log);\n  const toggleDisableField = () => {\n    if (ctrl.disabled) return ctrl.enable();\n    ctrl.disable();\n  };\n  return {\n    template: /*html*/`\n      <div style="width: 264px">\n        <nggv-dropdown\n          [label]="label"\n          [placeholder]="placeholder"\n          [description]="description | transloco"\n          [options]="options"\n          [required]="required"\n          [invalid]="invalid"\n          [error]="error"\n          style="width: 264px"\n          [formControl]="formControl"\n          [locked]="locked"\n          [displayDisabledAsLocked]="displayDisabledAsLocked">\n\n          <ng-template #labelTpl>Custom Label</ng-template>\n\n          <ng-template let-option #optionTpl>{{option.label | transloco}} {{option.accountNumber}}</ng-template>\n\n        </nggv-dropdown>\n\n        <div style="margin-top: 1rem">\n          <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>\n        </div>\n      </div>`,\n    props: {\n      ...args,\n      formControl: ctrl,\n      disableFn: toggleDisableField\n    }\n  };\n}',...WithLockedInput.parameters?.docs?.source}}},WithDisplayDisabledAsLocked.parameters={...WithDisplayDisabledAsLocked.parameters,docs:{...WithDisplayDisabledAsLocked.parameters?.docs,source:{originalSource:'(args: any) => {\n  const ctrl = new UntypedFormControl(args.ngModel);\n  ctrl.valueChanges.subscribe(console.log);\n  const toggleDisableField = () => {\n    if (ctrl.disabled) return ctrl.enable();\n    ctrl.disable();\n  };\n  return {\n    template: /*html*/`\n      <div style="width: 264px">\n        <nggv-dropdown\n          [label]="label"\n          [placeholder]="placeholder"\n          [description]="description | transloco"\n          [options]="options"\n          [required]="required"\n          [invalid]="invalid"\n          [error]="error"\n          style="width: 264px"\n          [formControl]="formControl"\n          [locked]="locked"\n          [displayDisabledAsLocked]="displayDisabledAsLocked">\n\n          <ng-template #labelTpl>Custom Label</ng-template>\n\n          <ng-template let-option #optionTpl>{{option.label | transloco}} {{option.accountNumber}}</ng-template>\n\n        </nggv-dropdown>\n\n        <div style="margin-top: 1rem">\n          <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>\n        </div>\n      </div>`,\n    props: {\n      ...args,\n      formControl: ctrl,\n      disableFn: toggleDisableField\n    }\n  };\n}',...WithDisplayDisabledAsLocked.parameters?.docs?.source}}},WithTypeAhead.parameters={...WithTypeAhead.parameters,docs:{...WithTypeAhead.parameters?.docs,source:{originalSource:"TypeaheadTemplate.bind({}) as any",...WithTypeAhead.parameters?.docs?.source}}}}}]);