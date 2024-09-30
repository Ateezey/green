/*! For license information please see lib-dropdown-documentation-mdx.d542bfdf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[1765],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.ov,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/angular/src/lib/dropdown/documentation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./libs/angular/src/lib/dropdown/dropdown.component.ts"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs")),_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/angular/src/lib/dropdown/dropdown.stories.ts");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"dropdown",children:"Dropdown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing-module",children:"Importing module"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you're only using the dropdown component, you just need to import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"NggDropdownModule"}),". The example below uses reactive forms hence it needs the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ReactiveFormsModule"})," too."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"import { NgModule } from '@angular/core'\nimport { BrowserModule } from '@angular/platform-browser'\nimport { AppComponent } from './app.component'\nimport { ReactiveFormsModule } from '@angular/forms'\nimport { NggDropdownModule } from '@sebgroup/green-angular/src/lib/dropdown'\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, ReactiveFormsModule, NggDropdownModule],\n  exports: [],\n})\nexport class AppModule {}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"dropdown-select",children:"Dropdown Select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"NggDropdownComponent is a form control for selecting a single or multiple values from a set of options."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The dropdown supports 2-way binding to the value property without the need for Angular forms,\nand supports all the form directives from the core FormsModule (NgModel) and ReactiveFormsModule (FormControl, FormGroup, etc.)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__.Select}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"option-headings",children:"Option headings"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can turn your options into option headings by adding the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"heading"})," property to the option object."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"{\n  // ..other properties\n  options: [\n    { label: 'Lunch', heading: true },\n    { label: 'Tacos', value: 'tacos' },\n    { label: 'Pizza', value: 'pizza' },\n    { label: 'Sushi', value: 'sushi' },\n    { label: 'Dinner', heading: true },\n    { label: 'Ramen', value: 'ramen' },\n    { label: 'Tori Ramen', value: 'tori' },\n    { label: 'Tokyo Ramen', value: 'tokyo' },\n    { label: 'Kyoto Ramen', value: 'kyoto' },\n    { label: 'Sriracha Ramen', value: 'sriracha' },\n    { label: 'Kimchi Ramen', value: 'kimchi' },\n    { label: 'Hakodate Ramen', value: 'hakodate' },\n  ],\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__.Test}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"small-dropdown",children:"Small dropdown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can set the size of the dropdown to small by setting the size input to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"small"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__.Small}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"reactive-forms",children:"Reactive forms"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["We recommend using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://angular.io/guide/reactive-forms",target:"_blank",children:"Reactive forms"})," in Angular together with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://angular.io/api/forms/FormBuilder",target:"_blank",children:"From builder"})," especially\nif you're dealing with complex or dynamic forms."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form [formGroup]="dropdownForm">\n  <ngg-dropdown\n    formControlName="dropdownSelect"\n    [options]="options"\n  ></ngg-dropdown>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"template-driven-forms",children:"Template-driven forms"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Another approach is to use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://angular.io/guide/forms",target:"_blank",children:"Template-driven forms"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form #dropdownForm="ngForm">\n  <ngg-dropdown [(ngModel)]="selected" [options]="options"></ngg-dropdown>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"2-way-binding-without-forms",children:"2-way binding without forms"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"If you just need a simple select without any form, validation etc. it's possible to bind the dropdown directly to a value."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<ngg-dropdown [(value)]="selected" [options]="options"></ngg-dropdown>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"options",children:"Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The dropdown options should be provided as an array of objects with label and value. When a user chooses an option the value will be selected."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__.RenderWithSelectedOption}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"const options = [\n  { label: 'Tacos', value: 'tacos' },\n  { label: 'Pizza', value: 'pizza' },\n  { label: 'Im selected', value: 'im-selected', selected: true },\n]\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Set an initial value by assigning the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"value"})," to the value input or form controller. Or simply make use of the optional ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"selected?: boolean"})," as in the example above."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"preselect-with-formcontrol",children:"Preselect with FormControl"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"You can also progammatically select options by using Angular FormControls. Create a FormGroup what contains a FormControl for the dropdownStories."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"import { FormBuilder } from '@angular/forms'\n\nconstructor(private _fb: FormBuilder) {}\n\ndropdownForm = this._fb.group({\n  myDropDownControlName: 'sushi',\n})\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Then use the same control name on the dropdown component:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form [formGroup]="dropdownForm" class="horizontal">\n  <ngg-dropdown\n    [options]="options"\n    formControlName="myDropDownControlName"\n  ></ngg-dropdown>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"complex-values-and-compare-function",children:"Complex values and compare function"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"By default, the dropdown will look for a label and value pair for the data. The following inputs can be set to alter the options if neccesary."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The value does not have to be a primitive value, it can be assigned an object but it requires that a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"compareWith"})," function is provided to uniquely identify each object. Eg:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"const options = [\n  {\n    label: 'Tacos',\n    value: {\n      id: 'tacos',\n      kitchen: 'mexican',\n    },\n  },\n  {\n    label: 'Pizza',\n    value: {\n      id: 'pizza',\n      kitchen: 'italian',\n    },\n  },\n  {\n    label: 'Sushi',\n    value: {\n      id: 'sushi',\n      kitchen: 'japanese',\n    },\n  },\n]\n\nconst compareWith = (o1: any, o2: any): boolean => {\n  return o1.id === o2.id\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<ngg-dropdown\n  [(value)]="selected"\n  [options]="options"\n  [compareWith]="compareWith"\n></ngg-dropdown>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"multi-select",children:"Multi select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Just add ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"multiSelect"})," to add support for multi select."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form [formGroup]="dropdownForm">\n  <ngg-dropdown\n    formControlName="dropdownSelect"\n    [options]="options"\n    multiSelect\n  ></ngg-dropdown>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__.MultiSelect}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"searchable",children:"Searchable"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For search functionality add ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"searchable"}),". By default search will filter on 'display' provided to dropdown."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form [formGroup]="dropdownForm">\n  <ngg-dropdown\n    searchable\n    formControlName="dropdownSelect"\n    [options]="options"\n  ></ngg-dropdown>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__.Searchable}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-option-template",children:"Custom option template"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use an ng-template with the nggDropdownOption directive to provide the dropdown list with an alternative template for the list."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<ngg-dropdown searchFilter="searchFilter" ...>\n  <ng-template nggDropdownOption let-option="option" let-index="index">\n    <div>\n      <div>{{ index }}. {{ option.name }}</div>\n      <div style="font-size: 0.8em">{{ option.kitchen }}</div>\n    </div>\n  </ng-template>\n</ngg-dropdown>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__.CustomOption}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To be able to search in custom properties, you should provide an a search filter function."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"const searchFilter: (search, value) => ['kitchen', 'id'].some((key) => value[key].toLowerCase().includes(search.toLowerCase())),\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example-usage-in-reactive-form",children:"Example usage in reactive form"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Below is an example of how the component can be used with reactive forms and validations."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__.Form}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"markup",children:"Markup"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form [formGroup]="validationForm" #ngForm="ngForm" (submit)="save()">\n  <div class="form-group" *ngIf="validationForm.get(\'country\') as dropdown">\n    <ngg-dropdown\n      label="Country"\n      [options]="(options$ | async)!"\n      formControlName="country"\n      [texts]="texts"\n      [valid]="dropdown.valid && ngForm.submitted"\n      [invalid]="dropdown.invalid && ngForm.submitted"\n    >\n      \x3c!-- Hint text when not submitted --\x3e\n      <ng-container data-form-info *ngIf="!ngForm[\'submitted\']"\n        >Select country</ng-container\n      >\n      <ng-container data-form-info *ngIf="ngForm[\'submitted\']">\n        \x3c!-- Text when form control contains one or more errors --\x3e\n        <ng-container *ngIf="dropdown.errors as errors">\n          \x3c!-- Text for each error (only one will be displayed at a time) --\x3e\n          <ng-container *ngIf="errors[\'required\']">Select country</ng-container>\n        </ng-container>\n      </ng-container>\n    </ngg-dropdown>\n  </div>\n  <button type="submit" [disabled]="ngForm.submitted && validationForm.invalid">\n    Save\n  </button>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example-usage-in-reactive-form-with-reset-functionality",children:"Example usage in reactive form with reset functionality"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Below is an example of reset functionality for dropdown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_dropdown_stories_ts__WEBPACK_IMPORTED_MODULE_4__.FormWithReset}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"markup-1",children:"Markup"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form\n  [formGroup]="validationFormAdvance"\n  #ngForm="ngForm"\n  (submit)="save(validationFormAdvance.value)"\n>\n  <div\n    class="form-group"\n    *ngIf="validationFormAdvance.get(\'country\') as dropdown"\n  >\n    <ngg-dropdown\n      label="Country"\n      [options]="options$ | async"\n      formControlName="country"\n      [valid]="dropdown.valid && ngForm.submitted"\n      [invalid]="dropdown.invalid && ngForm.submitted"\n    >\n      \x3c!-- Hint text when not submitted --\x3e\n      <ng-container data-form-info *ngIf="!ngForm[\'submitted\']"\n        >Select country</ng-container\n      >\n      <ng-container data-form-info *ngIf="ngForm[\'submitted\']">\n        \x3c!-- Text when form control contains one or more errors --\x3e\n        <ng-container *ngIf="dropdown.errors as errors">\n          \x3c!-- Text for each error (only one will be displayed at a time) --\x3e\n          <ng-container *ngIf="errors[\'required\']">Select country</ng-container>\n        </ng-container>\n      </ng-container>\n    </ngg-dropdown>\n  </div>\n  <button\n    type="submit"\n    [disabled]="ngForm?.submitted && validationFormAdvance.invalid"\n  >\n    Save\n  </button>\n  <button (click)="validationFormAdvance.reset()">Reset</button>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.oz,{children:"\n| Input (attribute) | Description                                                          | Default     |\n| :---------------- | :------------------------------------------------------------------- | :---------- |\n| useValue          | Which key to use as value.                                           | `value`     |\n| display           | Which key to use as display value when selected and in options list. | `label`     |\n| syncPopoverWidth? | Force the popover to have the same widtgh as the trigger             | `undefined` |\n| size              | Size of the dropdown.                                                | `medium`    |\n| hideLabel         | Hide the label.                                                      | `false`     |\n| maxHeight         | Max height of the dropdown.                                          | `500`       |\n| multiSelect       | Enable multi select.                                                 | `false`     |\n| searchable        | Enable search.                                                       | `false`     |\n| texts             | Custom texts, see table below                                        | `Object`    |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"texts-input",children:"Texts input"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Custom texts can be set using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"texts"})," input which takes an object with the following keys."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.oz,{children:"\n| Text               | Description                                            | Default    |\n| :----------------- | :----------------------------------------------------- | :--------- |\n| selected           | Used when multiple items are selected e.g. 5 selected. | `selected` |\n| placeholder        | Text to display when no option is selected.            | `Select`   |\n| searchPlaceholder  | Text to display in Search box.                         | `Search`   |\n| close              | Text for close button displayed on mobiles.            | `Close`    |\n| optionsDescription | Text to describe options.                              | `Options`  |\n"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);