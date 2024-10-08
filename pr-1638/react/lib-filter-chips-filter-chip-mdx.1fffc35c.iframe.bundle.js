(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[5685],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./dist/libs/core/src/chunks/chunk.C3ECHGX7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{JD:()=>dateConverter,_h:()=>dateArrayConverter,xj:()=>stringArrayConverter});var dateConverter={fromAttribute:function fromAttribute(value){return new Date(value)},toAttribute:function toAttribute(value){return value.toISOString()}},dateArrayConverter={fromAttribute:function fromAttribute(value){return value.split(",").map((function(d){return new Date(d.trim())}))},toAttribute:function toAttribute(value){return JSON.stringify(value.map((function(d){return d.toISOString()})))}},stringArrayConverter={fromAttribute:function fromAttribute(value){return value.split(",")},toAttribute:function toAttribute(value){return Array.isArray(value)?value.join(","):value}}},"./dist/libs/core/src/chunks/chunk.VHN4JEZC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function resizeObserver(){return function(proto,propertyKey,descriptor){var connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _this=this;null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((function(){_this.__resizeObserver_tids[propertyKey]&&clearTimeout(_this.__resizeObserver_tids[propertyKey]),_this.__resizeObserver_tids[propertyKey]=setTimeout((function(){var _a;null==(_a=descriptor.value)||_a.call(_this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}__webpack_require__.d(__webpack_exports__,{b:()=>resizeObserver})},"./libs/react/src/lib/filter-chips/filter-chips.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>FilterChip,s:()=>FilterChips});var _t,_t2,react=__webpack_require__("./node_modules/react/index.js"),_lit_react=__webpack_require__("./node_modules/@lit/react/index.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_VHN4JEZC=__webpack_require__("./dist/libs/core/src/chunks/chunk.VHN4JEZC.js"),chunk_C3ECHGX7=__webpack_require__("./dist/libs/core/src/chunks/chunk.C3ECHGX7.js"),chunk_JIIVJ7QV=__webpack_require__("./dist/libs/core/src/chunks/chunk.JIIVJ7QV.js"),chunk_2WO4NHJ2=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),_=function _(t){return t};function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var _handleChipClick,_collapseThreshold,_collapsedAt,_getChipHeight,getChipHeight_fn,_handleSlotChange,handleSlotChange_fn,styles=(0,lit.AH)(_t||(_t=_`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
      max-width: 100%;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .collapse {
      overflow: auto;
      scroll-snap-type: both mandatory;
      overscroll-behavior-x: contain;
      flex-wrap: nowrap;
      padding-bottom: 0.5rem;
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      scrollbar-width: thin;
    }

    ::slotted(*) {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`)),GdsFilterChips=function(_GdsFormControlElemen){function GdsFilterChips(){var _this;return(0,classCallCheck.A)(this,GdsFilterChips),_this=_callSuper(this,GdsFilterChips,arguments),(0,chunk_5VURDMKE.VK)(_this,_getChipHeight),(0,chunk_5VURDMKE.VK)(_this,_handleSlotChange),_this.multiple=!1,_this.label="",_this.rowCollapse=!1,_this._collapsed=!1,(0,chunk_5VURDMKE.VK)(_this,_handleChipClick,(function(event){var clickedChip=_this.chips.find((function(s){return s===event.target||s.contains(event.target)}));clickedChip&&(_this.multiple&&Array.isArray(_this.value)?clickedChip.selected?_this.value=_this.value.filter((function(v){return v!==clickedChip.value})):_this.value=[].concat((0,toConsumableArray.A)(_this.value),[clickedChip.value]):_this.value=clickedChip.value,_this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip,value:_this.value},bubbles:!0,composed:!0})))})),(0,chunk_5VURDMKE.VK)(_this,_collapseThreshold,3),(0,chunk_5VURDMKE.VK)(_this,_collapsedAt,0),_this}return(0,inherits.A)(GdsFilterChips,_GdsFormControlElemen),(0,createClass.A)(GdsFilterChips,[{key:"chips",get:function get(){return this._elSlot?this._elSlot.assignedElements():[]}},{key:"render",value:function render(){var layoutClasses={collapse:this._collapsed};return(0,chunk_VOYMQ322.qy)(_t2||(_t2=_`<div
      class="chips ${0}"
      role="listbox"
      aria-label=${0}
      aria-multiselectable=${0}
    >
      <slot
        gds-allow="gds-filter-chip"
        @click=${0}
        @slotchange=${0}
        role="none"
      ></slot>
    </div>`),(0,class_map.H)(layoutClasses),this.label,this.multiple,(0,chunk_5VURDMKE.S7)(this,_handleChipClick),(0,chunk_5VURDMKE.jq)(this,_handleSlotChange,handleSlotChange_fn))}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this}},{key:"_handleResize",value:function _handleResize(){if(this.rowCollapse){var chipHeight=(0,chunk_5VURDMKE.jq)(this,_getChipHeight,getChipHeight_fn).call(this),selfHeight=this.offsetHeight,selfWidth=this.offsetWidth;selfHeight>=chipHeight*(0,chunk_5VURDMKE.S7)(this,_collapseThreshold)&&(this._collapsed=!0,(0,chunk_5VURDMKE.OV)(this,_collapsedAt,selfWidth)),selfWidth>(0,chunk_5VURDMKE.S7)(this,_collapsedAt)&&(this._collapsed=!1)}}},{key:"_updateSelectedFromValue",value:function _updateSelectedFromValue(){var _this2=this;this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then((function(){_this2.chips.forEach((function(chip){chip.selected=_this2.multiple?_this2.value.includes(chip.value):_this2.value===chip.value}))})))}}])}(chunk_JIIVJ7QV.S);_handleChipClick=new WeakMap,_collapseThreshold=new WeakMap,_collapsedAt=new WeakMap,_getChipHeight=new WeakSet,getChipHeight_fn=function getChipHeight_fn(){var _a;return(null==(_a=this.chips[0])?void 0:_a.offsetHeight)||0},_handleSlotChange=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _a,selChipValue=null==(_a=this.chips.find((function(s){return s.selected})))?void 0:_a.value;selChipValue&&(this.value=selChipValue)},GdsFilterChips.styles=[styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.xj})],GdsFilterChips.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFilterChips.prototype,"multiple",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChips.prototype,"label",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"row-collapse"})],GdsFilterChips.prototype,"rowCollapse",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsFilterChips.prototype,"_collapsed",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("slot")],GdsFilterChips.prototype,"_elSlot",2),(0,chunk_5VURDMKE.Cc)([(0,chunk_VHN4JEZC.b)()],GdsFilterChips.prototype,"_handleResize",1),(0,chunk_5VURDMKE.Cc)([(0,chunk_2WO4NHJ2.w)("value")],GdsFilterChips.prototype,"_updateSelectedFromValue",1),GdsFilterChips=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chips")],GdsFilterChips);var chunk_FSOBWY2F_t,chunk_FSOBWY2F_t2,get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),chunk_CWRLA7VT=__webpack_require__("./dist/libs/core/src/chunks/chunk.CWRLA7VT.js"),chunk_VDIB4JW2=__webpack_require__("./dist/libs/core/src/chunks/chunk.VDIB4JW2.js"),chunk_FSOBWY2F_=function _(t){return t};function chunk_FSOBWY2F_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,chunk_FSOBWY2F_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function chunk_FSOBWY2F_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_FSOBWY2F_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var chunk_FSOBWY2F_styles=(0,lit.AH)(chunk_FSOBWY2F_t||(chunk_FSOBWY2F_t=chunk_FSOBWY2F_`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`)),GdsFilterChip=function(_GdsElement){function GdsFilterChip(){var _this;return(0,classCallCheck.A)(this,GdsFilterChip),(_this=chunk_FSOBWY2F_callSuper(this,GdsFilterChip,arguments)).selected=!1,_this}return(0,inherits.A)(GdsFilterChip,_GdsElement),(0,createClass.A)(GdsFilterChip,[{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,e,o,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),e,o);return 2&r&&"function"==typeof p?function(t){return p.apply(o,t)}:p}(GdsFilterChip,"connectedCallback",this,3)([]),this.setAttribute("role","none"),chunk_CWRLA7VT.nD.instance.apply(this,"gds-filter-chip"),this._button.then((function(btn){chunk_CWRLA7VT.nD.instance.apply(btn,"gds-button")}))}},{key:"render",value:function render(){var btnClasses={"btn-p":!this.selected};return(0,chunk_VOYMQ322.qy)(chunk_FSOBWY2F_t2||(chunk_FSOBWY2F_t2=chunk_FSOBWY2F_`<gds-button
      class="btn"
      size="small"
      .rank=${0}
      variant=${0}
      gds-role="option"
      gds-aria-selected=${0}
    >
      <span class=${0}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${0}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`),this.selected?"primary":"secondary",this._isUsingTransitionalStyles?"ghost":"default",this.selected,(0,class_map.H)(btnClasses),this.selected?"contents":"none")}}])}(chunk_VDIB4JW2.j);GdsFilterChip.styles=[chunk_FSOBWY2F_styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({reflect:!0,type:Boolean})],GdsFilterChip.prototype,"selected",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChip.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)((0,chunk_VOYMQ322.Eq)("gds-button"))],GdsFilterChip.prototype,"_button",2),GdsFilterChip=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chip")],GdsFilterChip);__webpack_require__("./dist/libs/core/src/chunks/chunk.XYSGSOAA.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.S7IZ5XPF.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.GU7PUVYO.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2AMKKLWJ.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.WNLQNOJP.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.XTXQROPP.js");var scoping=__webpack_require__("./dist/libs/core/src/scoping.js");(0,chunk_CWRLA7VT.GB)();var FilterChips=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-filter-chips"),elementClass:GdsFilterChips,react}),FilterChip=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-filter-chip"),elementClass:GdsFilterChip,react})},"./libs/react/src/lib/filter-chips/filter-chip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_filter_chips__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/filter-chips/filter-chips.ts"),_filter_chip_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/react/src/lib/filter-chips/filter-chip.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_filter_chip_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"filter-chips",children:"Filter Chips"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/seb-oss/green/tree/main/libs/react/src/lib/filter-chips",rel:"nofollow",children:"Source code"}),"\n | \n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://designlibrary.sebgroup.com/components/filter-chip",rel:"nofollow",children:"Usage guidelines"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing-the-component",children:"Importing the component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To use the component, import ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FilterChips"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FilterChip"})," like this:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import {\n  FilterChips,\n  FilterChip,\n} from \'@sebgroup/green-react/src/lib/filter-chips\'\n\n// Use as JSX element in your app\nreturn (\n  <FilterChips value="division" label="Select a filter category">\n    <FilterChip value="all">All</FilterChip>\n    <FilterChip value="top-news">Top news</FilterChip>\n    <FilterChip value="division">Division</FilterChip>\n    <FilterChip value="global">Global</FilterChip>\n    <FilterChip value="country">Country</FilterChip>\n    <FilterChip value="lcfi">\n      Large Corporate & Financial Institutions\n    </FilterChip>\n  </FilterChips>\n)\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_filter_chips__WEBPACK_IMPORTED_MODULE_2__.s,{value:"division",label:"Select a filter category",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_2__.$,{value:"all",children:"All"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_2__.$,{value:"top-news",children:"Top news"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_2__.$,{value:"division",children:"Division"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_2__.$,{value:"global",children:"Global"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_2__.$,{value:"country",children:"Country"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_2__.$,{value:"lcfi",children:"Large Corporate & Financial Institutions"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Note:"})," It is important to remember to set the label attribute. Omitting it will cause poor accessibility for screen reader useSharedState. Internally in the component, the label attribute will be used to set ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"aria-label"})," for the appropriate element."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"more-examples",children:"More examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For various examples of how to use the component, head over to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://storybook.seb.io/latest/core/?path=/story/components-filter-chips--page",rel:"nofollow",children:"Green Core storybook"})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./libs/react/src/lib/filter-chips/filter-chip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_filter_chips__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react/src/lib/filter-chips/filter-chips.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"];const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Filter Chips",component:_filter_chips__WEBPACK_IMPORTED_MODULE_0__.s};var Default={render:function Template(_ref){var children=_ref.children,props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.s,Object.assign({},props,{children}))}.bind({}),name:"Filter Chips",parameters:{componentIds:["component-filterchips"]},args:{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"all",children:"All"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"top-news",children:"Top news"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"division",children:"Division"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"global",children:"Global"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"country",children:"Country"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"lcfi",children:"Large Corporate & Financial Institutions"})]}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: \'Filter Chips\',\n  parameters: {\n    componentIds: [\'component-filterchips\']\n  },\n  args: {\n    children: [<FilterChip value="all">All</FilterChip>, <FilterChip value="top-news">Top news</FilterChip>, <FilterChip value="division">Division</FilterChip>, <FilterChip value="global">Global</FilterChip>, <FilterChip value="country">Country</FilterChip>, <FilterChip value="lcfi">\n        Large Corporate & Financial Institutions\n      </FilterChip>]\n  }\n}',...Default.parameters?.docs?.source}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
//# sourceMappingURL=lib-filter-chips-filter-chip-mdx.1fffc35c.iframe.bundle.js.map