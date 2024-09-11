/*! For license information please see src-lib-modal-modal-stories.be06c5e6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[893],{"./libs/react/src/lib/modal/modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ModalDefault:()=>ModalDefault,SlideOutLarge:()=>SlideOutLarge,SlideOutMedium:()=>SlideOutMedium,SlideOutSmall:()=>SlideOutSmall,TakeOver:()=>TakeOver,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react/src/lib/modal/modal.tsx"),_storybook_client_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/client-api"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Template=function Template(props){var _useArgs=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)(),_useArgs2=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(_useArgs,2),isOpen=_useArgs2[0].isOpen,updateArgs=_useArgs2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{overflow:"auto",height:"100vh"},children:[!isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"button",onClick:function openModal(){updateArgs({isOpen:!0})},children:"open modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_modal__WEBPACK_IMPORTED_MODULE_0__.A,Object.assign({},props,{onClose:function handleClose(){updateArgs({isOpen:!1})},isOpen,onConfirm:function onConfirm(){console.log("ok clicked")}}))]})},ModalDefault=Template.bind({});ModalDefault.args={type:"default",header:"Default Modal",children:"Body content",confirm:"OK",dismiss:"Nope"};var SlideOutSmall=Template.bind({});SlideOutSmall.args={type:"slideout",header:"SlideOut Modal",children:"Body content",confirm:"OK",dismiss:"Nope",size:"sm"};var SlideOutMedium=Template.bind({});SlideOutMedium.args={type:"slideout",header:"SlideOut Modal",children:"Body content",confirm:"OK",dismiss:"Nope",size:"md"};var SlideOutLarge=Template.bind({});SlideOutLarge.args={type:"slideout",header:"SlideOut Modal",children:"Body content",confirm:"OK",dismiss:"Nope",size:"lg"};var TakeOver=Template.bind({});TakeOver.args={type:"takeover",header:"TakeOver Modal",children:"Body content",confirm:"OK",dismiss:"Nope"};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal",component:_modal__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{componentIds:["component-dialogue","component-slideout","component-foldout","component-takeover"]}};ModalDefault.parameters={...ModalDefault.parameters,docs:{...ModalDefault.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    isOpen\n  }, updateArgs] = useArgs();\n  const handleClose = () => {\n    updateArgs({\n      isOpen: false\n    });\n  };\n  const openModal = () => {\n    updateArgs({\n      isOpen: true\n    });\n  };\n  const onConfirm = () => {\n    console.log('ok clicked');\n  };\n  return <div style={{\n    overflow: 'auto',\n    height: '100vh'\n  }}>\n      {!isOpen && <button className=\"button\" onClick={openModal}>\n          open modal\n        </button>}\n      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />\n    </div>;\n}",...ModalDefault.parameters?.docs?.source}}},SlideOutSmall.parameters={...SlideOutSmall.parameters,docs:{...SlideOutSmall.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    isOpen\n  }, updateArgs] = useArgs();\n  const handleClose = () => {\n    updateArgs({\n      isOpen: false\n    });\n  };\n  const openModal = () => {\n    updateArgs({\n      isOpen: true\n    });\n  };\n  const onConfirm = () => {\n    console.log('ok clicked');\n  };\n  return <div style={{\n    overflow: 'auto',\n    height: '100vh'\n  }}>\n      {!isOpen && <button className=\"button\" onClick={openModal}>\n          open modal\n        </button>}\n      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />\n    </div>;\n}",...SlideOutSmall.parameters?.docs?.source}}},SlideOutMedium.parameters={...SlideOutMedium.parameters,docs:{...SlideOutMedium.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    isOpen\n  }, updateArgs] = useArgs();\n  const handleClose = () => {\n    updateArgs({\n      isOpen: false\n    });\n  };\n  const openModal = () => {\n    updateArgs({\n      isOpen: true\n    });\n  };\n  const onConfirm = () => {\n    console.log('ok clicked');\n  };\n  return <div style={{\n    overflow: 'auto',\n    height: '100vh'\n  }}>\n      {!isOpen && <button className=\"button\" onClick={openModal}>\n          open modal\n        </button>}\n      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />\n    </div>;\n}",...SlideOutMedium.parameters?.docs?.source}}},SlideOutLarge.parameters={...SlideOutLarge.parameters,docs:{...SlideOutLarge.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    isOpen\n  }, updateArgs] = useArgs();\n  const handleClose = () => {\n    updateArgs({\n      isOpen: false\n    });\n  };\n  const openModal = () => {\n    updateArgs({\n      isOpen: true\n    });\n  };\n  const onConfirm = () => {\n    console.log('ok clicked');\n  };\n  return <div style={{\n    overflow: 'auto',\n    height: '100vh'\n  }}>\n      {!isOpen && <button className=\"button\" onClick={openModal}>\n          open modal\n        </button>}\n      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />\n    </div>;\n}",...SlideOutLarge.parameters?.docs?.source}}},TakeOver.parameters={...TakeOver.parameters,docs:{...TakeOver.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    isOpen\n  }, updateArgs] = useArgs();\n  const handleClose = () => {\n    updateArgs({\n      isOpen: false\n    });\n  };\n  const openModal = () => {\n    updateArgs({\n      isOpen: true\n    });\n  };\n  const onConfirm = () => {\n    console.log('ok clicked');\n  };\n  return <div style={{\n    overflow: 'auto',\n    height: '100vh'\n  }}>\n      {!isOpen && <button className=\"button\" onClick={openModal}>\n          open modal\n        </button>}\n      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />\n    </div>;\n}",...TakeOver.parameters?.docs?.source}}};const __namedExportsOrder=["ModalDefault","SlideOutSmall","SlideOutMedium","SlideOutLarge","TakeOver"]},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sg:()=>debounce,cb:()=>delay,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors,ok:()=>validateClassName});var validateClassName=function validateClassName(value){switch(value){case"success":return"is-valid";case"error":return"is-invalid";default:return""}},debounce=function debounce(func,ms){var timeoutID;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timeoutID),timeoutID=window.setTimeout((function(){func.apply(undefined,args)}),ms)}},delay=function delay(ms){return new Promise((function(resolve){return setTimeout(resolve,ms)}))},randomId=function randomId(){return"gds-"+Math.random().toString(36).substring(2,9)},sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=function getSliderTrackBackground(val){return"linear-gradient(\n        to right,\n        ".concat(sliderColors.primary," 0%,\n        ").concat(sliderColors.primary," ").concat(val,"%,\n        ").concat(sliderColors.disabled," ").concat(val,"%,\n        ").concat(sliderColors.disabled," 100%\n      )")}},"./libs/react/src/lib/form/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","variant","active","type","size","testId"];function Button(_ref){var _otherProps$ariaLabe,className=_ref.className,variant=_ref.variant,_ref$active=_ref.active,active=void 0!==_ref$active&&_ref$active,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,size=_ref.size,testId=_ref.testId,otherProps=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),buttonClassName=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,variant,size,{active})||void 0;return"close"==variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",Object.assign({className:buttonClassName,"aria-label":null!=(_otherProps$ariaLabe=otherProps["aria-label"])?_otherProps$ariaLabe:"Close","data-testid":testId},otherProps,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i",{})})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",Object.assign({className:buttonClassName,type,"data-testid":testId},otherProps))}const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"Button styling. Available options: 'primary', 'secondary', 'ghost' and 'tertiary'.",name:"variant",required:!1,type:{name:"ButtonVariant"}},active:{defaultValue:{value:"false"},description:"Styling button as active or not",name:"active",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Button size. Available options: 'small' and 'large'.",name:"size",required:!1,type:{name:"ButtonSize"}},testId:{defaultValue:null,description:"Renders as a `data-testid` attribute on the `<button>` element, useful in testing scenarios.",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/form/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"libs/react/src/lib/form/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./libs/react/src/lib/modal/modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>modal_modal});var slicedToArray=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),src=__webpack_require__("./libs/extract/src/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),button_button=__webpack_require__("./libs/react/src/lib/form/button/button.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);var hasPassiveEvents=!1;if("undefined"!=typeof window){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function allowTouchMove(el){return locks.some((function(lock){return!(!lock.options.allowTouchMove||!lock.options.allowTouchMove(el))}))},preventDefault=function preventDefault(rawEvent){var e=rawEvent||window.event;return!!allowTouchMove(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},restoreOverflowSetting=function restoreOverflowSetting(){void 0!==previousBodyPaddingRight&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),void 0!==previousBodyOverflowSetting&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},disableBodyScroll=function disableBodyScroll(targetElement,options){if(targetElement){if(!locks.some((function(lock){return lock.targetElement===targetElement}))){var lock={targetElement,options:options||{}};locks=[].concat(function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}(locks),[lock]),isIosDevice?(targetElement.ontouchstart=function(event){1===event.targetTouches.length&&(initialClientY=event.targetTouches[0].clientY)},targetElement.ontouchmove=function(event){1===event.targetTouches.length&&function handleScroll(event,targetElement){var clientY=event.targetTouches[0].clientY-initialClientY;!allowTouchMove(event.target)&&(targetElement&&0===targetElement.scrollTop&&clientY>0||function isTargetElementTotallyScrolled(targetElement){return!!targetElement&&targetElement.scrollHeight-targetElement.scrollTop<=targetElement.clientHeight}(targetElement)&&clientY<0?preventDefault(event):event.stopPropagation())}(event,targetElement)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):function setOverflowHidden(options){if(void 0===previousBodyPaddingRight){var _reserveScrollBarGap=!!options&&!0===options.reserveScrollBarGap,scrollBarGap=window.innerWidth-document.documentElement.clientWidth;_reserveScrollBarGap&&scrollBarGap>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=scrollBarGap+"px")}void 0===previousBodyOverflowSetting&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")}(options)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["type","id","isOpen","size"],ModalHeader=function ModalHeader(_ref){var type=_ref.type,setStatus=_ref.setStatus,setShouldRender=_ref.setShouldRender,_ref$header=_ref.header,header=void 0===_ref$header?"":_ref$header,id=_ref.id,onClose=_ref.onClose;return(0,jsx_runtime.jsxs)("div",{className:"header",children:[(0,jsx_runtime.jsx)("h3",{id,children:header}),(0,jsx_runtime.jsxs)("button",{className:"close",onClick:function handleClose(event){"slideout"===type?(setStatus&&setStatus(IS_EXITING),setTimeout((function(){onClose&&onClose(event),setStatus&&setStatus(UNMOUNTED),setShouldRender&&setShouldRender(!1)}),DELAY)):(onClose&&onClose(event),setStatus&&setStatus(UNMOUNTED),setShouldRender&&setShouldRender(!1))},children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Close"}),(0,jsx_runtime.jsx)("i",{})]})]})},ModalBody=function ModalBody(_ref2){var children=_ref2.children,id=_ref2.id;return(0,jsx_runtime.jsx)("div",{className:"body",id,children})},ModalFooter=function ModalFooter(_ref3){var confirm=_ref3.confirm,dismiss=_ref3.dismiss,onClose=_ref3.onClose,onConfirm=_ref3.onConfirm,onDismiss=_ref3.onDismiss;_ref3.preventBackdropClose;return(0,jsx_runtime.jsxs)("div",{className:"footer",children:[dismiss&&(0,jsx_runtime.jsx)(button_button.A,{variant:"secondary",onClick:function handleDismiss(event){onDismiss&&onDismiss(event),onClose&&onClose(event)},children:dismiss}),confirm&&(0,jsx_runtime.jsx)(button_button.A,{variant:"primary",onClick:function handleConfirm(event){onConfirm&&onConfirm(event),onClose&&onClose(event)},children:confirm})]})},DELAY=500,UNMOUNTED="unmounted",IS_EXITING="is-exiting",Modal=function Modal(_ref4){var _ref4$type=_ref4.type,type=void 0===_ref4$type?"default":_ref4$type,_ref4$id=_ref4.id,id=void 0===_ref4$id?(0,src.zE)():_ref4$id,isOpen=_ref4.isOpen,_ref4$size=_ref4.size,size=void 0===_ref4$size?"sm":_ref4$size,props=(0,objectWithoutProperties.A)(_ref4,_excluded),_useState=(0,react.useState)(id),_useState2=(0,slicedToArray.A)(_useState,2),uuid=_useState2[0],_useState3=(_useState2[1],(0,react.useState)(UNMOUNTED)),_useState4=(0,slicedToArray.A)(_useState3,2),status=_useState4[0],setStatus=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.A)(_useState5,2),shouldRender=_useState6[0],setShouldRender=_useState6[1],modalRef=(0,react.useRef)(null);if((0,react.useEffect)((function(){return isOpen&&!shouldRender&&status===UNMOUNTED&&(setShouldRender(!0),setStatus("is-mounting")),isOpen&&shouldRender&&"is-mounting"===status&&(setStatus("is-entering"),setTimeout((function(){setStatus("entered")}),DELAY)),isOpen||"entered"!==status||(setStatus(IS_EXITING),setTimeout((function(){setStatus(UNMOUNTED),setShouldRender(!1)}),DELAY)),isOpen&&modalRef.current?disableBodyScroll(modalRef.current):modalRef.current&&function enableBodyScroll(targetElement){targetElement?(locks=locks.filter((function(lock){return lock.targetElement!==targetElement})),isIosDevice?(targetElement.ontouchstart=null,targetElement.ontouchmove=null,documentListenerAdded&&0===locks.length&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1)):locks.length||restoreOverflowSetting()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}(modalRef.current),function(){!function clearAllBodyScrollLocks(){isIosDevice?(locks.forEach((function(lock){lock.targetElement.ontouchstart=null,lock.targetElement.ontouchmove=null})),documentListenerAdded&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1),initialClientY=-1):restoreOverflowSetting(),locks=[]}()}}),[isOpen,shouldRender,status]),!isOpen)return null;var modalContent,bodyId="".concat(uuid,"_body"),headerId="".concat(uuid,"_header"),dialogProps={id:uuid,role:"dialog","aria-modal":!0,"aria-labelledby":headerId,"aria-describedby":bodyId};switch(type){case"slideout":var className=classnames_default()(status,{"gds-slide-out--960":"lg"===size,"gds-slide-out--768":"md"===size});modalContent=(0,jsx_runtime.jsxs)("aside",Object.assign({className},dialogProps,{ref:modalRef,children:[(0,jsx_runtime.jsx)(ModalHeader,Object.assign({id:headerId,setStatus,setShouldRender,type},props)),(0,jsx_runtime.jsx)(ModalBody,Object.assign({id:bodyId},props)),(0,jsx_runtime.jsx)(ModalFooter,Object.assign({},props))]}));break;case"takeover":modalContent=(0,jsx_runtime.jsxs)("main",Object.assign({},dialogProps,{ref:modalRef,children:[(0,jsx_runtime.jsx)(ModalHeader,Object.assign({id:headerId},props)),(0,jsx_runtime.jsx)(ModalBody,Object.assign({id:bodyId},props)),(0,jsx_runtime.jsx)(ModalFooter,Object.assign({},props))]}));break;default:modalContent=(0,jsx_runtime.jsx)("div",{className:"gds-dialog-wrapper",ref:modalRef,children:(0,jsx_runtime.jsxs)("section",Object.assign({},dialogProps,{children:[(0,jsx_runtime.jsx)(ModalHeader,Object.assign({id:headerId},props)),(0,jsx_runtime.jsx)(ModalBody,Object.assign({id:bodyId},props)),(0,jsx_runtime.jsx)(ModalFooter,Object.assign({},props))]}))})}var backdropClassnames=classnames_default()("backdrop",{"backdrop--transparent":"slideout"===type},status);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[modalContent,(0,jsx_runtime.jsx)("div",{"data-testid":"modal-backdrop",className:backdropClassnames,onClick:function onClick(e){return function handleBackdropClick(event){props.onClose&&!props.preventBackdropClose&&("slideout"===type?(setStatus&&setStatus(IS_EXITING),setTimeout((function(){props.onClose&&props.onClose(event),setStatus&&setStatus(UNMOUNTED),setShouldRender&&setShouldRender(!1)}),DELAY)):(props.onClose&&props.onClose(event),setStatus&&setStatus(UNMOUNTED),setShouldRender&&setShouldRender(!1)))}(e)},"aria-hidden":"true"})]})};const modal_modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"ModalType"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},confirm:{defaultValue:null,description:"",name:"confirm",required:!1,type:{name:"string"}},dismiss:{defaultValue:null,description:"",name:"dismiss",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"Size"}},id:{defaultValue:{value:"randomId()"},description:"",name:"id",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"ModalEventListener"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!1,type:{name:"ModalEventListener"}},onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!1,type:{name:"ModalEventListener"}},preventBackdropClose:{defaultValue:{value:"false"},description:"",name:"preventBackdropClose",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/modal/modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"libs/react/src/lib/modal/modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{modal.displayName="modal",modal.__docgenInfo={description:"",displayName:"modal",props:{type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"ModalType"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},confirm:{defaultValue:null,description:"",name:"confirm",required:!1,type:{name:"string"}},dismiss:{defaultValue:null,description:"",name:"dismiss",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"Size"}},id:{defaultValue:{value:"randomId()"},description:"",name:"id",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"ModalEventListener"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!1,type:{name:"ModalEventListener"}},onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!1,type:{name:"ModalEventListener"}},preventBackdropClose:{defaultValue:{value:"false"},description:"",name:"preventBackdropClose",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/modal/modal.tsx#modal"]={docgenInfo:modal.__docgenInfo,name:"modal",path:"libs/react/src/lib/modal/modal.tsx#modal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayWithHoles})},"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}__webpack_require__.d(__webpack_exports__,{A:()=>_nonIterableRest})},"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var arrayWithHoles=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");function _slicedToArray(arr,i){return(0,arrayWithHoles.A)(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||(0,nonIterableRest.A)()}},"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);