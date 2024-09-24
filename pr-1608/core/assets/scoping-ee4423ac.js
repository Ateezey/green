import{j as e}from"./jsx-runtime-699919f7.js";import{u as s}from"./index-33e4672c.js";import"./chunk-HLWAVYOI-49f4ba0d.js";import{ae as i}from"./index-88ddbd6f.js";import"./iframe-ab6158e8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-65ec3394.js";import"./index-356e4a49.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Concepts/Scoping"}),`
`,e.jsx(t.h1,{id:"custom-element-scoping",children:"Custom element scoping"}),`
`,e.jsxs(t.p,{children:[`A problem with the current state of the Custom Elements standard is that there is
only a single, global, `,e.jsx(t.code,{children:"CustomElementRegistry"}),`. This means that if you have two different
libraries, or two different versions of the same library, that both define a custom
element with the same name, only one of them will get registered, and the other will
throw an error, since the name was already taken.`]}),`
`,e.jsx(t.p,{children:`This is a problem for Green, because we need it to work well in a micro-frontend
architecture, where multiple apps can be loaded on the same page, and each app can
potentially have its own version of Green.`}),`
`,e.jsx(t.p,{children:`There is a (proposal)[https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Scoped-Custom-Element-Registries.md]
for enabling user instantiated CustomElementRegistry scoped to a ShadowRoot, but as of
mid 2023 this is still only available in Chrome canary behind experimental flags.`}),`
`,e.jsx(t.h2,{id:"solution",children:"Solution"}),`
`,e.jsx(t.p,{children:"To get around the problem we define our own scoping mechanism. It works like this:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[`Green Core has its own lookup table of custom elements, and a suffix is added to the
name of each custom element. For example, `,e.jsx(t.code,{children:"gds-popover"})," becomes ",e.jsx(t.code,{children:"gds-popover-<versionstring>"}),`.
The version string is deterministically generated by hasing the source code in the current
version of Green Core package.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["We also define a new ",e.jsx(t.code,{children:"customElement"}),` decorator that will be used to register custom
elements. `,e.jsx(t.code,{children:"@gdsCustomElement"}),` will automatically add the version suffix to the name of
the custom element, and register it in the lookup table. If the custom element is already
registered, it will abort silently, with the assumption that the custom element was
already registered by the same version of Green Core and is therefor compatible. This should
also make it possible to combine this with module federation at some point, allowing apps
that share a version of a component to reuse the same code instance.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["We also have a custom ",e.jsx(t.code,{children:"html"}),` template tag that will automatically rewrite all custom
element names from the lookup table to include the version suffix, before passing the
template on to the Lit `,e.jsx(t.code,{children:"html"}),` tag. Alternatively, a template tag factory can be used
to create a custom `,e.jsx(t.code,{children:"html"})," tag, if Lit is not used by the consumer."]}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"caveats",children:"Caveats"}),`
`,e.jsxs(t.p,{children:[`Consumers using top-level components from Green Core will have to add the version suffix
in some way. The React and Angular wrappers takes care of this automatically. Another way
is to use the `,e.jsx(t.code,{children:"html"}),` template tag or template tag factory from Green Core, but it will only
work if the consumer is using javascript template literals.`]}),`
`,e.jsx(t.p,{children:`If the consumer is using hard coded HTML, or a templating language that does not support
template tags, the consumer will have to manually add the version suffix to the custom
element names, which would be cumbersome. In this edge-case, the scoping feature can be disabled,
and the consumer will have to make sure that only a single version of Green Core is used
on the page.`}),`
`,e.jsxs(t.p,{children:[`The recommendation is to only consume Green Core though the React or Angular wrappers, or to
use the `,e.jsx(t.code,{children:"html"})," template tag or template tag factory from Green Core."]}),`
`,e.jsx(t.p,{children:`At some point in the future, when the scoped custom element registry proposal has been
implemented in all major browsers, we might remove this custom scoping mechanism and
switch to using native scoped registries instead.`})]})}function g(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{g as default};
