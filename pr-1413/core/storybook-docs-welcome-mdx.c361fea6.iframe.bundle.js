"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[5486],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(8109).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./libs/core/src/storybook-docs/welcome.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>welcome});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const READMEraw_namespaceObject="<div align=\"center\">\n<img width=\"600\" alt=\"green-core\" src=\"https://github.com/sebgroup/green/assets/11420341/5d4b25fd-0633-498c-b50f-70f07c01ac16\">\n<h1>@sebgroup/green-core</h1>\n<p>Green Core is a carefully crafted set of Web Components that lays the foundation for the Green Design System.</p>\n</div>\n\n## Install\n\n```bash\nyarn install @sebgroup/green-core\n\n# or use npm\nnpm install @sebgroup/green-core\n```\n\n## Use\n\nThere are three main ways you can use Green Core:\n\n- With Lit\n- With Angular\n- With React\n\nBut that said, the components in Green Core are just regular Web Components, so you can use them with or without any framework.\n\n### Using Lit\n\n```ts\nimport { css, customElement, LitElement } from 'lit'\n\n// This custom `html` template literal tag from Green Core extends the default `lit-html` tag to handle element version scoping.\nimport { html } from '@sebgroup/green-core/scoping'\n\n// Transitional styles applies the current 2016 design language to the components\nimport * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'\n\n// Import the components that you need\nimport '@sebgroup/green-core/components/button/index.js'\n\n@customElement('my-app')\nexport class MyApp extends LitElement {\n  static styles = css``\n\n  connectedCallback() {\n    super.connectedCallback()\n\n    // Register transitional styles to get SEB's current visual design\n    ButtonStyles.register()\n  }\n\n  render() {\n    return html`<gds-button>Click me!</gds-button>`\n  }\n}\n```\n\n### Using Angular\n\nAngular has support for using web components directly in the template. To enable it, you need to do the following:\n\nAdd the `CUSTOM_ELEMENTS_SCHEMA` in the module where you plan to use the components. It is recommended to add this as locally as possible, only on the moduls/components where you need it, and not in the app module.\n\nYou also need the `NggCoreWrapperModule` from `@sebgroup/green-angular`.\n\nIn your module:\n\n```ts\nimport { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'\nimport { NggCoreWrapperModule } from '@sebgroup/green-angular'\n\n@NgModule({\n    // Add the NggCoreWrapperModule to the `imports` array\n    imports: [NggCoreWrapperModule],\n    // Add the CUSTOM_ELEMENTS_SCHEMA to the `schemas` array\n    schemas: [CUSTOM_ELEMENTS_SCHEMA],\n})\n```\n\nIn your component:\n\n```ts\nimport '@sebgroup/green-core/components/button/index.js'\n\n// Transitional styles\nimport * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'\nButtonStyles.register()\n```\n\nUse the webcomponent in your template with the `*nggCoreElement` directive.\n\nIn your template:\n\n```html\n<gds-button *nggCoreElement>Click me!</gds-button>\n```\n\nThe `*nggCoreElement` directive comes from the `NggCoreWrapperModule` you imported above. It has the same pupose as the custom html template tag mentioned in the Lit example above: It handles custom element scoping for you.\n\n### Using React\n\nIn most cases, we already exort React wrappers for these components from the `@sebgroup/green-react` package. In those cases you can just use those. But you can also easily create your own wrappers using `@lit/react`.\n\nHere is an example:\n\n```ts\nimport React from 'react'\nimport { createComponent } from '@lit/react'\n\nimport { GdsButton } from '@sebgroup/green-core/component/button/index.js'\nimport { getScopedTagName } from '@sebgroup/green-core/scoping'\n\nimport * as ButtonStyles from '@sebgroup/green-core/components/button/button.trans.styles.js'\nButtonStyles.register()\n\nexport const Button = createComponent({\n  tagName: getScopedTagName('gds-button'),\n  elementClass: GdsButton,\n  react: React,\n  events: { onClick: 'click' }, // Event callbacks need to be explicitly mapped to DOM events\n})\n```\n\nThen you can just use `<Button />` like a regular React component.\n\n## Documentation\n\nCheck out the [Storybook (@sebgroup/core)](https://storybook.seb.io/latest/core/) for components and documentation.\n";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Welcome"}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:READMEraw_namespaceObject})]})}const welcome=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{var m=__webpack_require__("./node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot}}]);