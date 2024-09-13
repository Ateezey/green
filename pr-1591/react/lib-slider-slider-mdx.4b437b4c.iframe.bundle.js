/*! For license information please see lib-slider-slider-mdx.4b437b4c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[9258,9645],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayWithHoles(r){if(Array.isArray(r))return r}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayWithHoles})},"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}__webpack_require__.d(__webpack_exports__,{A:()=>_nonIterableRest})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");function _slicedToArray(r,e){return(0,arrayWithHoles.A)(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||(0,unsupportedIterableToArray.A)(r,e)||(0,nonIterableRest.A)()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a):void 0}}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sg:()=>debounce,cb:()=>delay,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors,ok:()=>validateClassName});var validateClassName=function validateClassName(value){switch(value){case"success":return"is-valid";case"error":return"is-invalid";default:return""}},debounce=function debounce(func,ms){var timeoutID;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timeoutID),timeoutID=window.setTimeout((function(){func.apply(undefined,args)}),ms)}},delay=function delay(ms){return new Promise((function(resolve){return setTimeout(resolve,ms)}))},randomId=function randomId(){return"gds-"+Math.random().toString(36).substring(2,9)},sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=function getSliderTrackBackground(val){return"linear-gradient(\n        to right,\n        ".concat(sliderColors.primary," 0%,\n        ").concat(sliderColors.primary," ").concat(val,"%,\n        ").concat(sliderColors.disabled," ").concat(val,"%,\n        ").concat(sliderColors.disabled," 100%\n      )")}},"./libs/react/src/lib/slider/slider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Slider});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_sebgroup_extract__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/extract/src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputWrapper=function InputWrapper(_ref){var children=_ref.children,unitLabel=_ref.unitLabel;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:unitLabel?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"group group-border group-focus",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"form-text",children:unitLabel})]}):children})},minMaxFormatFn=function minMaxFormatFn(value,unit){return unit?"".concat(value," ").concat(unit):value.toString()};function Slider(_ref2){var _ref2$name=_ref2.name,name=void 0===_ref2$name?"".concat((0,_sebgroup_extract__WEBPACK_IMPORTED_MODULE_1__.zE)(),"-slider"):_ref2$name,value=_ref2.value,defaultValue=_ref2.defaultValue,_ref2$min=_ref2.min,min=void 0===_ref2$min?0:_ref2$min,_ref2$max=_ref2.max,max=void 0===_ref2$max?100:_ref2$max,_ref2$minMaxFormat=_ref2.minMaxFormat,minMaxFormat=void 0===_ref2$minMaxFormat?minMaxFormatFn:_ref2$minMaxFormat,_ref2$showMinMax=_ref2.showMinMax,showMinMax=void 0!==_ref2$showMinMax&&_ref2$showMinMax,_ref2$step=_ref2.step,step=void 0===_ref2$step?1:_ref2$step,label=_ref2.label,instruction=_ref2.instruction,errorMessage=_ref2.errorMessage,_ref2$hasTextbox=_ref2.hasTextbox,hasTextbox=void 0!==_ref2$hasTextbox&&_ref2$hasTextbox,unitLabel=_ref2.unitLabel,_ref2$disabled=_ref2.disabled,disabled=void 0!==_ref2$disabled&&_ref2$disabled,onChange=_ref2.onChange,_ref2$enableClamping=_ref2.enableClamping,enableClamping=void 0===_ref2$enableClamping||_ref2$enableClamping,onClamp=_ref2.onClamp,enterKeyHint=_ref2.enterKeyHint,_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(),_React$useState2=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(_React$useState,2),background=_React$useState2[0],setBackground=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState(null!=value?value:defaultValue),_React$useState4=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(_React$useState3,2),sliderValue=_React$useState4[0],setSliderValue=_React$useState4[1],_React$useState5=react__WEBPACK_IMPORTED_MODULE_0__.useState(sliderValue+""),_React$useState6=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(_React$useState5,2),inputFieldValue=_React$useState6[0],setInputFieldValue=_React$useState6[1];react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((function(){if(disabled)setBackground(_sebgroup_extract__WEBPACK_IMPORTED_MODULE_1__.SE.disabled);else{var percent=0;void 0!==sliderValue&&(percent=(sliderValue-min)/(max-min)*100),setBackground((0,_sebgroup_extract__WEBPACK_IMPORTED_MODULE_1__.jz)(percent))}}),[disabled,sliderValue]);var clamp=function clamp(unclamped){if(!enableClamping)return Number(unclamped);if("string"==typeof unclamped&&(unclamped=Number(unclamped)),!unclamped||Number.isNaN(unclamped))return min;var clamped=Math.min(Math.max(min,unclamped),max);return clamped!==unclamped&&onClamp&&onClamp(unclamped),clamped},setNumValue=function setNumValue(value){""===value&&(value=min);var unclamped=Number(value),clamped=clamp(unclamped);return setSliderValue(clamped),[unclamped,clamped]};react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){setNumValue(value)}),[value]);var handleChange=function handleChange(value){var _setNumValue=setNumValue(value),_setNumValue2=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(_setNumValue,2),unclamped=_setNumValue2[0],clamped=_setNumValue2[1];setInputFieldValue(unclamped+""),onChange&&onChange(clamped)},handleInputFieldChange=function handleInputFieldChange(value){var shouldClamp=arguments.length>1&&void 0!==arguments[1]&&arguments[1];handleChange(value),""===value?setInputFieldValue(""):shouldClamp&&setInputFieldValue(clamp(value)+"")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"gds-slider-label-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{htmlFor:name,id:"".concat(name,"-label"),children:label}),instruction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:instruction})]})}),hasTextbox&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InputWrapper,{unitLabel,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",value:inputFieldValue,id:"".concat(name,"-textbox"),name,"aria-labelledby":"".concat(name,"-label"),enterKeyHint,className:errorMessage?"is-invalid":"",disabled,onChange:function onChange(e){return handleInputFieldChange(e.currentTarget.value)},onKeyDown:function onKeyDown(e){return"Enter"===e.key&&handleInputFieldChange(e.currentTarget.value,!0)},onBlur:function onBlur(e){return handleInputFieldChange(e.currentTarget.value,!0)},min,max,onInvalid:function onInvalid(e){e.preventDefault()}})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"range",value:sliderValue||0,id:name,name,min,max,step,disabled,onChange:function onChange(e){return handleChange(e.currentTarget.value)},style:{background}}),showMinMax&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"gds-slider-min-max",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:minMaxFormat(min,unitLabel)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:minMaxFormat(max,unitLabel)})]}),errorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"gds-slider-error-info",children:errorMessage})]})}Slider.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},showMinMax:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minMaxFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number, unit?: string) => string",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"string"},name:"unit"}],return:{name:"string"}}},description:"",defaultValue:{value:"(value: number, unit?: string) => {\n  if (unit) return `${value} ${unit}`\n  return value.toString()\n}",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},instruction:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},hasTextbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},unitLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},enableClamping:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClamp:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},enterKeyHint:{required:!1,tsType:{name:"union",raw:"| 'enter'\n| 'done'\n| 'go'\n| 'next'\n| 'previous'\n| 'search'\n| 'send'",elements:[{name:"literal",value:"'enter'"},{name:"literal",value:"'done'"},{name:"literal",value:"'go'"},{name:"literal",value:"'next'"},{name:"literal",value:"'previous'"},{name:"literal",value:"'search'"},{name:"literal",value:"'send'"}]},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"@deprecated Use `value` instead"}}}},"./libs/react/src/lib/slider/slider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_slider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/slider/slider.tsx"),_slider_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/react/src/lib/slider/slider.stories.tsx");const Template=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_slider__WEBPACK_IMPORTED_MODULE_2__.A,{...props});function _createMdxContent(props){const _components={h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"slider",children:"Slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A slider to experiment and adjust values with."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The component allows for easy adjustments of a value and check the updated result immediately."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'On pages where the user can experiment or adjust values in a scale, such as "How much can I borrow?".'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"slider-options",children:"Slider Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oz,{children:"\n  | Prop          | Type                                       | Description                                                                                                                        |\n  | :------------ | :----------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |\n  | name?         | `string`                                   | Name of the input element                                                                                                          |\n  | value?        | `number`                                   | Value of the input element                                                                                                         |\n  | min           | `number`                                   | The greatest value in the range of permitted values. Default is 0                                                                  |\n  | max           | `number`                                   | The lowest value in the range of permitted values. Default is 100                                                                  |\n  | showMinMax?   | `boolean`                                  | Whether or not to show min and max values. Default is false                                                                        |\n  | minMaxFormat? | `(value: string, unit?: string) => string` | Formatting function for min and max labels.                                                                                        |\n  | step          | `number`                                   | The number that specifies the granularity that the value must adhere to. Default is 1                                              |\n  | label?        | `string`                                   | Label for the input element                                                                                                        |\n  | instruction?  | `string`                                   | Input element instruction                                                                                                          |\n  | disabled      | `boolean`                                  | Whether or not the input is disabled. Default is false                                                                             |\n  | hasTextbox    | `boolean`                                  | Whether or not should have input textbox along with the slider. Default is false                                                   |\n  | unitLabel     | `string`                                   | Set this to a string, for example `kr`, to show a unit label next to the input field                                               |\n  | errorMessage? | `string`                                   | Error message for invalid inputs                                                                                                   |\n  | onChange?     | `(value: number) => void`                  | Callback function that is fired when the value changes. The new value is provided as a paramter to the callback function           |\n  | onClamp?      | `(unclamped: number) => void`              | Callback function that is fired when the value is clamped. The unclamped value is provided as a parameter to the callback function |\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-textbox",children:"With textbox"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.Textbox}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-textbox-with-unit-label-and-min-max-labels",children:"With textbox with unit label and min max labels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.UnitTextbox}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-error-message",children:"With error message"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.Error}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.Disabled})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./libs/react/src/lib/slider/slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Textbox:()=>Textbox,UnitTextbox:()=>UnitTextbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _slider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react/src/lib/slider/slider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Template=function Template(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_slider__WEBPACK_IMPORTED_MODULE_0__.A,Object.assign({},props))};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Slider",component:_slider__WEBPACK_IMPORTED_MODULE_0__.A,argTypes:{name:{name:"name",control:{type:"text"}},value:{name:"value",defaultValue:50,control:{type:"number"}},min:{name:"min",defaultValue:0,control:{type:"number"}},max:{name:"max",defaultValue:100,control:{type:"number"}},showMinMax:{name:"showMinMax",defaultValue:!1,control:{type:"boolean"}},step:{name:"step",defaultValue:1,control:{type:"number"}},label:{name:"label",defaultValue:"Slider label text in one line",control:{type:"text"}},instruction:{name:"instruction",defaultValue:"Element instruction",control:{type:"text"}},hasTextbox:{name:"hasTextbox",control:{type:"boolean"}},unitLabel:{name:"Unit label",control:{type:"text"}},errorMessage:{name:"errorMessage",control:{type:"text"}},disabled:{name:"disabled",control:{type:"boolean"}}}};var Default={render:Template.bind({}),name:"Default"},Textbox={render:Template.bind({}),name:"Textbox",args:{hasTextbox:!0}},UnitTextbox={render:Template.bind({}),name:"UnitTextbox",args:{hasTextbox:!0,unitLabel:"kr",showMinMax:!0}},Error={render:Template.bind({}),name:"Error",args:{hasTextbox:!0,errorMessage:"Error text can be quite long"}},Disabled={render:Template.bind({}),name:"Disabled",args:{hasTextbox:!0,disabled:!0}};const __namedExportsOrder=["Default","Textbox","UnitTextbox","Error","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Default'\n}",...Default.parameters?.docs?.source}}},Textbox.parameters={...Textbox.parameters,docs:{...Textbox.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Textbox',\n  args: {\n    hasTextbox: true\n  }\n}",...Textbox.parameters?.docs?.source}}},UnitTextbox.parameters={...UnitTextbox.parameters,docs:{...UnitTextbox.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'UnitTextbox',\n  args: {\n    hasTextbox: true,\n    unitLabel: 'kr',\n    showMinMax: true\n  }\n}",...UnitTextbox.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Error',\n  args: {\n    hasTextbox: true,\n    errorMessage: 'Error text can be quite long'\n  }\n}",...Error.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Disabled',\n  args: {\n    hasTextbox: true,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);