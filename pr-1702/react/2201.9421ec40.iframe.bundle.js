/*! For license information please see 2201.9421ec40.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2201],{"./node_modules/lit-html/async-directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kq:()=>f});var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/directive-helpers.js"),_directive_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit-html/directive.js");const s=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),s(i,t);return!0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c(t)}};function h(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i}function n(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o(r[i]);else null!=r&&(s(r,!1),o(r));else s(this,i)}const c=i=>{i.type==_directive_js__WEBPACK_IMPORTED_MODULE_1__.OA.CHILD&&(i._$AP??=n,i._$AQ??=h)};class f extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s(this,i),o(this))}setValue(t){if((0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}},"./node_modules/lit-html/directive-helpers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>r,KO:()=>M,Rt:()=>f,cN:()=>p,lx:()=>v,mY:()=>m,sO:()=>i});var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const{I:t}=_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.ge,i=o=>null===o||"object"!=typeof o&&"function"!=typeof o,f=o=>void 0===o.strings,s=()=>document.createComment(""),r=(o,i,n)=>{const e=o._$AA.parentNode,l=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=e.insertBefore(s(),l),c=e.insertBefore(s(),l);n=new t(i,c,o,o.options)}else{const t=n._$AB.nextSibling,i=n._$AM,c=i!==o;if(c){let t;n._$AQ?.(o),n._$AM=o,void 0!==n._$AP&&(t=o._$AU)!==i._$AU&&n._$AP(t)}if(t!==l||c){let o=n._$AA;for(;o!==t;){const t=o.nextSibling;e.insertBefore(o,l),o=t}}}return n},v=(o,t,i=o)=>(o._$AI(t,i),o),u={},m=(o,t=u)=>o._$AH=t,p=o=>o._$AH,M=o=>{o._$AP?.(!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}}},"./node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./node_modules/lit/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OA:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.OA,WL:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.WL,u$:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.u$});var lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/directive.js")},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const o=o=>o??lit_html.s6},"./node_modules/lit/directives/ref.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>e,K:()=>n});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),async_directive=__webpack_require__("./node_modules/lit-html/async-directive.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");const e=()=>new h;class h{}const o=new WeakMap,n=(0,directive.u$)(class extends async_directive.Kq{render(i){return lit_html.s6}update(i,[s]){const e=s!==this.Y;return e&&void 0!==this.Y&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),lit_html.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const i=this.ht??globalThis;let s=o.get(i);void 0===s&&(s=new WeakMap,o.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?o.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},"./node_modules/lit/html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s6:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.s6});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js")},"./node_modules/lit/static-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>u,eu:()=>i});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const a=Symbol.for(""),o=t=>{if(t?.r===a)return t?._$litStatic$},i=(t,...r)=>({_$litStatic$:r.reduce(((r,e,a)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[a+1]),t[0]),r:a}),l=new Map,n=t=>(r,...e)=>{const a=e.length;let s,i;const n=[],u=[];let c,$=0,f=!1;for(;$<a;){for(c=r[$];$<a&&void 0!==(i=e[$],s=o(i));)c+=s+r[++$],f=!0;$!==a&&u.push(i),n.push(c),$++}if($===a&&n.push(r[a]),f){const t=n.join("$$lit$$");void 0===(r=l.get(t))&&(n.raw=n,l.set(t,r=n)),e=u}return t(r,...e)},u=n(lit_html.qy);n(lit_html.JW),n(lit_html.ej)},"./libs/react/src/lib/dropdown/dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ms:()=>Dropdown});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/@lit/react/index.js"),chunk_SMLF6CCS=(__webpack_require__("./dist/libs/core/src/chunks/chunk.AR3CTTGT.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.SMLF6CCS.js")),chunk_HXWFBNFT=(__webpack_require__("./dist/libs/core/src/chunks/chunk.6PPF5JGW.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.HXWFBNFT.js")),scoping=(__webpack_require__("./dist/libs/core/src/chunks/chunk.5X24Z24C.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.FUY5PSA3.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.MIY5GV6X.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.27E4EAEK.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.OX3LMJ5T.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.KHBQF3ZP.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.3M4TJLMO.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.ZZGUHY3S.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.BDHHYXCM.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.4QBM6OTS.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.X7GD7UEM.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.TQCUATGL.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.HKNJKEKI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.WIZDAKJ5.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.JY3EKAVI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.MLXMQIEV.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),__webpack_require__("./dist/libs/core/src/scoping.js")),transitional_styles=__webpack_require__("./dist/libs/core/src/transitional-styles.js"),node_modules_react=__webpack_require__("./node_modules/react/index.js"),context_menu=__webpack_require__("./libs/react/src/lib/context-menu/context-menu.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["compareWith","display","id","informationLabel","label","multiSelect","onChange","options","searchFilter","searchable","texts","useValue","validator","value","syncPopoverWidth","disableMobileStyles"];(0,transitional_styles.Y)();var CoreDropdown=(0,react.a)({tagName:(0,scoping.Eq)("gds-dropdown"),elementClass:chunk_SMLF6CCS.E,events:{onchange:"change"},react:node_modules_react}),CoreOption=(0,react.a)({tagName:(0,scoping.Eq)("gds-option"),elementClass:chunk_HXWFBNFT.Y,react:node_modules_react}),Dropdown=function Dropdown(_ref){var compareWith=_ref.compareWith,_ref$display=_ref.display,display=void 0===_ref$display?"label":_ref$display,id=_ref.id,informationLabel=_ref.informationLabel,label=_ref.label,multiSelect=_ref.multiSelect,onChange=_ref.onChange,options=_ref.options,searchFilter=_ref.searchFilter,searchable=_ref.searchable,texts=_ref.texts,_ref$useValue=_ref.useValue,useValue=void 0===_ref$useValue?"value":_ref$useValue,validator=_ref.validator,value=_ref.value,syncPopoverWidth=_ref.syncPopoverWidth,disableMobileStyles=_ref.disableMobileStyles,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,jsx_runtime.jsx)("div",{className:"form-group",children:(0,jsx_runtime.jsxs)(CoreDropdown,{id,label,searchable,multiple:multiSelect,onchange:function handleOnChange(e){"value"in e.detail&&(null==onChange||onChange(e.detail.value))},invalid:"error"===(null==validator?void 0:validator.indicator),compareWith:function compareWithAdapter(o1,o2){return(compareWith||function(a,b){return a===b})(o1,o2)},value,searchFilter:function searchFilterAdapter(q,o){return searchFilter?searchFilter(q,o.value[useValue]):function(q,o){return o.innerHTML.toLowerCase().includes(q.toLowerCase())}(q,o)},syncPopoverWidth,size:props.size,hideLabel:props.hideLabel,maxHeight:props.maxHeight,disableMobileStyles,children:[informationLabel&&(0,jsx_runtime.jsx)("span",{slot:"sub-label",children:informationLabel}),validator&&(0,jsx_runtime.jsx)("span",{slot:"message",children:validator.message}),(0,jsx_runtime.jsx)(CoreOption,{isPlaceholder:!0,"aria-hidden":!0,children:(null==texts?void 0:texts.placeholder)||"Select"}),options.map((function(option){return option.heading?(0,jsx_runtime.jsx)(context_menu.hM,{children:option[display]},option.label):(0,jsx_runtime.jsx)(CoreOption,{value:option[useValue],children:option[display]},option[useValue])}))]})})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{compareWith:{required:!1,tsType:{name:"signature",type:"function",raw:"(o1: T, o2: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"o1"},{type:{name:"T"},name:"o2"}],return:{name:"boolean"}}},description:""},display:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'label'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},informationLabel:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},multiSelect:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:""},searchFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(search: string, value: T) => boolean",signature:{arguments:[{type:{name:"string"},name:"search"},{type:{name:"T"},name:"value"}],return:{name:"boolean"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},texts:{required:!1,tsType:{name:"DropdownTexts"},description:""},useValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'value'",computed:!1}},validator:{required:!1,tsType:{name:"IValidator"},description:""},value:{required:!1,tsType:{name:"any"},description:""},syncPopoverWidth:{required:!1,tsType:{name:"boolean"},description:"Force width of the popover to match trigger"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Size of the dropdown trigger"},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Hide the label"},maxHeight:{required:!1,tsType:{name:"number"},description:"Max height of the dropdown"},disableMobileStyles:{required:!1,tsType:{name:"boolean"},description:"Whether to disable the mobile styles"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""}}}},"./libs/react/src/lib/dropdown/dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,MultiSelect:()=>MultiSelect,OptionHeadings:()=>OptionHeadings,Small:()=>Small,TextAndPlaceholder:()=>TextAndPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_dropdown__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./libs/react/src/lib/dropdown/dropdown.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["align"],Template=function Template(_ref){_ref.align;var props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_1__.ms,Object.assign({},props))};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown",component:_dropdown__WEBPACK_IMPORTED_MODULE_1__.ms};var Default={render:Template.bind({}),name:"Dropdown",parameters:{componentIds:["component-dropdown"]},args:(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)({options:[{label:"Select",value:null},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],label:"Dropdown label",multiSelect:!1,searchable:!1,texts:{selected:"selected",placeholder:"Select",close:"Close",optionsDescription:"Options"},onChange:function onChange(value){console.log("OnChange",value)}},"label","Dropdown label"),"syncPopoverWidth",!1)},TextAndPlaceholder={name:"TextAndPlaceholder",render:Template.bind({}),args:{texts:{placeholder:"Select me please!"},label:"Awesome label!!",informationLabel:"Awesome informationLabel!!",options:[{label:"Tacos",value:{id:"tacos",kitchen:"mexican"}},{label:"Pizza",value:{id:"pizza",kitchen:"italian"}},{label:"Sushi",value:{id:"sushi",kitchen:"japanese"}}],compareWith:function compareWith(meal1,meal2){return meal1.id===meal2.id},onChange:function onChange(value){return console.log("OnChange",value)}}},OptionHeadings={name:"OptionHeadings",render:Template.bind({}),args:{label:"Option headings",options:[{label:"Lunch",heading:!0},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"},{label:"Dinner",heading:!0},{label:"Burger",value:"burger"},{label:"Pasta",value:"pasta"},{label:"Ramen",value:"ramen"}]}},MultiSelect={name:"MultiSelect",render:Template.bind({}),args:{label:"Multi Select",multiSelect:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}]}},Small={name:"Small",render:Template.bind({}),args:{label:"Small dropdown",size:"small",hideLabel:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}]}};const __namedExportsOrder=["Default","TextAndPlaceholder","OptionHeadings","MultiSelect","Small"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Dropdown',\n  parameters: {\n    componentIds: ['component-dropdown']\n  },\n  args: {\n    options: [{\n      label: 'Select',\n      value: null\n    }, {\n      label: 'Tacos',\n      value: 'tacos'\n    }, {\n      label: 'Pizza',\n      value: 'pizza'\n    }, {\n      label: 'Sushi',\n      value: 'sushi'\n    }],\n    label: 'Dropdown label',\n    multiSelect: false,\n    searchable: false,\n    texts: {\n      selected: 'selected',\n      placeholder: 'Select',\n      close: 'Close',\n      optionsDescription: 'Options'\n    },\n    onChange: value => {\n      console.log('OnChange', value);\n    },\n    label: 'Dropdown label',\n    syncPopoverWidth: false\n  }\n}",...Default.parameters?.docs?.source}}},TextAndPlaceholder.parameters={...TextAndPlaceholder.parameters,docs:{...TextAndPlaceholder.parameters?.docs,source:{originalSource:"{\n  name: 'TextAndPlaceholder',\n  render: Template.bind({}),\n  args: {\n    texts: {\n      placeholder: 'Select me please!'\n    },\n    label: 'Awesome label!!',\n    informationLabel: 'Awesome informationLabel!!',\n    options: [{\n      label: 'Tacos',\n      value: {\n        id: 'tacos',\n        kitchen: 'mexican'\n      }\n    }, {\n      label: 'Pizza',\n      value: {\n        id: 'pizza',\n        kitchen: 'italian'\n      }\n    }, {\n      label: 'Sushi',\n      value: {\n        id: 'sushi',\n        kitchen: 'japanese'\n      }\n    }],\n    compareWith: (meal1, meal2) => meal1.id === meal2.id,\n    onChange: value => console.log('OnChange', value)\n  }\n}",...TextAndPlaceholder.parameters?.docs?.source}}},OptionHeadings.parameters={...OptionHeadings.parameters,docs:{...OptionHeadings.parameters?.docs,source:{originalSource:"{\n  name: 'OptionHeadings',\n  render: Template.bind({}),\n  args: {\n    label: 'Option headings',\n    options: [{\n      label: 'Lunch',\n      heading: true\n    }, {\n      label: 'Tacos',\n      value: 'tacos'\n    }, {\n      label: 'Pizza',\n      value: 'pizza'\n    }, {\n      label: 'Sushi',\n      value: 'sushi'\n    }, {\n      label: 'Dinner',\n      heading: true\n    }, {\n      label: 'Burger',\n      value: 'burger'\n    }, {\n      label: 'Pasta',\n      value: 'pasta'\n    }, {\n      label: 'Ramen',\n      value: 'ramen'\n    }]\n  }\n}",...OptionHeadings.parameters?.docs?.source}}},MultiSelect.parameters={...MultiSelect.parameters,docs:{...MultiSelect.parameters?.docs,source:{originalSource:"{\n  name: 'MultiSelect',\n  render: Template.bind({}),\n  args: {\n    label: 'Multi Select',\n    multiSelect: true,\n    options: [{\n      label: 'Tacos',\n      value: 'tacos'\n    }, {\n      label: 'Pizza',\n      value: 'pizza'\n    }, {\n      label: 'Sushi',\n      value: 'sushi'\n    }]\n  }\n}",...MultiSelect.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  name: 'Small',\n  render: Template.bind({}),\n  args: {\n    label: 'Small dropdown',\n    size: 'small',\n    hideLabel: true,\n    options: [{\n      label: 'Tacos',\n      value: 'tacos'\n    }, {\n      label: 'Pizza',\n      value: 'pizza'\n    }, {\n      label: 'Sushi',\n      value: 'sushi'\n    }]\n  }\n}",...Small.parameters?.docs?.source}}}}}]);