/*! For license information please see src-lib-modal-modal-stories.67624927.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[893],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayWithHoles(r){if(Array.isArray(r))return r}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayWithHoles})},"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}__webpack_require__.d(__webpack_exports__,{A:()=>_nonIterableRest})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");function _slicedToArray(r,e){return(0,arrayWithHoles.A)(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||(0,unsupportedIterableToArray.A)(r,e)||(0,nonIterableRest.A)()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a):void 0}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sg:()=>debounce,cb:()=>delay,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors,ok:()=>validateClassName});var validateClassName=function validateClassName(value){switch(value){case"success":return"is-valid";case"error":return"is-invalid";default:return""}},debounce=function debounce(func,ms){var timeoutID;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timeoutID),timeoutID=window.setTimeout((function(){func.apply(undefined,args)}),ms)}},delay=function delay(ms){return new Promise((function(resolve){return setTimeout(resolve,ms)}))},randomId=function randomId(){return"gds-"+Math.random().toString(36).substring(2,9)},sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=function getSliderTrackBackground(val){return"linear-gradient(\n        to right,\n        ".concat(sliderColors.primary," 0%,\n        ").concat(sliderColors.primary," ").concat(val,"%,\n        ").concat(sliderColors.disabled," ").concat(val,"%,\n        ").concat(sliderColors.disabled," 100%\n      )")}},"./libs/react/src/lib/form/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","variant","active","type","size","testId"],Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var _props$ariaLabel,className=_ref.className,variant=_ref.variant,_ref$active=_ref.active,active=void 0!==_ref$active&&_ref$active,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,size=_ref.size,testId=_ref.testId,props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded),buttonClassName=classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,variant,size,{active})||void 0;return"close"==variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",Object.assign({className:buttonClassName,"aria-label":null!=(_props$ariaLabel=props["aria-label"])?_props$ariaLabel:"Close","data-testid":testId,ref},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{})})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",Object.assign({className:buttonClassName,type,"data-testid":testId,ref},props))}));const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"ButtonVariant"},description:"Button styling. Available options: 'primary', 'secondary', 'ghost' and 'tertiary'."},active:{required:!1,tsType:{name:"boolean"},description:"Styling button as active or not",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"ButtonSize"},description:"Button size. Available options: 'small' and 'large'."},testId:{required:!1,tsType:{name:"string"},description:"Renders as a `data-testid` attribute on the `<button>` element, useful in testing scenarios."},type:{defaultValue:{value:"'button'",computed:!1},required:!1}},composes:["DetailedHTMLProps"]}},"./libs/react/src/lib/modal/modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>modal});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),src=__webpack_require__("./libs/extract/src/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),button_button=__webpack_require__("./libs/react/src/lib/form/button/button.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);var hasPassiveEvents=!1;if("undefined"!=typeof window){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function allowTouchMove(el){return locks.some((function(lock){return!(!lock.options.allowTouchMove||!lock.options.allowTouchMove(el))}))},preventDefault=function preventDefault(rawEvent){var e=rawEvent||window.event;return!!allowTouchMove(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},restoreOverflowSetting=function restoreOverflowSetting(){void 0!==previousBodyPaddingRight&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),void 0!==previousBodyOverflowSetting&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},disableBodyScroll=function disableBodyScroll(targetElement,options){if(targetElement){if(!locks.some((function(lock){return lock.targetElement===targetElement}))){var lock={targetElement,options:options||{}};locks=[].concat(function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}(locks),[lock]),isIosDevice?(targetElement.ontouchstart=function(event){1===event.targetTouches.length&&(initialClientY=event.targetTouches[0].clientY)},targetElement.ontouchmove=function(event){1===event.targetTouches.length&&function handleScroll(event,targetElement){var clientY=event.targetTouches[0].clientY-initialClientY;!allowTouchMove(event.target)&&(targetElement&&0===targetElement.scrollTop&&clientY>0||function isTargetElementTotallyScrolled(targetElement){return!!targetElement&&targetElement.scrollHeight-targetElement.scrollTop<=targetElement.clientHeight}(targetElement)&&clientY<0?preventDefault(event):event.stopPropagation())}(event,targetElement)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):function setOverflowHidden(options){if(void 0===previousBodyPaddingRight){var _reserveScrollBarGap=!!options&&!0===options.reserveScrollBarGap,scrollBarGap=window.innerWidth-document.documentElement.clientWidth;_reserveScrollBarGap&&scrollBarGap>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=scrollBarGap+"px")}void 0===previousBodyOverflowSetting&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")}(options)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["type","id","isOpen","size"],ModalHeader=function ModalHeader(_ref){var type=_ref.type,setStatus=_ref.setStatus,setShouldRender=_ref.setShouldRender,_ref$header=_ref.header,header=void 0===_ref$header?"":_ref$header,id=_ref.id,onClose=_ref.onClose;return(0,jsx_runtime.jsxs)("div",{className:"header",children:[(0,jsx_runtime.jsx)("h3",{id,children:header}),(0,jsx_runtime.jsxs)("button",{className:"close",onClick:function handleClose(event){"slideout"===type?(setStatus&&setStatus(IS_EXITING),setTimeout((function(){onClose&&onClose(event),setStatus&&setStatus(UNMOUNTED),setShouldRender&&setShouldRender(!1)}),DELAY)):(onClose&&onClose(event),setStatus&&setStatus(UNMOUNTED),setShouldRender&&setShouldRender(!1))},children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Close"}),(0,jsx_runtime.jsx)("i",{})]})]})},ModalBody=function ModalBody(_ref2){var children=_ref2.children,id=_ref2.id;return(0,jsx_runtime.jsx)("div",{className:"body",id,children})},ModalFooter=function ModalFooter(_ref3){var confirm=_ref3.confirm,dismiss=_ref3.dismiss,onClose=_ref3.onClose,onConfirm=_ref3.onConfirm,onDismiss=_ref3.onDismiss;_ref3.preventBackdropClose;return(0,jsx_runtime.jsxs)("div",{className:"footer",children:[dismiss&&(0,jsx_runtime.jsx)(button_button.A,{variant:"secondary",onClick:function handleDismiss(event){onDismiss&&onDismiss(event),onClose&&onClose(event)},children:dismiss}),confirm&&(0,jsx_runtime.jsx)(button_button.A,{variant:"primary",onClick:function handleConfirm(event){onConfirm&&onConfirm(event),onClose&&onClose(event)},children:confirm})]})},DELAY=500,UNMOUNTED="unmounted",IS_EXITING="is-exiting",Modal=function Modal(_ref4){var _ref4$type=_ref4.type,type=void 0===_ref4$type?"default":_ref4$type,_ref4$id=_ref4.id,id=void 0===_ref4$id?(0,src.zE)():_ref4$id,isOpen=_ref4.isOpen,_ref4$size=_ref4.size,size=void 0===_ref4$size?"sm":_ref4$size,props=(0,objectWithoutProperties.A)(_ref4,_excluded),_useState=(0,react.useState)(id),_useState2=(0,slicedToArray.A)(_useState,2),uuid=_useState2[0],_useState3=(_useState2[1],(0,react.useState)(UNMOUNTED)),_useState4=(0,slicedToArray.A)(_useState3,2),status=_useState4[0],setStatus=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.A)(_useState5,2),shouldRender=_useState6[0],setShouldRender=_useState6[1],modalRef=(0,react.useRef)(null);if((0,react.useEffect)((function(){return isOpen&&!shouldRender&&status===UNMOUNTED&&(setShouldRender(!0),setStatus("is-mounting")),isOpen&&shouldRender&&"is-mounting"===status&&(setStatus("is-entering"),setTimeout((function(){setStatus("entered")}),DELAY)),isOpen||"entered"!==status||(setStatus(IS_EXITING),setTimeout((function(){setStatus(UNMOUNTED),setShouldRender(!1)}),DELAY)),isOpen&&modalRef.current?disableBodyScroll(modalRef.current):modalRef.current&&function enableBodyScroll(targetElement){targetElement?(locks=locks.filter((function(lock){return lock.targetElement!==targetElement})),isIosDevice?(targetElement.ontouchstart=null,targetElement.ontouchmove=null,documentListenerAdded&&0===locks.length&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1)):locks.length||restoreOverflowSetting()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}(modalRef.current),function(){!function clearAllBodyScrollLocks(){isIosDevice?(locks.forEach((function(lock){lock.targetElement.ontouchstart=null,lock.targetElement.ontouchmove=null})),documentListenerAdded&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1),initialClientY=-1):restoreOverflowSetting(),locks=[]}()}}),[isOpen,shouldRender,status]),!isOpen)return null;var modalContent,bodyId="".concat(uuid,"_body"),headerId="".concat(uuid,"_header"),dialogProps={id:uuid,role:"dialog","aria-modal":!0,"aria-labelledby":headerId,"aria-describedby":bodyId};switch(type){case"slideout":var className=classnames_default()(status,{"gds-slide-out--960":"lg"===size,"gds-slide-out--768":"md"===size});modalContent=(0,jsx_runtime.jsxs)("aside",Object.assign({className},dialogProps,{ref:modalRef,children:[(0,jsx_runtime.jsx)(ModalHeader,Object.assign({id:headerId,setStatus,setShouldRender,type},props)),(0,jsx_runtime.jsx)(ModalBody,Object.assign({id:bodyId},props)),(0,jsx_runtime.jsx)(ModalFooter,Object.assign({},props))]}));break;case"takeover":modalContent=(0,jsx_runtime.jsxs)("main",Object.assign({},dialogProps,{ref:modalRef,children:[(0,jsx_runtime.jsx)(ModalHeader,Object.assign({id:headerId},props)),(0,jsx_runtime.jsx)(ModalBody,Object.assign({id:bodyId},props)),(0,jsx_runtime.jsx)(ModalFooter,Object.assign({},props))]}));break;default:modalContent=(0,jsx_runtime.jsx)("div",{className:"gds-dialog-wrapper",ref:modalRef,children:(0,jsx_runtime.jsxs)("section",Object.assign({},dialogProps,{children:[(0,jsx_runtime.jsx)(ModalHeader,Object.assign({id:headerId},props)),(0,jsx_runtime.jsx)(ModalBody,Object.assign({id:bodyId},props)),(0,jsx_runtime.jsx)(ModalFooter,Object.assign({},props))]}))})}var backdropClassnames=classnames_default()("backdrop",{"backdrop--transparent":"slideout"===type},status);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[modalContent,(0,jsx_runtime.jsx)("div",{"data-testid":"modal-backdrop",className:backdropClassnames,onClick:function onClick(e){return function handleBackdropClick(event){props.onClose&&!props.preventBackdropClose&&("slideout"===type?(setStatus&&setStatus(IS_EXITING),setTimeout((function(){props.onClose&&props.onClose(event),setStatus&&setStatus(UNMOUNTED),setShouldRender&&setShouldRender(!1)}),DELAY)):(props.onClose&&props.onClose(event),setStatus&&setStatus(UNMOUNTED),setShouldRender&&setShouldRender(!1)))}(e)},"aria-hidden":"true"})]})};const modal=Modal;Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{type:{required:!1,tsType:{name:"ModalType"},description:"",defaultValue:{value:"'default'",computed:!1}},header:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},confirm:{required:!1,tsType:{name:"string"},description:""},dismiss:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"Size"},description:"",defaultValue:{value:"'sm'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"randomId()",computed:!0}},isOpen:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  event: MouseEvent<HTMLButtonElement | HTMLDivElement> | null,\n) => unknown",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement | HTMLDivElement> | null",elements:[{name:"MouseEvent",elements:[{name:"union",raw:"HTMLButtonElement | HTMLDivElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLDivElement"}]}],raw:"MouseEvent<HTMLButtonElement | HTMLDivElement>"},{name:"null"}]},name:"event"}],return:{name:"unknown"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  event: MouseEvent<HTMLButtonElement | HTMLDivElement> | null,\n) => unknown",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement | HTMLDivElement> | null",elements:[{name:"MouseEvent",elements:[{name:"union",raw:"HTMLButtonElement | HTMLDivElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLDivElement"}]}],raw:"MouseEvent<HTMLButtonElement | HTMLDivElement>"},{name:"null"}]},name:"event"}],return:{name:"unknown"}}},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  event: MouseEvent<HTMLButtonElement | HTMLDivElement> | null,\n) => unknown",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement | HTMLDivElement> | null",elements:[{name:"MouseEvent",elements:[{name:"union",raw:"HTMLButtonElement | HTMLDivElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLDivElement"}]}],raw:"MouseEvent<HTMLButtonElement | HTMLDivElement>"},{name:"null"}]},name:"event"}],return:{name:"unknown"}}},description:""},preventBackdropClose:{required:!1,tsType:{name:"boolean"},description:""}}}},"./libs/react/src/lib/modal/modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ModalDefault:()=>ModalDefault,SlideOutLarge:()=>SlideOutLarge,SlideOutMedium:()=>SlideOutMedium,SlideOutSmall:()=>SlideOutSmall,TakeOver:()=>TakeOver,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_modal__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./libs/react/src/lib/modal/modal.tsx")),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("storybook/internal/preview-api"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Template=function Template(props){var _useArgs=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)(),_useArgs2=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(_useArgs,2),isOpen=_useArgs2[0].isOpen,updateArgs=_useArgs2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[!isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:"button",onClick:function openModal(){updateArgs({isOpen:!0})},children:"open modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_modal__WEBPACK_IMPORTED_MODULE_1__.A,Object.assign({},props,{onClose:function handleClose(){updateArgs({isOpen:!1})},isOpen,onConfirm:function onConfirm(){console.log("ok clicked")}}))]})},ModalDefault=Template.bind({});ModalDefault.args={type:"default",header:"Default Modal",children:"Body content",confirm:"OK",dismiss:"Nope"};var SlideOutSmall=Template.bind({});SlideOutSmall.args={type:"slideout",header:"SlideOut Modal",children:"Body content",confirm:"OK",dismiss:"Nope",size:"sm"};var SlideOutMedium=Template.bind({});SlideOutMedium.args={type:"slideout",header:"SlideOut Modal",children:"Body content",confirm:"OK",dismiss:"Nope",size:"md"};var SlideOutLarge=Template.bind({});SlideOutLarge.args={type:"slideout",header:"SlideOut Modal",children:"Body content",confirm:"OK",dismiss:"Nope",size:"lg"};var TakeOver=Template.bind({});TakeOver.args={type:"takeover",header:"TakeOver Modal",children:"Body content",confirm:"OK",dismiss:"Nope"};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal",component:_modal__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{componentIds:["component-dialogue","component-slideout","component-foldout","component-takeover"]}},__namedExportsOrder=["ModalDefault","SlideOutSmall","SlideOutMedium","SlideOutLarge","TakeOver"];ModalDefault.parameters={...ModalDefault.parameters,docs:{...ModalDefault.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    isOpen\n  }, updateArgs] = useArgs();\n  const handleClose = () => {\n    updateArgs({\n      isOpen: false\n    });\n  };\n  const openModal = () => {\n    updateArgs({\n      isOpen: true\n    });\n  };\n  const onConfirm = () => {\n    console.log('ok clicked');\n  };\n  return <div>\n      {!isOpen && <button className=\"button\" onClick={openModal}>\n          open modal\n        </button>}\n      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />\n    </div>;\n}",...ModalDefault.parameters?.docs?.source}}},SlideOutSmall.parameters={...SlideOutSmall.parameters,docs:{...SlideOutSmall.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    isOpen\n  }, updateArgs] = useArgs();\n  const handleClose = () => {\n    updateArgs({\n      isOpen: false\n    });\n  };\n  const openModal = () => {\n    updateArgs({\n      isOpen: true\n    });\n  };\n  const onConfirm = () => {\n    console.log('ok clicked');\n  };\n  return <div>\n      {!isOpen && <button className=\"button\" onClick={openModal}>\n          open modal\n        </button>}\n      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />\n    </div>;\n}",...SlideOutSmall.parameters?.docs?.source}}},SlideOutMedium.parameters={...SlideOutMedium.parameters,docs:{...SlideOutMedium.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    isOpen\n  }, updateArgs] = useArgs();\n  const handleClose = () => {\n    updateArgs({\n      isOpen: false\n    });\n  };\n  const openModal = () => {\n    updateArgs({\n      isOpen: true\n    });\n  };\n  const onConfirm = () => {\n    console.log('ok clicked');\n  };\n  return <div>\n      {!isOpen && <button className=\"button\" onClick={openModal}>\n          open modal\n        </button>}\n      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />\n    </div>;\n}",...SlideOutMedium.parameters?.docs?.source}}},SlideOutLarge.parameters={...SlideOutLarge.parameters,docs:{...SlideOutLarge.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    isOpen\n  }, updateArgs] = useArgs();\n  const handleClose = () => {\n    updateArgs({\n      isOpen: false\n    });\n  };\n  const openModal = () => {\n    updateArgs({\n      isOpen: true\n    });\n  };\n  const onConfirm = () => {\n    console.log('ok clicked');\n  };\n  return <div>\n      {!isOpen && <button className=\"button\" onClick={openModal}>\n          open modal\n        </button>}\n      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />\n    </div>;\n}",...SlideOutLarge.parameters?.docs?.source}}},TakeOver.parameters={...TakeOver.parameters,docs:{...TakeOver.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    isOpen\n  }, updateArgs] = useArgs();\n  const handleClose = () => {\n    updateArgs({\n      isOpen: false\n    });\n  };\n  const openModal = () => {\n    updateArgs({\n      isOpen: true\n    });\n  };\n  const onConfirm = () => {\n    console.log('ok clicked');\n  };\n  return <div>\n      {!isOpen && <button className=\"button\" onClick={openModal}>\n          open modal\n        </button>}\n      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />\n    </div>;\n}",...TakeOver.parameters?.docs?.source}}}}}]);