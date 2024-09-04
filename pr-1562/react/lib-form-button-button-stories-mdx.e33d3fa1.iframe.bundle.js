/*! For license information please see lib-form-button-button-stories-mdx.e33d3fa1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[5643],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(7059).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./libs/react/src/lib/form/button/button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,button:()=>button,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/form/button/button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{...props,children});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Form/Button",component:_button__WEBPACK_IMPORTED_MODULE_2__.A}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"buttons",children:"Buttons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Simple Button Component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Button",parameters:{componentIds:["component-button"]},args:{children:"Button",className:"size-sm"},children:Template.bind({})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:""}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"types",children:"Types"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Specifying a type will cause the button to automatically render the appropriate variant for that type of button."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<Button type="button">{"Button Type"}</Button><Button type="submit">{"Submit Type"}</Button><Button type="reset">{"Reset Type"}</Button>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{type:"button",children:"Button Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{type:"submit",children:"Submit Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{type:"reset",children:"Reset Type"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Variant can also be specified explicitly."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<Button variant="primary">{"Primary"}</Button><Button variant="secondary">{"Secondary"}</Button><Button variant="tertiary">{"Tertiary"}</Button><Button variant="ghost">{"Ghost"}</Button>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"primary",children:"Primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"secondary",children:"Secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"tertiary",children:"Tertiary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"ghost",children:"Ghost"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"sizes",children:"Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<Button>{"Default"}</Button><Button size="small">{"Small"}</Button><Button size="large">{"Large"}</Button>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{children:"Default"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"small",children:"Small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"large",children:"Large"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"close-button",children:"Close button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"When using the close button variant, take special care to provide an appropriate label!"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<Button variant="close" aria-label="Close" />',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"close","aria-label":"Close"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"disabled-button",children:"Disabled button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Buttons can be disabled by setting the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"disabled"})," prop. In general, this should be strictly\navoided though. Rather than using disabled buttons, you should allow the user to click the\nbutton and and instead provide an explanation of why the action is not available."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<Button variant="primary" disabled><p>{"Primary Button"}</p></Button><Button variant="secondary" disabled><p>{"Secondary Button"}</p></Button><Button variant="ghost" disabled><p>{"Ghost Button"}</p></Button>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"primary",disabled:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Primary Button"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"secondary",disabled:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Secondary Button"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"ghost",disabled:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Ghost Button"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.uY,{of:_button__WEBPACK_IMPORTED_MODULE_2__.A})]})}const button=Template.bind({});button.storyName="Button",button.args={children:"Button",className:"size-sm"},button.parameters={storySource:{source:"({\n  children,\n  ...props\n}) => <Button {...props}>{children}</Button>"},componentIds:["component-button"]};const componentMeta={title:"Components/Form/Button",component:_button__WEBPACK_IMPORTED_MODULE_2__.A,tags:["stories-mdx"],includeStories:["button"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","button"]},"./libs/react/src/lib/form/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","variant","active","type","size","testId"];function Button(_ref){var _otherProps$ariaLabe,className=_ref.className,variant=_ref.variant,_ref$active=_ref.active,active=void 0!==_ref$active&&_ref$active,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,size=_ref.size,testId=_ref.testId,otherProps=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),buttonClassName=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,variant,size,{active})||void 0;return"close"==variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",Object.assign({className:buttonClassName,"aria-label":null!=(_otherProps$ariaLabe=otherProps["aria-label"])?_otherProps$ariaLabe:"Close","data-testid":testId},otherProps,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i",{})})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",Object.assign({className:buttonClassName,type,"data-testid":testId},otherProps))}const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"Button styling. Available options: 'primary', 'secondary', 'ghost' and 'tertiary'.",name:"variant",required:!1,type:{name:"ButtonVariant"}},active:{defaultValue:{value:"false"},description:"Styling button as active or not",name:"active",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Button size. Available options: 'small' and 'large'.",name:"size",required:!1,type:{name:"ButtonSize"}},testId:{defaultValue:null,description:"Renders as a `data-testid` attribute on the `<button>` element, useful in testing scenarios.",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/form/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"libs/react/src/lib/form/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);