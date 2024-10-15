/*! For license information please see lib-accordion-accordion-mdx.ab818480.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[8702,1001],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayWithHoles(r){if(Array.isArray(r))return r}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayWithHoles})},"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}__webpack_require__.d(__webpack_exports__,{A:()=>_nonIterableRest})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");function _slicedToArray(r,e){return(0,arrayWithHoles.A)(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||(0,unsupportedIterableToArray.A)(r,e)||(0,nonIterableRest.A)()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a):void 0}}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sg:()=>debounce,cb:()=>delay,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors,ok:()=>validateClassName});var validateClassName=function validateClassName(value){switch(value){case"success":return"is-valid";case"error":return"is-invalid";default:return""}},debounce=function debounce(func,ms){var timeoutID;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timeoutID),timeoutID=window.setTimeout((function(){func.apply(undefined,args)}),ms)}},delay=function delay(ms){return new Promise((function(resolve){return setTimeout(resolve,ms)}))},randomId=function randomId(){return"gds-"+Math.random().toString(36).substring(2,9)},sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=function getSliderTrackBackground(val){return"linear-gradient(\n        to right,\n        ".concat(sliderColors.primary," 0%,\n        ").concat(sliderColors.primary," ").concat(val,"%,\n        ").concat(sliderColors.disabled," ").concat(val,"%,\n        ").concat(sliderColors.disabled," 100%\n      )")}},"./libs/react/src/lib/accordion/accordion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>accordion});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AccordionItem=function AccordionItem(_ref){var item=_ref.item,index=_ref.index,uuid=_ref.uuid,labelElementLevel=item.labelElementLevel,label=item.label,subLabel=item.subLabel,content=item.content,customLabel=item.customLabel,contentRef=(0,react.useRef)(null),_useState=(0,react.useState)(item.defaultOpen||!1),_useState2=(0,slicedToArray.A)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1];return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{role:"heading","aria-level":labelElementLevel,children:(0,jsx_runtime.jsxs)("button",{id:"accordion-item-button-".concat(index,"-").concat(uuid),"aria-expanded":isOpen,"aria-controls":"accordion-item-region-".concat(index,"-").concat(uuid),onClick:function onClick(event){!function handleOnClick(event){item.onClick&&item.onClick(event),setIsOpen((function(state){return state?item.onClose&&item.onClose(event):(item.onOpen&&item.onOpen(event),window.requestAnimationFrame((function(){var _contentRef$current;null==(_contentRef$current=contentRef.current)||_contentRef$current.scrollIntoView({behavior:"smooth",block:"nearest"})}))),!state}))}(event)},children:[customLabel||(0,jsx_runtime.jsx)("span",{children:label}),subLabel&&(0,jsx_runtime.jsx)("span",{children:subLabel}),(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M18.8095 9.22817L18.1907 8.60942C18.0438 8.46255 17.8063 8.46255 17.6595 8.60942L12.0001 14.2563L6.34072 8.60942C6.19385 8.46255 5.95635 8.46255 5.80947 8.60942L5.19072 9.22817C5.04385 9.37505 5.04385 9.61255 5.19072 9.75942L11.7345 16.3032C11.8813 16.45 12.1188 16.45 12.2657 16.3032L18.8095 9.75942C18.9563 9.61255 18.9563 9.37505 18.8095 9.22817Z",fill:"#333333"})})]})}),(0,jsx_runtime.jsx)("div",{role:"region",id:"accordion-item-region-".concat(index,"-").concat(uuid),"aria-labelledby":"accordion-item-button-".concat(index,"-").concat(uuid),hidden:!isOpen,children:(0,jsx_runtime.jsx)("div",{ref:contentRef,children:content})})]})};const accordion_item=AccordionItem;AccordionItem.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{item:{required:!0,tsType:{name:"AccordionItemInterface"},description:""},index:{required:!0,tsType:{name:"number"},description:""},uuid:{required:!0,tsType:{name:"string"},description:""}}};var src=__webpack_require__("./libs/extract/src/index.ts"),Accordion=function Accordion(_ref){var items=_ref.items,_React$useState=react.useState((0,src.zE)()),_React$useState2=(0,slicedToArray.A)(_React$useState,2),uuid=_React$useState2[0];_React$useState2[1];return(0,jsx_runtime.jsx)("div",{className:"accordion",children:items&&items.map((function(item,index){return(0,jsx_runtime.jsx)(accordion_item,{item,index,uuid},"accordion-".concat(uuid,"-").concat(index))}))})};const accordion=Accordion;Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItemInterface"}],raw:"AccordionItemInterface[]"},description:""}}}},"./libs/react/src/lib/accordion/accordion.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_accordion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/accordion/accordion.tsx"),_accordion_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/react/src/lib/accordion/accordion.stories.tsx");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_accordion__WEBPACK_IMPORTED_MODULE_2__.A,{...args});function _createMdxContent(props){const _components={h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_accordion_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"accordion",children:"Accordion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"An accordion lets users show and hide sections of related content on a page."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_accordion_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Accordions can make information processing more effective. Best suited for plain text, lists, tables and inline links. A good example for use could be a FAQ and Terms and conditions."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'Use the accordions to "hide" information that users doesn\'t necessarily need to read or only need to read occasionally. If the majority of users will read it, it should be visible.'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oz,{children:"\n  | Prop  | Type                            | Description                    |\n  | :---- | :------------------------------ | :----------------------------- |\n  | items | `Array<AccordionItemInterface>` | List of items in the accordion |\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"accordioniteminterface",children:"AccordionItemInterface"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oz,{children:"\n  | Key            | Type                                                           |\n  | :--------------| :------------------------------------------------------------- |\n  | label          | `string`                                                       |\n  | subLabel       | `string`                                                       |\n  | content        | `JSXElement`                                                   |\n  | onClick?       | `(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` |\n  | onOpen?        | `(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` |\n  | onClose?       | `(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` |\n  | defaultOpen?   | `boolean` |\n  | customLabel    | `ReactNode`                                                 |\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{id:"components-accordion--accordion"})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./libs/react/src/lib/accordion/accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _accordion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react/src/lib/accordion/accordion.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Accordion",component:_accordion__WEBPACK_IMPORTED_MODULE_0__.A};var Default={render:function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_accordion__WEBPACK_IMPORTED_MODULE_0__.A,Object.assign({},args))}.bind({}),name:"Accordion",parameters:{componentIds:["component-accordion"]},args:{items:[{label:"First accordion heading",subLabel:"First accordion sublabel",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"In such a case, we can debounce the resize handling and thus the re-rendering. This will mean to throttle or wait between calls to our handleResize function. There are solid debounce implementations. Let's add a short and simple one to our example"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"#",children:"And this is a link"})]}),labelElementLevel:2,defaultOpen:!0},{label:"Second accordion heading",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"When adding an event listener, such as we are for the resize event, we should make sure to clean up after ourselves. In the example so far, we haven't, and that could cause our app problems later."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"#",children:"And this is a link"})]}),labelElementLevel:2},{label:"Third accordion heading",subLabel:"Third accordion sublabel",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"This is a paragraph in the thrid accordion."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"#",children:"This is the second link example"})]}),labelElementLevel:2}]}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Accordion',\n  parameters: {\n    componentIds: ['component-accordion']\n  },\n  args: {\n    items: [{\n      label: 'First accordion heading',\n      subLabel: 'First accordion sublabel',\n      content: <>\n            <p>\n              In such a case, we can debounce the resize handling and thus the\n              re-rendering. This will mean to throttle or wait between calls to\n              our handleResize function. There are solid debounce\n              implementations. Let's add a short and simple one to our example\n            </p>\n            <a href=\"#\">And this is a link</a>\n          </>,\n      labelElementLevel: 2,\n      defaultOpen: true\n    }, {\n      label: 'Second accordion heading',\n      content: <>\n            <p>\n              When adding an event listener, such as we are for the resize\n              event, we should make sure to clean up after ourselves. In the\n              example so far, we haven't, and that could cause our app problems\n              later.\n            </p>\n            <a href=\"#\">And this is a link</a>\n          </>,\n      labelElementLevel: 2\n    }, {\n      label: 'Third accordion heading',\n      subLabel: 'Third accordion sublabel',\n      content: <>\n            <p>This is a paragraph in the thrid accordion.</p>\n            <a href=\"#\">This is the second link example</a>\n          </>,\n      labelElementLevel: 2\n    }]\n  }\n}",...Default.parameters?.docs?.source}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);