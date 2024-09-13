/*! For license information please see lib-form-button-button-mdx.7e3c9fe4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[6103,8510],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/react/src/lib/form/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","variant","active","type","size","testId"];function Button(_ref){var _otherProps$ariaLabe,className=_ref.className,variant=_ref.variant,_ref$active=_ref.active,active=void 0!==_ref$active&&_ref$active,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,size=_ref.size,testId=_ref.testId,otherProps=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),buttonClassName=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,variant,size,{active})||void 0;return"close"==variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",Object.assign({className:buttonClassName,"aria-label":null!=(_otherProps$ariaLabe=otherProps["aria-label"])?_otherProps$ariaLabe:"Close","data-testid":testId},otherProps,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i",{})})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",Object.assign({className:buttonClassName,type,"data-testid":testId},otherProps))}const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"ButtonVariant"},description:"Button styling. Available options: 'primary', 'secondary', 'ghost' and 'tertiary'."},active:{required:!1,tsType:{name:"boolean"},description:"Styling button as active or not",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"ButtonSize"},description:"Button size. Available options: 'small' and 'large'."},testId:{required:!1,tsType:{name:"string"},description:"Renders as a `data-testid` attribute on the `<button>` element, useful in testing scenarios."},type:{defaultValue:{value:"'button'",computed:!1},required:!1}},composes:["DetailedHTMLProps"]}},"./libs/react/src/lib/form/button/button.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/form/button/button.tsx"),_button_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/react/src/lib/form/button/button.stories.tsx");const Template=({children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{...props,children});function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",p:"p",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_button_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"buttons",children:"Buttons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Simple Button Component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_button_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:""}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"types",children:"Types"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Specifying a type will cause the button to automatically render the appropriate variant for that type of button."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{type:"button",children:"Button Type"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{type:"submit",children:"Submit Type"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{type:"reset",children:"Reset Type"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Variant can also be specified explicitly."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"primary",children:"Primary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"secondary",children:"Secondary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"tertiary",children:"Tertiary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"ghost",children:"Ghost"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"sizes",children:"Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"small",children:"Small"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"large",children:"Large"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"close-button",children:"Close button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"When using the close button variant, take special care to provide an appropriate label!"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"close","aria-label":"Close"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"disabled-button",children:"Disabled button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Buttons can be disabled by setting the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"disabled"})," prop. In general, this should be strictly\navoided though. Rather than using disabled buttons, you should allow the user to click the\nbutton and and instead provide an explanation of why the action is not available."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"primary",disabled:!0,children:"Primary Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"secondary",disabled:!0,children:"Secondary Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"ghost",disabled:!0,children:"Ghost Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.H2,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./libs/react/src/lib/form/button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react/src/lib/form/button/button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"];const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Form/Button",component:_button__WEBPACK_IMPORTED_MODULE_0__.A};var Default={render:function Template(_ref){var children=_ref.children,props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.A,Object.assign({},props,{children}))}.bind({}),name:"Button",parameters:{componentIds:["component-button"]},args:{children:"Button"}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Button',\n  parameters: {\n    componentIds: ['component-button']\n  },\n  args: {\n    children: 'Button'\n  }\n}",...Default.parameters?.docs?.source}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);