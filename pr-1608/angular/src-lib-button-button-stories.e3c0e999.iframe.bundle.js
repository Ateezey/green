"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[5991],{"./libs/angular/src/lib/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>NggButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NggButtonComponent=class NggButtonComponent{get classes(){return[this.variant,!!this.size&&this.size].filter(Boolean).join(" ")}static#_=this.propDecorators={variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],classes:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class"]}]}};NggButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"[ngg-button]",template:"<ng-content></ng-content>",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush})],NggButtonComponent)},"./libs/angular/src/lib/button/button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Sizes:()=>Sizes,Types:()=>Types,Variants:()=>Variants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),button_component=__webpack_require__("./libs/angular/src/lib/button/button.component.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let NggButtonModule=class NggButtonModule{};NggButtonModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[button_component.S],imports:[common.CommonModule],exports:[button_component.S]})],NggButtonModule);const button_stories={title:"Components/Form/Button",component:button_component.S,decorators:[(0,dist.moduleMetadata)({imports:[NggButtonModule]})],parameters:{componentIds:["component-button"]}},Default=(()=>({template:"\n    <button ngg-button>Button</button>\n    "})).bind({}),Types=(()=>({template:'\n    <div class="horizontal">\n      <button ngg-button type="button">Button</button>\n      <button ngg-button type="submit">Submit</button>\n      <button ngg-button type="reset">Reset</button>\n    </div>\n    '})).bind({}),Variants=(()=>({template:'\n    <div class="horizontal">\n      <button ngg-button variant="primary">Primary</button>\n      <button ngg-button variant="secondary">Secondary</button>\n      <button ngg-button variant="ghost">Ghost</button>\n    </div>\n    '})).bind({}),Sizes=(()=>({template:'\n    <div class="horizontal">\n      <button ngg-button>Default</button>\n      <button ngg-button size="small">Small</button>\n      <button ngg-button size="large">Large</button>\n    </div>\n    '})).bind({}),__namedExportsOrder=["Default","Types","Variants","Sizes"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => {\n  return {\n    template: `\n    <button ngg-button>Button</button>\n    `\n  };\n}",...Default.parameters?.docs?.source}}},Types.parameters={...Types.parameters,docs:{...Types.parameters?.docs,source:{originalSource:'() => {\n  return {\n    template: `\n    <div class="horizontal">\n      <button ngg-button type="button">Button</button>\n      <button ngg-button type="submit">Submit</button>\n      <button ngg-button type="reset">Reset</button>\n    </div>\n    `\n  };\n}',...Types.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'() => {\n  return {\n    template: `\n    <div class="horizontal">\n      <button ngg-button variant="primary">Primary</button>\n      <button ngg-button variant="secondary">Secondary</button>\n      <button ngg-button variant="ghost">Ghost</button>\n    </div>\n    `\n  };\n}',...Variants.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => {\n  return {\n    template: `\n    <div class="horizontal">\n      <button ngg-button>Default</button>\n      <button ngg-button size="small">Small</button>\n      <button ngg-button size="large">Large</button>\n    </div>\n    `\n  };\n}',...Sizes.parameters?.docs?.source}}}}}]);