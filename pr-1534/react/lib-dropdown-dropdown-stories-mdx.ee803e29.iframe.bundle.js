/*! For license information please see lib-dropdown-dropdown-stories-mdx.ee803e29.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[6854],{"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/lit/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{OA:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.OA,WL:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.WL,u$:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.u$});var lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js")},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>o});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js");const o=o=>o??lit_html.s6},"./node_modules/lit/directives/ref.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>e,K:()=>n});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js"),async_directive=__webpack_require__("./node_modules/lit/node_modules/lit-html/async-directive.js"),directive=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js");const e=()=>new h;class h{}const o=new WeakMap,n=(0,directive.u$)(class extends async_directive.Kq{render(i){return lit_html.s6}update(i,[s]){const e=s!==this.Y;return e&&void 0!==this.Y&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),lit_html.s6}rt(t){if("function"==typeof this.Y){const i=this.ht??globalThis;let s=o.get(i);void 0===s&&(s=new WeakMap,o.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?o.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},"./node_modules/lit/html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s6:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.s6});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js")},"./node_modules/lit/node_modules/lit-html/async-directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Kq:()=>f});var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive-helpers.js"),_directive_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js");const s=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),s(i,t);return!0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c(t)}};function h(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i}function n(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o(r[i]);else null!=r&&(s(r,!1),o(r));else s(this,i)}const c=i=>{i.type==_directive_js__WEBPACK_IMPORTED_MODULE_1__.OA.CHILD&&(i._$AP??=n,i._$AQ??=h)};class f extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s(this,i),o(this))}setValue(t){if((0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}},"./node_modules/lit/node_modules/lit-html/directive-helpers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Dx:()=>r,KO:()=>h,Rt:()=>f,cN:()=>p,lx:()=>v,mY:()=>m,sO:()=>i});var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js");const{I:t}=_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.ge,i=o=>null===o||"object"!=typeof o&&"function"!=typeof o,f=o=>void 0===o.strings,s=()=>document.createComment(""),r=(o,i,n)=>{const e=o._$AA.parentNode,l=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=e.insertBefore(s(),l),c=e.insertBefore(s(),l);n=new t(i,c,o,o.options)}else{const t=n._$AB.nextSibling,i=n._$AM,c=i!==o;if(c){let t;n._$AQ?.(o),n._$AM=o,void 0!==n._$AP&&(t=o._$AU)!==i._$AU&&n._$AP(t)}if(t!==l||c){let o=n._$AA;for(;o!==t;){const t=o.nextSibling;e.insertBefore(o,l),o=t}}}return n},v=(o,t,i=o)=>(o._$AI(t,i),o),u={},m=(o,t=u)=>o._$AH=t,p=o=>o._$AH,h=o=>{o._$AP?.(!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}}},"./node_modules/lit/node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./node_modules/lit/static-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>n,eu:()=>s});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js");const e=Symbol.for(""),o=t=>{if(t?.r===e)return t?._$litStatic$},s=(t,...r)=>({_$litStatic$:r.reduce(((r,e,o)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[o+1]),t[0]),r:e}),a=new Map,l=t=>(r,...e)=>{const i=e.length;let s,l;const n=[],u=[];let c,$=0,f=!1;for(;$<i;){for(c=r[$];$<i&&void 0!==(l=e[$],s=o(l));)c+=s+r[++$],f=!0;$!==i&&u.push(l),n.push(c),$++}if($===i&&n.push(r[i]),f){const t=n.join("$$lit$$");void 0===(r=a.get(t))&&(n.raw=n,a.set(t,r=n)),e=u}return t(r,...e)},n=l(lit_html.qy);l(lit_html.JW)},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(9675).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./libs/react/src/lib/dropdown/dropdown.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,dropdown:()=>dropdown});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_dropdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/dropdown/dropdown.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({align,...props})=>{const _components=Object.assign({div:"div"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{style:{paddingBottom:"150px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{...props})})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Dropdown",component:_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"dropdown",children:"Dropdown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Dropdown Component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Dropdown",parameters:{componentIds:["component-dropdown"]},args:{options:[{label:"Select",value:null},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],label:"Dropdown label",multiSelect:!1,searchable:!1,texts:{selected:"selected",placeholder:"Select",close:"Close",optionsDescription:"Options"},onChange:value=>{console.log("OnChange",value)},label:"Dropdown label",syncPopoverWidth:!1},children:Template.bind({})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"options",children:"Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"The dropdown options should be provided as an array of objects with label and value. When a user chooses an option the value will be selected and emitted to onChange."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-typescript",children:"const options = [\n  { label: 'Select', value: null },\n  { label: 'Tacos', value: 'tacos' },\n  { label: 'Pizza', value: 'pizza' },\n  { label: 'Sushi', value: 'sushi' },\n]\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Set the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"value"})," prop to set the selected option/options. In multiple select mode, the value should be an array of values."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"By default, the dropdown will look for a label and value pair for the data. The following inputs can be set to alter the options if neccesary."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oz,{children:"\n| Input (attribute) | Description                                                          | Default |\n| :---------------- | :------------------------------------------------------------------- | :------ |\n| useValue          | Which key to use as value.                                           | `value` |\n| display           | Which key to use as display value when selected and in options list. | `label` |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"value-object",children:"Value Object"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Dropdown option values can even be an object, but note that it requires a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"compareWith"})," function to uniquely identify each object. Eg:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div style={{ height: "200px" }}><Dropdown label="Complex values" options={[{ label: "Tacos", value: { id: "tacos", kitchen: "mexican" } }, { label: "Pizza", value: { id: "pizza", kitchen: "italian" } }, { label: "Sushi", value: { id: "sushi", kitchen: "japanese" } }]} compareWith={(meal1, meal2) => meal1.id === meal2.id} onChange={value => console.log("OnChange", value)} /></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{label:"Complex values",options:[{label:"Tacos",value:{id:"tacos",kitchen:"mexican"}},{label:"Pizza",value:{id:"pizza",kitchen:"italian"}},{label:"Sushi",value:{id:"sushi",kitchen:"japanese"}}],compareWith:(meal1,meal2)=>meal1.id===meal2.id,onChange:value=>console.log("OnChange",value)})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"texts-and-placeholder",children:"Texts and placeholder"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Custom texts can be set using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"texts"})," prop which takes an object with the following keys:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oz,{children:"\n| Key           | Type     | Description                                 |\n| :------------ | :------- | :------------------------------------------ |\n| `placeholder` | `string` | Text to display when no option is selected. |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div style={{ height: "200px" }}><Dropdown label="Awesome label!!" informationLabel="Awesome informationLabel!!" texts={{ placeholder: "Select me please!" }} options={[{ label: "Tacos", value: { id: "tacos", kitchen: "mexican" } }, { label: "Pizza", value: { id: "pizza", kitchen: "italian" } }, { label: "Sushi", value: { id: "sushi", kitchen: "japanese" } }]} compareWith={(meal1, meal2) => meal1.id === meal2.id} onChange={value => console.log("OnChange", value)} /></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{label:"Awesome label!!",informationLabel:"Awesome informationLabel!!",texts:{placeholder:"Select me please!"},options:[{label:"Tacos",value:{id:"tacos",kitchen:"mexican"}},{label:"Pizza",value:{id:"pizza",kitchen:"italian"}},{label:"Sushi",value:{id:"sushi",kitchen:"japanese"}}],compareWith:(meal1,meal2)=>meal1.id===meal2.id,onChange:value=>console.log("OnChange",value)})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"option-headings",children:"Option headings"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["You can add an option heading by adding the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"heading"})," property to the to the option object and set it to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<Dropdown label="Option headings" options={[{ label: "Lunch", heading: true }, { label: "Tacos", value: "tacos" }, { label: "Pizza", value: "pizza" }, { label: "Sushi", value: "sushi" }, { label: "Dinner", heading: true }, { label: "Burger", value: "burger" }, { label: "Pasta", value: "pasta" }, { label: "Ramen", value: "ramen" }]} />',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{label:"Option headings",options:[{label:"Lunch",heading:!0},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"},{label:"Dinner",heading:!0},{label:"Burger",value:"burger"},{label:"Pasta",value:"pasta"},{label:"Ramen",value:"ramen"}]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"multi-select",children:"Multi select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div style={{ height: "200px" }}><Dropdown label="Multi select" multiSelect options={[{ label: "Tacos", value: "tacos" }, { label: "Pizza", value: "pizza" }, { label: "Sushi", value: "sushi" }]} onChange={value => console.log("OnChange", value)} /></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{label:"Multi select",multiSelect:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],onChange:value=>console.log("OnChange",value)})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"small-dropdown",children:"Small dropdown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Size can be controlled using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"size"})," prop. The default size is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"medium"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Optionally, the label can also be hidden using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"hideLabel"})," prop."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div style={{ height: "200px" }}><Dropdown label="Small dropdown" size="small" hideLabel options={[{ label: "Tacos", value: "tacos" }, { label: "Pizza", value: "pizza" }, { label: "Sushi", value: "sushi" }]} onChange={value => console.log("OnChange", value)} /></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{label:"Small dropdown",size:"small",hideLabel:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],onChange:value=>console.log("OnChange",value)})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"available-props",children:"Available props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.uY,{of:_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms})]})}const dropdown=Template.bind({});dropdown.storyName="Dropdown",dropdown.args={options:[{label:"Select",value:null},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],label:"Dropdown label",multiSelect:!1,searchable:!1,texts:{selected:"selected",placeholder:"Select",close:"Close",optionsDescription:"Options"},onChange:value=>{console.log("OnChange",value)},label:"Dropdown label",syncPopoverWidth:!1},dropdown.parameters={storySource:{source:'({\n  align,\n  ...props\n}) => <div style={{\n  paddingBottom: "150px"\n}}>\n    <Dropdown {...props}></Dropdown>\n  </div>'},componentIds:["component-dropdown"]};const componentMeta={title:"Components/Dropdown",component:_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,tags:["stories-mdx"],includeStories:["dropdown"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","dropdown"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);