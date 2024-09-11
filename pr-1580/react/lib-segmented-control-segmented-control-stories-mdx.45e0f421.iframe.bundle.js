(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7310],{"./libs/react/src/lib/segmented-control/segmented-control.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,segmentedControl:()=>segmentedControl});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_segmented_control__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/segmented-control/segmented-control.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Iz,{...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"1",children:"1 month"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"2",children:"This year"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"3",children:"1 year"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"4",children:"3 years"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"5",disabled:!0,children:"5 years"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"6",children:"10 years"})]});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"segmented-control",children:"Segmented Control"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"A segmented control is a group of 2-5 buttons that lets the user switch views or sort elements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/SegmentedControl",component:_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Iz,argTypes:{}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"SegmentedControl",args:{onChange:console.log},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["There is a small and a medium version which can be configured using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"size"})," prop."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<SegmentedControl size="small"><Segment value="1">{"1 month"}</Segment><Segment value="2">{"This year"}</Segment><Segment value="3">{"1 year"}</Segment></SegmentedControl>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Iz,{size:"small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"1",children:"1 month"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"2",children:"This year"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"3",children:"1 year"})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"segment-size",children:"Segment Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The size of the segments can be configured using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"segMinWidth"})," prop. This influences how many segments will be visible at the same time.\nIf you have long segment labels and want to avoid concatenation, you can increase the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"segMinWidth"})," prop.\nBut keep in mind that the best practice is to keep the segment labels short."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<SegmentedControl segMinWidth={200}><Segment value="1">{"1 month"}</Segment><Segment value="2">{"This year"}</Segment><Segment value="3">{"1 year"}</Segment><Segment value="4">{"3 years"}</Segment><Segment value="5">{"5 years"}</Segment><Segment value="6">{"10 years"}</Segment></SegmentedControl>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Iz,{segMinWidth:200,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"1",children:"1 month"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"2",children:"This year"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"3",children:"1 year"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"4",children:"3 years"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"5",children:"5 years"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Y4,{value:"6",children:"10 years"})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Available ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"SegmentedControl"})," component props"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oz,{children:"\n| Props        | Type                                                                    | Description                    |\n| :----------- | :---------------------------------------------------------------------- | :----------------------------- |\n|  value       | ` string `                                                            | The value of the currently selected segment. Setting this property will select the segment with the matching value.  |\n|  segMinWidth | ` number `                                                            | Minimum width of each segment. Used for calculating the number of visible segments that can fit based on the available space. |\n|  size        | ` small | medium `                                                    | Size of the segmented control |\n|  onChange    | ` (event: Event) => void `                                            | Fires when the selected segment is changed, use ` event.target.value ` to retrive the value         |\n|  className   | ` string `                                                            | Component className         |\n|  children    | ` ReactNode | ReactNode[] `                                           | Pass down Segment component as child |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Available ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Segment"})," component props"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oz,{children:"\n| Props        | Type                                                                    | Description                    |\n| :----------- | :---------------------------------------------------------------------- | :----------------------------- |\n|  value       | ` string `                                                            | The value of the segment. |\n|  className   | ` string `                                                            | Component className         |\n|  disabled    | ` boolean `                                                           | To disabled segment button |\n|  children    | ` ReactNode | ReactNode[] `                                           | Pass down labels or Reactnode as child |\n"})]})}const segmentedControl=Template.bind({});segmentedControl.storyName="SegmentedControl",segmentedControl.args={onChange:console.log},segmentedControl.parameters={storySource:{source:'props => <SegmentedControl {...props}>\n    <Segment value="1">1 month</Segment>\n    <Segment value="2">This year</Segment>\n    <Segment value="3">1 year</Segment>\n    <Segment value="4">3 years</Segment>\n    <Segment value="5" disabled>\n      5 years\n    </Segment>\n    <Segment value="6">10 years</Segment>\n  </SegmentedControl>'}};const componentMeta={title:"Components/SegmentedControl",component:_segmented_control__WEBPACK_IMPORTED_MODULE_2__.Iz,argTypes:{},tags:["stories-mdx"],includeStories:["segmentedControl"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","segmentedControl"]},"./dist/libs/core/src/chunks/chunk.PZ3JKDIQ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>IconChevronLeft});var _home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/inherits.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_chunk_IGJXZGV4_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.IGJXZGV4.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(this,result)}}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconChevronLeft=function(_GdsIcon){(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(IconChevronLeft,_GdsIcon);var _super=_createSuper(IconChevronLeft);function IconChevronLeft(){return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__.A)(this,IconChevronLeft),_super.apply(this,arguments)}return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__.A)(IconChevronLeft)}(_chunk_IGJXZGV4_js__WEBPACK_IMPORTED_MODULE_2__.M);IconChevronLeft._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronLeft._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',IconChevronLeft._name="chevron-left",IconChevronLeft=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-icon-chevron-left")],IconChevronLeft)},"./dist/libs/core/src/chunks/chunk.Q6BGQYZP.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>IconChevronRight});var _home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/inherits.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_chunk_IGJXZGV4_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.IGJXZGV4.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(this,result)}}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconChevronRight=function(_GdsIcon){(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(IconChevronRight,_GdsIcon);var _super=_createSuper(IconChevronRight);function IconChevronRight(){return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__.A)(this,IconChevronRight),_super.apply(this,arguments)}return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__.A)(IconChevronRight)}(_chunk_IGJXZGV4_js__WEBPACK_IMPORTED_MODULE_2__.M);IconChevronRight._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronRight._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',IconChevronRight._name="chevron-right",IconChevronRight=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-icon-chevron-right")],IconChevronRight)},"./dist/libs/core/src/transitional-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>_chunks_chunk_S7DYDS4E_js__WEBPACK_IMPORTED_MODULE_0__.YT});var _chunks_chunk_S7DYDS4E_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.S7DYDS4E.js");__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);