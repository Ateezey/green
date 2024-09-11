import{x as d}from"./lit-element-2a5e401f.js";import"./container-e86e3029.js";import"./gds-element-24e794df.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-681e2422.js";import"./style-expression-property-45d22dc5.js";import"./watch-c4961afe.js";const b={title:"Docs/Layout/Container",component:"gds-container",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-container` component is a container element that can be used to wrap other components.\n\n@extends `gds-flex`"}}}},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},e={...g,name:"Container",render:p=>d` <gds-container> Container </gds-container>`},n={...g,name:"Margin",render:p=>d` <gds-container margin="auto 2xl 4xl auto">
      Container
    </gds-container>`};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Container',
  render: args => html\` <gds-container> Container </gds-container>\`
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var o,s,i,c,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Margin',
  render: args => html\` <gds-container margin="auto 2xl 4xl auto">
      Container
    </gds-container>\`
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:'The `margin` property can be used to set the margin of the container.\n\nIt supports all the spacing tokens from the design system.\nThe margin can be set in the following ways:\n- `margin="auto"`: Center aligns the container.\n- `margin="auto 2xl 4xl auto"`: Sets the margin of the container in the following order: `top`, `right`, `bottom`, `left`.',...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};const w=["Container","ContainerMargin"];export{e as Container,n as ContainerMargin,w as __namedExportsOrder,b as default};
