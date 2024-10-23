/*! For license information please see lib-grouped-list-grouped-list-docs-mdx.466202bb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[3586,861],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.ov,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./libs/angular/src/lib/grouped-list/grouped-list.docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_grouped_list_stories_ts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/angular/src/lib/grouped-list/grouped-list.stories.ts");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_grouped_list_stories_ts__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"grouped-list",children:"Grouped list"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/seb-oss/green/tree/main/libs/core/src/components/grouped-list",rel:"nofollow",children:"Source code"}),"\n | \n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://designlibrary.sebgroup.com/components/component-list",rel:"nofollow",children:"Usage guidelines"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Grouped List component is used to list many datapoints with labels in a structured way. They may be grouped under heading and they may have a link or button added to act on the data being displayed."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"use-web-component-in-angular",children:"Use Web component in Angular"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This is a Web component that comes from the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Green Core"})," library. Angular has support for using web components directly in the template. To use this webcomponent in Angular, you need to do the following:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Add the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," in the module that uses this component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'\nimport { NggCoreWrapperModule } from '@sebgroup/green-angular/common'\n\n@NgModule({\n    // Add the NggCoreWrapperModule to the `imports` array\n    imports: [NggCoreWrapperModule],\n    // Add the CUSTOM_ELEMENTS_SCHEMA to the `schemas` array\n    schemas: [CUSTOM_ELEMENTS_SCHEMA],\n})\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Import dependencies in the Angular component that uses it."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"import '@sebgroup/green-core/components/grouped-list/index.js'\n\n// if you need to interact with the component through the DOM, you can also import the class type like this:\n// import type { GdsGroupedList } from '@sebgroup/green-core/components/grouped-list/index.js'\n\n// Transitional styles will make the component get 2016 design\nimport * as GroupedListTransStyles from '@sebgroup/green-core/components/grouped-list/grouped-list.trans.styles.js'\n// Call this fuction to register the transitional styles\nGroupedListTransStyles.register()\n// This will load 2016 styles for all instances of Grouped List in the current document.\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the webcomponent in your template with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"*nggCoreElement"})," directive."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<gds-grouped-list *nggCoreElement label="Grouped list label">\n  <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n  <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n  <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n</gds-grouped-list>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.gG,{id:"components-grouped-list--default"})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./libs/angular/src/lib/grouped-list/grouped-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>grouped_list_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),core_element_module=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.module.ts"),chunk_TQCUATGL=__webpack_require__("./dist/libs/core/src/chunks/chunk.TQCUATGL.js"),chunk_WIZDAKJ5=__webpack_require__("./dist/libs/core/src/chunks/chunk.WIZDAKJ5.js"),chunk_MLXMQIEV=__webpack_require__("./dist/libs/core/src/chunks/chunk.MLXMQIEV.js"),chunk_SEHSDSX2=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),GdsGroupedList=class extends chunk_WIZDAKJ5.j{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),chunk_TQCUATGL.nD.instance.apply(this,"gds-grouped-list")}render(){return chunk_MLXMQIEV.qy`${(0,when.z)(this.label,(()=>chunk_MLXMQIEV.qy`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`))}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsGroupedList.prototype,"label",2),GdsGroupedList=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-grouped-list")],GdsGroupedList);var GdsListItem=class extends chunk_WIZDAKJ5.j{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return chunk_MLXMQIEV.qy`<slot></slot>`}};GdsListItem=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-list-item")],GdsListItem);__webpack_require__("./dist/libs/core/src/chunks/chunk.JY3EKAVI.js");chunk_TQCUATGL.h0();const grouped_list_stories={title:"Components/Grouped List",decorators:[(0,dist.moduleMetadata)({imports:[core_element_module.$],schemas:[core.CUSTOM_ELEMENTS_SCHEMA]})],parameters:{}},Default=(args=>({template:`\n    <gds-grouped-list *nggCoreElement label="${args.label}">\n        <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n    </gds-grouped-list>\n    `,props:args})).bind({});Default.args={label:"Grouped list label"};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => ({\n  template: `\n    <gds-grouped-list *nggCoreElement label="${args.label}">\n        <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n    </gds-grouped-list>\n    `,\n  props: args\n})',...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=lib-grouped-list-grouped-list-docs-mdx.466202bb.iframe.bundle.js.map