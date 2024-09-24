/*! For license information please see lib-badge-badge-mdx.3a7a25ac.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[4358],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayWithHoles(r){if(Array.isArray(r))return r}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayWithHoles})},"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}__webpack_require__.d(__webpack_exports__,{A:()=>_nonIterableRest})},"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectDestructuringEmpty(t){if(null==t)throw new TypeError("Cannot destructure "+t)}__webpack_require__.d(__webpack_exports__,{A:()=>_objectDestructuringEmpty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");function _slicedToArray(r,e){return(0,arrayWithHoles.A)(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||(0,unsupportedIterableToArray.A)(r,e)||(0,nonIterableRest.A)()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a):void 0}}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/react/src/lib/badge/badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","badgeType","isCloseable","closeText","customColor","customBackgroundColor"];function Badge(_ref){var children=_ref.children,badgeType=_ref.badgeType,isCloseable=_ref.isCloseable,closeText=_ref.closeText,customColor=_ref.customColor,customBackgroundColor=_ref.customBackgroundColor,props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(_React$useState,2),isClosed=_React$useState2[0],setIsClosed=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState(""),_React$useState4=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(_React$useState3,2),type=_React$useState4[0],setType=_React$useState4[1];return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){badgeType&&setType(badgeType),(customColor||customBackgroundColor)&&setType("")}),[badgeType,customColor,customBackgroundColor]),isClosed?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",Object.assign({},props,{className:"badge ".concat(type),style:{color:customColor,backgroundColor:customBackgroundColor},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children}),isCloseable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button",{type:"button",className:"close",onClick:function onClick(){return setIsClosed(!0)},children:[closeText,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i",{})]})]}))}const __WEBPACK_DEFAULT_EXPORT__=Badge;Badge.__docgenInfo={description:"Renders a badge component.\n\n@param {React.ReactNode} props.children - The content of the badge.\n@param {string} props.badgeType - The type of the badge.\n@param {boolean} props.isCloseable - Indicates if the badge is closeable.\n@param {string} props.closeText - The text for the close button.\n@param {string} props.customColor - The custom color for the badge.\n@param {string} props.customBackgroundColor - The custom background color for the badge.\n@returns {React.ReactNode} The rendered badge component.",methods:[],displayName:"Badge",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},badgeType:{required:!1,tsType:{name:"BadgeType"},description:""},isCloseable:{required:!1,tsType:{name:"boolean"},description:""},closeText:{required:!1,tsType:{name:"string"},description:""},customColor:{required:!1,tsType:{name:"string"},description:""},customBackgroundColor:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLProps"]}},"./libs/react/src/lib/badge/badge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/badge/badge.tsx"),_badge_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/react/src/lib/badge/badge.stories.tsx");const Template=({...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_2__.A,{...props});function _createMdxContent(props){const _components={h1:"h1",h3:"h3",p:"p",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_badge_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Simple Badge Component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_badge_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:""}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"types",children:"Types"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Badges are available in a number of different variants. Please note that the colors used in the examples below are not final yet."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"badge-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_2__.A,{children:"Badge"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_2__.A,{badgeType:"info",children:"Information"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_2__.A,{badgeType:"success",children:"Success"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_2__.A,{badgeType:"warning",children:"Warning"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_2__.A,{badgeType:"danger",children:"Danger"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_2__.A,{badgeType:"light",children:"Light"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_2__.A,{badgeType:"dark",children:"Dark"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_2__.A,{customColor:"#062BCC",customBackgroundColor:"#E6F5FF",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Custom"})})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.ov,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./libs/react/src/lib/badge/badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_badge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react/src/lib/badge/badge.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Badge",component:_badge__WEBPACK_IMPORTED_MODULE_0__.A};var Default={render:function Template(_ref){var props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({},((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref),_ref));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_0__.A,Object.assign({},props))}.bind({}),name:"Badge",parameters:{componentIds:["component-badge"]},args:{children:"Primary",badgeType:"info",isCloseable:!1}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Badge',\n  parameters: {\n    componentIds: ['component-badge']\n  },\n  args: {\n    children: 'Primary',\n    badgeType: 'info',\n    isCloseable: false\n  }\n}",...Default.parameters?.docs?.source}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);